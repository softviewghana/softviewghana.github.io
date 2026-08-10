<script setup lang="ts">
      usePageSeo({
            title: 'Mobile App Development — Softview Ghana',
            description: 'Mobile applications designed for customer engagement, operational efficiency, and product usability on the go.',
            path: '/services/mobile-apps-development',
      });

      const appTypes = [
            'Customer-facing apps',
            'Internal mobile tools',
            'Field service solutions',
            'Cross-platform products',
            'Operational and reporting apps',
      ];

      const valuePoints = [
            'Access essential work anywhere',
            'Improve customer communication',
            'Simplify repetitive mobile workflows',
            'Deliver polished user experiences',
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Mobile Apps" title="Mobile Experiences That Keep Work in Motion"
              description="We build practical mobile products that improve communication, access, and daily operations for teams and customers." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-white/2 p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we create
                              </p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Apps that support users where they are</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Mobile products are most valuable when they solve a real job quickly. We focus on
                                    clarity, performance, and user confidence so the app becomes part of everyday work
                                    rather than an extra burden.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in appTypes" :key="item"
                                      class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="rounded-4xl border border-border bg-slate-950/80 p-5">
                              <div class="rounded-2xl border border-border bg-white/2 p-4">
                                    <div
                                      class="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                                          <span>App usage</span>
                                          <span class="text-primary">Live</span>
                                    </div>
                                    <div class="space-y-3">
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="text-[10px] uppercase tracking-[0.18em] text-muted">Tasks
                                                      completed</div>
                                                <div class="mt-2 text-xl font-semibold text-foreground">31k</div>
                                          </div>
                                          <div class="grid grid-cols-2 gap-3">
                                                <div class="rounded-xl border border-border bg-background/80 p-3">
                                                      <div class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                            Retention</div>
                                                      <div class="mt-2 text-xl font-semibold text-foreground">72%</div>
                                                </div>
                                                <div class="rounded-xl border border-border bg-background/80 p-3">
                                                      <div class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                            Satisfaction</div>
                                                      <div class="mt-2 text-xl font-semibold text-foreground">4.8/5
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-border bg-white/2 p-6 md:p-10">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">The value is
                              in daily usage</h3>
                        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              <div v-for="item in valuePoints" :key="item"
                                class="rounded-2xl border border-border bg-background/80 p-5">
                                    <div
                                      class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          ✓</div>
                                    <p class="text-base text-foreground/85">{{ item }}</p>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Ready for a
                              mobile product your users will actually keep using?</h3>
                        <NuxtLink to="/contact"
                          class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Let’s plan it
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>