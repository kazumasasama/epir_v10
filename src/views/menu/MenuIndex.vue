<template>
  <div class="container">
    <h1>施術メニュー</h1>
    <div class="menu-new-btn">
      <b-button variant="outline-primary">
        <router-link :to="'/menus/new'">
          <b-icon icon="clipboard-plus"></b-icon>
          新規登録
        </router-link>
      </b-button>
    </div>
    <MenuTable :menus="menus" :fields="fields" />
  </div>
</template>

<script>
import db from "@/firebase.js"
import MenuTable from "@/views/menu/components/MenuTable.vue";

export default {
  name: "MenuIndex",
  components: {
    MenuTable,
  },
  data() {
    return {
      menus: [],
      fields: [
        {
          key: "title",
          label: "メニュー",
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        {
          key: "price",
          label: "価格",
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        {
          key: "duration",
          label: "時間",
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "actions", label: "" },
      ],
    };
  },
  mounted: function () {
   db.collection("menus")
     .get()
     .then((querySnapshot) => {
       const array = [];
       querySnapshot.forEach((doc) => {
         array.push(doc.data());
       });
       this.menus = array
     })
  },
};
</script>

<style scoped>
h1 {
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 35px;
  color: rgb(77, 77, 77);
}
.menu-new-btn {
  text-align: left;
  margin-bottom: 10px;
}
</style>