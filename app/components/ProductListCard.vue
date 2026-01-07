<script lang="ts" setup>

      interface Props {
            name: string,
            description?: string,
            features: string[],
            link?: string,
            linkName?: string,
            downloadLink?: string,
            target?: string,
            onlinkClick?: () => void
      }
      const props = withDefaults(defineProps<Props>(), {
            linkName: 'Request a Demo'
      });
</script>

<template>

      <div class="relative py-4 flex flex-1 flex-col items-start justify-start space-y-6">

            <div class="relative w-full">
                  <h3 v-fade-in class="lg:text-3xl text-2xl  font-bold text-global-50 mb-2 text-center md:text-start">
                        {{ props.name }}
                  </h3>
                  <p v-fade-in class="lg:text-lg mb-6">
                        {{ props.description }}
                  </p>

                  <h4 v-fade-in class="text-xl font-semibold mb-3 text-center md:text-start" v-if="props.features?.length > 0">Key Benefits:</h4>
                  <ul v-fade-in class="space-y-3" v-if="props.features?.length > 0">
                        <li class="flex items-start" v-for="(feature, i) in props.features">
                              <svg class="w-5 h-5 mt-1 mr-2 text-global-50 shrink-0" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <span>
                                    {{ feature }}
                              </span>
                        </li>
                  </ul>
            </div>

            <div class="relative w-full" v-if="props.downloadLink || props.link || props.linkName">
                  <div class="flex flex-col justify-center md:flex-row md:justify-start gap-8">
                        <NuxtLink v-fade-in v-if="props.link" :href="props.link && props.link" target="_blank"
                          class="text-nowrap capitalize text-center py-3 px-8 w-full select-none cursor-pointer md:w-auto text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 shadow-lg">
                              {{ props.linkName }}
                        </NuxtLink>
                        <button v-fade-in v-else @click="props.onlinkClick"
                          class="text-nowrap text-center py-3 px-8 w-full md:w-auto select-none cursor-pointer text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 shadow-lg">
                              {{ props.linkName }}
                        </button>
                        <NuxtLink v-fade-in v-if="props.downloadLink" :href="props.downloadLink && props.downloadLink"
                          class="text-nowrap text-center px-8 py-3 w-full md:w-auto text-lg font-medium rounded-md text-white bg-transparent hover:bg-global outline outline-global-50 transition duration-150 shadow-lg">
                              Download Brochure
                        </NuxtLink>
                  </div>
            </div>
            <p v-fade-in class="text-sm pt-2">
                  Target: {{ props.target }}
            </p>
      </div>
</template>

<style scoped></style>