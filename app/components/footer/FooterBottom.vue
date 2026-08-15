<script setup lang="ts">

      const legalLinks = [
            {
                  label: 'Privacy Policy',
                  href: '/privacy-policy',
                  // href: '#'
            },
            {
                  label: 'Terms of Service',
                  href: '/terms',
                  // href: '#'
            },
            {
                  label: 'Cookies',
                  // href: '/cookies',
                  href: '#'
            },
      ]
</script>

<template>
      <section class="mx-auto max-w-7xl px-6 py-6 mb-6">

            <div
                class="flex flex-col justify-items-center gap-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">

                  <!-- Brand -->

                  <div class="order-3 flex flex-col md:items-start items-center justify-center">

                        <p class="text-white/70">
                              © {{ new Date().getFullYear() }} Softview Ghana.
                        </p>

                        <p class="mt-2">
                              Crafted with precision by
                              <NuxtLink class="text-primary hover:text-white" target="_blank" title="Code with Kingsley"
                                  href="https://kingsley.softviewghana.com" external active-class=""
                                  exact-active-class="">
                                    Kingsley
                              </NuxtLink>
                        </p>

                  </div>


                  <!-- Legal -->

                  <nav class="order-2 flex flex-col/ items-center justify-center flex-wrap gap-6 lg:order-3">

                        <NuxtLink v-for="link in legalLinks" :key="link.label" :to="link.href"
                            class="transition-colors hover:text-white">
                              {{ link.label }}
                        </NuxtLink>

                  </nav>

            </div>

      </section>
</template>