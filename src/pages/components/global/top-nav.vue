<template>
    <div>
        <header class="hd">
           <img src="../../../assets/images/logo.png" class="logo"/>
           <span class="web-name">闲言</span> 
           <ul class="menu-btn" @click="showMenuItem">
                <li></li>
                <li></li>    
                <li></li>        
           </ul> 
           <ul class="menu-list" v-show="isShow">
                <li><router-link :to="{path: '/'}" @click.native="hideMenuItem">首页</router-link></li>
                <li><router-link :to="{path: '/about'}" @click.native="hideMenuItem">关于</router-link></li>     
           </ul> 
       </header>
    </div>
</template>

<script>
    export default {
        name: 'top-nav',
       data () {
            return {
                isShow: false
            }
        },
        methods: {
            showMenuItem() {
                this.isShow = !this.isShow;
            },
            hideMenuItem() {
                this.isShow = false;
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
        border-bottom: 1px solid #00adff;
    }
    .menu-list {
        position: absolute;
        width: 100%;
        height: 0.93rem;
        z-index: 1000;
        left: 0;
        top: 1.01rem;
        background: #1e9fff;  
        font-size: 0.2rem;
        text-align: center;  
        line-height: 0.4rem;
    }
    .menu-list li {
        margin-top: 0.05rem;
        border-bottom: 1px solid #00adff;
    }
    .menu-list li a {
        color:#fff;
        text-decoration: none;
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
    .menu-btn {
        width: 0.5rem;
        height: 0.15rem;
        float: right;
        margin-right: 0.3rem;
        margin-top: 0.45rem;
        overflow:hidden;
    }
    .menu-btn li {
        width:0.1rem;
        height: 0.1rem;
        background: #fff;
        float: left;
        margin-right:0.06rem;
        border-radius: 100%;
    }
</style>