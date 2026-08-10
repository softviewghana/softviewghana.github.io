<script setup lang="ts">
      usePageSeo({
            title: 'Custom Software Development — Softview Ghana',
            description: 'Tailored software solutions built around your unique business processes, workflows, and goals.',
            path: '/services/custom-software-development',
      });

      const capabilities = [
            'ERP Systems',
            'CRM Solutions',
            'Business Automation',
            'Customer Portals',
            'Internal Management Systems',
            'Workflow Management',
            'Business Intelligence',
            'API Integrations',
      ];

      const outcomes = [
            'Replace manual work with connected, reliable systems',
            'Improve visibility across teams and departments',
            'Connect disconnected tools into one workflow',
            'Build software that grows with your organization',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Custom Software Development', href: '/services/custom-software-development' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="Custom Software Development" :breadcrumbs="breadcrumbs"
                description="Tailored software solutions built around your unique business processes, workflows, and goals." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we build
                              </p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Software built around how you actually work</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Off-the-shelf software can be useful, but it doesn't always fit the way your
                                    business works. We design and develop custom software around your actual
                                    processes, helping you replace manual work, connect disconnected systems,
                                    improve visibility, and create more efficient operations. From internal
                                    management platforms to complex business systems, we build software that grows
                                    with your organization.
                              </p>

                              <div class="mt-7 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in capabilities" :key="item"
                                        class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="rounded-4xl border border-border bg-background p-6">
                              <div class="rounded-2xl border border-border bg-surface p-4">
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

                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:p-10">
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
                              Discuss Your Software Project
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>