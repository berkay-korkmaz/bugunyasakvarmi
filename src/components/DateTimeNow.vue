<template>
  <span class="date-time-now">
    {{ dateNow }}
  </span>
</template>

<script>
export default {
  name: 'DateTimeNow',
  props: {
    locale: {
      type: String,
      default: 'tr-TR'
    }
  },
  data () {
    return {
      dateNow: ''
    }
  },
  created () {
    this.getDateTime()
    setInterval(this.getDateTime, 1000)
  },
  methods: {
    getDateTime () {
      const date = new Date().toLocaleString(this.locale, {
        hour12: false,
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        month: 'long',
        day: '2-digit'
      })
      this.dateNow = date
    }
  }
}
</script>
<style scoped>
  .date-time-now {
    font-size: 1.15rem;
  }
</style>
