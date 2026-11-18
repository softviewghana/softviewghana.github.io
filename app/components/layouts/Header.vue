<script lang="ts" setup>
      import CONSTANTS from '~/constants/index.ts';
      import MobileMenu from './MobileMenu.vue';
      import { StarsIcon, StarCheckIcon, CpuAiIcon, GlobeLockIcon, RssIcon, PhoneCallIcon } from '@lucide/vue';

      const links = [
            { label: 'About', href: '/about', title: '', icon:  GlobeLockIcon},
            { label: 'Services', href: '/services', title: '', icon: StarsIcon },
            { label: 'Industries', href: '/industries', title: '', icon: CpuAiIcon },
            { label: 'Products', href: '/products', title: '', icon:  StarCheckIcon},
            { label: 'Insights', href: '/insights', title: '', icon: RssIcon },
            { label: 'Contact', href: '/contact', title: '', icon: PhoneCallIcon },
      ];

</script>

<template>
      <header class="fixed top-0 inset-x-0 z-50">
            <div class="w-full rounded-0 border-b border-border bg-background/45 backdrop-blur-xl">
                  <nav class="flex items-center justify-between px-4 h-17.5 md:px-6 max-w-7xl mx-auto">
                        <NuxtLink active-class="" exact-active-class="" :to="{ name: 'index' }"
                          class="flex items-center gap-3">
                              <Logo fill-color="white" />
                              <div class="flex flex-col mt-1">
                                    <span class="font-semibold">
                                          {{ CONSTANTS.APP_NAME }}
                                    </span>
                                    <span class="text-xs text-muted">
                                          Your Trusted IT Solutions Partner
                                    </span>
                              </div>
                        </NuxtLink>
                        <nav aria-label="Main navigation" class="hidden lg:flex">
                              <div
                                class="flex items-center gap-1 rounded-2xl border border-border bg-inherit p-1 shadow-sm backdrop-blur-xl">
                                    <NuxtLink v-for="item in links" :key="item.href" :to="item.href"
                                      class="flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-medium text-muted transition-all duration-200 xl:px-3 xl:text-sm"
                                      exact-active-class="bg-primary/80 text-white shadow-sm"
                                      active-class="hover:bg-primary/80 text-white shadow-sm"
                                      :class="$route.path === item.href ? '' : 'hover:bg-foreground/25 hover:text-white'"
                                      :aria-current="$route.path === item.href ? 'page' : undefined">

                                          <component :is="item.icon" :size="15" :stroke-width="2" />
                                          <span>{{ item.label }}</span>
                                    </NuxtLink>
                              </div>
                        </nav>
                        <!-- <div class="hidden items-center gap-7 lg:flex">
                              <NuxtLink exact-active-class="text-primary" active-class="text-primary-hover"
                                v-for="link in links" :key="link.href" :href="link.href" :title="link.title"
                                class="text-sm font-semibold hover:text-primary transition">
                                    {{ link.label }}
                              </NuxtLink>
                        </div> -->
                        <div class="hidden items-center gap-3 lg:flex">
                              <NuxtLink to="/contact"
                                class="inline-flex h-10 items-center justify-center rounded-xl bg-primary/90 px-5 text-white transition hover:bg-primary-hover">
                                    Start a Project
                              </NuxtLink>
                        </div>
                        <MobileMenu :links="links" />
                  </nav>
            </div>
      </header>
</template>

<style scoped></style>