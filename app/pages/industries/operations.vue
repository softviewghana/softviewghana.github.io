<script setup lang="ts">
      usePageSeo({
            title: 'Business Operations Technology Solutions | Softview Ghana',
            description: 'Technology that helps organizations replace manual processes, improve visibility, and operate more efficiently.',
            path: '/industries/operations',
      });

      const areas = [
            'Workflow automation',
            'Internal systems and portals',
            'Approvals and task ownership',
            'Reporting and dashboards',
            'Document management',
            'Integrations and operational analytics',
      ];

      const outcomes = [
            'Replace manual work with connected workflows',
            'Give teams clearer visibility into progress',
            'Reduce delays between requests, reviews, and action',
            'Create an operating foundation that scales',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Business Operations', href: '/industries/operations' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Business Operations" :breadcrumbs="breadcrumbs"
                description="Technology that replaces manual processes with clearer workflows, stronger visibility, and more dependable daily operations." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">Where we help</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Better visibility across daily operations</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Operations become difficult when updates live in inboxes, spreadsheets, and people's
                                    heads. We help organizations create connected systems that make responsibility,
                                    progress, and information easier to manage.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in areas" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>
                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">The shift</p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">From reactive
                                    work to a dependable operating rhythm</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Connected ownership</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">People can see what needs
                                                attention, who owns it, and what happens next.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Useful visibility</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Leaders get the context they need
                                                to make decisions without chasing updates.</p>
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
                                    improve how your organization operates?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Explore Business Operations Solutions
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
