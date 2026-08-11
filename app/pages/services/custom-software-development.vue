<script setup lang="ts">
      usePageSeo({
            title: 'Custom Software Development — Softview Ghana',
            description: 'Custom business software designed around your processes, workflows, and growth goals.',
            path: '/services/custom-software-development',
      });

      const capabilities = [
            'ERP and operations systems',
            'CRM and client workflows',
            'Business process automation',
            'Internal management portals',
            'Reporting and business intelligence',
            'API integrations and data connections',
      ];

      const approach = [
            {
                  title: 'Understand the process',
                  text: 'We map the work, decision points, and friction before we design anything.',
            },
            {
                  title: 'Design for adoption',
                  text: 'The experience is shaped around real users so the system feels clear and practical.',
            },
            {
                  title: 'Build for growth',
                  text: 'We structure the product so it can evolve as your organization changes.',
            },
            {
                  title: 'Support long-term use',
                  text: 'We help maintain and improve the product after launch so it keeps delivering value.',
            },
      ];

      const outcomes = [
            'Reduce manual effort and operational bottlenecks',
            'Give teams one reliable source of truth',
            'Create smoother handoffs across departments',
            'Build a foundation that can grow with the business',
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
                description="Custom software that fits your operations, your people, and the way your business grows." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">What we build</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Software that fits how your team actually works</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Off-the-shelf systems can be useful, but they rarely match the reality of a growing
                                    organization. We design and build tailored platforms around your real workflows,
                                    your
                                    policies, and the way your people need to collaborate.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in capabilities" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why it matters
                              </p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">
                                    From scattered processes to dependable digital operations</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Clearer workflow</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">We reduce friction by simplifying
                                                the steps that slow teams down.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Better visibility</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">Managers and teams can see
                                                progress, ownership, and performance without chasing updates.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Long-term value</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">The system is built to be
                                                maintained, improved, and expanded as your needs evolve.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <div class="flex items-center gap-3">
                                    <div class="softview-divider" />
                                    <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Our
                                          approach</h3>
                              </div>
                              <div class="mt-8 grid gap-4 lg:grid-cols-2">
                                    <div v-for="step in approach" :key="step.title" class="softview-card p-5">
                                          <p class="text-sm font-semibold text-primary">{{ step.title }}</p>
                                          <p class="mt-3 text-base leading-7 text-muted">{{ step.text }}</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">What this
                                    unlocks</h3>
                              <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div v-for="item in outcomes" :key="item" class="softview-card p-5">
                                          <div
                                              class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                •</div>
                                          <p class="text-base leading-7 text-foreground/85">{{ item }}</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Need a
                                    system that fits how you work?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Discuss Your Software Project
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>