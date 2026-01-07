<script lang="ts" setup>
      import { Share2Icon, type LucideIcon } from 'lucide-vue-next';

      interface Props {
            headerText: string,
            text: string,
            icon?: LucideIcon
      }

      const props = defineProps<Props>();

</script>

<template>
      <div v-fade-in class="flex flex-row gap-6 items-start justify-between">
            <div class="relative bg-slate-300/20 text-global dark:text-white p-2 top-2 rounded-md border border-slate-400/60">
                  <!-- <Share2Icon class="size-8" /> -->
                  <component :is="props.icon" class="size-8" />
            </div>
            <div class="flex flex-col gap-y-2">
                  <h6 class="font-semibold text-lg capitalize dark:text-slate-50">
                        {{ props.headerText }}
                  </h6>
                  <p>
                        {{ props.text }}
                  </p>
            </div>
      </div>
</template>

<style scoped></style>