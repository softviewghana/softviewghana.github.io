<script setup lang="ts">
      import { ref } from 'vue';
      import BaseButton from '@/components/UI/BaseButton.vue';
      import { ArrowRight, Menu, X } from '@lucide/vue';

      interface Link {
            label: string;
            href: string;
            title?: string;
      }

      defineProps<{
            links: Link[];
      }>();

      const open = ref(false);
</script>

<template>

      <button
        class="inline-flex size-10 items-center justify-center rounded-xl border-0 border-border bg-surface-elevated lg:hidden"
        @click="open = true" aria-label="Open navigation menu" type="button">
            <Menu class="size-6" />
      </button>

      <ClientOnly>
            <Teleport to="body">
                  <Transition name="slide-in" mode="in-out">
                        <div @click.self="open = false" v-if="open" tabindex="0"
                          class="fixed inset-0 z-50 flex h-full w-full justify-end overflow-hidden bg-black/30 backdrop-blur-sm focus:outline-none lg:hidden">

                              <div
                                class="relative h-full w-full max-w-120 max-[480px]:border-l-0 overflow-y-auto border-l border-border bg-background">
                                    <div class="grid grid-rows-[1fr_auto] min-h-screen">
                                          <span>

                                                <div
                                                  class="flex flex-row items-center justify-between px-6 py-3 sticky border-b border-border/25 top-0 bg-background">
                                                      <NuxtLink to="/" @click="open = false"
                                                        aria-label="Go to homepage">
                                                            <Logo fill-color="var(--color-primary)" />
                                                      </NuxtLink>

                                                      <button @click="open = false" aria-label="Close navigation menu"
                                                        type="button"
                                                        class="inline-flex size-10 items-center justify-center rounded-xl border-0 border-border bg-surface-elevated">
                                                            <X class="size-6" />
                                                      </button>

                                                </div>

                                                <div class="flex flex-col gap-2 p-6">
                                                      <span v-for="link in links" :key="link.href"
                                                        class="flex flex-row justify-between items-center rounded-0 border-b border-border hover:border-primary/40">
                                                            <NuxtLink :href="link.href"
                                                              exact-active-class="text-primary"
                                                              active-class="text-primary"
                                                              class="px-4 py-3 text-sm font-semibold  hover:text-primary"
                                                              @click="open = false" :title="link.title">
                                                                  {{ link.label }}
                                                            </NuxtLink>

                                                            <ArrowRight class="size-4 text-muted" />

                                                      </span>

                                                </div>

                                                <div class="relative px-6 space-y-6 py-10">

                                                      <!-- <button
                                                        class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold"
                                                        type="button" @click="$emit('toggle-theme')">
                                                          <SunMedium v-if="theme === 'dark'" :size="16" />
                                                          <Moon v-else :size="16" />
                                                          {{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}
                                                    </button> -->

                                                      <!-- <BaseButton variant="outline" block
                                                        @click="navigateTo('https://web.eschoolghana.com/login', { external: true })">
                                                            Login
                                                      </BaseButton>

                                                      <BaseButton block
                                                        @click="navigateTo('https://web.eschoolghana.com/signup', { external: true })">
                                                            Get Started
                                                      </BaseButton> -->

                                                </div>

                                          </span>
                                          <div class="relative bottom-0 lg:py-6 py-3">
                                                <p class="text-sm text-center">
                                                      &copy; {{ new Date().getFullYear() }} eSchool Ghana. All rights
                                                      reserved.
                                                </p>
                                          </div>

                                    </div>
                              </div>

                        </div>

                  </Transition>
            </Teleport>
      </ClientOnly>

</template>