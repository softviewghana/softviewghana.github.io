<script setup lang="ts">
      usePageSeo({
            title: 'Professional Services Technology Solutions | Softview Ghana',
            description: 'Technology that helps service-based businesses streamline workflows, manage clients, and deliver better experiences.',
            path: '/industries/professional-services',
      });

      const areas = [
            'Client portals and self-service',
            'CRM and relationship management',
            'Workflow automation and task ownership',
            'Document management',
            'Appointments and scheduling',
            'Billing and performance reporting',
      ];

      const outcomes = [
            'Give clients a clearer, more professional experience',
            'Reduce manual coordination across the firm',
            'Keep work, documents, and billing connected',
            'Create more space for high-value client work',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Professional Services', href: '/industries/professional-services' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Professional Services" :breadcrumbs="breadcrumbs"
                description="Technology that helps client-focused firms organize work, strengthen relationships, and deliver a more dependable service experience." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">Where we help</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Streamlined systems for client-focused firms</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Great service depends on strong work behind the scenes. We help firms bring client
                                    information, delivery workflows, documents, and billing into a more connected way of
                                    working.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in areas" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>
                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Client-first
                                    operations</p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">The systems
                                    behind a better client relationship</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">A consistent experience</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Clear touchpoints and reliable
                                                information help every client interaction feel more considered.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">More focused teams</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Less time spent searching,
                                                following up, and reconciling information leaves more time for the work
                                                clients value.</p>
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
                                    streamline your firm's operations?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Explore Professional Services Solutions
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
