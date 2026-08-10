<script setup lang="ts">
      usePageSeo({
            title: 'Education Technology Solutions | Softview Ghana',
            description: 'Technology that helps schools and education organizations manage operations, improve communication, and create better experiences for staff, students, and families.',
            path: '/industries/education',
      });

      const areas = [
            'School Management',
            'Admissions',
            'Student Information',
            'Academic Administration',
            'Attendance',
            'Fees & Payments',
            'Communication',
            'Reporting',
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
                description="Technology that helps schools and education organizations manage operations, improve communication, and create better experiences for staff, students, and families." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Focus areas</p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Built around real school operations</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Schools depend on accurate information, timely communication, and dependable
                                    administrative processes. We design technology that supports the people who run
                                    schools every day.
                              </p>

                              <div class="mt-7 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in areas" :key="item"
                                        class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="rounded-4xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Featured
                                    Product</p>
                              <h3 class="mt-3 text-2xl font-semibold text-foreground">eSchool Ghana</h3>
                              <p class="mt-3 text-base leading-7 text-muted">
                                    The School Operating System built for basic schools in Ghana.
                              </p>
                              <NuxtLink to="https://eschoolghana.com" target="_blank" rel="noopener" external
                                  class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover">
                                    Discover eSchool Ghana <span aria-hidden="true">→</span>
                              </NuxtLink>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Ready to
                              modernize your school's operations?</h3>
                        <NuxtLink to="/contact"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Explore Education Solutions
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
