<script setup lang="ts">
      usePageSeo({
            title: 'Web Application Development — Softview Ghana',
            description: 'Responsive, scalable web applications that help teams and customers get work done with clarity.',
            path: '/services/web-application-development',
      });

      const solutions = [
            'Business websites and marketing platforms',
            'Customer portals and member experiences',
            'Booking and service platforms',
            'SaaS and internal product experiences',
            'Dashboards and operational tools',
            'API-driven applications and integrations',
      ];

      const principles = [
            {
                  title: 'Fast by default',
                  text: 'We build for quick loading, smooth interaction, and dependable performance.',
            },
            {
                  title: 'Designed for clarity',
                  text: 'The interface is structured so users can move through it without friction.',
            },
            {
                  title: 'Ready to grow',
                  text: 'The architecture is chosen to support future features and higher demand.',
            },
            {
                  title: 'Secure and maintainable',
                  text: 'We keep the product reliable with solid foundations and thoughtful implementation.',
            },
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
                description="Digital products that are clear, fast, and built to support the work behind the scenes." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">What we deliver</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Digital products that feel simple to use and strong under pressure</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Modern businesses need more than an online presence. They need platforms that help
                                    people
                                    sign up, book, manage, transact, and collaborate without confusion. We build web
                                    products
                                    that are polished for users and dependable for the business.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in solutions" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Common outcomes
                              </p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">
                                    Better experiences, stronger operations, measurable impact</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Higher conversion</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">Clear journeys and fewer
                                                obstacles lead to better engagement and completion.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Better workflow ownership</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">Teams can manage requests,
                                                approvals, and customer interactions in one place.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <div class="flex items-center gap-3">
                                    <div class="softview-divider" />
                                    <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                          Built on principles that matter</h3>
                              </div>
                              <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div v-for="item in principles" :key="item.title" class="softview-card p-5">
                                          <p class="text-sm font-semibold text-primary">{{ item.title }}</p>
                                          <p class="mt-3 text-base leading-7 text-muted">{{ item.text }}</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Need a web
                                    product that performs?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Build a Web Application
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>