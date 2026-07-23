<script setup lang="ts">
      import {
            CheckCircle2,
            Database,
            Rocket,
            // CreditCard,
            ShieldCheck,
      } from '@lucide/vue'
      import type { Component } from 'vue'

      interface Activity {
            id: number
            title: string
            description: string
            time: string
            icon: Component
      }

      withDefaults(
            defineProps<{
                  title?: string
                  activities?: Activity[]
            }>(),
            {
                  title: 'Recent Activity',
                  activities: () => [
                        {
                              id: 1,
                              title: 'Deployment Successful',
                              description: 'Production environment updated.',
                              time: '2 mins ago',
                              icon: Rocket,
                        },
                        {
                              id: 2,
                              title: 'Database Backup',
                              description: 'Nightly backup completed.',
                              time: '15 mins ago',
                              icon: Database,
                        },
                        // {
                        //       id: 3,
                        //       title: 'Payment Received',
                        //       description: 'Invoice #1024 processed.',
                        //       time: '38 mins ago',
                        //       icon: CreditCard,
                        // },
                        {
                              id: 4,
                              title: 'Security Scan',
                              description: 'No vulnerabilities detected.',
                              time: '1 hour ago',
                              icon: ShieldCheck,
                        },
                        {
                              id: 5,
                              title: 'System Health',
                              description: 'All services operational.',
                              time: 'Just now',
                              icon: CheckCircle2,
                        },
                  ],
            }
      )
</script>

<template>
      <div class="activity-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-2">
            <div class="mb-6 flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-white">
                        {{ title }}
                  </h3>

                  <span class="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                        Live
                  </span>
            </div>

            <div class="space-y-4">
                  <div v-for="(activity, index) in activities" :key="activity.id"
                    class="group flex items-start gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                    :style="{
                        animationDelay: `${index * 120}ms`,
                  }">
                        <div
                          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                              <component :is="activity.icon" class="size-5" />
                        </div>

                        <div class="min-w-0 flex-1">
                              <div class="flex items-center justify-between gap-3">
                                    <h4 class="truncate font-medium text-white">
                                          {{ activity.title }}
                                    </h4>

                                    <span class="text-xs text-white/40">
                                          {{ activity.time }}
                                    </span>
                              </div>

                              <p class="mt-1 text-sm text-white/55">
                                    {{ activity.description }}
                              </p>
                        </div>
                  </div>
            </div>
      </div>
</template>