<script lang="ts" setup>
      import {
            ArrowRight,
            Blocks,
            Cloud,
            Globe,
            MonitorSmartphone,
            Network,
            PenTool,
      } from '@lucide/vue';

      usePageSeo({
            title: 'Software & Technology Services | Softview Ghana',
            description: 'Softview Ghana provides custom software development, web and mobile applications, cloud and DevOps, IT infrastructure, and UI/UX design.',
            path: '/services',
      });

      const serviceCards = [
            {
                  title: 'Custom Software Development',
                  href: '/services/custom-software-development',
                  icon: Blocks,
                  description: 'Tailored software solutions built around your unique business processes, workflows, and goals.',
                  list: ['ERP Systems', 'CRM Solutions', 'Business Automation', 'Customer Portals', 'Internal Management Systems', 'Workflow Management', 'Business Intelligence', 'API Integrations'],
            },
            {
                  title: 'Web Application Development',
                  href: '/services/web-application-development',
                  icon: Globe,
                  description: 'Responsive, scalable, and secure web applications built for performance and real-world use.',
                  list: ['Business Websites', 'Customer Portals', 'Booking Platforms', 'SaaS Platforms', 'Dashboards', 'Administrative Systems', 'Online Platforms', 'API-Driven Applications'],
            },
            {
                  title: 'Mobile Application Development',
                  href: '/services/mobile-application-development',
                  icon: MonitorSmartphone,
                  description: 'Cross-platform mobile applications designed for Android and iOS.',
                  list: ['Business Apps', 'Customer Apps', 'Internal Staff Apps', 'Offline-First Solutions', 'API Integrations', 'Mobile Dashboards', 'Push Notifications', 'Authentication'],
            },
            {
                  title: 'Cloud & DevOps',
                  href: '/services/cloud-devops',
                  icon: Cloud,
                  description: 'Reliable infrastructure that keeps your applications secure, scalable, and available.',
                  list: ['Cloud Migration', 'Server Management', 'CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring', 'Performance Optimization', 'Backups', 'Deployment Automation'],
            },
            {
                  title: 'IT Infrastructure & Networking',
                  href: '/services/it-infrastructure-networking',
                  icon: Network,
                  description: 'Modern networking and infrastructure solutions for businesses of different sizes.',
                  list: ['Office Networking', 'Wi-Fi Deployment', 'Firewall Configuration', 'Server Installation', 'Network Planning', 'Infrastructure Assessment', 'IT Consulting', 'System Administration'],
            },
            {
                  title: 'UI/UX Design',
                  href: '/services/ui-ux-design',
                  icon: PenTool,
                  description: 'Digital experiences designed around users, business goals, and real-world workflows.',
                  list: ['User Research', 'Wireframing', 'Interface Design', 'Design Systems', 'Product Prototyping', 'User Flows', 'Responsive Design', 'Usability Improvements'],
            },
      ];
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Our Services" title="Technology Built Around Your Business"
              description="We design and build software, digital products, and technology infrastructure that solve real business problems and create long-term value." />

            <BaseContainer class="mt-8 md:mt-12">
                  <section class="rounded-4xl border border-border bg-surface p-6 md:p-10">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">From Ideas to
                              Reliable Technology</p>
                        <h2 class="mt-4 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              From Ideas to Reliable Technology</h2>
                        <div class="mt-6 max-w-3xl space-y-4 text-base leading-8 text-muted md:text-lg">
                              <p>
                                    Every business operates differently. That's why we don't believe in
                                    one-size-fits-all technology.
                              </p>
                              <p>
                                    We take the time to understand your goals, processes, challenges, and users
                                    before designing a solution around them.
                              </p>
                              <p>
                                    Whether you need a custom business system, a customer-facing application, a
                                    mobile product, or reliable infrastructure, we bring the technical expertise and
                                    business thinking needed to take it from idea to reality.
                              </p>
                        </div>
                  </section>
            </BaseContainer>

            <div class="mx-auto mt-16 w-full overflow-hidden border-y border-border/70 bg-background/80 py-10 md:py-16">
                  <BaseContainer>
                        <div class="grid gap-8 lg:grid-cols-2">
                              <NuxtLink v-for="service in serviceCards" :key="service.title" :to="service.href"
                                class="group rounded-3xl border border-border bg-surface p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                                    <div class="flex items-center gap-4">
                                          <div
                                            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <component :is="service.icon" class="size-7" />
                                          </div>
                                          <h2 class="text-2xl font-semibold text-foreground">
                                                {{ service.title }}
                                          </h2>
                                    </div>

                                    <p class="mt-5 text-base leading-7 text-muted">
                                          {{ service.description }}
                                    </p>

                                    <ul class="mt-6 flex flex-wrap gap-2">
                                          <li v-for="item in service.list" :key="item"
                                            class="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80">
                                                {{ item }}
                                          </li>
                                    </ul>

                                    <span
                                      class="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                                          Learn about this service
                                          <ArrowRight
                                            class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                              </NuxtLink>
                        </div>
                  </BaseContainer>
            </div>

            <BaseContainer class="mt-16">
                  <section
                    class="rounded-4xl border border-border bg-linear-to-b from-primary/8 to-primary-hover/3 px-6 py-16 text-center shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-10">
                        <h2 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Have a
                              Technology Challenge?</h2>
                        <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
                              Tell us what you're trying to build, improve, or automate. We'll help you understand
                              the options and determine the right path forward.
                        </p>
                        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                              <NuxtLink to="/contact"
                                class="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                                    Start a Project
                                    <ArrowRight class="size-5" />
                              </NuxtLink>
                              <NuxtLink to="/contact"
                                class="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-6 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary/30">
                                    Contact Us
                              </NuxtLink>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>