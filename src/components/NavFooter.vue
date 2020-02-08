<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>仿小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">其他标签页面</a><span>|</span>
            <a href="">其他标签页面</a><span>|</span>
            <a href="">其他标签页面</a><span>|</span>
             <a href="">其他标签页面</a>
        </div>
        <div class="copyright">
            注意：本程序是一个VUE的前端项目，注重前端交互，未接入后台接口，数据采用本地json格式的数据，请求都为GET，因此功能只是模拟实现。
            <br>
            页面一个有四个，首页、商品详情页、登录界面、购买界面。
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
    .footer{
        height: 230px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size:16px;
        text-align: center;
        .footer-logo{
            margin-top:46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin:0 10px;
            }
            margin-bottom: 13px;
        }

    }
</style>