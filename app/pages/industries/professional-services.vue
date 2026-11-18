<script setup lang="ts">
      import {
            ArrowRight,
            BarChart3,
            BriefcaseBusiness,
            CalendarDays,
            CheckCircle2,
            ClipboardList,
            FileText,
            FolderOpen,
            Handshake,
            MessagesSquare,
            Receipt,
            Users,
            Workflow,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Professional Services', href: '/industries/professional-services' },
      ];

      const focusAreas = [
            {
                  icon: Users,
                  title: 'Client Relationship Management',
                  description: 'Organize client profiles, interactions, enquiries, and relationship history in one accessible place.',
            },
            {
                  icon: BriefcaseBusiness,
                  title: 'Client Portals',
                  description: 'Give clients a dedicated place to access relevant information, documents, updates, and service interactions.',
            },
            {
                  icon: Workflow,
                  title: 'Workflow Automation',
                  description: 'Simplify recurring tasks and connect the processes involved in delivering professional services.',
            },
            {
                  icon: FolderOpen,
                  title: 'Document Management',
                  description: 'Keep client files, project documents, and important business records organized and accessible.',
            },
            {
                  icon: CalendarDays,
                  title: 'Appointments & Scheduling',
                  description: 'Coordinate consultations, meetings, service appointments, and important engagements.',
            },
            {
                  icon: Receipt,
                  title: 'Billing & Invoicing',
                  description: 'Support service billing, invoice management, payment records, and related administrative workflows.',
            },
            {
                  icon: ClipboardList,
                  title: 'Project & Task Management',
                  description: 'Organize assignments, responsibilities, milestones, and delivery progress across teams.',
            },
            {
                  icon: BarChart3,
                  title: 'Reporting & Insights',
                  description: 'Make client activity, service delivery, and business operations easier to monitor.',
            },
      ];

      const serviceJourney = [
            {
                  number: '01',
                  title: 'Attract & engage',
                  description: 'Capture enquiries and organize prospective client information.',
            },
            {
                  number: '02',
                  title: 'Plan & coordinate',
                  description: 'Manage appointments, assignments, documents, and responsibilities.',
            },
            {
                  number: '03',
                  title: 'Deliver & communicate',
                  description: 'Coordinate service delivery and keep clients informed.',
            },
            {
                  number: '04',
                  title: 'Bill & maintain',
                  description: 'Manage billing activities, records, and ongoing client relationships.',
            },
      ];

      const outcomes = [
            'More organized client information',
            'Clearer service delivery processes',
            'Better coordination across teams',
            'More consistent client communication',
      ];

      usePageSeo({
            title: 'Professional Services Technology Solutions — ' + CONSTANTS.APP_NAME,
            description: 'Explore custom software solutions for professional services firms, including client portals, CRM, workflow automation, document management, scheduling, billing, and reporting.',
            path: '/industries/professional-services',
            breadcrumbs: breadcrumbs.map((breadcrumb) => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href,
            })),
      });
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries / Professional Services" title="Better systems for better client experiences."
              :breadcrumbs="breadcrumbs"
              description="We build digital solutions that help professional services businesses manage client relationships, coordinate service delivery, and streamline the work behind their expertise." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Understanding professional services
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Your expertise deserves systems that work just as hard.
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted">
                                    Professional services businesses depend on trust, expertise, and
                                    strong client relationships. But delivering a quality service also
                                    requires managing enquiries, appointments, projects, documents,
                                    billing, and communication.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    When these activities are spread across disconnected tools and
                                    manual processes, it becomes harder to maintain consistency and
                                    visibility. We help firms bring their important workflows into
                                    more organized digital systems.
                              </p>
                        </div>

                        <!-- Conceptual client relationship visual -->
                        <div class="relative overflow-hidden rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <div class="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

                              <div class="relative">
                                    <div class="flex items-center justify-between">
                                          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                The client relationship
                                          </span>
                                          <Handshake class="size-6 text-primary" />
                                    </div>

                                    <h3 class="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                                          Every interaction is part of the experience.
                                    </h3>

                                    <p class="mt-3 text-sm leading-7 text-muted">
                                          Connected systems help service teams manage the complete
                                          relationship, not just individual tasks.
                                    </p>

                                    <div class="mt-7 space-y-3">
                                          <div v-for="(stage, index) in serviceJourney" :key="stage.number"
                                            class="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-3">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <span class="text-xs font-semibold tabular-nums">
                                                            {{ stage.number }}
                                                      </span>
                                                </div>

                                                <div class="min-w-0 flex-1">
                                                      <p class="text-sm font-semibold text-foreground">
                                                            {{ stage.title }}
                                                      </p>
                                                      <p class="mt-0.5 text-xs leading-5 text-muted">
                                                            {{ stage.description }}
                                                      </p>
                                                </div>
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
                                    Supporting the business behind your expertise.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Whether you manage a consultancy, agency, accounting practice,
                                    legal firm, or another service-based business, the right systems
                                    can help bring more structure to your daily operations.
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

                  <!-- Types of firms -->
                  <section class="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Who we can support
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Different expertise. Similar operational needs.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Every professional services firm has its own way of working.
                                    We build around those differences rather than forcing every
                                    business into the same workflow.
                              </p>
                        </div>

                        <div class="grid gap-3 sm:grid-cols-2">
                              <div v-for="firm in [
                                    'Consulting & advisory firms',
                                    'Accounting & audit practices',
                                    'Legal practices',
                                    'Marketing & creative agencies',
                                    'Engineering & technical firms',
                                    'Business support services',
                              ]" :key="firm"
                                class="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4">
                                    <span
                                      class="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                          <BriefcaseBusiness class="size-4" />
                                    </span>

                                    <span class="text-sm font-medium text-foreground">
                                          {{ firm }}
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
                                    Spend less time managing processes. More time delivering value.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Well-designed systems help service teams stay organized,
                                    coordinate their work, and give clients a more consistent
                                    experience throughout the relationship.
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
                                    <MessagesSquare class="size-6" />
                              </div>

                              <p class="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Let's discuss your business
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Ready to create a better way of working?
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Tell us how your firm manages clients, delivers services, and
                                    handles everyday operations. Let's explore what better technology
                                    could make possible.
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
