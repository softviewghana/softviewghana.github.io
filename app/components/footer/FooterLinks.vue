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
                  title: 'Email',
                  icon: Mail,
                  items: [
                        {
                              label: '',
                              value: 'softviewghana@gmail.com',
                              href: 'mailto:softviewghana@gmail.com',
                        },
                        {
                              label: '',
                              value: 'info@softviewghana.com',
                              href: 'mailto:info@softviewghana.com',
                        },
                  ],
            },
            {
                  title: 'Call Us',
                  icon: Phone,
                  items: [
                        {
                              label: '',
                              value: '+233 543 093 942',
                              href: 'tel:+233543093942',
                        },
                        {
                              label: '',
                              value: '+233 549 289 243',
                              href: 'tel:+233549289243',
                        },
                  ],
            },
            {
                  title: 'Location',
                  icon: MapPin,
                  items: [
                        {
                              label: '',
                              value: 'Accra, Ghana',
                              href: null
                        },
                  ],
            },
      ]
</script>

<template>
      <section class="mx-auto max-w-7xl px-6 py-3">

            <div class="grid grid-cols-1 gap-12 border-b border-white/10 pb-5 sm:grid-cols-2 xl:grid-cols-4">

                  <!-- Link Groups -->

                  <div v-for="section in sections" :key="section.title">
                        <div class="mb-6 flex items-center gap-3">

                              <!-- <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <component :is="section.icon" class="size-5" />
                              </div> -->

                              <h3 class="font-semibold text-white/85">
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

                              <h3 class="font-semibold text-white/85">
                                    Contact
                              </h3>

                        </div>

                        <div class="space-y-3">

                              <div v-for="group in contact" :key="group.title" class="flex gap-4">

                                    <div
                                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary">
                                          <component :is="group.icon" class="size-5" />
                                    </div>

                                    <div class="min-w-0 flex-1">

                                          <p class="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                                                {{ group.title }}
                                          </p>

                                          <div>

                                                <div v-for="item in group.items" :key="item.label">

                                                      <p class="text-xs text-white/40">
                                                            {{ item.label }}
                                                      </p>

                                                      <NuxtLink v-if="item.href && item.href" :href="item.href"
                                                        class="text-sm text-white/70 transition-colors hover:text-primary">
                                                            {{ item.value }}
                                                      </NuxtLink>

                                                      <p v-else class="text-sm text-white/70">
                                                            {{ item.value }}
                                                      </p>

                                                </div>

                                          </div>

                                    </div>

                              </div>

                        </div>

                  </div>

            </div>

      </section>
</template>