<script lang="ts" setup>
      interface Insight {
            slug: string
            title: string
            excerpt: string
            category: string
            publishedAt: string
            readingTime: number
            featured?: boolean
            coverImage?: string
      }

      usePageSeo({
            title: 'Insights | Softview Ghana',
            description: 'Practical insights on software engineering, technology, digital transformation, and building better digital businesses.',
            path: '/insights',
      });

      const categories = [
            'All',
            'Engineering',
            'Business Technology',
            'Digital Transformation',
            'Cloud & Infrastructure',
            'Product',
            'Company',
      ];

      const activeFilter = ref('All');

      // No articles published yet — do not fabricate content. Populate once a CMS or content source is connected.
      const insights: Insight[] = [];

      const featuredInsight = computed(() => insights.find((insight) => insight.featured));

      const filteredInsights = computed(() => insights
            .filter((insight) => !insight.featured)
            .filter((insight) => activeFilter.value === 'All' || insight.category === activeFilter.value));
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Insights" title="Ideas, Engineering, and Technology"
                description="Practical insights on software development, technology, digital transformation, and building better digital businesses." />

            <BaseContainer class="mt-8 md:mt-10">
                  <template v-if="insights.length">
                        <section v-if="featuredInsight" class="softview-panel p-6 md:p-8">
                              <div class="mb-5 flex items-center justify-between gap-3">
                                    <span class="softview-kicker">Featured</span>
                              </div>

                              <div
                                  class="softview-card rounded-[28px] bg-[radial-gradient(circle_at_top,_color-mix(in_oklab,_var(--brand)_18%,_transparent),_transparent_45%)] p-6 md:p-8">
                                    <p class="text-xs font-medium uppercase tracking-[0.22em] text-primary/80">
                                          {{ featuredInsight.category }}
                                    </p>
                                    <h2
                                        class="mt-4 max-w-3xl text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                                          {{ featuredInsight.title }}
                                    </h2>
                                    <p class="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                                          {{ featuredInsight.excerpt }}
                                    </p>
                                    <div class="mt-4 flex items-center gap-3 text-sm text-muted">
                                          <span>{{ featuredInsight.publishedAt }}</span>
                                          <span aria-hidden="true">·</span>
                                          <span>{{ featuredInsight.readingTime }} min read</span>
                                    </div>
                                    <NuxtLink :to="`/insights/${featuredInsight.slug}`"
                                        class="mt-8 inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary-hover">
                                          Read Article <span aria-hidden="true">→</span>
                                    </NuxtLink>
                              </div>
                        </section>

                        <section class="mt-10">
                              <div class="flex flex-wrap gap-3">
                                    <button v-for="category in categories" :key="category" type="button" :class="[
                                          'rounded-full border px-4 py-2 text-sm font-medium transition',
                                          activeFilter === category
                                                ? 'border-primary bg-primary/10 text-primary'
                                                : 'border-border bg-surface text-muted hover:border-primary/40 hover:text-foreground',
                                    ]" @click="activeFilter = category">
                                          {{ category }}
                                    </button>
                              </div>
                        </section>

                        <section class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                              <NuxtLink v-for="insight in filteredInsights" :key="insight.slug"
                                  :to="`/insights/${insight.slug}`"
                                  class="softview-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                                    <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                                          {{ insight.category }}
                                    </p>
                                    <h3 class="mt-3 text-xl font-semibold text-foreground">{{ insight.title }}</h3>
                                    <p class="mt-3 text-sm leading-7 text-muted">{{ insight.excerpt }}</p>
                                    <div class="mt-5 flex items-center gap-3 text-xs text-muted">
                                          <span>{{ insight.publishedAt }}</span>
                                          <span aria-hidden="true">·</span>
                                          <span>{{ insight.readingTime }} min read</span>
                                    </div>
                                    <span class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                                          Read Article <span aria-hidden="true">→</span>
                                    </span>
                              </NuxtLink>
                        </section>
                  </template>

                  <section v-else class="softview-panel border border-dashed border-border/70 p-8 text-center md:p-16">
                        <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">We're
                              Working on Something Worth Reading</h3>
                        <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                              Our team is preparing practical insights on software, technology, and digital
                              transformation.
                        </p>
                        <p class="mt-3 text-base font-medium text-foreground">Check back soon.</p>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>