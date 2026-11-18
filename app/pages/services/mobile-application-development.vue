<script setup lang="ts">
      import {
            Smartphone,
            Users,
            BriefcaseBusiness,
            WifiOff,
            Bell,
            LayoutDashboard,
            ShieldCheck,
            Database,
            RefreshCw,
            ArrowUpRight,
            Home,
            CalendarDays,
            UserRound,
            Settings,
            Cloud,
            Fingerprint,
            SmartphoneNfc,
            Workflow,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';



      const appTypes = [
            {
                  icon: BriefcaseBusiness,
                  title: 'Business Apps',
                  description: 'Mobile tools that help businesses deliver services and manage important activities.',
            },
            {
                  icon: Users,
                  title: 'Customer Apps',
                  description: 'Convenient mobile experiences that keep customers connected to your services.',
            },
            {
                  icon: Smartphone,
                  title: 'Internal Staff Apps',
                  description: 'Mobile applications that give employees access to work tools and information.',
            },
            {
                  icon: WifiOff,
                  title: 'Offline-First Solutions',
                  description: 'Applications designed to support selected tasks when internet access is unavailable.',
            },
            {
                  icon: RefreshCw,
                  title: 'API Integrations',
                  description: 'Connect mobile applications with websites, backend services and existing systems.',
            },
            {
                  icon: LayoutDashboard,
                  title: 'Mobile Dashboards',
                  description: 'Access operational information and useful business insights while on the move.',
            },
            {
                  icon: Bell,
                  title: 'Push Notifications',
                  description: 'Keep users informed with timely updates and relevant notifications.',
            },
            {
                  icon: Fingerprint,
                  title: 'Authentication',
                  description: 'Secure account access and user authentication experiences.',
            },
      ];

      const valuePoints = [
            {
                  icon: SmartphoneNfc,
                  title: 'Work from anywhere',
                  description: 'Give customers and employees access to essential services and tools on their mobile devices.',
            },
            {
                  icon: Users,
                  title: 'Stay connected',
                  description: 'Improve communication and make it easier for users to interact with your business.',
            },
            {
                  icon: Workflow,
                  title: 'Simplify daily tasks',
                  description: 'Move repetitive processes into convenient mobile workflows.',
            },
            {
                  icon: ShieldCheck,
                  title: 'Deliver better experiences',
                  description: 'Create intuitive, dependable applications that people can use with confidence.',
            },
      ];

      const appNavigation = [
            { icon: Home, label: 'Home', active: true },
            { icon: CalendarDays, label: 'Activity', active: false },
            { icon: Bell, label: 'Updates', active: false },
            { icon: UserRound, label: 'Profile', active: false },
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            {
                  label: 'Mobile Application Development',
                  href: '/services/mobile-application-development',
            },
      ];

      usePageSeo({
            title: 'Mobile Application Development — ' + CONSTANTS.APP_NAME,
            description:
                  'Cross-platform Android and iOS applications designed to improve customer experiences, connect business operations and make essential services accessible on mobile.',
            path: '/services/mobile-application-development',
            breadcrumbs: breadcrumbs.map(breadcrumb => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href
            }))
      });
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="Mobile Application Development" :breadcrumbs="breadcrumbs"
              description="Cross-platform mobile applications for Android and iOS, designed to connect people with the services, tools and information they need." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl bg-white/2 backdrop-blur-2xl p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    What we create
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Useful mobile experiences, built around real needs
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Mobile devices have become an important part of how people work,
                                    communicate and access services. A well-designed mobile application
                                    can bring your business closer to customers and make everyday
                                    activities easier for your team.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    We develop mobile applications for Android and iOS, with a focus on
                                    intuitive interfaces, dependable performance and integration with
                                    the systems that power your business. From customer-facing apps to
                                    internal business tools, we build around the way people actually use
                                    their devices.
                              </p>

                              <div class="mt-8 flex flex-wrap gap-2">
                                    <span
                                      v-for="item in ['Android', 'iOS', 'Cross-platform', 'API integration', 'Mobile-first']"
                                      :key="item"
                                      class="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground/80">
                                          {{ item }}
                                    </span>
                              </div>
                        </div>

                        <!-- Mobile app preview -->
                        <div
                          class="relative flex min-h-110 items-center justify-center overflow-hidden rounded-4xl border-border bg-background/5 backdrop-blur-2xl p-6 md:p-8">
                              <div class="absolute -left-16 top-10 size-52 rounded-full bg-primary/10 blur-3xl" />
                              <div class="absolute -bottom-16 -right-10 size-56 rounded-full bg-primary/10 blur-3xl" />

                              <div
                                class="relative w-full max-w-85.5 rounded-[2.5rem] border-[6px] border-foreground/10 bg-surface p-2 shadow-xl">
                                    <div class="overflow-hidden rounded-4xl border border-border bg-background">
                                          <div class="flex items-center justify-between px-4 pb-3 pt-4">
                                                <div>
                                                      <p class="text-[9px] text-muted">Welcome back</p>
                                                      <p class="mt-0.5 text-sm font-semibold text-foreground">Your
                                                            workspace</p>
                                                </div>
                                                <div
                                                  class="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                      <UserRound class="size-4" />
                                                </div>
                                          </div>

                                          <div class="mx-3 rounded-2xl bg-primary p-4 text-white">
                                                <p class="text-[10px] text-white/75">Your overview</p>
                                                <p class="mt-2 text-lg font-semibold">Everything in one place</p>
                                                <p class="mt-1 text-[9px] leading-4 text-white/75">
                                                      Access your services and manage your activities.
                                                </p>
                                                <div class="mt-4 flex items-center justify-between">
                                                      <span class="text-[9px] font-medium">Explore workspace</span>
                                                      <ArrowUpRight class="size-4" />
                                                </div>
                                          </div>

                                          <div class="px-3 pb-3 pt-4">
                                                <div class="mb-3 flex items-center justify-between">
                                                      <span class="text-xs font-semibold text-foreground">Quick
                                                            access</span>
                                                      <span class="text-[9px] text-primary">View all</span>
                                                </div>

                                                <div class="grid grid-cols-2 gap-2">
                                                      <div v-for="item in [
                                                            { icon: CalendarDays, label: 'Activities' },
                                                            { icon: Bell, label: 'Notifications' },
                                                            { icon: Database, label: 'My records' },
                                                            { icon: Settings, label: 'Settings' },
                                                      ]" :key="item.label"
                                                        class="rounded-xl border border-border bg-surface p-3">
                                                            <component :is="item.icon" class="size-4 text-primary" />
                                                            <p class="mt-3 text-[10px] font-medium text-foreground">
                                                                  {{ item.label }}
                                                            </p>
                                                      </div>
                                                </div>

                                                <div class="mt-4 rounded-xl border border-border bg-surface p-3">
                                                      <div class="flex items-center gap-2">
                                                            <div
                                                              class="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                                  <Cloud class="size-3.5" />
                                                            </div>
                                                            <div>
                                                                  <p class="text-[10px] font-semibold text-foreground">
                                                                        Connected services</p>
                                                                  <p class="text-[9px] text-muted">Your workspace is
                                                                        ready</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div class="grid grid-cols-4 border-t border-border bg-surface px-2 py-3">
                                                <div v-for="item in appNavigation" :key="item.label"
                                                  class="flex flex-col items-center gap-1"
                                                  :class="item.active ? 'text-primary' : 'text-muted'">
                                                      <component :is="item.icon" class="size-4" />
                                                      <span class="text-[8px] font-medium">{{ item.label }}</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <!-- Floating integration indicator -->
                              <div
                                class="absolute bottom-12 left-4 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-sm md:bottom-16 md:left-8">
                                    <div
                                      class="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                          <RefreshCw class="size-4" />
                                    </div>
                                    <div>
                                          <p class="text-[10px] font-semibold text-foreground">System integration</p>
                                          <p class="text-[9px] text-muted">Connected experience</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- App capabilities -->
                  <section class="mt-16 md:mt-20">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Our capabilities
                              </p>

                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Mobile solutions for your users and your business
                              </h2>

                              <p class="mt-4 leading-7 text-muted">
                                    We build mobile experiences for different audiences and use cases,
                                    with the features and integrations your application needs.
                              </p>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="item in appTypes" :key="item.title"
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

                  <!-- Value -->
                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:mt-20 md:p-10">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Why mobile matters
                              </p>

                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    The value is in everyday use
                              </h2>

                              <p class="mt-4 leading-7 text-muted">
                                    A successful mobile application should make something easier,
                                    faster or more accessible. We focus on practical value that users
                                    can experience every day.
                              </p>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="item in valuePoints" :key="item.title"
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
                              <Smartphone class="size-6" />
                        </div>

                        <h2
                          class="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              Have an idea for a mobile application?
                        </h2>

                        <p class="mx-auto mt-4 max-w-xl leading-7 text-muted">
                              Whether it's a customer app, an internal business tool or a new mobile
                              product, let's discuss what you want to build.
                        </p>

                        <NuxtLink to="/contact"
                          class="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Discuss Your App
                              <ArrowUpRight class="size-4" />
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>
