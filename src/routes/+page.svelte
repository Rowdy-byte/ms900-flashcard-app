<script lang="ts">
  import { flashcards, type Flashcard } from '$lib/data/flashcards';
  import { objectives, type LearningObjective } from '$lib/data/objectives';

  const totalCards = flashcards.length;
  const totalObjectives = objectives.length;

  const objectiveLookup = objectives.reduce<Record<string, LearningObjective>>((acc, objective) => {
    acc[objective.id] = objective;
    return acc;
  }, {});

  const moduleGroups: Array<{ name: string; objectives: LearningObjective[] }> = [];
  const moduleMap = new Map<string, LearningObjective[]>();
  for (const objective of objectives) {
    if (!moduleMap.has(objective.module)) {
      moduleMap.set(objective.module, []);
    }
    moduleMap.get(objective.module)?.push(objective);
  }
  for (const [name, items] of moduleMap) {
    moduleGroups.push({ name, objectives: items });
  }
  const moduleNames = moduleGroups.map((group) => group.name);

  let searchTerm = '';
  let moduleFilter = 'all';
  let objectiveFilter = 'all';
  let shuffleEnabled = false;
  let shuffleSeed = 0;
  let filteredCards: Flashcard[] = [...flashcards];
  let availableObjectives: LearningObjective[] = objectives;
  let currentIndex = 0;
  let currentCard: Flashcard | undefined = flashcards[0];
  let showAnswer = false;
  let knownIds = new Set<string>();
  let reviewIds = new Set<string>();
  let knownCount = 0;
  let reviewCount = 0;
  let remainingCount = totalCards;
  let lastFilterSignature = '';

  function mulberry32(seed: number) {
    let a = seed;
    return () => {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleWithSeed(list: Flashcard[], seed: number) {
    const result = [...list];
    if (result.length <= 1) return result;
    const rng = mulberry32(Math.floor(seed * 1e9) || 1);
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rng() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function randomizeSeed() {
    shuffleSeed = Math.random();
  }

  function toggleShuffle() {
    shuffleEnabled = !shuffleEnabled;
    randomizeSeed();
  }

  function reshuffle() {
    if (shuffleEnabled) {
      randomizeSeed();
    }
  }

  $: availableObjectives =
    moduleFilter === 'all'
      ? objectives
      : objectives.filter((objective) => objective.module === moduleFilter);

  $: if (moduleFilter !== 'all' && objectiveFilter !== 'all') {
    const selected = objectiveLookup[objectiveFilter];
    if (!selected || selected.module !== moduleFilter) {
      objectiveFilter = 'all';
    }
  }

  $: filteredCards = (() => {
    const term = searchTerm.trim().toLowerCase();
    const moduleObjectiveIds =
      moduleFilter === 'all' ? null : new Set(availableObjectives.map((objective) => objective.id));

    const filtered = flashcards.filter((card) => {
      if (moduleObjectiveIds && !moduleObjectiveIds.has(card.objectiveId)) {
        return false;
      }
      if (objectiveFilter !== 'all' && card.objectiveId !== objectiveFilter) {
        return false;
      }
      if (!term) {
        return true;
      }
      const objective = objectiveLookup[card.objectiveId];
      const haystack = [
        card.prompt,
        card.answer,
        card.tags.join(' '),
        objective?.title ?? '',
        objective?.module ?? ''
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });

    return shuffleEnabled ? shuffleWithSeed(filtered, shuffleSeed) : [...filtered];
  })();

  $: {
    const signature = `${moduleFilter}|${objectiveFilter}|${searchTerm}|${
      shuffleEnabled ? `shuffle-${shuffleSeed}` : 'ordered'
    }`;
    if (signature !== lastFilterSignature) {
      lastFilterSignature = signature;
      currentIndex = 0;
      showAnswer = false;
    }
  }

  $: {
    if (filteredCards.length === 0) {
      currentIndex = 0;
    } else if (currentIndex >= filteredCards.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = filteredCards.length - 1;
    }
  }

  $: currentCard = filteredCards[currentIndex];
  $: knownCount = knownIds.size;
  $: reviewCount = reviewIds.size;
  $: remainingCount = totalCards - knownCount;
  $: currentObjective = currentCard ? objectiveLookup[currentCard.objectiveId] : undefined;

  function step(delta: number) {
    if (!filteredCards.length) return;
    const nextIndex = (currentIndex + delta + filteredCards.length) % filteredCards.length;
    currentIndex = nextIndex;
    showAnswer = false;
  }

  function reveal() {
    if (!filteredCards.length) return;
    showAnswer = !showAnswer;
  }

  function mark(status: 'known' | 'review') {
    if (!currentCard) return;
    if (status === 'known') {
      const nextKnown = new Set(knownIds);
      nextKnown.add(currentCard.id);
      knownIds = nextKnown;
      if (reviewIds.has(currentCard.id)) {
        const nextReview = new Set(reviewIds);
        nextReview.delete(currentCard.id);
        reviewIds = nextReview;
      }
    } else {
      const nextReview = new Set(reviewIds);
      nextReview.add(currentCard.id);
      reviewIds = nextReview;
      if (knownIds.has(currentCard.id)) {
        const nextKnown = new Set(knownIds);
        nextKnown.delete(currentCard.id);
        knownIds = nextKnown;
      }
    }
    step(1);
  }

  function clearProgress() {
    knownIds = new Set();
    reviewIds = new Set();
    showAnswer = false;
  }

  function cardStatus(cardId: string) {
    if (knownIds.has(cardId)) return 'known';
    if (reviewIds.has(cardId)) return 'review';
    return 'new';
  }
</script>

<svelte:head>
  <title>MS-900 Flashcard Studio</title>
  <meta
    name="description"
    content="Review every MS-900 learning objective with 150 interactive flashcards built on Microsoft 365 Fundamentals content."
  />
</svelte:head>

<div class="min-h-screen bg-slate-950 text-slate-100">
  <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-12 sm:px-6 lg:px-8">
    <header class="space-y-6">
      <div class="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-slate-400">
        <span class="rounded-full bg-slate-900/70 px-3 py-1">{totalCards} flashcards</span>
        <span class="rounded-full bg-slate-900/70 px-3 py-1">{totalObjectives} objectives</span>
        <span class="rounded-full bg-slate-900/70 px-3 py-1">{knownCount} marked known</span>
        <span class="rounded-full bg-slate-900/70 px-3 py-1">{reviewCount} to review</span>
      </div>
      <div class="space-y-3">
        <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Microsoft 365 Fundamentals Flashcards
        </h1>
        <p class="max-w-3xl text-base text-slate-300 sm:text-lg">
          Drill every Microsoft Learn objective for exam MS-900. Filter by module, search across prompts
          and answers, shuffle the deck, and track the cards you have mastered or flagged for review.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <div class="h-2 w-full rounded-full bg-slate-800">
          <div
            class="h-2 rounded-full bg-emerald-500 transition-all duration-500"
            style={`width: ${Math.min((knownCount / totalCards) * 100, 100)}%`}
          ></div>
        </div>
        <div class="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <span><strong class="font-semibold text-slate-200">{knownCount}</strong> known</span>
          <span><strong class="font-semibold text-slate-200">{reviewCount}</strong> in review queue</span>
          <span><strong class="font-semibold text-slate-200">{remainingCount}</strong> remaining</span>
        </div>
      </div>
    </header>

    <section class="grid gap-4 md:grid-cols-3 md:items-start lg:grid-cols-4">
      <div class="space-y-4 md:col-span-1">
        <div class="space-y-3 rounded-3xl bg-slate-900/60 p-5 shadow-lg shadow-black/20">
          <label class="block text-sm font-medium text-slate-300">
            Search the deck
            <input
              type="search"
              class="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              placeholder="Find prompts, answers, tags, or objectives"
              bind:value={searchTerm}
            />
          </label>
          <label class="block text-sm font-medium text-slate-300">
            Filter by module
            <select
              class="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              bind:value={moduleFilter}
            >
              <option value="all">All modules</option>
              {#each moduleNames as name}
                <option value={name}>{name}</option>
              {/each}
            </select>
          </label>
          <label class="block text-sm font-medium text-slate-300">
            Focus on a specific objective
            <select
              class="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              bind:value={objectiveFilter}
            >
              <option value="all">All objectives</option>
              {#each moduleGroups as group}
                {#if moduleFilter === 'all' || moduleFilter === group.name}
                  <optgroup label={group.name}>
                    {#each group.objectives as objective}
                      <option value={objective.id}>{objective.title}</option>
                    {/each}
                  </optgroup>
                {/if}
              {/each}
            </select>
          </label>
          <div class="flex flex-wrap gap-2 pt-1 text-sm">
            <button
              type="button"
              class={`flex-1 rounded-xl border px-3 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${
                shuffleEnabled
                  ? 'border-emerald-500/70 bg-emerald-500/20 text-emerald-200'
                  : 'border-slate-800 bg-slate-950/80 text-slate-200'
              }`}
              on:click={toggleShuffle}
            >
              {shuffleEnabled ? 'Shuffle on' : 'Shuffle off'}
            </button>
            <button
              type="button"
              class="flex-1 rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 font-medium text-slate-200 transition hover:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 disabled:cursor-not-allowed disabled:opacity-40"
              on:click={reshuffle}
              disabled={!shuffleEnabled}
            >
              Reshuffle deck
            </button>
          </div>
          <button
            type="button"
            class="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-rose-400/60 hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400/60"
            on:click={clearProgress}
          >
            Reset progress trackers
          </button>
        </div>
        <div class="rounded-3xl bg-slate-900/40 p-5 text-sm text-slate-400 shadow-inner shadow-black/20">
          <h2 class="text-base font-semibold text-slate-200">Study tips</h2>
          <ul class="mt-3 space-y-2 leading-relaxed">
            <li>Mark cards you know to visualize progress toward exam readiness.</li>
            <li>Use module filters alongside search to zero in on weak areas.</li>
            <li>Reshuffle periodically to avoid memorizing card order.</li>
          </ul>
        </div>
      </div>

      <div class="md:col-span-2 lg:col-span-3">
        {#if currentCard}
          <article class="relative flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-950 p-8 shadow-xl shadow-black/30">
            <div class="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-wide text-slate-400">
              <span class="rounded-full bg-slate-900/60 px-3 py-1">
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
              <span class="rounded-full bg-slate-900/60 px-3 py-1">
                {cardStatus(currentCard.id) === 'known'
                  ? 'Marked known'
                  : cardStatus(currentCard.id) === 'review'
                    ? 'In review queue'
                    : 'New card'}
              </span>
            </div>

            <div class="mt-6 space-y-6">
              <div class="space-y-2">
                {#if currentObjective}
                  <p class="text-sm font-medium text-emerald-300/80">
                    {currentObjective.module}
                  </p>
                  <p class="text-sm text-slate-300">{currentObjective.title}</p>
                {/if}
                <h2 class="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  {currentCard.prompt}
                </h2>
              </div>

              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-300/60"
                on:click={reveal}
              >
                {showAnswer ? 'Hide answer' : 'Reveal answer'}
              </button>

              {#if showAnswer}
                <p class="rounded-3xl border border-emerald-500/30 bg-slate-950/70 px-4 py-5 text-lg leading-relaxed text-slate-100 shadow-inner shadow-black/20">
                  {currentCard.answer}
                </p>
              {/if}

              <div class="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-emerald-200/80">
                {#each currentCard.tags as tag}
                  <span class="rounded-full bg-emerald-500/10 px-3 py-1">{tag}</span>
                {/each}
              </div>
            </div>

            {#if currentObjective}
              <footer class="mt-8 space-y-4 text-sm text-slate-300">
                <p>{currentObjective.summary}</p>
                <a
                  class="inline-flex items-center gap-2 text-emerald-300 transition hover:text-emerald-200"
                  href={currentObjective.reference}
                  target="_blank"
                  rel="noreferrer"
                >
                  View module on Microsoft Learn
                  <span aria-hidden="true">→</span>
                </a>
              </footer>
            {/if}

            <div class="mt-8 flex flex-wrap items-center justify-between gap-3">
              <div class="flex gap-2">
                <button
                  type="button"
                  class="rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                  on:click={() => step(-1)}
                >
                  Previous
                </button>
                <button
                  type="button"
                  class="rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                  on:click={() => step(1)}
                >
                  Next
                </button>
              </div>
              <div class="flex flex-wrap gap-2">
                <button
                  type="button"
                  class="rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/20 focus:outline-none focus:ring-2 focus:ring-rose-300/60"
                  on:click={() => mark('review')}
                >
                  Needs review
                </button>
                <button
                  type="button"
                  class="rounded-full border border-emerald-500/40 bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-300/60"
                  on:click={() => mark('known')}
                >
                  I know this
                </button>
              </div>
            </div>
          </article>
        {:else}
          <div class="flex min-h-[28rem] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 text-center text-slate-300">
            <h2 class="text-xl font-semibold text-slate-100">No cards match the current filters</h2>
            <p class="mt-3 max-w-md text-sm text-slate-400">
              Adjust the search or module filters to bring cards back into view, or reset progress to restart the
              full deck.
            </p>
          </div>
        {/if}
      </div>
    </section>
  </div>
</div>
