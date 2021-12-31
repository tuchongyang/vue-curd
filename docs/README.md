

<div class="head">
    <img src="https://vuejs.org/images/logo.png">
    <div class="title">EVUE</div>
    <div class="subtit">前端搬砖神器，贴合企业开发</div>
</div>
<div class="control">
    <router-link to="/guide/"><el-button size="large" type="primary">快速开始</el-button></router-link>
</div>


<div class="intro-list">
    <div class="item">
        <div class="title">易用灵活</div>
        <div class="desc">已经会了 Vue element-plus？即刻阅读文档开始使用吧。</div>
    </div>
    <div class="item">
        <div class="title">丰富组件</div>
        <div class="desc">包含了大量的常用组件库以及插件库。</div>
    </div>
    <div class="item">
        <div class="title">高效兼容</div>
        <div class="desc">兼容现在主流的浏览器，开箱即用的插件引入模式。</div>
    </div>
</div>

<style scoped>
.head{
    text-align:center;
}
.head .title{
    font-size: 24px;
    margin-bottom: 40px;
}
.control{
    text-align: center;
    margin-top: 40px;
}
.intro-list{
    overflow: hidden;
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
}
.intro-list .item{
    width: 33.3333333%;
    float: left;
    padding: 0 15px;
    box-sizing: border-box;
}
.intro-list .item .title{
    font-size: 18px;
    margin-bottom: 10px;
}
.intro-list .item .desc{
    color: #999;
}
</style>