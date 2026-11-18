<script setup lang="ts">
      import {
            ArrowRight,
            ArrowUpRight,
            Check,
            Cloud,
            Server,
            GitBranch,
            ShieldCheck,
            Activity,
            Database,
            Gauge,
            RefreshCw,
            Terminal,
            Settings2,
            Boxes,
            LockKeyhole,
            Rocket,
            HardDrive,
      } from '@lucide/vue'
      import CONSTANTS from '~/constants'

      const services = [
            {
                  title: 'Cloud Migration',
                  description: 'Move applications and infrastructure to suitable cloud environments.',
                  icon: Cloud,
            },
            {
                  title: 'Server Management',
                  description: 'Configure, maintain and manage dependable server environments.',
                  icon: Server,
            },
            {
                  title: 'CI/CD Pipelines',
                  description: 'Automate application testing, building and deployment workflows.',
                  icon: GitBranch,
            },
            {
                  title: 'Infrastructure Automation',
                  description: 'Reduce manual infrastructure work through repeatable automation.',
                  icon: Settings2,
            },
            {
                  title: 'Monitoring & Observability',
                  description: 'Gain visibility into application health, performance and operations.',
                  icon: Activity,
            },
            {
                  title: 'Performance Optimization',
                  description: 'Improve infrastructure efficiency, responsiveness and resource usage.',
                  icon: Gauge,
            },
            {
                  title: 'Backup & Recovery',
                  description: 'Establish backup strategies and recovery processes for important data.',
                  icon: Database,
            },
            {
                  title: 'Deployment Automation',
                  description: 'Make application releases more consistent and repeatable.',
                  icon: Rocket,
            },
      ]

      const outcomes = [
            {
                  title: 'Reliable deployments',
                  description: 'Reduce deployment errors through structured and repeatable release processes.',
                  icon: ShieldCheck,
            },
            {
                  title: 'Faster delivery',
                  description: 'Automate routine development and deployment tasks to shorten release cycles.',
                  icon: Rocket,
            },
            {
                  title: 'Reduced operational risk',
                  description: 'Improve infrastructure visibility, backups and operational preparedness.',
                  icon: LockKeyhole,
            },
            {
                  title: 'Infrastructure control',
                  description: 'Build a clearer, more manageable foundation for your applications.',
                  icon: HardDrive,
            },
      ]

      const pipeline = [
            { label: 'Code', description: 'Source changes', icon: Terminal },
            { label: 'Build', description: 'Build & test', icon: Boxes },
            { label: 'Deploy', description: 'Release', icon: Rocket },
            { label: 'Monitor', description: 'Observe', icon: Activity },
      ]

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
      ]

      usePageSeo({
            title: 'Cloud & DevOps  — ' + CONSTANTS.APP_NAME,
            description:
                  'Cloud infrastructure, server management, CI/CD pipelines, deployment automation, monitoring and DevOps solutions for reliable digital operations.',
            path: '/services/cloud-devops',
            breadcrumbs: breadcrumbs.map((breadcrumb) => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href,
            })),
      })
</script>

<template>
      <div class="pb-24">
            <PageHero eyebrow="Services" title="Cloud & DevOps" :breadcrumbs="breadcrumbs"
              description="Reliable infrastructure and streamlined delivery processes that keep your applications secure, scalable and easier to operate." />

            <BaseContainer class="mt-10 space-y-20 md:mt-16 md:space-y-28">

                  <!-- Introduction and infrastructure showcase -->
                  <section class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                        <!-- Introduction -->
                        <div>
                              <div
                                class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    <span class="h-px w-8 bg-primary" />
                                    Infrastructure & delivery
                              </div>

                              <h2
                                class="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                                    Great software needs
                                    <span class="text-primary">a reliable foundation.</span>
                              </h2>

                              <p class="mt-6 text-base leading-8 text-muted">
                                    Applications depend on more than good code. They need
                                    infrastructure that is properly configured, secure,
                                    maintainable and capable of supporting changing demands.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    Softview Ghana helps businesses establish and manage
                                    dependable digital infrastructure. From cloud migration
                                    and server administration to automated deployment
                                    pipelines and monitoring, we make application delivery
                                    and infrastructure operations more predictable.
                              </p>

                              <div class="mt-8 flex flex-wrap gap-3">
                                    <NuxtLink to="/contact"
                                      class="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                          Discuss Your Infrastructure
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
                                          Structured deployments
                                    </div>
                                    <div class="flex items-center gap-2 text-xs text-muted">
                                          <Check class="size-4 text-primary" />
                                          Scalable infrastructure
                                    </div>
                              </div>
                        </div>

                        <!-- Infrastructure visual -->
                        <div class="relative min-w-0">
                              <div
                                class="pointer-events-none absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />

                              <div
                                class="relative overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-xl sm:p-7">

                                    <!-- Header -->
                                    <div class="flex items-center justify-between border-b border-border pb-5">
                                          <div>
                                                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                                                      Infrastructure
                                                </p>
                                                <p class="mt-1 text-sm font-semibold text-foreground">
                                                      Application delivery lifecycle
                                                </p>
                                          </div>

                                          <div
                                            class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <Cloud class="size-5" />
                                          </div>
                                    </div>

                                    <!-- Deployment pipeline -->
                                    <div class="py-7">
                                          <p class="mb-5 text-xs font-semibold text-muted">
                                                From development to production
                                          </p>

                                          <div class="grid grid-cols-4 gap-2 sm:gap-3">
                                                <template v-for="(step, index) in pipeline" :key="step.label">
                                                      <div
                                                        class="relative flex min-w-0 flex-col items-center text-center">
                                                            <div
                                                              class="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary sm:size-14">
                                                                  <component :is="step.icon" class="size-5 sm:size-6" />
                                                            </div>

                                                            <p class="mt-3 text-xs font-semibold text-foreground">
                                                                  {{ step.label }}
                                                            </p>
                                                            <p class="mt-1 text-[10px] text-muted">
                                                                  {{ step.description }}
                                                            </p>
                                                      </div>
                                                </template>
                                          </div>

                                          <div class="my-7 flex items-center gap-2">
                                                <div class="h-px flex-1 bg-border" />
                                                <RefreshCw class="size-4 text-primary" />
                                                <div class="h-px flex-1 bg-border" />
                                          </div>

                                          <!-- Infrastructure layers -->
                                          <div class="space-y-3">
                                                <div
                                                  class="flex items-center gap-3 rounded-xl border border-border bg-background/70 p-3.5">
                                                      <div
                                                        class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                            <Server class="size-4" />
                                                      </div>
                                                      <div class="min-w-0 flex-1">
                                                            <p class="text-xs font-semibold text-foreground">
                                                                  Application infrastructure
                                                            </p>
                                                            <p class="mt-1 text-[11px] text-muted">
                                                                  Servers · Cloud environments · Containers
                                                            </p>
                                                      </div>
                                                      <Check class="size-4 shrink-0 text-primary" />
                                                </div>

                                                <div
                                                  class="flex items-center gap-3 rounded-xl border border-border bg-background/70 p-3.5">
                                                      <div
                                                        class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                            <Database class="size-4" />
                                                      </div>
                                                      <div class="min-w-0 flex-1">
                                                            <p class="text-xs font-semibold text-foreground">
                                                                  Data & recovery
                                                            </p>
                                                            <p class="mt-1 text-[11px] text-muted">
                                                                  Databases · Backups · Recovery
                                                            </p>
                                                      </div>
                                                      <Check class="size-4 shrink-0 text-primary" />
                                                </div>

                                                <div
                                                  class="flex items-center gap-3 rounded-xl border border-border bg-background/70 p-3.5">
                                                      <div
                                                        class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                            <Activity class="size-4" />
                                                      </div>
                                                      <div class="min-w-0 flex-1">
                                                            <p class="text-xs font-semibold text-foreground">
                                                                  Monitoring & security
                                                            </p>
                                                            <p class="mt-1 text-[11px] text-muted">
                                                                  Observability · Access · Protection
                                                            </p>
                                                      </div>
                                                      <Check class="size-4 shrink-0 text-primary" />
                                                </div>
                                          </div>
                                    </div>

                                    <!-- Footer -->
                                    <div class="flex items-center justify-between gap-3 border-t border-border pt-5">
                                          <span class="text-[11px] text-muted">
                                                Infrastructure designed around your needs
                                          </span>
                                          <span class="flex items-center gap-1.5 text-[11px] font-medium text-primary">
                                                <ShieldCheck class="size-3.5" />
                                                Reliability focused
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <!-- Services -->
                  <section>
                        <div class="max-w-2xl">
                              <div
                                class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    <span class="h-px w-8 bg-primary" />
                                    What we offer
                              </div>

                              <h2 class="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Infrastructure and DevOps services.
                              </h2>

                              <p class="mt-4 text-base leading-7 text-muted">
                                    Practical infrastructure services that help businesses
                                    deploy applications, manage systems and maintain
                                    dependable digital environments.
                              </p>
                        </div>

                        <div class="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="(item, index) in services" :key="item.title"
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
                                          The business impact
                                    </div>

                                    <h2 class="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                          Infrastructure that works
                                          <span class="text-primary">for your business.</span>
                                    </h2>

                                    <p class="mt-4 text-base leading-7 text-muted">
                                          A well-managed infrastructure environment makes it
                                          easier to deliver updates, protect business data and
                                          maintain the systems your organization depends on.
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
                                    <Cloud class="size-6" />
                              </div>

                              <p class="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Build on a stronger foundation
                              </p>

                              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                    Ready to improve your infrastructure?
                              </h2>

                              <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                                    Whether you're deploying a new application, improving
                                    existing infrastructure or automating your delivery
                                    process, let's discuss the right approach for your business.
                              </p>

                              <NuxtLink to="/contact"
                                class="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                    Discuss Your Infrastructure
                                    <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
                              </NuxtLink>

                              <p class="mt-5 text-xs text-muted">
                                    Let's make your technology easier to operate and maintain.
                              </p>
                        </div>
                  </section>

            </BaseContainer>
      </div>
</template>
