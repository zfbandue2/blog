<template>
    <div id="content">
        <div class="title">
            拥有诗意的心态，才能拥有诗意生活
        </div>
        <p class="publish_date">发布于: 2020-04-08</p>
        <div class="artical-content">父爱如山，不善表达。回想十多年前，总记得父亲有个宽厚的肩膀，小小的自己跨坐在上面，越过人山人海去看更广阔的天空，那个时候期望自己有一双翅膀，能够像鸟儿一样飞得高，看得远。虽然父亲有时会和自己开玩笑，但在做错事的时候会受到严厉的训斥。父亲有双粗糙的大手掌</div>
        <p class="comment-title">发表评论</p>
        <div class="comment-box">
             <textarea placeholder="请输入评价内容" maxlength="200"></textarea>
             <input type="button" value="发布" class="publish-btn"/>
        </div>
        <div class="comment-list">
            <p>
                <span class="good-num"></span>
                <span class="num">1000+</span>
            </p>
            <div class="comment-item">
                父爱如山，不善表达。回想十多年前，总记得父亲有个
            </div>
            <div class="comment-item">
                父爱如山，不善表达。回想十多年前，总记得父亲有个
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'detail',
        data () {
            return {
                
            }
        }
    }
</script>
<style scoped>
    .title {
        font-size: 0.18rem;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 0.2rem 0 0.2rem;
    }
    #content {
        padding: 0.2rem;
        background-color: #fff;
    }
    .publish_date {
       font-size: 0.15rem;
       margin-top: 0.13rem;
       color: #adadad;
       padding: 0rem 0.2rem 0 0.2rem;
    }
     .artical-content {
        white-space: pre-line;
        font-size: 0.15rem;
        line-height: 0.28rem;
        margin-top: 0.1rem;
        color: #464646;
        overflow: hidden;
        padding: 0rem 0.2rem 0.15rem 0.2rem;
        text-indent: 0.2rem;
    }
    .comment-title {
        font-size: 0.14rem;
        padding: 0 0.2rem 0 0.2rem;
        color:#1d768a;
    }
    .comment-box {
        padding: 0rem 0.2rem 0 0.2rem;
        font-size: 0.12rem;
    }
    .comment-box  textarea {
        border: 1px solid #ddd;
        margin-top: 0.15rem;
        width: 100%;
        height: 0.8rem;
        font-size: 0.13rem;
    }
    .publish-btn {
        padding: 0.05rem 0.16rem;
        background-color: #009688;
        color: #fff;
        border: none;
        font-size: 0.12rem;
        float: right;
        margin-top: 0.1rem;
        border-radius: 0.05rem;
        clear:both;
    }
    .comment-list {
        font-size: 0.12rem;
        margin-top: 0.5rem;
        padding: 0 0.2rem 0 0.2rem;
    }
    .good-num {
      font-family: blogIcon!important;
      font-size: 0.2rem;
    }
    .good-num::before {
        content: "\e6c6";
    }
    .num, .good-num {
        display: inline-block;
        vertical-align: top;
        color:#999;
    }
    .num {
        font-size: 0.15rem;
    }
    .comment-item {
        margin-top: 0.1rem;
        font-size: 0.14rem;
        line-height: 0.25rem;
        color: #444;
        text-indent: 0.2rem;
    }
</style>