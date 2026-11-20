<script lang="ts" setup>
      import { ArrowRight, SparklesIcon, SquareArrowOutUpRight } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      // const organization = useOrgSchema();

      // useJsonLD(organization, 'organization');

      // useJsonLD({
      //       '@context': 'https://schema.org',
      //       '@type': 'WebSite',
      //       '@id': CONSTANTS.APP_URL + '/#website',
      //       name: 'Softview Ghana',
      //       url: CONSTANTS.APP_URL,
      //       description: 'Softview Ghana builds custom software, web applications, mobile apps, cloud solutions, and IT infrastructure for businesses across Ghana and Africa.'
      // });

      usePageSeo({
            title: CONSTANTS.APP_NAME,
            description: "Softview Ghana builds custom software, web applications, mobile apps, cloud solutions, and IT infrastructure for businesses across Ghana and Africa.",
            path: '/',
      });
</script>

<template>
      <!-- <section class="relative overflow-hidden"> -->
      <BaseContainer>
            <div class="grid grid-cols-1 items-center lg:items-start lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-16 mt-6 sm:mt-10">
                  <div class="flex flex-col items-start">
                        <div class="w-full flex justify-center items-center">

                              <div class="flex gap-2 items-center flex-nowrap rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 
                                    text-sm font-medium text-primary" v-fadeIn>
                                    <SparklesIcon />
                                    <span>
                                          {{ CONSTANTS.APP_NAME }}
                                    </span>
                              </div>
                        </div>
                        <h1 v-fadeIn
                          class="mt-6 text-2xl md:text-4xl font-semibold leading-[1.14] text-primary
                                tracking-tight
                                text-center sm:text-start transition-all duration-1000 ease-out opacity-100 translate-y-0">
                              We're innovating the future of digital services
                        </h1>
                        <p v-fadeIn
                          class="mt-5 max-w-lg text-lg leading-8 text-muted transition-all duration-1000 ease-out opacity-100 translate-y-0">
                              At <span class="text-primary">Softview Ghana</span>, we design and develop custom
                              software, web applications, mobile
                              apps, cloud infrastructure, and digital solutions that help organizations work
                              smarter and scale with confidence.
                        </p>
                        <div v-fadeIn
                          class="mt-8 flex flex-col w-full sm:w-auto gap-5 transition-all duration-1000 ease-out opacity-100 translate-y-0">
                              <BaseButton block variant="primary">
                                    Start Your Project
                                    <ArrowRight :size="16" />
                              </BaseButton>
                              <BaseButton variant="outline"
                                class="border-border bg-background shadow hover:text-primary text-white" block>
                                    Explore Our Services
                                    <SquareArrowOutUpRight :size="16" />
                              </BaseButton>
                        </div>
                  </div>
                  <Hero v-fadeIn />
            </div>
      </BaseContainer>
      <!-- </section> -->
      <TrustedTechnologyPartner />
      <OurServices />
      <WhySoftviewGhana />
      <FeatureProducts />
      <DevelopmentProcess />
      <!-- <HomeCTA /> -->
</template>

<style scoped></style>