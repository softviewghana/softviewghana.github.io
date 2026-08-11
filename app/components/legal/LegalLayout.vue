<script setup lang="ts">
      interface TocItem {
            id: string
            label: string
      }

      interface Props {
            eyebrow?: string
            title: string
            description?: string
            lastUpdated?: string
            items: TocItem[]
      }

      defineProps<Props>()
</script>

<template>
      <div class="pb-20">
            <BaseContainer>
                  <PageHero :eyebrow="eyebrow" :title="title" :description="description" />
            </BaseContainer>

            <BaseContainer class="mt-6 md:mt-10">
                  <div class="softview-panel p-6 md:p-8 lg:p-10">
                        <div
                            class="mb-6 flex flex-col gap-3 border-b border-border/70 pb-6 md:flex-row md:items-center md:justify-between">
                              <div class="text-sm text-muted">
                                    <span class="font-medium text-foreground">Last Updated:</span>
                                    {{ lastUpdated }}
                              </div>
                              <span class="softview-kicker">Structured overview</span>
                        </div>

                        <div class="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                              <div class="lg:sticky lg:top-24 lg:self-start">
                                    <div class="softview-card p-4 sm:p-5">
                                          <LegalToc :items="items" />
                                    </div>
                              </div>

                              <article
                                  class="softview-card prose prose-invert max-w-none p-6 md:p-8 text-base leading-8 text-foreground/90">
                                    <slot />
                              </article>
                        </div>
                  </div>
            </BaseContainer>
      </div>
</template>
