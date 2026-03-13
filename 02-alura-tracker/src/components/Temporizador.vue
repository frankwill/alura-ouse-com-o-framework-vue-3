<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Temporizador",
  components: {
    Cronometro,
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++;
      }, 1000);
    },

    finalizar() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
    },
  },
});
</script>

<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <button @click="iniciar" class="button" :disabled="cronometroRodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button @click="finalizar" class="button" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>
