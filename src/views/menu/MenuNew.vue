<template>
  <div class="container">
    <h1>施術メニュー登録</h1>
    <MenuForm />
  </div>
</template>

<script>
import MenuForm from "./components/MenuForm.vue";

export default {
  name: "MenuNew",
  components: {
    MenuForm,
  },
}
</script>

<style scoped>
h1 {
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 35px;
  color: rgb(77, 77, 77);
}
</style>