<script lang="ts" setup>
      import { ArrowUpToLineIcon } from 'lucide-vue-next';

      const isShown = ref(false);

      const handleScroll = () => {
            if (window && window.scrollY > 405) {
                  isShown.value = true
            } else {
                  isShown.value = false
            }
      }

      onMounted(() => document.addEventListener('scroll', handleScroll))
      onUnmounted(() => document.removeEventListener('scroll', handleScroll))

      const handleClick = () => {
            if (typeof window === 'undefined') return;
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            })
      }
</script>

<template>
      <ClientOnly>
            <Teleport to="body">
                  <Transition name="fade" mode="out-in">
                        <div v-if="isShown" @click="handleClick" title="Go to top"
                          class="fixed overflow-hidden z-12 p-2 bottom-6 md:bottom-10 right-6 md:right-20 backdrop-blur-xs border border-slate-500/20 dark:bg-slate-400/10 bg-slate-400/50 rounded-md cursor-pointer">
                              <ArrowUpToLineIcon class="h-6 md:h-8 w-auto text-global dark:text-white" />
                        </div>
                  </Transition>
            </Teleport>
      </ClientOnly>
</template>

<style scoped></style>