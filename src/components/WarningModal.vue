<template>
  <b-modal
    id="warning-modal"
    centered
    size="lg"
    hide-footer>
    <template #modal-title>
      <span class="text-danger">
        Uyarı!
      </span>
    </template>
    <p>
      <span class="text-primary">
        bugunyasakvarmi.com'u
      </span>
      T.C. İçişleri Bakanlığı websitesindeki
      <b-link
        class="font-weight-bold text-decoration-none"
        href="https://www.icisleri.gov.tr/koronavirus-salgini-yeni-tedbirler">
        duyuru sayfasından
      </b-link>
      ve çeşitli haber kaynaklarından aldığım bilgiler doğrultusunda, insanların kafa karışıklığını gidermek amacıyla gönüllü olarak hazırladım. Kurallar değiştikçe de güncellemeye özen göstereceğim.
    </p>
    <p class="text-danger">
      Bu websitesindeki bilgilerin hiçbir yasal geçerliliği yoktur. Bu websitesine baktıktan sonra sokağa çıkıp ceza yemeniz durumunda hiçbir yasal sorumluluk kabul etmiyorum.
    </p>
    <p>
      Ayrıca bu websitesi hiçbir <b>kişisel verinizi saklamamaktadır</b>  ve tamamen sizin tarayıcınızda çalışmaktadır.
    </p>
  </b-modal>
</template>

<script>
export default {
  name: 'WarningModal'
}
</script>

<style>

</style>
