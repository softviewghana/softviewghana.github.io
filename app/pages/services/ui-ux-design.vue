<script setup lang="ts">
      usePageSeo({
            title: 'UI/UX Design — Softview Ghana',
            description: 'Digital experiences designed around users, business goals, and real-world workflows.',
            path: '/services/ui-ux-design',
      });

      const services = [
            'User Research',
            'Wireframing',
            'Interface Design',
            'Design Systems',
            'Product Prototyping',
            'User Flows',
            'Responsive Design',
            'Usability Improvements',
      ];

      const outcomes = [
            'Better user understanding',
            'Clearer digital journeys',
            'Lower friction in critical tasks',
            'Consistent product experience',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="UI/UX Design" :breadcrumbs="breadcrumbs"
                description="Digital experiences designed around users, business goals, and real-world workflows." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our design
                                    approach</p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Design for clarity, trust, and action</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Great software isn't only about what happens behind the scenes. We design
                                    interfaces that make products easier to understand, easier to use, and more
                                    effective for the people who rely on them. Our design process connects user needs
                                    with business objectives to create experiences that are both intuitive and
                                    purposeful.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in services" :key="item"
                                        class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="rounded-4xl border border-border bg-background p-5">
                              <div class="rounded-2xl border border-border bg-surface p-4">
                                    <div
                                        class="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                                          <span>UX Score</span>
                                          <span class="text-primary">92</span>
                                    </div>
                                    <div class="space-y-3">
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="text-[10px] uppercase tracking-[0.18em] text-muted">Task
                                                      success</div>
                                                <div class="mt-2 text-xl font-semibold text-foreground">94%</div>
                                          </div>
                                          <div class="grid grid-cols-2 gap-3">
                                                <div class="rounded-xl border border-border bg-background/80 p-3">
                                                      <div class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                            Clarity</div>
                                                      <div class="mt-2 text-xl font-semibold text-foreground">High</div>
                                                </div>
                                                <div class="rounded-xl border border-border bg-background/80 p-3">
                                                      <div class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                            Usability</div>
                                                      <div class="mt-2 text-xl font-semibold text-foreground">Strong
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:p-10">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">The result is
                              product confidence</h3>
                        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              <div v-for="item in outcomes" :key="item"
                                  class="rounded-2xl border border-border bg-background/80 p-5">
                                    <div
                                        class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          ✓</div>
                                    <p class="text-base text-foreground/85">{{ item }}</p>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Want a more
                              intuitive digital experience?</h3>
                        <NuxtLink to="/contact"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Design Your Product
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>