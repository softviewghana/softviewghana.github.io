<script setup lang="ts">
      usePageSeo({
            title: 'Mobile Application Development — Softview Ghana',
            description: 'Cross-platform mobile applications designed for Android and iOS.',
            path: '/services/mobile-application-development',
      });

      const appTypes = [
            'Business Apps',
            'Customer Apps',
            'Internal Staff Apps',
            'Offline-First Solutions',
            'API Integrations',
            'Mobile Dashboards',
            'Push Notifications',
            'Authentication',
      ];

      const valuePoints = [
            'Access essential work anywhere',
            'Improve customer communication',
            'Simplify repetitive mobile workflows',
            'Deliver polished user experiences',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Mobile Application Development', href: '/services/mobile-application-development' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="Mobile Application Development" :breadcrumbs="breadcrumbs"
                description="Cross-platform mobile applications designed for Android and iOS." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we create
                              </p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Apps that support users where they are</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Your customers and teams are increasingly mobile. We design and build mobile
                                    applications that make important services, information, and business processes
                                    available wherever users are. Our approach focuses on usability, performance,
                                    reliability, and seamless integration with your existing systems.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in appTypes" :key="item"
                                        class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="rounded-4xl border border-border bg-background p-5">
                              <div class="rounded-2xl border border-border bg-surface p-4">
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

                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:p-10">
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
                              Build a Mobile App
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>