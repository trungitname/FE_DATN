<template>
    <div id="page-wrap">
        <h1>Giỏ hàng</h1>
        <!-- <div v-for="product in cartItems" 
        :key="product.id"
        class="product-container"
        >
            <img class="product-image" :src="product.imageUrl">
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>${{ product.price }}</p>
            </div>
            <button class="remove-button">Remove Form Cart</button>
        </div> -->
        <ProductsList 
        :products="cartItems"
        v-on:remove-from-cart="removeFromCart($event)"
        ></ProductsList>
        <h3 id="total-price">Tổng tiền: ${{ totalPrice }}</h3>
        <button id="checkout-button">Thanh toán</button>
    </div>
</template>

<script>
import axios from 'axios';
import ProductsList from '../../components/Customer/ProductsList.vue';

export default {
   name: 'CartPage',
   components: {
      ProductsList,
   },
   data(){
    return{
        cartItems: [],
    }
   },
   computed:{
    totalPrice(){
        return this.cartItems.reduce(
            (sum, item) => sum + Number(item.price),
            0,
        );
    }
   },
   methods: {
    async removeFromCart (productId) {
      const result = await axios.delete(`/api/users/12345/cart/${productId}`);
      this.cartItems = result.data;
    } 
   },
   async created(){
    const result = await axios.get('/api/users/12345/cart');
    const cartItems = result.data;
    this.cartItems = cartItems;
    
   }
};
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }

  
</style>
