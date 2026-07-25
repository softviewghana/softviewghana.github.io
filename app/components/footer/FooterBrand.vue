<script setup lang="ts">
      import {
            ArrowRight,
            Clock3,
            Layers3,
            Handshake,
      } from '@lucide/vue'

</script>

<template>
      <section class="mx-auto max-w-7xl px-6 pt-24">

            <div class="grid items-center gap-16 border-b border-white/10 pb-20 lg:grid-cols-[1.4fr_.8fr]">

                  <!-- Left -->

                  <div>

                        <span
                          class="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                              Software Engineering Company
                        </span>

                        <h2 class="mt-8 text-5xl font-black tracking-tight text-white lg:text-6xl">
                              Softview
                              <span class="text-primary">
                                    Ghana
                              </span>
                        </h2>

                        <p class="mt-8 max-w-2xl text-lg leading-8 text-white/65">
                              We build reliable software, scalable cloud infrastructure,
                              and modern digital experiences that help organizations
                              innovate, streamline operations, and grow with confidence.
                        </p>

                        <div class="mt-10">
                              <NuxtLink to="/contact"
                                class="inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.02]">
                                    Start Your Project

                                    <ArrowRight class="size-5" />
                              </NuxtLink>
                        </div>

                  </div>

                  <!-- Right -->

                  <div class="space-y-5">

                        <FooterStatusCard title="Response Time" value="< 24 Hours" description="Initial consultation"
                          :icon="Clock3" />

                        <FooterStatusCard title="End-to-End" value="Solutions" description="Strategy to deployment"
                          :icon="Layers3" />

                        <FooterStatusCard title="Long-Term" value="Partnership" description="Support & maintenance"
                          :icon="Handshake" />

                  </div>

            </div>

      </section>
</template>