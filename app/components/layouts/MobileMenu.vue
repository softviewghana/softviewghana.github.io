<script setup lang="ts">
      import { ref } from 'vue';
      import BaseButton from '@/components/UI/BaseButton.vue';
      import { AlignRightIcon, ArrowRight, X } from '@lucide/vue';
      import CONSTANTS from '~/constants';

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
            <AlignRightIcon class="size-6" />
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
                                                    class="flex flex-row items-center justify-between px-4 py-3 sticky border-b border-border/25 top-0 bg-background">
                                                      <NuxtLink to="/" @click="open = false" aria-label="Go to homepage"
                                                          class="flex items-center gap-3">
                                                            <Logo fill-color="white" />
                                                            <span
                                                                class="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                                                                  {{ CONSTANTS.APP_NAME }}
                                                            </span>
                                                      </NuxtLink>

                                                      <button @click="open = false" aria-label="Close navigation menu"
                                                          type="button"
                                                          class="inline-flex size-10 items-center justify-center rounded-xl border-0 border-border bg-surface-elevated">
                                                            <X class="size-6" />
                                                      </button>

                                                </div>

                                                <div class="flex flex-col gap-2 py-4 px-4">
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

                                                      <BaseButton block
                                                          @click="() => { open = false; navigateTo('/contact') }">
                                                            Start a Project
                                                      </BaseButton>

                                                </div>

                                          </span>
                                          <div class="relative bottom-0 lg:py-6 py-3">
                                                <p class="text-sm text-center">
                                                      &copy; {{ new Date().getFullYear() }} Softview Ghana. All rights
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