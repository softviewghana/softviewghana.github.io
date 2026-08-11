<script setup lang="ts">
      usePageSeo({
            title: 'IT Infrastructure & Networking — Softview Ghana',
            description: 'Reliable infrastructure and networking services that keep business operations connected and resilient.',
            path: '/services/it-infrastructure-networking',
      });

      const services = [
            'Network design and assessment',
            'Wired and wireless deployment',
            'Firewall and security configuration',
            'Server and storage planning',
            'Business continuity and backup setup',
            'Ongoing administration and support',
      ];

      const outcomes = [
            'Reduce downtime and service interruptions',
            'Create a more secure and stable environment',
            'Support growth without constant rework',
            'Give teams a stronger foundation for daily work',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'IT Infrastructure & Networking', href: '/services/it-infrastructure-networking' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="IT Infrastructure & Networking" :breadcrumbs="breadcrumbs"
                description="The technology foundation that keeps your business connected, protected, and ready to operate." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">What we support</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Infrastructure that supports the business instead of slowing it down</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Reliable technology begins with a strong foundation. We help organizations create
                                    networks,
                                    systems, and support structures that are practical to run and resilient when the
                                    environment
                                    changes.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in services" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Operational
                                    focus</p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">
                                    Keeping people connected and systems dependable</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">People-first setup</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">We design for the way teams work
                                                so the infrastructure supports them instead of creating friction.</p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">Built for continuity</p>
                                          <p class="mt-2 text-sm leading-7 text-muted">Our approach balances
                                                performance, protection, and simplicity so the environment remains
                                                manageable over time.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel p-6 md:p-10">
                              <div class="flex items-center gap-3">
                                    <div class="softview-divider" />
                                    <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                          Operational impact</h3>
                              </div>
                              <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <div v-for="item in outcomes" :key="item" class="softview-card p-5">
                                          <div
                                              class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                ↗</div>
                                          <p class="text-base text-foreground/85">{{ item }}</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16">
                        <div class="softview-panel border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Need a
                                    stronger IT foundation?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Discuss Your Infrastructure
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>