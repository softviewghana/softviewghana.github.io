<script lang="ts" setup>
      import { AlertTriangle, Check, Mail, MapPin, MessageSquareText, PhoneIcon, Send } from '@lucide/vue';
      import CONSTANTS from '~/constants';

      import type { FetchError } from 'ofetch';


      usePageSeo({
            title: 'Contact Softview Ghana',
            description: 'Have a software or technology project in mind? Talk to Softview Ghana about your next digital solution.',
            path: '/contact',
      });

      const form = reactive({
            name: '',
            email: '',
            phone: '',
            organization: '',
            project_type: '',
            budget_range: '',
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

      interface ApiResponse {
            success: boolean;
            message: string;
      }

      const response = ref<ApiResponse>({ success: false, message: '' });

      // const submitEnquiry = () => new Promise<void>((resolve) => {
      //       window.setTimeout(resolve, 700);
      // });

      const handleFormSubmit = async () => {
            isSubmitting.value = true;
            isError.value = false;

            try {
                  await $fetch('https://api-mail.softview.app/eschoolghana-enquiry/', {
                        method: 'POST',
                        body: form,
                  });

                  isSuccess.value = true;

                  Object.keys(form).forEach((key) => {
                        form[key as keyof typeof form] = '';
                  });

                  response.value = {
                        success: true,
                        message: response.value?.message
                              ?? 'Your enquiry has been sent successfully.'
                  };

            } catch (error: unknown) {

                  console.error('Error sending enquiry:', error);

                  const fetchError = error as FetchError<ApiResponse>;

                  isError.value = true;

                  response.value = {
                        success: false,
                        message: fetchError.data?.message
                              ?? 'An error occurred while sending the enquiry.'
                  };

            } finally {

                  isSubmitting.value = false;

                  window.setTimeout(() => {
                        isError.value = false;
                        response.value = { success: false, message: '' };
                  }, 5000);
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

            <BaseContainer class="mt-6 md:mt-10">
                  <div v-if="isSuccess"
                      class="mx-auto max-w-2xl rounded-4xl border border-primary/20 bg-primary/5 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
                        <div
                            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check class="size-8" />
                        </div>
                        <h2 class="mt-6 text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">Message
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
                        <aside class="softview-panel p-6 md:p-8">
                              <h2 class="text-2xl font-semibold tracking-[-0.04em] text-foreground md:text-3xl">
                                    Talk to us
                              </h2>

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

                                    <div class="flex items-start gap-4">
                                          <div
                                              class="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                <WhatsAppIcon class="size-5" />
                                          </div>
                                          <div>
                                                <p class="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                                                      WhatsApp
                                                </p>
                                                <div class="mt-2 space-y-1.5">
                                                      <NuxtLink to="https://wa.me/233543093942" target="_blank"
                                                          rel="noopener" external
                                                          class="block text-base text-foreground hover:text-primary">
                                                            +233 54 309 3942
                                                      </NuxtLink>
                                                </div>
                                          </div>
                                    </div>

                                    <div class="flex items-start gap-4">
                                          <div class="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl
                                          bg-primary/10 text-primary">
                                                <PhoneIcon class="size-5" />
                                          </div>
                                          <div>
                                                <p class="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                                                      Call Us
                                                </p>
                                                <div class="mt-2 space-y-1.5">
                                                      <NuxtLink to="tel:+233549289243" target="_blank" rel="noopener"
                                                          external
                                                          class="block text-base text-foreground hover:text-primary">
                                                            +233 54 928 9243
                                                      </NuxtLink>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </aside>

                        <form @submit.prevent="handleFormSubmit" class="softview-panel p-6 md:p-8">
                              <p class="text-base leading-8 text-muted">
                                    Tell us a little about what you're trying to achieve. You don't need to have all the
                                    requirements figured out. Give us the context, the challenge, or the idea, and we'll
                                    take it from there.
                              </p>

                              <div class="mt-6 grid gap-5 md:grid-cols-2">
                                    <label class="block text-sm text-muted">
                                          <span class="mb-2 block font-medium text-foreground">Full Name *</span>
                                          <input v-model="form.name" required type="text"
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
                                          <input v-model="form.organization" type="text"
                                              class="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-primary"
                                              placeholder="Optional" />
                                    </label>

                                    <label class="block text-sm text-muted md:col-span-2">
                                          <span class="mb-2 block font-medium text-foreground">Project Type *</span>
                                          <select v-model="form.project_type" required
                                              class="w-full rounded-2xl border border-border bg-background/80 px-2 py-3 text-foreground focus:border-primary">
                                                <option value="" disabled>Select a project type</option>
                                                <option v-for="option in projectOptions" :key="option" :value="option">
                                                      {{ option }}
                                                </option>
                                          </select>
                                    </label>

                                    <label class="block text-sm text-muted md:col-span-2">
                                          <span class="mb-2 block font-medium text-foreground">Budget Range</span>
                                          <input v-model="form.budget_range" type="text"
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

                              <Transition name="fade" mode="out-in">

                                    <div v-if="isError"
                                        class="mt-6 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-2">
                                          <AlertTriangle class="mt-0.5 size-5 shrink-0 text-red-400" />
                                          <div>
                                                <p class="font-medium text-foreground">We couldn't send your message.
                                                </p>
                                                <p class="mt-1 text-sm text-muted">
                                                      Please try again or contact us directly by WhatsApp or Email.
                                                </p>
                                          </div>
                                    </div>
                              </Transition>

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

            <BaseContainer class="mt-10">
                  <section
                      class="rounded-4xl backdrop-blur-xs border border-primary/15 bg-linear-to-br from-primary/10 via-surface/60 to-background px-8 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:px-10 lg:px-14 lg:py-16">
                        <h2 class="text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">Not Sure Where
                              to Start?</h2>
                        <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
                              That's okay. You don't need a complete technical specification before talking to us. Start
                              with the problem you're trying to solve, and we'll help you explore the right approach.
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