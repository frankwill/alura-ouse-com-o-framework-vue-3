<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import type ITarefa from "../interface/ITarefa";
import Box from "./Box.vue";

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
    Box,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
  emits: ["aoTarefaClicada"],
  methods: {
    tarefaClicada(): void {
      this.$emit("aoTarefaClicada", this.tarefa);
    },
  },
});
</script>

<template>
  <Box>
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-4">{{ tarefa.descricao || "Tarefa sem descrição" }}</div>
      <div class="column is-3">
        {{ tarefa.projeto.nome }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<style scoped>
.clicavel {
  cursor: pointer;
}
</style>
