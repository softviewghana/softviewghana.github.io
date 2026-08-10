<script lang="ts" setup>
      import { AlertTriangle, Check, Mail, MapPin, MessageSquareText, Send } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      usePageSeo({
            title: 'Contact Softview Ghana',
            description: 'Have a software or technology project in mind? Talk to Softview Ghana about your next digital solution.',
            path: '/contact',
      });

      const form = reactive({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            budgetRange: '',
            message: '',
      });

      const isSubmitting = ref(false);
      const isSuccess = ref(false);
      const isError = ref(false);

      const projectOptions = [
            'Custom Software',
            'Web Application',
            'Mobile Application',
            'Cloud & DevOps',
            'IT Infrastructure',
            'UI/UX Design',
            'Other',
      ];

      const submitEnquiry = () => new Promise<void>((resolve) => {
            window.setTimeout(resolve, 700);
      });

      const handleFormSubmit = async () => {
            isSubmitting.value = true;
            isError.value = false;

            try {
                  await submitEnquiry();
                  isSuccess.value = true;
                  Object.keys(form).forEach((key) => {
                        form[key as keyof typeof form] = '';
                  });
            } catch {
                  isError.value = true;
            } finally {
                  isSubmitting.value = false;
            }
      };

      const scrollToForm = () => {
            document.querySelector('form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
</script>

<template>
      <div class="pb-20">
            <PageHero eyebrow="Let's Talk" title="Have a Project in Mind?"
                description="Tell us what you're building, what you're trying to improve, or where technology is getting in the way. We'll help you figure out the next step." />

            <BaseContainer class="mt-8 md:mt-12">
                  <div v-if="isSuccess"
                      class="mx-auto max-w-2xl rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center shadow-[0_28px_60px_rgba(0,0,0,0.28)]">
                        <div
                            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check class="size-8" />
                        </div>
                        <h2 class="mt-6 text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Message
                              Received</h2>
                        <p class="mt-4 text-lg text-muted">Thanks for reaching out.</p>
                        <p class="mt-2 text-base leading-8 text-muted">
                              We've received your message and will get back to you as soon as possible.
                        </p>
                        <NuxtLink to="/"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover">
                              Back to Homepage
                        </NuxtLink>
                  </div>

                  <div v-else class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                        <aside class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <h2 class="text-2xl font-semibold tracking-[-0.04em] text-foreground md:text-3xl">Talk to
                                    us</h2>

                              <div class="mt-8 space-y-6">
                                    <div class="flex items-start gap-4">
                                          <div
                                              class="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <Mail class="size-5" />
                                          </div>
                                          <div>
                                                <p class="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                                                      Email</p>
                                                <NuxtLink :href="`mailto:${CONSTANTS.CONTACT_EMAIL}`"
                                                    class="mt-2 block text-base text-foreground hover:text-primary">
                                                      {{ CONSTANTS.CONTACT_EMAIL }}
                                                </NuxtLink>
                                          </div>
                                    </div>

                                    <div class="flex items-start gap-4">
                                          <div
                                              class="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <MapPin class="size-5" />
                                          </div>
                                          <div>
                                                <p class="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                                                      Location</p>
                                                <p class="mt-2 text-base text-foreground">{{ CONSTANTS.LOCATION }}</p>
                                          </div>
                                    </div>

                                    <div class="flex items-start gap-4">
                                          <div
                                              class="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <MessageSquareText class="size-5" />
                                          </div>
                                          <div>
                                                <p class="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                                                      Response Time</p>
                                                <p class="mt-2 text-base text-foreground">Typically responds within 24
                                                      hours.</p>
                                          </div>
                                    </div>
                              </div>
                        </aside>

                        <form @submit.prevent="handleFormSubmit"
                            class="rounded-4xl border border-border bg-surface p-6 md:p-8">
                              <p class="text-base leading-8 text-muted">
                                    Tell us a little about what you're trying to achieve. You don't need to have all
                                    the requirements figured out. Give us the context, the challenge, or the idea,
                                    and we'll take it from there.
                              </p>

                              <div v-if="isError"
                                  class="mt-6 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                                    <AlertTriangle class="mt-0.5 size-5 shrink-0 text-red-400" />
                                    <div>
                                          <p class="font-medium text-foreground">We couldn't send your message.</p>
                                          <p class="mt-1 text-sm text-muted">Please try again or contact us directly
                                                by email.</p>
                                    </div>
                              </div>

                              <div class="mt-6 grid gap-5 md:grid-cols-2">
                                    <label class="block text-sm text-muted">
                                          <span class="mb-2 block font-medium text-foreground">Full Name *</span>
                                          <input v-model="form.fullName" required type="text"
                                              class="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-primary"
                                              placeholder="Your full name" />
                                    </label>

                                    <label class="block text-sm text-muted">
                                          <span class="mb-2 block font-medium text-foreground">Email Address *</span>
                                          <input v-model="form.email" required type="email"
                                              class="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-primary"
                                              placeholder="you@example.com" />
                                    </label>

                                    <label class="block text-sm text-muted">
                                          <span class="mb-2 block font-medium text-foreground">Phone Number</span>
                                          <input v-model="form.phone" type="tel"
                                              class="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-primary"
                                              placeholder="Optional" />
                                    </label>

                                    <label class="block text-sm text-muted">
                                          <span class="mb-2 block font-medium text-foreground">Company /
                                                Organization</span>
                                          <input v-model="form.company" type="text"
                                              class="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-primary"
                                              placeholder="Optional" />
                                    </label>

                                    <label class="block text-sm text-muted md:col-span-2">
                                          <span class="mb-2 block font-medium text-foreground">Project Type *</span>
                                          <select v-model="form.projectType" required
                                              class="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground focus:border-primary">
                                                <option value="" disabled>Select a project type</option>
                                                <option v-for="option in projectOptions" :key="option" :value="option">
                                                      {{ option }}
                                                </option>
                                          </select>
                                    </label>

                                    <label class="block text-sm text-muted md:col-span-2">
                                          <span class="mb-2 block font-medium text-foreground">Budget Range</span>
                                          <input v-model="form.budgetRange" type="text"
                                              class="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-primary"
                                              placeholder="Optional" />
                                    </label>

                                    <label class="block text-sm text-muted md:col-span-2">
                                          <span class="mb-2 block font-medium text-foreground">Message *</span>
                                          <textarea v-model="form.message" required rows="6"
                                              class="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-primary"
                                              placeholder="Tell us about your project or challenge" />
                                    </label>
                              </div>

                              <div class="mt-6 flex justify-end">
                                    <button type="submit" :disabled="isSubmitting"
                                        class="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60">
                                          <Send class="size-4" />
                                          <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                                    </button>
                              </div>
                        </form>
                  </div>
            </BaseContainer>

            <BaseContainer class="mt-16">
                  <section class="rounded-4xl border border-border bg-surface p-8 text-center md:p-12">
                        <h2 class="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">Not Sure
                              Where to Start?</h2>
                        <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
                              That's okay. You don't need a complete technical specification before talking to us.
                              Start with the problem you're trying to solve, and we'll help you explore the right
                              approach.
                        </p>
                        <button type="button" @click="scrollToForm"
                            class="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 font-medium text-white transition hover:bg-primary-hover">
                              Start a Conversation
                        </button>
                  </section>
            </BaseContainer>
      </div>
</template>

<style scoped></style>