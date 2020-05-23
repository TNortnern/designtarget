<template>
  <v-container class="hero pa-11">
    <v-row justify="space-between">
      <v-col cols="4">
        <h1>Design tools to help you get better.</h1>
        <p class="mt-5">
          designtarget is a curated list of design resources that will help you
          speed up your workflow.
        </p>
        <div style="position: relative;">
          <v-icon class="hero-input-icon">
            search
          </v-icon>
          <input placeholder="Search for a resource" type="text" />
        </div>
      </v-col>
      <v-col style="position: relative" cols="6">
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
export default {};
</script>

<style scoped>
.hero {
  background-color: #272727;
  color: #ffffff;
  border-radius: 5px;
}
input {
  top: 512px;
  left: 208px;
  width: 85%;
  height: 46px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 300px;
  padding-left: 44px;
}
input::placeholder,
input {
  color: #616161 !important;
}
.hero-input-icon {
  position: absolute;
  left: 3%;
  top: 25%;
}
img {
  width: 484px;
  height: 370px;
}
</style>
