<template>
  <div id="app">
    <div class="wrapper d-flex align-content-center py-5">
      <b-container class="my-auto">
        <b-row>
          <b-col
            offset-xl="3"
            xl="6"
            lg="8"
            offset-lg="2"
            sm="10"
            offset-sm="1">
            <router-view />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style scoped>
  .wrapper {
    min-height: 100vh;
  }
</style>
