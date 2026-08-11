<script setup lang="ts">
      usePageSeo({
            title: 'Education Technology Solutions | Softview Ghana',
            description: 'Technology that helps schools and education organizations manage operations, improve communication, and create better experiences for staff, students, and families.',
            path: '/industries/education',
      });

      const areas = [
            'Admissions and enrollment',
            'Student information and records',
            'Academic administration',
            'Attendance and assessments',
            'Fees, payments, and finance',
            'Family communication',
            'Reporting and operational insight',
            'Integrated school workflows',
      ];

      const outcomes = [
            'Less administrative effort across the school day',
            'Clearer information for staff, leaders, and families',
            'More dependable processes from admissions to reporting',
            'A foundation that can grow with the school',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Education', href: '/industries/education' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Education" :breadcrumbs="breadcrumbs"
                description="Technology that gives schools a clearer way to manage the work behind learning, from admissions and academics to communication and finance." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">Where we help</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Built around the reality of running a school</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Schools depend on accurate information, timely communication, and dependable
                                    routines.
                                    We design technology that helps leaders, teachers, administrators, and families work
                                    from the same clear picture.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in areas" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured product
                              </p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">eSchool Ghana
                              </h3>
                              <p class="mt-3 text-base leading-7 text-muted">
                                    The school operating system built to bring daily school activity into one connected
                                    workspace.
                              </p>
                              <div class="mt-6 space-y-3">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">One view of the school</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Admissions, academics,
                                                attendance, finance, and communication can work together.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Designed for practical
                                                adoption</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Clear workflows help teams
                                                replace scattered records without adding unnecessary complexity.</p>
                                    </div>
                              </div>
                              <NuxtLink to="https://eschoolghana.com" target="_blank" rel="noopener" external
                                  class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover">
                                    Discover eSchool Ghana <span aria-hidden="true">-&gt;</span>
                              </NuxtLink>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <div class="flex items-center gap-3">
                                    <div class="softview-divider" />
                                    <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">What
                                          stronger school operations unlock</h3>
                              </div>
                              <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div v-for="item in outcomes" :key="item" class="softview-card p-5">
                                          <span
                                              class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">+</span>
                                          <p class="mt-4 text-base leading-7 text-foreground/85">{{ item }}</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Ready to
                                    modernize your school's operations?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Explore Education Solutions
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
