<template>
  <ul class="catalog__pagination pagination">
    <li
      @click="paginatePrev(page)"
      :class="{ disabel: page === 1 }"
      class="pagination__item"
    >
      <a
        class="pagination__link pagination__link--arrow"
        aria-label="Предыдущая страница"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li v-for="pageNum in pages" :key="pageNum" class="pagination__item">
      <a
        href="#"
        @click.prevent="paginate(pageNum)"
        class="pagination__link"
        :class="{ 'pagination__link--current': page === pageNum }"
      >
        {{ pageNum }}
      </a>
    </li>
    <li
      @click="paginateNext(page)"
      :class="{ disabel: pages === page }"
      class="pagination__item"
    >
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        aria-label="Следующая страница"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "PaginationBar",
  props: ["page", "count", "perPage"],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(pageNum) {
      this.$emit("paginate", pageNum);
    },
    paginateNext(pageNum) {
      console.log(pageNum);
      this.$emit("paginate", pageNum + 1);
    },
    paginatePrev(pageNum) {
      console.log(pageNum);
      this.$emit("paginate", pageNum - 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.disabel {
  opacity: 0.5;
  pointer-events: none;
}
</style>
