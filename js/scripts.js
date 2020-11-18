var app = new Vue({
  el: '#app',
  data: {
    ageGroups: ['0-20', '21-64', '65+'],
    ageGroup: 0,
    working: true,
    forbidden: false,
    checked: false,
    timestamp: ''
  },
  computed: {
    isWeekend() {
      let d = new Date();
      let weekends = ['Sunday', 'Saturday']
      return weekends.includes(d.getDay()) 
    },
    hour() {
      let d = new Date();
      return d.getHours()
    }
  },
  created() {
    setInterval(this.getDate, 1000);
  },
  methods: {
    selectAgeGroup(idx) {
      this.ageGroup = idx
    },
    getDate() {
      let d = new Date();
      let locale = d.toLocaleString('tr-TR', {hour12: false})
      this.timestamp = locale;
    },
    retry() {
      this.checked = false
      this.ageGroup = 0
      this.forbidden = false
      this.working = true
    },
    checkForbidden() {
      this.checked = true
      if(this.working) {
        return
      }
      if(this.isWeekend) {
        if( this.hour > 20 && this.hour < 10 ) {
          this.forbidden = true
        } 
      } else {
        if( this.ageGroup === 0 && this.hour > 16 && this.hour < 13 ) {
          this.forbidden = true
        } else if(this.ageGroup === 2 && this.hour > 13 && this.hour < 10) {
          this.forbidden = true
        }
      }
    }
    
  }
})
