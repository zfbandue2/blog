<template>
  <div id="content">
      <img src="../../assets/images/logo.png"/>
      xxx
  </div>
</template>

<script>
import utils from "@components/common/utils"
export default {
  name: 'index',
  data () {
    return {
    
    }
  },
  mounted() {
    window.onscroll = function(e) {
        if(utils.isScrollBottom()) {
            console.log("bottom!");
        }
    } 
  }
}
</script>

<style>
   #content {
     color:red;
   }
</style>
