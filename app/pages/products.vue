<script setup lang="ts">
      usePageSeo({
            title: 'Products | Softview Ghana',
            description: 'Explore software products built, owned, and operated by Softview Ghana.',
            path: '/products',
      });

      const productCapabilities = [
            'Admissions and enrollment',
            'Student records and academics',
            'Attendance and assessments',
            'Report cards and timetables',
            'Fees, accounting, and payroll',
            'Parent, teacher, and staff portals',
            'Communication and notifications',
            'Reports and operational insight',
      ];

      const audiences = [
            {
                  title: 'School leaders',
                  description: 'A clearer view of the operations, finances, and activity that need attention across the school.',
                  label: 'Lead with visibility',
            },
            {
                  title: 'Teaching teams',
                  description: 'Practical tools for class records, assessments, attendance, and communication without duplicate work.',
                  label: 'Teach with focus',
            },
            {
                  title: 'Parents and guardians',
                  description: 'A dependable way to stay informed about fees, performance, announcements, and school life.',
                  label: 'Stay connected',
            },
      ];

      const productBenefits = [
            {
                  title: 'One connected source of truth',
                  description: 'Essential school activity lives in one integrated platform instead of disconnected tools and spreadsheets.',
            },
            {
                  title: 'A better rhythm for daily work',
                  description: 'Routine tasks become more consistent, easier to follow, and less dependent on manual coordination.',
            },
            {
                  title: 'Designed for Ghanaian basic schools',
                  description: 'The product is shaped around the working realities of basic schools and the people who run them.',
            },
            {
                  title: 'Ready to grow with the school',
                  description: 'Cloud-based access and a flexible foundation support the school as needs, staff, and enrollment evolve.',
            },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Softview Products" title="Technology Built for Work That Matters"
                description="We build and operate focused digital products that solve real operational problems for the organizations they serve.">
                  <!-- <template #visual>
                        <div class="grid gap-4 sm:grid-cols-[0.82fr_1.18fr]">
                              <div class="softview-card flex flex-col justify-between p-5">
                                    <div>
                                          <div class="flex items-center justify-between">
                                                <span
                                                    class="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Product
                                                      no. 01</span>
                                                <span
                                                    class="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Live</span>
                                          </div>
                                          <p class="mt-8 text-2xl font-semibold tracking-tighter text-foreground">
                                                eSchool<br>Ghana</p>
                                          <p class="mt-3 text-sm leading-6 text-muted">
                                                The operating system for basic schools.
                                          </p>
                                    </div>
                                    <div class="mt-8 flex items-center gap-2 text-xs font-medium text-primary">
                                          <span class="size-2 rounded-full bg-primary" />
                                          Built and operated by Softview
                                    </div>
                              </div>

                              <div class="softview-card p-4 sm:p-5">
                                    <div class="flex items-center justify-between border-b border-border/70 pb-3">
                                          <div>
                                                <p
                                                    class="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                                                      eSchool Ghana</p>
                                                <p class="mt-1 text-sm font-medium text-foreground">School day overview
                                                </p>
                                          </div>
                                          <div class="flex items-center gap-1.5 text-xs text-primary">
                                                <span class="size-2 rounded-full bg-primary" />
                                                Connected
                                          </div>
                                    </div>
                                    <div class="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                                          <div class="rounded-lg border border-border/70 bg-background/70 p-2.5">
                                                <p class="text-[9px] uppercase tracking-[0.14em] text-muted">Admissions
                                                </p>
                                                <div class="mt-3 h-1.5 w-4/5 rounded-full bg-primary/70" />
                                          </div>
                                          <div class="rounded-lg border border-border/70 bg-background/70 p-2.5">
                                                <p class="text-[9px] uppercase tracking-[0.14em] text-muted">Academics
                                                </p>
                                                <div class="mt-3 h-1.5 w-3/5 rounded-full bg-primary/60" />
                                          </div>
                                          <div class="rounded-lg border border-border/70 bg-background/70 p-2.5">
                                                <p class="text-[9px] uppercase tracking-[0.14em] text-muted">Finance</p>
                                                <div class="mt-3 h-1.5 w-2/3 rounded-full bg-primary/80" />
                                          </div>
                                    </div>
                                    <div class="mt-4 rounded-lg border border-border/70 bg-background/60 p-3">
                                          <div
                                              class="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                                                <span>School operations</span>
                                                <span class="text-primary">In one place</span>
                                          </div>
                                          <div class="mt-3 grid grid-cols-4 gap-2">
                                                <div class="h-10 rounded-md bg-primary/15" />
                                                <div class="h-10 rounded-md bg-primary/10" />
                                                <div class="h-10 rounded-md bg-primary/20" />
                                                <div class="h-10 rounded-md bg-primary/12" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </template> -->
            </PageHero>

            <BaseContainer class="mt-8 md:mt-12">
                  <section id="eschool-ghana" class="softview-panel p-6 md:p-10 lg:p-12">
                        <div
                            class="flex flex-col gap-6 border-b border-border/70 pb-8 md:flex-row md:items-end md:justify-between">
                              <div class="max-w-2xl">
                                    <span class="softview-kicker">Featured product</span>
                                    <h2
                                        class="mt-5 text-4xl font-semibold tracking-tighter text-foreground md:text-6xl">
                                          eSchool
                                          Ghana</h2>
                              </div>
                              <p class="max-w-xl text-base leading-8 text-muted md:text-lg">
                                    A connected school operating system that helps basic schools spend less time
                                    managing
                                    scattered information and more time moving the school forward.
                              </p>
                        </div>

                        <div class="mt-10 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
                              <div>
                                    <span class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                          One platform, one school view
                                    </span>
                                    <h3
                                        class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                          Every part of the school can work from the same picture.
                                    </h3>
                                    <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                          eSchool Ghana brings admissions, learning, finance, communication, and
                                          reporting into a
                                          single practical workspace. It gives each person the context they need while
                                          keeping the
                                          whole school aligned.
                                    </p>

                                    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                                          <NuxtLink to="https://eschoolghana.com" target="_blank" rel="noopener"
                                              external
                                              class="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:bg-primary-hover">
                                                Explore eSchool Ghana
                                          </NuxtLink>
                                          <NuxtLink to="https://eschoolghana.com/watch-demo" target="_blank"
                                              rel="noopener" external
                                              class="inline-flex items-center justify-center rounded-xl border border-border bg-background/60 px-5 py-3 font-medium text-foreground transition hover:border-primary hover:text-primary">
                                                Watch the demo
                                          </NuxtLink>
                                    </div>
                              </div>

                              <div class="grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in productCapabilities" :key="item"
                                        class="softview-card flex items-center gap-3 px-4 py-3.5">
                                          <span
                                              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">+</span>
                                          <span class="text-sm text-foreground/90">{{ item }}</span>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="mb-8 max-w-2xl">
                              <span class="softview-kicker">Built around people</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">One
                                    school
                                    system. Useful to everyone who keeps it moving.</h2>
                        </div>

                        <div class="grid gap-4 lg:grid-cols-3">
                              <article v-for="audience in audiences" :key="audience.title" class="softview-panel p-6">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                          {{ audience.label }}
                                    </p>
                                    <h3 class="mt-5 text-2xl font-semibold tracking-tighter text-foreground">
                                          {{ audience.title }}
                                    </h3>
                                    <p class="mt-4 text-base leading-7 text-muted">{{ audience.description }}</p>
                              </article>
                        </div>
                  </section>

                  <section class="mt-16 grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
                        <div class="softview-panel p-6 md:p-8">
                              <span class="softview-kicker">The product promise</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Better
                                    information creates better school decisions.</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    The right software should not add another layer of work. It should give the school a
                                    dependable
                                    rhythm, clearer ownership, and the confidence to act on what is happening.
                              </p>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-2">
                              <article v-for="benefit in productBenefits" :key="benefit.title"
                                  class="softview-card p-5 md:p-6">
                                    <div
                                        class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          +
                                    </div>
                                    <h3 class="mt-5 text-lg font-semibold text-foreground">{{ benefit.title }}</h3>
                                    <p class="mt-3 text-sm leading-7 text-muted">{{ benefit.description }}</p>
                              </article>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                              <span class="softview-kicker">See the platform in action</span>
                              <h2
                                  class="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                                    Give your school a better way to run every day.</h2>
                              <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">See how
                                    eSchool Ghana can
                                    support your school's operations, people, and next stage of growth.</p>
                              <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                    <NuxtLink to="https://eschoolghana.com/watch-demo" target="_blank" rel="noopener"
                                        external
                                        class="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                          Request a demo
                                    </NuxtLink>
                                    <NuxtLink to="/contact"
                                        class="inline-flex items-center justify-center rounded-xl border border-border bg-background/60 px-6 py-3.5 font-medium text-foreground transition hover:border-primary hover:text-primary">
                                          Talk to Softview
                                    </NuxtLink>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 border-t border-border/70 pt-8 md:flex md:items-end md:justify-between">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What comes next
                              </p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">More
                                    products are
                                    on the horizon.</h2>
                              <p class="mt-4 text-base leading-8 text-muted">We continue to explore practical products
                                    for
                                    organizations with meaningful work to improve.</p>
                        </div>
                        <NuxtLink to="/contact"
                            class="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:text-primary-hover md:mt-0">
                              Share a problem worth solving <span aria-hidden="true">-&gt;</span>
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
