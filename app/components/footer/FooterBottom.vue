<script setup lang="ts">
import FacebookIcon from '../icons/FacebookIcon.vue';
import GithubIcon from '../icons/GithubIcon.vue';
import XTwitterIcon from '../icons/XTwitterIcon.vue';


      const socials = [
            // {
            //       label: 'LinkedIn',
            //       href: '#',
            //       icon: Lin,
            // },
            {
                  label: 'GitHub',
                  href: '#',
                  icon: GithubIcon,
            },
            {
                  label: 'X',
                  href: '#',
                  icon: XTwitterIcon,
            },
            {
                  label: 'Facebook',
                  href: '#',
                  icon: FacebookIcon,
            },
      ]

      const legalLinks = [
            {
                  label: 'Privacy Policy',
                  href: '/privacy-policy',
            },
            {
                  label: 'Terms of Service',
                  href: '/terms',
            },
            {
                  label: 'Cookies',
                  href: '/cookies',
            },
      ]
</script>

<template>
      <section class="mx-auto max-w-7xl px-6 py-8">

            <div class="flex flex-col gap-8 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between">

                  <!-- Brand -->

                  <div>

                        <p class="text-white/70">
                              © {{ new Date().getFullYear() }} Softview Ghana.
                        </p>

                        <p class="mt-2">
                              Crafted with precision in Ghana 🇬🇭
                        </p>

                  </div>


                  <!-- Legal -->

                  <nav class="order-3 flex flex-wrap gap-6 lg:order-none">

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