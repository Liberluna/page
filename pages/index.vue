<template>
  <div class="page">
    <script>
      alert("Liberluna.github.io に移転しました");
    </script>
    <LiberlunaHeader :class="{'hidden':scrollY<10}" class="liberluna-header-index"/>
    <MainTitle/>
    <div id="main-title-end"/>
    <MainDesc/>
    <LiberlunaFooter/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import LiberlunaHeader from '~/components/liberluna_header.vue'
import LiberlunaFooter from '~/components/liberluna_footer.vue'
import MainTitle from '~/components/index/main_title.vue'
import MainDesc from '~/components/index/main_desc.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    LiberlunaHeader,
    LiberlunaFooter,
    MainTitle,
    MainDesc,
  },
  data() {
    return {
      scrollY: 0
    }
  },
  head: {
    title: "Liberluna",
    meta: [
      { charset: "utf-8" },
      { hid: 'description', name: 'description', content: 'Liberluna\'s page.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
})
</script>
<style>
.page{
  width:100%;
  height:100%;
  position:relative;
}
.hidden{
  visibility:hidden;
}
.liberluna-header-index{
  position:fixed;
  z-index: 1;
  top:0px;
  left:0px;
}
</style>
