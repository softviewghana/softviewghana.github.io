<script setup lang="ts">
      import {
            Network,
            Wifi,
            ShieldCheck,
            Server,
            Router,
            Monitor,
            Settings,
            ClipboardCheck,
            Building2,
            ArrowUpRight,
            Laptop,
            Globe,
            HardDrive,
            Activity,
      } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      const services = [
            {
                  icon: Network,
                  title: 'Office Networking',
                  description: 'Design and setup of wired networks that connect your teams, devices and business resources.',
            },
            {
                  icon: Wifi,
                  title: 'Wi-Fi Deployment',
                  description: 'Business Wi-Fi planning and installation for dependable wireless connectivity.',
            },
            {
                  icon: ShieldCheck,
                  title: 'Firewall Configuration',
                  description: 'Network security configuration to help protect business systems and connected devices.',
            },
            {
                  icon: Server,
                  title: 'Server Installation',
                  description: 'Installation and configuration of server infrastructure for business applications and resources.',
            },
            {
                  icon: Router,
                  title: 'Network Planning',
                  description: 'Network design and equipment planning based on your business environment and requirements.',
            },
            {
                  icon: ClipboardCheck,
                  title: 'Infrastructure Assessment',
                  description: 'Review of existing IT infrastructure to identify gaps, risks and improvement opportunities.',
            },
            {
                  icon: Settings,
                  title: 'IT Consulting',
                  description: 'Practical technology guidance to help businesses make informed infrastructure decisions.',
            },
            {
                  icon: Monitor,
                  title: 'System Administration',
                  description: 'Configuration and administration of business systems, devices and IT environments.',
            },
      ];

      const outcomes = [
            {
                  icon: Wifi,
                  title: 'Reliable connectivity',
                  description: 'Keep employees, devices and business resources connected through properly planned networks.',
            },
            {
                  icon: Activity,
                  title: 'Fewer interruptions',
                  description: 'Build a more dependable infrastructure that supports everyday business activities.',
            },
            {
                  icon: ShieldCheck,
                  title: 'Stronger protection',
                  description: 'Improve network security through appropriate configuration and infrastructure practices.',
            },
            {
                  icon: Building2,
                  title: 'Room to grow',
                  description: 'Establish an IT foundation that can accommodate new users, devices and business needs.',
            },
      ];

      const networkNodes = [
            { icon: Laptop, label: 'Workstations' },
            { icon: Server, label: 'Business server' },
            { icon: Wifi, label: 'Wireless devices' },
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            {
                  label: 'IT Infrastructure & Networking',
                  href: '/services/it-infrastructure-networking',
            },
      ];

      usePageSeo({
            title: 'IT Infrastructure & Networking — ' + CONSTANTS.APP_NAME,
            description:
                  'Business networking, Wi-Fi deployment, firewall configuration, server installation and IT infrastructure consulting for reliable business operations.',
            path: '/services/it-infrastructure-networking',
            breadcrumbs: breadcrumbs.map(breadcrumb => ({
                  name: breadcrumb.href,
                  url: breadcrumb.label
            }))
      });
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="IT Infrastructure & Networking" :breadcrumbs="breadcrumbs"
              description="We design, deploy and support business IT infrastructure that keeps your people, devices and systems connected." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    What we support
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Infrastructure that supports your business
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted md:text-lg">
                                    Every connected business depends on a reliable technology foundation.
                                    From office networks and wireless connectivity to servers and
                                    infrastructure security, the right setup helps people work
                                    efficiently and access the resources they need.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    We help businesses plan, install, configure and improve their IT
                                    environments. Whether you're setting up a new office, upgrading
                                    existing equipment or addressing network challenges, our focus is
                                    on practical infrastructure that meets your operational needs.
                              </p>

                              <div class="mt-8 flex flex-wrap gap-2">
                                    <span
                                      v-for="item in ['Networking', 'Wi-Fi', 'Servers', 'Security', 'IT consulting']"
                                      :key="item"
                                      class="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground/80">
                                          {{ item }}
                                    </span>
                              </div>
                        </div>

                        <!-- Network architecture illustration -->
                        <div class="relative overflow-hidden rounded-4xl border border-border bg-background p-5 md:p-7">
                              <div class="absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />

                              <div class="relative rounded-2xl border border-border bg-surface p-4 md:p-5">
                                    <div class="flex items-center justify-between gap-3">
                                          <div>
                                                <p class="text-xs font-semibold text-foreground">Business network</p>
                                                <p class="mt-1 text-[10px] text-muted">Illustrative infrastructure
                                                      layout</p>
                                          </div>
                                          <div
                                            class="flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1.5">
                                                <span class="size-1.5 rounded-full bg-primary" />
                                                <span class="text-[9px] font-medium text-muted">Network overview</span>
                                          </div>
                                    </div>

                                    <!-- Internet -->
                                    <div class="mt-7 flex flex-col items-center">
                                          <div
                                            class="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                                                <Globe class="size-5" />
                                          </div>
                                          <p class="mt-2 text-[10px] font-medium text-foreground">Internet</p>
                                          <div class="h-7 w-px bg-primary/40" />
                                    </div>

                                    <!-- Core network -->
                                    <div class="relative rounded-2xl border border-primary/20 bg-primary/5 p-4">
                                          <div class="flex items-center justify-center gap-3">
                                                <div
                                                  class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <Router class="size-5" />
                                                </div>
                                                <div>
                                                      <p class="text-xs font-semibold text-foreground">Network gateway
                                                      </p>
                                                      <p class="mt-1 text-[9px] text-muted">Routing & connectivity</p>
                                                </div>
                                          </div>

                                          <div class="mx-auto mt-3 h-6 w-px bg-primary/40" />

                                          <div class="flex justify-center">
                                                <div
                                                  class="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3">
                                                      <Network class="size-4 text-primary" />
                                                      <span class="text-[10px] font-semibold text-foreground">Core
                                                            network switch</span>
                                                </div>
                                          </div>

                                          <div
                                            class="relative mx-auto mt-5 h-5 w-4/5 border-x border-t border-primary/30">
                                                <span
                                                  class="absolute left-1/2 top-0 h-5 w-px translate-y-0 bg-primary/30" />
                                          </div>

                                          <div class="grid grid-cols-3 gap-2">
                                                <div v-for="item in networkNodes" :key="item.label"
                                                  class="flex min-w-0 flex-col items-center rounded-xl border border-border bg-background px-1 py-3 text-center">
                                                      <component :is="item.icon" class="size-5 text-primary" />
                                                      <span
                                                        class="mt-2 text-[9px] font-medium text-foreground">{{ item.label }}</span>
                                                </div>
                                          </div>
                                    </div>

                                    <!-- Supporting systems -->
                                    <div class="mt-4 grid grid-cols-2 gap-3">
                                          <div
                                            class="flex items-center gap-2 rounded-xl border border-border bg-background p-3">
                                                <div
                                                  class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                      <ShieldCheck class="size-4" />
                                                </div>
                                                <div>
                                                      <p class="text-[10px] font-semibold text-foreground">Security</p>
                                                      <p class="text-[9px] text-muted">Firewall & access</p>
                                                </div>
                                          </div>

                                          <div
                                            class="flex items-center gap-2 rounded-xl border border-border bg-background p-3">
                                                <div
                                                  class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                      <HardDrive class="size-4" />
                                                </div>
                                                <div>
                                                      <p class="text-[10px] font-semibold text-foreground">Storage</p>
                                                      <p class="text-[9px] text-muted">Data & resources</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- Services -->
                  <section class="mt-16 md:mt-20">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Our capabilities
                              </p>

                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Infrastructure services for your workplace
                              </h2>

                              <p class="mt-4 leading-7 text-muted">
                                    From network installation to ongoing system administration, we
                                    support the technology foundations your business depends on.
                              </p>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="item in services" :key="item.title"
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

                  <!-- Outcomes -->
                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:mt-20 md:p-10">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Business impact
                              </p>

                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    A stronger foundation for daily operations
                              </h2>

                              <p class="mt-4 leading-7 text-muted">
                                    Good infrastructure should make technology easier to depend on,
                                    manage and improve as your business grows.
                              </p>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="item in outcomes" :key="item.title"
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
                              <Network class="size-6" />
                        </div>

                        <h2
                          class="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              Need a stronger IT foundation?
                        </h2>

                        <p class="mx-auto mt-4 max-w-xl leading-7 text-muted">
                              Tell us about your current setup, infrastructure challenges or upcoming
                              project. Let's explore a practical solution for your business.
                        </p>

                        <NuxtLink to="/contact"
                          class="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Discuss Your Infrastructure
                              <ArrowUpRight class="size-4" />
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>
