<script lang="ts">
	import groupsJson from '../lib/groups.json';
  import type { Group } from '../types';

  function getGroups(): Promise<Group[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(groupsJson.data);
      }, 500);
    });
  }

  /**
	 * @type {Group[]}
	 */
  let groups: Group[] = []

  getGroups().then((value) => {
    groups = value
  })
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<main>
    <div class="pb-8 md:pb-28 static lg:relative z-10">
      <div class="pt-20 md:pt-24 pb-12 max-w-7xl mx-auto justify-between">
        <img
          class="w-full h-full object-cover object-center"
          src="https://assets.lapakgaming.com/lapakgaming/images/banner/202402/Ff5000-Banner.png?tr=w-1080%2Cq-75"
          alt="caption"
          width={1080}
          height={500}
          loading="eager"
          decoding="auto"
        />
        <div data-testid="home-cardgame-section" class="container mx-auto px-4 lg:px-10 py-16">
          {#each groups as group}
            <section class="mb-8 md:mb-10">
              <h2 class="text-base md:text-xl font-bold pl-4 md:pl-6 border-l-4 border-l-blue-600 mb-4 md:mb-8">{group.title}</h2>

              <div class="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-4 lg:grid-cols-6 lg:gap-6">
                {#each group.categories as game}
                  <div class="bg-white shadow rounded-lg md:rounded-2xl p-1 md:p-2 hover:shadow-lg cursor-pointer transition-all">
                    <div class="w-full h-auto bg-gray-200 rounded-lg" style="aspectRatio: 1/1;">
                      <img src={game.imagePath} alt={game.name} width={300} height={300} loading="lazy" decoding="auto" class="rounded-lg" />
                    </div>
                    <p class="text-xs md:text-sm font-semibold text-gray-600 mt-1 md:mt-2 text-center" style="min-height: 40px;">{game.name}</p>
                  </div>
                {/each}
              </div>
            </section>
          {/each}
        </div>
      </div>
    </div>
  </main>
</section>

<style>

</style>
