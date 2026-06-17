<script lang="ts" setup>
      import { LoaderIcon } from 'lucide-vue-next';
      import constants from '~/constants';

      useSeoMeta({
            title: 'Contact | Softview Ghana',
            ogTitle: 'Contact | Softview Ghana',
            description: 'Get in Touch with softview ghana. Whether you need a demo for our specialized SaaS products, or you are planning a custom web or mobile app, or require expert support for your computer and network systems, softview ghana is here to help.',
            ogDescription: 'Get in Touch with softview ghana. Whether you need a demo for our specialized SaaS products, or you are planning a custom web or mobile app, or require expert support for your computer and network systems, softview ghana is here to help.',
            twitterCard: 'summary_large_image',
            ogImage: {
                  url: constants.APP_URL + '/icon-192.png'
            },
            ogUrl: constants.APP_URL + '/contact',
            ogType: 'website',
            ogSiteName: 'Contact | Softview Ghana',
      });

      useHead({
            link: [
                  { rel: 'canonical', href: constants.APP_URL + '/contact' }
            ]
      });

      const form = reactive({
            fullName: '',
            email: '',
            organization: '',
            phone: '',
            interest: '',
            message: ''
      });

      const isSubmitting = ref(false);

      const responseMessage = ref('');

      const handleFormSubmit = () => {
            isSubmitting.value = true;
            // Handle form submission logic here (e.g., send data to an API)
            console.log('Form submitted:', form);
            setTimeout(() => {
                  responseMessage.value = 'Your inquiry has been submitted successfully!';
                  // Reset form fields
                  form.fullName = '';
                  form.email = '';
                  form.organization = '';
                  form.phone = '';
                  form.interest = '';
                  form.message = '';
                  isSubmitting.value = false;
            }, 1000);

            setTimeout(() => {
                  responseMessage.value = '';
            }, 5000);

      }
</script>

<template>
      <ESSection>
            <div class="mx-auto max-w-2xl py-8 sm:pt-16 lg:pt-32 overflow-hidden">
                  <h1 v-fade-in class="text-2xl md:text-3xl font-bold text-global-50 text-center">
                        Get in Touch with Softview Ghana
                  </h1>
            </div>
      </ESSection>
      <div
        class="mx-auto w-full overflow-hidden backdrop-blur-2xl backdrop-opacity-30 my-8 py-8 md:my-16 border-y bg-slate-200/90 border-slate-300/40 dark:border-slate-500/20 dark:bg-slate-500/10 rounded-none">
            <ESSection>
                  <div class="max-w-2xl mx-auto">
                        <p v-fade-in class="mt-4 text-justify text-lg">
                              Whether you need a demo for our specialized SaaS products, are planning a custom web or
                              mobile app, or require expert support for your computer and network systems, Softview
                              Ghana is here to help.
                        </p>

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
      <ESSection class="lg:my-12">
            <div class="grid lg:grid-cols-5 gap-12">
                  <div class="lg:col-span-2 space-y-8">
                        <h2 class="text-2xl font-bold">Contact Details</h2>
                        <div class="flex items-start">
                              <svg class="w-6 h-6 text-global-50 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              <div class="space-y-2">
                                    <h3 class="font-semibold text-global dark:text-body">Office Location</h3>
                                    <p class="">
                                          Bubiashie, Swanlake Oldstop
                                          <br>
                                          GA-309-5296
                                          <br>
                                          Accra, Ghana
                                    </p>
                              </div>
                        </div>

                        <div class="flex items-start">
                              <svg class="w-6 h-6 text-global-50 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.144a11.002 11.002 0 0010.518 10.518l1.144-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                    </path>
                              </svg>
                              <div class="space-y-2">
                                    <h3 class="font-semibold text-global dark:text-body">Phone & WhatsApp</h3>
                                    <p class="">General Enquiries:
                                          <NuxtLink href="tel:+233549289243" external
                                            class="select-all hover:text-global">
                                                +233 54 928 9243
                                          </NuxtLink>
                                    </p>
                                    <p class="">Support Hotline:
                                          <NuxtLink href="tel:+233543093942" external
                                            class="select-all hover:text-global">
                                                +233 54 309 3942
                                          </NuxtLink>
                                    </p>
                              </div>
                        </div>

                        <div class="flex items-start">
                              <svg class="w-6 h-6 text-global-50 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                              </svg>
                              <div class="space-y-2">
                                    <h3 class="font-semibold text-global dark:text-body">Email</h3>
                                    <p class="">
                                          <NuxtLink href="mailto:info@softviewghana.com" external
                                            class="hover:text-global-50 select-all">
                                                info@softviewghana.com
                                          </NuxtLink>
                                          (General)
                                    </p>
                                    <p class="">
                                          <NuxtLink href="mailto:support@softviewghana.com" external
                                            class="hover:text-global-50 select-all">
                                                support@softviewghana.com
                                          </NuxtLink>
                                          (Technical)
                                    </p>
                              </div>
                        </div>
                  </div>

                  <div class="lg:col-span-3">
                        <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <form @submit.prevent="handleFormSubmit" class="space-y-6">
                              <div class="grid sm:grid-cols-2 gap-6">
                                    <TextInput required label="full name *" placeholder="enter full name here" />
                                    <TextInput required label="work/personal email *" type="email"
                                      placeholder="enter personal/work email address" />
                              </div>

                              <div class="grid sm:grid-cols-2 gap-6">
                                    <TextInput label="organization name" placeholder="enter organization name" />
                                    <TextInput required label="phone number *" type="tel"
                                      placeholder="enter phone number" />
                              </div>

                              <div>
                                    <label for="interest" class="block text-sm font-medium">
                                          What is your primary interest? *
                                    </label>
                                    <select id="interest" name="interest" required
                                      class="bg-inherit appearance-none! [-webkit-appearance:none]! [-moz-appearance:none]! inline-block w-full border-0 rounded-md shadow-sm p-3! outline outline-global focus:outline-2 focus:outline-global-50 focus:ring-0 focus:border-0">
                                          <option class="bg-body" disabled selected>-- Select an option --</option>
                                          <option class="bg-body" value="">Request Demo: eSchool Ghana / SBA</option>
                                          <!-- <option class="bg-body" value="">Request Demo: Clinic Plus (Premises)</option> -->
                                          <!-- <option class="bg-body" value="">Request Demo: Pharma Plus</option> -->
                                          <!-- <option class="bg-body" value="">Request Demo: Vote360 (SaaS)</option> -->
                                          <option class="bg-body" value="">General Sales Enquiry</option>
                                          <option class="bg-body" value="">Technical Support</option>
                                          <option class="bg-body" value="">Partnership Inquiry</option>
                                    </select>
                              </div>

                              <div>
                                    <label for="message" class="block text-sm font-medium">
                                          How can we help you? *
                                    </label>
                                    <textarea required id="message" name="message" rows="4"
                                      placeholder="Write your request here"
                                      class="mt-1 bg-inherit appearance-none! [-webkit-appearance:none]! [-moz-appearance:none]! inline-block w-full border-0 rounded-md shadow-sm p-3 outline outline-global focus:outline-2 focus:outline-global-50 focus:ring-0 focus:border-0"></textarea>
                              </div>

                              <div class="flex items-center justify-end w-full">
                                    <button type="submit" :disabled="isSubmitting"
                                      class="py-3 sm:px-5 text-center text-lg w-full sm:w-auto inline-flex items-center justify-center-safe gap-3 border-0 rounded-md shadow-sm text-md font-medium text-white bg-global hover:bg-global-50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
                                          <span class="" v-if="isSubmitting">
                                                <LoaderIcon class="animate-spin" />
                                          </span>
                                          <span class="">
                                                Submit Inquiry
                                          </span>
                                    </button>
                              </div>

                        </form>
                        <div v-if="responseMessage" class="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                              {{ responseMessage }}
                        </div>
                  </div>
            </div>
      </ESSection>
</template>

<style scoped></style>