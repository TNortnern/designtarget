<template>
  <v-container class="section">
    <div class="d-flex flex-wrap justify-center justify-md-start mb-10">
      <h1 class="mr-5 section__title--editable">{{ name }}</h1>
      <div class="text-center">
        <v-btn @click="deletePrompt = true" icon>
          <v-icon color="red">
            close
          </v-icon>
        </v-btn>
      </div>
      <v-dialog v-model="deletePrompt" width="300">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            Delete {{ name }}?
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="deleteItem(), (deletePrompt = false)"
            >
              Yes
            </v-btn>
            <v-btn color="primary" text @click="deletePrompt = false">
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- <h1 class="mr-5">{{ name }}</h1> -->
      <v-btn
        @click="viewCategory()"
        class="text-capitalize align-self-center"
        :color="$store.state.red"
        dark
        rounded
        >View All</v-btn
      >
    </div>
    <v-row
      justify-md="space-between"
      justify-lg="space-between"
      justify="center"
    >
      <SectionCard v-for="item in items" :key="item.id" :item="item" />
      <Sponsored />
    </v-row>
  </v-container>
</template>

<script>
import SectionCard from "./SectionCard";
import Sponsored from "./Sponsored";
export default {
  components: {
    SectionCard,
    Sponsored
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => {}
    },
    category: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteCategory", this.category.id);
    },
    viewCategory() {
      this.$store.commit("setCurrent", this.category);
      this.$router.push(this.href);
    }
  },
  data() {
    return {
      deleting: null,
      deletePrompt: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
.v-btn {
  width: 125px;
  @include xl() {
    font-size: 18px;
    width: 145px;
  }
}
h1 {
  @include xl() {
    font-size: 50px;
  }
}
.section__title--editable {
  cursor: pointer;
  transition: 0.15s;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(3, 3, 3, 0.116);
  }
}
</style>
