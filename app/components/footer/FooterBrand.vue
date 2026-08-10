<script setup lang="ts">
      import {
            ArrowRight,
            CheckCircle2,
      } from '@lucide/vue'

      const highlights = [
            'Custom Software',
            'Cloud Infrastructure',
            'Web & Mobile Apps',
            'Long-Term Support',
      ]
</script>

<template>
      <section class="border-t border-border bg-white/3  backdrop-blur-xl">

            <div class="mx-auto max-w-7xl p-6">

                  <div class="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

                        <!-- Left -->

                        <div class="max-w-2xl">

                              <span
                                  class="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                    Your Trusted IT Solutions Partner
                              </span>

                              <h2 class="mt-1 text-4xl font-black tracking-tight text-white">
                                    Softview
                                    <span class="text-primary">
                                          Ghana
                                    </span>
                              </h2>

                              <p class="mt-8 max-w-2xl text-lg leading-8 text-white/65">
                                    We build reliable software, scalable cloud infrastructure,
                                    and modern digital experiences that help organizations
                                    innovate, streamline operations, and grow with confidence.
                              </p>

                              <div class="mt-8 flex flex-wrap gap-3">

                                    <NuxtLink to="/contact"
                                        class="inline-flex items-center gap-2 rounded-xl bg-primary/90 px-6 py-3 font-medium text-white transition hover:scale-[1.02]">
                                          Start a Project
                                          <ArrowRight class="size-5" />
                                    </NuxtLink>

                                    <NuxtLink to="/services"
                                        class="inline-flex items-center rounded-xl border border-white/10 px-6 py-3 font-medium text-white/80 transition hover:border-primary/40 hover:text-white">
                                          Explore Services
                                    </NuxtLink>

                              </div>

                        </div>

                        <!-- Right -->

                        <div class="grid gap-4 sm:grid-cols-2">

                              <div v-for="item in highlights" :key="item"
                                  class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/2 px-5 py-4">

                                    <CheckCircle2 class="size-5 text-primary" />

                                    <span class="text-sm text-white/80">
                                          {{ item }}
                                    </span>

                              </div>

                        </div>

                  </div>

            </div>

      </section>
</template>