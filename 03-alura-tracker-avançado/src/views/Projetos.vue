<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nome-do-projeto" class="label">Nome do projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nome-do-projeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import type IProjeto from "../interface/IProjeto";
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projetos",
  data() {
    return {
      nomeDoProjeto: "",
      projetos: [] as IProjeto[],
    };
  },
  methods: {
    salvar() {
      const projeto: IProjeto = {
        nome: this.nomeDoProjeto,
        id: new Date().toISOString(),
      };

      this.projetos.push(projeto);
      this.nomeDoProjeto = "";
    },
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
