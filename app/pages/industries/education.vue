<script setup lang="ts">
      import {
            ArrowRight,
            ArrowUpRight,
            BookOpen,
            CalendarDays,
            ChartNoAxesCombined,
            ClipboardList,
            GraduationCap,
            MessageSquare,
            Wallet,
            Users,
            Workflow,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Education', href: '/industries/education' },
      ];

      const focusAreas = [
            {
                  icon: ClipboardList,
                  title: 'School Administration',
                  description: 'Organize everyday administrative work, school records, and institutional information.',
            },
            {
                  icon: Users,
                  title: 'Admissions & Student Records',
                  description: 'Support student enrollment, information management, and the student lifecycle.',
            },
            {
                  icon: BookOpen,
                  title: 'Academic Administration',
                  description: 'Manage academic structures, classes, subjects, timetables, and assessment activities.',
            },
            {
                  icon: CalendarDays,
                  title: 'Attendance & Scheduling',
                  description: 'Make attendance tracking and school scheduling easier to coordinate.',
            },
            {
                  icon: Wallet,
                  title: 'Fees & Payments',
                  description: 'Improve visibility into school fees, payment records, and financial administration.',
            },
            {
                  icon: MessageSquare,
                  title: 'School Communication',
                  description: 'Help schools communicate important information with staff, students, and families.',
            },
            {
                  icon: ChartNoAxesCombined,
                  title: 'Reports & Insights',
                  description: 'Turn school records into useful reports that support better decisions.',
            },
            {
                  icon: Workflow,
                  title: 'Operational Workflows',
                  description: 'Reduce repetitive administrative work through connected digital processes.',
            },
      ];

      const outcomes = [
            'More organized school records',
            'Better coordination across school teams',
            'Clearer communication with families',
            'More accessible operational information',
      ];

      usePageSeo({
            title: 'Education Technology Solutions — ' + CONSTANTS.APP_NAME,
            description: 'Explore education technology solutions for school administration, student records, academic operations, attendance, fees, communication, and reporting.',
            path: '/industries/education',
            breadcrumbs: breadcrumbs.map((breadcrumb) => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href,
            })),
      });
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Industries / Education" title="Technology for better-run schools."
              :breadcrumbs="breadcrumbs"
              description="We build digital solutions that help educational institutions organize their operations, manage information, and create better experiences for the people who make learning possible." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Understanding education
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Better school operations start with better-connected systems.
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted">
                                    Running a school involves much more than teaching. Admissions, student
                                    records, academic administration, attendance, fees, staff coordination,
                                    and communication all need to work together.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    We approach education technology by understanding these everyday
                                    responsibilities and designing systems around the people and processes
                                    behind them — including the needs of Ghanaian basic schools.
                              </p>
                        </div>

                        <div class="relative overflow-hidden rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <div class="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

                              <div class="relative">
                                    <div class="flex items-center justify-between">
                                          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                The bigger picture
                                          </span>
                                          <GraduationCap class="size-6 text-primary" />
                                    </div>

                                    <h3 class="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                                          One school. Many connected responsibilities.
                                    </h3>

                                    <p class="mt-3 text-sm leading-7 text-muted">
                                          Technology should help school teams work with shared information
                                          instead of disconnected processes.
                                    </p>

                                    <div class="mt-7 grid grid-cols-2 gap-3">
                                          <div v-for="item in [
                                                'Students',
                                                'Academics',
                                                'Administration',
                                                'Finance',
                                                'Staff',
                                                'Families',
                                          ]" :key="item"
                                            class="flex items-center gap-2 rounded-xl border border-border bg-background/80 px-3 py-3 text-sm font-medium text-foreground">
                                                <span class="size-1.5 rounded-full bg-primary" />
                                                {{ item }}
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
                                    Supporting the work behind education.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    We explore opportunities to simplify school processes, improve access
                                    to information, and connect important administrative activities.
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

                  <!-- Intended outcomes -->
                  <section
                    class="mt-20 grid gap-8 rounded-4xl border border-border bg-surface p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    What better technology can support
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Less administrative friction. More room to focus on learning.
                              </h2>

                              <p class="mt-4 leading-8 text-muted">
                                    The goal is not to introduce technology for its own sake. It is to
                                    make important school processes easier to manage and information
                                    easier to use.
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

                  <!-- Featured product -->
                  <section
                    class="relative mt-20 overflow-hidden rounded-4xl border border-primary/20 bg-primary/5 p-7 md:p-10 lg:p-12">
                        <div class="absolute -right-20 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />

                        <div class="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                              <div>
                                    <div
                                      class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1.5 text-xs font-semibold text-primary">
                                          <span class="size-1.5 rounded-full bg-primary" />
                                          Our education product
                                    </div>

                                    <h2 class="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                          Meet eSchool Ghana.
                                    </h2>

                                    <p class="mt-4 max-w-xl text-base leading-8 text-muted">
                                          A School Operating System being developed for basic schools
                                          in Ghana. eSchool Ghana brings key school administration,
                                          academic, communication, and financial workflows into one
                                          connected platform.
                                    </p>

                                    <NuxtLink to="https://eschoolghana.com" target="_blank" rel="noopener noreferrer"
                                      external
                                      class="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                          Explore eSchool Ghana
                                          <ArrowUpRight class="size-4" />
                                    </NuxtLink>
                              </div>

                              <div
                                class="relative rounded-3xl border border-primary/15 bg-background/80 p-5 shadow-sm md:p-6">
                                    <div class="flex items-center justify-between border-b border-border pb-4">
                                          <div>
                                                <p class="text-sm font-semibold text-foreground">eSchool Ghana</p>
                                                <p class="mt-1 text-xs text-muted">School Operating System</p>
                                          </div>

                                          <div
                                            class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <GraduationCap class="size-5" />
                                          </div>
                                    </div>

                                    <div class="mt-5 grid grid-cols-2 gap-3">
                                          <div v-for="item in [
                                                { label: 'Academics', icon: BookOpen },
                                                { label: 'Students', icon: Users },
                                                { label: 'Attendance', icon: CalendarDays },
                                                { label: 'Fees', icon: Wallet },
                                          ]" :key="item.label"
                                            class="rounded-2xl border border-border bg-surface p-4">
                                                <component :is="item.icon" class="size-5 text-primary" />
                                                <p class="mt-3 text-sm font-medium text-foreground">
                                                      {{ item.label }}
                                                </p>
                                          </div>
                                    </div>

                                    <p class="mt-4 text-xs leading-6 text-muted">
                                          An illustrative overview of the platform's focus areas.
                                    </p>
                              </div>
                        </div>
                  </section>

                  <!-- CTA -->
                  <section class="mt-20 text-center">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                              Let's explore what's possible
                        </p>

                        <h2
                          class="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                              Have an education challenge worth solving?
                        </h2>

                        <p class="mx-auto mt-4 max-w-xl leading-8 text-muted">
                              Whether you're improving an existing process or planning a new digital
                              solution, let's discuss what your institution needs.
                        </p>

                        <NuxtLink to="/contact"
                          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                              Discuss an education solution
                              <ArrowRight class="size-4" />
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>
