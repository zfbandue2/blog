<template>
    <div>
        <header class="hd">
           <img src="../../../assets/images/logo.png" class="logo"/>
           <span class="web-name">闲言</span> 
       </header>
        
    </div>
</template>

<script>
    export default {
    name: 'top-nav',
        data () {
            return {
                
            }
        }
    }
</script>

<style scoped>
     .hd {
        background: #1e9fff;
        height: 1rem;
        position: relative;
        line-height: 0.53rem;
        color: #fff;
    }
    .logo {
        width:0.6rem;
        position: absolute;
        left: 0.4rem;
        top: 0.2rem;
    }
    .web-name {
        font-size: 0.4rem;
        margin-left: 1.1rem;
    }
</style>