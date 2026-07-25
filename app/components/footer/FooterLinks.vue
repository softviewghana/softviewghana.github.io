<script setup lang="ts">
      import {
            BriefcaseBusiness,
            Building2,
            BookOpen,
            Mail,
            Phone,
            MapPin,
            ArrowUpRight,
      } from '@lucide/vue'

      const sections = [
            {
                  title: 'Services',
                  icon: BriefcaseBusiness,
                  links: [
                        {
                              label: 'Custom Software',
                              href: '/services/custom-software-development',
                        },
                        {
                              label: 'Web Applications',
                              href: '/services/web-application-development',
                        },
                        {
                              label: 'Mobile Applications',
                              href: '/services/mobile-application-development',
                        },
                        {
                              label: 'Cloud & DevOps',
                              href: '/services/cloud-devops',
                        },
                        {
                              label: 'IT Infrastructure',
                              href: '/services/it-infrastructure-networking',
                        },
                        {
                              label: 'UI / UX Design',
                              href: '/services/ui-ux-design',
                        },
                  ],
            },

            {
                  title: 'Company',
                  icon: Building2,
                  links: [
                        { label: 'About', href: '/about' },
                        { label: 'Industries', href: '/industries' },
                        { label: 'Contact', href: '/contact' },
                        { label: 'Privacy Policy', href: '/privacy-policy' },
                        { label: 'Terms of Service', href: '/terms' },
                  ],
            },

            {
                  title: 'Resources',
                  icon: BookOpen,
                  links: [
                        {
                              label: 'Blog',
                              href: '/blog',
                        },
                        {
                              label: 'Case Studies',
                              href: '/case-studies',
                        },
                        {
                              label: 'FAQs',
                              href: '/faqs',
                        },
                        {
                              label: 'Documentation',
                              href: '/documentation',
                        },
                  ],
            },
      ]

      const contact = [
            {
                  icon: Mail,
                  title: 'Email',
                  value: 'hello@softviewghana.com',
                  href: 'mailto:hello@softviewghana.com',
            },
            {
                  icon: Phone,
                  title: 'Phone',
                  value: '+233 XX XXX XXXX',
                  href: 'tel:+233000000000',
            },
            {
                  icon: MapPin,
                  title: 'Location',
                  value: 'Accra, Ghana',
                  href: '#',
            },
      ]
</script>

<template>
      <section class="mx-auto max-w-7xl px-6 py-20">

            <div class="grid gap-12 border-b border-white/10 pb-20 md:grid-cols-2 xl:grid-cols-4">

                  <!-- Link Groups -->

                  <div v-for="section in sections" :key="section.title">
                        <div class="mb-6 flex items-center gap-3">

                              <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <component :is="section.icon" class="size-5" />
                              </div>

                              <h3 class="font-semibold text-white">
                                    {{ section.title }}
                              </h3>

                        </div>

                        <nav class="space-y-3">

                              <NuxtLink v-for="link in section.links" :key="link.label" :to="link.href"
                                class="group flex items-center justify-between text-white/60 transition-colors hover:text-white">
                                    <span>{{ link.label }}</span>

                                    <ArrowUpRight
                                      class="size-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                              </NuxtLink>

                        </nav>

                  </div>

                  <!-- Contact -->

                  <div>

                        <div class="mb-6 flex items-center gap-3">

                              <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Mail class="size-5" />
                              </div>

                              <h3 class="font-semibold text-white">
                                    Contact
                              </h3>

                        </div>

                        <div class="space-y-5">

                              <a v-for="item in contact" :key="item.title" :href="item.href"
                                class="group flex items-start gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/5">
                                    <div
                                      class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary">
                                          <component :is="item.icon" class="size-5" />
                                    </div>

                                    <div>

                                          <p class="text-xs uppercase tracking-[0.15em] text-white/40">
                                                {{ item.title }}
                                          </p>

                                          <p
                                            class="mt-1 text-sm text-white/70 transition-colors group-hover:text-white">
                                                {{ item.value }}
                                          </p>

                                    </div>

                              </a>

                        </div>

                  </div>

            </div>

      </section>
</template>