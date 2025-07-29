<template>
  
  <div class="weather">
    <h1>天気</h1>
    <p>北海道：{{hokkaido}}</p>
    <p>東京都：{{tokyo}}</p>
    <p>大阪府：{{osaka}}</p>
    <p>福岡県：{{hukuoka}}</p>
  </div>
</template>

<style>
.weather{
  text-align: center;
  margin-top: 20px;
  background-image: url('https://th.bing.com/th/id/R.b1367413983bd273afa7002e8e6b8362?rik=KeAVUPqTl7POrA&riu=http%3a%2f%2ftmyun.com%2fjpeg%2fyun_14355.jpg&ehk=G7qOuYgxS5v%2bbUU78xwsUxVcKuEDJs4ickkuS6Qbh4g%3d&risl=&pid=ImgRaw&r=0');
  background-size: cover;
  background-position: center;
  height:540px;
  }
</style>

<script>
export default {
  name: 'WeatherView',
  computed: {
    hokkaido() {
      return this.$store.getters.getHokkaido;
    },
    tokyo() {
      return this.$store.getters.getTokyo;
    },
    osaka() {
      return this.$store.getters.getOsaka;
    },
    hukuoka() {
      return this.$store.getters.getHukuoka;
    }
  },
  methods: {
    Weather() {
      this.$store.dispatch('Hokkaido');
    },
    Weather02() {
      this.$store.dispatch('Tokyo');
    },
    Weather03() {
      this.$store.dispatch('Osaka');
    },
    Weather04() {
      this.$store.dispatch('Hukuoka');
    }
  }
}
</script>