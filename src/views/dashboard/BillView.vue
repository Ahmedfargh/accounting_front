<template>
  <div>
    <MainHead />
    <SideBar />
    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden"
    >
      <navBar />
      <Billtable />
    </main>
  </div>
</template>
<script>
import MainHead from "../../components/HeadComponent.vue";
import SideBar from "../../components/asideBar.vue";
import navBar from "../../components/navBar.vue";
import Billtable from "./../../components/dashboardContent/BillingComponents/billComponents.vue";
export default {
  components: {
    MainHead,
    SideBar,
    navBar,
    Billtable,
  },
};
</script>
