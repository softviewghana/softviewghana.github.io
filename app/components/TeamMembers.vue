<script setup lang="ts">
      import ImgCEO from '~/assets/image/img-cto.jpg';
      const people = [
            {
                  name: 'Kingsley Osei Opoku',
                  role: 'Co-Founder / CTO / Software Engineer',
                  imageUrl: ImgCEO
            },
            {
                  name: 'Douglas Boakye',
                  role: 'Co-Founder / Designer / Product Manager',
                  imageUrl: ''
            },
      ]
</script>
<template>
      <div
        class="relative py-24 sm:py-32 overflow-hidden backdrop-blur-md border border-slate-500/1 dark:bg-slate-700/1 bg-slate-300/40">
            <div class="mx-auto grid max-w-7xl gap-8 lg:gap-20 px-6 lg:px-8 xl:grid-cols-3">
                  <div v-fade-in class="max-w-xl">
                        <h2 class="text-3xl font-semibold capitalize tracking-tight text-pretty dark:text-white sm:text-4xl">
                              our team
                        </h2>
                        <p class="mt-6 text-lg/8">We're a dynamic group of individuals who are passionate
                              about what we do and dedicated to delivering the best results for our clients.</p>
                  </div>
                  <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li v-fade-in v-for="person in people" :key="person.name">
                              <div class="flex items-center gap-x-6">
                                    <img
                                      class="size-16 backdrop-blur-2xl rounded-full outline-1 -outline-offset-1 outline-white/10"
                                      :src="person.imageUrl" :alt="person.name" />
                                    <div>
                                          <h3 class="text-base/8 font-semibold tracking-wide dark:text-white">
                                                {{ person.name }}
                                          </h3>
                                          <p class="text-sm/6 font-semibold text-green-600">{{ person.role }}</p>
                                    </div>
                              </div>
                        </li>
                  </ul>
            </div>
            <div aria-hidden="true"
              class="blur-[14rem] dark:blur-3xl transform-gpu -z-10 right-0 -top-2 sm:-top-24 absolute opacity-25">
                  <div
                    style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
                    class="dark:to-indigo-500 dark:from-cyan-400 from-purple-600 to-blue-300 bg-linear-to-tr w-351 aspect-1404/767">
                  </div>
            </div>
      </div>
</template>