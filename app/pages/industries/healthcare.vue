<script setup lang="ts">
      import {
            ArrowRight,
            CalendarDays,
            CheckCircle2,
            ClipboardList,
            FileText,
            HeartPulse,
            Hospital,
            LayoutDashboard,
            MessageSquare,
            ShieldCheck,
            Users,
            Workflow,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Healthcare', href: '/industries/healthcare' },
      ];

      usePageSeo({
            title: 'Healthcare Technology Solutions  — ' + CONSTANTS.APP_NAME,
            description:
                  'Explore digital solutions for healthcare administration, patient coordination, information management, reporting, and operational workflows.',
            path: '/industries/healthcare',
            breadcrumbs: breadcrumbs.map(breadcrumb => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href
            }))
      });

      const areas = [
            {
                  title: 'Patient Administration',
                  description:
                        'Organize administrative information and support the day-to-day coordination of patient services.',
                  icon: Users,
            },
            {
                  title: 'Appointments & Scheduling',
                  description:
                        'Support appointment coordination, scheduling processes, and service organization.',
                  icon: CalendarDays,
            },
            {
                  title: 'Records Management',
                  description:
                        'Structure organizational records and make relevant administrative information easier to manage.',
                  icon: FileText,
            },
            {
                  title: 'Billing & Administration',
                  description:
                        'Improve administrative workflows around billing, transactions, and financial records.',
                  icon: ClipboardList,
            },
            {
                  title: 'Communication',
                  description:
                        'Connect administrative teams and improve how important information is shared.',
                  icon: MessageSquare,
            },
            {
                  title: 'Reporting & Insights',
                  description:
                        'Bring operational information together to support reporting and better visibility.',
                  icon: LayoutDashboard,
            },
            {
                  title: 'Workflow Management',
                  description:
                        'Digitize repetitive administrative tasks, internal processes, and approval workflows.',
                  icon: Workflow,
            },
            {
                  title: 'Access & Information Security',
                  description:
                        'Support controlled access to systems and responsible handling of organizational information.',
                  icon: ShieldCheck,
            },
      ];

      const outcomes = [
            'More organized administrative information',
            'Clearer coordination of appointments and services',
            'Better-connected internal workflows',
            'Improved access to operational reports',
      ];

      const priorities = [
            {
                  number: '01',
                  title: 'Organize information',
                  description:
                        'Make administrative records more structured and accessible to the right people.',
            },
            {
                  number: '02',
                  title: 'Connect processes',
                  description:
                        'Reduce disconnected activities by bringing related workflows into one system.',
            },
            {
                  number: '03',
                  title: 'Improve visibility',
                  description:
                        'Give administrators a clearer view of operational activities and information.',
            },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries" title="Healthcare" :breadcrumbs="breadcrumbs"
              description="Digital systems designed to help healthcare organizations improve administrative processes, information management, and service delivery." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div class="py-4">
                              <span class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Healthcare operations
                              </span>

                              <h2
                                class="mt-4 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                                    Better systems for the work behind better care.
                              </h2>

                              <p class="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                                    Healthcare delivery involves more than clinical services.
                                    Administrative teams also manage appointments, records,
                                    billing, communication, and everyday operational processes.
                                    We build digital solutions that help bring these activities
                                    together.
                              </p>

                              <div class="mt-7 flex flex-wrap gap-2">
                                    <span v-for="item in ['Administration', 'Information', 'Coordination']" :key="item"
                                      class="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/80">
                                          {{ item }}
                                    </span>
                              </div>
                        </div>

                        <!-- Conceptual operational overview -->
                        <div class="relative overflow-hidden rounded-4xl border border-border bg-surface p-5 md:p-7">
                              <div class="absolute -right-16 -top-20 size-56 rounded-full bg-primary/10 blur-3xl" />

                              <div class="relative">
                                    <div class="flex items-center justify-between gap-4">
                                          <div>
                                                <p
                                                  class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                      Operational overview
                                                </p>
                                                <h3 class="mt-2 text-xl font-semibold tracking-tight text-foreground">
                                                      Connected healthcare administration
                                                </h3>
                                          </div>

                                          <div
                                            class="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <HeartPulse :size="22" />
                                          </div>
                                    </div>

                                    <div class="mt-7 space-y-3">
                                          <div
                                            class="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-4">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <Users :size="19" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                      <p class="font-medium text-foreground">Patient administration</p>
                                                      <p class="mt-1 text-xs text-muted">
                                                            Information and service coordination
                                                      </p>
                                                </div>
                                                <CheckCircle2 :size="18" class="shrink-0 text-primary" />
                                          </div>

                                          <div
                                            class="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-4">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <CalendarDays :size="19" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                      <p class="font-medium text-foreground">Appointments</p>
                                                      <p class="mt-1 text-xs text-muted">
                                                            Scheduling and coordination
                                                      </p>
                                                </div>
                                                <CheckCircle2 :size="18" class="shrink-0 text-primary" />
                                          </div>

                                          <div
                                            class="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-4">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <ClipboardList :size="19" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                      <p class="font-medium text-foreground">Administration & billing
                                                      </p>
                                                      <p class="mt-1 text-xs text-muted">
                                                            Records and internal processes
                                                      </p>
                                                </div>
                                                <CheckCircle2 :size="18" class="shrink-0 text-primary" />
                                          </div>

                                          <div
                                            class="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-4">
                                                <div
                                                  class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <LayoutDashboard :size="19" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                      <p class="font-medium text-foreground">Reports & insights</p>
                                                      <p class="mt-1 text-xs text-muted">
                                                            Operational visibility
                                                      </p>
                                                </div>
                                                <CheckCircle2 :size="18" class="shrink-0 text-primary" />
                                          </div>
                                    </div>

                                    <p class="mt-5 text-xs leading-6 text-muted">
                                          Illustrative view of potential administrative system capabilities.
                                    </p>
                              </div>
                        </div>
                  </section>

                  <!-- Focus areas -->
                  <section class="mt-20 md:mt-28">
                        <div class="max-w-2xl">
                              <span class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Focus areas
                              </span>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Supporting the systems behind healthcare delivery.
                              </h2>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    We approach healthcare technology from an operational
                                    perspective, designing systems around the administrative
                                    needs and workflows of each organization.
                              </p>
                        </div>

                        <div class="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="(area, index) in areas" :key="area.title"
                                class="group rounded-3xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                                    <div class="flex items-center justify-between">
                                          <div
                                            class="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <component :is="area.icon" :size="21" />
                                          </div>

                                          <span class="text-xs font-medium tabular-nums text-muted">
                                                0{{ index + 1 }}
                                          </span>
                                    </div>

                                    <h3 class="mt-5 font-semibold text-foreground">
                                          {{ area.title }}
                                    </h3>

                                    <p class="mt-2 text-sm leading-7 text-muted">
                                          {{ area.description }}
                                    </p>
                              </article>
                        </div>
                  </section>

                  <!-- Approach -->
                  <section
                    class="mt-20 grid gap-10 rounded-4xl border border-border bg-surface p-6 md:mt-28 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div>
                              <span class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Our approach
                              </span>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Technology should fit the way your organization works.
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted">
                                    Healthcare organizations have different structures,
                                    responsibilities, and operational requirements. We start
                                    by understanding those differences before recommending
                                    or building a digital solution.
                              </p>
                        </div>

                        <div class="space-y-0">
                              <div v-for="item in priorities" :key="item.number"
                                class="flex gap-5 border-b border-border py-5 first:pt-0 last:border-b-0 last:pb-0">
                                    <span class="pt-1 text-sm font-semibold tabular-nums text-primary">
                                          {{ item.number }}
                                    </span>

                                    <div>
                                          <h3 class="font-semibold text-foreground">
                                                {{ item.title }}
                                          </h3>
                                          <p class="mt-2 text-sm leading-7 text-muted">
                                                {{ item.description }}
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- Outcomes -->
                  <section class="mt-20 md:mt-28">
                        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                              <div>
                                    <span class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                          What better systems support
                                    </span>

                                    <h2
                                      class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                          Make everyday operations easier to manage.
                                    </h2>

                                    <p class="mt-5 leading-8 text-muted">
                                          Well-designed administrative systems can help
                                          healthcare organizations improve coordination,
                                          organize information, and build more consistent
                                          internal processes.
                                    </p>
                              </div>

                              <div class="grid gap-3 sm:grid-cols-2">
                                    <div v-for="outcome in outcomes" :key="outcome"
                                      class="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
                                          <CheckCircle2 :size="19" class="mt-0.5 shrink-0 text-primary" />
                                          <p class="text-sm leading-7 text-foreground/85">
                                                {{ outcome }}
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- CTA -->
                  <section
                    class="relative mt-20 overflow-hidden rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:mt-28 md:p-14">
                        <div class="absolute -left-20 -top-24 size-64 rounded-full bg-primary/10 blur-3xl" />
                        <div class="absolute -bottom-28 -right-16 size-64 rounded-full bg-primary/10 blur-3xl" />

                        <div class="relative mx-auto max-w-2xl">
                              <div
                                class="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Hospital :size="23" />
                              </div>

                              <h2 class="mt-6 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Ready to improve your healthcare organization's operations?
                              </h2>

                              <p class="mx-auto mt-4 max-w-xl leading-7 text-muted">
                                    Let's discuss your organization's processes and explore
                                    where thoughtfully designed technology can make a difference.
                              </p>

                              <NuxtLink to="/contact"
                                class="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                    Discuss Your Project
                                    <ArrowRight :size="17" />
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>
