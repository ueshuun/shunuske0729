import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hokkaido: "",
    tokyo:"",
    osaka: "",
    hukuoka: ""
  },
   getters: {
    getHokkaido(state) {
      return state.hokkaido;
    },
    getTokyo(state) {
      return state.tokyo;
    },
    getOsaka(state) {
      return state.osaka;
    },
    getHukuoka(state) {
      return state.hukuoka;
    }
  },
  mutations: {
    setHokkaido(state, hokkaidoWeather) {
      state.hokkaido = hokkaidoWeather;
    },
    setTokyo(state, tokyoWeather) {
      state.tokyo = tokyoWeather;
    },
    setOsaka(state, osakaWeather) {
      state.osaka = osakaWeather;
    },
    setHukuoka(state, hukuokaWeather) {
      state.hukuoka = hukuokaWeather;
    }
  },
  actions: {
    async Hokkaido({ commit }) {
    const res = await axios.get("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/016000.json");
    commit("setHokkaido", res.data.text);
    },
    async Tokyo({ commit }) {
      const res = await axios.get("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json");
      commit("setTokyo", res.data.text);
    },
    async Osaka({ commit }) {
      const res = await axios.get("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/270000.json");
      commit("setOsaka", res.data.text);
    },
    async Hukuoka({ commit }) {
      const res = await axios.get("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/400000.json");
      commit("setHukuoka", res.data.text);
    }
  }
})
