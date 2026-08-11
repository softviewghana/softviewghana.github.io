<script setup lang="ts">
      import {
            ArrowRight,
            CheckCircle2,
            GraduationCap,
            ShieldCheck,
            TrendingUp,
            Globe2,
      } from '@lucide/vue'
</script>

<template>
      <section class="relative sm:py-8">
            <div class="mx-auto max-w-7xl px-6">
                  <div class="relative overflow-hidden rounded-4xl border border-border bg-white/5 backdrop-blur-2xl">
                        <!-- Background Glow -->
                        <div
                          class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,.18),transparent_40%)]" />

                        <div class="grid items-center gap-12 lg:grid-cols-2">
                              <!-- Left Content -->
                              <div class="relative z-10 p-8 lg:p-12">
                                    <div class="flex items-center gap-3">
                                          <span
                                            class="inline-flex items-center gap-2 rounded-full border border-primary-hover/20 bg-primary-hover/10 px-4 py-2 text-sm font-medium text-primary">
                                                <span class="h-2 w-2 rounded-full bg-primary" />
                                                Featured Product
                                          </span>

                                    </div>

                                    <div class="mt-8">
                                          <h2 class="text-4xl font-bold tracking-tight text-white">
                                                eSchool Ghana
                                          </h2>

                                          <p class="mt-3 text-xl font-medium text-primary">
                                                The Modern School Operating System
                                          </p>
                                    </div>

                                    <p class="mt-6 text-lg leading-8">
                                          Designed specifically for <span class="font-medium text-primary">
                                                basic schools in Ghana</span>, eSchool Ghana helps administrators
                                          manage admissions, academics, attendance, communication, fees,
                                          examinations, and reporting from one integrated platform.
                                    </p>

                                    <div class="mt-8 grid gap-3 sm:grid-cols-2">
                                          <div class="flex items-center gap-2 text-white/80">
                                                <CheckCircle2 class="size-5 text-primary" />
                                                Admissions & Enrollment
                                          </div>

                                          <div class="flex items-center gap-2 text-white/80">
                                                <CheckCircle2 class="size-5 text-primary" />
                                                Attendance & Academics
                                          </div>

                                          <div class="flex items-center gap-2 text-white/80">
                                                <CheckCircle2 class="size-5 text-primary" />
                                                Fees & Payments
                                          </div>

                                          <div class="flex items-center gap-2 text-white/80">
                                                <CheckCircle2 class="size-5 text-primary" />
                                                Examinations & Reports
                                          </div>
                                    </div>

                                    <div class="mt-10 flex flex-wrap items-center gap-4">
                                          <NuxtLink to="https://eschoolghana.com" external target="_blank"
                                            class="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover">
                                                Discover eSchool Ghana
                                                <ArrowRight class="size-4" />
                                          </NuxtLink>

                                          <NuxtLink to="https://eschoolghana.com/watch-demo" external target="_blank"
                                            class="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                                Watch a Demo
                                          </NuxtLink>
                                    </div>

                                    <div class="mt-10 flex flex-wrap items-center gap-3 sm:gap-6 border-t border-white/10 pt-6">
                                          <div>
                                                <p class="text-lg sm:text-2xl font-bold text-white">100%</p>
                                                <p class="text-sm text-white/50">Cloud-based</p>
                                          </div>

                                          <div class="h-10 w-px bg-white/20" />

                                          <div>
                                                <p class="text-lg sm:text-2xl font-bold text-white">24/7</p>
                                                <p class="text-sm text-white/50">Accessible</p>
                                          </div>

                                          <div class="h-10 w-px bg-white/10" />

                                          <div>
                                                <p class="text-lg sm:text-2xl font-bold text-white">GES +</p>
                                                <p class="text-sm text-white/50">Foreign Curricula</p>
                                          </div>
                                    </div>
                              </div>

                              <!-- Right Dashboard Mockup -->
                              <div class="relative p-6 lg:p-10">
                                    <div
                                      class="overflow-hidden rounded-3xl border border-border bg-background/80 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">
                                          <!-- Window Header -->
                                          <div
                                            class="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                                <div class="flex items-center gap-2">
                                                      <div class="h-3 w-3 rounded-full bg-red-400" />
                                                      <div class="h-3 w-3 rounded-full bg-amber-400" />
                                                      <div class="h-3 w-3 rounded-full bg-primary" />
                                                </div>

                                                <div class="flex items-center gap-2 text-sm text-white/50">
                                                      <ShieldCheck class="size-4 text-primary" />
                                                      Live • Secure
                                                </div>
                                          </div>

                                          <!-- Dashboard Content -->
                                          <div class="p-5">
                                                <div class="flex items-center justify-between">
                                                      <div>
                                                            <p class="text-sm text-white/50">Total Students</p>
                                                            <p class="mt-1 text-3xl font-bold text-white">2,431</p>
                                                      </div>

                                                      <div
                                                        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-hover/10 text-primary">
                                                            <GraduationCap class="size-8" />
                                                      </div>
                                                </div>

                                                <div class="mt-6 flex items-center justify-between">
                                                      <div>
                                                            <p class="text-sm text-white/50">Attendance Today</p>
                                                            <p class="mt-1 text-xl font-semibold text-primary">96.2%
                                                            </p>
                                                      </div>

                                                      <TrendingUp class="size-6 text-primary" />
                                                </div>

                                                <div class="mt-6">
                                                      <div class="mb-2 flex items-center justify-between">
                                                            <span class="text-sm text-white/50">Fee Collection</span>
                                                            <span class="text-sm font-medium text-primary">+18.4%</span>
                                                      </div>

                                                      <div class="h-3 overflow-hidden rounded-full bg-white/10">
                                                            <div
                                                              class="h-full w-[78%] rounded-full bg-linear-to-r from-primary to-primary-hover" />
                                                      </div>
                                                </div>

                                                <div class="mt-6 border-t border-white/10 pt-4">
                                                      <div class="space-y-3">
                                                            <div class="flex items-center justify-between">
                                                                  <div class="flex items-center gap-3">
                                                                        <div class="h-2 w-2 rounded-full bg-primary" />
                                                                        <span class="text-sm text-white/80">
                                                                              New admission submitted
                                                                        </span>
                                                                  </div>

                                                                  <span class="text-xs text-white/40">2m</span>
                                                            </div>

                                                            <div class="flex items-center justify-between">
                                                                  <div class="flex items-center gap-3">
                                                                        <div class="h-2 w-2 rounded-full bg-blue-400" />
                                                                        <span class="text-sm text-white/80">
                                                                              Examination results published
                                                                        </span>
                                                                  </div>

                                                                  <span class="text-xs text-white/40">14m</span>
                                                            </div>

                                                            <div class="flex items-center justify-between">
                                                                  <div class="flex items-center gap-3">
                                                                        <div
                                                                          class="h-2 w-2 rounded-full bg-amber-400" />
                                                                        <span class="text-sm text-white/80">
                                                                              SMS delivery completed
                                                                        </span>
                                                                  </div>

                                                                  <span class="text-xs text-white/40">26m</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <!-- Floating Status -->
                                    <div
                                      class="absolute -bottom-3 right-4 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl md:block">
                                          <div class="flex items-center gap-3">
                                                <div
                                                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-hover/10 text-primary">
                                                      <Globe2 class="size-5" />
                                                </div>

                                                <div>
                                                      <p class="text-sm font-medium text-white">
                                                            Secure Cloud
                                                      </p>
                                                      <p class="text-xs text-white/50">
                                                            Accessible from any device
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
</template>