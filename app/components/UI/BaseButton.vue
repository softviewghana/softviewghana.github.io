<script setup lang="ts">
      import { LoaderCircle } from '@lucide/vue';
      import { computed, type HTMLAttributes } from 'vue';

      type Variant =
            | 'primary'
            | 'secondary'
            | 'outline'
            | 'ghost';

      type Size =
            | 'sm'
            | 'md'
            | 'lg';

      interface Props {
            variant?: Variant;
            size?: Size;
            type?: 'button' | 'submit' | 'reset';
            loading?: boolean;
            disabled?: boolean;
            block?: boolean;
            class?: HTMLAttributes['class'];
      }

      const props = withDefaults(defineProps<Props>(), {
            variant: 'primary',
            size: 'md',
            type: 'button',
            loading: false,
            disabled: false,
            block: false,
            class: '',
            as: 'button'
      });

      const classes = computed(() => {

            const variants = {

                  primary: [
                        'bg-primary',
                        'text-white',
                        'hover:bg-primary-hover',
                        'shadow-lg shadow-primary/25'
                  ],

                  secondary: [
                        'bg-surface',
                        'border',
                        'border-border',
                        'hover:bg-surface-elevated',
                        'text-foreground'
                  ],

                  outline: [
                        'border',
                        'border-border',
                        'bg-surface',
                        'text-foreground',
                        'hover:border-primary',
                        'hover:text-primary'
                  ],

                  ghost: [
                        'hover:bg-surface'
                  ]

            };

            const sizes = {

                  sm: 'h-9 px-4 text-sm',

                  md: 'h-11 px-5',

                  lg: 'h-12 px-6 text-base'

            };

            return [

                  'inline-flex',

                  'items-center',

                  'justify-center',

                  'gap-2',

                  'rounded-2xl',

                  'font-semibold',

                  'transition-all',

                  'duration-200',

                  'select-none',

                  'active:scale-[.98]',

                  'disabled:pointer-events-none',

                  'disabled:opacity-50',

                  variants[props.variant],

                  sizes[props.size],

                  props.block && 'w-full'

            ];

      });

      defineOptions({
            inheritAttrs: false
      })
</script>

<template>
      <button v-bind="props" :class="[classes, props.class]">
            <LoaderCircle v-if="loading" class="size-4 animate-spin" />
            <slot />
      </button>
</template>