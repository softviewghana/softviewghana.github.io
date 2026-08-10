<script setup lang="ts">
      usePageSeo({
            title: 'Custom Software Development — Softview Ghana',
            description: 'Tailored custom software solutions designed around your business processes, workflows, and long-term growth.',
            path: '/services/custom-software-development',
      });

      const capabilities = [
            'Business process automation',
            'Operations and workflow systems',
            'Inventory, HR, and finance management',
            'Reporting and dashboarding',
            'Role-based access and permission models',
      ];

      const outcomes = [
            'Replace spreadsheet-heavy operations with controlled workflows',
            'Give teams a single source of truth for daily work',
            'Reduce manual work and improve service delivery',
            'Scale operations with thoughtful architecture',
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Custom Software" title="Software Designed Around Your Business"
              description="We build business-critical software that reflects how your team actually works, helping you simplify complexity and operate with more clarity." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div class="rounded-4xl border border-border bg-white/2 p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we build
                              </p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Operations software that fits real workflows</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Off-the-shelf platforms often force teams to adapt to rigid processes. We design
                                    software around the way your organization already operates, creating systems that
                                    are practical, scalable, and measurable.
                              </p>

                              <div class="mt-7 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in capabilities" :key="item"
                                      class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="rounded-4xl border border-border bg-slate-950/80 p-6">
                              <div class="rounded-2xl border border-border bg-white/2 p-4">
                                    <div class="flex items-center justify-between pb-3">
                                          <span class="text-xs uppercase tracking-[0.2em] text-muted">System
                                                Overview</span>
                                          <span
                                            class="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">Live</span>
                                    </div>
                                    <div class="space-y-3">
                                          <div class="h-9 rounded-xl bg-primary/10" />
                                          <div class="grid grid-cols-2 gap-3">
                                                <div class="rounded-xl border border-border bg-background/80 p-3">
                                                      <div class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                            Tasks</div>
                                                      <div class="mt-2 text-xl font-semibold text-foreground">1,248
                                                      </div>
                                                </div>
                                                <div class="rounded-xl border border-border bg-background/80 p-3">
                                                      <div class="text-[10px] uppercase tracking-[0.18em] text-muted">
                                                            Productivity</div>
                                                      <div class="mt-2 text-xl font-semibold text-foreground">+41%</div>
                                                </div>
                                          </div>
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted">
                                                      Pipeline</div>
                                                <div class="flex items-end gap-2">
                                                      <span class="w-full rounded-t-md bg-primary/60"
                                                        style="height: 35%" />
                                                      <span class="w-full rounded-t-md bg-primary/70"
                                                        style="height: 52%" />
                                                      <span class="w-full rounded-t-md bg-primary/85"
                                                        style="height: 76%" />
                                                      <span class="w-full rounded-t-md bg-primary"
                                                        style="height: 100%" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-border bg-white/2 p-6 md:p-10">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">What this
                              unlocks</h3>
                        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                              <div v-for="item in outcomes" :key="item"
                                class="rounded-2xl border border-border bg-background/80 p-5">
                                    <div
                                      class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          •</div>
                                    <p class="text-base leading-7 text-foreground/85">{{ item }}</p>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Need a system
                              that fits how you work?</h3>
                        <NuxtLink to="/contact"
                          class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Talk to our team
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>