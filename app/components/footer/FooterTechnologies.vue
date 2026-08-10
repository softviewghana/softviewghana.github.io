<script setup lang="ts">
      import {
            Braces,
            Cloud,
            Database,
            Server,
            ShieldCheck,
            Smartphone,
      } from '@lucide/vue'

      const groups = [
            {
                  title: 'Backend',
                  icon: Database,
                  technologies: [
                        'Laravel',
                        'PHP',
                        'MySQL',
                        'Redis',
                        'REST APIs',
                  ],
            },
            {
                  title: 'Frontend',
                  icon: Braces,
                  technologies: [
                        'Vue.js',
                        'Nuxt',
                        'TypeScript',
                        'Tailwind CSS',
                  ],
            },
            {
                  title: 'Mobile',
                  icon: Smartphone,
                  technologies: [
                        'Flutter',
                        'Android',
                        'iOS',
                  ],
            },
            {
                  title: 'Infrastructure',
                  icon: Server,
                  technologies: [
                        'Docker',
                        'Linux',
                        'Cloudflare',
                        'CI/CD',
                        'GitHub Actions',
                  ],
            },
      ]
</script>

<template>
      <section class="mx-auto max-w-7xl px-6 py-20">

            <div class="rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl">

                  <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                        <div>

                              <span
                                class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                    <ShieldCheck class="size-4" />

                                    Engineering Stack
                              </span>

                              <h3 class="mt-5 text-3xl font-bold text-white">
                                    Built with Modern Technologies
                              </h3>

                              <p class="mt-3 max-w-2xl text-white/60">
                                    We use proven technologies and modern engineering practices to
                                    deliver reliable, scalable, and maintainable software solutions.
                              </p>

                        </div>

                  </div>

                  <div class="mt-12 grid gap-10 md:grid-cols-2">

                        <div v-for="group in groups" :key="group.title">

                              <div class="mb-5 flex items-center gap-3">

                                    <div
                                      class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                          <component :is="group.icon" class="size-5" />
                                    </div>

                                    <h4 class="font-semibold text-white">
                                          {{ group.title }}
                                    </h4>

                              </div>

                              <div class="flex flex-wrap gap-3">

                                    <span v-for="technology in group.technologies" :key="technology"
                                      class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-white">
                                          {{ technology }}
                                    </span>

                              </div>

                        </div>

                  </div>

            </div>

      </section>
</template>