<script lang="ts" setup>
      import {
            ArrowRight,
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

            <BaseContainer class="mt-8 md:mt-12">
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
            </BaseContainer>
      </div>
</template>

<style scoped></style>