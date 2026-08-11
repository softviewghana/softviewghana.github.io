/**
 * Custom Directive: v-fade-in
 * Applies fade-up animation and uses Intersection Observer for an efficient,
 * one-time trigger when the element scrolls into view.
 * * Logic mimics the provided useInView composable:
 * - If element is visible on load, it starts visible (no animation needed).
 * - If element is below the fold, it fades up on scroll and stops observing.
 */
// plugins/fade-in.client.ts

export default defineNuxtPlugin((nuxtApp) => {
      const observerMap = new WeakMap<HTMLElement, IntersectionObserver>();

      nuxtApp.vueApp.directive("fade-in", {
            mounted(el: HTMLElement, binding) {
                  const options = binding.value?.options ?? {
                        threshold: 0.1,
                  };

                  el.classList.add(
                        "transition-all",
                        "duration-1000",
                        "ease-out",
                        "opacity-0",
                        "translate-y-10"
                  );

                  const observer = new IntersectionObserver((entries) => {
                        const entry = entries[0];

                        if (!entry?.isIntersecting) {
                              return;
                        }

                        el.classList.remove(
                              "opacity-0",
                              "translate-y-10"
                        );

                        el.classList.add(
                              "opacity-100",
                              "translate-y-0"
                        );

                        observer.unobserve(el);
                        observerMap.delete(el);
                  }, options);

                  observerMap.set(el, observer);
                  observer.observe(el);
            },

            unmounted(el: HTMLElement) {
                  const observer = observerMap.get(el);

                  if (observer) {
                        observer.disconnect();
                        observerMap.delete(el);
                  }
            },
      });
});
