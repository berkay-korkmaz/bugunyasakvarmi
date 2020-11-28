<template>
  <div>
    <img
      class="img-fluid d-block w-75 mx-auto mb-4"
      :src="gifs[Math.floor(Math.random() * gifs.length)]"
      alt="Serbest">
    <div class="text-center mb-4">
      <h2
        v-if="$route.query.fd == 0"
        class="font-weight-bold text-primary">
        {{ $route.query.w == 1 ? 'Çalışana zaten serbest. Hadi işine git kolay gelsin.' : 'Şuan sana sokağa çıkmak serbest. Rahatça dışarı çıkabilirsin.' }}
      </h2>
      <h2
        v-else
        class="font-weight-bold text-primary">
        {{ $route.query.w == 1 ? 'Zaten çalıştığın için seçtiğin tarihte sana sokağa çıkmak serbest.' : 'Hadi yine iyisin seçtiğin tarihte sana sokağa çıkmak serbest.' }}
      </h2>
      <p class="">
        <span class="">
          &#x1F637;
        </span>
        Ama <b>maskeni</b> takmayı <b>sakın unutma</b>!
        <span class="">
          &#x1F637;
        </span>
      </p>
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
        'https://media.giphy.com/media/LZElUsjl1Bu6c/giphy.gif',
        'https://media.giphy.com/media/GCvktC0KFy9l6/giphy.gif',
        'https://media.giphy.com/media/vgUFOWBwBkziE/giphy.gif',
        'https://media.giphy.com/media/xTk9ZTOGgL1W84vX7q/giphy.gif',
        'https://media.giphy.com/media/hTh9bSbUPWMWk/giphy.gif'
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
