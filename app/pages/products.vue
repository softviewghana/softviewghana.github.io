<script lang="ts" setup>
      import constants from '~/constants';

      useSeoMeta({
            title: 'products • softview ghana'.toString().toUpperCase(),
            ogTitle: 'products • softview ghana'.toString().toUpperCase(),
            description: 'Innovative SaaS Products Built for the Ghanaian Market. Explore our suite of specialized software applications designed for high performance, localized relevance, and unparalleled user experience across healthcare, education, and digital governance.',
            ogDescription: 'Innovative SaaS Products Built for the Ghanaian Market. Explore our suite of specialized software applications designed for high performance, localized relevance, and unparalleled user experience across healthcare, education, and digital governance.',
            twitterCard: 'summary_large_image',
            ogImage: {
                  url: constants.APP_URL + '/icon-192.png',
                  type: 'image/png',
                  width: 192,
                  height: 192,
                  alt: 'softview ghana logo'
            },
            ogUrl: constants.APP_URL + '/products',
            ogType: 'website'
      });
      useHead({
            link: [
                  { rel: 'canonical', href: constants.APP_URL + '/products' }
            ]
      });
</script>

<template>
      <ESSection>
            <div class="mx-auto max-w-2xl py-8 sm:pt-16 lg:pt-32 overflow-hidden">
                  <h1 v-fade-in class="text-2xl md:text-3xl font-bold text-global-50 text-center">
                        Innovative SaaS Products Built for the Ghanaian Market.
                  </h1>
            </div>
      </ESSection>
      <div
        class="mx-auto w-full overflow-hidden backdrop-blur-2xl backdrop-opacity-30 my-8 py-8 md:my-16 border-y bg-slate-200/90 border-slate-300/40 dark:border-slate-500/20 dark:bg-slate-500/10 rounded-none">
            <ESSection>
                  <div class="max-w-2xl mx-auto">
                        <p v-fade-in class="mt-4 text-justify text-lg">
                              Explore our suite of specialized software applications designed for high performance,
                              localized relevance, and unparalleled user experience across healthcare, education, and
                              digital governance.
                        </p>
                        <div v-fade-in class="mt-6 text-center">
                              <NuxtLink :to="{ hash: '#saas-products' }" active-class=" " exact-active-class=" "
                                class="dark:text-white text-global text-lg font-semibold transition duration-300">
                                    Explore Our SaaS Projects Below ↓
                              </NuxtLink>
                        </div>
                  </div>
                  <div aria-hidden="true"
                    class="blur-3xl transform-gpu -z-10 right-0 -top-2 sm:-top-24 absolute opacity-5 dark:opacity-25">
                        <div
                          style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
                          class="dark:to-indigo-500 dark:from-cyan-400 from-global-50 to-cyan-300 bg-linear-to-tr w-351 aspect-1404/767">
                        </div>
                  </div>
            </ESSection>
      </div>
      <ESSection>
            <h3 v-fade-in
              class="lg:text-3xl text-2xl text-center md:text-start font-bold flex items-center justify-center md:justify-start mb-6 text-global-50 dark:text-white">
                  Healthcare & Pharmacy Management
            </h3>
            <p v-fade-in class="text-lg lg:text-start text-center mb-8">
                  Driving efficiency and improving patient care quality across clinics and pharmacies
                  with specialized, compliant software.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 space-y-8 md:gap-12">
                  <ProductListCard name="Clinic Plus"
                    description="Comprehensive Health Information Management System (HIMS) for Clinics and Healthcare Providers."
                    :features="[
                        'Streamlines patient registration, appointments, and billing.',
                        'Secure Electronic Health Records (EHR) and E-Prescribing.',
                        'NHIS and localized insurance claims processing support.'
                  ]" target="Healthcare Providers" download-link="#" />
                  <ProductListCard name="Pharma Plus (Inventory & Sales)" target="Pharmacies & Dispensaries" :features="[
                        'Accurate Drug Inventory & Expiry Tracking',
                        'Point-of-Sale (POS) Transactions',
                        'Instant Sales Analytics'
                  ]" download-link="#" />
            </div>
      </ESSection>

      <ESSection class="mt-12">
            <h3 v-fade-in
              class="lg:text-3xl text-2xl text-center md:text-start font-bold flex items-center justify-center md:justify-start mb-6 text-global-50 dark:text-white">
                  Educational Systems
            </h3>
            <p v-fade-in class="text-lg lg:text-start text-center mb-8">
                  Integrated school management systems streamlining administration, academics, and
                  communication for schools across Ghana.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <ProductListCard name="Soft School Manager" link="//eschoolghana.com" link-name="explore" :features="[
                        'Student Information System (SIS)',
                        'Fee Collection & Tracking',
                        'Report Card Generation',
                        'Communication (SMS and Email)',
                        'Parental Portal (Mobile App)',
                        'Click on the button below to see all the features'
                  ]" target="Ghanaian Basic Schools" />
                  <ProductListCard name="eTerminal Report Manager" link="//terminal-report.eschoolghana.com"
                    link-name="explore" :features="[
                        'Pay As You Go Service',
                        'SMS and Email notifications for report cards',
                        'Automated reports generation',
                        'Report Card customization'
                  ]" target="Basic and Senior High Schools" />
            </div>
      </ESSection>
      <ESSection class="mt-12">
            <h3 v-fade-in
              class="lg:text-3xl text-2xl text-center md:text-start font-bold flex items-center justify-center md:justify-start mb-6 text-global-50 dark:text-white">
                  Digital Election Management
            </h3>
            <p v-fade-in class="text-lg lg:text-start text-center mb-8">
                  Providing secure, transparent, and convenient online voting platforms for private
                  institutions and associations.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <ProductListCard name="Vote360 (Online Voting System)" link="//eschoolghana.com" link-name="explore"
                    :features="[
                        'Secure Voter Verification and List Management',
                        'Tamper-Proof Balloting & Instant Tally',
                        'Detailed Audit Trails for Transparency',
                        'Click on the button below to see all the features'
                  ]" target="Unions, Associations, Corporate Bodies" />

            </div>
      </ESSection>

      <ESSection class="mt-12">
            <h3 v-fade-in class="lg:text-3xl text-2xl text-center mb-6 text-global-50 dark:text-white">
                  Technology & Development Standards
            </h3>
            <div v-fade-in class="grid md:grid-cols-3 gap-8 text-center">
                  <TechStackCard header-text="modern stack"
                    text="We use Vue.js, Nuxt.js, AdonisJS and Laravel to build fast, reactive, and scalable applications." />
                  <TechStackCard header-text="intuitive design"
                    text="Styling with Tailwind CSS ensures responsive, clean, and accessible user interfaces on every device." />
                  <TechStackCard header-text="ghanaian localization"
                    text="Solutions are built to handle local compliance, currency (GHS), and payment methods effectively." />
            </div>
      </ESSection>

      <ESSection>
            <div
              class="w-full mx-auto mt-20 text-center p-8 rounded-xl backdrop-blur-xs border border-slate-500/20 dark:bg-slate-400/10 bg-slate-300/40">
                  <h2 v-fade-in class="text-2xl md:text-3xl font-bold dark:text-white">
                        Ready to Digitize Your Operations?
                  </h2>
                  <p v-fade-in class="mt-4">
                        Get a personalized tour of the software solution that best fits your institution's needs.
                  </p>
                  <NuxtLink v-fade-in exact-active-class=" " active-class=" " :to="{ name: 'contact' }"
                    class="mt-6 inline-block sm:w-max w-full bg-global text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-global/90 transition duration-300 transform hover:scale-105">
                        Contact Our Sales Team
                  </NuxtLink>
            </div>
      </ESSection>
</template>

<style scoped></style>