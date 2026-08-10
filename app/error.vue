<script setup>
</script>

<template>
  <Header />
  <main class="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-primary">404</p>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">Page not found</h1>
      <p class="mt-6 text-lg font-medium text-pretty text-muted sm:text-xl/8">Sorry, we couldn't find the page you're
        looking for.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink :to="{ name: 'index' }"
          class="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover">
          Go back home
        </NuxtLink>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped></style>