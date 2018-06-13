<template>
    <article id="main-login" class="wrapper wrapper-login">
        <div class="login-box">
            <div class="cells item-logo">
                <img src="~assets/img/logo.png" class="img-responsive">
            </div>
            <div class="mt20">
                <input type="text" class="text" placeholder="请输入您的用户名" v-model="userName">
            </div>
            <div class="mt20">
                <input type="text" class="text" placeholder="请输入您的密码" v-model="password" onfocus="this.type='password'">
            </div>
            <div class="mt20 flex">
                <div class="btn btn-primary btn-md flex-bd" @click="loginFn">登录</div>
            </div>
            <div class="mt20 text-center text-xs">
                CopyRight © 2018&nbsp;&nbsp;
                <a href="http://www.miitbeian.gov.cn/" target="_blank">沪ICP备16049830号</a></div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                userName:'',
                password:''
            }
        },
        methods:{
            loginFn(){
                this.$login({
                    empNo:this.userName,
                    password:this.password
                },(response)=>{
                    const role = response.role.rolecode
                    if(role == 'sales'){
                        //销售人员
                        this.$router.push({
                            name:'askprice'
                        })
                    } else if(role == 'assistant'){
                        //海外专员
                        this.$router.push({
                            name:'askprice'
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
#main-index{
    position:relative;
    width:100%;height:100%;
    overflow-y:auto;
    -webkit-overflow-scrolling: touch;
}
</style>
