<script setup lang="ts">
      import {
            ArrowRight,
            ArrowUpRight,
            BriefcaseBusiness,
            CheckCircle2,
            GraduationCap,
            Layers3,
            ShieldCheck,
            Users,
      } from '@lucide/vue';

      import CONSTANTS from '~/constants';

      usePageSeo({
            title: 'Our Software Products — ' + CONSTANTS.APP_NAME,
            description: 'Discover software products developed by Softview Ghana, including eSchool Ghana for school management and EPSSP for payroll and staff self-service.',
            path: '/products',
            breadcrumbs: [{
                  name: 'software products',
                  url: '/products'
            }]
      });

      const schoolCapabilities = [
            'Admissions & Enrollment',
            'Student Information Management',
            'Academic Administration',
            'Attendance Management',
            'Assessments & Examinations',
            'Automatic Report Cards',
            'Fees & Payment Management',
            'Accounting & Financial Administration',
            'Staff & Payroll Administration',
            'SMS, Email & Telegram Communication',
            'Parent & Teacher Portals',
            'Timetables & School Calendar',
            'Reports & Analytics',
      ];

      const schoolBenefits = [
            {
                  title: 'One Integrated Platform',
                  description:
                        'Bring essential school operations together instead of relying on disconnected tools and manual processes.',
            },
            {
                  title: 'Better Operational Visibility',
                  description:
                        'Help school leaders access relevant information across academic, administrative, and financial activities.',
            },
            {
                  title: 'Designed Around School Workflows',
                  description:
                        'Built with the operational realities of private basic schools in Ghana in mind.',
            },
            {
                  title: 'Connected School Community',
                  description:
                        'Support coordination between administrators, teachers, parents, and other school stakeholders.',
            },
            {
                  title: 'Room to Grow',
                  description:
                        'A flexible foundation designed to support schools as their operations and requirements evolve.',
            },
      ];

      const schoolModules = [
            { label: 'Students', description: 'Admissions and student records' },
            { label: 'Academics', description: 'Classes, subjects and assessments' },
            { label: 'Attendance', description: 'Student and staff attendance' },
            { label: 'Finance', description: 'Fees and financial administration' },
            { label: 'Communication', description: 'School and family engagement' },
            { label: 'Reporting', description: 'Reports and operational insights' },
      ];

      const epsspCapabilities = [
            'Employee Information Management',
            'Staff Self-Service',
            'Payroll Administration',
            'Compensation & Allowances',
            'Payroll Processing',
            'Statutory Payroll Processing',
            'Employee Records & Documents',
            'Leave & Staff Administration',
      ];

      const epsspBenefits = [
            'Centralized employee information',
            'Structured payroll workflows',
            'Employee access to relevant information',
            'Better visibility into staff administration',
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Our Products" title="Software Products Built to Solve Real Problems"
              description="We don't only build software for clients. We develop and own digital products designed to address practical challenges and create lasting value.">
                  <!-- <template #visual>
                        <div class="bg-background p-4 md:p-6">
                              <div class="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
                                    <div
                                      class="flex flex-col justify-between rounded-3xl border border-border bg-surface p-5">
                                          <div>
                                                <div
                                                  class="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                      <GraduationCap :size="23" />
                                                </div>

                                                <p
                                                  class="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                      Featured product
                                                </p>

                                                <h3 class="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                                                      eSchool Ghana
                                                </h3>

                                                <p class="mt-3 text-sm leading-7 text-muted">
                                                      A School Operating System designed for basic schools in Ghana.
                                                </p>
                                          </div>

                                          <div class="mt-8 border-t border-border pt-4">
                                                <span
                                                  class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                                                      <span class="size-1.5 rounded-full bg-primary" />
                                                      In development
                                                </span>
                                          </div>
                                    </div>

                                    <div class="rounded-3xl border border-border bg-surface p-4">
                                          <div
                                            class="flex items-center justify-between gap-3 border-b border-border pb-4">
                                                <div class="flex items-center gap-2">
                                                      <div
                                                        class="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                            <GraduationCap :size="17" />
                                                      </div>
                                                      <div>
                                                            <p class="text-sm font-semibold text-foreground">
                                                                  eSchool Ghana
                                                            </p>
                                                            <p class="text-[10px] text-muted">
                                                                  School administration
                                                            </p>
                                                      </div>
                                                </div>

                                                <span
                                                  class="rounded-full border border-border px-2 py-1 text-[10px] font-medium text-muted">
                                                      Product preview
                                                </span>
                                          </div>

                                          <div class="mt-4 grid grid-cols-2 gap-3">
                                                <div v-for="module in schoolModules" :key="module.label"
                                                  class="rounded-2xl border border-border bg-background/80 p-3">
                                                      <div class="flex items-center gap-2">
                                                            <span class="size-2 rounded-full bg-primary/70" />
                                                            <span class="text-xs font-semibold text-foreground">
                                                                  {{ module.label }}
                                                            </span>
                                                      </div>
                                                      <p class="mt-2 text-[11px] leading-5 text-muted">
                                                            {{ module.description }}
                                                      </p>
                                                </div>
                                          </div>

                                          <div class="mt-4 rounded-2xl border border-border bg-background/80 p-4">
                                                <div class="flex items-center justify-between">
                                                      <p class="text-xs font-semibold text-foreground">
                                                            Connected school operations
                                                      </p>
                                                      <Layers3 :size="16" class="text-primary" />
                                                </div>

                                                <div class="mt-4 flex items-center gap-2">
                                                      <div class="h-1.5 flex-1 rounded-full bg-primary/70" />
                                                      <div class="h-1.5 flex-1 rounded-full bg-primary/50" />
                                                      <div class="h-1.5 flex-1 rounded-full bg-primary/30" />
                                                </div>
                                          </div>

                                          <p class="mt-3 text-[10px] leading-5 text-muted">
                                                Illustrative representation of the product's intended capabilities.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </template> -->
            </PageHero>

            <BaseContainer class="mt-8 md:mt-16">
                  <!-- Product philosophy -->
                  <section class="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
                        <div>
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Product development
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Independent products. Purposeful technology.
                              </h2>
                        </div>

                        <p class="max-w-2xl text-base leading-8 text-muted md:text-lg">
                              Every product starts with a problem worth solving. We focus on
                              understanding the people, processes, and everyday challenges
                              behind that problem, then build software around those needs.
                        </p>
                  </section>

                  <!-- eSchool Ghana -->
                  <section id="eschool-ghana"
                    class="mt-16 overflow-hidden rounded-4xl border border-primary/20 bg-primary/5 backdrop-blur-lg md:mt-20">
                        <div class="p-6 md:p-10">
                              <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                                    <div>
                                          <div class="flex items-center gap-3">
                                                <div
                                                  class="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                      <GraduationCap :size="25" />
                                                </div>

                                                <span
                                                  class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                      Featured product
                                                </span>
                                          </div>

                                          <h2
                                            class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                                                eSchool Ghana
                                          </h2>

                                          <p class="mt-3 text-base font-medium text-foreground/80 md:text-lg">
                                                The School Operating System for basic schools in Ghana.
                                          </p>
                                    </div>

                                    <span
                                      class="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
                                          <span class="size-1.5 rounded-full bg-primary" />
                                          Planned launch January 2027
                                    </span>
                              </div>

                              <div class="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                                    <div>
                                          <p class="text-base leading-8 text-muted md:text-lg">
                                                Running a school involves coordinating students,
                                                teachers, academics, finances, communication, and
                                                administration. eSchool Ghana is being developed
                                                to bring these essential operations together in
                                                one connected platform.
                                          </p>

                                          <h3 class="mt-8 text-sm font-semibold text-foreground">
                                                Product capabilities
                                          </h3>

                                          <div class="mt-4 grid gap-2 sm:grid-cols-2">
                                                <div v-for="item in schoolCapabilities" :key="item"
                                                  class="flex items-start gap-2.5 rounded-xl border border-border bg-background/70 px-3 py-3">
                                                      <CheckCircle2 :size="16" class="mt-0.5 shrink-0 text-primary" />
                                                      <span class="text-sm leading-6 text-foreground/85">
                                                            {{ item }}
                                                      </span>
                                                </div>
                                          </div>
                                    </div>

                                    <!-- Product benefits -->
                                    <div class="rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-lg p-5 md:p-6">
                                          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                Product direction
                                          </p>

                                          <h3 class="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                                                Built around how schools actually operate.
                                          </h3>

                                          <p class="mt-3 text-sm leading-7 text-muted">
                                                The goal is to give school stakeholders a more
                                                connected way to manage everyday responsibilities
                                                and access the information they need.
                                          </p>

                                          <div class="mt-7 space-y-5">
                                                <div v-for="benefit in schoolBenefits" :key="benefit.title"
                                                  class="flex gap-3">
                                                      <div
                                                        class="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                            <CheckCircle2 :size="17" />
                                                      </div>

                                                      <div>
                                                            <h4 class="text-sm font-semibold text-foreground">
                                                                  {{ benefit.title }}
                                                            </h4>
                                                            <p class="mt-1 text-sm leading-6 text-muted">
                                                                  {{ benefit.description }}
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div class="mt-10 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                          <p class="font-semibold text-foreground">
                                                Discover the eSchool Ghana vision.
                                          </p>
                                          <p class="mt-1 text-sm text-muted">
                                                Explore the product and its planned capabilities.
                                          </p>
                                    </div>

                                    <NuxtLink to="https://eschoolghana.com" external target="_blank"
                                      class="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                          Visit eSchool Ghana
                                          <ArrowUpRight :size="17" />
                                    </NuxtLink>
                              </div>
                        </div>
                  </section>

                  <!-- EPSSP -->
                  <section id="epssp" class="mt-8 overflow-hidden rounded-4xl border border-border bg-surface">
                        <div class="grid lg:grid-cols-[1fr_0.85fr]">
                              <div class="p-6 md:p-10">
                                    <div class="flex items-center gap-3">
                                          <div
                                            class="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <BriefcaseBusiness :size="24" />
                                          </div>

                                          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                featured product
                                          </span>
                                    </div>

                                    <h2
                                      class="mt-5 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                          EPSSP
                                    </h2>

                                    <p class="mt-2 text-base font-medium text-foreground/80">
                                          Electronic Payroll & Staff Self-Service Portal
                                    </p>

                                    <p class="mt-5 max-w-xl text-base leading-8 text-muted">
                                          EPSSP simplifies employee records, payroll processing, statutory deductions,
                                          payslips and
                                          staff self-service for organisations across Ghana.
                                    </p>

                                    <div class="mt-8 flex flex-wrap gap-2">
                                          <span
                                            class="rounded-full border border-border bg-background/70 px-3 py-2 text-xs text-muted">
                                                Human Resources
                                          </span>
                                          <span
                                            class="rounded-full border border-border bg-background/70 px-3 py-2 text-xs text-muted">
                                                Payroll
                                          </span>
                                          <span
                                            class="rounded-full border border-border bg-background/70 px-3 py-2 text-xs text-muted">
                                                Employee Self-Service
                                          </span>
                                    </div>

                                    <div class="my-10 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">

                                          <h6> EPSSP insights </h6>
                                          <ul
                                            class="flex items-start flex-col gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                                                <li v-for="(benefit, i) in epsspBenefits" :key="i + 1"
                                                  class="flex gap-4 items-center">
                                                      <CheckCircle2 :size="17" class="shrink-0 text-primary" />
                                                      <span>
                                                            {{ benefit }}
                                                      </span>
                                                </li>
                                          </ul>
                                    </div>
                                    <NuxtLink to="https://epssp.com" external target="_blank"
                                      class="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                                          Visit EPSPP
                                          <ArrowUpRight :size="17" />
                                    </NuxtLink>
                              </div>

                              <!-- EPSSP capability preview -->
                              <div
                                class="flex flex-col justify-center border-t border-border bg-background/60 p-6 md:p-10 lg:border-l lg:border-t-0">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                          Product focus
                                    </p>

                                    <h3 class="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                                          People, payroll, and administration in one place.
                                    </h3>

                                    <div class="mt-7 space-y-3">
                                          <div v-for="item in epsspCapabilities" :key="item"
                                            class="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                                                <CheckCircle2 :size="17" class="shrink-0 text-primary" />
                                                <span class="text-sm text-foreground/85">
                                                      {{ item }}
                                                </span>
                                          </div>
                                    </div>

                                    <p class="mt-5 text-xs leading-6 text-muted">
                                          Planned areas of functionality. Product scope and availability may evolve
                                          during
                                          development.
                                    </p>
                              </div>
                        </div>
                  </section>

                  <!-- Product principles -->
                  <section class="mt-20 md:mt-28">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    What guides our products
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Useful software starts with understanding the problem.
                              </h2>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    We want our products to be practical, dependable, and
                                    relevant to the people who use them. These principles
                                    guide how we approach product development.
                              </p>
                        </div>

                        <div class="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article class="rounded-3xl border border-border bg-surface p-5">
                                    <div
                                      class="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                          <Users :size="21" />
                                    </div>
                                    <h3 class="mt-5 font-semibold text-foreground">
                                          People first
                                    </h3>
                                    <p class="mt-2 text-sm leading-7 text-muted">
                                          Build around the needs and everyday experiences of real users.
                                    </p>
                              </article>

                              <article class="rounded-3xl border border-border bg-surface p-5">
                                    <div
                                      class="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                          <Layers3 :size="21" />
                                    </div>
                                    <h3 class="mt-5 font-semibold text-foreground">
                                          Connected workflows
                                    </h3>
                                    <p class="mt-2 text-sm leading-7 text-muted">
                                          Bring related activities together instead of adding unnecessary complexity.
                                    </p>
                              </article>

                              <article class="rounded-3xl border border-border bg-surface p-5">
                                    <div
                                      class="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                          <ShieldCheck :size="21" />
                                    </div>
                                    <h3 class="mt-5 font-semibold text-foreground">
                                          Responsible design
                                    </h3>
                                    <p class="mt-2 text-sm leading-7 text-muted">
                                          Consider security, privacy, and responsible information handling.
                                    </p>
                              </article>

                              <article class="rounded-3xl border border-border bg-surface p-5">
                                    <div
                                      class="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                          <ArrowRight :size="21" />
                                    </div>
                                    <h3 class="mt-5 font-semibold text-foreground">
                                          Continuous improvement
                                    </h3>
                                    <p class="mt-2 text-sm leading-7 text-muted">
                                          Evolve products as user needs and operational requirements change.
                                    </p>
                              </article>
                        </div>
                  </section>

                  <!-- Closing CTA -->
                  <section
                    class="relative mt-20 overflow-hidden rounded-4xl border border-primary/20 bg-primary/5 backdrop-blur-lg p-8 text-center md:mt-28 md:p-14">
                        <div class="absolute -left-20 -top-24 size-64 rounded-full bg-primary/10 blur-3xl" />
                        <div class="absolute -bottom-28 -right-16 size-64 rounded-full bg-primary/10 blur-3xl" />

                        <div class="relative mx-auto max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Beyond the products
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Have a problem that needs a software solution?
                              </h2>

                              <p class="mx-auto mt-4 max-w-xl leading-7 text-muted">
                                    Our products solve specific problems, but we also work
                                    with organizations to design and build technology around
                                    their own needs.
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
