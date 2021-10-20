<template>
  <div>
    <b-navbar type="light" variant="light">
      <div class="container">
        <div class="logo">
          <router-link to="/"
            ><img alt="epiR logo" src="../assets/epiRLogo70x40.png"
          /></router-link>
        </div>
        <b-navbar-nav class="nav" v-if="loggedIn">
          <b-nav-item class="nav-item1">
            <router-link to="/menus">
              <b-icon icon="menu-button-fill"></b-icon>
              メニュー</router-link
            >
            |
            <router-link to="/appointments">
              <b-icon icon="calendar-plus"></b-icon>
              予約</router-link
            >
            |
            <router-link to="/customers">
              <b-icon icon="person-lines-fill"></b-icon>
              顧客
            </router-link>
            |
          </b-nav-item>
          <b-nav-item-dropdown text="アカウント" right>
            <b-dropdown-item>
              <router-link to="/customer">アカウント</router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="signOut">
              アカウント設定
            </b-dropdown-item>
            <b-dropdown-item @click="signOut">
              ログアウト
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push({name: "Home"})
        this.loggedIn = false
      }).catch((error) => {
        console.log(error);
      });
    },
  }
}
</script>

<style>
.nav {
  padding: 15px;
  text-align: right;
}
.nav-item1 {
  margin-left: 20px;
}
</style>
