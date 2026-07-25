<script lang="ts" setup>
  // useDisableContentAccess();
</script>
<template>
  <div class="relative min-h-screen overflow-x-hidden bg-background text-foreground print:hidden">
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-70" />
    <div class="pointer-events-none absolute inset-0 bg-noise" />

    <div
      class="pointer-events-none absolute left-1/2 top-0 size-175 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

    <div class="relative grid grid-rows-[1fr_auto] min-h-screen">
      <Header />
      <main class="relative pt-6 md:pt-18">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>