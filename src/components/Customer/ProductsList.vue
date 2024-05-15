<template>
    <div v-if="products.length >0">
        <ProductsListItem v-for="product in products" 
        v-on:remove-from-cart="$emit('remove-from-cart', $event)"
        :key="product.id" 
        :product="product">
        
        </ProductsListItem>
    </div>
    <p v-else>Giỏ hàng đang trống</p>
</template>

<script>
import ProductsListItem from './ProductsListItem.vue';

export default{
    name: 'ProductsList',
    props: ['products'],
    components: {
        ProductsListItem,
    },
}
</script>
