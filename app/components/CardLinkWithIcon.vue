<script lang="ts" setup>
      import { CrownIcon, type LucideIcon } from 'lucide-vue-next';
      import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';


      interface Props {
            headerText: string,
            text: string,
            icon?: LucideIcon,
            external?: boolean,
            href?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined,
            target?: "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null | undefined
      }

      const props = withDefaults(defineProps<Props>(), {
            // icon: CrownIcon,
            target: '_blank',
            external: true
      });

</script>

<template>
      <NuxtLink v-fade-in :href="props.href" :external="props.external" :target="props.target"
        class="relative overflow-hidden grid grid-cols-4 items-center dark:hover:border-slate-500 dark:hover:bg-slate-400/20 h-full p-4 backdrop-blur-xs border dark:border-slate-700 border-slate-300/80 dark:bg-slate-800/80 dark:backdrop-opacity-80 bg-slate-100/50 hover:bg-slate-100/80 transition duration-150 rounded-2xl">
            <div
              class="relative rounded-md border text-global-50 dark:text-white dark:border-slate-500 border-slate-400/80 flex justify-center items-center bg-slate-300/40 dark:bg-slate-400/20 p4 size-12 md:size-16 backdrop-blur-2xl">
                  <component :is="props.icon" />
            </div>
            <div class="col-span-3">
                  <h6 class="font-semibold text-global dark:text-white text-lg">
                        {{ props.headerText }}
                  </h6>
                  <p class="">
                        {{ props.text }}
                  </p>
            </div>
            <div aria-hidden="true"
              class="blur-3xl transform-gpu -z-10 right-0 dark:-top-24 -top-3.5 absolute opacity-15">
                  <div
                    style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%)"
                    class="dark:to-indigo-500 dark:from-cyan-400 from-purple-600 to-blue-300 bg-linear-to-tr w-351 aspect-1404/767">
                  </div>
            </div>
      </NuxtLink>
</template>

<style scoped></style>