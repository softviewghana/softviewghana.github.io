<script setup lang="ts">
      import {
            BriefcaseBusiness,
            Expand,
            Cpu,
            Handshake,
      } from '@lucide/vue'

      const values = [

            {
                  title: 'Business-First Approach',
                  icon: BriefcaseBusiness,
                  description:
                        'Every solution starts by understanding your business goals before writing a single line of code.',
            },

            {
                  title: 'Built to Scale',
                  icon: Expand,
                  description:
                        'Our systems are designed to grow alongside your business, ensuring long-term flexibility and performance.',
            },

            {
                  title: 'Modern Technologies',
                  icon: Cpu,
                  description:
                        'We use proven technologies including Laravel, Vue.js, Nuxt, Flutter, Docker, Cloudflare, Linux, and modern cloud platforms.',
            },

            {
                  title: 'Long-Term Partnership',
                  icon: Handshake,
                  description:
                        'Our relationship doesn’t end at deployment. We continue to provide maintenance, updates, and technical support.',
            },

      ]
</script>

<template>

      <section class="py-28">

            <div class="mx-auto max-w-7xl px-6">

                  <div class="mx-auto max-w-3xl text-center">

                        <span
                          class="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                              Why Choose Us
                        </span>

                        <h2 class="mt-6 text-5xl font-bold tracking-tight text-white">
                              Technology Built Around Your Success
                        </h2>

                        <p class="mt-6 text-lg leading-8 text-white/60">
                              We believe successful software starts with understanding your business,
                              choosing the right technologies, and building relationships that last
                              beyond launch.
                        </p>

                  </div>

                  <div class="relative mt-24">

                        <!-- Center -->

                        <div
                          class="absolute left-1/2 top-1/2 hidden h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-primary/10 backdrop-blur-xl xl:flex">

                              <div class="text-center">

                                    <h3 class="text-2xl font-bold text-white">
                                          Reliable
                                    </h3>

                                    <p class="mt-2 text-white/60">
                                          Digital Solutions
                                    </p>

                              </div>

                        </div>

                        <div class="grid gap-8 xl:grid-cols-2">

                              <ValueCard v-for="value in values" :key="value.title" v-bind="value" />

                        </div>

                  </div>

            </div>

      </section>

</template>