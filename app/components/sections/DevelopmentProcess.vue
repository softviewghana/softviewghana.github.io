<script setup lang="ts">
      import {
            Search,
            ClipboardList,
            PencilRuler,
            Code2,
            ShieldCheck,
            Rocket,
            LifeBuoy,
      } from '@lucide/vue'

      const steps = [
            {
                  number: '01',
                  title: 'Discovery',
                  icon: Search,
                  description:
                        'We learn about your business, challenges, and objectives to ensure every solution begins with a clear understanding.',
                  outcomes: ['Business Goals', 'Project Scope', 'Requirements'],
            },
            {
                  number: '02',
                  title: 'Planning',
                  icon: ClipboardList,
                  description:
                        'Requirements are transformed into a practical roadmap with clear milestones, timelines, and technical decisions.',
                  outcomes: ['Roadmap', 'Architecture', 'Timeline'],
            },
            {
                  number: '03',
                  title: 'Design',
                  icon: PencilRuler,
                  description:
                        'User-centered interfaces and experiences are designed before development begins.',
                  outcomes: ['Wireframes', 'UI Design', 'Prototype'],
            },
            {
                  number: '04',
                  title: 'Development',
                  icon: Code2,
                  description:
                        'Our engineers build reliable, secure, and scalable software using modern technologies and best practices.',
                  outcomes: ['Backend', 'Frontend', 'API Integration'],
            },
            {
                  number: '05',
                  title: 'Testing',
                  icon: ShieldCheck,
                  description:
                        'Every feature undergoes comprehensive testing to ensure quality, security, and performance.',
                  outcomes: ['QA', 'Performance', 'Security'],
            },
            {
                  number: '06',
                  title: 'Deployment',
                  icon: Rocket,
                  description:
                        'Your solution is deployed using automated pipelines and industry best practices.',
                  outcomes: ['Production', 'Monitoring', 'Launch'],
            },
            {
                  number: '07',
                  title: 'Continuous Support',
                  icon: LifeBuoy,
                  description:
                        'We continue improving your solution through maintenance, updates, and future enhancements.',
                  outcomes: ['Maintenance', 'Updates', 'Growth'],
            },
      ]
</script>

<template>
      <section class="relative overflow-hidden py-24 sm:py-28">
            <div class="pointer-events-none absolute inset-0">
                  <div
                    class="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[140px]" />
                  <div
                    class="absolute bottom-[-12rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-[160px]" />
                  <div
                    class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
            </div>

            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
                  <div class="mx-auto max-w-3xl text-center">
                        <span
                          class="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                              Our Development Process
                        </span>

                        <h2 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                              How We Build Software
                        </h2>

                        <p class="mt-6 text-lg leading-8 text-white/60">
                              A proven seven-step engineering process that keeps every project transparent,
                              predictable, and built for long-term growth.
                        </p>
                  </div>

                  <div class="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <article v-for="(step, index) in steps" :key="step.title"
                          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,.45)]"
                          :class="[
                              index % 2 === 1 ? 'lg:translate-y-10' : '',
                              index === 6 ? 'xl:col-span-1 lg:col-span-2 xl:col-span-1' : '',
                        ]">
                              <span
                                class="pointer-events-none absolute right-5 top-4 select-none text-7xl font-black tracking-tighter text-white/5 transition-colors duration-500 group-hover:text-primary/10">
                                    {{ step.number }}
                              </span>

                              <div class="relative flex items-start gap-5">
                                    <div
                                      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-105">
                                          <component :is="step.icon" class="size-6" />
                                    </div>

                                    <div class="min-w-0">
                                          <p class="text-sm font-medium tracking-[0.22em] text-primary/90">
                                                STEP {{ step.number }}
                                          </p>

                                          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-white">
                                                {{ step.title }}
                                          </h3>
                                    </div>
                              </div>

                              <p class="relative mt-6 max-w-xl text-base leading-7 text-white/60">
                                    {{ step.description }}
                              </p>

                              <ul class="relative mt-8 space-y-3">
                                    <li v-for="item in step.outcomes" :key="item"
                                      class="flex items-center gap-3 text-sm text-white/70">
                                          <span
                                            class="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(0,0,0,0.35)]" />
                                          <span>{{ item }}</span>
                                    </li>
                              </ul>

                              <div
                                class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </article>
                  </div>
            </div>
      </section>
</template>