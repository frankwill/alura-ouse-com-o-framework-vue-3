<template>
  <header>
    <h1><img src="../assets/logo.png" alt="Logo AluraTracker" /></h1>
    <button @click="alterarTema" class="button">{{ textoBotao }}</button>
    <nav class="panel mt-5">
      <ul class="p-2">
        <li>
          <router-link to="/" class="link">
            <i class="fa fa-tasks">Tarefas</i>
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fa fa-project-diagram">Projetos</i>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return "Desativar modo escuro";
      }

      return "Ativar modo escuro";
    },
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

.panel ul li {
  text-align: start;
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
