<script lang="ts" setup>
      import {
            ArrowRight,
            Blocks,
            Cloud,
            Globe,
            MonitorSmartphone,
            Network,
            PenTool,
            ShieldCheck,
            Sparkles,
      } from '@lucide/vue';

      usePageSeo({
            title: 'Technology Services | Software Development Company in Ghana',
            description: "Explore Softview Ghana's professional software development, cloud, networking, mobile app, web development, and UI/UX design services.",
            path: '/services',
      });

      const serviceCards = [
            {
                  title: 'Custom Software Development',
                  description: 'Every business has unique processes that off-the-shelf software often cannot accommodate.',
                  icon: Blocks,
                  details: 'We build custom software tailored specifically to your organization, enabling you to automate workflows, improve productivity, and gain better visibility into your operations.',
                  list: ['ERP Systems', 'CRM Systems', 'HR Management', 'Inventory Management', 'School Management', 'Booking Systems', 'Business Automation', 'Reporting Platforms'],
            },
            {
                  title: 'Web Application Development',
                  description: 'We develop modern, responsive web applications that provide outstanding user experiences across every device.',
                  icon: Globe,
                  details: 'Our web solutions are designed for performance, usability, and growth.',
                  list: ['Business Websites', 'Customer Portals', 'Membership Platforms', 'SaaS Products', 'Internal Dashboards', 'API Development'],
            },
            {
                  title: 'Mobile Application Development',
                  description: 'Reach customers and employees wherever they are with high-performance mobile applications.',
                  icon: MonitorSmartphone,
                  details: 'We build engaging mobile experiences that help teams and customers stay connected.',
                  list: ['Android Applications', 'iOS Applications', 'Cross-platform Apps', 'Enterprise Mobile Solutions', 'Customer Apps'],
            },
            {
                  title: 'Cloud & DevOps',
                  description: 'Reliable cloud infrastructure is the foundation of modern digital businesses.',
                  icon: Cloud,
                  details: 'Our cloud services help organizations improve availability, scalability, and security.',
                  list: ['Cloud Migration', 'Server Deployment', 'Infrastructure Automation', 'Continuous Integration', 'Continuous Delivery', 'Monitoring', 'Backup Solutions'],
            },
            {
                  title: 'IT Infrastructure & Networking',
                  description: 'Reliable connectivity keeps your business productive.',
                  icon: Network,
                  details: 'We design and deploy networking infrastructure that supports your daily operations.',
                  list: ['Structured Cabling', 'Office Networking', 'Wireless Networks', 'Firewall Configuration', 'VPN Setup', 'Server Installation', 'Network Monitoring'],
            },
            {
                  title: 'UI/UX Design',
                  description: 'Great products begin with exceptional user experiences.',
                  icon: PenTool,
                  details: 'Our designers focus on usability, accessibility, and business outcomes.',
                  list: ['User Research', 'UX Audits', 'Wireframes', 'High-Fidelity Designs', 'Interactive Prototypes', 'Design Systems'],
            },
      ];

      const whyWorkWithUs = [
            'Experienced Engineers',
            'Business-Focused Solutions',
            'Transparent Communication',
            'Modern Technology Stack',
            'Reliable Support',
            'Long-Term Partnership',
      ];
</script>

<template>
      <Section>
            <div class="mx-auto max-w-4xl py-8 sm:pt-14 lg:pt-24 text-center">
                  <div
                    class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <Sparkles class="size-4" />
                        Our Services
                  </div>
                  <h1 v-fade-in class="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Technology Solutions Built Around Your Business
                  </h1>
                  <p v-fade-in class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
                        Every business is different. That's why we don't believe in one-size-fits-all technology.
                  </p>
                  <p v-fade-in class="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted">
                        We work closely with organizations to design, develop, deploy, and maintain digital solutions
                        that align with their goals, improve operational efficiency, and create measurable business
                        value.
                  </p>
            </div>
      </Section>

      <div class="mx-auto w-full overflow-hidden border-y border-border/70 bg-background/80 py-10 md:py-16">
            <Section>
                  <div class="grid gap-8 lg:grid-cols-2">
                        <div v-for="service in serviceCards" :key="service.title"
                          class="group rounded-3xl border border-white/10 bg-white/4 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-primary/30">
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

                              <p class="mt-4 text-base leading-7 text-foreground/80">
                                    {{ service.details }}
                              </p>

                              <div class="mt-6">
                                    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">
                                          {{ service.title.includes('UI/UX') ? 'Services' : (service.title.includes('Custom') ? 'Solutions' : service.title.includes('Mobile') ? 'We build' : 'Services') }}
                                    </p>
                                    <ul class="space-y-2">
                                          <li v-for="item in service.list" :key="item"
                                            class="flex items-start gap-3 text-base text-foreground/80">
                                                <span
                                                  class="mt-1 flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                      <ArrowRight class="size-3" />
                                                </span>
                                                <span>{{ item }}</span>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </Section>
      </div>

      <Section class="py-16">
            <div class="mx-auto max-w-4xl text-center">
                  <h2 class="text-3xl md:text-4xl font-bold text-foreground">
                        Why Work With Us
                  </h2>
            </div>

            <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  <div v-for="item in whyWorkWithUs" :key="item"
                    class="rounded-2xl border border-border bg-white/3 p-6 text-center transition duration-300 hover:border-primary/30">
                        <div
                          class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <ShieldCheck class="size-6" />
                        </div>
                        <p class="mt-4 text-lg font-medium text-foreground">
                              {{ item }}
                        </p>
                  </div>
            </div>
      </Section>

      <Section class="pb-20">
            <div
              class="rounded-4xl border border-border bg-linear-to-b from-primary/8 to-primary-hover/3 px-6 py-16 text-center shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-10">
                  <h2 class="text-3xl md:text-4xl font-bold text-foreground">
                        Ready to transform your business with technology?
                  </h2>
                  <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
                        Let's discuss your next project.
                  </p>
                  <NuxtLink :to="{ name: 'contact' }"
                    class="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                        Start Your Project
                        <ArrowRight class="size-5" />
                  </NuxtLink>
            </div>
      </Section>
</template>

<style scoped></style>