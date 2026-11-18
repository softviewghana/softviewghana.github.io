<script setup lang="ts">
      import {
            Globe,
            LayoutDashboard,
            CalendarDays,
            Cloud,
            Users,
            Database,
            Code2,
            ShieldCheck,
            Smartphone,
            Gauge,
            Workflow,
            ArrowUpRight,
            Monitor,
            Layers3,
            LockKeyhole,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      usePageSeo({
            title: 'Web Application Development — ' + CONSTANTS.APP_NAME,
            description:
                  'We design and develop responsive websites, web applications, customer portals, SaaS platforms and business systems built for real-world use.',
            path: '/services/web-application-development',
      });

      const solutions = [
            {
                  icon: Globe,
                  title: 'Business Websites',
                  description: 'Professional websites that communicate your value and help customers find your business.',
            },
            {
                  icon: Users,
                  title: 'Customer Portals',
                  description: 'Secure online spaces where customers can access services, information and account features.',
            },
            {
                  icon: CalendarDays,
                  title: 'Booking Platforms',
                  description: 'Online booking and scheduling experiences that simplify how people access your services.',
            },
            {
                  icon: Cloud,
                  title: 'SaaS Platforms',
                  description: 'Web-based software products designed around subscriptions, users and business workflows.',
            },
            {
                  icon: LayoutDashboard,
                  title: 'Dashboards',
                  description: 'Clear interfaces for monitoring operations, managing information and making decisions.',
            },
            {
                  icon: Workflow,
                  title: 'Administrative Systems',
                  description: 'Practical systems for managing records, processes, teams and day-to-day operations.',
            },
            {
                  icon: Layers3,
                  title: 'Online Platforms',
                  description: 'Purpose-built platforms that connect users, services and information in one place.',
            },
            {
                  icon: Code2,
                  title: 'API-Driven Applications',
                  description: 'Applications designed to exchange data and integrate with other systems and services.',
            },
      ];

      const principles = [
            {
                  icon: Smartphone,
                  title: 'Responsive experiences',
                  description: 'Interfaces designed to work smoothly across desktops, tablets and mobile devices.',
            },
            {
                  icon: Gauge,
                  title: 'Performance-focused',
                  description: 'Efficient applications built with speed, usability and reliability in mind.',
            },
            {
                  icon: ShieldCheck,
                  title: 'Security-conscious',
                  description: 'Thoughtful foundations for protecting application data and user access.',
            },
            {
                  icon: Layers3,
                  title: 'Built to evolve',
                  description: 'Maintainable systems that can grow alongside changing business requirements.',
            },
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            {
                  label: 'Web Application Development',
                  href: '/services/web-application-development',
            },
      ];

      const previewModules = [
            { icon: LayoutDashboard, label: 'Dashboard' },
            { icon: Users, label: 'Users & access' },
            { icon: Database, label: 'Data management' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="Web Application Development" :breadcrumbs="breadcrumbs"
              description="We build responsive websites and powerful web applications that help businesses serve customers, manage operations and deliver better digital experiences." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    What we deliver
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Digital experiences built around your business
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    A modern digital presence can do much more than introduce your business.
                                    It can help customers access services, allow teams to manage operations
                                    and bring important processes into one connected experience.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    We design and develop websites and web applications that combine
                                    thoughtful user interfaces with dependable backend functionality.
                                    From a professional business website to a fully featured online
                                    platform, we focus on building solutions that serve a clear purpose.
                              </p>

                              <div class="mt-8 flex flex-wrap gap-2">
                                    <span
                                      v-for="item in ['Websites', 'Portals', 'Dashboards', 'SaaS platforms', 'Business systems']"
                                      :key="item"
                                      class="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground/80">
                                          {{ item }}
                                    </span>
                              </div>
                        </div>

                        <!-- Application preview -->
                        <div class="relative overflow-hidden rounded-4xl border border-border bg-background p-4 md:p-6">
                              <div class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

                              <div
                                class="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                                    <div class="flex items-center justify-between border-b border-border px-4 py-3">
                                          <div class="flex items-center gap-2">
                                                <div class="flex gap-1.5">
                                                      <span class="h-2.5 w-2.5 rounded-full bg-primary/30" />
                                                      <span class="h-2.5 w-2.5 rounded-full bg-primary/50" />
                                                      <span class="h-2.5 w-2.5 rounded-full bg-primary/70" />
                                                </div>
                                                <span class="ml-2 text-xs font-medium text-muted">Business
                                                      platform</span>
                                          </div>
                                          <Monitor class="size-4 text-muted" />
                                    </div>

                                    <div class="grid grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)]">
                                          <aside class="border-r border-border bg-background/70 p-3">
                                                <div class="mb-5 flex items-center gap-2">
                                                      <div
                                                        class="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                            <Layers3 class="size-4" />
                                                      </div>
                                                      <div class="h-2 w-12 rounded-full bg-foreground/15" />
                                                </div>

                                                <div class="space-y-2.5">
                                                      <div v-for="(item, index) in previewModules" :key="item.label"
                                                        class="flex items-center gap-2 rounded-lg px-2 py-2"
                                                        :class="index === 0 ? 'bg-primary/10 text-primary' : 'text-muted'">
                                                            <component :is="item.icon" class="size-3.5 shrink-0" />
                                                            <span
                                                              class="truncate text-[9px] font-medium">{{ item.label }}</span>
                                                      </div>
                                                </div>
                                          </aside>

                                          <div class="min-w-0 p-3 md:p-4">
                                                <div class="flex items-center justify-between gap-2">
                                                      <div>
                                                            <div class="h-2 w-20 rounded-full bg-foreground/20" />
                                                            <div
                                                              class="mt-2 h-1.5 w-28 rounded-full bg-foreground/10" />
                                                      </div>
                                                      <div
                                                        class="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                            <Users class="size-3.5" />
                                                      </div>
                                                </div>

                                                <div class="mt-5 grid grid-cols-2 gap-2">
                                                      <div v-for="item in ['Overview', 'Activity']" :key="item"
                                                        class="rounded-xl border border-border bg-background p-3">
                                                            <p class="text-[9px] text-muted">{{ item }}</p>
                                                            <div class="mt-2 h-2 w-10 rounded-full bg-foreground/20" />
                                                            <div class="mt-2 h-1.5 w-full rounded-full bg-primary/15" />
                                                      </div>
                                                </div>

                                                <div class="mt-3 rounded-xl border border-border bg-background p-3">
                                                      <div class="mb-4 flex items-center justify-between">
                                                            <span class="text-[9px] font-medium text-muted">Recent
                                                                  records</span>
                                                            <span class="text-[9px] text-primary">View all</span>
                                                      </div>

                                                      <div v-for="index in 3" :key="index"
                                                        class="flex items-center gap-2 border-t border-border py-2 first:border-0">
                                                            <div class="size-5 shrink-0 rounded-md bg-primary/10" />
                                                            <div class="min-w-0 flex-1">
                                                                  <div
                                                                    class="h-1.5 w-16 rounded-full bg-foreground/20" />
                                                                  <div
                                                                    class="mt-1.5 h-1 w-10 rounded-full bg-foreground/10" />
                                                            </div>
                                                            <div class="h-1.5 w-7 rounded-full bg-primary/30" />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div class="relative mt-4 grid grid-cols-3 gap-2">
                                    <div v-for="item in [
                                          { icon: Smartphone, label: 'Responsive' },
                                          { icon: LockKeyhole, label: 'Secure' },
                                          { icon: Database, label: 'Connected' },
                                    ]" :key="item.label"
                                      class="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface px-2 py-3 text-center">
                                          <component :is="item.icon" class="size-4 text-primary" />
                                          <span class="text-[10px] font-medium text-muted">{{ item.label }}</span>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- Solutions -->
                  <section class="mt-16 md:mt-20">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Our capabilities
                              </p>
                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Web solutions for different business needs
                              </h2>
                              <p class="mt-4 leading-7 text-muted">
                                    Whether you need a public-facing website or an application that powers
                                    your internal operations, we can help turn your requirements into a
                                    practical digital solution.
                              </p>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="item in solutions" :key="item.title"
                                class="group rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                                    <div
                                      class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                                          <component :is="item.icon" class="size-5" />
                                    </div>

                                    <h3 class="mt-5 text-base font-semibold text-foreground">
                                          {{ item.title }}
                                    </h3>

                                    <p class="mt-2 text-sm leading-6 text-muted">
                                          {{ item.description }}
                                    </p>
                              </article>
                        </div>
                  </section>

                  <!-- Principles -->
                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:mt-20 md:p-10">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    How we build
                              </p>
                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Built on principles that matter
                              </h2>
                              <p class="mt-4 leading-7 text-muted">
                                    Good applications are not just about features. They should be easy
                                    to use, dependable and designed with the future in mind.
                              </p>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="item in principles" :key="item.title"
                                class="rounded-2xl border border-border bg-background/80 p-5">
                                    <div
                                      class="mb-4 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                          <component :is="item.icon" class="size-5" />
                                    </div>

                                    <h3 class="font-semibold text-foreground">{{ item.title }}</h3>
                                    <p class="mt-2 text-sm leading-6 text-muted">{{ item.description }}</p>
                              </article>
                        </div>
                  </section>

                  <!-- CTA -->
                  <section
                    class="mt-16 overflow-hidden rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:mt-20 md:p-12">
                        <div
                          class="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                              <Code2 class="size-6" />
                        </div>

                        <h2
                          class="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              Have an idea for a web application?
                        </h2>

                        <p class="mx-auto mt-4 max-w-xl leading-7 text-muted">
                              Tell us what you want to build. We'll help you explore the requirements
                              and identify a practical way to bring your idea to life.
                        </p>

                        <NuxtLink to="/contact"
                          class="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Discuss Your Project
                              <ArrowUpRight class="size-4" />
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>
