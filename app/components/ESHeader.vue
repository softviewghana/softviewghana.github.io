<script lang="ts" setup>
  import { ChevronDown, PieChartIcon } from 'lucide-vue-next';

  const isProductListShown = ref<boolean>(false);
  const isMenuShown = ref<boolean>(false);

  const year = ref<Date>(new Date);

  const { theme } = useTheme();

  // const fillColor = computed(() => theme.value === 'dark' ? 'white' : '#006837')

  const isSideNavOpen = ref<boolean>(false);

  const toggleSideNav = () => {
    isSideNavOpen.value = !isSideNavOpen.value
  }

  const router = useRouter();

  // Close menu on route change
  watch(() => router.currentRoute.value.path, () => {
    if (isSideNavOpen.value) toggleSideNav();
    if (isProductListShown.value) isProductListShown.value = !isProductListShown.value
  });

  watch(isSideNavOpen, (open) => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  })
</script>

<template>

  <header class="sticky top-0 z-50 shadow backdrop-blur-lg bg-body">
    <nav aria-label="Global"
      class="flex items-center justify-between py-3 px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-7xl">
      <div class="flex lg:flex-1 items-center">
        <NuxtLink :to="{ name: 'index' }" active-class=" " exact-active-class=" "
          class="-m-1.5 p-1.5 flex items-center gap-2">
          <span class="sr-only">Eaglesoft Logo</span>
          <Logo class="h-8" fill-color="var(--color-global-50)" />
          <span class="font-semibold capitalize dark:text-slate-50">
            softview ghana
          </span>
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" @click="toggleSideNav"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-white">
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
            aria-hidden="true" class="size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink :href="{ name: 'index' }" active-class="dark:text-global-50! text-global-50"
          exact-active-class="dark:text-global-50! text-global-50"
          class="text-sm font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50">
          Home
        </NuxtLink>
        <NuxtLink :href="{ name: 'services' }" active-class="dark:text-global-50! text-global-50"
          exact-active-class="dark:text-global-50! text-global-50"
          class="text-sm font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50">
          Services
        </NuxtLink>
        <div class="relative" @mouseover="isProductListShown = true" @mouseleave="isProductListShown = false">
          <NuxtLink :to="{ name: 'products' }" active-class="dark:text-global-50! text-global-50"
            exact-active-class="dark:text-global-50! text-global-50"
            class="text-sm font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50 flex">
            <span>
              Products
            </span>
            <ChevronDown />
          </NuxtLink>
          <Transition name="fade" mode="in-out">
            <div v-if="isProductListShown"
              class="absolute z-5 -left-full w-dvw max-w-md shadow-2xl bg-body rounded-2xl border border-slate-200 dark:border-slate-600">
              <div class="flex flex-col gap-4 p-4">
                <FlexListWithIcon :to="{ name: 'products', hash: '#smart-sms' }" heading="softview school manager"
                  :icon="PieChartIcon" text="An all-in-one smart school management system" />

                <FlexListWithIcon :to="{ name: 'products', hash: '#vote-360-online' }" heading="vote 360 online"
                  :icon="PieChartIcon" text="Organize swift, secure and transparent elections" />

                <FlexListWithIcon :to="{ name: 'products', hash: '#echurch' }" heading="softview church suite"
                  :icon="PieChartIcon" text="streamline church operations with ease and enhance community engagement" />
              </div>
            </div>
          </Transition>
        </div>
        <NuxtLink :href="{ name: 'about' }" active-class="dark:text-global-50! text-global-50"
          exact-active-class="dark:text-global-50! text-global-50"
          class="text-sm font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50">
          About
        </NuxtLink>
        <NuxtLink :href="{ name: 'contact' }" active-class="dark:text-global-50! text-global-50"
          exact-active-class="dark:text-global-50! text-global-50"
          class="text-sm font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50">
          Contact
        </NuxtLink>
      </div>
      <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink :to="{ name: 'index' }" class="font-semibold capitalize dark:text-slate-50">
          softview ghana
        </NuxtLink>
      </div> -->
    </nav>
    <ClientOnly>
      <Teleport to="body">
        <Transition name="slide-in" mode="in-out">
          <div @click.self="isSideNavOpen = false" v-if="isSideNavOpen" tabindex="0"
            class="fixed flex justify-end inset-0 z-50 focus:outline-none lg:hidden w-full h-dvh overflow-hidden backdrop-blur-sm bg-slate-800/20">
            <div class="relative w-full h-full overflow-hidden bg-body sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div class="flex items-center justify-between px-6 shadow-md py-3">
                <NuxtLink :to="{ name: 'index' }" active-class=" " exact-active-class=" "
                  class="-m-1.5 p-1.5 flex items-center gap-2">
                  <span class="sr-only">Eaglesoft Logo</span>
                  <Logo class="h-8" fill-color="var(--color-global-50)" />
                  <span class="font-semibold capitalize dark:text-slate-50">
                    softview ghana
                  </span>
                </NuxtLink>
                <button type="button" @click="toggleSideNav" class="-m-2.5 rounded-md p-2.5">
                  <span class="sr-only">Close menu</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-slot="icon"
                    aria-hidden="true" class="size-6">
                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div class="p-6 flow-root">
                <div class="-my-6 divide-y divide-white/10">
                  <div class="space-y-2 py-6">
                    <NuxtLink :href="{ name: 'index' }" active-class="dark:text-global-50! text-global-50"
                      exact-active-class="dark:text-global-50! text-global-50"
                      class="text-sm block px-3 -mx-3 py-2 font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50">
                      Home
                    </NuxtLink>
                    <NuxtLink :href="{ name: 'services' }" active-class="dark:text-global-50! text-global-50"
                      exact-active-class="dark:text-global-50! text-global-50"
                      class="text-sm block  px-3 -mx-3 py-2 font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50">
                      Services
                    </NuxtLink>
                    <div class="relative block" @mouseover="isProductListShown = true"
                      @mouseleave="isProductListShown = false">
                      <NuxtLink :to="{ name: 'products' }" active-class="dark:text-global-50! text-global-50"
                        exact-active-class="dark:text-global-50! text-global-50"
                        class="text-sm font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50 flex justify-between items-center">
                        Products
                        <span @click.prevent="isMenuShown = !isMenuShown">
                          <ChevronDown class="dark:text-slate-200/80 relative" />
                        </span>
                      </NuxtLink>
                      <Transition name="fade" mode="in-out">
                        <div v-if="isMenuShown"
                          class="relative dark:bg-slate-700/10 z-5 min-w-full shadow bg-transparent rounded-2xl border border-none dark:border-slate-600 backdrop-blur-md">
                          <div class="flex flex-col gap-4 p-4 relative ">
                            <FlexListWithIcon :to="{ name: 'products', hash: '#smart-sms' }"
                              heading="softview school manager" :icon="PieChartIcon"
                              text="An all-in-one smart school management system" />

                            <FlexListWithIcon :to="{ name: 'products', hash: '#vote-360-online' }"
                              heading="vote 360 online" :icon="PieChartIcon"
                              text="Organize swift, secure and transparent elections" />

                            <FlexListWithIcon :to="{ name: 'products', hash: '#echurch' }" heading="softview church suite"
                              :icon="PieChartIcon"
                              text="streamline church operations with ease and enhance community engagement" />
                          </div>
                        </div>
                      </Transition>
                    </div>
                    <NuxtLink :href="{ name: 'about' }" active-class="dark:text-global-50! text-global-50"
                      exact-active-class="dark:text-global-50! text-global-50"
                      class="text-sm block  px-3 -mx-3 py-2 font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50">
                      About
                    </NuxtLink>
                    <NuxtLink :href="{ name: 'contact' }" active-class="dark:text-global-50! text-global-50"
                      exact-active-class="dark:text-global-50! text-global-50"
                      class="text-sm block  px-3 -mx-3 py-2 font-semibold dark:text-slate-200 hover:text-global dark:hover:text-global-50">
                      Contact
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-6 bg-body text-center">
                <p class="text-body text-sm">
                  &COPY; {{ year.getFullYear() }}
                  softview ghana. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<style scoped></style>