<script lang="ts" setup>
  const { theme } = useTheme();
</script>

<template>
  <ESHeader />
  <main class="relative isolate inset-0">
    <svg aria-hidden="true"
      class="absolute inset-0 -z-10 w-full h-full mask-[radial-gradient(100%_100%_at_100%_0,#fff,#0000)] stroke-slate-300 dark:stroke-white/10">
      <defs>
        <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1"
          patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <svg x="7.8%" y="-1" class="overflow-visible fill-slate-200 dark:fill-gray-800">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"></path>
      </svg>
      <rect width="100%" height="100%" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" stroke-width="0"></rect>
    </svg>
    <div aria-hidden="true"
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden hidden dark:block opacity-15 blur-xl sm:-top-80">
      <div
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5]/60 to-[#9089fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-288.75">
      </div>
    </div>
    <div aria-hidden="true"
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden md:opacity-15 blur-3xl sm:top-[calc(100%-30rem)]">
      <div
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-slate-600 dark:from-[#ff80b5]/60 dark:to-[#9089fc] to-[#4e33e2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75">
      </div>
    </div>
    <NuxtPage />
  </main>
  <GoTop />
  <ESFooter />
</template>

<style scoped></style>