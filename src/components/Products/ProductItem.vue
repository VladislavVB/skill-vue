<template>
  <li class="catalog__item">
    <router-link :to="{ name: 'productPage', params: { slug: productItem.id } }">
      <a class="catalog__pic" href="#">
        <img
          :src="productItem.image"
          srcset="img/radio@2x.jpg 2x"
          :alt="productItem.title"
        />
      </a>

      <h3 class="catalog__title">
        <a href="#"> {{ productItem.title }} </a>
      </h3>

      <span class="catalog__price"> {{ productItem.price }} ₽ </span>

      <ul class="colors colors--black">
        <li class="colors__item">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              :name="productItem.id"
              value="#73B6EA"
              v-model="color"
            />
            <span class="colors__value" style="background-color: #73b6ea">
            </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              :name="productItem.id"
              value="#8BE000"
              v-model="color"
            />
            <span class="colors__value" style="background-color: #8be000">
            </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              :name="productItem.id"
              value="#222"
              v-model="color"
            />
            <span class="colors__value" style="background-color: #222"> </span>
          </label>
        </li>
      </ul>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "ProductItem",
  data() {
    return {
      color: "#73B6EA",
    };
  },
  props: ["productItem"],
};
</script>
