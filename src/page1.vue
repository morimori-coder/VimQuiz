<template>
  <h1>{{ title }}</h1>
</template>

<script>
module.exports = {
  data: function () {
    return {
      title: "page1.vue",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
