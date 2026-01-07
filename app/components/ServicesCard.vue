<script lang="ts" setup>
      import { CheckCircle2Icon, type LucideIcon } from 'lucide-vue-next';
      import type { StyleValue } from 'vue';

      interface Props {
            icon?: LucideIcon,
            iconClass?: StyleValue,
            headerText: string,
            headerClass?: StyleValue,
            list: string[],
            textClass?: StyleValue,
      }

      const props = defineProps<Props>();
</script>

<template>
      <div
        class="overflow-hidden relative backdrop-blur-2xl dark:backdrop-opacity-50 md:my-16 border rounded-2xl bg-slate-100/50 border-slate-300/80 dark:border-slate-500/20 dark:bg-slate-800/80">
            <div class="relative min-w-xs w-full p-4">
                  <div class="text-global flex flex-row gap-4 items-center justify-start py-4">
                        <component :is="props.icon"
                          :class="[props.iconClass, 'size-6 text-center mb-3 dark:text-white']" />
                        <h3 class="text-md font-semibold tracking-wide mb-2 capitalize dark:text-white">
                              {{ props.headerText }}
                        </h3>
                  </div>
                  <ul role="list" class="space-y-2.5">
                        <li v-for="item in props.list" :key="item">
                              <div class="flex items-start">
                                    <check-circle2-icon :stroke-width="3" class="h-4 w-4 text-global-50 mt-1 mr-2"/>
                                    {{ item }}
                              </div>
                        </li>
                  </ul>
            </div>
            <div aria-hidden="true"
              class="blur-[14rem] dark:blur-3xl transform-gpu -z-10 right-0 -top-2 sm:-top-24 absolute opacity-15">
                  <div
                    style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
                    class="dark:to-indigo-500 dark:from-cyan-400 from-purple-600 to-blue-300 bg-linear-to-tr w-351 aspect-1404/767">
                  </div>
            </div>
      </div>
</template>

<style scoped></style>