# DynaCrumb - Um Breadcrumb dinâmico

> O DynaCrumb é um Breadcrumb dinâmico baseado na dependencia vue-router do vue
> Para utilizar o DynaCrumb, basta copiar o arquivo components/DynaCrumb.vue
> Para o funcionamento correto é necessário seguir o seguinte padrão na hora de listar as rotas:
``` bash
  {
    path: "/",
    component: Inicial,
    meta: { group: "", breadcrumb: "Inicial" }
  }

