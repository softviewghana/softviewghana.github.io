<script setup lang="ts">
      usePageSeo({
            title: 'Retail & Commerce Technology Solutions | Softview Ghana',
            description: 'Digital tools that help businesses manage products, customers, orders, payments, and everyday operations more efficiently.',
            path: '/industries/retail-commerce',
      });

      const areas = [
            'E-commerce and digital storefronts',
            'Inventory and product information',
            'Orders, fulfillment, and payments',
            'Customer management',
            'Reporting and sales visibility',
            'Business automation and integrations',
      ];

      const outcomes = [
            'A more connected view of products, orders, and customers',
            'Fewer manual steps across sales and fulfillment',
            'Better visibility into what is moving and what needs attention',
            'A smoother experience from first browse to repeat purchase',
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Retail & Commerce', href: '/industries/retail-commerce' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Retail & Commerce" :breadcrumbs="breadcrumbs"
                description="Digital tools that help retail businesses connect products, orders, customers, and operations into a smoother commercial experience." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                        <div class="softview-panel p-6 md:p-8 lg:p-10">
                              <span class="softview-kicker">Where we help</span>
                              <h2 class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Technology built for everyday retail operations</h2>
                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Retail moves quickly when stock, sales, customers, and fulfillment are connected. We
                                    help businesses replace disconnected processes with systems that make everyday
                                    commerce easier to run.
                              </p>

                              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in areas" :key="item"
                                        class="softview-card px-4 py-3 text-sm text-foreground/85 transition hover:-translate-y-0.5">
                                          {{ item }}
                                    </div>
                              </div>
                        </div>
                        <div class="softview-card p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Commerce that
                                    flows</p>
                              <h3 class="mt-4 text-2xl font-semibold tracking-tighter text-foreground">Better decisions
                                    from the shop floor to the sales channel</h3>
                              <div class="mt-6 space-y-4">
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">More connected operations</p>
                                          <p class="mt-2 text-sm leading-6 text-muted">The work around inventory,
                                                orders, and customer activity becomes easier to see and manage together.
                                          </p>
                                    </div>
                                    <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
                                          <p class="text-sm font-semibold text-foreground">A clearer customer journey
                                          </p>
                                          <p class="mt-2 text-sm leading-6 text-muted">Reliable digital touchpoints make
                                                it easier for customers to discover, buy, and return.</p>
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
                                    modernize your retail operations?</h3>
                              <NuxtLink to="/contact"
                                  class="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Explore Retail & Commerce Solutions
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
