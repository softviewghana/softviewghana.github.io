<script lang="ts" setup>
      usePageSeo({
            title: 'Insights — Softview Ghana',
            description: 'Practical insights on software engineering, technology, digital transformation, and business.',
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
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Insights" title="Ideas, Engineering, and Technology"
              description="Practical insights on software development, technology, digital transformation, and building better digital businesses." />

            <BaseContainer class="mt-8 md:mt-10">
                  <section class="rounded-4xl border border-border bg-white/2 p-6 md:p-8">
                        <div class="mb-5 flex items-center justify-between gap-3">
                              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Featured</p>
                        </div>

                        <div
                          class="rounded-[28px] border border-border bg-[radial-gradient(circle_at_top,_rgba(39,201,120,0.18),_rgba(15,23,42,0)_48%),linear-gradient(135deg,#0b1220,#111827)] p-6 md:p-8">
                              <p class="text-xs font-medium uppercase tracking-[0.22em] text-primary/80">Featured</p>
                              <h2
                                class="mt-4 max-w-3xl text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                                    Building Better Business Software</h2>
                              <p class="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                                    A practical look at how organizations can use technology to improve operations and
                                    create sustainable growth.
                              </p>
                              <NuxtLink to="/contact"
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
                                          : 'border-border bg-white/2 text-muted hover:border-primary/40 hover:text-foreground',
                              ]" @click="activeFilter = category">
                                    {{ category }}
                              </button>
                        </div>
                  </section>

                  <section class="mt-10">
                        <div
                          class="rounded-4xl border border-dashed border-border bg-white/2 p-8 text-center md:p-16">
                              <h3 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">We're
                                    Working on Something Worth Reading</h3>
                              <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                                    Our team is preparing practical insights on software, technology, and digital
                                    transformation.
                              </p>
                              <p class="mt-3 text-base font-medium text-foreground">Check back soon.</p>
                        </div>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>