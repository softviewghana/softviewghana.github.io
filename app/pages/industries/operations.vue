<script setup lang="ts">
      import {
            ArrowRight,
            BarChart3,
            Blocks,
            CheckCircle2,
            ClipboardCheck,
            FileText,
            GitBranch,
            LayoutDashboard,
            Network,
            Settings2,
            ShieldCheck,
            Workflow,
            Zap,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Business Operations', href: '/industries/operations' },
      ];

      const focusAreas = [
            {
                  icon: Workflow,
                  title: 'Workflow Automation',
                  description: 'Digitize repetitive tasks and connect processes that currently depend on manual coordination.',
            },
            {
                  icon: Blocks,
                  title: 'Custom Internal Systems',
                  description: 'Build business applications around the specific activities, structures, and needs of your organization.',
            },
            {
                  icon: ClipboardCheck,
                  title: 'Approvals & Administration',
                  description: 'Structure requests, reviews, approvals, and administrative responsibilities across teams.',
            },
            {
                  icon: LayoutDashboard,
                  title: 'Dashboards & Reporting',
                  description: 'Bring relevant operational information together to make progress and performance easier to monitor.',
            },
            {
                  icon: FileText,
                  title: 'Document Management',
                  description: 'Organize business documents, records, and information used across everyday operations.',
            },
            {
                  icon: GitBranch,
                  title: 'System Integrations',
                  description: 'Connect existing applications and services to reduce information silos and repeated data entry.',
            },
            {
                  icon: BarChart3,
                  title: 'Operational Analytics',
                  description: 'Make business activity and operational trends easier to understand through useful reporting.',
            },
            {
                  icon: Network,
                  title: 'Team & Process Coordination',
                  description: 'Improve how information, responsibilities, and tasks move between departments.',
            },
      ];

      const principles = [
            {
                  icon: Settings2,
                  title: 'Understand the process',
                  description: 'Identify how work currently happens and where friction exists.',
            },
            {
                  icon: Workflow,
                  title: 'Connect the workflow',
                  description: 'Design a more consistent flow of tasks and information.',
            },
            {
                  icon: ShieldCheck,
                  title: 'Establish accountability',
                  description: 'Make responsibilities, access, and approvals clearer.',
            },
            {
                  icon: BarChart3,
                  title: 'Improve visibility',
                  description: 'Make important operational information easier to access.',
            },
      ];

      const outcomes = [
            'Less dependence on repetitive manual tasks',
            'Better coordination between departments',
            'Clearer ownership of tasks and approvals',
            'More accessible operational information',
      ];

      usePageSeo({
            title: 'Business Operations Technology Solutions — ' + CONSTANTS.APP_NAME,
            description: 'Explore custom business systems, workflow automation, internal applications, approvals, dashboards, reporting, document management, and system integrations.',
            path: '/industries/operations',
            breadcrumbs: breadcrumbs.map((breadcrumb) => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href,
            })),
      });
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries / Business Operations" title="Make your business processes work better."
              :breadcrumbs="breadcrumbs"
              description="We build digital systems that help organizations simplify everyday work, connect internal processes, and gain better visibility into how their operations run." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Understanding business operations
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Good operations need more than disconnected tools.
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted">
                                    As organizations grow, everyday processes can become harder to
                                    coordinate. Information gets scattered, approvals take longer,
                                    repetitive tasks consume valuable time, and teams struggle to
                                    maintain a shared view of what is happening.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    We help organizations identify these challenges and build
                                    practical technology around their actual workflows — from
                                    specialized internal applications to connected business systems.
                              </p>
                        </div>

                        <!-- Conceptual operations visual -->
                        <div class="relative overflow-hidden rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <div class="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

                              <div class="relative">
                                    <div class="flex items-center justify-between">
                                          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                Connected operations
                                          </span>
                                          <Network class="size-6 text-primary" />
                                    </div>

                                    <h3 class="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                                          From individual tasks to connected processes.
                                    </h3>

                                    <p class="mt-3 text-sm leading-7 text-muted">
                                          Well-designed systems help information and responsibilities
                                          move between the people and departments involved.
                                    </p>

                                    <div class="mt-7 space-y-3">
                                          <div
                                            class="flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-3">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <FileText class="size-5" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                      <p class="text-sm font-semibold text-foreground">Requests &
                                                            information</p>
                                                      <p class="text-xs text-muted">Capture what needs attention</p>
                                                </div>
                                          </div>

                                          <div class="flex justify-center">
                                                <div class="h-4 border-l border-dashed border-primary/50" />
                                          </div>

                                          <div
                                            class="flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-3">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <Workflow class="size-5" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                      <p class="text-sm font-semibold text-foreground">Processes &
                                                            approvals</p>
                                                      <p class="text-xs text-muted">Coordinate the work</p>
                                                </div>
                                          </div>

                                          <div class="flex justify-center">
                                                <div class="h-4 border-l border-dashed border-primary/50" />
                                          </div>

                                          <div
                                            class="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-3">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <BarChart3 class="size-5" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                      <p class="text-sm font-semibold text-foreground">Visibility &
                                                            insights</p>
                                                      <p class="text-xs text-muted">Understand what is happening</p>
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
                                    Technology for the work that keeps organizations moving.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Not every organization needs the same software. We focus on
                                    understanding your processes and identifying where digital
                                    systems can improve the way work gets done.
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

                  <!-- Approach -->
                  <section class="mt-20">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Our approach
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Start with how your organization works.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Effective business software should fit the organization using it.
                                    Our approach starts with the process, not a predetermined product.
                              </p>
                        </div>

                        <div class="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="(principle, index) in principles" :key="principle.title"
                                class="relative rounded-3xl border border-border bg-surface p-5">
                                    <div class="flex items-center justify-between">
                                          <component :is="principle.icon" class="size-6 text-primary" />
                                          <span class="text-xs font-medium tabular-nums text-muted/70">
                                                0{{ index + 1 }}
                                          </span>
                                    </div>

                                    <h3 class="mt-6 font-semibold text-foreground">
                                          {{ principle.title }}
                                    </h3>

                                    <p class="mt-3 text-sm leading-7 text-muted">
                                          {{ principle.description }}
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
                                    Give your teams better ways to get work done.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    The right internal systems can reduce unnecessary complexity
                                    and give people more clarity about their responsibilities,
                                    information, and progress.
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
                                    <Zap class="size-6" />
                              </div>

                              <p class="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Let's improve how work gets done
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Ready to make your operations work smarter?
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    Tell us about the processes slowing your organization down.
                                    Let's explore how the right technology can help.
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
