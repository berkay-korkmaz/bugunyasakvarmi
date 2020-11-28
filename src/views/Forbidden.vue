<template>
  <div>
    <img
      class="img-fluid d-block w-75 mx-auto mb-4"
      :src="gifs[Math.floor(Math.random() * gifs.length)]"
      alt="Serbest">
    <div class="text-center mb-5">
      <h2
        class="font-weight-bold text-danger">
        {{ $route.query.fd == 1 ? '&#x1F625; Maalesef seçtiğin tarihte sokağa çıkamazsın.' : '&#x1F625; Maalesef şuan sokağa çıkman yasak.' }}
      </h2>
    </div>
    <b-button
      variant="dark"
      class="mx-auto d-block"
      @click="$router.replace('/')">
      Tekrar Sorgula
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Free',
  data () {
    return {
      gifs: [
        'https://media.giphy.com/media/W5YVAfSttCqre/giphy.gif',
        'https://media.giphy.com/media/wYyTHMm50f4Dm/giphy.gif',
        'https://media.giphy.com/media/FEikw3bXVHdMk/giphy.gif',
        'https://media.giphy.com/media/IRkqguqMTKUne/giphy.gif',
        'https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif',
        'https://media.giphy.com/media/6Q2KA5ly49368/giphy.gif'
      ]
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 1.2rem!important;
  }
  p > span {
    font-size: 2rem;
  }
</style>
