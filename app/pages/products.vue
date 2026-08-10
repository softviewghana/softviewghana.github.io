<script setup lang="ts">
      usePageSeo({
            title: 'Products — Softview Ghana',
            description: 'Explore software products built and operated by Softview Ghana, including eSchool Ghana.',
            path: '/products',
      });

      const productCapabilities = [
            'Admissions',
            'Student Management',
            'Academics',
            'Attendance',
            'Fees & Payments',
            'Examinations',
            'Communication',
            'Reports',
            'User & Role Management',
            'School Administration',
      ];

      const productBenefits = [
            'Centralized school operations',
            'Reduced administrative workload',
            'Better access to information',
            'Improved communication',
            'Financial visibility',
            'Academic visibility',
            'Role-based access',
            'Cloud accessibility',
            'Scalable architecture',
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Our Products" title="Technology We Build, Own, and Operate"
              description="We don't only build software for businesses. We create and operate digital products designed to solve real problems and create lasting value.">
                  <template #visual>
                        <div class="grid gap-5 bg-slate-950/70 p-4 md:grid-cols-[0.9fr_1.1fr] md:p-6">
                              <div class="rounded-2xl border border-border bg-white/2 p-4">
                                    <div
                                      class="mb-4 flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-muted">
                                          <span>Product</span>
                                          <span
                                            class="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-primary">Live</span>
                                    </div>
                                    <div class="space-y-3">
                                          <div class="h-2.5 w-20 rounded-full bg-primary/30" />
                                          <div class="h-2 w-32 rounded-full bg-white/10" />
                                          <div class="grid grid-cols-2 gap-3 pt-2">
                                                <div class="rounded-xl border border-border bg-background/80 p-3">
                                                      <div class="text-[10px] uppercase tracking-[0.2em] text-muted">
                                                            Revenue</div>
                                                      <div class="mt-2 text-xl font-semibold text-foreground">GHS 45k
                                                      </div>
                                                </div>
                                                <div class="rounded-xl border border-border bg-background/80 p-3">
                                                      <div class="text-[10px] uppercase tracking-[0.2em] text-muted">
                                                            Active Users</div>
                                                      <div class="mt-2 text-xl font-semibold text-foreground">2.4k</div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div class="rounded-2xl border border-border bg-background/80 p-4">
                                    <div class="mb-4 flex items-center justify-between border-b border-border pb-3">
                                          <div>
                                                <div class="text-[10px] uppercase tracking-[0.2em] text-muted">Overview
                                                </div>
                                                <div class="mt-1 text-lg font-semibold text-foreground">School Operating
                                                      System</div>
                                          </div>
                                          <div class="flex items-center gap-2 text-xs text-primary">
                                                <span class="size-2 rounded-full bg-primary" />
                                                Live
                                          </div>
                                    </div>
                                    <div class="grid grid-cols-3 gap-3 text-center">
                                          <div class="rounded-xl border border-border bg-white/2 p-3">
                                                <div class="text-[10px] uppercase tracking-[0.2em] text-muted">Students
                                                </div>
                                                <div class="mt-2 text-2xl font-semibold text-foreground">2,431</div>
                                          </div>
                                          <div class="rounded-xl border border-border bg-white/2 p-3">
                                                <div class="text-[10px] uppercase tracking-[0.2em] text-muted">
                                                      Attendance</div>
                                                <div class="mt-2 text-2xl font-semibold text-foreground">96.2%</div>
                                          </div>
                                          <div class="rounded-xl border border-border bg-white/2 p-3">
                                                <div class="text-[10px] uppercase tracking-[0.2em] text-muted">Fees
                                                </div>
                                                <div class="mt-2 text-2xl font-semibold text-foreground">84.6%</div>
                                          </div>
                                    </div>
                                    <div class="mt-4 rounded-2xl border border-border bg-slate-900/80 p-4">
                                          <div
                                            class="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                                                <span>Student performance</span>
                                                <span>Q3</span>
                                          </div>
                                          <div
                                            class="h-20 rounded-xl bg-[linear-gradient(135deg,rgba(39,201,120,0.16),rgba(255,255,255,0.02))] p-3">
                                                <div class="flex h-full items-end gap-2">
                                                      <span class="w-full rounded-t-md bg-primary/60"
                                                        style="height: 35%" />
                                                      <span class="w-full rounded-t-md bg-primary/40"
                                                        style="height: 58%" />
                                                      <span class="w-full rounded-t-md bg-primary/50"
                                                        style="height: 72%" />
                                                      <span class="w-full rounded-t-md bg-primary/70"
                                                        style="height: 86%" />
                                                      <span class="w-full rounded-t-md bg-primary/80"
                                                        style="height: 100%" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </template>
            </PageHero>

            <BaseContainer class="mt-8 md:mt-16">
                  <section id="eschool-ghana" class="rounded-4xl border border-border bg-white/2 p-6 md:p-10">
                        <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                              <div>
                                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured
                                          Product</p>
                                    <h2
                                      class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                                          eSchool
                                          Ghana</h2>
                              </div>
                              <p class="max-w-xl text-base leading-8 text-muted md:text-lg">
                                    The modern School Operating System for private basic schools.
                              </p>
                        </div>

                        <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                              <div>
                                    <p class="text-base leading-8 text-muted md:text-lg">
                                          eSchool Ghana brings the essential operations of a school into one integrated
                                          platform—from admissions and academics to attendance, communication, fees,
                                          examinations,
                                          and reporting.
                                    </p>

                                    <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                          <div v-for="item in productCapabilities" :key="item"
                                            class="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground/85">
                                                {{ item }}
                                          </div>
                                    </div>
                              </div>

                              <div
                                class="rounded-[28px] border border-border bg-slate-950/80 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
                                    <div class="flex items-center justify-between border-b border-border pb-3">
                                          <div class="flex items-center gap-2">
                                                <div class="h-2.5 w-2.5 rounded-full bg-primary" />
                                                <span class="text-sm font-medium text-foreground">eSchool Ghana</span>
                                          </div>
                                          <span
                                            class="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Live</span>
                                    </div>

                                    <div class="mt-4 grid grid-cols-[180px_1fr] gap-4">
                                          <aside class="rounded-2xl border border-border bg-white/2 p-3">
                                                <div class="space-y-2 text-sm text-foreground/80">
                                                      <div class="rounded-lg bg-white/2 px-2 py-2">Dashboard</div>
                                                      <div class="rounded-lg bg-white/2 px-2 py-2">Students</div>
                                                      <div class="rounded-lg bg-white/2 px-2 py-2">Admissions</div>
                                                      <div class="rounded-lg bg-white/2 px-2 py-2">Academics</div>
                                                      <div class="rounded-lg bg-white/2 px-2 py-2">Attendance</div>
                                                      <div class="rounded-lg bg-white/2 px-2 py-2">Finance</div>
                                                </div>
                                          </aside>

                                          <div class="rounded-2xl border border-border bg-background/80 p-3">
                                                <div
                                                  class="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                                                      <span>Overview</span>
                                                      <span>Today</span>
                                                </div>
                                                <div class="grid grid-cols-3 gap-3">
                                                      <div
                                                        class="rounded-xl border border-border bg-white/2 p-2 text-center">
                                                            <div
                                                              class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                                  Students
                                                            </div>
                                                            <div class="mt-2 text-xl font-semibold text-foreground">2431
                                                            </div>
                                                      </div>
                                                      <div
                                                        class="rounded-xl border border-border bg-white/2 p-2 text-center">
                                                            <div
                                                              class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                                  Fees
                                                            </div>
                                                            <div class="mt-2 text-xl font-semibold text-foreground">
                                                                  84.6%</div>
                                                      </div>
                                                      <div
                                                        class="rounded-xl border border-border bg-white/2 p-2 text-center">
                                                            <div
                                                              class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                                  Attendance</div>
                                                            <div class="mt-2 text-xl font-semibold text-foreground">
                                                                  96.2%</div>
                                                      </div>
                                                </div>
                                                <div class="mt-4 rounded-xl border border-border bg-slate-900/70 p-3">
                                                      <div
                                                        class="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted">
                                                            Performance</div>
                                                      <div class="flex h-24 items-end gap-2">
                                                            <span class="w-full rounded-t-md bg-primary/50"
                                                              style="height: 35%" />
                                                            <span class="w-full rounded-t-md bg-primary/60"
                                                              style="height: 52%" />
                                                            <span class="w-full rounded-t-md bg-primary/70"
                                                              style="height: 69%" />
                                                            <span class="w-full rounded-t-md bg-primary/80"
                                                              style="height: 86%" />
                                                            <span class="w-full rounded-t-md bg-primary"
                                                              style="height: 100%" />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-border bg-white/2 p-6 md:p-10">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Built Around
                              How Schools
                              Actually Operate</h3>
                        <p class="mt-4 max-w-3xl text-base leading-8 text-muted md:text-lg">
                              eSchool Ghana is designed specifically for private basic schools and the realities of
                              daily school
                              administration—fast decisions, shared responsibilities, and a need for accurate
                              operational
                              visibility.
                        </p>

                        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                              <div v-for="benefit in productBenefits" :key="benefit"
                                class="rounded-2xl border border-border bg-background/80 p-5">
                                    <div
                                      class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          <span class="text-lg">✓</span>
                                    </div>
                                    <p class="text-base font-medium text-foreground">{{ benefit }}</p>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">Ready to
                              modernize your
                              school?</h3>
                        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                              <NuxtLink to="/products/eschool-ghana"
                                class="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Discover eSchool Ghana
                              </NuxtLink>
                              <NuxtLink to="/contact"
                                class="inline-flex items-center justify-center rounded-2xl border border-border bg-background/70 px-6 py-3.5 font-medium text-foreground transition hover:border-primary hover:text-primary">
                                    Request a Demo
                              </NuxtLink>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-border bg-white/2 p-8 md:p-10">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">More Products
                              Are Coming
                        </h3>
                        <p class="mt-4 max-w-2xl text-base leading-8 text-muted md:text-lg">
                              We're continuously exploring new software products that solve meaningful problems for
                              businesses and
                              organizations.
                        </p>

                        <div class="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <p class="text-lg font-medium text-foreground">Have a problem worth solving?</p>
                              <NuxtLink to="/contact"
                                class="inline-flex items-center gap-2 text-primary hover:text-primary-hover">
                                    Talk to us <span aria-hidden="true">→</span>
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>