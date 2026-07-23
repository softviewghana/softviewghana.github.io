<script setup lang="ts">
      import type { Component } from 'vue'

      interface Props {
            title: string
            subtitle?: string
            icon: Component

            /**
             * Tailwind class
             * Example:
             * text-primary
             * text-sky-400
             * text-emerald-400
             */
            color?: string

            /**
             * Floating animation duration
             */
            duration?: number

            /**
             * Floating animation delay
             */
            delay?: number
      }

      const props = withDefaults(defineProps<Props>(), {
            color: 'text-primary',
            duration: 7,
            delay: 0,
      })
</script>

<template>
      <div
        class="floating-card group pointer-events-none rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/10"
        :style="{
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
      }">
            <div class="flex items-center gap-3">
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110">
                        <component :is="icon" class="size-5" :class="color" />
                  </div>

                  <div>
                        <p class="text-sm font-semibold text-white">
                              {{ title }}
                        </p>

                        <p v-if="subtitle" class="text-xs text-white/45">
                              {{ subtitle }}
                        </p>
                  </div>
            </div>
      </div>
</template>

<style scoped>
      .floating-card {
            animation-name: float;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
      }

      @keyframes float {
            0% {
                  transform: translateY(0px);
            }

            50% {
                  transform: translateY(-12px);
            }

            100% {
                  transform: translateY(0px);
            }
      }
</style>