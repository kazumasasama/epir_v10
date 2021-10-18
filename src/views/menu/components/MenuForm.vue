<template>
  <div>
    <b-form
      class="menu-form"
      @submit="handleSubmit"
      @reset="handleCancel"
      v-model="form"
    >
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-title">*メニュー名</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-title"
            placeholder="必須"
            v-model="form.title"
            type="text"

          ></b-form-input>
        </b-col>
        <b-col sm="2">
          <label for="input-price">価格</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-price"
            placeholder="数字のみ"
            v-model="form.price"
            type="number"
          ></b-form-input>
        </b-col>
        <b-col sm="2">
          <label for="input-duration">施術時間</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-duration"
            placeholder="例: 00:00"
            v-model="form.duration"
            type="text"
          ></b-form-input>
        </b-col>
        <b-col sm="2">
          <label for="desc-textarea">説明</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            id="desc-textarea"
            placeholder="施術に関する説明など（予約時メニュー選択画面に表示されます）"
            v-model="form.description"
            rows="3"
            max-rows="8"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-button class="submit-btn" type="submit" variant="outline-primary">
        <b-icon icon="check-circle"></b-icon>
        登録する
      </b-button>
      <b-button type="reset" variant="outline-danger">キャンセル</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result" v-model="form">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import db from "@/firebase.js"

export default {
  data() {
    return {
      form: {
        title: "",
        price: "",
        duration: "",
        description: "",
      },
    };
  },
  methods: {
    handleSubmit() {
const saveData = {
        title: "this.form.title",
        price: "this.form.price",
        duration: "this.form.duration",
        description: "this.form.description",
      }
      db.collection("menus").add(saveData)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
      this.$router.push({ path: "/menus" })
    },
    handleCancel() {
      this.$router.push({ path: "/menus" })
    },
  }
};
</script>

<style scoped>
.col-sm-10 {
  margin-bottom: 10px;
}
#input-memo {
  height: 150px;
}
.customer-form {
  margin-top: 50px;
}
#fieldset-2 {
  margin-top: 50px;
}
.submit-btn {
  margin-right: 10px;
}
</style>