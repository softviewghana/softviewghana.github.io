<script setup lang="ts">
      usePageSeo({
            title: 'Web Application Development — Softview Ghana',
            description: 'Responsive, scalable, and secure web applications built for performance and real-world use.',
            path: '/services/web-application-development',
      });

      const solutions = [
            'Business Websites',
            'Customer Portals',
            'Booking Platforms',
            'SaaS Platforms',
            'Dashboards',
            'Administrative Systems',
            'Online Platforms',
            'API-Driven Applications',
      ];

      const principles = [
            'Fast and responsive by default',
            'Built for usability and conversion',
            'Clear information architecture',
            'Secure and scalable foundations',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Web Application Development', href: '/services/web-application-development' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="Web Application Development" :breadcrumbs="breadcrumbs"
                description="Responsive, scalable, and secure web applications built for performance and real-world use." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we deliver
                              </p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Digital products that are clear, fast, and strategic</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Modern businesses need more than a website. They need digital experiences that
                                    help customers, employees, and partners get things done. We build modern web
                                    applications that combine intuitive interfaces with reliable backend systems,
                                    creating experiences that are fast, secure, maintainable, and ready to scale.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in solutions" :key="item"
                                        class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="rounded-4xl border border-border bg-background p-5">
                              <div class="rounded-2xl border border-border bg-surface p-4">
                                    <div
                                        class="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                                          <span>Analytics</span>
                                          <span class="text-primary">+32%</span>
                                    </div>
                                    <div class="space-y-3">
                                          <div
                                              class="flex items-center justify-between rounded-xl border border-border bg-background/80 p-3">
                                                <span class="text-sm text-muted">Visitors</span>
                                                <span class="text-lg font-semibold text-foreground">18.4k</span>
                                          </div>
                                          <div
                                              class="flex items-center justify-between rounded-xl border border-border bg-background/80 p-3">
                                                <span class="text-sm text-muted">Conversion</span>
                                                <span class="text-lg font-semibold text-foreground">7.6%</span>
                                          </div>
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="mb-2 text-[10px] uppercase tracking-[0.18em] text-muted">
                                                      Engagement</div>
                                                <div class="flex items-end gap-2">
                                                      <span class="w-full rounded-t-md bg-primary/60"
                                                          style="height: 28%" />
                                                      <span class="w-full rounded-t-md bg-primary/70"
                                                          style="height: 48%" />
                                                      <span class="w-full rounded-t-md bg-primary/80"
                                                          style="height: 68%" />
                                                      <span class="w-full rounded-t-md bg-primary"
                                                          style="height: 100%" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:p-10">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Built on
                              principles that matter</h3>
                        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              <div v-for="item in principles" :key="item"
                                  class="rounded-2xl border border-border bg-background/80 p-5">
                                    <div
                                        class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          ✓</div>
                                    <p class="text-base text-foreground/85">{{ item }}</p>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Need a web
                              product that performs?</h3>
                        <NuxtLink to="/contact"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Build a Web Application
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>