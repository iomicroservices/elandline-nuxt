<script setup lang="ts">
import TextInput from '../TextInput.vue';

interface Props {
    title: string,
    desciption: string,
    selectedProcessOneCard: { name: string; number: string; description: string; buttonText: string } | null
    selectedProcessTwoCard: { name: string; number: string; description: string; buttonText: string } | null
    selectedProcessThreeCard: { number: string; amount: string; divert_number: string } | null

}

withDefaults(defineProps<Props>(), {
    title: "Review Order & Connect",
    desciption: "You're just a few clicks away from your new number!",
})

</script>
<template>
    <section class="container relative py-20">
        <div class="px-4">
            <h2 class="heading1">
                {{ title }}
            </h2>
            <p class="dark:text-zinc-300 mb-5">
                {{ desciption }}
            </p>
            <div class="grid grid-cols-2 gap-10">
                <div class="review-order-card">
                    <div v-if="selectedProcessThreeCard?.number.length > 0">
                        <p class="font-bold text-black dark:text-zinc-300 mb-5">Your numbers</p>
                        <div class="order-number-container">
                            <div class="order-number-show">
                                <p class="main dark:text-zinc-300">{{ selectedProcessThreeCard?.number }}</p>
                                <ul class="dark:text-zinc-300 text-black font-light">
                                    <li>Plan: {{ selectedProcessTwoCard.amount }} per month</li>
                                    <li>Term: 1 month rolling</li>
                                    <li>One off cost: {{ selectedProcessThreeCard?.amount }}</li>
                                    <li>Diverts to: {{ selectedProcessThreeCard?.divert_number }}</li>
                                    <li>Switchboard: false</li>
                                    <li>Team divert: false</li>
                                    <li>Call whisper: false</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="font-bold text-black dark:text-zinc-300 mb-5">No connections added</p>
                        <div class="flex justify-center mb-5">
                            <img src="/assets/images/uk1a.png" alt="porcess-image" class="mb-3" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 mb-4">
                        <div>
                            <p class="text-black dark:text-zinc-300 mb-2">We accept:</p>
                            <img src="/assets/images/visa.png" alt="porcess-image" class="mb-3" />
                        </div>
                        <div class="text-black dark:text-zinc-300 text-end">
                            <p>Total monthly rental: £0</p>
                            <p>Connection charges: £0</p>
                            <p>VAT (inc.): £0</p>
                        </div>
                    </div>
                    <button class="green-btn w-full">
                        Due today: £0
                    </button>
                </div>
                <div class="connect-card">
                    <form>
                        <div class="grid grid-cols-2 gap-5 mb-3">
                            <select>
                                <option selected disabled>Business type</option>
                                <option>Sole trade</option>
                                <option>Company</option>
                                <option>Partnership</option>
                                <option>Charity</option>
                                <option>Government</option>
                            </select>
                            <TextInput type="text" id="first_name" placeholder="First Name" />
                        </div>
                        <TextInput type="text" id="last_name" class="w-full mb-3" placeholder="Last Name" />
                        <TextInput type="text" id="address" class="w-full mb-3" placeholder="Address" />
                        <div class="grid grid-cols-2 gap-5 mb-3">
                            <TextInput type="text" id="City" class="w-full" placeholder="City" />
                            <TextInput type="number" id="postal" class="w-full" placeholder="Postal code" />
                        </div>
                        <TextInput type="number" id="contact" class="w-full mb-3" placeholder="Contact number" />
                        <TextInput type="email" id="email" class="w-full mb-3" placeholder="Enter your email" />
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="contact-service">
                            <label class="form-check-label" for="contact-service">
                                Contact me to talk about call handling services
                            </label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="terms-condition">
                            <label class="form-check-label" for="terms-condition">
                                Accept Terms & Conditions
                            </label>
                        </div>
                        <div class="px-6">
                            <button class="blue-btn py-3 w-full">
                                Proceed to checkout
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>