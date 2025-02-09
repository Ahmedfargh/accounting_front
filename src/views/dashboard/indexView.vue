<template>
  <div>
    <MainHead />
    <SideBar />
    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden"
    >
      <navBar />
      <mainContent />
    </main>
  </div>
</template>
<script>
import MainHead from "../../components/HeadComponent.vue";
import SideBar from "../../components/asideBar.vue";
import navBar from "../../components/navBar.vue";
import mainContent from "../../components/dashboardContent/mainContent.vue";
export default {
  components: {
    MainHead,
    SideBar,
    navBar,
    mainContent,
  },
};
</script>
