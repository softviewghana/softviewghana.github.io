<script setup lang="ts">
      usePageSeo({
            title: 'Cloud & DevOps — Softview Ghana',
            description: 'Reliable cloud and DevOps foundations that keep applications secure, scalable, and easy to operate.',
            path: '/services/cloud-devops',
      });

      const services = [
            'Cloud architecture and migration',
            'CI/CD pipelines and release automation',
            'Infrastructure as code and provisioning',
            'Monitoring, alerts, and incident response',
            'Security hardening and backup planning',
            'Performance tuning and reliability improvements',
      ];

      const outcomes = [
            'Ship changes with more confidence',
            'Reduce downtime and operational risk',
            'Improve visibility across environments',
            'Create a cleaner, more maintainable foundation',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="Cloud & DevOps" :breadcrumbs="breadcrumbs"
                description="Infrastructure that helps your team ship faster, recover quicker, and operate with more confidence." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">Our focus</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Reliable systems for modern digital operations</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Good software needs resilient infrastructure behind it. We help teams modernize
                                    their delivery
                                    pipelines, strengthen their environments, and establish the operational discipline
                                    needed to
                                    scale without chaos.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in services" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Delivery mindset
                              </p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">
                                    Designed for reliability, speed, and ownership</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Operational clarity</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">Teams can see the health of
                                                services, releases, and environments without guesswork.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Less firefighting</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">Automation and monitoring reduce
                                                the number of interruptions that pull people away from their work.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <div class="flex items-center gap-3">
                                    <div class="softview-divider" />
                                    <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Why
                                          it matters</h3>
                              </div>
                              <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div v-for="item in outcomes" :key="item" class="softview-card p-5">
                                          <div
                                              class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                ↗</div>
                                          <p class="text-base text-foreground/85">{{ item }}</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Want a
                                    healthier delivery pipeline?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Improve Your Infrastructure
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>