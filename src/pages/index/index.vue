<template>
  <div id="content">
       <div class="notify">
          <span class="laba"></span>
          <span class="notify-content">公告: 欢迎来到我的轻博客</span>
      </div>
      <div class="artical-item">
            <h3 class="title">javascript事件驱动原理</h3>
            <p class="publish_date">发布于: 2020-04-08</p>
            <div class="artical-content">父爱如山，不善表达。回想十多年前，总记得父亲有个宽厚的肩膀，小小的自己跨坐在上面，越过人山人海去看更广阔的天空，那个时候期望自己有一双翅膀，能够像鸟儿一样飞得高，看得远。虽然父亲有时会和自己开玩笑，但在做错事的时候会受到严厉的训斥。父亲有双粗糙的大手掌</div>
            <div class="comment-box">
                <a href="javascript:void(0)">评论</a>
                <a href="javascript:void(0)">点赞</a>
            </div>
      </div>
      <div class="artical-item">
            <h3 class="title">javascript事件驱动原理</h3>
            <p class="publish_date">发布于: 2020-04-08</p>
            <div class="artical-content">父爱如山，不善表达。回想十多年前，总记得父亲有个宽厚的肩膀，小小的自己跨坐在上面，越过人山人海去看更广阔的天空，那个时候期望自己有一双翅膀，能够像鸟儿一样飞得高，看得远。虽然父亲有时会和自己开玩笑，但在做错事的时候会受到严厉的训斥。父亲有双粗糙的大手掌</div>
            <div class="comment-box">
                <a href="javascript:void(0)">评论</a>
                <a href="javascript:void(0)">点赞</a>
            </div>
      </div>
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
            
        }
    } 
  }
}
</script>

<style scoped>
    #content {
       padding: 0.1rem;
    }
    .good-num, .laba {
      font-family: blogIcon!important;
      font-size: 0.2rem;
    }
    .good-num::before {
        content: "\e6c6";
    }
    .laba::before {
      content: "\e645";
      color: #999;
      font-size: 0.25rem;
    }
    .notify {
        height: 0.6rem;
        background: #fff;
        padding-left: 0.4rem;
        font-size: 0.12rem;
        line-height: 0.6rem;
    }
    .notify-content {
        font-size: 0.15rem;
        color: #737373;
        position: relative;
        top: -0.03rem;
    }
    .artical-item {
      margin-top: 0.1rem;
      background-color:#fff;  
      font-size:0.12rem;
      position: relative;
    }
    h3.title {
      font-size: 0.2rem;
      color: #464646;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0.2rem 0.2rem 0 0.2rem;
    }
    .publish_date {
       font-size: 0.13rem;
       margin-top: 0.13rem;
       color: #adadad;
       padding: 0rem 0.2rem 0 0.2rem;
    }
    .artical-content {
        white-space: pre-line;
        font-size: 0.14rem;
        line-height: 0.28rem;
        margin-top: 0.1rem;
        max-height: 2rem;
        color: #464646;
        overflow: hidden;
        padding: 0rem 0.2rem 0.15rem 0.2rem;
    }
    .comment-box {
      height: 0.5rem;
      background: #f9f9f9;
      width:100%;
      bottom: 0;
      font-size: 0.12rem;
    }
    .comment-box a {
        display: inline-block;
        width: 49%;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.15rem;
        text-decoration: none;
        color: #444;
    }
</style>
