<script setup lang="ts">
      usePageSeo({
            title: 'UI/UX Design — Softview Ghana',
            description: 'Digital experiences designed around users, business goals, and real-world workflows.',
            path: '/services/ui-ux-design',
      });

      const services = [
            'User research and journey mapping',
            'Wireframes and interactive prototypes',
            'Interface design and visual systems',
            'Design systems and component libraries',
            'Responsive product experiences',
            'Usability refinement and accessibility',
      ];

      const outcomes = [
            'Help users understand the product faster',
            'Reduce friction in key tasks and decisions',
            'Create a stronger, more consistent experience',
            'Increase confidence in the product from first use',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="UI/UX Design" :breadcrumbs="breadcrumbs"
                description="Digital experiences shaped around users, clarity, and the goals behind the product." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">Our design approach</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Design for clarity, trust, and action</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Great products are not only functional. They are understandable, purposeful, and
                                    easy to use.
                                    We shape interfaces around the real goals of users and the practical needs of the
                                    business.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in services" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What good looks
                                    like</p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">
                                    Interfaces that feel intuitive from the first interaction</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Less friction</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">Users can find what they need and
                                                move forward without confusion or unnecessary effort.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">More confidence</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">Clear structure and consistent
                                                patterns make the experience feel more dependable.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <div class="flex items-center gap-3">
                                    <div class="softview-divider" />
                                    <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">The
                                          result is stronger product confidence</h3>
                              </div>
                              <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div v-for="item in outcomes" :key="item" class="softview-card p-5">
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
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Want a
                                    more intuitive digital experience?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Design Your Product
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>