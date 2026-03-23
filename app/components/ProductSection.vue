<script setup lang="ts">
      interface Product {
            id: number;
            name: string;
            description: string;
            icon: string;
            href: string;
            features: string[];
            status: 'Live' | 'Beta' | 'Coming Soon';
      }

      const products: Product[] = [
            {
                  id: 1,
                  name: 'eSchool Ghana',
                  description: 'An all-in-one smart school management system for basic schools in Ghana',
                  icon: '',
                  href: 'https://eschoolghana.com',
                  status: 'Coming Soon',
                  features: ['Students Information Management', 'SBA Grading', 'Accounting Management', 'Library Management', 'Boarding Facility Management', 'Employee Management', 'Attendance Tracking', 'SMS and `Email Notifications`']
            },
            {
                  id: 2,
                  name: 'SBA Pro',
                  description: 'The smartest and efficient way of generating custom terminal report cards for students',
                  icon: '',
                  href: 'https://sba.eschoolghana.com',
                  status: 'Coming Soon',
                  features: ['Customizable Report Cards', 'Automated Grading', 'SMS/Email Notifications', 'Easy to Use Interface', 'Bulk Upload of Students records']
            },
            {
                  id: 3,
                  name: 'eChurch Flow',
                  description: 'streamline church operations with ease and enhance community engagement',
                  icon: '',
                  href: 'https://mychurch.softview.app',
                  status: 'Coming Soon',
                  features: ['Membership Management', 'Event Management', 'Donation & Tithe Tracking', 'Communication Tools (SMS/Email)', 'Financial Reporting', 'Multi-User Access with Roles']
            },
            // {
            //       id: 4,
            //       name: 'Vote360',
            //       description: 'Secure and transparent online voting platform for corporate, student, and community elections.',
            //       icon: '',
            //       href: 'https://vote360.gh',
            //       status: 'Coming Soon',
            //       features: ['Real-time Results', 'Voter Verification', 'USSD Interface']
            // },
            {
                  id: 5,
                  name: 'Pharma Plus',
                  description: 'Lightweight pharmacy inventory and sales management system for local drugstores and pharmacies.',
                  icon: '',
                  href: 'https://pharmaplus.softview.app',
                  status: 'Coming Soon',
                  features: ['Inventory Alerts', 'Sales Analytics', 'Supplier Management', 'Reporting & Analytics', 'Multi-store Management', 'User Role Management', `'POS Integration'`]
            }
      ];
</script>

<template>
      <ESSection>
            <div class="max-w-7xl mx-auto">

                  <!-- <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold  tracking-tight">
                              Solutions for the Digital Frontier
                        </h2>
                        <p class="mt-4 text-lg text-[oklch(0.4_0.02_240)] max-w-2xl mx-auto">
                              Empowering Ghanaian institutions with robust, scalable, and locally-integrated software
                              solutions.
                        </p>
                  </div> -->

                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div v-for="product in products" :key="product.id" v-fade-in
                          class="group relative bg-body p-8 rounded-3xl border border-[oklch(0.9_0.02_240)] dark:border-[oklch(0.4_0.02_240)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                              <span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold" :class="{
                                    'bg-green-100 text-green-700': product.status === 'Live',
                                    'bg-blue-100 text-blue-700': product.status === 'Beta',
                                    'bg-amber-100 text-amber-700': product.status === 'Coming Soon'
                              }">
                                    {{ product.status }}
                              </span>

                              <div class="flex items-start gap-6">
                                    <div class="text-5xl shrink-0" v-if="product.icon">
                                          {{ product.icon }}
                                    </div>

                                    <div class="flex-1">
                                          <h3
                                            class="text-2xl font-bold  group-hover:text-global-50 transition-colors">
                                                {{ product.name }}
                                          </h3>
                                          <p class="mt-3 leading-relaxed">
                                                {{ product.description }}
                                          </p>

                                          <ul class="mt-6 space-y-2">
                                                <li v-for="feature in product.features" :key="feature"
                                                  class="flex items-center text-sm">
                                                      <svg class="w-4 h-4 mr-2 text-global-50" fill="none"
                                                        stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2" d="M5 13l4 4L19 7" />
                                                      </svg>
                                                      {{ feature }}
                                                </li>
                                          </ul>

                                          <div class="mt-8">
                                                <a :href="product.href" target="_blank"
                                                  class="inline-flex items-center justify-center w-full md:w-auto sm:px-6 py-3 rounded-md font-bold bg-[oklch(0.3_0.1_250)] text-white hover:bg-global transition-all transform active:scale-95 shadow-lg shadow-[oklch(0.3_0.1_250/0.2)]">
                                                      Launch Platform
                                                      <svg
                                                        class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                      </svg>
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      </ESSection>
</template>