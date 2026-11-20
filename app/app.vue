<script lang="ts" setup>
  // useDisableContentAccess();
</script>
<template>
  <div class="relative overflow-x-hidden print:hidden min-h-screen text-text">

    <div class="bg-noise">
      <div class="pointer-events-none absolute inset-0 bg-grid" />

      <div class="pointer-events-none absolute left-1/2 top-0 size-275 -translate-x-1/9 rounded-full bg-primary/30 blur-[140px]" />
      <div class="pointer-events-none fixed left-1/4 top-50 size-275 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div class="relative grid grid-rows-[1fr_auto] min-h-screen">
        <Header />
        <main class="relative pt-22 md:pt-24">
          <NuxtPage />
        </main>
        <Footer />
      </div>
    </div>

  </div>
</template>

<style scoped></style>