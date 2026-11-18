<script setup lang="ts">
      import CONSTANTS from '~/constants';
      import {
            Search,
            Route,
            PanelsTopLeft,
            Layers3,
            MousePointer2,
            Smartphone,
            Accessibility,
            RefreshCw,
            Check,
            ArrowRight,
            Lightbulb,
            Target,
            Users,
            Eye,
            LayoutDashboard,
      } from '@lucide/vue';

      const services = [
            {
                  icon: Search,
                  title: 'User research',
                  description: 'Understand your audience, their needs, and the problems your product should solve.',
            },
            {
                  icon: Route,
                  title: 'User flows & journeys',
                  description: 'Map clear paths through your product so users can complete tasks with less friction.',
            },
            {
                  icon: PanelsTopLeft,
                  title: 'Wireframing',
                  description: 'Explore layouts, content structure, and functionality before committing to visual design.',
            },
            {
                  icon: Layers3,
                  title: 'Interface design',
                  description: 'Create polished, consistent interfaces that communicate clearly and feel intuitive.',
            },
            {
                  icon: MousePointer2,
                  title: 'Interactive prototyping',
                  description: 'Make ideas tangible with interactive prototypes that help validate design decisions.',
            },
            {
                  icon: Smartphone,
                  title: 'Responsive design',
                  description: 'Adapt experiences across mobile, tablet, and desktop screen sizes.',
            },
            {
                  icon: Accessibility,
                  title: 'Usability & accessibility',
                  description: 'Improve navigation, readability, and interaction for a wider range of users.',
            },
            {
                  icon: RefreshCw,
                  title: 'Design systems & refinement',
                  description: 'Establish reusable patterns and continuously improve existing product experiences.',
            },
      ];

      const outcomes = [
            {
                  icon: Users,
                  title: 'User-focused products',
                  description: 'Experiences shaped around the people who actually use them.',
            },
            {
                  icon: Route,
                  title: 'Clearer user journeys',
                  description: 'Logical navigation and more straightforward task completion.',
            },
            {
                  icon: Eye,
                  title: 'Better usability',
                  description: 'Interfaces that are easier to understand, navigate, and interact with.',
            },
            {
                  icon: Target,
                  title: 'Consistent experiences',
                  description: 'A cohesive visual language across your digital touchpoints.',
            },
      ];

      const principles = [
            {
                  number: '01',
                  title: 'Understand',
                  description: 'We explore your users, business goals, and the challenges the product needs to address.',
            },
            {
                  number: '02',
                  title: 'Structure',
                  description: 'We organise information, map user journeys, and define how people will interact with the product.',
            },
            {
                  number: '03',
                  title: 'Design',
                  description: 'We translate the structure into clear interfaces, visual systems, and interactive prototypes.',
            },
            {
                  number: '04',
                  title: 'Refine',
                  description: 'We review the experience, gather feedback, and improve areas that need more clarity.',
            },
      ];

      const breadcrumbs = [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      ];

      usePageSeo({
            title: 'UI/UX Design — ' + CONSTANTS.APP_NAME,
            description: 'User-centred UI/UX design, wireframes, prototypes, and responsive digital experiences built around real user needs and business goals.',
            path: '/services/ui-ux-design',
            breadcrumbs: breadcrumbs.map((breadcrumb) => ({
                  name: breadcrumb.label,
                  url: breadcrumb.href,
            })),
      });
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Services" title="UI/UX Design" :breadcrumbs="breadcrumbs"
              description="We design digital experiences that make complex tasks feel simple. From early product thinking to polished interfaces, every decision starts with the people who will use what we build." />

            <BaseContainer class="mt-8 md:mt-12">
                  <!-- Design introduction -->
                  <section class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                        <div class="rounded-4xl border border-border bg-surface p-6 md:p-9">
                              <div
                                class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    <Lightbulb :size="15" />
                                    Our design approach
                              </div>

                              <h2
                                class="mt-5 max-w-xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Good design makes technology feel natural.
                              </h2>

                              <p class="mt-5 text-base leading-8 text-muted">
                                    A digital product can have powerful features and still be difficult
                                    to use. We bring user needs, business objectives, and thoughtful
                                    visual design together to create experiences that are clear,
                                    purposeful, and easy to navigate.
                              </p>

                              <p class="mt-4 text-base leading-8 text-muted">
                                    Whether you're starting a new product or improving an existing
                                    platform, we focus on making every interaction more meaningful.
                              </p>

                              <div class="mt-8 flex flex-wrap gap-2">
                                    <span v-for="tag in ['User-centred', 'Purposeful', 'Responsive', 'Consistent']"
                                      :key="tag"
                                      class="rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium text-foreground/80">
                                          {{ tag }}
                                    </span>
                              </div>
                        </div>

                        <!-- Illustrative interface preview -->
                        <div class="overflow-hidden rounded-4xl border border-border bg-background p-4 md:p-6">
                              <div class="flex items-center justify-between border-b border-border pb-4">
                                    <div>
                                          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                                Design preview
                                          </p>
                                          <p class="mt-1 text-sm font-medium text-foreground">
                                                A considered interface
                                          </p>
                                    </div>

                                    <div class="flex gap-1.5">
                                          <span class="h-2 w-2 rounded-full bg-primary/30" />
                                          <span class="h-2 w-2 rounded-full bg-primary/50" />
                                          <span class="h-2 w-2 rounded-full bg-primary" />
                                    </div>
                              </div>

                              <div class="mt-5 rounded-2xl border border-border bg-surface p-4 md:p-5">
                                    <div class="flex items-center justify-between">
                                          <div class="flex items-center gap-2">
                                                <div
                                                  class="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                      <LayoutDashboard :size="16" />
                                                </div>
                                                <div>
                                                      <div class="text-xs font-semibold text-foreground">Workspace</div>
                                                      <div class="text-[10px] text-muted">Product interface concept
                                                      </div>
                                                </div>
                                          </div>

                                          <div class="h-7 w-7 rounded-full border border-border bg-background" />
                                    </div>

                                    <div class="mt-6">
                                          <div class="h-2 w-20 rounded-full bg-muted/30" />
                                          <div class="mt-2 h-4 w-3/4 rounded-md bg-foreground/10" />
                                          <div class="mt-2 h-2 w-1/2 rounded-full bg-muted/20" />
                                    </div>

                                    <div class="mt-6 grid grid-cols-2 gap-3">
                                          <div v-for="item in [
                                                { label: 'Clear hierarchy', width: 'w-3/4' },
                                                { label: 'Consistent patterns', width: 'w-2/3' },
                                                { label: 'Easy navigation', width: 'w-4/5' },
                                                { label: 'Focused actions', width: 'w-1/2' },
                                          ]" :key="item.label" class="rounded-xl border border-border bg-background p-3">
                                                <div class="text-[10px] font-medium text-muted">
                                                      {{ item.label }}
                                                </div>
                                                <div class="mt-3 h-2 rounded-full bg-primary/10">
                                                      <div :class="[item.width, 'h-full rounded-full bg-primary/50']" />
                                                </div>
                                          </div>
                                    </div>

                                    <div
                                      class="mt-4 flex items-center justify-between rounded-xl border border-border bg-background p-3">
                                          <div>
                                                <div class="text-[10px] text-muted">Primary action</div>
                                                <div class="mt-1 text-xs font-semibold text-foreground">Continue</div>
                                          </div>
                                          <div
                                            class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                                                <ArrowRight :size="15" />
                                          </div>
                                    </div>
                              </div>

                              <p class="mt-4 text-center text-xs text-muted">
                                    Illustrative interface concept, not a live product or performance report.
                              </p>
                        </div>
                  </section>

                  <!-- Services -->
                  <section class="mt-16 md:mt-20">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    What we do
                              </p>
                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    From product thinking to interface details.
                              </h2>
                              <p class="mt-4 leading-7 text-muted">
                                    We cover the key stages of designing a digital experience, adapting
                                    the work to your product, audience, and project requirements.
                              </p>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="service in services" :key="service.title"
                                class="group rounded-3xl border border-border bg-surface p-5 transition-colors hover:border-primary/40">
                                    <div
                                      class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                          <component :is="service.icon" :size="20" />
                                    </div>

                                    <h3 class="mt-5 text-base font-semibold text-foreground">
                                          {{ service.title }}
                                    </h3>

                                    <p class="mt-2 text-sm leading-6 text-muted">
                                          {{ service.description }}
                                    </p>
                              </article>
                        </div>
                  </section>

                  <!-- Process -->
                  <section class="mt-16 rounded-4xl border border-border bg-surface p-6 md:mt-20 md:p-10">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    How we approach design
                              </p>
                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    A thoughtful process, from start to finish.
                              </h2>
                              <p class="mt-4 leading-7 text-muted">
                                    Good design is not guesswork. We work through the problem
                                    systematically, making decisions with the product's users and
                                    purpose in mind.
                              </p>
                        </div>

                        <div class="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                              <div v-for="step in principles" :key="step.number">
                                    <div
                                      class="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-sm font-semibold text-primary">
                                          {{ step.number }}
                                    </div>

                                    <h3 class="mt-4 text-lg font-semibold text-foreground">
                                          {{ step.title }}
                                    </h3>

                                    <p class="mt-2 text-sm leading-7 text-muted">
                                          {{ step.description }}
                                    </p>
                              </div>
                        </div>
                  </section>

                  <!-- Outcomes -->
                  <section class="mt-16 md:mt-20">
                        <div class="max-w-2xl">
                              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Why it matters
                              </p>
                              <h2 class="mt-3 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                                    Design that works for people and business.
                              </h2>
                              <p class="mt-4 leading-7 text-muted">
                                    The value of good UI/UX design goes beyond appearance. It helps
                                    people understand your product and get more out of it.
                              </p>
                        </div>

                        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <article v-for="outcome in outcomes" :key="outcome.title"
                                class="rounded-3xl border border-border bg-surface p-5">
                                    <div
                                      class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                          <component :is="outcome.icon" :size="19" />
                                    </div>

                                    <h3 class="mt-4 font-semibold text-foreground">
                                          {{ outcome.title }}
                                    </h3>

                                    <p class="mt-2 text-sm leading-6 text-muted">
                                          {{ outcome.description }}
                                    </p>
                              </article>
                        </div>
                  </section>

                  <!-- CTA -->
                  <section
                    class="mt-16 overflow-hidden rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center md:mt-20 md:p-12">
                        <div
                          class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                              <PanelsTopLeft :size="22" />
                        </div>

                        <h2
                          class="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                              Ready to make your digital product easier to use?
                        </h2>

                        <p class="mx-auto mt-4 max-w-xl leading-7 text-muted">
                              Let's discuss your product, understand your users, and create an
                              experience that makes sense for both.
                        </p>

                        <NuxtLink to="/contact"
                          class="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Discuss Your Project
                              <ArrowRight :size="17" />
                        </NuxtLink>
                  </section>
            </BaseContainer>
      </div>
</template>
