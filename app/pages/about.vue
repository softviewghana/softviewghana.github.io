<script setup lang="ts">
      import {
            Lightbulb,
            Layers3,
            Sparkles,
            Code2,
            MapPin,
            ArrowUpRight,
            Target,
            HeartHandshake,
            Rocket,
            Monitor,
      } from '@lucide/vue';

      const values = [
            {
                  number: '01',
                  icon: Target,
                  title: 'Purpose over noise',
                  description:
                        'We believe technology should solve a real problem, improve an experience or create a meaningful opportunity. Everything else is noise.',
            },
            {
                  number: '02',
                  icon: Layers3,
                  title: 'Built to last',
                  description:
                        'We care about the foundations as much as the interface. Our solutions are designed with reliability, maintainability and growth in mind.',
            },
            {
                  number: '03',
                  icon: Lightbulb,
                  title: 'Simple is powerful',
                  description:
                        'Complex problems do not need complicated experiences. We work to make powerful technology feel clear and intuitive.',
            },
            {
                  number: '04',
                  icon: HeartHandshake,
                  title: 'People come first',
                  description:
                        'Technology exists to serve people. We design around the people who use, operate and depend on the systems we build.',
            },
      ];

      const capabilities = [
            {
                  index: '01',
                  icon: Rocket,
                  title: 'Software Products',
                  description:
                        'We design and build digital products that solve specific problems and create lasting value for the people who use them.',
                  tags: ['SaaS', 'Platforms', 'Web applications'],
            },
            {
                  index: '02',
                  icon: Code2,
                  title: 'Custom Software',
                  description:
                        'We turn unique business requirements into software that fits the way an organization actually works.',
                  tags: ['Business systems', 'Automation', 'Integrations'],
            },
            {
                  index: '03',
                  icon: Monitor,
                  title: 'Digital Experiences',
                  description:
                        'We create thoughtful digital experiences that help organizations communicate, connect with people and grow.',
                  tags: ['Websites', 'UX / UI', 'Digital presence'],
            },
      ];

      const principles = [
            {
                  number: '01',
                  title: 'Understand the problem',
                  description: 'Learn about the people, challenges and objectives behind the project.',
            },
            {
                  number: '02',
                  title: 'Design the right solution',
                  description: 'Translate requirements into a clear and practical direction.',
            },
            {
                  number: '03',
                  title: 'Build with intention',
                  description: 'Develop the solution with attention to usability and solid foundations.',
            },
            {
                  number: '04',
                  title: 'Refine through feedback',
                  description: 'Evaluate, improve and make adjustments based on real-world needs.',
            },
            {
                  number: '05',
                  title: 'Support what we create',
                  description: 'Help solutions remain useful as requirements and business needs evolve.',
            },
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
      ];
      usePageSeo({
            title: 'About Softview Ghana',
            description: 'Softview Ghana is a technology company building thoughtful software, digital products and experiences that solve real problems for businesses and organizations.',
            path: '/about',
            breadcrumbs: breadcrumbs.map(breadcrumb => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href
            }))
      });

</script>

<template>
      <div class="pb-20">
            <!-- Hero -->
            <PageHero eyebrow="About Softview Ghana" title="Technology built with purpose" :breadcrumbs="breadcrumbs"
              description="We build thoughtful software, digital products and experiences that solve real problems and help businesses and organizations move forward.">
                  <template #visual>
                        <div class="flex items-center gap-4 border-l border-border pl-5 text-xs leading-6">
                              <div
                                class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Layers3 class="size-5" />
                              </div>
                              <div>
                                    <p class="font-semibold text-foreground">SOFTVIEW GHANA</p>
                                    <p class="text-muted">Software · Digital Products · Technology</p>
                              </div>
                        </div>
                  </template>
            </PageHero>

            <!-- Our story -->
            <section class="border-b border-border">
                  <BaseContainer class="py-20 md:py-28">
                        <div class="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-20">
                              <div>
                                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                          Our story
                                    </p>
                                    <p class="mt-4 max-w-xs text-sm leading-7 text-muted">
                                          A practical approach to technology, shaped by real-world problems.
                                    </p>
                              </div>

                              <div class="max-w-4xl">
                                    <h2
                                      class="text-3xl font-semibold leading-tight tracking-tighter text-foreground sm:text-4xl lg:text-5xl">
                                          Technology should make
                                          <span class="text-muted"> things better.</span>
                                    </h2>

                                    <div class="mt-8 grid gap-6 text-base leading-8 text-muted md:grid-cols-2">
                                          <p>
                                                Businesses are increasingly dependent on technology,
                                                yet technology itself can sometimes become a source of
                                                unnecessary complexity.
                                          </p>

                                          <p>
                                                Softview Ghana is built around a simple idea: create
                                                technology that is useful, thoughtfully designed and
                                                genuinely suited to the people and organizations using it.
                                          </p>

                                          <p>
                                                That means looking beyond simply delivering software.
                                                We take time to understand the problem, the people involved
                                                and the environment in which a solution needs to work.
                                          </p>

                                          <p>
                                                From websites and business systems to products of our own,
                                                we approach every project with the same attention to detail:
                                                build something that works today and has room to grow tomorrow.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </BaseContainer>
            </section>

            <!-- Values -->
            <section class="border-b border-border">
                  <BaseContainer class="py-20 md:py-28">
                        <div class="mb-12 max-w-2xl md:mb-16">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    What guides us
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl">
                                    Principles behind
                                    <span class="text-muted"> the work.</span>
                              </h2>

                              <p class="mt-4 max-w-xl leading-7 text-muted">
                                    The quality of technology is not only measured by what it can do,
                                    but also by the thought and care that go into creating it.
                              </p>
                        </div>

                        <div class="grid border-t border-border md:grid-cols-2">
                              <article v-for="(value, index) in values" :key="value.number"
                                class="group border-b border-border py-8 md:px-8 md:py-10 bg-surface/5 backdrop-blur-md"
                                :class="index % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'">
                                    <div class="flex gap-5">
                                          <span
                                            class="pt-1 font-mono text-xs text-muted transition-colors group-hover:text-primary">
                                                {{ value.number }}
                                          </span>

                                          <div class="min-w-0">
                                                <div
                                                  class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <component :is="value.icon" class="size-5" />
                                                </div>

                                                <h3 class="mt-5 text-xl font-semibold tracking-tight text-foreground">
                                                      {{ value.title }}
                                                </h3>

                                                <p class="mt-3 max-w-md text-sm leading-7 text-muted">
                                                      {{ value.description }}
                                                </p>
                                          </div>
                                    </div>
                              </article>
                        </div>
                  </BaseContainer>
            </section>

            <!-- What we do -->
            <section class="border-b border-border">
                  <BaseContainer class="py-20 md:py-28">
                        <div class="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-20">
                              <div>
                                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                          What we do
                                    </p>

                                    <p class="mt-4 max-w-xs text-sm leading-7 text-muted">
                                          Different challenges require different solutions. Our work
                                          spans products, software and digital experiences.
                                    </p>
                              </div>

                              <div class="divide-y divide-border border-y border-border">
                                    <article v-for="capability in capabilities" :key="capability.index"
                                      class="group py-9 md:py-11 bg-surface/2 backdrop-blur-md">
                                          <div class="grid gap-5 lg:grid-cols-[60px_1fr_1fr] lg:items-start lg:gap-8">
                                                <span
                                                  class="font-mono text-xs text-muted transition-colors group-hover:text-primary">
                                                      {{ capability.index }}
                                                </span>

                                                <div>
                                                      <div
                                                        class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                            <component :is="capability.icon" class="size-5" />
                                                      </div>

                                                      <h3
                                                        class="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                                                            {{ capability.title }}
                                                      </h3>
                                                </div>

                                                <div>
                                                      <p class="max-w-md text-sm leading-7 text-muted">
                                                            {{ capability.description }}
                                                      </p>

                                                      <div class="mt-5 flex flex-wrap gap-2">
                                                            <span v-for="tag in capability.tags" :key="tag"
                                                              class="rounded-full border border-border bg-background px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted">
                                                                  {{ tag }}
                                                            </span>
                                                      </div>
                                                </div>
                                          </div>
                                    </article>
                              </div>
                        </div>
                  </BaseContainer>
            </section>

            <!-- Location / identity -->
            <section class="relative overflow-hidden border-b border-border">
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-primary/5 to-transparent" />

                  <BaseContainer class="relative py-24 md:py-32">
                        <div class="max-w-5xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Where we build
                              </p>

                              <h2
                                class="mt-7 text-4xl font-semibold leading-[1.08] tracking-tighter text-foreground sm:text-5xl lg:text-7xl">
                                    Built from Ghana.
                                    <br />
                                    <span class="text-muted">Designed for what's next.</span>
                              </h2>

                              <div class="mt-10 grid gap-8 md:grid-cols-[1fr_240px] md:items-end">
                                    <p class="max-w-2xl text-lg leading-8 text-muted">
                                          Ghana is where we build, learn and understand the realities
                                          of the businesses and communities we serve. But our ambition
                                          is not limited by geography. We believe useful technology
                                          can create opportunities wherever people and businesses need it.
                                    </p>

                                    <div class="flex items-center gap-3 border-l border-border pl-5">
                                          <div
                                            class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <MapPin class="size-5" />
                                          </div>
                                          <div>
                                                <p class="text-xs font-semibold text-foreground">Accra, Ghana</p>
                                                <p class="mt-1 text-xs text-muted">Our home base</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </BaseContainer>
            </section>

            <!-- How we work -->
            <section class="border-b border-border">
                  <BaseContainer class="py-20 md:py-28">
                        <div class="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-20">
                              <div>
                                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                          How we work
                                    </p>

                                    <p class="mt-4 max-w-xs text-sm leading-7 text-muted">
                                          A considered process helps us focus on what matters and
                                          deliver solutions with purpose.
                                    </p>
                              </div>

                              <div>
                                    <h2
                                      class="max-w-3xl text-3xl font-semibold leading-tight tracking-tighter text-foreground sm:text-4xl">
                                          Good technology starts with
                                          <span class="text-muted"> understanding.</span>
                                    </h2>

                                    <div class="mt-10">
                                          <article v-for="principle in principles" :key="principle.number"
                                            class="group flex items-start gap-5 border-t border-border py-6  bg-surface/5 backdrop-blur-md">
                                                <span class="w-8 shrink-0 pt-1 font-mono text-xs text-muted">
                                                      {{ principle.number }}
                                                </span>

                                                <div class="min-w-0">
                                                      <h3
                                                        class="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                                                            {{ principle.title }}
                                                      </h3>
                                                      <p class="mt-2 text-sm leading-6 text-muted">
                                                            {{ principle.description }}
                                                      </p>
                                                </div>

                                                <ArrowUpRight
                                                  class="ml-auto mt-1 size-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                                          </article>
                                    </div>
                              </div>
                        </div>
                  </BaseContainer>
            </section>

            <!-- Product studio -->
            <section class="border-b border-border">
                  <BaseContainer class="py-20 md:py-28">
                        <div class="relative overflow-hidden rounded-3xl border border-border bg-surface">
                              <div
                                class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_40%)]" />

                              <div
                                class="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_300px] lg:items-center lg:p-14">
                                    <div>
                                          <div
                                            class="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                <span class="size-2 rounded-full bg-primary" />
                                                Building our own
                                          </div>

                                          <h2
                                            class="mt-7 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl">
                                                We don't just build for others.
                                                <span class="text-muted"> We build products too.</span>
                                          </h2>

                                          <p class="mt-5 max-w-2xl text-sm leading-7 text-muted">
                                                Working with businesses gives us a close view of the
                                                challenges organizations face every day. We also use
                                                that perspective to develop our own digital products,
                                                exploring better ways to make complex work simpler and
                                                more accessible.
                                          </p>

                                          <NuxtLink to="/"
                                            class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover">
                                                Explore Softview Ghana
                                                <ArrowUpRight class="size-4" />
                                          </NuxtLink>
                                    </div>

                                    <div class="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                                          <div
                                            class="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <Sparkles class="size-6" />
                                          </div>

                                          <p class="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                                Product studio
                                          </p>

                                          <p class="mt-3 text-lg font-semibold leading-7 text-foreground">
                                                Turning real-world problems into useful digital products.
                                          </p>

                                          <p class="mt-3 text-sm leading-6 text-muted">
                                                Practical thinking. Thoughtful design. Purposeful technology.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </BaseContainer>
            </section>

            <TeamMembers />

            <!-- CTA -->
            <section>
                  <BaseContainer class="py-24 md:py-36">
                        <div class="mx-auto max-w-4xl text-center">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Let's build something meaningful
                              </p>

                              <h2
                                class="mt-7 text-4xl font-semibold leading-[1.08] tracking-tighter text-foreground sm:text-5xl lg:text-7xl">
                                    Have an idea worth
                                    <span class="text-muted"> building?</span>
                              </h2>

                              <p class="mx-auto mt-6 max-w-xl text-base leading-7 text-muted">
                                    Whether you're starting something new or improving something
                                    that already exists, we'd love to hear what you're working on.
                              </p>

                              <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <NuxtLink to="/contact"
                                      class="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                          Start a conversation
                                          <ArrowUpRight
                                            class="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                                    </NuxtLink>

                                    <NuxtLink to="/services"
                                      class="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary">
                                          Explore our services
                                    </NuxtLink>
                              </div>
                        </div>
                  </BaseContainer>
            </section>
      </div>
</template>
