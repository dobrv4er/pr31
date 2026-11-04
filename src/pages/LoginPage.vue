<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const error = ref('')

function login() {
  error.value = ''
  if (password.value !== 'demo') {
    error.value = 'Неверный пароль. Введите demo.'
    return
  }
  localStorage.setItem('token', 'demo')
  router.push({ name: 'Dashboard' })
}
</script>

<template>
  <main>
    <RouterLink to="/">На главную</RouterLink>
    <h1>Вход</h1>
    <form @submit.prevent="login">
      <label for="password">Пароль для демонстрации: demo</label>
      <input id="password" v-model="password" type="password" autocomplete="current-password" />
      <button type="submit">Войти</button>
    </form>
    <p v-if="error" role="alert">{{ error }}</p>
  </main>
</template>