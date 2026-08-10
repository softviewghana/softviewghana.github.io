<script setup lang="ts">
      interface BreadcrumbItem {
            label: string
            href: string
      }

      interface Props {
            eyebrow?: string
            title: string
            description?: string
            breadcrumbs?: BreadcrumbItem[]
      }

      defineProps<Props>()
</script>

<template>
      <section class="relative overflow-hidden pb-12 pt-16 md:pb-16 md:pt-20">
            <div
              class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(39,201,120,0.20),_transparent_38%)]" />
            <div class="pointer-events-none absolute inset-0 bg-grid opacity-25" />

            <BaseContainer class="relative">
                  <div v-if="breadcrumbs && breadcrumbs.length"
                    class="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted">
                        <template v-for="(item, index) in breadcrumbs" :key="item.href">
                              <NuxtLink :to="item.href" class="hover:text-primary">
                                    {{ item.label }}
                              </NuxtLink>
                              <span v-if="index < breadcrumbs.length - 1" class="text-muted/60">/</span>
                        </template>
                  </div>

                  <div class="max-w-4xl">
                        <p v-if="eyebrow"
                          class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                              {{ eyebrow }}
                        </p>

                        <h1
                          class="mt-6 text-4xl font-semibold tracking-[-0.06em] text-foreground md:text-6xl md:leading-[0.95]">
                              {{ title }}
                        </h1>

                        <p v-if="description" class="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
                              {{ description }}
                        </p>
                  </div>

                  <div v-if="$slots.visual"
                    class="mt-10 overflow-hidden rounded-[28px] border border-border bg-surface/70 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                        <slot name="visual" />
                  </div>
            </BaseContainer>
      </section>
</template>
