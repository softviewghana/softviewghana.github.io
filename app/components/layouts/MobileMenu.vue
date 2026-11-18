<script setup lang="ts">
      import { ref } from 'vue';
      import BaseButton from '@/components/UI/BaseButton.vue';
      import { AlignRightIcon, ArrowRight, X } from '@lucide/vue';

      interface Link {
            label: string;
            href: string;
            title?: string;
            icon?: any;
      }

      defineProps<{
            links: Link[];
      }>();

      const open = ref(false);
</script>

<template>

      <button class="inline-flex size-10 items-center justify-center rounded-xl border-0 border-border lg:hidden"
        @click="open = !open" aria-label="Open navigation menu" type="button">
            <AlignRightIcon class="size-6" />
      </button>

      <Teleport to="#teleports">
            <Transition name="slide-in" mode="in-out">
                  <div @click.self="open = false" v-if="open" tabindex="0"
                    class="fixed inset-0 top-17.5 z-50 flex h-full w-full justify-end overflow-hidden bg-background/15 backdrop-blur-lg focus:outline-none lg:hidden">

                        <div
                          class="relative h-full w-full max-w-120 max-[480px]:border-l-0 overflow-y-auto border-l border-border bg-background/85">
                              <div class="grid grid-rows-[1fr_auto] min-h-screen">
                                    <span>
                                          <nav aria-label="Mobile navigation"
                                            class="flex flex-col gap-2 py-4 px-4 space-y-1 border-t border-border">
                                                <NuxtLink v-for="item in links" :key="item.href" :to="item.href"
                                                  class="flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-all duration-200 xl:px-3 xl:text-sm"
                                                  exact-active-class="bg-primary/90 text-white shadow-sm"
                                                  active-class="hover:bg-primary/90 text-white shadow-sm"
                                                  :class="$route.path === item.href ? '' : 'hover:bg-foreground/25 hover:text-white'"
                                                  :aria-current="$route.path === item.href ? 'page' : undefined"
                                                  @click="open = false">
                                                      <component :is="item.icon" :size="17" />
                                                      <span>{{ item.label }}</span>
                                                </NuxtLink>
                                          </nav>


                                          <div class="relative px-6 space-y-6 py-10">

                                                <BaseButton block
                                                  @click="() => { open = false; navigateTo('/contact') }">
                                                      Start a Project
                                                </BaseButton>

                                          </div>

                                    </span>
                                    <div class="relative bottom-17.5 lg:py-6 py-3">
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

</template>