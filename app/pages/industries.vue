<script lang="ts" setup>
      import {
            ArrowRight,
            Building2,
            BriefcaseBusiness,
            HeartPulse,
            Landmark,
            School,
            ShoppingBag,
            Sparkles,
            Users,
      } from '@lucide/vue';
      import constants from '~/constants';

      useSeoMeta({
            title: 'Industry Software Solutions | Softview Ghana',
            ogTitle: 'Industry Software Solutions | Softview Ghana',
            description: 'Discover how Softview Ghana helps organizations across education, healthcare, finance, retail, NGOs, and professional services embrace digital transformation.',
            ogDescription: 'Discover how Softview Ghana helps organizations across education, healthcare, finance, retail, NGOs, and professional services embrace digital transformation.',
            twitterCard: 'summary_large_image',
            ogImage: {
                  url: constants.APP_URL + '/icon-192.png',
                  type: 'image/png',
                  width: 192,
                  height: 192,
                  alt: 'softview ghana logo'
            },
            ogUrl: constants.APP_URL + '/industries',
            ogType: 'website',
      });

      useHead({
            link: [
                  { rel: 'canonical', href: constants.APP_URL + '/industries' }
            ]
      });

      const industries = [
            {
                  title: 'Education',
                  icon: School,
                  description: 'Technology that empowers schools, teachers, students, and administrators.',
                  solutions: ['School Management Systems', 'Student Information Systems', 'Online Admissions', 'Fee Management', 'Academic Reporting', 'Parent Communication'],
                  featured: 'Featured Product',
                  product: 'eSchool Ghana',
            },
            {
                  title: 'Healthcare',
                  icon: HeartPulse,
                  description: 'Digital solutions that improve patient care and operational efficiency.',
                  solutions: ['Clinic Management', 'Appointment Systems', 'Electronic Medical Records', 'Pharmacy Management', 'Billing Systems'],
            },
            {
                  title: 'Retail & Commerce',
                  icon: ShoppingBag,
                  description: 'Help retailers streamline operations and improve customer experiences.',
                  solutions: ['Inventory Management', 'POS Systems', 'E-commerce Platforms', 'Customer Loyalty Systems', 'Sales Analytics'],
            },
            {
                  title: 'Financial Services',
                  icon: Landmark,
                  description: 'Secure software solutions designed for financial institutions and service providers.',
                  solutions: ['Customer Portals', 'Reporting Systems', 'Workflow Automation', 'Internal Dashboards'],
            },
            {
                  title: 'NGOs & Non-Profit Organizations',
                  icon: Users,
                  description: 'Technology that helps organizations maximize impact.',
                  solutions: ['Donor Management', 'Grant Tracking', 'Volunteer Management', 'Monitoring & Evaluation Systems', 'Reporting Platforms'],
            },
            {
                  title: 'Professional Services',
                  icon: BriefcaseBusiness,
                  description: 'Helping firms improve collaboration, productivity, and client service.',
                  solutions: ['Client Portals', 'Project Management', 'Document Management', 'Appointment Systems', 'Workflow Automation'],
            },
      ];
</script>

<template>
      <Section>
            <div class="mx-auto max-w-4xl py-8 sm:pt-14 lg:pt-24 text-center">
                  <div
                    class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <Sparkles class="size-4" />
                        Industries
                  </div>
                  <h1 v-fade-in class="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Technology Built Around Your Industry
                  </h1>
                  <p v-fade-in class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
                        Every industry faces unique challenges.
                  </p>
                  <p v-fade-in class="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted">
                        Rather than offering generic software, we develop industry-focused digital solutions that
                        address operational needs, improve efficiency, and support sustainable growth.
                  </p>
            </div>
      </Section>

      <div class="mx-auto w-full overflow-hidden border-y border-border/70 bg-background/80 py-10 md:py-16">
            <Section>
                  <div class="grid gap-8 lg:grid-cols-2">
                        <article v-for="industry in industries" :key="industry.title"
                          class="rounded-3xl border border-white/10 bg-white/4 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                              <div class="flex items-center gap-4">
                                    <div
                                      class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                          <component :is="industry.icon" class="size-7" />
                                    </div>
                                    <h2 class="text-2xl font-semibold text-foreground">
                                          {{ industry.title }}
                                    </h2>
                              </div>

                              <p class="mt-5 text-base leading-7 text-muted">
                                    {{ industry.description }}
                              </p>

                              <div class="mt-6">
                                    <p v-if="industry.title === 'Education'"
                                      class="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">
                                          Solutions include:
                                    </p>
                                    <p v-else
                                      class="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary/80">
                                          Solutions
                                    </p>
                                    <ul class="space-y-2">
                                          <li v-for="item in industry.solutions" :key="item"
                                            class="flex items-start gap-3 text-base text-foreground/80">
                                                <span
                                                  class="mt-1 flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                      <ArrowRight class="size-3" />
                                                </span>
                                                <span>{{ item }}</span>
                                          </li>
                                    </ul>
                              </div>

                              <div v-if="industry.product"
                                class="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                                    <p class="text-sm font-semibold uppercase tracking-[0.14em] text-primary/80">
                                          {{ industry.featured }}
                                    </p>
                                    <p class="mt-2 text-xl font-semibold text-foreground">
                                          {{ industry.product }}
                                    </p>
                              </div>
                        </article>
                  </div>
            </Section>
      </div>

      <Section class="py-16">
            <div class="mx-auto max-w-4xl text-center">
                  <h2 class="text-3xl md:text-4xl font-bold text-foreground">
                        Why Industry Expertise Matters
                  </h2>
                  <p class="mt-6 text-lg leading-8 text-muted">
                        Understanding an industry's processes enables us to build software that fits naturally into
                        existing operations while supporting future growth.
                  </p>
                  <p class="mt-4 text-lg leading-8 text-muted">
                        We combine technical excellence with business understanding to deliver solutions that create
                        measurable value.
                  </p>
            </div>
      </Section>

      <Section class="pb-20">
            <div
              class="rounded-4xl border border-border bg-linear-to-b from-primary/8 to-primary-hover/3 px-6 py-16 text-center shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-10">
                  <h2 class="text-3xl md:text-4xl font-bold text-foreground">
                        Let's Build the Future Together
                  </h2>
                  <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
                        Whether you're modernizing existing operations or launching a new digital product, Softview
                        Ghana is ready to help.
                  </p>
                  <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <NuxtLink :to="{ name: 'contact' }"
                          class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                              Start Your Project
                              <ArrowRight class="size-5" />
                        </NuxtLink>
                        <NuxtLink :to="{ name: 'contact' }"
                          class="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white/4 px-6 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary/30">
                              Contact Us
                        </NuxtLink>
                  </div>
            </div>
      </Section>
</template>

<style scoped></style>