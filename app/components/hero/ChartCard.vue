<script setup lang="ts">
      import { computed, onMounted, ref } from 'vue'
      import { TrendingUp } from '@lucide/vue'

      interface ChartData {
            label: string
            value: number
      }

      interface Props {
            title?: string
            subtitle?: string
            data?: ChartData[]
      }

      const props = withDefaults(defineProps<Props>(), {
            title: 'Growth Overview',
            subtitle: 'Last 6 Months',
            data: () => [
                  { label: 'Jan', value: 32 },
                  { label: 'Feb', value: 48 },
                  { label: 'Mar', value: 41 },
                  { label: 'Apr', value: 67 },
                  { label: 'May', value: 81 },
                  { label: 'Jun', value: 72 },
            ],
      })

      const loaded = ref(false)

      onMounted(() => {
            requestAnimationFrame(() => {
                  loaded.value = true
            })
      })

      const maxValue = computed(() =>
            Math.max(...props.data.map(item => item.value))
      )
</script>

<template>
      <div class="chart-card hidden sm:inline rounded-2xl border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-xl">
            <!-- Header -->
            <div class="mb-6 flex items-center justify-between">
                  <div>
                        <p class="text-sm text-white/60">
                              {{ title }}
                        </p>

                        <h3 class="mt-1 text-xl font-semibold text-white">
                              {{ subtitle }}
                        </h3>
                  </div>

                  <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <TrendingUp class="size-5" />
                  </div>
            </div>

            <!-- Chart -->
            <div class="flex h-52 items-end justify-between gap-3">
                  <div v-for="(item, index) in data" :key="item.label" class="flex flex-1 flex-col items-center">
                        <div class="relative flex h-44 w-full items-end">
                              <div
                                class="w-full rounded-t-xl bg-linear-to-t from-primary/60 to-primary shadow-lg shadow-primary/20 transition-all duration-700 ease-out hover:brightness-110"
                                :style="{
                                    height: loaded
                                          ? `${(item.value / maxValue) * 100}%`
                                          : '0%',
                                    transitionDelay: `${index * 100}ms`,
                              }" />
                        </div>

                        <span class="mt-3 text-xs text-white/50">
                              {{ item.label }}
                        </span>
                  </div>
            </div>

            <!-- Footer -->
            <div class="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                        <p class="text-xs uppercase tracking-wide text-white/40">
                              Growth
                        </p>

                        <p class="text-lg font-semibold text-emerald-400">
                              +28.4%
                        </p>
                  </div>

                  <div class="text-right">
                        <p class="text-xs uppercase tracking-wide text-white/40">
                              Performance
                        </p>

                        <p class="text-lg font-semibold text-white">
                              Excellent
                        </p>
                  </div>
            </div>
      </div>
</template>