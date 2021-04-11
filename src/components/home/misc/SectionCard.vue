<template>
  <v-col cols="11" sm="6" md="3" :lg="lg" :xl="xl">
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
      <v-row class="section-card__like" justify="space-between" align="center">
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
    },
    xl: {
      type: [Number, String],
      default: 2
    },
    isUsers: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      heartHovered: false,
      tempFill: false,
      deleting: null,
      deletePrompt: false,
      likeData: null
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
      if (this.$store.state.appLoading) return;
      if (!this.$store.state.auth.user) {
        this.$router.push("/login");
        return;
      }
      this.$store.commit("setAppLoading", true);
      if (!this.isFavorited) this.tempFill = true;
      else this.tempFill = false;
      await this.$apollo
        .mutate({
          mutation: TOGGLE_LIKE,
          variables: {
            id: this.likeData ? this.likeData.id : undefined,
            resource: this.item.id,
            user: this.authedUser.id
          },
          fetchPolicy: "no-cache"
        })
        .then(({ data }) => {
          this.$store.commit("setAppLoading", false);
          this.$store.commit("setUser", data.toggleLike.user);
          this.likeData = data.toggleLike.like;
        })
        .catch(err => {
          this.$store.commit("setAppLoading", false);
          console.log(err);
        });
    }
  },
  computed: {
    isFavorited() {
      // likeData is the data that gets returned on a like, updates the status easier
      if (this.likeData) {
        if (this.likeData.isLiked) {
          return this.likeData;
        } else {
          return undefined;
        }
      }
      if (this.authedUser) {
        // just check if one if the likes contain the user id
        const isUsersResource = this.authedUser.resources.find(
          one => one.id === this.item.id
        );
        // console.log('isUsersResource', isUsersResource)
        if (isUsersResource) {
          return isUsersResource;
        }
      }
      return undefined;
    },
    isFilled() {
      return this.isFavorited || this.tempFill || this.isUsers;
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
    // width: 320px;
  }
}
.section-card__like {
  @include xl() {
    // max-width: 320px;
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
  width: 100%;
  height: 6.3rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
    // transform: scale(1.02);
  }
}
</style>
