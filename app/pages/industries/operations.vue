<script setup lang="ts">
      usePageSeo({
            title: 'Business Operations Technology Solutions | Softview Ghana',
            description: 'Technology that helps organizations replace manual processes, improve visibility, and operate more efficiently.',
            path: '/industries/operations',
      });

      const areas = [
            'Workflow Automation',
            'Internal Systems',
            'Approvals',
            'Reporting',
            'Dashboards',
            'Document Management',
            'Integrations',
            'Operational Analytics',
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
                description="Technology that helps organizations replace manual processes, improve visibility, and operate more efficiently." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Focus areas</p>
                        <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              Better visibility across daily operations</h2>
                        <p class="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                              Organizations of all kinds rely on internal systems to keep operations running
                              smoothly. We help replace manual processes with dependable, connected workflows.
                        </p>

                        <div class="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                              <div v-for="item in areas" :key="item"
                                  class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                    {{ item }}
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Ready to
                              improve how your organization operates?</h3>
                        <NuxtLink to="/contact"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Explore Business Operations Solutions
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
