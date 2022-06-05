<template>
  <div class="wrapper">
    <router-link :to="{name: 'catalog'}" class="filter__submit button button--primery" type="submit">
        Каталог
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin-top: 200px;
  margin-bottom: 200px;
}
</style>
