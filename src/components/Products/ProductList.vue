<template>
  <!-- <section class="catalog">
    <ul class="catalog__list"> -->
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product-item="product"
        class="catalog__item"
      >
      </ProductItem>
    <!-- </ul>
  </section> -->
</template>
<script>
import ProductItem from "@/components/Products/ProductItem.vue";
export default {
  name: "ProductList",
  props: ["products"],
  components: {
    ProductItem,
  },
};
</script>
