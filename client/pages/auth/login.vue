<script setup>
import { reactive } from 'vue'

// Create a reactive form
const form = reactive({
  email: 'admin@admin.com',
  password: 'password'
});

// Create a login function
const login = async () => {
  console.log('Login attempt with:', form);
  // TODO: Implement actual authentication
  // For now, just navigate to the home page
  await navigateTo('/');
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <h1 class="mb-6 text-2xl font-bold text-center">Login</h1>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            placeholder="Enter your email" 
            class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input 
            v-model="form.password" 
            type="password" 
            placeholder="Enter your password" 
            class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <button 
          type="submit" 
          class="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>