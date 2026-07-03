import type { InjectionKey } from "vue";
import { createStore, Store, useStore as useStoreVuex } from "vuex";
import {
  ADICIONA_TAREFA,
  ALTERA_TAREFA,
  ATUALIZA_TAREFA,
  NOTIFICAR,
  REMOVE_TAREFA,
} from "./tipo-mutacoes";
import type ITarefa from "@/interface/ITarefa";
import { type INotificacao } from "@/interface/INotificacao";
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, DEFINIR_TAREFAS, OBTER_TAREFAS } from "./tipo-acoes";
import http from "@/http";
import { projeto, type EstadoProjeto } from "./modulos/projeto";

export interface Estado {
  tarefas: ITarefa[];
  notificacoes: INotificacao[];
  projeto: EstadoProjeto;
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    tarefas: [],
    notificacoes: [],
    projeto: {
      projetos: [],
    },
  },
  mutations: {
    [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas;
    },
    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa);
    },
    [ATUALIZA_TAREFA](state, tarefa: ITarefa) {
      const indice = state.tarefas.findIndex((p) => p.id == tarefa.id);
      state.tarefas[indice] = tarefa;
    },
    [REMOVE_TAREFA](state, id: number) {
      state.tarefas = state.tarefas.filter((p) => p.id != id);
    },
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id != novaNotificacao.id,
        );
      }, 3000);
    },
    [ALTERA_TAREFA](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex((t) => t.id === tarefa.id);
      state.tarefas[index] = tarefa;
    },
  },
  actions: {
    [OBTER_TAREFAS]({ commit }, filtro: string) {
      let url = "tarefas";

      if (filtro) {
        url += "?descricao=" + filtro;
      }

      http.get(url).then((resposta) => commit(DEFINIR_TAREFAS, resposta.data));
    },
    [CADASTRAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http
        .post("tarefas", tarefa)
        .then((resposta) => commit(ADICIONA_TAREFA, resposta.data));
    },
    [ALTERAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http.put(`tarefas/${tarefa.id}`, tarefa).then(() => commit(ALTERA_TAREFA, tarefa));
    },
  },
  modules: {
    projeto,
  },
});

export function useStore(): Store<Estado> {
  return useStoreVuex(key);
}
