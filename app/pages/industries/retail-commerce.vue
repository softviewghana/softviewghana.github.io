<script setup lang="ts">
      usePageSeo({
            title: 'Retail & Commerce Technology Solutions | Softview Ghana',
            description: 'Digital tools that help businesses manage products, customers, orders, payments, and everyday operations more efficiently.',
            path: '/industries/retail-commerce',
      });

      const areas = [
            'E-commerce',
            'Inventory',
            'Order Management',
            'Customer Management',
            'Payments',
            'Reporting',
            'Business Automation',
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
                description="Digital tools that help businesses manage products, customers, orders, payments, and everyday operations more efficiently." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Focus areas</p>
                        <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              Technology built for everyday retail operations</h2>
                        <p class="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                              Retail businesses depend on accurate stock information, smooth ordering, and reliable
                              payments. We help retailers replace manual processes with connected digital systems.
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
                              modernize your retail operations?</h3>
                        <NuxtLink to="/contact"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Explore Retail & Commerce Solutions
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
