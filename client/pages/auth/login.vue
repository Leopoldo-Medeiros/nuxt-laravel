<script setup>

const { login:loginAction } = useSanctumAuth();
const form = reactive({
  email: 'admin@admin.com',
  password: 'password',
});

const login = async () => {
  await loginAction(form);
}

</script>


<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="form.email" type="email" placeholder="Email"/>
      <input v-model="form.password" type="password" placeholder="Password"/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
