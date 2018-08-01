<template>
  <div class="main">
    <AppHeader />
    <DynaCrumb />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "/src/components/Header"
import DynaCrumb from "/src/components/DynaCrumb"

export default {
  name: "Main",
  components: {
   AppHeader,
   DynaCrumb
  }
};
</script>
