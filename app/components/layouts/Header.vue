<script lang="ts" setup>
      import CONSTANTS from '~/constants/index.ts';
      import MobileMenu from './MobileMenu.vue';

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
                              links
                        </div>
                        <!-- <div class="hidden items-center gap-2.5 lg:flex">
                              actions
                        </div> -->
                        <MobileMenu :links="[]"/>
                  </nav>
            </div>
      </header>
</template>

<style scoped></style>