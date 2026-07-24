<script setup lang="ts">
      import {
            ArrowRight,
            Briefcase,
            Cpu,
            Handshake,
            Search,
            Settings,
            Rocket,
            LifeBuoy,
      } from "@lucide/vue"

      const highlights = [
            {
                  icon: Briefcase,
                  title: "Business-first",
                  description: "Every solution is designed around measurable business outcomes.",
            },
            {
                  icon: Cpu,
                  title: "Modern Engineering",
                  description: "Built with scalable architectures and proven technologies.",
            },
            {
                  icon: Handshake,
                  title: "Long-term Partnership",
                  description: "We continue supporting your business after launch.",
            },
      ]

      const process = [
            { icon: Search, title: "Discovery" },
            { icon: Settings, title: "Strategy" },
            { icon: Rocket, title: "Development" },
            { icon: LifeBuoy, title: "Support" },
      ]
</script>

<template>
      <section class="relative overflow-hidden py-28">

            <!-- Background Glow -->

            <div class="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />

            <BaseContainer>

                  <div class="grid items-center gap-20 lg:grid-cols-2">

                        <!-- LEFT -->

                        <div class="relative z-10">

                              <span
                                class="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                    Trusted Technology Partner
                              </span>

                              <h2
                                class="mt-8 max-w-xl text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-white">
                                    Technology that moves
                                    <span class="text-primary">your business forward.</span>
                              </h2>

                              <p class="mt-8 max-w-xl text-lg leading-8 text-white/70">
                                    Whether you're launching a startup, modernizing legacy
                                    systems, or digitizing operations, Softview Ghana builds
                                    software that delivers real business value—not unnecessary
                                    complexity.
                              </p>

                              <div class="mt-12 grid gap-5">

                                    <div v-for="item in highlights" :key="item.title"
                                      class="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">

                                          <div
                                            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">

                                                <component :is="item.icon" class="size-6" />

                                          </div>

                                          <div>

                                                <h3 class="font-semibold text-white">
                                                      {{ item.title }}
                                                </h3>

                                                <p class="mt-2 leading-7 text-white/60">
                                                      {{ item.description }}
                                                </p>

                                          </div>

                                    </div>

                              </div>

                        </div>

                        <!-- RIGHT -->

                        <div class="relative">

                              <!-- Card -->

                              <div
                                class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                                    <div class="absolute right-0 top-0 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />

                                    <div class="relative space-y-8">

                                          <div v-for="(step, index) in process" :key="step.title" class="flex gap-5">

                                                <div class="flex flex-col items-center">

                                                      <div
                                                        class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">

                                                            <component :is="step.icon" class="size-6" />

                                                      </div>

                                                      <div v-if="index !== process.length - 1"
                                                        class="mt-3 h-14 w-px bg-gradient-to-b from-primary to-transparent" />

                                                </div>

                                                <div class="pt-2">

                                                      <div
                                                        class="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">

                                                            {{ index + 1 }}

                                                      </div>

                                                      <h3 class="text-xl font-semibold text-white">
                                                            {{ step.title }}
                                                      </h3>

                                                      <p class="mt-2 text-white/60">
                                                            Delivering each phase with transparency,
                                                            collaboration, and engineering excellence.
                                                      </p>

                                                </div>

                                          </div>

                                    </div>

                              </div>

                              <!-- Floating Badge -->

                              <div
                                class="absolute -bottom-6 -left-6 rounded-2xl border border-primary/20 bg-neutral-900/90 p-5 shadow-xl backdrop-blur">

                                    <p class="text-sm text-white/60">
                                          Proven Process
                                    </p>

                                    <div class="mt-2 flex items-center gap-2">

                                          <span class="text-2xl font-bold text-primary">
                                                4
                                          </span>

                                          <span class="text-white">
                                                streamlined phases
                                          </span>

                                          <ArrowRight class="size-4 text-primary" />

                                    </div>

                              </div>

                        </div>

                  </div>

            </BaseContainer>
      </section>
</template>