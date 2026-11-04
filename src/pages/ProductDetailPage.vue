<script setup>
import { computed } from 'vue'
import { products } from '../data/products'

const props = defineProps({
  id: { type: String, required: true },
})

const product = computed(() =>
  products.find(item => item.id === Number(props.id)),
)
</script>

<template>
  <main>
    <template v-if="product">
      <h1>Товар: {{ product.name }}</h1>
      <p>Категория: {{ product.category }}</p>
      <p>Цена: {{ product.price }} ₽</p>
      <p>ID из URL: {{ id }}</p>
    </template>
    <h1 v-else>Товар не найден</h1>
    <RouterLink to="/products">Назад к списку</RouterLink>
  </main>
</template>
```