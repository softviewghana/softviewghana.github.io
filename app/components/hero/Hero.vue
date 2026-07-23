<script setup lang="ts">
      import { computed, ref } from 'vue'

      import {
            Activity,
            Cloud,
            Database,
            FolderKanban,
            Server,
            ShieldCheck,
            Smartphone,
            Workflow,
      } from '@lucide/vue'

      import ActivityFeed from './ActivityFeed.vue'
      import ChartCard from './ChartCard.vue'
      import FloatingTechCard from './FloatingTechCard.vue'
      import MetricCard from './MetricCard.vue'

      const dashboard = useTemplateRef('dashboard')

      const rotateX = ref(3)
      const rotateY = ref(-10)

      function handleMouseMove(event: MouseEvent) {
            if (!dashboard.value) return

            const rect = dashboard.value.getBoundingClientRect()

            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            rotateY.value = ((x - centerX) / centerX) * 8
            rotateX.value = -((y - centerY) / centerY) * 8
      }

      function resetTilt() {
            rotateX.value = 6
            rotateY.value = -10
      }

      const transform = computed(() => ({
            transform: `
      perspective(1800px)
      rotateX(${rotateX.value}deg)
      rotateY(${rotateY.value}deg)
  `,
      }))
</script>

<template>

      <section class="relative flex items-center justify-center" @mousemove="handleMouseMove" @mouseleave="resetTilt">

            <div class="relative">

                  <!-- Floating Cards -->

                  <div class="absolute -left-24 top-8 hidden xl:block">
                        <FloatingTechCard title="Cloud" subtitle="Infrastructure" :icon="Cloud" color="text-sky-400" />
                  </div>

                  <div class="absolute -right-24 top-20 hidden xl:block">
                        <FloatingTechCard title="REST APIs" subtitle="Secure" :icon="Workflow" color="text-primary"
                          :duration="8" />
                  </div>

                  <div class="absolute -bottom-10 left-0 hidden xl:block">
                        <FloatingTechCard title="Mobile Apps" subtitle="Android • iOS" :icon="Smartphone"
                          color="text-violet-400" :duration="9" />
                  </div>

                  <div class="absolute -bottom-8 right-0 hidden xl:block">
                        <FloatingTechCard title="Cyber Security" subtitle="Protected" :icon="ShieldCheck"
                          color="text-emerald-400" :duration="10" />
                  </div>

                  <!-- Dashboard -->

                  <div ref="dashboard" :style="transform"
                    class="transition-transform duration-150 will-change-transform transform-3d ">

                        <!-- <HeroBackground /> -->
                        <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                              <div class="glass-reflection" />
                        </div>

                        <div
                          class="overflow-hidden rounded-3xl border border-border bg-background/60 shadow-[0_50px_120px_rgba(0,0,0,.45)] backdrop-blur-3xl">
                              <!-- Header -->

                              <div class="flex items-center justify-between border-b border-border px-6 py-5">

                                    <div class="flex items-center gap-5">

                                          <div class="flex gap-2">

                                                <div class="h-3 w-3 rounded-full bg-red-400/80" />

                                                <div class="h-3 w-3 rounded-full bg-amber-400/80" />

                                                <div class="h-3 w-3 rounded-full bg-emerald-400/80" />

                                          </div>

                                          <div>

                                                <p class="text-xs uppercase tracking-[0.18em] text-white/40">
                                                      Enterprise Dashboard
                                                </p>

                                                <h2 class="mt-1 text-xl font-semibold text-white">
                                                      Technology Overview
                                                </h2>

                                          </div>

                                    </div>

                                    <div
                                      class="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                                          ● Live
                                    </div>

                              </div>

                              <!-- Content -->

                              <div class="relative z-10 space-y-6 p-6 dashboard-content"
                                style="transform: translateZ(20px);">

                                    <!-- Metrics -->

                                    <div class="grid gap-4 sm:grid-cols-3">
                                          <MetricCard title="Projects" value="24" subtitle="Currently Active"
                                            :icon="FolderKanban" class=""/>

                                          <MetricCard title="API Requests" value="1.2M" subtitle="This Month"
                                            :icon="Activity" class="hidden sm:block"/>

                                          <MetricCard title="Uptime" value="99.98%" subtitle="Infrastructure"
                                            :icon="Database" class="hidden sm:block"/>
                                    </div>

                                    <!-- Main -->

                                    <div class="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
                                          <ChartCard />

                                          <ActivityFeed />
                                    </div>

                              </div>
                        </div>
                  </div>

                  <!-- Bottom Floating -->

                  <div class="absolute left-24 -top-10 hidden xl:block">
                        <FloatingTechCard title="Linux Servers" subtitle="Optimized" :icon="Server"
                          color="text-amber-400" :duration="7" />
                  </div>

            </div>
      </section>
</template>