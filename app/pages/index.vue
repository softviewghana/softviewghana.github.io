<script lang="ts" setup>
      import { ArrowRight, SparklesIcon, SquareArrowOutUpRight } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      const organization = useOrgSchema();

      useJsonLD(organization, 'organization');

      useJsonLD({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': CONSTANTS.APP_URL + '/#website',
            name: 'Softview Ghana',
            url: CONSTANTS.APP_URL,
            description: 'Softview Ghana builds custom software, web applications, mobile apps, cloud solutions, and IT infrastructure for businesses across Ghana and Africa.'
      });
</script>

<template>
      <section class="relative overflow-hidden py-16">
            <div class="absolute inset-0 bg-grid opacity-60" />
            <div class="absolute inset-0 bg-noise" />
            <BaseContainer>
                  <div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
                        <div class="flex flex-col items-start">
                              <div class="inline-flex content-center items-center gap-2 
                                rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 
                                text-sm font-medium text-primary transition-all duration-1000 
                                ease-out opacity-100 translate-y-0">
                                    <SparklesIcon />
                                    <span>
                                          {{ CONSTANTS.APP_NAME }}
                                    </span>
                              </div>
                              <h1
                                class="mt-6 text-2xl md:text-4xl font-semibold leading-[1.14] text-primary
                                tracking-tight text-foreground
                                text-center sm:text-start transition-all duration-1000 ease-out opacity-100 translate-y-0">
                                    We're innovating the future of digital services
                              </h1>
                              <p
                                class="mt-5 max-w-lg text-lg leading-8 text-muted transition-all duration-1000 ease-out opacity-100 translate-y-0">
                                    At <span class="text-primary">Softview Ghana</span>, we design and develop custom
                                    software, web applications, mobile
                                    apps, cloud infrastructure, and digital solutions that help organizations work
                                    smarter and scale with confidence.
                              </p>
                              <div
                                class="mt-8 flex flex-col w-full sm:flex-row gap-3 transition-all duration-1000 ease-out opacity-100 translate-y-0">
                                    <BaseButton block variant="primary">
                                          Start Your Project
                                          <ArrowRight :size="16" />
                                    </BaseButton>
                                    <BaseButton variant="outline" class="border-primary/90 shadow text-primary" block>
                                          Explore Our Services
                                          <SquareArrowOutUpRight :size="16" />
                                    </BaseButton>
                              </div>
                        </div>
                        <Hero />
                  </div>
            </BaseContainer>
      </section>
      <TrustedTechnologyPartner />
      <OurServices />
      <WhySoftviewGhana />
</template>

<style scoped></style>