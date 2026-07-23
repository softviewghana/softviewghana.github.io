<script setup lang="ts">
      import { computed } from 'vue'
      import type { Component } from 'vue'

      interface Props {
            title: string
            value: string | number
            subtitle?: string
            icon: Component
      }

      const props = defineProps<Props>()

      const value = computed(() => props.value)
</script>

<template>
      <div
        class="group metric-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 transition-all duration-300 hover:border-primary/40 hover:bg-white/10 hover:-translate-y-1">
            <div class="flex items-start justify-between">
                  <div>
                        <p class="text-sm text-white/60">
                              {{ title }}
                        </p>

                        <h3 class="mt-2 text-2xl font-semibold text-white">
                              {{ value }}
                        </h3>

                        <p v-if="subtitle" class="mt-1 text-xs text-white/50">
                              {{ subtitle }}
                        </p>
                  </div>

                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                        <component :is="icon" class="size-5" />
                  </div>
            </div>
      </div>
</template>