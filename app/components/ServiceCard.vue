<script setup lang="ts">
      import type { Component } from 'vue'
      import { ArrowRight } from '@lucide/vue'

      interface Props {
            title: string
            description: string
            features: string[]
            icon: Component
            href?: string
      }

      defineProps<Props>()
</script>

<template>
      <article
        class="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:bg-white/[0.07]">
            <!-- Icon -->

            <div class="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <div
                    class="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <component :is="icon" class="relative z-10 size-8 text-primary" />
            </div>

            <!-- Title -->

            <h3 class="text-2xl font-semibold text-white">
                  {{ title }}
            </h3>

            <!-- Description -->

            <p class="mt-4 leading-7 text-white/60">
                  {{ description }}
            </p>

            <!-- Feature Chips -->

            <div class="mt-8 flex flex-wrap gap-2">
                  <span v-for="feature in features" :key="feature"
                    class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                        {{ feature }}
                  </span>
            </div>

            <div class="mt-auto pt-10">
                  <NuxtLink :to="href"
                    class="inline-flex items-center gap-2 font-medium text-primary transition-all duration-300 group-hover:gap-3">
                        Learn More

                        <ArrowRight class="size-4" />
                  </NuxtLink>
            </div>

      </article>
</template>