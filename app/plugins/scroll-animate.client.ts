/**
 * Custom Directive: v-fade-in
 * Applies fade-up animation and uses Intersection Observer for an efficient,
 * one-time trigger when the element scrolls into view.
 * * Logic mimics the provided useInView composable:
 * - If element is visible on load, it starts visible (no animation needed).
 * - If element is below the fold, it fades up on scroll and stops observing.
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Use a map to store observers for cleanup, keyed by the element
  const observerMap = new WeakMap<HTMLElement, IntersectionObserver>();

  nuxtApp.vueApp.directive("fadeIn", {
    // The 'mounted' hook is called right before the element is inserted into the DOM.
    mounted(el: HTMLElement, binding) {
      // 1. Define the observer options, allowing customization via the directive value
      const options = binding.value?.options || { threshold: 0.1 };

      // 2. Define the observer logic
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];

        if (entry && entry.isIntersecting) {
          // Intersection occurred (either on load or after scrolling)

          // Apply the final, visible state classes
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-10");

          // Stop observing after the element has been seen once
          observer.unobserve(el);
          observerMap.delete(el); // Clean up map entry
        }

        // IMPORTANT: If isIntersecting is false on initial check (below the fold),
        // the initial classes added below will keep it hidden until scrolled.
      }, options);

      // 3. Set the Initial State and Transition
      // These classes define the transition and the starting state (hidden, slightly low).
      el.classList.add(
        "transition-all",
        "duration-1000",
        "ease-out",
        "opacity-0",
        "translate-y-10"
      );

      // 4. Start Observing
      // This immediately triggers the Intersection Observer's callback.
      // - If visible, the classes are immediately changed to the final state (no animation seen).
      // - If hidden, the initial classes keep it hidden until the scroll event.
      observer.observe(el);
      observerMap.set(el, observer);
    },

    // The 'unmounted' hook is called when the element is removed from the DOM.
    unmounted(el) {
      // 5. Cleanup: Disconnect the observer to prevent memory leaks.
      const observer = observerMap.get(el);
      if (observer) {
        observer.disconnect();
        observerMap.delete(el);
      }
    },
  });
});
