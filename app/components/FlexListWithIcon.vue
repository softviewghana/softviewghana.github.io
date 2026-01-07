<script lang="ts" setup>
      import type { NuxtLinkProps } from '#app';
      import type { LucideIcon } from 'lucide-vue-next';
      import type { StyleValue } from 'vue';
      import type { RouteRecordRaw } from 'vue-router';

      interface Props {
            icon?: LucideIcon,
            heading: string,
            text: string,
            headingClass?: StyleValue,
            textClass?: StyleValue,
            iconClass?: StyleValue,
            class?: StyleValue
            iconContainerClass?: StyleValue,
            to?: RouteRecordRaw | NuxtLinkProps['to']
      }

      const props = withDefaults(defineProps<Props>(), {
            heading: 'A flex list heading',
            text: 'A descriptive text for the heading',
            headingClass: 'font-semibold capitalize',
            to: '/'
      });

</script>

<template>
      <NuxtLink :to="props.to" exact-active-class="dark:bg-slate-800/80" active-class=" "
        :class="['flex gap-4 flex-row items-center justify-start p-2 hover:bg-slate-200 dark:hover:bg-slate-800 hover:cursor-pointer rounded-md text-sm', props.class]">
            <span :class="['bg-slate-400 dark:bg-slate-600 flex flex-row p-2 rounded-md', props.iconContainerClass]">
                  <component :is="props.icon" :class="['dark:text-zinc-100', props.iconClass]" />
            </span>
            <span class="flex flex-col gap-2">
                  <h6 :class="['font-semibold capitalize dark:text-zinc-100', props.headingClass]">
                        {{ props.heading }}
                  </h6>
                  <p :class="['wrap-break-word first-letter:capitalize', props.textClass]">
                        {{ props.text }}
                  </p>
            </span>
      </NuxtLink>
</template>

<style scoped></style>