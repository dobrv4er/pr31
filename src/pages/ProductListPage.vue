<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products } from '../data/products'

const route = useRoute()
const router = useRouter()
const categories = [
  { value: 'all', label: 'Все' },
  { value: 'electronics', label: 'Электроника' },
  { value: 'clothing', label: 'Одежда' },
]

const filter = computed(() => {
  const value = route.query.filter
  return typeof value === 'string' ? value : 'all'
})

const filteredProducts = computed(() => {
  if (filter.value === 'all') return products
  return products.filter(product => product.category === filter.value)
})

function setFilter(value) {
  router.push({ name: 'Products', query: { filter: value } })
}
</script>

<template>
  <main>
    <RouterLink to="/">На главную</RouterLink>
    <h1>Товары</h1>
    <div class="filters">
      <button
        v-for="category in categories"
        :key="category.value"
        :class="{ active: filter === category.value }"
        @click="setFilter(category.value)"
      >
        {{ category.label }}
      </button>
    </div>
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        <RouterLink :to="{ name: 'ProductDetail', params: { id: product.id } }">
          {{ product.name }} — {{ product.category }} — {{ product.price }} ₽
        </RouterLink>
      </li>
    </ul>
    <p v-if="filteredProducts.length === 0">Нет товаров по выбранному фильтру.</p>
  </main>
</template>