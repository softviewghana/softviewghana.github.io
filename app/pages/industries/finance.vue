<script setup lang="ts">
      usePageSeo({
            title: 'Finance & Financial Services Technology Solutions | Softview Ghana',
            description: 'Reliable technology for organizations that depend on accurate information, secure workflows, and efficient operations.',
            path: '/industries/finance',
      });

      const areas = [
            'Financial workflows and approvals',
            'Customer and account management',
            'Document and records management',
            'Reporting and operational visibility',
            'Workflow automation',
            'Secure system integrations',
      ];

      const outcomes = [
            'More reliable handling of high-value information',
            'Clearer ownership across reviews and approvals',
            'Faster access to the records teams need',
            'A stronger foundation for controlled growth',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Finance & Financial Services', href: '/industries/finance' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Finance & Financial Services" :breadcrumbs="breadcrumbs"
                description="Dependable technology for financial organizations that need accurate information, controlled workflows, and operational clarity." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">Where we help</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Dependable systems for financial operations</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Financial organizations rely on information that is accurate, traceable, and
                                    available when decisions need to be made. We help turn fragmented work into clearer,
                                    controlled digital workflows.
                              </p>
                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in areas" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}</div>
                              </div>
                        </div>
                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Built for trust
                              </p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">Clarity where
                                    accuracy and accountability matter</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Traceable decisions</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Clear approval paths make it
                                                easier to understand progress, ownership, and the status of a request.
                                          </p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Practical control</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">The right systems help teams
                                                protect sensitive work while keeping daily operations moving.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <div class="flex items-center gap-3">
                                    <div class="softview-divider" />
                                    <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">What
                                          this unlocks</h3>
                              </div>
                              <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div v-for="item in outcomes" :key="item" class="softview-card p-5"><span
                                              class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">+</span>
                                          <p class="mt-4 text-base leading-7 text-foreground/85">{{ item }}</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Ready to
                                    strengthen your financial operations?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Explore Finance Solutions</NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
