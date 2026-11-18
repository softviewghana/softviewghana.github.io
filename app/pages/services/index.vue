<script lang="ts" setup>
      import {
            ArrowRight,
            Blocks,
            Cloud,
            Globe,
            MonitorSmartphone,
            Network,
            PenTool,
            Lightbulb,
            Search,
            Code2,
            CheckCircle2,
            Workflow,
            Layers3,
      } from '@lucide/vue';

      import CONSTANTS from '~/constants';

      usePageSeo({
            title: 'Software & Technology Services — ' + CONSTANTS.APP_NAME,
            description:
                  'Explore Softview Ghana services in custom software development, web and mobile applications, UI/UX design, cloud and DevOps, and IT infrastructure.',
            path: '/services',
      });

      const serviceCards = [
            {
                  number: '01',
                  title: 'Custom Software Development',
                  href: '/services/custom-software-development',
                  icon: Blocks,
                  description:
                        'Software designed around the way your business works. We build systems that simplify operations, connect processes, and support better decisions.',
                  highlights: [
                        'Business Management Systems',
                        'ERP & CRM Solutions',
                        'Workflow Automation',
                        'Business Portals',
                  ],
                  category: 'Business Solutions',
            },
            {
                  number: '02',
                  title: 'Web Application Development',
                  href: '/services/web-application-development',
                  icon: Globe,
                  description:
                        'Modern web applications that bring your services, customers, and business operations together through accessible browser-based experiences.',
                  highlights: [
                        'Business Websites',
                        'SaaS Platforms',
                        'Customer Portals',
                        'Dashboards & Platforms',
                  ],
                  category: 'Digital Products',
            },
            {
                  number: '03',
                  title: 'Mobile Application Development',
                  href: '/services/mobile-application-development',
                  icon: MonitorSmartphone,
                  description:
                        'Mobile experiences that put your services and workflows within reach, with applications designed for Android and iOS.',
                  highlights: [
                        'Customer Applications',
                        'Business & Staff Apps',
                        'Offline-First Solutions',
                        'API Integrations',
                  ],
                  category: 'Mobile Experiences',
            },
            {
                  number: '04',
                  title: 'Cloud & DevOps',
                  href: '/services/cloud-devops',
                  icon: Cloud,
                  description:
                        'Infrastructure and deployment solutions that help applications run efficiently, with practical approaches to hosting, automation, and maintenance.',
                  highlights: [
                        'Cloud Infrastructure',
                        'Server Management',
                        'CI/CD & Automation',
                        'Monitoring & Backups',
                  ],
                  category: 'Infrastructure',
            },
            {
                  number: '05',
                  title: 'IT Infrastructure & Networking',
                  href: '/services/it-infrastructure-networking',
                  icon: Network,
                  description:
                        'The foundations your organisation depends on. We help plan, deploy, and manage business networks, systems, and IT infrastructure.',
                  highlights: [
                        'Office Networking',
                        'Wi-Fi & Connectivity',
                        'Server Installation',
                        'IT Infrastructure Support',
                  ],
                  category: 'IT Operations',
            },
            {
                  number: '06',
                  title: 'UI/UX Design',
                  href: '/services/ui-ux-design',
                  icon: PenTool,
                  description:
                        'Thoughtful digital experiences built around people. We make products easier to understand, navigate, and use.',
                  highlights: [
                        'User Research',
                        'Interface Design',
                        'Wireframes & Prototypes',
                        'Design Systems',
                  ],
                  category: 'Product Design',
            },
      ];

      const approach = [
            {
                  number: '01',
                  icon: Search,
                  title: 'Understand the problem',
                  description:
                        'We learn about your organisation, goals, users, and existing challenges before recommending a solution.',
            },
            {
                  number: '02',
                  icon: Lightbulb,
                  title: 'Define the right approach',
                  description:
                        'We identify the requirements, explore possible solutions, and establish a practical direction for the project.',
            },
            {
                  number: '03',
                  icon: Code2,
                  title: 'Design & build',
                  description:
                        'We turn the agreed solution into a working product or infrastructure, with attention to usability and quality.',
            },
            {
                  number: '04',
                  icon: CheckCircle2,
                  title: 'Deliver & improve',
                  description:
                        'We prepare the solution for use and can continue supporting improvements as your needs evolve.',
            },
      ];

      const capabilities = [
            {
                  icon: Layers3,
                  title: 'Connected solutions',
                  description:
                        'We consider how software, applications, and infrastructure work together rather than treating every technology decision in isolation.',
            },
            {
                  icon: Workflow,
                  title: 'Practical problem-solving',
                  description:
                        'Our focus is on understanding the actual problem and choosing technology that serves a clear purpose.',
            },
            {
                  icon: Blocks,
                  title: 'Products of our own',
                  description:
                        'Alongside client projects, we develop our own digital products, bringing a product-building perspective to the work we do.',
            },
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="What We Do" title="Technology that moves your business forward."
              :breadcrumbs="breadcrumbs"
              description="From custom software and digital products to cloud infrastructure and IT systems, we help businesses turn technology challenges into practical solutions." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Introduction -->
                  <section class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    More than technology services
                              </p>

                              <h2
                                class="mt-4 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    We build technology around real business needs.
                              </h2>

                              <div class="mt-5 max-w-2xl space-y-4 text-base leading-8 text-muted">
                                    <p>
                                          Every organisation has different goals, processes, and challenges.
                                          The right technology should reflect that, not force your business
                                          into a one-size-fits-all approach.
                                    </p>

                                    <p>
                                          At Softview Ghana, we combine software development, product
                                          thinking, design, and infrastructure expertise to help
                                          organisations build, improve, and manage their technology.
                                    </p>

                                    <p>
                                          Whether you are starting with an idea, modernising an existing
                                          system, or improving your IT environment, we work towards a
                                          solution that makes practical sense.
                                    </p>
                              </div>

                              <NuxtLink to="/contact"
                                class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
                                    Tell us what you need
                                    <ArrowRight class="size-4" />
                              </NuxtLink>
                        </div>

                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Our areas of focus
                              </p>

                              <div class="mt-6 space-y-5">
                                    <div v-for="item in [
                                          { title: 'Software & Applications', detail: 'Systems, platforms, and digital products', icon: Blocks },
                                          { title: 'Design & Experiences', detail: 'Interfaces and user-centred product design', icon: PenTool },
                                          { title: 'Cloud & Infrastructure', detail: 'Hosting, networking, and IT environments', icon: Cloud },
                                    ]" :key="item.title" class="flex items-center gap-4">
                                          <div
                                            class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <component :is="item.icon" class="size-5" />
                                          </div>

                                          <div>
                                                <h3 class="font-semibold text-foreground">
                                                      {{ item.title }}
                                                </h3>
                                                <p class="mt-1 text-sm text-muted">
                                                      {{ item.detail }}
                                                </p>
                                          </div>
                                    </div>
                              </div>

                              <div class="mt-7 rounded-2xl border border-primary/15 bg-primary/5 p-4">
                                    <p class="text-sm leading-7 text-foreground/85">
                                          One technology partner for different stages of your digital
                                          journey.
                                    </p>
                              </div>
                        </div>
                  </section>
            </BaseContainer>

            <!-- Services catalogue -->
            <section class="mt-20 border-y border-border/70 bg-background/70 py-16 md:py-20">
                  <BaseContainer>
                        <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                              <div class="max-w-2xl">
                                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                          Our services
                                    </p>

                                    <h2
                                      class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                          What we can help you build.
                                    </h2>

                                    <p class="mt-4 leading-7 text-muted">
                                          Explore our areas of expertise and find the right starting point
                                          for your next project.
                                    </p>
                              </div>

                              <span class="text-sm text-muted">
                                    06 areas of expertise
                              </span>
                        </div>

                        <div class="mt-10 grid gap-5 lg:grid-cols-2">
                              <NuxtLink v-for="service in serviceCards" :key="service.number" :to="service.href"
                                class="group flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 md:p-8">
                                    <div class="flex items-start justify-between gap-4">
                                          <div
                                            class="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                                <component :is="service.icon" class="size-7" />
                                          </div>

                                          <span class="text-sm font-semibold tabular-nums text-muted/60">
                                                {{ service.number }}
                                          </span>
                                    </div>

                                    <div class="mt-6">
                                          <span class="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                                {{ service.category }}
                                          </span>

                                          <h3
                                            class="mt-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                                                {{ service.title }}
                                          </h3>

                                          <p class="mt-3 max-w-xl text-sm leading-7 text-muted md:text-base">
                                                {{ service.description }}
                                          </p>
                                    </div>

                                    <div class="mt-6 flex flex-wrap gap-2">
                                          <span v-for="item in service.highlights" :key="item"
                                            class="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80">
                                                {{ item }}
                                          </span>
                                    </div>

                                    <div class="flex items-center justify-between border-t border-border pt-5 mt-7">
                                          <span class="text-sm font-semibold text-primary">
                                                Explore service
                                          </span>

                                          <span
                                            class="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                                <ArrowRight
                                                  class="size-4 transition-transform group-hover:translate-x-0.5" />
                                          </span>
                                    </div>
                              </NuxtLink>
                        </div>
                  </BaseContainer>
            </section>

            <!-- How services fit together -->
            <BaseContainer class="mt-16 md:mt-20">
                  <section class="rounded-4xl border border-border bg-surface p-6 md:p-10">
                        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                              <div>
                                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                          An integrated approach
                                    </p>

                                    <h2
                                      class="mt-4 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                          Different capabilities. One bigger picture.
                                    </h2>

                                    <p class="mt-5 leading-8 text-muted">
                                          Technology projects rarely exist in isolation. A business
                                          application may need a thoughtful interface, reliable hosting,
                                          and a secure network environment to work effectively.
                                    </p>

                                    <p class="mt-4 leading-8 text-muted">
                                          Our capabilities allow us to consider these connected needs and
                                          approach projects with the bigger picture in mind.
                                    </p>
                              </div>

                              <div class="grid gap-3 sm:grid-cols-2">
                                    <div v-for="item in capabilities" :key="item.title"
                                      class="rounded-2xl border border-border bg-background p-5">
                                          <div
                                            class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <component :is="item.icon" class="size-5" />
                                          </div>

                                          <h3 class="mt-4 font-semibold text-foreground">
                                                {{ item.title }}
                                          </h3>

                                          <p class="mt-2 text-sm leading-6 text-muted">
                                                {{ item.description }}
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>
            </BaseContainer>

            <!-- Process -->
            <BaseContainer class="mt-16 md:mt-20">
                  <section>
                        <div class="mx-auto max-w-2xl text-center">
                              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    How we work
                              </p>

                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    From understanding to implementation.
                              </h2>

                              <p class="mt-4 leading-7 text-muted">
                                    Every project is different, but our approach starts with
                                    understanding the problem and finding the right way to solve it.
                              </p>
                        </div>

                        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="step in approach" :key="step.number"
                                class="rounded-3xl border border-border bg-surface p-6">
                                    <div class="flex items-center justify-between">
                                          <div
                                            class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <component :is="step.icon" class="size-5" />
                                          </div>

                                          <span class="text-sm font-semibold tabular-nums text-muted/60">
                                                {{ step.number }}
                                          </span>
                                    </div>

                                    <h3 class="mt-5 text-lg font-semibold text-foreground">
                                          {{ step.title }}
                                    </h3>

                                    <p class="mt-2 text-sm leading-7 text-muted">
                                          {{ step.description }}
                                    </p>
                              </article>
                        </div>
                  </section>
            </BaseContainer>

            <!-- CTA -->
            <BaseContainer class="mt-16 md:mt-20">
                  <section
                    class="relative overflow-hidden rounded-4xl border border-primary/20 bg-primary/5 px-6 py-14 text-center md:px-12 md:py-16">
                        <div
                          class="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />

                        <div class="relative mx-auto max-w-2xl">
                              <span
                                class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                    Have a project in mind?
                              </span>

                              <h2 class="mt-6 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Let's find the right technology solution for your business.
                              </h2>

                              <p class="mt-4 text-base leading-8 text-muted md:text-lg">
                                    Tell us about the challenge, idea, or opportunity you're exploring.
                                    We'll have a conversation about your needs and the best way forward.
                              </p>

                              <NuxtLink to="/contact"
                                class="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 font-medium text-white transition hover:-translate-y-0.5 hover:bg-primary-hover">
                                    Start a Conversation
                                    <ArrowRight class="size-5" />
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>
