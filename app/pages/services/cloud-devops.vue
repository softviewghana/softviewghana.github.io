<script setup lang="ts">
      usePageSeo({
            title: 'Cloud & DevOps — Softview Ghana',
            description: 'Reliable infrastructure that keeps your applications secure, scalable, and available.',
            path: '/services/cloud-devops',
      });

      const services = [
            'Cloud Migration',
            'Server Management',
            'CI/CD Pipelines',
            'Infrastructure Automation',
            'Monitoring',
            'Performance Optimization',
            'Backups',
            'Deployment Automation',
      ];

      const outcomes = [
            'More reliable deployments',
            'Faster release cycles',
            'Lower operational risk',
            'Cleaner infrastructure ownership',
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
                description="Reliable infrastructure that keeps your applications secure, scalable, and available." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our focus</p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Reliable systems for modern digital operations</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Good software needs reliable infrastructure behind it. We help businesses build
                                    and manage infrastructure that supports dependable application delivery, secure
                                    deployments, performance, scalability, and operational visibility. From
                                    deployment pipelines to server infrastructure, we help make technology easier to
                                    operate and maintain.
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
                                          <span>Deployment Health</span>
                                          <span class="text-primary">99.9%</span>
                                    </div>
                                    <div class="space-y-3">
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="flex items-center justify-between text-sm text-muted">
                                                      <span>Uptime</span>
                                                      <span class="text-foreground">99.9%</span>
                                                </div>
                                          </div>
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="flex items-center justify-between text-sm text-muted">
                                                      <span>Deploys / month</span>
                                                      <span class="text-foreground">48</span>
                                                </div>
                                          </div>
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="flex items-center justify-between text-sm text-muted">
                                                      <span>Response time</span>
                                                      <span class="text-foreground">1.2s</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:p-10">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Why it matters
                        </h3>
                        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              <div v-for="item in outcomes" :key="item"
                                  class="rounded-2xl border border-border bg-background/80 p-5">
                                    <div
                                        class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          ↗</div>
                                    <p class="text-base text-foreground/85">{{ item }}</p>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Want a
                              healthier delivery pipeline?</h3>
                        <NuxtLink to="/contact"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Improve Your Infrastructure
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>