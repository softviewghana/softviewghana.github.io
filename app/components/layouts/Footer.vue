<script setup lang="ts">
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/10 bg-slate-950">
    <!-- Background -->

    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

    <!-- Giant Typography -->

    <div aria-hidden="true"
      class="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 select-none text-[180px] font-black uppercase tracking-[0.25em] text-white/[0.02] xl:text-[240px]">
      ENGINEER
    </div>

    <!-- Grid -->

    <div class="absolute inset-0 opacity-[0.04]" style="
        background-image:
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
        background-size:48px 48px;
      " />

    <!-- Glow -->

    <div class="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

    <div class="relative z-10">

      <!-- Brand -->

      <FooterBrand />

      <!-- Navigation -->

      <FooterLinks />

      <!-- Technologies -->

      <FooterTechnologies />

      <!-- Engineering Journey -->

      <FooterJourney />

      <!-- Bottom -->

      <FooterBottom />

    </div>

  </footer>
</template>