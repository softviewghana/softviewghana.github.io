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

            <BaseContainer class="mt-6 md:mt-10">
                  <section v-fade-in class="softview-panel overflow-hidden px-6 py-14 md:px-12 md:py-20">
                        <div class="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                              <div v-fade-in>
                                    <p class="softview-kicker">
                                          <span class="h-1.5 w-1.5 rounded-full bg-primary" />
                                          Sector Index
                                    </p>
                                    <h2
                                        class="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-5xl lg:text-6xl">
                                          Different industries.
                                          <span class="block text-muted">Different challenges.</span>
                                    </h2>
                              </div>

                              <div v-fade-in class="space-y-4 text-base leading-8 text-muted md:pb-1 md:text-lg">
                                    <p>
                                          Technology is most effective when it reflects the realities of the people and
                                          organizations using it.
                                    </p>
                                    <p>
                                          We work with businesses across different sectors to understand their
                                          processes, identify opportunities for improvement, and build practical digital
                                          solutions around their needs.
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

            <div class="mx-auto mt-10 w-full py-4 md:mt-12">
                  <BaseContainer>
                        <div class="divide-y divide-border/70 rounded-[1.6rem] border border-border/60 bg-surface/70">
                              <NuxtLink v-for="industry in industries" :key="industry.title" :to="industry.href"
                                  class="group grid gap-6 px-5 py-8 transition-colors duration-300 hover:bg-surface/80 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-10 md:px-8 md:py-10">
                                    <div v-fade-in class="flex items-center gap-4 md:block">
                                          <div
                                              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background/70 text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 md:h-14 md:w-14">
                                                <component :is="industry.icon" class="size-6" aria-hidden="true" />
                                          </div>
                                    </div>

                                    <div v-fade-in>
                                          <h3 class="text-2xl font-semibold text-foreground md:text-3xl">
                                                {{ industry.title }}
                                          </h3>
                                          <p class="mt-2 max-w-2xl text-base leading-7 text-muted">
                                                {{ industry.description }}
                                          </p>
                                          <ul class="mt-4 flex flex-wrap gap-2">
                                                <li v-for="area in industry.areas" :key="area"
                                                    class="rounded-full border border-primary/20 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80">
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

            <BaseContainer class="mt-10">
                  <section v-fade-in
                      class="rounded-4xl border border-primary/15 bg-linear-to-br from-primary/10 via-surface/60 to-background px-8 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:px-10 lg:px-14 lg:py-16">
                        <p class="softview-kicker">New Entry</p>
                        <h2 class="mt-5 text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
                              Don't see your industry?
                        </h2>
                        <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
                              Our approach starts with understanding your organization rather than forcing your
                              requirements into a predefined solution.
                        </p>
                        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                              <NuxtLink to="/contact"
                                  class="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover">
                                    Tell Us About Your Business
                                    <ArrowRight class="size-5" />
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>