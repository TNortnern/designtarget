<template>
  <v-card elevation="24">
    <ResourceModal />
    <CategoryModal />

    <v-list class="transparent">
      <v-list-item
        :to="item.to ? item.to : ''"
        v-for="item in items"
        :key="item.name"
        @click="item.function()"
        class="expand__list-item"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-divider />
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Liked Resources",
          to: "/collection/mine",
          admin: false
        },
        {
          name: "Add Category",
          admin: true,
          function: this.toggleAddCategory
        },
        {
          name: "Add Resource",
          admin: true,
          function: this.toggleAddResource
        },
        {
          name: "Logout",
          admin: false,
          function: this.logout
        }
      ],
      addingResource: false,
      addingCategory: false
    };
  },
  mounted() {
    // if (this.$store.state.auth.user && !this.$store.state.auth.user.isAdmin) {
    //   this.items = this.items.filter(item => item.admin !== true);
    // }
  },
  methods: {
    logout() {
      this.$store.commit("setUser", null);
    },
    toggleAddResource() {
      this.$store.commit("setModal", "resourceModal");
    },
    toggleAddCategory() {
      this.$store.commit("setModal", "categoryModal");
    }
  }
};
</script>

<style scoped>
.expand__list-item:hover {
  background-color: rgba(0, 0, 0, 0.103);
}
</style>
