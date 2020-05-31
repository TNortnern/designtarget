<template>
  <v-row justify="center">
    <v-dialog v-model="isOpen" max-width="600px">
      <v-card>
        <div class="text-center" v-if="loading">
          <v-progress-circular indeterminate> </v-progress-circular>
        </div>
        <h2 class="text-center">{{ message }}</h2>
        <v-card-title>
          <span class="headline">Resource Form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <form>
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
                <v-col cols="12" sm="6">
                  <v-select
                    :items="importanceItems"
                    label="Importance*"
                    required
                    v-model="importance"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="category"
                    :items="categories"
                    item-value="id"
                    item-text="name"
                    label="Category"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="image"
                    label="Image url*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="alt"
                    label="Image alt(meta)*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="url"
                    label="Resource URL*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="isOpen = null">Close</v-btn>
          <v-btn type="submit" color="blue darken-1" text @click="newResource()"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  mounted() {
    for (let i = 0; i < 1001; i++) {
      this.importanceItems = [...this.importanceItems, i];
    }
  },
  data() {
    return {
      name: "",
      description: "",
      image: "",
      alt: "",
      category: "",
      url: "",
      importance: 0,
      importanceItems: []
    };
  },
  computed: {
    loading() {
      return (
        this.$store.state.categories.loading.name === "resource" &&
        this.$store.state.categories.loading.value === true
      );
    },
    message() {
      return this.$store.state.categories.message.name === "resource"
        ? this.$store.state.categories.message.text
        : "";
    },
    isOpen: {
      set(val) {
        this.$store.commit("setModal", val);
      },
      get() {
        return this.$store.state.auth.modal === "resourceModal";
      }
    },
    categories() {
      return this.$store.state.categories.topFour;
    },
    resource() {
      return {
        name: this.name,
        description: this.description,
        image: this.image,
        alt: this.alt,
        url: this.url,
        category: this.category,
        importance: this.importance
      };
    }
  },
  methods: {
    newResource() {
      this.$store.dispatch("createNewResource", this.resource);
    }
  }
};
</script>

<style></style>
