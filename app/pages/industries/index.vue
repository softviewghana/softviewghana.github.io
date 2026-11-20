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
            Workflow,
            Target,
            Layers3,
            Lightbulb,
      } from '@lucide/vue';

      import CONSTANTS from '~/constants';

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
      ];

      usePageSeo({
            title: 'Industries We Serve — ' + CONSTANTS.APP_NAME,
            description:
                  'Discover how Softview Ghana applies software, digital solutions, and technology infrastructure to the needs of education, retail, professional services, healthcare, finance, and business operations.',
            path: '/industries',
            breadcrumbs: breadcrumbs.map(breadcrumb=>({
                  name: breadcrumb.label,
                  url: breadcrumb.href
            }))
      });

      const industries = [
            {
                  number: '01',
                  title: 'Education',
                  category: 'Learning & Administration',
                  href: '/industries/education',
                  icon: School,
                  description:
                        'Technology that helps schools and education organisations manage administration, academic activities, communication, and everyday operations.',
                  areas: [
                        'School Management',
                        'Admissions',
                        'Student Information',
                        'Academic Administration',
                        'Attendance',
                        'Fees & Payments',
                        'Communication',
                        'Reporting',
                  ],
            },
            {
                  number: '02',
                  title: 'Retail & Commerce',
                  category: 'Trade & Customer Experience',
                  href: '/industries/retail-commerce',
                  icon: ShoppingBag,
                  description:
                        'Digital tools that help retailers and commerce businesses manage products, customers, orders, payments, and business operations.',
                  areas: [
                        'E-commerce',
                        'Inventory',
                        'Order Management',
                        'Customer Management',
                        'Payments',
                        'Reporting',
                        'Business Automation',
                  ],
            },
            {
                  number: '03',
                  title: 'Professional Services',
                  category: 'Client & Service Management',
                  href: '/industries/professional-services',
                  icon: BriefcaseBusiness,
                  description:
                        'Technology that helps professional and service-based organisations coordinate clients, manage workflows, and deliver services more efficiently.',
                  areas: [
                        'Client Portals',
                        'CRM',
                        'Workflow Automation',
                        'Document Management',
                        'Appointments',
                        'Billing',
                        'Reporting',
                  ],
            },
            {
                  number: '04',
                  title: 'Healthcare',
                  category: 'Care & Administration',
                  href: '/industries/healthcare',
                  icon: HeartPulse,
                  description:
                        'Digital systems that support healthcare administration, information management, patient coordination, and operational processes.',
                  areas: [
                        'Patient Administration',
                        'Appointments',
                        'Records Management',
                        'Billing',
                        'Communication',
                        'Reporting',
                        'Workflow Management',
                  ],
            },
            {
                  number: '05',
                  title: 'Finance & Financial Services',
                  category: 'Financial Operations',
                  href: '/industries/finance',
                  icon: Landmark,
                  description:
                        'Technology for organisations that depend on accurate information, structured processes, secure workflows, and reliable operational systems.',
                  areas: [
                        'Financial Workflows',
                        'Customer Management',
                        'Reporting',
                        'Approvals',
                        'Document Management',
                        'Automation',
                        'Integrations',
                  ],
            },
            {
                  number: '06',
                  title: 'Business Operations',
                  category: 'Process & Productivity',
                  href: '/industries/operations',
                  icon: Cog,
                  description:
                        'Practical technology solutions that help organisations reduce manual processes, improve operational visibility, and coordinate internal activities.',
                  areas: [
                        'Workflow Automation',
                        'Internal Systems',
                        'Approvals',
                        'Reporting',
                        'Dashboards',
                        'Document Management',
                        'Integrations',
                        'Operational Analytics',
                  ],
            },
      ];

      const approach = [
            {
                  number: '01',
                  icon: Target,
                  title: 'Understand the industry',
                  description:
                        'We learn how your organisation operates, the people it serves, and the specific challenges that shape its work.',
            },
            {
                  number: '02',
                  icon: Lightbulb,
                  title: 'Identify opportunities',
                  description:
                        'We examine processes, information flows, and operational gaps to identify where technology can make a difference.',
            },
            {
                  number: '03',
                  icon: Layers3,
                  title: 'Build around your needs',
                  description:
                        'We select and develop practical solutions that fit your workflows, requirements, and available resources.',
            },
            {
                  number: '04',
                  icon: Workflow,
                  title: 'Support better operations',
                  description:
                        'We help put the solution into practice and can work with you as your requirements and operations evolve.',
            },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Technology that understands your industry." :breadcrumbs="breadcrumbs"
              description="Different industries have different challenges. We take the time to understand how your organisation works and build technology around the processes, people, and goals that matter." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div>
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Industry-aware solutions
                              </p>

                              <h2
                                class="mt-4 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Different industries. Different challenges.
                              </h2>

                              <div class="mt-5 max-w-2xl space-y-4 text-base leading-8 text-muted">
                                    <p>
                                          Technology is most effective when it reflects the realities of
                                          the people and organisations using it.
                                    </p>

                                    <p>
                                          A school, retail business, healthcare provider, and professional
                                          services firm may all need digital systems, but their workflows,
                                          responsibilities, and priorities are not the same.
                                    </p>

                                    <p>
                                          We approach each project by understanding its operating
                                          environment first, then identifying practical ways technology
                                          can improve how the organisation works.
                                    </p>
                              </div>

                              <NuxtLink to="/contact"
                                class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
                                    Discuss your organisation
                                    <ArrowRight class="size-4" />
                              </NuxtLink>
                        </div>

                        <div class="rounded-4xl border border-border bg-surface/55 backdrop-blur-2x p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Our perspective
                              </p>

                              <h3 class="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                                    Start with the work. Then find the technology.
                              </h3>

                              <p class="mt-4 text-sm leading-7 text-muted">
                                    We don't assume that every organisation needs the same software,
                                    infrastructure, or implementation approach. The right solution
                                    begins with understanding the actual problem.
                              </p>

                              <div class="mt-7 space-y-4">
                                    <div v-for="item in [
                                          { title: 'People', description: 'Who uses the system and who benefits from it?' },
                                          { title: 'Processes', description: 'How does the organisation get work done?' },
                                          { title: 'Priorities', description: 'What needs to improve, and why?' },
                                    ]" :key="item.title" class="flex gap-4 border-t border-border pt-4">
                                          <span class="mt-1 size-2 shrink-0 rounded-full bg-primary" />

                                          <div>
                                                <h4 class="text-sm font-semibold text-foreground">
                                                      {{ item.title }}
                                                </h4>
                                                <p class="mt-1 text-sm leading-6 text-muted">
                                                      {{ item.description }}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </BaseContainer>

            <!-- Industry index -->
            <section class="mt-20 border-y border-border/70 bg-background/70 py-16 md:py-20">
                  <BaseContainer>
                        <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                              <div class="max-w-2xl">
                                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                          Industry directory
                                    </p>

                                    <h2
                                      class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                          Where we apply technology.
                                    </h2>

                                    <p class="mt-4 leading-7 text-muted">
                                          Explore the industries we focus on and some of the business
                                          functions and challenges our solutions can address.
                                    </p>
                              </div>

                              <span class="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                                    {{ industries.length }} industry areas
                              </span>
                        </div>

                        <div class="mt-10 divide-y divide-border/70 border-y border-border/70">
                              <NuxtLink v-for="industry in industries" :key="industry.number" :to="industry.href"
                                class="group grid gap-5 py-8 transition-colors duration-300 hover:bg-surface/60 focus-visible:bg-surface/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/50 md:-mx-5 md:grid-cols-[76px_1fr_auto] md:items-start md:gap-8 md:px-5 md:py-10">
                                    <!-- Number and icon -->
                                    <div class="flex items-center gap-4 md:flex-col md:items-start">
                                          <div
                                            class="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 md:size-14">
                                                <component :is="industry.icon" class="size-6" aria-hidden="true" />
                                          </div>

                                          <span class="font-mono text-xs tracking-wider text-muted/70">
                                                {{ industry.number }}
                                          </span>
                                    </div>

                                    <!-- Industry details -->
                                    <div class="min-w-0">
                                          <p class="text-xs font-semibold uppercase tracking-[0.17em] text-primary">
                                                {{ industry.category }}
                                          </p>

                                          <h3
                                            class="mt-2 text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                                                {{ industry.title }}
                                          </h3>

                                          <p class="mt-3 max-w-2xl text-sm leading-7 text-muted md:text-base">
                                                {{ industry.description }}
                                          </p>

                                          <div class="mt-5">
                                                <p
                                                  class="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                                                      Areas of focus
                                                </p>

                                                <ul class="flex flex-wrap gap-2">
                                                      <li v-for="area in industry.areas" :key="area"
                                                        class="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80">
                                                            {{ area }}
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>

                                    <!-- Link indicator -->
                                    <div
                                      class="flex items-center gap-2 pt-1 text-sm font-semibold text-primary md:justify-self-end">
                                          <span>Explore</span>

                                          <span
                                            class="flex size-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                                <ArrowUpRight
                                                  class="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                          </span>
                                    </div>
                              </NuxtLink>
                        </div>
                  </BaseContainer>
            </section>

            <!-- Our approach -->
            <BaseContainer class="mt-16 md:mt-20">
                  <section class="rounded-4xl border border-border bg-surface p-6 md:p-10">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Our approach
                              </p>

                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Understand the work before building the solution.
                              </h2>

                              <p class="mt-4 leading-7 text-muted">
                                    Industry knowledge matters, but so does understanding the specific
                                    organisation. We use a practical approach to move from business
                                    challenges to useful technology.
                              </p>
                        </div>

                        <div class="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="step in approach" :key="step.number"
                                class="rounded-2xl border border-border bg-background p-5">
                                    <div class="flex items-center justify-between">
                                          <div
                                            class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <component :is="step.icon" class="size-5" />
                                          </div>

                                          <span class="font-mono text-xs text-muted/70">
                                                {{ step.number }}
                                          </span>
                                    </div>

                                    <h3 class="mt-5 font-semibold text-foreground">
                                          {{ step.title }}
                                    </h3>

                                    <p class="mt-2 text-sm leading-7 text-muted">
                                          {{ step.description }}
                                    </p>
                              </article>
                        </div>
                  </section>
            </BaseContainer>

            <!-- CTA -->
            <BaseContainer class="mt-16 md:mt-20">
                  <section
                    class="relative overflow-hidden rounded-4xl border border-dashed border-border bg-primary/5 px-6 py-14 text-center md:px-12 md:py-16">
                        <div
                          class="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />

                        <div class="relative mx-auto max-w-2xl">
                              <span
                                class="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                                    <span class="size-1.5 rounded-full bg-primary" />
                                    Beyond the directory
                              </span>

                              <h2 class="mt-6 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Don't see your industry?
                              </h2>

                              <p class="mt-4 text-base leading-8 text-muted md:text-lg">
                                    Our work isn't limited to a fixed list of sectors. Tell us about
                                    your organisation, how it operates, and the challenges you're
                                    trying to solve. We'll explore the possibilities with you.
                              </p>

                              <NuxtLink to="/contact"
                                class="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 font-medium text-white transition hover:-translate-y-0.5 hover:bg-primary-hover">
                                    Tell Us About Your Business
                                    <ArrowRight class="size-5" />
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>
