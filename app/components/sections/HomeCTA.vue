<script setup lang="ts">
      import { ArrowRight, Check } from '@lucide/vue'

      const highlights = [
            'Custom Software',
            'Web & Mobile Applications',
            'Cloud Infrastructure',
            'Long-Term Partnership',
      ]
</script>

<template>
      <section class="relative py-8 sm:py-14">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                    class="relative overflow-hidden rounded-4xl border border-border bg-linear-to-b from-primary/6 to-primary-hover/3 px-6 py-16 shadow-[0_24px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-10 lg:px-16 lg:py-20">
                        <!-- Background layers -->
                        <div class="pointer-events-none absolute inset-0">
                              <div
                                class="absolute -left-32 -top-32 h-88 w-88 rounded-full bg-primary/12 blur-[130px]" />
                              <div
                                class="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary/6 blur-[150px]" />
                              <div
                                class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
                              <div class="absolute inset-0 opacity-[0.05]" style="
              background-image: linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px);
              background-size: 42px 42px;
            " />
                        </div>

                        <div class="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                              <!-- Content -->
                              <div class="text-center lg:text-left">
                                    <div class="flex justify-center lg:justify-start">
                                          <span
                                            class="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                                Let’s Work Together
                                          </span>
                                    </div>

                                    <h2
                                      class="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                          Let’s Build Something
                                          <span class="text-primary">Exceptional</span>
                                    </h2>

                                    <p
                                      class="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 lg:mx-0 lg:text-lg">
                                          Whether you are launching a new digital product, modernising operations, or
                                          building software that scales with your business, we can help turn the idea
                                          into a reliable, polished solution.
                                    </p>

                                    <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                                          <NuxtLink to="/contact"
                                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                                                Start Your Project
                                                <ArrowRight class="size-5" />
                                          </NuxtLink>

                                          <NuxtLink to="/contact"
                                            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-6 py-4 font-medium text-white transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07]">
                                                Contact Us
                                          </NuxtLink>
                                    </div>
                              </div>

                              <!-- Highlights panel -->
                              <div class="relative">
                                    <div
                                      class="rounded-3xl border border-white/10 bg-white/4 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl sm:p-8">
                                          <div class="mb-6 flex items-center justify-between">
                                                <h3 class="text-lg font-semibold tracking-tight text-white">
                                                      What We Bring
                                                </h3>
                                                <span
                                                  class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                                                      Built for growth
                                                </span>
                                          </div>

                                          <div class="grid gap-3">
                                                <div v-for="item in highlights" :key="item"
                                                  class="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-4 py-4 transition-all duration-300 hover:border-primary/20 hover:bg-white/5">
                                                      <div
                                                        class="flex size-9 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                                                            <Check class="size-4" />
                                                      </div>

                                                      <span class="text-sm font-medium text-white/75">
                                                            {{ item }}
                                                      </span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
</template>