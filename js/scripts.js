var app = new Vue({
  el: '#app',
  data: {
    isCurfew: false,
    details: {},
    dateTime: new Date().toLocaleString()
  },
  mounted() {
    const self = this;
    const currTime = Math.floor(Date.now() / 1000);
    curfews.forEach(function (curfew, index) {
      if (currTime > curfew.start && currTime < curfew.end) {
        self.details = curfew;
        self.isCurfew = true;
        return
      }
    });
  }
})

function updateTime() {
  app.dateTime = new Date().toLocaleString();
}

setInterval(updateTime, 1000);