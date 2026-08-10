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
                  <div class="mb-6 text-sm text-muted">
                        <span class="font-medium text-foreground">Last Updated:</span>
                        {{ lastUpdated }}
                  </div>

                  <div class="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
                        <div class="lg:sticky lg:top-24 lg:self-start">
                              <LegalToc :items="items" />
                        </div>

                        <article class="prose prose-invert max-w-none text-base leading-8 text-foreground/90">
                              <slot />
                        </article>
                  </div>
            </BaseContainer>
      </div>
</template>
