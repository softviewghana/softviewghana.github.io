<script lang="ts" setup>

      const props = withDefaults(defineProps<{
            type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'date' | 'number';
            id?: string;
            name?: string;
            label?: string;
            placeholder?: string;
            modelValue?: string | number;
            required?: boolean;
            tabIndex?: string,
            inputmode?: "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal"
      }>(), {
            id: () => `es-${Math.random().toString(15).substring(7)}`,
            type: 'text',
            required: false,
      });

      const emit = defineEmits(['input', 'update:modelValue']);

      const value = computed({
            get() {
                  return props.modelValue;
            },
            set(newValue) {
                  emit('update:modelValue', newValue);
            },
      });
      const computedInputMode = computed<"text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal">(() => {
            switch (props.type) {
                  case 'email':
                        return 'email';
                  case 'tel':
                        return 'tel';
                  case 'url':
                        return 'url';
                  case 'search':
                        return 'search';
                  case 'number':
                        // Best for integers (e.g., quantity, age). Use 'decimal' for currency/prices.
                        return 'numeric';
                  case 'date':
                        // The browser's date picker is used, so no soft keyboard is needed.
                        return 'none';
                  case 'text':
                  case 'password':
                  default:
                        return 'text';
            }
      });
</script>

<template>
      <div class="relative flex flex-col">
            <label :for="props.id" class="block text-sm font-medium capitalize">
                  {{ props.label }}
            </label>
            <input :type="props.type" :inputmode="inputmode ?? computedInputMode" :id="props.id"
              :name="props.id || props.name" v-model="value" :placeholder="props.placeholder"
              class="mt-1 bg-inherit appearance-none! [-webkit-appearance:none]! [-moz-appearance:none]! inline-block w-full border-0 rounded-md shadow-sm p-3 outline outline-global focus:outline-2 focus:outline-global-50 focus:ring-0 focus:border-0">
      </div>
</template>

<style scoped></style>