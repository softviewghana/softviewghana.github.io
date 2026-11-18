<script setup lang="ts">
      import {
            ArrowRight,
            BarChart3,
            Boxes,
            CheckCircle2,
            CreditCard,
            Globe,
            Package,
            Receipt,
            ShoppingBag,
            ShoppingCart,
            Store,
            Truck,
            Users,
            Workflow,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Retail & Commerce', href: '/industries/retail-commerce' },
      ];

      const focusAreas = [
            {
                  icon: Globe,
                  title: 'E-commerce & Online Stores',
                  description: 'Create digital storefronts where customers can discover products, place orders, and engage with your business.',
            },
            {
                  icon: Boxes,
                  title: 'Inventory Management',
                  description: 'Keep track of product quantities, stock movements, and inventory information across your operations.',
            },
            {
                  icon: ShoppingCart,
                  title: 'Sales & Order Management',
                  description: 'Organize sales transactions, customer orders, order fulfilment, and everyday sales activities.',
            },
            {
                  icon: Users,
                  title: 'Customer Management',
                  description: 'Maintain useful customer records, purchase histories, and information that supports stronger relationships.',
            },
            {
                  icon: CreditCard,
                  title: 'Payments & Transactions',
                  description: 'Integrate suitable payment services and organize transaction records within your business workflows.',
            },
            {
                  icon: Store,
                  title: 'Point of Sale Systems',
                  description: 'Support in-store sales, transaction recording, receipts, and related retail activities.',
            },
            {
                  icon: BarChart3,
                  title: 'Business Reporting',
                  description: 'Make sales, inventory, and operational information easier to review and understand.',
            },
            {
                  icon: Workflow,
                  title: 'Retail Process Automation',
                  description: 'Reduce repetitive administrative work and connect processes across your retail operations.',
            },
      ];

      const retailJourney = [
            {
                  icon: Package,
                  title: 'Products & inventory',
                  description: 'Organize product information and stock availability.',
            },
            {
                  icon: ShoppingBag,
                  title: 'Sales & orders',
                  description: 'Capture transactions and coordinate customer orders.',
            },
            {
                  icon: Truck,
                  title: 'Fulfilment',
                  description: 'Manage order preparation, collection, and delivery processes.',
            },
            {
                  icon: Receipt,
                  title: 'Records & reporting',
                  description: 'Keep transaction records and review business activity.',
            },
      ];

      const outcomes = [
            'Better visibility into stock and product information',
            'More organized sales and order processes',
            'Improved coordination between sales channels',
            'More accessible business and transaction records',
      ];

      usePageSeo({
            title: 'Retail & Commerce Technology Solutions — ' + CONSTANTS.APP_NAME,
            description: 'Explore retail and commerce technology solutions, including e-commerce websites, POS systems, inventory management, order processing, customer management, payments, and reporting.',
            path: '/industries/retail-commerce',
            breadcrumbs: breadcrumbs.map((breadcrumb) => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href,
            })),
      });
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries / Retail & Commerce" title="Connected technology for modern commerce."
              :breadcrumbs="breadcrumbs"
              description="We build digital solutions that help retailers and commerce businesses manage products, stock, sales, customers, and transactions across their operations." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Understanding retail & commerce
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Every sale depends on several things working together.
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted">
                                    From product availability and customer enquiries to sales,
                                    payments, order fulfilment, and reporting, retail businesses
                                    manage many connected activities every day.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    When these activities rely on disconnected tools or manual
                                    records, it becomes harder to maintain accurate information
                                    and coordinate the customer experience. We help businesses
                                    bring these processes into practical digital systems.
                              </p>
                        </div>

                        <!-- Commerce workflow visual -->
                        <div class="relative overflow-hidden rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <div class="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

                              <div class="relative">
                                    <div class="flex items-center justify-between">
                                          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                The commerce workflow
                                          </span>
                                          <ShoppingBag class="size-6 text-primary" />
                                    </div>

                                    <h3 class="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                                          From product to customer.
                                    </h3>

                                    <p class="mt-3 text-sm leading-7 text-muted">
                                          Connected systems help businesses coordinate the activities
                                          that support each transaction.
                                    </p>

                                    <div class="mt-7 space-y-3">
                                          <div v-for="(stage, index) in retailJourney" :key="stage.title"
                                            class="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-3">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <component :is="stage.icon" class="size-5" />
                                                </div>

                                                <div class="min-w-0 flex-1">
                                                      <p class="text-sm font-semibold text-foreground">
                                                            {{ stage.title }}
                                                      </p>
                                                      <p class="mt-0.5 text-xs leading-5 text-muted">
                                                            {{ stage.description }}
                                                      </p>
                                                </div>

                                                <span class="text-xs tabular-nums text-muted/60">
                                                      {{ String(index + 1).padStart(2, '0') }}
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- Focus areas -->
                  <section class="mt-20">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Areas of focus
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    The systems behind successful retail operations.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Whether you operate a physical shop, a wholesale business,
                                    a distribution operation, or an online store, we can help
                                    identify technology that fits your sales model.
                              </p>
                        </div>

                        <div class="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="(area, index) in focusAreas" :key="area.title"
                                class="group rounded-3xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                                    <div class="flex items-center justify-between">
                                          <div
                                            class="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <component :is="area.icon" class="size-5" />
                                          </div>

                                          <span class="text-xs font-medium tabular-nums text-muted/70">
                                                {{ String(index + 1).padStart(2, '0') }}
                                          </span>
                                    </div>

                                    <h3 class="mt-6 font-semibold text-foreground">
                                          {{ area.title }}
                                    </h3>

                                    <p class="mt-3 text-sm leading-7 text-muted">
                                          {{ area.description }}
                                    </p>
                              </article>
                        </div>
                  </section>

                  <!-- Business types -->
                  <section class="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Who we can support
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Different ways of selling. Different technology needs.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Retail and commerce businesses operate in different ways.
                                    Their systems should reflect their products, customers,
                                    sales channels, and operational requirements.
                              </p>
                        </div>

                        <div class="grid gap-3 sm:grid-cols-2">
                              <div v-for="business in [
                                    'Retail shops & stores',
                                    'Supermarkets & mini-marts',
                                    'Wholesale businesses',
                                    'Distributors & suppliers',
                                    'Online stores & e-commerce',
                                    'Multi-branch retailers',
                              ]" :key="business"
                                class="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4">
                                    <span
                                      class="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                          <Store class="size-4" />
                                    </span>

                                    <span class="text-sm font-medium text-foreground">
                                          {{ business }}
                                    </span>
                              </div>
                        </div>
                  </section>

                  <!-- Outcomes -->
                  <section
                    class="mt-20 grid gap-8 rounded-4xl border border-border bg-surface p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    The intended impact
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Make everyday commerce easier to manage.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    The right technology should give business owners and their
                                    teams better control over daily activities, from stock
                                    management to customer transactions.
                              </p>
                        </div>

                        <div class="grid gap-3 sm:grid-cols-2">
                              <div v-for="outcome in outcomes" :key="outcome"
                                class="flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
                                    <span
                                      class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          <CheckCircle2 class="size-3.5" />
                                    </span>

                                    <span class="text-sm leading-6 text-foreground/85">
                                          {{ outcome }}
                                    </span>
                              </div>
                        </div>
                  </section>

                  <!-- CTA -->
                  <section
                    class="relative mt-20 overflow-hidden rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
                        <div class="absolute -right-16 -top-24 size-64 rounded-full bg-primary/10 blur-3xl" />

                        <div class="relative mx-auto max-w-2xl">
                              <div
                                class="mx-auto flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-background/80 text-primary">
                                    <ShoppingCart class="size-6" />
                              </div>

                              <p class="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Let's improve your commerce operations
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Ready to bring your retail operations together?
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Tell us how your business manages products, sales, customers,
                                    and orders. Let's explore a solution that fits the way you operate.
                              </p>

                              <NuxtLink to="/contact"
                                class="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                    Discuss your requirements
                                    <ArrowRight class="size-4" />
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>
