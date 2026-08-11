<script setup lang="ts">
      usePageSeo({
            title: 'Healthcare Technology Solutions | Softview Ghana',
            description: 'Digital systems designed to help healthcare organizations improve administrative processes, information management, and service delivery.',
            path: '/industries/healthcare',
      });

      const areas = [
            'Patient administration',
            'Appointments and scheduling',
            'Records and document management',
            'Billing and payment workflows',
            'Care-team communication',
            'Reporting and workflow visibility',
      ];

      const outcomes = [
            'Less administrative friction for busy teams',
            'Clearer handoffs between people and departments',
            'More consistent access to operational information',
            'A calmer foundation for better service delivery',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Healthcare', href: '/industries/healthcare' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Healthcare" :breadcrumbs="breadcrumbs"
                description="Digital systems that help healthcare teams simplify administration, manage information well, and deliver a more dependable service experience." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">Where we help</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Supporting the systems behind better care</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Healthcare teams need information and workflows that are clear when time matters. We
                                    focus on administrative systems that make coordination, access, and follow-through
                                    easier for the people doing the work.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in areas" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>
                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Operational
                                    focus</p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">Making the
                                    important work easier to coordinate</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Better flow</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Connected processes reduce the
                                                manual handoffs that delay administrative work.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Clearer information</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Teams can find the operational
                                                context they need without relying on scattered records.</p>
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
                                    improve your organization's administrative systems?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Explore Healthcare Solutions
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
