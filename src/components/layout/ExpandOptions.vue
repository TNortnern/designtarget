<template>
  <div>
    <CategoryModal />
    <ResourceModal />
    <v-menu :close-on-click="false" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          class="text-capitalize"
          text
          :color="$store.state.black"
          v-on="on"
          @click="expanded = true"
        >
          My Account
          <v-icon>
            <template v-if="!expanded">expand_more</template>
            <template v-else>expand_less</template>
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in listItemsToRender"
          :key="index"
          @click="item.function(), (expanded = false)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      items: [
        {
          name: "Liked Resources",
          function: this.goToResources,
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
  methods: {
    logout() {
      this.$store.commit("setUser", null);
      localStorage.removeItem("token");
    },
    toggleAddResource() {
      this.$store.commit("setModal", "resourceModal");
    },
    toggleAddCategory() {
      this.$store.commit("setModal", "categoryModal");
    },
    goToResources() {
      if (this.$route.name !== "MyCollection")
        this.$router.push("/mycollection");
    },
    toggleExpand() {
      this.expanded = !this.expanded;
    }
  },
  computed: {
    isAdmin() {
      return this.$store.state.auth.user.isAdmin;
    },
    listItemsToRender() {
      if (!this.isAdmin) {
        return this.items.filter(item => item.admin !== true);
      }
      return this.items;
    }
  }
};
</script>

<style scoped>
.expand__list-item:hover {
  background-color: rgba(0, 0, 0, 0.103);
}
.bg-transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>
