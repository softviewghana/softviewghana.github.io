<script lang="ts" setup>
      import CONSTANTS from '~/constants/index.ts';
      import MobileMenu from './MobileMenu.vue';

      const links = [
            {
                  label: 'About',
                  href: '/about',
                  title: '',
            }, {
                  label: 'Services',
                  href: '/services',
                  title: '',
            }, {
                  label: 'Industries',
                  href: '/industries',
                  title: '',
            }, {
                  label: 'Products',
                  href: '/products',
                  title: '',
            }, {
                  label: 'Insights',
                  href: '/insights',
                  title: '',
            }, {
                  label: 'Contact',
                  href: '/contact',
                  title: '',
            },
      ];

</script>

<template>
      <header class="fixed top-0 inset-x-0 z-50">
            <div class="w-full rounded-0 border-b border-border bg-background/45 backdrop-blur-xl">
                  <nav class="flex items-center justify-between  px-4 py-2.5 md:px-6 max-w-7xl mx-auto">
                        <NuxtLink active-class="" exact-active-class="" :to="{ name: 'index' }"
                          class="flex items-center gap-3">
                              <Logo fill-color="var(--brand)" />
                              <span class="text-primary font-semibold">
                                    {{ CONSTANTS.APP_NAME }}
                              </span>
                        </NuxtLink>
                        <div class="hidden items-center gap-7 lg:flex">
                              <NuxtLink exact-active-class="text-primary" active-class="text-primary-hover"
                                v-for="link in links" :key="link.href" :href="link.href" :title="link.title"
                                class="text-sm font-semibold hover:text-primary transition">
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