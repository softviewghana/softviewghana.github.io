<script setup lang="ts">
      import {
            ArrowRight,
            ArrowUpRight,
            Check,
            GraduationCap,
            Globe2,
            ShieldCheck,
            Users,
            Wallet,
            FileText,
            CalendarDays,
            BookOpen,
            Layers3,
            Smartphone,
      } from '@lucide/vue'
</script>

<template>
      <section class="relative py-14 sm:py-20">
            <div class="mx-auto max-w-7xl px-6">

                  <!-- Section heading -->
                  <div class="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
                        <div class="max-w-2xl">
                              <span
                                class="inline-flex items-center gap-2 rounded-full border border-primary-hover/20 bg-primary-hover/10 px-4 py-2 text-sm font-medium text-primary">
                                    <span class="h-2 w-2 rounded-full bg-primary" />
                                    Featured Products
                              </span>

                              <h2 class="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    Technology built to
                                    <span class="text-primary">make a difference.</span>
                              </h2>

                              <p class="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                                    We build practical digital products that simplify operations,
                                    empower people, and help organizations move forward.
                              </p>
                        </div>

                        <NuxtLink to="/products"
                          class="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-primary">
                              Explore our products
                              <ArrowUpRight
                                class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </NuxtLink>
                  </div>

                  <!-- Products -->
                  <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">

                        <!-- EPSSP -->
                        <article
                          class="group relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-primary/25 bg-white/8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-white/5">
                              <!-- Ambient background -->
                              <div
                                class="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/9 blur-[90px]" />

                              <div class="relative flex flex-1 flex-col p-6 sm:p-8">

                                    <!-- Product label -->
                                    <div class="flex items-center justify-between gap-3">
                                          <span
                                            class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                                <span class="size-1.5 rounded-full bg-primary" />
                                                Flagship product
                                          </span>

                                          <span
                                            class="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                                                Payroll & HR
                                          </span>
                                    </div>

                                    <!-- Identity -->
                                    <div class="mt-7">
                                          <div class="flex items-center gap-3">
                                                <div
                                                  class="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                                      <Wallet class="size-6" />
                                                </div>

                                                <div>
                                                      <h3
                                                        class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                                            EPSSP
                                                      </h3>
                                                      <p class="mt-0.5 text-xs font-medium tracking-wide">
                                                            ELECTRONIC PAYROLL & STAFF SELF-SERVICE
                                                      </p>
                                                </div>
                                          </div>

                                          <p class="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                                                A comprehensive payroll and staff management platform
                                                designed to bring employee records, payroll processing,
                                                statutory deductions and self-service together.
                                          </p>
                                    </div>

                                    <!-- Feature list -->
                                    <div class="mt-6 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                                          <div class="flex items-center gap-2.5 text-sm text-white/75">
                                                <Check class="size-4 shrink-0 text-primary" />
                                                Employee management
                                          </div>
                                          <div class="flex items-center gap-2.5 text-sm text-white/75">
                                                <Check class="size-4 shrink-0 text-primary" />
                                                Payroll processing
                                          </div>
                                          <div class="flex items-center gap-2.5 text-sm text-white/75">
                                                <Check class="size-4 shrink-0 text-primary" />
                                                Statutory deductions
                                          </div>
                                          <div class="flex items-center gap-2.5 text-sm text-white/75">
                                                <Check class="size-4 shrink-0 text-primary" />
                                                Employee self-service
                                          </div>
                                    </div>

                                    <!-- Product preview -->
                                    <div
                                      class="relative mt-8 overflow-hidden rounded-2xl border border-primary/25 bg-[#101b16] p-4 sm:p-5">

                                          <div
                                            class="flex items-center justify-between gap-3 border-b border-primary/25 pb-3">
                                                <div class="flex items-center gap-2">
                                                      <div
                                                        class="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                                                            <Layers3 class="size-3.5" />
                                                      </div>
                                                      <span class="text-xs font-semibold text-white/80">
                                                            Payroll workspace
                                                      </span>
                                                </div>

                                                <span class="text-[10px] text-white/35">
                                                      Platform preview
                                                </span>
                                          </div>

                                          <div class="mt-4 grid grid-cols-2 gap-3">
                                                <div class="rounded-xl border border-primary/25 bg-white/[0.035] p-3">
                                                      <div class="flex items-center gap-2">
                                                            <Users class="size-3.5" />
                                                            <span class="text-[10px]">People</span>
                                                      </div>
                                                      <div class="mt-3 h-2 w-16 rounded-full bg-white/20" />
                                                      <div class="mt-2 h-1.5 w-10 rounded-full bg-white/10" />
                                                </div>

                                                <div class="rounded-xl border border-primary/25 bg-white/[0.035] p-3">
                                                      <div class="flex items-center gap-2">
                                                            <Wallet class="size-3.5" />
                                                            <span class="text-[10px]">Payroll</span>
                                                      </div>
                                                      <div class="mt-3 h-2 w-20 rounded-full bg-primary/60" />
                                                      <div class="mt-2 h-1.5 w-12 rounded-full bg-white/10" />
                                                </div>
                                          </div>

                                          <div
                                            class="mt-3 flex items-center justify-between rounded-xl border border-primary/25 bg-white/2.5 px-3 py-3">
                                                <div class="flex items-center gap-2">
                                                      <FileText class="size-4 text-primary/80" />
                                                      <span class="text-xs text-white/65">Payslips & reports</span>
                                                </div>
                                                <ArrowUpRight class="size-3.5 text-white/30" />
                                          </div>

                                          <div class="mt-3 flex items-center gap-2 text-[10px] text-white/35">
                                                <ShieldCheck class="size-3.5 text-primary/70" />
                                                Employee records and payroll in one place
                                          </div>
                                    </div>

                                    <!-- Deployment note -->
                                    <div class="mt-5 flex items-start gap-2 text-xs leading-5 text-white/45">
                                          <Globe2 class="mt-0.5 size-3.5 shrink-0 text-primary/70" />
                                          Flexible deployment with lifetime software licensing and optional maintenance.
                                    </div>

                                    <!-- Actions -->
                                    <div class="mt-7 flex flex-wrap items-center gap-3">
                                          <NuxtLink to="https://epssp.com" external target="_blank" rel="noopener"
                                            class="group/btn inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                                Explore EPSSP
                                                <ArrowRight
                                                  class="size-4 transition-transform group-hover/btn:translate-x-1" />
                                          </NuxtLink>

                                          <span class="text-xs text-white/35">
                                                Built for modern organisations
                                          </span>
                                    </div>

                              </div>
                        </article>

                        <!-- eSchool Ghana -->
                        <article
                          class="group relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-primary/25 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/4">
                              <div
                                class="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/12 blur-[90px]" />

                              <div class="relative flex flex-1 flex-col p-6 sm:p-8">

                                    <!-- Product label -->
                                    <div class="flex items-center justify-between gap-3">
                                          <span
                                            class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                                <span class="size-1.5 rounded-full bg-primary" />
                                                Education technology
                                          </span>

                                          <span
                                            class="rounded-full border border-primary/25 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/55">
                                                School Management
                                          </span>
                                    </div>

                                    <!-- Identity -->
                                    <div class="mt-7">
                                          <div class="flex items-center gap-3">
                                                <div
                                                  class="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                                      <GraduationCap class="size-6" />
                                                </div>

                                                <div>
                                                      <h3
                                                        class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                                                            eSchool Ghana
                                                      </h3>
                                                      <p class="mt-0.5 text-xs font-medium tracking-wide">
                                                            SCHOOL OPERATING SYSTEM
                                                      </p>
                                                </div>
                                          </div>

                                          <p class="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                                                A modern school operating system designed for
                                                <span class="font-semibold text-primary">basic schools in Ghana.</span>
                                                Manage school operations, academic activities and
                                                communication through one integrated platform.
                                          </p>
                                    </div>

                                    <!-- Feature list -->
                                    <div class="mt-6 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                                          <div class="flex items-center gap-2.5 text-sm text-white/75">
                                                <Check class="size-4 shrink-0 text-primary" />
                                                Admissions & enrollment
                                          </div>
                                          <div class="flex items-center gap-2.5 text-sm text-white/75">
                                                <Check class="size-4 shrink-0 text-primary" />
                                                Academics & attendance
                                          </div>
                                          <div class="flex items-center gap-2.5 text-sm text-white/75">
                                                <Check class="size-4 shrink-0 text-primary" />
                                                Fees & payments
                                          </div>
                                          <div class="flex items-center gap-2.5 text-sm text-white/75">
                                                <Check class="size-4 shrink-0 text-primary" />
                                                Exams & report cards
                                          </div>
                                    </div>

                                    <!-- Product preview -->
                                    <div
                                      class="relative mt-8 overflow-hidden rounded-2xl border border-primary/25  p-4 sm:p-5">

                                          <div
                                            class="flex items-center justify-between gap-3 border-b border-primary/25 pb-3">
                                                <div class="flex items-center gap-2">
                                                      <div
                                                        class="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                                                            <GraduationCap class="size-3.5" />
                                                      </div>
                                                      <span class="text-xs font-semibold text-white/80">
                                                            School workspace
                                                      </span>
                                                </div>

                                                <span class="text-[10px] text-white/35">
                                                      Platform preview
                                                </span>
                                          </div>

                                          <div class="mt-4 grid grid-cols-2 gap-3">
                                                <div class="rounded-xl border border-primary/25 p-3">
                                                      <div class="flex items-center gap-2">
                                                            <Users class="size-3.5" />
                                                            <span class="text-[10px]">Students</span>
                                                      </div>

                                                      <span class="mt-3 text-xs text-white/55">
                                                            1,200+ students
                                                      </span>
                                                </div>

                                                <div class="rounded-xl border border-primary/25 p-3">
                                                      <div class="flex items-center gap-2">
                                                            <CalendarDays class="size-3.5" />
                                                            <span class="text-[10px]">Attendance</span>
                                                      </div>

                                                      <span class="mt-3 text-xs text-white/55">
                                                            98% attendance
                                                      </span>
                                                </div>
                                          </div>

                                          <div class="mt-3 grid grid-cols-3 gap-2">
                                                <div class="rounded-xl border border-primary/25 bg-primary/15 p-2.5">
                                                      <BookOpen class="size-4 text-primary/80" />
                                                      <p class="mt-2 text-[10px] text-white/65">Academics</p>
                                                </div>
                                                <div class="rounded-xl border border-primary/25 bg-primary/15 p-2.5">
                                                      <Wallet class="size-4 text-primary/80" />
                                                      <p class="mt-2 text-[10px] text-white/65">School fees</p>
                                                </div>
                                                <div class="rounded-xl border border-primary/25 bg-primary/15 p-2.5">
                                                      <Smartphone class="size-4 text-primary/80" />
                                                      <p class="mt-2 text-[10px] text-white/65">Communication</p>
                                                </div>
                                          </div>

                                          <div class="mt-3 flex items-center gap-2 text-[10px] text-white/35">
                                                <ShieldCheck class="size-3.5 text-primary/70" />
                                                Connected school operations
                                          </div>
                                    </div>

                                    <!-- Platform note -->
                                    <div class="mt-5 flex items-start gap-2 text-xs leading-5 text-white/45">
                                          <Globe2 class="mt-0.5 size-3.5 shrink-0 text-primary/70" />
                                          Cloud-based access for school administrators, teachers and staff.
                                    </div>

                                    <!-- Actions -->
                                    <div class="mt-7 flex flex-wrap items-center gap-3">
                                          <NuxtLink to="https://eschoolghana.com" external target="_blank"
                                            rel="noopener"
                                            class="group/btn inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
                                                Explore eSchool Ghana
                                                <ArrowRight
                                                  class="size-4 transition-transform group-hover/btn:translate-x-1" />
                                          </NuxtLink>

                                          <NuxtLink to="https://eschoolghana.com/watch-demo" external target="_blank"
                                            rel="noopener"
                                            class="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-white/4 px-5 py-3 text-sm font-medium text-white/75 transition hover:border-primary/25 hover:bg-white/8 hover:text-white">
                                                Watch demo
                                                <ArrowUpRight class="size-3.5" />
                                          </NuxtLink>
                                    </div>

                              </div>
                        </article>

                  </div>

                  <!-- Bottom statement -->
                  <div
                    class="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/25 bg-white/2 px-5 py-5 sm:flex-row sm:items-center sm:px-7">
                        <div class="flex items-center gap-3">
                              <div
                                class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Layers3 class="size-5" />
                              </div>
                              <div>
                                    <p class="text-sm font-semibold text-white">
                                          Built with purpose. Designed for real-world impact.
                                    </p>
                                    <p class="mt-1 text-xs text-white/45">
                                          Independent products. One commitment to thoughtful technology.
                                    </p>
                              </div>
                        </div>

                        <NuxtLink to="/contact"
                          class="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition hover:text-white">
                              Have an idea? Let's talk
                              <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
                        </NuxtLink>
                  </div>

            </div>
      </section>
</template>
