<script lang="ts" setup>

      import { LightbulbIcon } from 'lucide-vue-next';
      import constants from '~/constants';
      useSeoMeta({
            title: 'About • Softview Ghana',
            ogTitle: 'About • Softview Ghana',
            description: 'We are more than just a tech firm; Softview Ghana is a forward-thinking software development firm committed to developing and delivering specialized software solutions that address the unique challenges of the Ghanaian market.',
            ogDescription: 'We are more than just a tech firm; Softview Ghana is a forward-thinking software development firm committed to developing and delivering specialized software solutions that address the unique challenges of the Ghanaian market.',
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
                  { rel: 'canonical', href: constants.APP_URL + '/about' }
            ]
      });
</script>

<template>
      <ESSection>
            <div class="mx-auto max-w-2xl py-8 sm:py-16 lg:py-32 overflow-hidden">

                  <div v-fade-in class="text-center mb-16 pt-10">
                        <h1 class="text-2xl md:text-3xl font-extrabold tracking-tight text-global-50">
                              The Foundation of Softview Ghana
                        </h1>
                        <h1 class="mt-4 text-xl max-w-3xl mx-auto">
                              Innovating the future of digital services for Ghana and beyond.
                        </h1>
                  </div>
            </div>

            <div v-fade-in class="max-w-3xl mx-auto">
                  <p class="font-semibold text-2xl text-center lg:text-left uppercase text-global-50 tracking-wider">
                        Our Foundation
                  </p>
                  <p class="mt-4  leading-relaxed">
                        Founded in the heart of Ghana, softview ghana was born from a deep commitment to
                        solve pressing local challenges through world-class technology. We believe that
                        tailored, powerful software can be the catalyst for transformative growth in sectors
                        like healthcare, education, and governance.
                  </p>
                  <p class="mt-4  leading-relaxed">
                        We are more than just a tech firm; we are architects of digital solutions, focused
                        on creating reliable, secure, and intuitive platforms that serve the unique needs of
                        the Ghanaian market.
                  </p>
            </div>

      </ESSection>

      <ESSection>
            <div v-fade-in class="py-4 md:py-8">
                  <h6 class="text-center capitalize text-2xl font-semibold dark:text-white">
                        Mission & Core Values
                  </h6>
            </div>
            <AboutCards />
      </ESSection>

      <TeamMembers />

      <ESSection>
            <div
              class="w-full mx-auto mt-20 text-center p-8 rounded-xl backdrop-blur-xs border border-slate-500/20 dark:bg-slate-400/10 bg-slate-300/40">
                  <h2 v-fade-in class="text-2xl md:text-3xl font-bold dark:text-white">
                        Ready to Digitalize Your Institution?
                  </h2>
                  <p v-fade-in class="mt-4">
                        Choosing softview ghana means partnering with a team that understands the local landscape
                        and delivers software built for impact. We are committed to your success.
                  </p>
                  <NuxtLink v-fade-in exact-active-class=" " active-class=" " :to="{ name: 'contact' }"
                    class="mt-6 inline-block sm:w-max w-full bg-global text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-global/90 transition duration-300 transform hover:scale-105">
                        Get Started Today
                  </NuxtLink>
            </div>
      </ESSection>
</template>
<style scoped></style>