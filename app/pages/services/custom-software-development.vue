<script setup lang="ts">
      import {
            ArrowRight,
            ArrowUpRight,
            Check,
            Workflow,
            Database,
            Users,
            ChartNoAxesCombined,
            Network,
            ShieldCheck,
            Building2,
            Cog,
            Zap,
            Layers3,
            Code2,
            MonitorSmartphone,
            GitBranch,
            Puzzle,
      } from '@lucide/vue'
      import CONSTANTS from '~/constants'

      const capabilities = [
            {
                  title: 'ERP Systems',
                  description: 'Integrated platforms for managing core business operations.',
                  icon: Building2,
            },
            {
                  title: 'CRM Solutions',
                  description: 'Manage customer relationships, interactions and sales.',
                  icon: Users,
            },
            {
                  title: 'Business Automation',
                  description: 'Automate repetitive tasks and streamline operations.',
                  icon: Zap,
            },
            {
                  title: 'Customer Portals',
                  description: 'Secure digital spaces for customers and business partners.',
                  icon: MonitorSmartphone,
            },
            {
                  title: 'Management Systems',
                  description: 'Purpose-built platforms for internal business processes.',
                  icon: Layers3,
            },
            {
                  title: 'Workflow Management',
                  description: 'Connect teams, tasks, approvals and processes.',
                  icon: GitBranch,
            },
            {
                  title: 'Business Intelligence',
                  description: 'Turn operational data into meaningful insights.',
                  icon: ChartNoAxesCombined,
            },
            {
                  title: 'API Integrations',
                  description: 'Connect applications, services and existing tools.',
                  icon: Puzzle,
            },
      ]

      const outcomes = [
            {
                  title: 'Less manual work',
                  description: 'Replace repetitive processes with connected, reliable software.',
                  icon: Workflow,
            },
            {
                  title: 'Better visibility',
                  description: 'Give teams a clearer picture of operations and performance.',
                  icon: ChartNoAxesCombined,
            },
            {
                  title: 'Connected operations',
                  description: 'Bring disconnected tools, teams and workflows together.',
                  icon: Network,
            },
            {
                  title: 'Room to grow',
                  description: 'Build flexible systems that evolve with your organization.',
                  icon: Layers3,
            },
      ]

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            {
                  label: 'Custom Software Development',
                  href: '/services/custom-software-development',
            },
      ]

      usePageSeo({
            title: 'Custom Software Development — ' + CONSTANTS.APP_NAME,
            description:
                  'Tailored software solutions built around your business processes, workflows and goals. ERP systems, business automation, portals and integrations.',
            path: '/services/custom-software-development',
            breadcrumbs: breadcrumbs.map((breadcrumb) => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href,
            })),
      })
</script>

<template>
      <div class="pb-24">
            <PageHero eyebrow="Services" title="Custom Software Development" :breadcrumbs="breadcrumbs"
              description="Purpose-built software that simplifies complex operations, connects your business and turns ideas into practical digital solutions." />

            <BaseContainer class="mt-10 space-y-20 md:mt-16 md:space-y-28">

                  <!-- Introduction and visual showcase -->
                  <section class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                        <!-- Introduction -->
                        <div>
                              <div
                                class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    <span class="h-px w-8 bg-primary" />
                                    Software built around you
                              </div>

                              <h2
                                class="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                                    Your business is unique.
                                    <span class="text-primary">Your software should be too.</span>
                              </h2>

                              <p class="mt-6 text-base leading-8 text-muted">
                                    Every organization has its own processes, challenges and
                                    ambitions. Generic software doesn't always provide the
                                    flexibility needed to manage them effectively.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    At Softview Ghana, we design and develop software around
                                    how your organization actually works. Whether you need an
                                    integrated business platform, an internal management
                                    system, a customer-facing portal or automated workflows,
                                    we build solutions that address real operational needs.
                              </p>

                              <div class="mt-8 flex flex-wrap gap-3">
                                    <NuxtLink to="/contact"
                                      class="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                          Discuss Your Project
                                          <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
                                    </NuxtLink>

                                    <NuxtLink to="/services"
                                      class="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/40">
                                          Explore Our Services
                                          <ArrowUpRight class="size-4" />
                                    </NuxtLink>
                              </div>

                              <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
                                    <div class="flex items-center gap-2 text-xs text-muted">
                                          <Check class="size-4 text-primary" />
                                          Built around your processes
                                    </div>
                                    <div class="flex items-center gap-2 text-xs text-muted">
                                          <Check class="size-4 text-primary" />
                                          Designed to scale
                                    </div>
                              </div>
                        </div>

                        <!-- Software architecture visual -->
                        <div class="relative min-w-0">
                              <div
                                class="pointer-events-none absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />

                              <div
                                class="relative overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-xl sm:p-7">

                                    <!-- Visual header -->
                                    <div class="flex items-center justify-between border-b border-border pb-5">
                                          <div>
                                                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                                                      Connected systems
                                                </p>
                                                <p class="mt-1 text-sm font-semibold text-foreground">
                                                      One connected ecosystem
                                                </p>
                                          </div>

                                          <div
                                            class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <Workflow class="size-5" />
                                          </div>
                                    </div>

                                    <!-- Central system -->
                                    <div class="relative py-7">
                                          <div
                                            class="relative mx-auto max-w-60 overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
                                                <div
                                                  class="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                                                      <Layers3 class="size-6" />
                                                </div>

                                                <p class="mt-3 text-sm font-bold text-foreground">
                                                      Your Business System
                                                </p>
                                                <p class="mt-1 text-xs text-muted">
                                                      Built around your operations
                                                </p>

                                                <div class="mt-4 flex justify-center gap-1.5">
                                                      <span class="size-1.5 rounded-full bg-primary" />
                                                      <span class="size-1.5 rounded-full bg-primary/40" />
                                                      <span class="size-1.5 rounded-full bg-primary/20" />
                                                </div>
                                          </div>

                                          <!-- Connection lines -->
                                          <div class="mx-auto grid max-w-90 grid-cols-3">
                                                <div
                                                  class="mx-auto h-8 w-px border-l border-dashed border-primary/40" />
                                                <div
                                                  class="mx-auto h-8 w-px border-l border-dashed border-primary/40" />
                                                <div
                                                  class="mx-auto h-8 w-px border-l border-dashed border-primary/40" />
                                          </div>

                                          <!-- Connected modules -->
                                          <div class="grid grid-cols-3 gap-2 sm:gap-3">
                                                <div v-for="module in [
                                                      { name: 'People', icon: Users },
                                                      { name: 'Data', icon: Database },
                                                      { name: 'Processes', icon: Cog },
                                                ]" :key="module.name"
                                                  class="flex flex-col items-center rounded-xl border border-border bg-background p-3 text-center sm:p-4">
                                                      <component :is="module.icon" class="size-5 text-primary" />
                                                      <span class="mt-2 text-xs font-medium text-foreground">
                                                            {{ module.name }}
                                                      </span>
                                                </div>
                                          </div>
                                    </div>

                                    <!-- Integration layer -->
                                    <div class="rounded-xl border border-border bg-background/70 p-4">
                                          <div class="flex items-center gap-3">
                                                <div
                                                  class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                      <Network class="size-4" />
                                                </div>

                                                <div class="min-w-0 flex-1">
                                                      <p class="text-xs font-semibold text-foreground">
                                                            Connected applications
                                                      </p>
                                                      <p class="mt-1 text-[11px] text-muted">
                                                            APIs · Integrations · Automation
                                                      </p>
                                                </div>

                                                <ShieldCheck class="size-5 shrink-0 text-primary" />
                                          </div>
                                    </div>

                                    <div class="mt-5 flex items-center justify-between gap-3">
                                          <span class="text-[11px] text-muted">
                                                Designed for your business requirements
                                          </span>
                                          <span class="flex items-center gap-1.5 text-[11px] font-medium text-primary">
                                                <span class="size-1.5 rounded-full bg-primary" />
                                                Connected by design
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- Capabilities -->
                  <section>
                        <div class="max-w-2xl">
                              <div
                                class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    <span class="h-px w-8 bg-primary" />
                                    What we build
                              </div>

                              <h2 class="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Software solutions for the way you work.
                              </h2>

                              <p class="mt-4 text-base leading-7 text-muted">
                                    From complete business platforms to specialized tools,
                                    we develop practical solutions that address your specific
                                    operational requirements.
                              </p>
                        </div>

                        <div class="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="(item, index) in capabilities" :key="item.title"
                                class="group rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                                    <div class="flex items-center justify-between">
                                          <div
                                            class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                                <component :is="item.icon" class="size-5" />
                                          </div>

                                          <span class="text-xs font-medium tabular-nums text-muted/50">
                                                0{{ index + 1 }}
                                          </span>
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
                  <section
                    class="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-9 lg:p-12">

                        <div
                          class="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/[0.07] blur-[90px]" />

                        <div class="relative">
                              <div class="max-w-2xl">
                                    <div
                                      class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                          <span class="h-px w-8 bg-primary" />
                                          The difference
                                    </div>

                                    <h2 class="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                          More than software.
                                          <span class="text-primary">Better ways of working.</span>
                                    </h2>

                                    <p class="mt-4 text-base leading-7 text-muted">
                                          The right technology should make everyday operations
                                          simpler, give people better tools and create room for
                                          sustainable growth.
                                    </p>
                              </div>

                              <div class="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                                    <div v-for="item in outcomes" :key="item.title" class="flex gap-4">
                                          <div
                                            class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <component :is="item.icon" class="size-5" />
                                          </div>

                                          <div>
                                                <h3 class="text-sm font-semibold text-foreground">
                                                      {{ item.title }}
                                                </h3>
                                                <p class="mt-2 text-sm leading-6 text-muted">
                                                      {{ item.description }}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- CTA -->
                  <section
                    class="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/6 px-6 py-12 text-center sm:px-10 sm:py-16">

                        <div
                          class="pointer-events-none absolute left-1/2 top-0 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

                        <div class="relative mx-auto max-w-2xl">
                              <div
                                class="mx-auto flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                    <Code2 class="size-6" />
                              </div>

                              <p class="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Let's build something meaningful
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Have a business challenge that needs a software solution?
                              </h2>

                              <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                                    Tell us what you're trying to achieve. Let's explore
                                    how the right technology can help your organization
                                    work smarter and move forward.
                              </p>

                              <NuxtLink to="/contact"
                                class="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                    Discuss Your Software Project
                                    <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
                              </NuxtLink>

                              <p class="mt-5 text-xs text-muted">
                                    No obligation. Just a conversation about your requirements.
                              </p>
                        </div>
                  </section>

            </BaseContainer>
      </div>
</template>
