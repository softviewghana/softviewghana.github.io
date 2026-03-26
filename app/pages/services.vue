<script lang="ts" setup>
      import { AtomIcon, ChartNoAxesCombinedIcon, CpuIcon, DraftingCompassIcon, GlobeLockIcon, HandshakeIcon } from 'lucide-vue-next';
      import constants from '~/constants';

      useSeoMeta({
            title: 'Services • Softview Ghana',
            ogTitle: 'Services • Softview Ghana',
            description: 'We build specialized, robust, and localized software (SaaS) tailored to meet the unique operational needs of the Ghanaian market. We are not just software architects.',
            ogDescription: 'We build specialized, robust, and localized software (SaaS) tailored to meet the unique operational needs of the Ghanaian market. We are not just software architects.',
            twitterCard: 'summary_large_image',
            ogImage: {
                  url: constants.APP_URL + '/icon-192.png',
                  type: 'image/png',
                  width: 192,
                  height: 192,
                  alt: 'softview ghana logo'
            },
            ogUrl: constants.APP_URL + '/services',
            ogType: 'website'
      });
      useHead({
            link: [
                  { rel: 'canonical', href: constants.APP_URL + '/services' }
            ]
      });
      /**
       * ; we provide comprehensive IT solutions that businesses need, from custom web apps and mobile development to computer networking, system installation, and digital marketing.
       * ; we provide comprehensive IT solutions that businesses need, from custom web apps and mobile development to computer networking, system installation, and digital marketing.
       */
</script>

<template>
      <ESSection>
            <div class="mx-auto max-w-2xl py-8 sm:pt-16 lg:pt-32 overflow-hidden">
                  <h1 v-fade-in class="text-2xl md:text-3xl font-bold text-global-50 text-center">
                        Empowering Ghanaian Businesses and Institutions with Intelligent Software Solutions.
                  </h1>
            </div>
      </ESSection>
      <div
        class="mx-auto w-full overflow-hidden backdrop-blur-2xl backdrop-opacity-30 my-8 py-8 md:my-16 border-y bg-slate-200/90 border-slate-300/40 dark:border-slate-500/20 dark:bg-slate-500/10 rounded-none">
            <ESSection>
                  <div class="max-w-2xl mx-auto">
                        <p v-fade-in class="mt-4 text-justify text-lg">
                              We build specialized, robust, and localized software (SaaS) tailored to meet the unique
                              operational needs of the Ghanaian market.
                        </p>
                        <p v-fade-in class="mt-4 text-justify text-lg">
                              We are not just software architects; we provide comprehensive IT solutions that businesses
                              need, from custom web apps and mobile development to computer networking, system
                              installation, and digital marketing.
                        </p>
                        <div v-fade-in class="mt-6 text-center">
                              <NuxtLink :to="{ hash: '#core-solutions' }" active-class=" " exact-active-class=" "
                                class="dark:text-white text-global text-lg font-semibold transition duration-300">
                                    Explore Our Solutions Below ↓
                              </NuxtLink>
                        </div>
                        <div aria-hidden="true"
                          class="blur-3xl transform-gpu -z-10 right-0 -top-2 sm:-top-24 absolute opacity-5 dark:opacity-25">
                              <div
                                style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
                                class="dark:to-indigo-500 dark:from-cyan-400 from-global-50 to-cyan-300 bg-linear-to-tr w-351 aspect-1404/767">
                              </div>
                        </div>
                  </div>
            </ESSection>
      </div>

      <ESSection id="core-solutions" class="py-16">
            <h2 class="text-3xl dark:text-white font-bold text-center mb-12">
                  Extended IT Services & Digital Enablement
            </h2>
            <p class="text-xl text-center mb-8">
                  Our primary mission is to build scalable, market-specific software to solve complex industry
                  problems.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                  <ServicesCard :icon="DraftingCompassIcon" header-text="Custom Development & Web Portals" :list="[
                        'Website Design & Development',
                        'Mobile App Development (iOS/Android)',
                        'E-commerce Solutions',
                        'Point of Sale Solutions'
                  ]" />
                  <ServicesCard :icon="GlobeLockIcon" header-text="Network & System Installation" :list="[
                        'Computer System Installations & Setup',
                        'Local Area Networking (LAN) Installation',
                        'CCTV Installation & Security Systems',
                        'IT Infrastructure Consulting'
                  ]" />
                  <ServicesCard :icon="ChartNoAxesCombinedIcon" header-text="Marketing & Ancillary IT" :list="[
                        'Social Media Marketing Campaigns',
                        'IT Support & Troubleshooting',
                        'SEO & Performance Optimization'
                  ]" />

            </div>
      </ESSection>
      <ESSection class="py-12 text-center">
            <h2 v-fade-in class="text-3xl font-extrabold dark:text-white mb-4">
                  Need Custom Software or Full IT Support?
            </h2>
            <p v-fade-in class="text-lg mb-8">
                  Whether you require a custom mobile app or specialized systems like Clinic Plus, softview ghana
                  is your single partner for all digital needs.
            </p>
            <div v-fade-in class="flex justify-center flex-wrap md:flex-nowrap gap-4">
                  <NuxtLink :to="{ name: 'contact', query: { 'type': 'custom' } }"
                    class="px-8 py-3 w-full md:w-auto text-lg font-medium rounded-md text-white bg-global hover:bg-global transition duration-150 shadow-lg">
                        Request Custom Project
                  </NuxtLink>
                  <NuxtLink :to="{ name: 'products' }"
                    class="px-8 py-3 w-full md:w-auto text-lg font-medium shadow-md outline rounded-md dark:text-global-50 bg-body hover:bg-slate-800 hover:text-white hover:outline-transparent hover:dark:text-white transition duration-150">
                        View Core SaaS Products
                  </NuxtLink>
            </div>
      </ESSection>
      <ESSection>
            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">

                  <SimpleCard v-fade-in :icon="AtomIcon" header-text="local experise"
                    text="We are softview ghana, building solutions localized for regulatory compliance, currency (GHS), and the unique operational context of Ghana." />

                  <SimpleCard v-fade-in :icon="CpuIcon" header-text="Modern Technology"
                    text="Built with the latest stack (Nuxt.js, Vue.js, AdonisJS, Tailwind css, Laravel), ensuring high performance, speed, and reliability." />

                  <SimpleCard v-fade-in :icon="HandshakeIcon" header-text="Dedicated Support"
                    text=" We offer dedicated on-the-ground support, implementation assistance, and training across the country." />
            </div>
      </ESSection>

      <ESSection>
            <section class="py-12 text-center">
                  <h2 v-fade-in class="text-2xl lg:text-3xl font-extrabold dark:text-white mb-4">
                        Ready to Digitalize with the Right Partner?
                  </h2>
                  <p v-fade-in class="text-lg  mb-8">
                        Request a demo specific to your sector or discuss your custom software needs.
                  </p>
                  <div v-fade-in class="flex justify-center flex-wrap md:flex-nowrap basis-full gap-4">
                        <NuxtLink :to="{ name: 'contact', query: { 'type': 'consultation' } }"
                          class="px-8 py-3 w-full md:w-auto text-lg font-medium rounded-md text-white bg-global hover:opacity-90 transition duration-150 shadow-lg">
                              Request Demo
                        </NuxtLink>
                        <NuxtLink :to="{ name: 'products' }"
                          class="px-8 py-3 w-full md:w-auto text-lg font-medium shadow-md outline outline-global-50 rounded-md dark:text-white bg-body hover:bg-slate-800 hover:text-white hover:outline-0 hover:dark:text-white transition duration-150">
                              View All Products
                        </NuxtLink>
                  </div>
            </section>
      </ESSection>

</template>

<style scoped></style>