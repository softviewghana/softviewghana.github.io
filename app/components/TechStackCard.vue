<script lang="ts" setup>

      const props = defineProps<{
            text: string,
            headerText: string
      }>();
</script>

<template>
      <div class="p-6  rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-3 capitalize dark:text-white text-global">
                  {{ props.headerText }}
            </h3>
            <p class="">
                  {{ props.text }}
            </p>
      </div>
</template>

<style scoped></style>