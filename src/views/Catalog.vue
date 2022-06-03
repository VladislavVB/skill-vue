<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        v-model:price-from="filterpriceFrom"
        v-model:price-to="filterpriceTo"
        v-model:category-id="filterCategiryId"
      />
      <section class="catalog">
        <ul class="catalog__list">
          <ProductList :products="products" />
        </ul>
        <PaginationBar
          @paginate="setpage"
          :page="page"
          :count="countProducts"
          :per-page="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>
<script>
import ProductFilter from "@/components/Products/ProductFilter.vue";
import PaginationBar from "@/components/PaginationBar.vue";
import ProductList from "@/components/Products/ProductList.vue";
import products from "@/data/products";
export default {
  name: "Catalog",
  components: {
    ProductList,
    PaginationBar,
    ProductFilter,
  },
  data() {
    return {
      page: 1,
      productsPerPage: 3,
      filterpriceFrom: '',
      filterpriceTo: '',
      filterCategiryId: 0,
    };
  },
  computed: {
    filteredProducts() {
      let filtererProducts = products;

      if (this.filterpriceFrom > 0) {
        filtererProducts = filtererProducts.filter(
          (p) => p.price > this.filterpriceFrom
        );
      }

      if (this.filterpriceTo > 0) {
        filtererProducts = filtererProducts.filter(
          (p) => p.price < this.filterpriceTo
        );
      }

      if (this.filterCategiryId) {
        filtererProducts = filtererProducts.filter(
          (p) => p.categoriId === this.filterCategiryId
        );
      }

      return filtererProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
  methods: {
    setpage(pageNum) {
      this.page = pageNum;
    },
  },
};
</script>
