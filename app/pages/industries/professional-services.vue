<script setup lang="ts">
      usePageSeo({
            title: 'Professional Services Technology Solutions | Softview Ghana',
            description: 'Technology that helps service-based businesses streamline workflows, manage clients, and deliver better experiences.',
            path: '/industries/professional-services',
      });

      const areas = [
            'Client Portals',
            'CRM',
            'Workflow Automation',
            'Document Management',
            'Appointments',
            'Billing',
            'Reporting',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Professional Services', href: '/industries/professional-services' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Professional Services" :breadcrumbs="breadcrumbs"
                description="Technology that helps service-based businesses streamline workflows, manage clients, and deliver better experiences." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Focus areas</p>
                        <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              Streamlined systems for client-focused firms</h2>
                        <p class="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                              Service-based businesses depend on organized client information, clear workflows, and
                              dependable billing. We help firms bring these processes into one connected system.
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
                              streamline your firm's operations?</h3>
                        <NuxtLink to="/contact"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Explore Professional Services Solutions
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
