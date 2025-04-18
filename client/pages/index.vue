<script setup>
// The home page component
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="mb-8 flex justify-between items-center">
        <h1 class="text-3xl font-bold">Nuxt Laravel App</h1>
        <NuxtLink to="/auth/login" class="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
          Login
        </NuxtLink>
      </div>
      
      <div class="rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Welcome to Nuxt Laravel Application</h2>
        <p class="text-gray-700">
          Nuxt.js and Laravel project.
        </p>
      </div>
    </div>
  </div>
</template>