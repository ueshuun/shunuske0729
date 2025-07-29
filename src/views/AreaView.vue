<template>
    <v-container class="weatherview" >
        <v-row justify="center">
            <v-col cols="12" md="6" class="text-center">
                <h2 class="text-h5 font-weight-bold mb-4">各地の天気を表示</h2>
                <v-btn small class="hokkaido" color="primary" @click="Weather">
                    北海道
                </v-btn>
                  <v-btn small class="hokkaido" color="primary" @click="Weather02">
                    東京都
                </v-btn>
                <v-btn small class="osaka" color="primary" @click="Weather03">
                    大阪府
                </v-btn>
                <v-btn small class="fukuoka" color="primary" @click="Weather04">
                    福岡県
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
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

<style>
.weatherview {
  text-align: center;
  margin-top: 20px;
  background-image: url('https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg');
  background-size: cover;
  background-position: center;
  height:540px;
}
.hokkaido {
  margin-right: 10px;
}
.osaka {
  margin-right: 10px;
}

</style>

