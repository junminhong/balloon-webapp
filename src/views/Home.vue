<template>
  <Header></Header>
  <ToolBar></ToolBar>
  <CardList></CardList>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import ToolBar from "@/components/ToolBar.vue";
import CardList from "@/components/CardList.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    ToolBar,
    CardList,
    Footer,
  },
};
</script>
