<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" />
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ tempoDecorrido }}</strong>
          </section>
          <button @click="iniciar" class="button">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button @click="finalizar" class="button">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Formulario",
  data() {
    return {
      tempoEmSegundos: 0,
    };
  },
  computed: {
    tempoDecorrido() {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19);
    },
  },
  methods: {
    iniciar() {
      setInterval(() => {
        this.tempoEmSegundos++;
      }, 1000);
      console.log("iniciando");
    },

    finalizar() {
      console.log("finalizando");
    },
  },
});
</script>

<style></style>
