<template>
  <v-col cols="11" sm="6" md="3" :lg="lg" xl="2">
    <div class="text-center">
      <v-btn
        v-if="$store.state.auth.user && $store.state.auth.user.isAdmin"
        @click="deletePrompt = true"
        icon
      >
        <v-icon color="red">
          close
        </v-icon>
      </v-btn>
    </div>
    <v-dialog v-model="deletePrompt" width="250">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Delete {{ item.name }}?
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
    <a :href="`//${item.url}`" target="__blank">
      <img
        :src="item.image.url"
        :alt="item.image.alt || item.name"
        class="d-block section-card__clickable"
      />
    </a>
    <v-container style="position: relative">
      <v-row justify="space-between" align="center">
        <h3>{{ item.name }}</h3>

        <div class="align-self-end">
          <v-btn
            @mouseover="toggleHovered(true)"
            @mouseout="toggleHovered(false)"
            @click="favorite()"
            icon
          >
            <v-icon :color="isFilled ? 'red' : 'black'">
              <template v-if="isFilled">favorite</template>
              <template v-else>favorite_border</template>
            </v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
    <p>
      {{ item.description }}
    </p>
  </v-col>
</template>

<script>
import { TOGGLE_LIKE } from "@/graphql/mutations/likes";
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    lg: {
      type: [Number, String],
      default: 2
    }
  },
  data() {
    return {
      heartHovered: false,
      tempFill: false,
      deleting: null,
      deletePrompt: false
    };
  },
  methods: {
    toggleHovered(bool) {
      if (bool) return (this.heartHovered = bool);
      if (!this.isFavorited) {
        this.heartHovered = !this.heartHovered;
      }
    },
    deleteItem() {
      this.$store.dispatch("deleteResource", this.item.id);
    },
    async favorite() {
      if (!this.$store.state.auth.user) {
        this.$router.push("/login");
        return;
      }
      if (!this.isFavorited) this.tempFill = true;
      else this.tempFill = false;
      await this.$apollo
        .mutate({
          mutation: TOGGLE_LIKE,
          variables: {
            id: this.isFavorited,
            resource: this.item.id,
            user: this.authedUser.id
          }
        })
        .then(() => {
          this.$store.dispatch("getTopFour", {});
          if (this.current)
            this.$store.dispatch("getCategoryResources", this.current.id);
          this.$store.dispatch(
            "getUserResources",
            this.$store.state.auth.user.id
          );
        })
        .catch(err => {
          this.$store.dispatch(
            "getUserResources",
            this.$store.state.auth.user.id
          );
          console.log(err);
        });
    }
  },
  computed: {
    isFavorited() {
      if (!this.item) return undefined;
      const likes = this.item.likes;
      if (!likes || !likes.length || !this.authedUser) return undefined;
      const like = likes.find(each => each.user.id === this.authedUser.id);
      if (!like) return undefined;
      return like.id;
    },
    isFilled() {
      return this.isFavorited || this.tempFill;
    },
    authedUser() {
      return this.$store.state.auth.user;
    },
    allResources() {
      return this.$store.state.categories.allResources;
    },
    current() {
      return this.$store.state.categories.current;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
img {
  width: 100%;
  @include xl() {
    width: 277px;
  }
}
h3 {
  font-size: 17px;
}
.row {
  flex-wrap: nowrap;
}
.section-card__clickable {
  transition: 0.25s ease;
  opacity: 0.91;
  cursor: pointer;
  &:hover {
    opacity: 1;
    // transform: scale(1.02);
  }
}
</style>
