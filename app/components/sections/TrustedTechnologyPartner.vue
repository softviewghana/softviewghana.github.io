<script setup lang="ts">
      import {
            ArrowDown,
            Briefcase,
            Cpu,
            Handshake,
            Search,
            Settings,
            Rocket,
            LifeBuoy,
      } from '@lucide/vue'

      const highlights = [
            {
                  icon: Briefcase,
                  title: 'Business-first',
                  description: 'Solutions aligned with your goals.',
            },
            {
                  icon: Cpu,
                  title: 'Modern Stack',
                  description: 'Built with proven technologies.',
            },
            {
                  icon: Handshake,
                  title: 'Long-term Partner',
                  description: 'Support beyond project delivery.',
            },
      ]

      const process = [
            { icon: Search, title: 'Discovery' },
            { icon: Settings, title: 'Strategy' },
            { icon: Rocket, title: 'Development' },
            { icon: LifeBuoy, title: 'Support' },
      ]
</script>

<template>
      <section class="py-24">
            <BaseContainer>
                  <div class="grid items-center gap-16 lg:grid-cols-2">

                        <!-- Left -->

                        <div>

                              <span
                                class="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                                    Trusted Technology Partner
                              </span>

                              <h2 class="mt-6 text-4xl font-bold tracking-tight text-white">
                                    Technology should empower your business—not complicate it.
                              </h2>

                              <p class="mt-6 text-lg leading-8 text-white/70">
                                    Whether you're launching a startup, digitizing internal
                                    operations, modernizing legacy systems, or building your next
                                    digital product, Softview Ghana provides the expertise to turn
                                    ambitious ideas into reliable technology solutions.
                              </p>

                              <p class="mt-4 text-white/60">
                                    We combine technical excellence, modern engineering practices,
                                    and business-focused thinking to build software that creates
                                    measurable value.
                              </p>

                              <div class="mt-10 space-y-5">
                                    <div v-for="item in highlights" :key="item.title" class="flex gap-4">
                                          <div
                                            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <component :is="item.icon" class="size-5" />
                                          </div>

                                          <div>
                                                <h3 class="font-semibold text-white">
                                                      {{ item.title }}
                                                </h3>

                                                <p class="mt-1 text-sm text-white/60">
                                                      {{ item.description }}
                                                </p>
                                          </div>
                                    </div>
                              </div>

                        </div>

                        <!-- Right -->

                        <div class="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                              <div v-for="(step, index) in process" :key="step.title">
                                    <div class="flex items-center gap-4">

                                          <div
                                            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <component :is="step.icon" class="size-6" />
                                          </div>

                                          <div>
                                                <p class="font-semibold text-white">
                                                      {{ step.title }}
                                                </p>
                                          </div>

                                    </div>

                                    <div v-if="index !== process.length - 1" class="ml-7 flex h-12 items-center">
                                          <ArrowDown class="size-5 text-white/20" />
                                    </div>

                              </div>

                        </div>

                  </div>
            </BaseContainer>
      </section>
</template>