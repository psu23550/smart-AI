<template>
  <div class="page q-mt-xl">
    <div>
      <h5>{{ datas.data.info1.title }}</h5>
      <p>{{ datas.data.info1.data }}</p>
    </div>
    <div>
      <h5>{{ datas.data.info2.title }}</h5>
      <p>{{ datas.data.info2.data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "page1",
  data() {
    return {
      datas: {},
    };
  },
  async mounted() {
    let fetchData = await this.$store.dispatch("getData");
    this.datas = await fetchData.filter((dt) => dt.id === "page1")[0];
    console.log(this.datas);
  },
};
</script>

<style scoped>
</style>