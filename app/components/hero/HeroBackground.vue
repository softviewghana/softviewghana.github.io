<template>
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
            <!-- Base Gradient -->
            <div class="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950" />

            <!-- Grid -->
            <div class="hero-grid absolute inset-0 opacity-[0.05]" />

            <!-- Top Glow -->
            <div
              class="absolute -top-40 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full bg-primary/20 blur-[140px] animate-pulse-slow" />

            <!-- Left Orb -->
            <div class="hero-orb absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-sky-500/10 blur-[120px]"
              style="animation-delay: 0s;" />

            <!-- Right Orb -->
            <div class="hero-orb absolute right-[6%] top-[28%] h-80 w-80 rounded-full bg-violet-500/10 blur-[150px]"
              style="animation-delay: 2s;" />

            <!-- Bottom Orb -->
            <div class="hero-orb absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[130px]"
              style="animation-delay: 4s;" />

            <!-- Noise -->
            <div class="hero-noise absolute inset-0 opacity-[0.03]" />

            <!-- Vignette -->
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      </div>
</template>

<style scoped>
      .hero-grid {
            background-image:
                  linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, .06) 1px, transparent 1px);

            background-size: 42px 42px;
      }

      .hero-noise {
            background-image:
                  radial-gradient(circle at 25% 25%, rgba(255, 255, 255, .08) 1px, transparent 1px),
                  radial-gradient(circle at 75% 60%, rgba(255, 255, 255, .05) 1px, transparent 1px),
                  radial-gradient(circle at 40% 80%, rgba(255, 255, 255, .06) 1px, transparent 1px);

            background-size:
                  120px 120px,
                  180px 180px,
                  150px 150px;
      }

      .hero-orb {
            animation: floatOrb 18s ease-in-out infinite;
      }

      .animate-pulse-slow {
            animation: pulseGlow 10s ease-in-out infinite;
      }

      @keyframes floatOrb {

            0% {
                  transform: translate3d(0, 0, 0) scale(1);
            }

            25% {
                  transform: translate3d(18px, -18px, 0) scale(1.05);
            }

            50% {
                  transform: translate3d(-12px, 16px, 0) scale(.96);
            }

            75% {
                  transform: translate3d(10px, 8px, 0) scale(1.03);
            }

            100% {
                  transform: translate3d(0, 0, 0) scale(1);
            }
      }

      @keyframes pulseGlow {

            0% {
                  opacity: .55;
                  transform: translateX(-50%) scale(1);
            }

            50% {
                  opacity: .9;
                  transform: translateX(-50%) scale(1.08);
            }

            100% {
                  opacity: .55;
                  transform: translateX(-50%) scale(1);
            }
      }

</style>