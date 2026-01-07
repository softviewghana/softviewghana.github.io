<script lang="ts" setup>
import type { StyleValue } from 'vue';


      interface Props {
            fillColor?: string,
            strokeColor?: string,
            strokeWidth?: string | number,
            class?: StyleValue
      }
      const props = withDefaults(defineProps<Props>(), {
            fillColor: 'w',
            strokeColor: '',
            strokeWidth: 0,
            class: 'h-8'
      })
      // If you had many styles, you could use a computed property like this:
      const dynamicStyle = computed(() => ({
            fill: props.fillColor,
            stroke: props.strokeColor,
            strokeMiterlimit: 10, // Keep static styles here if needed
      }));

</script>

<template>
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 289 316.12" :class="[props.class]">
            <g id="Layer_1-2" data-name="Layer 1">
                  <g>
                        <polygon :fill="fillColor" :stroke="strokeColor" :stroke-width="props.strokeWidth"
                          stroke-miterlimit="10"
                          points="288.5 171.56 288.5 243.56 144.5 315.56 .5 243.56 .5 171.56 144.5 243.56 288.5 171.56" />
                        <path :fill="fillColor" :stroke="strokeColor" stroke-miterlimit="10"
                          d="M144.5.56L.5,72.56v72l144,72,144-72v-72L144.5.56ZM144.5,144.56l-72-36,72-36,72,36-72,36Z" />
                  </g>
            </g>
      </svg>
</template>

<style scoped></style>