<script setup lang="ts">
      import FacebookIcon from '../icons/FacebookIcon.vue';
      import GithubIcon from '../icons/GithubIcon.vue';
      import WhatsAppIcon from '../icons/WhatsAppIcon.vue';
      import XTwitterIcon from '../icons/XTwitterIcon.vue';


      const socials = [
            {
                  label: 'WhatsApp',
                  href: 'https://wa.me/233543093942',
                  icon: WhatsAppIcon,
            },
            {
                  label: 'GitHub',
                  href: 'https://github.com/softviewghana',
                  icon: GithubIcon,
            },
            // {
            //       label: 'X',
            //       href: '#',
            //       icon: XTwitterIcon,
            // },
            {
                  label: 'Facebook',
                  href: 'https://facebook.com/softviewghana',
                  icon: FacebookIcon,
            },
      ]

      const legalLinks = [
            {
                  label: 'Privacy Policy',
                  // href: '/privacy-policy',
                  href: '#'
            },
            {
                  label: 'Terms of Service',
                  // href: '/terms',
                  href: '#'
            },
            {
                  label: 'Cookies',
                  // href: '/cookies',
                  href: '#'
            },
      ]
</script>

<template>
      <section class="mx-auto max-w-7xl px-6 py-6">

            <div class="flex flex-col gap-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">

                  <!-- Brand -->

                  <div>

                        <p class="text-white/70">
                              © {{ new Date().getFullYear() }} Softview Ghana.
                        </p>

                        <p class="mt-2">
                              Crafted with precision by <NuxtLink class="text-primary hover:text-white" target="_blank" title="Code with Kingsley"
                                href="https://kingsley.softviewghana.com" external active-class="" exact-active-class="">
                                    Kingsley
                              </NuxtLink>
                        </p>

                  </div>


                  <!-- Legal -->

                  <nav class="order-3 flex flex-wrap gap-6 lg:order-0">

                        <NuxtLink v-for="link in legalLinks" :key="link.label" :to="link.href"
                          class="transition-colors hover:text-white">
                              {{ link.label }}
                        </NuxtLink>

                  </nav>


                  <!-- Social -->

                  <div class="flex items-center gap-3">

                        <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label"
                          target="_blank" rel="noopener noreferrer"
                          class="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary">

                              <component :is="social.icon"
                                class="size-5 transition-transform duration-300 group-hover:scale-110" />

                        </a>

                  </div>

            </div>

      </section>
</template>