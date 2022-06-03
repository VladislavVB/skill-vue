<template>
  <ProductList :products="products" />
</template>
<script>
import ProductList from "@/components/Products/ProductList.vue";
import products from "@/data/products";
export default {
  name: "Catalog",
  components: {
    ProductList,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
