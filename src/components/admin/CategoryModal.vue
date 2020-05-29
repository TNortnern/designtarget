<template>
  <v-row justify="center">
    <v-dialog v-model="isOpen" max-width="600px">
      <v-card>
        <div class="text-center" v-if="loading">
          <v-progress-circular indeterminate> </v-progress-circular>
        </div>
        <h2 class="text-center">{{ message }}</h2>
        <v-card-title>
          <span class="headline">Category Form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  label="Name*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Description"
                  v-model="description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="isOpen = null">Close</v-btn>
          <v-btn type="submit" color="blue darken-1" text @click="newCategory()"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: ""
    };
  },
  computed: {
    loading() {
      return (
        this.$store.state.categories.loading.name === "category" &&
        this.$store.state.categories.loading.value === true
      );
    },
    message() {
      return this.$store.state.categories.message.name === "category"
        ? this.$store.state.categories.message.text
        : "";
    },
    isOpen: {
      set(val) {
        this.$store.commit("setModal", val);
      },
      get() {
        return this.$store.state.auth.modal === "categoryModal";
      }
    },
    category() {
      return {
        name: this.name,
        description: this.description
      };
    }
  },
  methods: {
    newCategory() {
      this.$store.dispatch("createNewCategory", this.category);
    }
  }
};
</script>

<style></style>
