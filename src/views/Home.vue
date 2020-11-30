<template>
  <div>
    <div class="mb-4">
      <img
        class="logo mb-3"
        src="../assets/logo.svg"
        alt="Bugün Yasak Var Mı Logo">
      <h1 class="font-weight-bold h2">
        Sokağa çıkma yasağı var mı?
      </h1>
      <date-time-now />
    </div>
    <b-card
      body-class="p-4"
      class="border-0 shadow mb-4">
      <b-form
        id="check-form"
        @submit.prevent="checkIfForbidden">
        <b-form-row>
          <b-col md="7">
            <b-form-group
              class="mb-md-0"
              label-class="font-weight-bold"
              label="Yaş aralığın">
              <b-form-radio-group
                id="radio-group-1"
                v-model="ageGroup"
                :options="ageOptions"
                name="radio-options" />
            </b-form-group>
          </b-col>
          <b-col md="5">
            <b-form-group
              class="mb-0"
              label-class="font-weight-bold"
              label="Çalışma durumun">
              <b-form-checkbox
                v-model="working">
                Çalışıyorum
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-form-row>
        <hr>
        <b-form-group>
          <b-form-checkbox v-model="checkFutureDate">
            İleri tarihli sorgulama yap
          </b-form-checkbox>
        </b-form-group>
        <b-form-row v-if="checkFutureDate">
          <b-col md="7">
            <b-form-group
              class="mb-md-0"
              label-class="font-weight-bold"
              label="Tarih">
              <b-form-datepicker
                v-model="futureDate"
                v-bind="datePickerLabels"
                button-variant="primary"
                start-weekday="1"
                no-flip
                required
                hide-header
                :min="minDate"
                :state="datePickerEmpty"
                today-button
                close-button
                locale="tr" />
            </b-form-group>
          </b-col>
          <b-col md="5">
            <b-form-group
              class="mb-0"
              label-class="font-weight-bold"
              label="Saat">
              <b-form-timepicker
                v-model="futureTime"
                v-bind="timePickerLabels"
                required
                hide-header
                now-button
                :state="timePickerEmpty"
                locale="tr" />
            </b-form-group>
          </b-col>
        </b-form-row>
        <hr>
        <b-button
          class="float-right"
          variant="primary"
          block
          :disabled="buttonDisabled"
          type="submit">
          Sorgula
        </b-button>
      </b-form>
    </b-card>
    <div class="text-center">
      <p class="mb-1">
        <b-link
          class="text-danger text-decoration-none"
          @click="$bvModal.show('warning-modal')">
          <small>
            <b>
              UYARI METNİ İÇİN TIKLAYINIZ
            </b>
          </small>
        </b-link>
      </p>
      <p class="mb-0">
        <small>
          Kaynak kodu:
          <b-link
            href="https://github.com/berkay-korkmaz/bugunyasakvarmi"
            class="text-decoration-none font-weight-bold">
            GitHub
          </b-link>
        </small>
      </p>
    </div>
    <warning-modal />
  </div>
</template>

<script>
import DateTimeNow from '../components/DateTimeNow'
import WarningModal from '../components/WarningModal'

export default {
  name: 'Home',
  components: {
    DateTimeNow,
    WarningModal
  },
  data () {
    const now = new Date()
    const minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return {
      checkFutureDate: false,
      futureDate: '',
      futureTime: '',
      ageGroup: 0,
      working: false,
      minDate,
      ageOptions: [
        { text: '0-19', value: 0 },
        { text: '20-64', value: 1 },
        { text: '65+', value: 2 }
      ],
      datePickerLabels: {
        labelPrevDecade: 'Önceki Onyıl',
        labelPrevYear: 'Önceki Yıl',
        labelPrevMonth: 'Önceki Ay',
        labelCurrentMonth: 'Bu Ay',
        labelNextMonth: 'Gelecek Ay',
        labelNextYear: 'Gelecek Yıl',
        labelNextDecade: 'Gelecek Onyıl',
        labelToday: 'Bugün',
        labelSelected: 'Tarih Seçildi',
        labelNoDateSelected: 'Tarih Seçiniz',
        labelCalendar: 'Takvim',
        labelNav: 'Takvim Yönlendirme',
        labelHelp: '',
        labelCloseButton: 'Kapat',
        labelTodayButton: 'Bugünü Seç'
      },
      timePickerLabels: {
        labelHours: 'Saat',
        labelMinutes: 'Dakika',
        labelSeconds: 'Saniye',
        labelIncrement: 'Artır',
        labelDecrement: 'Azalt',
        labelSelected: 'Saat Seçildi',
        labelNoTimeSelected: 'Saat Seçiniz',
        labelCloseButton: 'Kapat',
        labelNowButton: 'Şuan'
      }
    }
  },
  computed: {
    buttonDisabled () {
      return this.checkFutureDate ? this.futureDate === '' || this.futureTime === '' : false
    },
    timePickerEmpty () {
      return this.futureDate !== '' && this.futureTime === '' ? false : null
    },
    datePickerEmpty () {
      return this.futureTime !== '' && this.futureDate === '' ? false : null
    }
  },
  watch: {
    checkFutureDate () {
      this.futureDate = ''
      this.futureTime = ''
    }
  },
  methods: {
    isWeekendDay (day) {
      return [0, 6].includes(day)
    },
    checkIfForbidden () {
      if (this.working) {
        this.$router.push({
          name: 'Serbest',
          query: { w: 1, fd: this.checkFutureDate ? 1 : 0 }
        })
        return
      }

      const date = this.checkFutureDate ? new Date(this.futureDate + ' ' + this.futureTime) : new Date()
      const dayOfWeek = date.getDay()
      const hours = date.getHours()
      let isForbidden = false

      if (this.isWeekendDay(dayOfWeek)) {
        isForbidden = true
      } else {
        if (this.ageGroup === 0) {
          if (hours < 13 || hours >= 16) isForbidden = true
        } else if (this.ageGroup === 2) {
          if (hours < 10 || hours >= 13) isForbidden = true
        } else {
          if (hours < 5 || hours >= 21) isForbidden = true
        }
      }

      if (isForbidden) {
        this.$router.push({
          name: 'Yasak',
          query: { fd: this.checkFutureDate ? 1 : 0 }
        })
      } else {
        this.$router.push({
          name: 'Serbest',
          query: { fd: this.checkFutureDate ? 1 : 0 }
        })
      }
    }
  }
}
</script>

<style scoped>
img.logo {
  max-height: 75px;
}
</style>
