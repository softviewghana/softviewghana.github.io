<script lang="ts" setup>
      import {
            ArrowRight,
            ArrowUpRight,
            BriefcaseBusiness,
            Cog,
            HeartPulse,
            Landmark,
            School,
            ShoppingBag,
      } from '@lucide/vue';

      usePageSeo({
            title: 'Industries We Serve | Softview Ghana',
            description: 'Technology solutions designed around the needs of education, retail, professional services, healthcare, finance, and business operations.',
            path: '/industries',
      });

      const industries = [
            {
                  title: 'Education',
                  href: '/industries/education',
                  icon: School,
                  description: 'Technology that helps schools and education organizations manage operations, improve communication, and create better experiences for staff, students, and families.',
                  areas: ['School Management', 'Admissions', 'Student Information', 'Academic Administration', 'Attendance', 'Fees & Payments', 'Communication', 'Reporting'],
            },
            {
                  title: 'Retail & Commerce',
                  href: '/industries/retail-commerce',
                  icon: ShoppingBag,
                  description: 'Digital tools that help businesses manage products, customers, orders, payments, and everyday operations more efficiently.',
                  areas: ['E-commerce', 'Inventory', 'Order Management', 'Customer Management', 'Payments', 'Reporting', 'Business Automation'],
            },
            {
                  title: 'Professional Services',
                  href: '/industries/professional-services',
                  icon: BriefcaseBusiness,
                  description: 'Technology that helps service-based businesses streamline workflows, manage clients, and deliver better experiences.',
                  areas: ['Client Portals', 'CRM', 'Workflow Automation', 'Document Management', 'Appointments', 'Billing', 'Reporting'],
            },
            {
                  title: 'Healthcare',
                  href: '/industries/healthcare',
                  icon: HeartPulse,
                  description: 'Digital systems designed to help healthcare organizations improve administrative processes, information management, and service delivery.',
                  areas: ['Patient Administration', 'Appointments', 'Records Management', 'Billing', 'Communication', 'Reporting', 'Workflow Management'],
            },
            {
                  title: 'Finance & Financial Services',
                  href: '/industries/finance',
                  icon: Landmark,
                  description: 'Reliable technology for organizations that depend on accurate information, secure workflows, and efficient operations.',
                  areas: ['Financial Workflows', 'Customer Management', 'Reporting', 'Approvals', 'Document Management', 'Automation', 'Integrations'],
            },
            {
                  title: 'Business Operations',
                  href: '/industries/operations',
                  icon: Cog,
                  description: 'Technology that helps organizations replace manual processes, improve visibility, and operate more efficiently.',
                  areas: ['Workflow Automation', 'Internal Systems', 'Approvals', 'Reporting', 'Dashboards', 'Document Management', 'Integrations', 'Operational Analytics'],
            },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Technology That Understands Your Industry"
              description="We build technology around the way organizations actually work, combining software engineering with an understanding of industry-specific challenges and workflows." />

            <!-- <BaseContainer class="mt-8 md:mt-12">
                  <section class="rounded-4xl border border-border bg-surface p-6 md:p-10">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Different
                              Industries. Different Challenges.</p>
                        <h2 class="mt-4 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              Different Industries. Different Challenges.</h2>
                        <div class="mt-6 max-w-3xl space-y-4 text-base leading-8 text-muted md:text-lg">
                              <p>
                                    Technology is most effective when it reflects the realities of the people and
                                    organizations using it.
                              </p>
                              <p>
                                    We work with businesses across different sectors to understand their processes,
                                    identify opportunities for improvement, and build practical digital solutions
                                    around their needs.
                              </p>
                        </div>
                  </section>
            </BaseContainer>

            <div class="mx-auto mt-16 w-full overflow-hidden border-y border-border/70 bg-background/80 py-10 md:py-16">
                  <BaseContainer>
                        <div class="grid gap-8 lg:grid-cols-2">
                              <NuxtLink v-for="industry in industries" :key="industry.title" :to="industry.href"
                                class="group rounded-3xl border border-border bg-surface p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                                    <div class="flex items-center gap-4">
                                          <div
                                            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <component :is="industry.icon" class="size-7" />
                                          </div>
                                          <h2 class="text-2xl font-semibold text-foreground">
                                                {{ industry.title }}
                                          </h2>
                                    </div>

                                    <p class="mt-5 text-base leading-7 text-muted">
                                          {{ industry.description }}
                                    </p>

                                    <ul class="mt-6 flex flex-wrap gap-2">
                                          <li v-for="item in industry.areas" :key="item"
                                            class="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80">
                                                {{ item }}
                                          </li>
                                    </ul>

                                    <span class="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                                          Explore {{ industry.title }} Solutions
                                          <ArrowRight
                                            class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                              </NuxtLink>
                        </div>
                  </BaseContainer>
            </div>

            <BaseContainer class="mt-16">
                  <section
                    class="rounded-4xl border border-border bg-linear-to-b from-primary/8 to-primary-hover/3 px-6 py-16 text-center shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-10">
                        <h2 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Don't See
                              Your Industry?</h2>
                        <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
                              Our approach starts with understanding your organization rather than forcing your
                              requirements into a predefined solution.
                        </p>
                        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                              <NuxtLink to="/contact"
                                class="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                                    Tell Us About Your Business
                                    <ArrowRight class="size-5" />
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer> -->
            <BaseContainer class="mt-8 md:mt-12">
                  <section
                    class="relative overflow-hidden rounded-4xl border border-border bg-surface px-6 py-14 md:px-12 md:py-20">
                        <!-- decorative ruler ticks, purely atmospheric -->
                        <div
                          class="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-70 mask-[linear-gradient(to_bottom,black,transparent)]"
                          aria-hidden="true">
                              <div
                                class="h-full w-full bg-[repeating-linear-gradient(90deg,var(--color-border)_0px,var(--color-border)_1px,transparent_1px,transparent_56px)]" />
                        </div>

                        <div class="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                              <div>
                                    <p
                                      class="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                                          <span class="h-1.5 w-1.5 rounded-full bg-primary" />
                                          Sector Index
                                    </p>
                                    <h2
                                      class="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                                          Different industries.
                                          <span class="block text-muted">Different challenges.</span>
                                    </h2>
                              </div>

                              <div class="space-y-4 text-base leading-8 text-muted md:pb-1 md:text-lg">
                                    <p>
                                          Technology is most effective when it reflects the realities of the people and
                                          organizations using it.
                                    </p>
                                    <p>
                                          We work with businesses across different sectors to understand their
                                          processes,
                                          identify opportunities for improvement, and build practical digital solutions
                                          around
                                          their needs.
                                    </p>
                              </div>
                        </div>

                        <div
                          class="relative mt-12 flex items-center gap-4 border-t border-border/70 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                              <span>Registry</span>
                              <span class="h-px flex-1 bg-border/70" />
                              <span>{{ industries.length }} sectors listed</span>
                        </div>
                  </section>
            </BaseContainer>

            <div class="mx-auto mt-16 w-full border-y border-border/70 bg-background/80">
                  <BaseContainer>
                        <div class="divide-y divide-border/70">
                              <NuxtLink v-for="industry in industries" :key="industry.title" :to="industry.href"
                                class="group grid gap-6 py-10 transition-colors duration-300 hover:bg-surface/60 focus-visible:bg-surface/60 focus-visible:outline-none md:-mx-6 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-10 md:px-6">
                                    <div class="flex items-center gap-4 md:block">
                                          <div
                                            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 md:h-14 md:w-14">
                                                <component :is="industry.icon" class="size-6" aria-hidden="true" />
                                          </div>
                                          <!-- <span
                                            class="font-mono text-xs uppercase tracking-[0.2em] text-muted md:mt-4 md:block">
                                                {{ industry.code }}
                                          </span> -->
                                    </div>

                                    <div>
                                          <h3 class="text-2xl font-medium text-foreground md:text-3xl">
                                                {{ industry.title }}
                                          </h3>
                                          <p class="mt-2 max-w-2xl text-base leading-7 text-muted">
                                                {{ industry.description }}
                                          </p>
                                          <ul class="mt-4 flex flex-wrap gap-2">
                                                <li v-for="area in industry.areas" :key="area"
                                                  class="rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80">
                                                      {{ area }}
                                                </li>
                                          </ul>
                                    </div>

                                    <div
                                      class="flex items-center gap-2 text-sm font-medium text-primary md:justify-self-end">
                                          <span class="hidden md:inline">Explore</span>
                                          <ArrowUpRight
                                            class="size-5 transition-transform duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" />
                                    </div>
                              </NuxtLink>
                        </div>
                  </BaseContainer>
            </div>

            <BaseContainer class="mt-16">
                  <section
                    class="relative overflow-hidden rounded-4xl border border-dashed border-border bg-linear-to-b from-primary/8 to-primary-hover/3 px-6 py-16 text-center shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-10">
                        <p
                          class="mx-auto inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                              <Plus class="size-3.5" />
                              New Entry
                        </p>
                        <h2 class="mt-5 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                              Don't see your industry?
                        </h2>
                        <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
                              Our approach starts with understanding your organization rather than forcing your
                              requirements into a predefined solution.
                        </p>
                        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                              <NuxtLink to="/contact"
                                class="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                                    Tell Us About Your Business
                                    <ArrowRight class="size-5" />
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>