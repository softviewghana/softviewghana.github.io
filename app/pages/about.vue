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
                  title: 'Custom Software Development',
                  description:
                        'We turn unique business processes, workflows, and goals into dependable software built around the way your organization works.',
                  tags: ['ERP systems', 'CRM solutions', 'Automation'],
            },
            {
                  index: '02',
                  title: 'Web Application Development',
                  description:
                        'We create responsive, scalable web applications that help customers, teams, and partners get meaningful work done.',
                  tags: ['Business websites', 'Portals', 'SaaS platforms'],
            },
            {
                  index: '03',
                  title: 'Mobile Application Development',
                  description:
                        'We design cross-platform mobile apps that keep services, information, and business processes available wherever users are.',
                  tags: ['Customer apps', 'Staff tools', 'Offline-ready products'],
            },
            {
                  index: '04',
                  title: 'Cloud & DevOps',
                  description:
                        'We build the cloud infrastructure and delivery practices that keep applications secure, resilient, and ready to scale.',
                  tags: ['Cloud migration', 'CI/CD', 'Monitoring'],
            },
            {
                  index: '05',
                  title: 'IT Infrastructure & Networking',
                  description:
                        'We design and support the networks, systems, and security foundations that keep businesses connected and productive.',
                  tags: ['Networking', 'Wi-Fi', 'Security'],
            },
            {
                  index: '06',
                  title: 'UI/UX Design',
                  description:
                        'We create clear, intuitive digital experiences that connect user needs with the goals behind the product.',
                  tags: ['Research', 'Interfaces', 'Design systems'],
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
            <PageHero eyebrow="About Softview Ghana" title="Technology built with purpose"
                description="Softview Ghana is an IT company building thoughtful software, digital products, and experiences that solve real problems and help organizations move forward.">
                  <template #visual>
                        <div class="border-l border-border/70 pl-5 text-xs leading-6 text-muted">
                              <div class="text-foreground">
                                    SOFTVIEW GHANA
                              </div>
                              <div>Software · Digital Products · Technology</div>
                        </div>
                  </template>
            </PageHero>

            <BaseContainer class="mt-4 md:mt-8">
                  <section v-fadeIn class="softview-panel p-8 sm:p-10 lg:p-12">
                        <div class="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
                              <div v-fadeIn>
                                    <p class="softview-kicker">Our story</p>
                                    <div class="mt-6 space-y-4 text-sm leading-7 text-muted">
                                          <p>
                                                Businesses are increasingly dependent on technology, yet technology
                                                itself can often
                                                become the source of unnecessary complexity.
                                          </p>
                                          <p>
                                                We started Softview with a simple idea: build technology that is useful,
                                                thoughtfully designed, and genuinely suited to the people and
                                                organizations using
                                                it.
                                          </p>
                                    </div>
                              </div>

                              <div class="space-y-6">
                                    <h2 v-fadeIn
                                        class="text-3xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
                                          Technology should make
                                          <span class="text-primary">things better.</span>
                                    </h2>

                                    <div v-fadeIn class="grid gap-4 text-base leading-8 text-muted md:grid-cols-2">
                                          <p>
                                                That means looking beyond simply delivering software. We take time to
                                                understand the
                                                problem, the people involved, and the environment in which a solution
                                                needs to work.
                                          </p>
                                          <p>
                                                From websites and business systems to products of our own, we approach
                                                every project
                                                with the same attention to detail: build something that works today and
                                                has room to
                                                grow tomorrow.
                                          </p>
                                    </div>

                                    <div v-fadeIn class="softview-card p-6">
                                          <div
                                              class="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                                                <span class="softview-divider" />
                                                <span>Why we do it</span>
                                          </div>
                                          <p class="mt-4 max-w-2xl text-sm leading-7 text-muted">
                                                We believe good technology should feel clear, useful, and dependable —
                                                not
                                                overbuilt, not confusing, and never disconnected from the people who
                                                rely on it.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>
            </BaseContainer>

            <BaseContainer class="mt-6 md:mt-10">
                  <section v-fadeIn class="softview-panel p-8 sm:p-10 lg:p-12">
                        <div class="mb-10 max-w-2xl">
                              <p class="softview-kicker">What guides us</p>
                              <h2 class="mt-5 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                                    Principles behind
                                    <span class="text-primary">the work.</span>
                              </h2>
                        </div>

                        <div class="grid gap-4 md:grid-cols-2">
                              <article v-for="value in values" :key="value.number"
                                  class="group rounded-[1.4rem] border border-border/60 bg-background/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25"
                                  v-fadeIn>
                                    <div class="flex gap-4">
                                          <span class="font-mono text-[11px] text-primary/70">
                                                {{ value.number }}
                                          </span>

                                          <div>
                                                <h3 class="text-lg font-semibold tracking-tight text-foreground">
                                                      {{ value.title }}
                                                </h3>
                                                <p class="mt-3 text-sm leading-7 text-muted">
                                                      {{ value.description }}
                                                </p>
                                          </div>
                                    </div>
                              </article>
                        </div>
                  </section>
            </BaseContainer>

            <TeamMembers class="mt-6 md:mt-10" />

            <BaseContainer class="mt-6 md:mt-10">
                  <section v-fadeIn class="softview-panel p-8 sm:p-10 lg:p-12">
                        <div class="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
                              <div>
                                    <p class="softview-kicker">What we do</p>
                                    <p class="mt-5 max-w-xs text-sm leading-7 text-muted">
                                          From custom software and mobile products to cloud infrastructure and design,
                                          we build technology that helps organizations operate with more confidence.
                                    </p>
                              </div>

                              <div class="space-y-4">
                                    <article v-for="capability in capabilities" :key="capability.index"
                                        class="rounded-[1.4rem] border border-border/60 bg-background/70 p-6 transition duration-300 hover:border-primary/25" 
                                        v-fadeIn>
                                          <div class="grid gap-6 lg:grid-cols-[72px_1fr_1fr] lg:items-start">
                                                <span class="font-mono text-[11px] text-primary/70">
                                                      {{ capability.index }}
                                                </span>

                                                <h3 class="text-xl font-semibold tracking-tight text-foreground">
                                                      {{ capability.title }}
                                                </h3>

                                                <div>
                                                      <p class="max-w-md text-sm leading-7 text-muted">
                                                            {{ capability.description }}
                                                      </p>

                                                      <div class="mt-5 flex flex-wrap gap-2">
                                                            <span v-for="tag in capability.tags" :key="tag"
                                                                class="rounded-full border border-border/60 bg-surface/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                                                                  {{ tag }}
                                                            </span>
                                                      </div>
                                                </div>
                                          </div>
                                    </article>
                              </div>
                        </div>
                  </section>
            </BaseContainer>

            <BaseContainer class="mt-6 md:mt-10">
                  <section v-fadeIn class="softview-panel overflow-hidden">
                        <div
                            class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_32%)]" />
                        <div class="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_320px] lg:p-12">
                              <div v-fadeIn>
                                    <p class="softview-kicker">Built from Ghana</p>
                                    <h2
                                        class="mt-6 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                                          Built from Ghana.
                                          <span class="text-primary">Designed for what's next.</span>
                                    </h2>
                                    <p class="mt-5 max-w-2xl text-base leading-8 text-muted">
                                          Ghana is where we build, learn, and understand the realities of the businesses
                                          and
                                          communities we serve. But our ambition is not limited by geography.
                                    </p>
                              </div>

                              <div v-fadeIn class="rounded-[1.4rem] border border-border/60 bg-background/70 p-6">
                                    <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-primary/70">
                                          05°33'N · 00°12'W
                                    </p>
                                    <p class="mt-3 text-sm leading-7 text-muted">
                                          Accra, Ghana. A base for building with insight, discipline, and long-term
                                          thinking.
                                    </p>
                              </div>
                        </div>
                  </section>
            </BaseContainer>

            <BaseContainer class="mt-6 md:mt-10">
                  <section v-fadeIn class="softview-panel p-8 sm:p-10 lg:p-12">
                        <div class="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
                              <div>
                                    <p class="softview-kicker">How we work</p>
                              </div>

                              <div>
                                    <h2
                                        class="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
                                          Good technology starts with
                                          <span class="text-primary">understanding.</span>
                                    </h2>

                                    <div class="mt-10 space-y-4">
                                          <div v-for="(principle, index) in principles" :key="principle"
                                              class="flex items-center gap-4 rounded-[1.2rem] border border-border/60 bg-background/70 px-5 py-4 transition duration-300 hover:border-primary/25" v-fadeIn>
                                                <span class="w-8 font-mono text-[10px] text-primary/70">
                                                      0{{ index + 1 }}
                                                </span>
                                                <span class="text-base text-foreground">
                                                      {{ principle }}
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </BaseContainer>

            <BaseContainer class="mt-6 md:mt-10">
                  <section v-fadeIn
                      class="rounded-4xl border border-primary/15 bg-linear-to-br from-primary/10 via-surface/60 to-background px-8 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:px-10 lg:px-14 lg:py-16">
                        <p class="softview-kicker">Let's build something meaningful</p>
                        <h2
                            class="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                              Have an idea worth
                              <span class="text-primary">building?</span>
                        </h2>
                        <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted">
                              Whether you're starting something new or improving something that already exists, we'd
                              love to hear
                              what you're working on.
                        </p>

                        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                              <NuxtLink to="/contact"
                                  class="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                    Start a conversation
                              </NuxtLink>
                              <NuxtLink to="/"
                                  class="inline-flex items-center rounded-full border border-border/70 bg-background/60 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/25 hover:text-primary">
                                    Back to home
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>