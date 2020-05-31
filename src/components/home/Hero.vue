<template>
  <v-container class="hero pa-11">
    <v-row justify="center" justify-md="space-between">
      <v-col cols="12" md="5" lg="4">
        <h1>Design tools to help you get better.</h1>
        <p class="mt-5">
          designtarget is a curated list of design resources that will help you
          speed up your workflow.
        </p>
        <form @submit.prevent="search()" style="position: relative;">
          <v-icon class="hero-input-icon">
            search
          </v-icon>
          <v-text-field
            label=""
            placeholder="Search for a resource"
            prepend-inner-icon="search"
            outlined
            light
            clearable
            background-color="white"
            color="black"
            v-model="term"
            type="text"
          ></v-text-field>
          <v-btn
            style="position: absolute; bottom: -18%; left: 0%;"
            type="submit"
            v-if="term"
            color="red"
            dark
            rounded
          >
            Submit
          </v-btn>
        </form>
      </v-col>
      <v-col
        style="position: relative; z-index: 1"
        class="d-none d-md-block"
        cols="8"
        md="7"
        lg="6"
      >
        <img
          style="position: absolute;"
          src="@/assets/heroimage.png"
          alt="hero image"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    term: {
      set(val) {
        this.$store.commit("setTerm", val);
      },
      get() {
        return this.$store.state.utility.term;
      }
    },
    searchLoading() {
      return this.$store.state.utility.loading;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("searchResources");
    }
  },
  watch: {
    term(cur) {
      if (!cur) {
        this.$store.commit("setTerm", "");
        this.$store.commit("setSearchItems", []);
        this.$store.commit("setSearching", false);
        this.$store.commit("setLoading", false);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
.hero {
  background-color: #272727;
  color: #ffffff;
  border-radius: 5px;
  @include xl() {
    height: 468px;
  }
}
input {
  top: 512px;
  left: 208px;
  width: 85%;
  height: 46px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 300px;
  padding-left: 44px;
  @include xs() {
    width: 100%;
  }
}
input::placeholder,
input {
  color: #616161 !important;
  @include xl() {
    font-size: 18px;
  }
}
.hero-input-icon {
  position: absolute;
  left: 3%;
  top: 25%;
}
img {
  width: 100%;
  max-width: 772px;
  @include xl() {
    right: 6%;
  }
}
h1 {
  @include xs() {
    font-size: 25px;
  }
  @include xl() {
    font-size: 50px;
  }
}
p {
  @include xl() {
    font-size: 24px;
  }
}
</style>
