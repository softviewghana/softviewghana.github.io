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
      <section class="relative isolate overflow-hidden pb-16 pt-20 md:pb-20 md:pt-24">
            <div
                class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,201,120,0.16),transparent_40%)]" />
            <div class="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div
                class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-linear-to-l from-primary/8 to-transparent lg:block" />

            <BaseContainer class="relative">
                  <div v-if="breadcrumbs && breadcrumbs.length"
                      class="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted">
                        <template v-for="(item, index) in breadcrumbs" :key="item.href">
                              <NuxtLink :to="item.href" class="transition hover:text-primary">
                                    {{ item.label }}
                              </NuxtLink>
                              <span v-if="index < breadcrumbs.length - 1" class="text-muted/60">/</span>
                        </template>
                  </div>

                  <div class="max-w-4xl">
                        <p v-if="eyebrow" class="softview-kicker">
                              {{ eyebrow }}
                        </p>

                        <p
                            class="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-foreground md:text-6xl">
                              {{ title }}
                        </p>

                        <h1 v-if="description" class="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
                              {{ description }}
                        </h1>
                  </div>

                  <div v-if="$slots.visual" class="mt-10">
                        <div class="softview-card max-w-2xl p-5 sm:p-6">
                              <slot name="visual" />
                        </div>
                  </div>
            </BaseContainer>
      </section>
</template>
