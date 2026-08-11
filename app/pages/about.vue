<script setup lang="ts">
      const values = [
            {
                  number: '01',
                  title: 'Purpose over noise',
                  description:
                        'We believe technology should solve a real problem, improve an experience, or create a meaningful opportunity. Everything else is noise.',
            },
            {
                  number: '02',
                  title: 'Built to last',
                  description:
                        'We care about the foundations as much as the interface. Our products are designed with reliability, maintainability, and growth in mind.',
            },
            {
                  number: '03',
                  title: 'Simple is powerful',
                  description:
                        'Complex problems do not need complicated experiences. We work hard to make powerful technology feel clear and intuitive.',
            },
            {
                  number: '04',
                  title: 'People come first',
                  description:
                        'Technology exists to serve people. We design around the people who use, operate, and depend on the systems we build.',
            },
      ]

      const capabilities = [
            {
                  index: '01',
                  title: 'Software Products',
                  description:
                        'We design and build digital products that solve specific problems and create lasting value.',
                  tags: ['SaaS', 'Platforms', 'Web applications'],
            },
            {
                  index: '02',
                  title: 'Custom Software',
                  description:
                        'We turn unique business requirements into software that fits the way an organization actually works.',
                  tags: ['Business systems', 'Automation', 'Integrations'],
            },
            {
                  index: '03',
                  title: 'Digital Experiences',
                  description:
                        'We create fast, thoughtful digital experiences that help organizations communicate, connect, and grow.',
                  tags: ['Websites', 'UX / UI', 'Digital presence'],
            },
      ]

      const principles = [
            'Understand the problem',
            'Design the right solution',
            'Build with intention',
            'Refine through feedback',
            'Support what we create',
      ]

      usePageSeo({
            title: 'About Softview Ghana',
            description: 'Softview Ghana is an IT company building thoughtful software, digital products, and experiences for businesses and organizations.',
            path: '/about',
      });
</script>

<template>
      <div class="pb-20">
            <!-- ============================================================
         HERO
    ============================================================= -->
            <!-- <section class="relative isolate border-b border-white/6"> -->
            <!-- 
                  <div
                    class="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
                        <div class="max-w-5xl">
                              <div
                                class="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">
                                    <span class="h-px w-8 bg-emerald-400/70" />
                                    <span>About Softview Ghana</span>
                              </div>

                              <h1
                                class="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
                                    Technology built
                                    <span class="text-zinc-500"> with purpose.</span>
                              </h1>

                              <div class="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
                                    <p class="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                                          Softview Ghana is an IT company building thoughtful
                                          software, digital products, and experiences that solve real
                                          problems and help organizations move forward.
                                    </p>

                                    <div class="border-l border-white/10 pl-5 text-xs leading-6 text-zinc-500">
                                          <div class="font-mono text-zinc-400">
                                                SOFTVIEW / GHANA
                                          </div>
                                          <div>Software · Digital Products · Technology</div>
                                    </div>
                              </div>
                        </div>

                        <div class="mt-20 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                              <span>Scroll to explore</span>
                              <span class="h-px w-16 bg-zinc-800" />
                        </div>
                  </div> -->
            <!-- </section> -->
            <PageHero eyebrow="About Softview Ghana" title="Technology built with purpose"
                description="Softview Ghana is an IT company building thoughtful software, digital products, and experiences that solve real problems and help organizations move forward.">
                  <template #visual>
                        <div class="border-l border-white/10 pl-5 text-xs leading-6">
                              <div class="font-mono text-muted">
                                    SOFTVIEW GHANA
                              </div>
                              <div>Software · Digital Products · Technology</div>
                        </div>
                  </template>
            </PageHero>

            <section class="border-b border-white/6">
                  <div class="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
                        <div class="grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-24">
                              <div>
                                    <p class="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                                          Our story
                                    </p>
                              </div>

                              <div class="max-w-4xl">
                                    <h2
                                        class="text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                                          Technology should make
                                          <span class="text-zinc-500">things better.</span>
                                    </h2>

                                    <div class="mt-10 grid gap-8 text-base leading-8 text-zinc-400 md:grid-cols-2">
                                          <p>
                                                Businesses are increasingly dependent on technology, yet
                                                technology itself can often become the source of unnecessary
                                                complexity.
                                          </p>

                                          <p>
                                                We started Softview with a simple idea: build technology that
                                                is useful, thoughtfully designed, and genuinely suited to the
                                                people and organizations using it.
                                          </p>

                                          <p>
                                                That means looking beyond simply delivering software. We take
                                                time to understand the problem, the people involved, and the
                                                environment in which a solution needs to work.
                                          </p>

                                          <p>
                                                From websites and business systems to products of our own, we
                                                approach every project with the same attention to detail:
                                                build something that works today and has room to grow
                                                tomorrow.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
            <section class="border-b border-white/6">
                  <div class="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
                        <div class="mb-16 max-w-2xl">
                              <p class="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                                    What guides us
                              </p>

                              <h2 class="mt-5 text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
                                    Principles behind
                                    <span class="text-zinc-500">the work.</span>
                              </h2>
                        </div>

                        <div class="grid border-t border-white/8 md:grid-cols-2">
                              <article v-for="value in values" :key="value.number"
                                  class="group border-b border-white/8 py-10 md:px-8 md:first:pl-0 md:nth-child(odd):border-r md:nth-child(even):pr-0 lg:py-12">
                                    <div class="flex gap-6">
                                          <span
                                              class="font-mono text-[11px] text-zinc-600 transition-colors duration-300 group-hover:text-emerald-400/70">
                                                {{ value.number }}
                                          </span>

                                          <div>
                                                <h3 class="text-xl font-medium tracking-tight text-zinc-100">
                                                      {{ value.title }}
                                                </h3>

                                                <p class="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                                                      {{ value.description }}
                                                </p>
                                          </div>
                                    </div>
                              </article>
                        </div>
                  </div>
            </section>

            <section class="border-b border-white/6">
                  <div class="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
                        <div class="grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-24">
                              <div>
                                    <p class="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                                          What we do
                                    </p>

                                    <p class="mt-5 max-w-xs text-sm leading-7 text-zinc-600">
                                          Different challenges require different solutions. Our work
                                          spans products, software, and digital experiences.
                                    </p>
                              </div>

                              <div class="divide-y divide-white/8 border-y border-white/8">
                                    <article v-for="capability in capabilities" :key="capability.index"
                                        class="group py-10 lg:py-12">
                                          <div class="grid gap-8 lg:grid-cols-[72px_1fr_1fr] lg:items-start">
                                                <span
                                                    class="font-mono text-[11px] text-zinc-600 transition-colors group-hover:text-emerald-400/70">
                                                      {{ capability.index }}
                                                </span>

                                                <h3 class="text-2xl font-medium tracking-tight text-white">
                                                      {{ capability.title }}
                                                </h3>

                                                <div>
                                                      <p class="max-w-md text-sm leading-7 text-zinc-500">
                                                            {{ capability.description }}
                                                      </p>

                                                      <div class="mt-6 flex flex-wrap gap-2">
                                                            <span v-for="tag in capability.tags" :key="tag"
                                                                class="rounded-full border border-white/8 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                                                                  {{ tag }}
                                                            </span>
                                                      </div>
                                                </div>
                                          </div>
                                    </article>
                              </div>
                        </div>
                  </div>
            </section>


            <section class="relative overflow-hidden border-b border-white/6">
                  <div class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-emerald-500/[0.035] to-transparent"
                      aria-hidden="true" />

                  <div class="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-36">
                        <div class="relative max-w-5xl">
                              <p class="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                                    Where we build
                              </p>

                              <h2
                                  class="mt-8 text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                                    Built from Ghana.
                                    <br />
                                    <span class="text-zinc-600">Designed for what's next.</span>
                              </h2>

                              <div class="mt-12 grid gap-10 md:grid-cols-[1fr_280px] md:items-end">
                                    <p class="max-w-2xl text-lg leading-8 text-zinc-400">
                                          Ghana is where we build, learn, and understand the realities of
                                          the businesses and communities we serve. But our ambition is not
                                          limited by geography.
                                    </p>

                                    <div class="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                                          <div>05°33′N</div>
                                          <div>00°12′W</div>
                                          <div class="mt-2 text-zinc-500">Accra · Ghana</div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>


            <section class="border-b border-white/6">
                  <div class="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
                        <div class="grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-24">
                              <div>
                                    <p class="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                                          How we work
                                    </p>
                              </div>

                              <div>
                                    <h2
                                        class="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                                          Good technology starts with
                                          <span class="text-zinc-500">understanding.</span>
                                    </h2>

                                    <div class="mt-14">
                                          <div v-for="(principle, index) in principles" :key="principle"
                                              class="group flex items-center gap-6 border-t border-white/8 py-6">
                                                <span class="w-8 font-mono text-[10px] text-zinc-700">
                                                      0{{ index + 1 }}
                                                </span>

                                                <span
                                                    class="text-lg text-zinc-400 transition-colors duration-300 group-hover:text-white">
                                                      {{ principle }}
                                                </span>

                                                <span
                                                    class="ml-auto text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-400">
                                                      →
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>

            <section class="border-b border-white/6">
                  <div class="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
                        <div class="relative overflow-hidden rounded-2xl border border-white/8 bg-white/2">
                              <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.07),transparent_35%)]"
                                  aria-hidden="true" />

                              <div class="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_320px] lg:p-16">
                                    <div>
                                          <div
                                              class="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400/70">
                                                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                                Building our own
                                          </div>

                                          <h2
                                              class="mt-7 max-w-2xl text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
                                                We don't just build for others.
                                                <span class="text-zinc-500">
                                                      We build products too.
                                                </span>
                                          </h2>

                                          <p class="mt-6 max-w-2xl text-sm leading-7 text-zinc-500">
                                                Working with businesses gives us a close view of the
                                                challenges organizations face every day. We use those insights
                                                to create products that make complex work simpler and more
                                                accessible.
                                          </p>
                                    </div>

                                    <div class="flex items-end lg:justify-end">
                                          <div class="w-full border-l border-white/8 pl-6 lg:max-w-65">
                                                <p
                                                    class="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                                                      Product studio
                                                </p>

                                                <p class="mt-3 text-sm leading-6 text-zinc-400">
                                                      Turning real-world problems into useful digital products.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>

            <section>
                  <div class="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12 lg:py-40">
                        <div class="text-center">
                              <p class="text-xs font-medium uppercase tracking-[0.22em] text-zinc-600">
                                    Let's build something meaningful
                              </p>

                              <h2
                                  class="mx-auto mt-7 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                                    Have an idea worth
                                    <span class="text-zinc-600">building?</span>
                              </h2>

                              <p class="mx-auto mt-7 max-w-xl text-base leading-7 text-zinc-500">
                                    Whether you're starting something new or improving something that
                                    already exists, we'd love to hear what you're working on.
                              </p>

                              <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <NuxtLink to="/contact"
                                        class="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200">
                                          Start a conversation

                                          <span class="transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                          </span>
                                    </NuxtLink>

                                    <NuxtLink to="/"
                                        class="inline-flex items-center rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-white">
                                          Back to home
                                    </NuxtLink>
                              </div>
                        </div>
                  </div>
            </section>
      </div>
</template>