<script lang="ts" setup>
      import { AtomIcon, BlocksIcon, CrownIcon, LockKeyholeIcon, ScalingIcon, Share2Icon } from 'lucide-vue-next';
      import constants from '~/constants';

      useSeoMeta({
            title: 'softview ghana'.toString().toUpperCase(),
            ogTitle: 'softview ghana'.toString().toUpperCase(),
            description: 'Softview Ghana. We are a forward-thinking software development firm committed to developing and delivering specialized software solutions that address the unique challenges of the Ghanaian market.',
            ogDescription: 'Softview Ghana. We are a forward-thinking software development firm committed to developing and delivering specialized software solutions that address the unique challenges of the Ghanaian market.',
            twitterCard: 'summary_large_image',
            ogImage: {
                  url: constants.APP_URL + '/icon-192.png',
                  type:'image/png',
                  width: 192,
                  height: 192,
                  alt: 'softview ghana logo'
            },
            ogUrl: constants.APP_URL,
            ogType: 'profile'
      });
      useHead({
            link: [
                  { rel: 'canonical', href: constants.APP_URL }
            ]
      });
</script>

<template>
      <ESSection>
            <div class="mx-auto max-w-2xl py-8 sm:py-16 lg:py-32 overflow-hidden">
                  <div v-fade-in class="text-center">
                        <h1 class="text-5xl font-semibold tracking-tight text-balance text-global-50 sm:text-7xl">
                              softview ghana
                        </h1>
                        <p class="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
                              We are committed to developing and delivering specialized software solutions that
                              address the unique challenges of the Ghanaian market.
                        </p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                              <NuxtLink
                                class="font-semibold dark:hover:text-white outline outline-offset-2 outline-global-50 hover:bg-global-50/80 py-3 px-8 rounded-md"
                                :to="{ name: 'about' }">
                                    Learn more <span aria-hidden="true">→</span>
                              </NuxtLink>
                        </div>
                  </div>
                  <!-- <div aria-hidden="true"
                    class="blur-3xl transform-gpu -z-10 right-0 -top-2 sm:-top-24 absolute opacity-10">
                        <div
                          style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
                          class="dark:to-indigo-500 dark:from-cyan-400 from-purple-600 to-blue-300 bg-linear-to-tr w-351 aspect-1404/767">
                        </div>
                  </div> -->
            </div>
      </ESSection>
      <ESSection>
            <div class="relative py-8">
                  <div v-fade-in class="py-4 md:py-8 lg:py-12">
                        <h6 class="text-center capitalize text-2xl font-semibold dark:text-white">
                              our SaaS ecosystem
                        </h6>
                        <p class="text-center text-lg pb-12">
                              Streamline your operations and drive efficiency with our specialized, high-performance
                              software.
                        </p>
                  </div>
                  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 space-y-4 md:space-y-8">
                        <CardLinkWithIcon header-text="eagle school manager"
                          text="An all-in-one smart school management system" :icon="CrownIcon"
                          href="//eschoolghana.com" />

                        <CardLinkWithIcon header-text="eTerminal report manager"
                          text="The smart way of generating custom terminal report cards for students" :icon="CrownIcon"
                          href="//terminal-report.eschoolghana.com" />

                        <CardLinkWithIcon header-text="vote 360 online"
                          text="Organize swift, secure and transparent elections" :icon="CrownIcon"
                          href="//vote360online.com" />

                        <CardLinkWithIcon header-text="eagle church suite"
                          text="streamline church operations with ease and enhance community engagement"
                          :icon="CrownIcon" href="//eaglechurchsuite.com" />

                        <div class="flex items-center justify-center">
                              <NuxtLink class="text-lg capitalize hover:text-global dark:hover:text-white"
                                :to="{ name: 'products' }">see
                                    all products & features
                              </NuxtLink>
                        </div>
                  </div>
            </div>
      </ESSection>
      <div
        class="relative overflow-hidden backdrop-blur-2xl my-8 py-8 md:my-16 border-y bg-slate-200/90 border-slate-300/40 dark:border-slate-500/20 dark:bg-slate-500/10 rounded-none">
            <ESSection>
                  <div v-fade-in class="py-4 md:py-8">
                        <h6 class="text-center capitalize text-2xl font-semibold dark:text-white">
                              why softview ghana matters?
                        </h6>
                        <p class="text-center text-lg/loose py-4 font-semibold text-global-50">
                              Excellence • Local • Secure
                        </p>
                        <p class="text-center text-lg pb-12">
                              Streamline your operations and drive efficiency with our specialized, high-performance
                              software.
                        </p>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                        <GridList :icon="BlocksIcon" header-text="custom-built"
                          text="Not just customized - our platforms are architected from the ground up to  address specific local challenges. including payment integrations and report formats" />

                        <GridList :icon="LockKeyholeIcon" header-text="security & data integrity"
                          text="We utilize industry best practices to ensure your sensitive data is always secure and private" />

                        <GridList :icon="ScalingIcon" header-text="scalabilty for Growth"
                          text="Wether you're a small clinic or a large school network, our solutions scale seamlessly as your institution grows" />

                        <GridList :icon="AtomIcon" header-text="affordabilty"
                          text="Get world-class software at a price made just for you that respects the local market" />
                  </div>
            </ESSection>
            <div aria-hidden="true"
              class="blur-[14rem] dark:blur-3xl transform-gpu -z-10 right-0 -top-2 sm:-top-24 absolute opacity-5">
                  <div
                    style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
                    class="dark:to-indigo-500 dark:from-cyan-400 from-purple-600 to-blue-300 bg-linear-to-tr w-351 aspect-1404/767">
                  </div>
            </div>
      </div>
      <ESSection class="@container">
            <div v-fade-in class="py-4 md:py-8">
                  <h6 class="text-center capitalize text-2xl font-semibold dark:text-white">
                        what our clients say
                  </h6>
            </div>
            <div v-fade-in
              class="relative flex flex-row overflow-x-auto gap-x-4 space-x-4 scroll-smooth scrollbar-none py-4! rounded-md">
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
            </div>
      </ESSection>
</template>

<style scoped></style>