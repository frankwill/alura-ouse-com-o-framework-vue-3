<template>
  <div class="notificacoes">
    <article
      class="message"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
      :class="contexto[notificacao.tipo]"
    >
      <div class="message-header">{{ notificacao.titulo }}</div>
      <div class="message-body">{{ notificacao.texto }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interface/INotificacao";
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Notificacoes",
  data() {
    return {
      contexto: {
        [TipoNotificacao.SUCESSO]: "is-success",
        [TipoNotificacao.ATENCAO]: "is-warning",
        [TipoNotificacao.FALHA]: "is-danger",
      },
    };
  },
  setup() {
    const store = useStore();

    const notificacoes = computed(() => store.state.notificacoes);

    return {
      notificacoes,
    };
  },
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 5;
}
</style>
