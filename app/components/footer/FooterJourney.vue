<script setup lang="ts">
      import {
            Lightbulb,
            Compass,
            Palette,
            Code2,
            Rocket,
            TrendingUp,
      } from '@lucide/vue'

      const journey = [
            {
                  title: 'Idea',
                  icon: Lightbulb,
            },
            {
                  title: 'Strategy',
                  icon: Compass,
            },
            {
                  title: 'Design',
                  icon: Palette,
            },
            {
                  title: 'Development',
                  icon: Code2,
            },
            {
                  title: 'Deployment',
                  icon: Rocket,
            },
            {
                  title: 'Growth',
                  icon: TrendingUp,
            },
      ]
</script>

<template>
      <section class="mx-auto max-w-7xl px-6 py-20">

            <div class="border-b border-white/10 pb-20">

                  <!-- Heading -->

                  <div class="text-center">

                        <span class="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                              Our Engineering Journey
                        </span>

                        <h3 class="mt-5 text-3xl font-bold text-white">
                              From Idea To Impact
                        </h3>

                        <p class="mx-auto mt-4 max-w-xl text-white/60">
                              Turning ambitious ideas into reliable digital solutions
                              through thoughtful engineering and continuous improvement.
                        </p>

                  </div>


                  <!-- Journey -->

                  <div class="relative mt-16">

                        <!-- Desktop Line -->

                        <div
                          class="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />


                        <div class="grid gap-10 lg:grid-cols-6">

                              <div v-for="(item, index) in journey" :key="item.title"
                                class="relative flex flex-col items-center">

                                    <!-- Node -->

                                    <div
                                      class="group relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-primary transition-all duration-500 hover:-translate-y-2 hover:border-primary/40">

                                          <component :is="item.icon" class="size-8" />


                                          <!-- Glow -->

                                          <div
                                            class="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                                    </div>


                                    <!-- Step -->

                                    <div class="mt-5 text-center">

                                          <p class="text-xs font-medium text-primary">
                                                0{{ index + 1 }}
                                          </p>

                                          <h4 class="mt-2 font-semibold text-white">
                                                {{ item.title }}
                                          </h4>

                                    </div>

                              </div>

                        </div>

                  </div>

            </div>

      </section>
</template>