<script setup lang="ts">
      import {
            ArrowRight,
            ArrowUpRight,
            BadgeCheck,
            Banknote,
            BarChart3,
            BriefcaseBusiness,
            ClipboardCheck,
            FileText,
            FolderLock,
            GitBranch,
            Landmark,
            LockKeyhole,
            RefreshCw,
            ShieldCheck,
            Workflow,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Finance & Financial Services', href: '/industries/finance' },
      ];

      const focusAreas = [
            {
                  icon: Workflow,
                  title: 'Financial Workflows',
                  description: 'Connect financial processes, reduce repetitive tasks, and make everyday operations easier to coordinate.',
            },
            {
                  icon: BriefcaseBusiness,
                  title: 'Customer Management',
                  description: 'Organize customer information, interactions, service requests, and important business relationships.',
            },
            {
                  icon: BarChart3,
                  title: 'Reporting & Insights',
                  description: 'Make financial and operational information easier to access, understand, and use in decision-making.',
            },
            {
                  icon: ClipboardCheck,
                  title: 'Approvals & Controls',
                  description: 'Structure review processes, approval stages, and accountability across financial operations.',
            },
            {
                  icon: FolderLock,
                  title: 'Document Management',
                  description: 'Organize important financial documents, records, and supporting information.',
            },
            {
                  icon: RefreshCw,
                  title: 'Process Automation',
                  description: 'Improve recurring administrative processes and reduce dependence on manual coordination.',
            },
            {
                  icon: GitBranch,
                  title: 'System Integrations',
                  description: 'Connect relevant business systems and services to support more consistent information flows.',
            },
            {
                  icon: LockKeyhole,
                  title: 'Access & Information Security',
                  description: 'Design appropriate access controls and information-handling practices around business requirements.',
            },
      ];

      const principles = [
            {
                  icon: BadgeCheck,
                  title: 'Accuracy',
                  description: 'Reliable information and consistent processes.',
            },
            {
                  icon: ShieldCheck,
                  title: 'Control',
                  description: 'Clear responsibilities, permissions, and approvals.',
            },
            {
                  icon: FileText,
                  title: 'Traceability',
                  description: 'Organized records and accessible operational history.',
            },
            {
                  icon: BarChart3,
                  title: 'Visibility',
                  description: 'Useful information for better-informed decisions.',
            },
      ];

      const outcomes = [
            'More organized financial information',
            'Clearer approval and review processes',
            'Reduced repetitive administrative work',
            'Better operational reporting and visibility',
      ];

      usePageSeo({
            title: 'Finance & Financial Services Technology Solutions — ' + CONSTANTS.APP_NAME,
            description: 'Explore technology solutions for financial workflows, customer management, reporting, approvals, document management, automation, and system integrations.',
            path: '/industries/finance',
            breadcrumbs: breadcrumbs.map((breadcrumb) => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href,
            })),
      });
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries / Finance" title="Technology for more connected financial operations."
              :breadcrumbs="breadcrumbs"
              description="We build digital solutions that help finance-focused organizations manage information, coordinate workflows, strengthen operational controls, and make better use of their data." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Understanding financial operations
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    When accuracy matters, the systems behind the work matter too.
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted">
                                    Financial organizations and business finance teams work with
                                    information that needs to be accurate, accessible, and properly
                                    managed. From customer records and document handling to approvals,
                                    reporting, and internal processes, every part contributes to how
                                    effectively an organization operates.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    We approach these challenges by understanding existing workflows
                                    and building technology that supports better coordination,
                                    information management, and operational visibility.
                              </p>
                        </div>

                        <!-- Conceptual visual -->
                        <div class="relative overflow-hidden rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <div class="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

                              <div class="relative">
                                    <div class="flex items-center justify-between">
                                          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                Operational priorities
                                          </span>
                                          <Landmark class="size-6 text-primary" />
                                    </div>

                                    <h3 class="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                                          Information you can organize. Processes you can manage.
                                    </h3>

                                    <p class="mt-3 text-sm leading-7 text-muted">
                                          Digital systems should bring structure and visibility to
                                          important financial and administrative activities.
                                    </p>

                                    <div class="mt-7 space-y-3">
                                          <div v-for="(principle, index) in principles" :key="principle.title"
                                            class="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-3">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <component :is="principle.icon" class="size-5" />
                                                </div>

                                                <div class="min-w-0 flex-1">
                                                      <p class="text-sm font-semibold text-foreground">
                                                            {{ principle.title }}
                                                      </p>
                                                      <p class="mt-0.5 text-xs leading-5 text-muted">
                                                            {{ principle.description }}
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
                                    Building around the processes that keep finance moving.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Every organization has different operational requirements.
                                    These are some of the areas where well-designed software can
                                    make a meaningful difference.
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

                  <!-- Outcomes -->
                  <section
                    class="mt-20 grid gap-8 rounded-4xl border border-border bg-surface p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    The intended impact
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Better systems. More confident operations.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    The right technology should help organizations spend less time
                                    coordinating disconnected processes and more time focusing on
                                    their customers, responsibilities, and goals.
                              </p>
                        </div>

                        <div class="grid gap-3 sm:grid-cols-2">
                              <div v-for="outcome in outcomes" :key="outcome"
                                class="flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
                                    <span
                                      class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          <ArrowRight class="size-3" />
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
                                    <Banknote class="size-6" />
                              </div>

                              <p class="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Let's discuss your requirements
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Ready to improve how your financial operations work?
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Tell us about your organization's processes, challenges, or
                                    software requirements. Let's explore a practical technology solution.
                              </p>

                              <NuxtLink to="/contact"
                                class="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                    Discuss a finance solution
                                    <ArrowRight class="size-4" />
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>
