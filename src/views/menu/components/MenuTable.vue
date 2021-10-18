<template>
  <div class="overflow-auto">
    <b-table hover selectable row-clicked :items="menus" :fields="fields">
      <template #cell(actions)="row">
        <b-button size="sm" class="mr-1"><b-icon icon="pencil"></b-icon> 編集 </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          <b-icon icon="card-list"></b-icon>
          {{ row.detailsShowing ? "閉じる" : "詳細" }}
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
