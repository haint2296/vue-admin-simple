<template>
  <div>
    <h1>Home</h1>
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in data" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.status }}</td>
            <td>{{ product.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="refetch()">Refetch</button>
  </div>
</template>

<script setup lang="ts">
import { useGetProducts } from '@/shared/services/api'

const { data, error, refetch, isFetching } = useGetProducts()
</script>
