<script setup lang="ts">
      import type { Component } from 'vue'

      interface Props {
            title: string
            description: string
            icon: Component
      }

      defineProps<Props>()
</script>

<template>

      <div
        class="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30">

            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <component :is="icon" class="size-7 text-primary" />
            </div>

            <h3 class="text-xl font-semibold text-white">
                  {{ title }}
            </h3>

            <p class="mt-4 leading-7 text-white/60">
                  {{ description }}
            </p>

      </div>

</template>