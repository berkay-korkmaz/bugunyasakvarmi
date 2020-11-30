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
    <p class="text-danger font-weight-bold">
      Bu uygulamadaki bilgilerin hiçbir yasal geçerliliği ve güncellik garantisi yoktur. Bu uygulama ile sokağa çıkma yasağı sorgulaması yaptıktan sonra sokağa çıkıp ceza yemeniz durumunda hiçbir yasal sorumluluk kabul etmiyorum.
    </p>
    <p>
      Bu websitesini çeşitli haber kaynaklarından aldığım bilgiler doğrultusunda, insanların kafa karışıklığını gidermek amacıyla gönüllü olarak hazırladım. Kurallar değiştikçe de güncellemeye özen gösteriyorum.
    </p>
    <p>
      bugunyasakvarmi.com hiçbir <b>kişisel verinizi saklamamaktadır</b>. Yalnızca sizin tarayıcınızda çalışmaktadır. Ayrıca da açık kaynak kodlu bir projedir. Kaynak kodlarına <b-link
        href="https://github.com/berkay-korkmaz/bugunyasakvarmi"
        class="text-decoration-none font-weight-bold">
        buradan ulaşabilirsiniz.
      </b-link>
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
