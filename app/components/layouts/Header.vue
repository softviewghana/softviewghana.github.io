<script lang="ts" setup>
      import CONSTANTS from '~/constants/index.ts';
      import MobileMenu from './MobileMenu.vue';

      const links = [
            {
                  label: 'About',
                  href: '/about',
                  title: '',
            },
            {
                  label: 'Services',
                  href: '/services',
                  title: '',
            },
            {
                  label: 'Industries',
                  href: '/industries',
                  title: '',
            },
            {
                  label: 'Products',
                  href: '/products',
                  title: '',
            },
            {
                  label: 'Insights',
                  href: '/insights',
                  title: '',
            },
            {
                  label: 'Contact',
                  href: '/contact',
                  title: '',
            },
      ];

</script>

<template>
      <header class="fixed top-0 inset-x-0 z-50">
            <div class="w-full border-b border-border/70 bg-background/70 backdrop-blur-2xl">
                  <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
                        <NuxtLink active-class="" exact-active-class="" :to="{ name: 'index' }"
                            class="flex items-center gap-3">
                              <Logo fill-color="white"/>
                              <span class="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                                    {{ CONSTANTS.APP_NAME }}
                              </span>
                        </NuxtLink>
                        <div class="hidden items-center gap-7 lg:flex">
                              <NuxtLink exact-active-class="text-primary" active-class="text-primary-hover"
                                  v-for="link in links" :key="link.href" :href="link.href" :title="link.title"
                                  class="text-sm font-semibold text-muted transition hover:text-primary">
                                    {{ link.label }}
                              </NuxtLink>
                        </div>
                        <div class="hidden items-center gap-3 lg:flex">
                              <NuxtLink to="/contact"
                                  class="inline-flex h-10 items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                    Start a Project
                              </NuxtLink>
                        </div>
                        <MobileMenu :links="links" />
                  </nav>
            </div>
      </header>
</template>

<style scoped></style>