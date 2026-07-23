<script setup lang="ts">
      interface Props {
            as?: keyof HTMLElementTagNameMap;
            fluid?: boolean;
      }

      withDefaults(defineProps<Props>(), {
            as: "div",
            fluid: false,
      });
</script>

<template>
      <component :is="as" :class="['mx-auto w-full px-4.5 md:px-6 lg:px-8', fluid ? 'max-w-full' : 'max-w-7xl']">
            <slot />
      </component>
</template>
