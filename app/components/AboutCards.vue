<script setup lang="ts">
      import { AtomIcon, GemIcon, RocketIcon, type LucideIcon } from 'lucide-vue-next';

      interface Statement {
            title: string;
            content: string;
            icon: string | LucideIcon;
            color: string;
      }

      const statements: Statement[] = [
            {
                  title: 'Our Mission',
                  content: 'To empower Ghanaian businesses and institutions through innovative, custom-built software solutions that bridge the digital divide and drive efficiency.',
                  icon: AtomIcon,
                  color: 'oklch(0.6_0.2_250)' // Professional Blue
            },
            {
                  title: 'Our Vision',
                  content: 'To be the leading software engineering firm in West Africa, recognized for excellence, integrity, and pioneering home-grown digital transformation.',
                  icon: RocketIcon,
                  color: 'oklch(0.6_0.2_290)' // Modern Purple
            },
            {
                  title: 'Core Values',
                  content: 'Excellence in engineering, unwavering integrity, continuous innovation, and a deeply client-centric approach to every line of code we write.',
                  icon: GemIcon,
                  color: 'oklch(0.6_0.2_150)' // Success Green
            }
      ];
</script>

<template>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="item in statements" :key="item.title"
              class="group relative p-8 rounded-4xl border border-[oklch(0.95_0.01_240)] dark:border-[oklch(0.35_0.01_240)] bg-[oklch(0.99_0.005_240)] dark:bg-body transition-all duration-500 hover:shadow-xl hover:border-transparent">
                  <div
                    class="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    :style="{ backgroundColor: item.color }"></div>

                  <div class="relative z-10">
                        <div
                          class="w-14 h-14 flex items-center justify-center bg-slate-200 dark:bg-[oklch(0.6_0.2_150)] rounded-2xl text-3xl mb-6 shadow-sm ring-1 ring-black/5">
                              <component :is="item.icon" />
                        </div>

                        <h3 class="text-2xl font-bold mb-4">
                              {{ item.title }}
                        </h3>

                        <p class="leading-relaxed text-lg">
                              {{ item.content }}
                        </p>
                  </div>

                  <div
                    class="absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                    :style="{ backgroundColor: item.color }"></div>
            </div>
      </div>
</template>