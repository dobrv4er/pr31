<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function logout() {
  localStorage.removeItem('token')
  router.push({ name: 'Login' })
}
</script>

<template>
  <main>
    <RouterLink to="/">На главную</RouterLink>
    <h1>Панель управления</h1>
    <p>Вы успешно авторизованы.</p>
    <button @click="logout">Выйти</button>
  </main>
</template>