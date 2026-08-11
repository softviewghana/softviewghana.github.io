<script setup lang="ts">
      usePageSeo({
            title: 'Mobile Application Development — Softview Ghana',
            description: 'Cross-platform mobile apps designed to keep teams and customers connected wherever they are.',
            path: '/services/mobile-application-development',
      });

      const appTypes = [
            'Business and operations apps',
            'Customer-facing mobile experiences',
            'Staff productivity tools',
            'Offline-first and sync-ready products',
            'Secure authentication and access control',
            'Push notifications and engagement features',
      ];

      const valuePoints = [
            'Keep essential work accessible anywhere',
            'Improve communication with customers and teams',
            'Reduce repetitive steps on the go',
            'Deliver a polished experience people actually use',
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
                description="Mobile experiences that keep work, service, and communication moving wherever people are." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">What we create</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Apps that support users in the moments that matter</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    People expect technology to be available wherever they are. We design and build
                                    mobile
                                    applications that make core services and day-to-day tasks easier, faster, and more
                                    reliable.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in appTypes" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why it works</p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">
                                    Designed for daily use, not just installation</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Built around real habits</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">We shape the experience around
                                                how people actually move through a task on mobile.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Reliable when stakes are high
                                          </p>
                                          <p class="mt-2 text-sm leading-7 text-muted">The app is engineered for
                                                stability, security, and performance across devices.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <div class="flex items-center gap-3">
                                    <div class="softview-divider" />
                                    <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">The
                                          value is in daily usage</h3>
                              </div>
                              <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div v-for="item in valuePoints" :key="item" class="softview-card p-5">
                                          <div
                                              class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                ✓</div>
                                          <p class="text-base text-foreground/85">{{ item }}</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Ready for
                                    a mobile product your users will keep coming back to?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Build a Mobile App
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>