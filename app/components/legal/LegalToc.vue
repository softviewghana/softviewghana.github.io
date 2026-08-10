<script setup lang="ts">
      interface TocItem {
            id: string
            label: string
      }

      interface Props {
            title?: string
            items: TocItem[]
      }

      const props = withDefaults(defineProps<Props>(), {
            title: 'On this page',
      })

      const isOpen = ref(false)

      const tocItems = computed(() => props.items)
</script>

<template>
      <aside class="rounded-2xl border border-border bg-white/2 p-4 md:p-5">
            <div class="flex items-center justify-between gap-4 md:hidden">
                  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                        {{ title }}
                  </p>
                  <button type="button"
                    class="inline-flex items-center justify-center rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground"
                    @click="isOpen = !isOpen">
                        {{ isOpen ? 'Hide' : 'Show' }}
                  </button>
            </div>

            <div :class="['mt-4 md:mt-0', { 'hidden md:block': !isOpen && true }]">
                  <p class="hidden text-sm font-semibold uppercase tracking-[0.2em] text-primary/80 md:block">
                        {{ title }}
                  </p>
                  <nav class="mt-4 space-y-2">
                        <a v-for="item in tocItems" :key="item.id" :href="`#${item.id}`"
                          class="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted transition hover:bg-white/3 hover:text-foreground">
                              <span
                                class="text-[11px] font-medium uppercase tracking-[0.18em] text-primary/80">{{ item.id }}</span>
                              <span>{{ item.label }}</span>
                        </a>
                  </nav>
            </div>
      </aside>
</template>
