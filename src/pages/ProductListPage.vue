<script setup>
import { products } from '../data/products'
</script>

<template>
  <main>
    <RouterLink to="/">На главную</RouterLink>
    <h1>Товары</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <RouterLink :to="{ name: 'ProductDetail', params: { id: product.id } }">
          {{ product.name }} — {{ product.price }} ₽
        </RouterLink>
      </li>
    </ul>
  </main>
</template>