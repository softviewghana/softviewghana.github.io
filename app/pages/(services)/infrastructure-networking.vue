<script setup lang="ts">
      usePageSeo({
            title: 'IT Infrastructure & Networking — Softview Ghana',
            description: 'Dependable networking and infrastructure solutions that keep your business secure, connected, and productive.',
            path: '/services/infrastructure-networking',
      });

      const services = [
            'Structured cabling and connectivity',
            'Office and enterprise networking',
            'Wireless and secure access design',
            'Firewall and network security setup',
            'Server installation and maintenance',
      ];

      const outcomes = [
            'Stable and secure connectivity',
            'Fewer operational interruptions',
            'Stronger business continuity',
            'Clearer IT foundation for growth',
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Infrastructure & Networking" title="Reliable Technology Foundations"
              description="Great software depends on great infrastructure. We help organizations design and maintain the network and systems that keep their operations running smoothly." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-white/2 p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we support
                              </p>
                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Infrastructure that supports the business—not the other way around</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    From connectivity to security, we help organizations build dependable systems that
                                    support daily productivity, safe access, and long-term operational stability.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in services" :key="item"
                                      class="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground/85">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>

                        <div class="rounded-4xl border border-border bg-slate-950/80 p-5">
                              <div class="rounded-2xl border border-border bg-white/2 p-4">
                                    <div
                                      class="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                                          <span>Network Status</span>
                                          <span class="text-primary">Healthy</span>
                                    </div>
                                    <div class="space-y-3">
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="flex items-center justify-between text-sm text-muted">
                                                      <span>Latency</span>
                                                      <span class="text-foreground">16ms</span>
                                                </div>
                                          </div>
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="flex items-center justify-between text-sm text-muted">
                                                      <span>Coverage</span>
                                                      <span class="text-foreground">99%</span>
                                                </div>
                                          </div>
                                          <div class="rounded-xl border border-border bg-background/80 p-3">
                                                <div class="flex items-center justify-between text-sm text-muted">
                                                      <span>Incidents</span>
                                                      <span class="text-foreground">Low</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-border bg-white/2 p-6 md:p-10">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Operational
                              impact</h3>
                        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              <div v-for="item in outcomes" :key="item"
                                class="rounded-2xl border border-border bg-background/80 p-5">
                                    <div
                                      class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          ↗</div>
                                    <p class="text-base text-foreground/85">{{ item }}</p>
                              </div>
                        </div>
                  </section>

                  <section class="mt-16 rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Need a
                              stronger IT foundation?</h3>
                        <NuxtLink to="/contact"
                          class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Talk with us
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>