<script setup lang="ts">
      import {
            Blocks,
            Globe,
            Smartphone,
            Cloud,
            Network,
            PenTool,
      } from '@lucide/vue'

      const services = [
            {
                  title: 'Custom Software Development',
                  description:
                        'Tailored software solutions built around your unique business processes.',
                  icon: Blocks,
                  href: '/services/custom-software-development',
                  features: [
                        'ERP',
                        'CRM',
                        'Automation',
                        'Customer Portals',
                        'Management Systems',
                  ],
            },

            {
                  title: 'Web Application Development',
                  description:
                        'Responsive, scalable, and secure web applications built for performance.',
                  icon: Globe,
                  href: '/services/web-development',
                  features: [
                        'Business Websites',
                        'SaaS',
                        'Dashboards',
                        'Booking',
                        'Portals',
                  ],
            },

            {
                  title: 'Mobile Application Development',
                  description:
                        'Cross-platform mobile apps designed for Android and iOS.',
                  icon: Smartphone,
                  href: '/services/mobile-development',
                  features: [
                        'Android',
                        'iOS',
                        'Offline',
                        'Enterprise',
                        'API',
                  ],
            },

            {
                  title: 'Cloud & DevOps',
                  description:
                        'Reliable infrastructure that keeps your applications secure and scalable.',
                  icon: Cloud,
                  href: '/services/cloud-devops',
                  features: [
                        'Cloud',
                        'CI/CD',
                        'Monitoring',
                        'Servers',
                        'Optimization',
                  ],
            },

            {
                  title: 'IT Infrastructure',
                  description:
                        'Networking solutions that keep your business connected.',
                  icon: Network,
                  href: '/services/infrastructure-networking',
                  features: [
                        'Networking',
                        'Wi-Fi',
                        'Firewalls',
                        'VPN',
                        'Servers',
                  ],
            },

            {
                  title: 'UI / UX Design',
                  description:
                        'Beautiful digital experiences focused on usability.',
                  icon: PenTool,
                  href: '/services/ui-ux-design',
                  features: [
                        'Research',
                        'Wireframes',
                        'Interfaces',
                        'Prototype',
                        'Design Systems',
                  ],
            },
      ]
</script>

<template>
      <section class="py-28">

            <div class="mx-auto max-w-7xl px-6">

                  <div class="mx-auto max-w-3xl text-center">

                        <span
                          class="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                              Our Services
                        </span>

                        <h2 class="mt-6 text-5xl font-bold tracking-tight text-white">
                              Technology Solutions Built Around Your Business
                        </h2>

                        <p class="mt-6 text-lg leading-8 text-white/60">
                              From custom software and cloud infrastructure to mobile applications
                              and networking, we build technology that helps organizations operate
                              more efficiently and grow with confidence.
                        </p>

                  </div>

                  <div class="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <ServiceCard v-for="service in services" :key="service.title" v-bind="service" />
                  </div>

            </div>

      </section>
</template>