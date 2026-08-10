<script setup lang="ts">
      import type { Component } from 'vue'

      interface Props {
            title: string
            value: string
            description: string
            icon: Component
      }

      defineProps<Props>()
</script>

<template>
      <article
        class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/6">
            <!-- Glow -->

            <div
              class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div class="relative z-10 flex items-start gap-4">
                  <!-- Icon -->

                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        <component :is="icon" class="size-5" />
                  </div>

                  <!-- Content -->

                  <div class="min-w-0 flex-1">
                        <p class="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                              {{ title }}
                        </p>

                        <h3 class="mt-2 text-2xl font-bold leading-none text-white">
                              {{ value }}
                        </h3>

                        <p class="mt-2 text-sm leading-6 text-white/60">
                              {{ description }}
                        </p>
                  </div>
            </div>

            <!-- Accent Line -->

            <div
              class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </article>
</template>