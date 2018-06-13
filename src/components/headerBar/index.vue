<template>
    <div id="header" class="header-bar">
        <div class="logo"></div>
        <div class="header-menu">
            <div class="item item-desc">{{rolename}}，{{username}}</div>
            <div class="item item-icon active"><i class="fa fa-user"></i></div>
            <div class="item item-icon"><i class="fa fa-question"></i></div>
            <div class="item item-icon" @click="logoutFn"><i class="fa fa-power-off"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                username: '',
                rolename: ''
            }
        },
        mounted() {
            const userInfo = JSON.parse(localStorage.getItem('userInfo') || {})
            this.username = userInfo.ename || ''
            this.rolename = userInfo.role.rolename || ''
        },
        methods:{
            logoutFn(){
                this.$logout(()=>{
                    this.$router.push({
                        name:'login'
                    })
                })
            }
        }
    }
</script>

<style lang="scss">
    .header-bar {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #007ffd;
        height: 44px;
        color: #FFF;
        padding: 0 15px;
        .logo {
            width: 200px;
            height: 44px;
            background: transparent url("./img/logo.png") scroll 0 center no-repeat;
        }
        .header-menu {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .item-icon {
                margin-left: 10px;
                width: 22px;
                height: 22px;
                border-radius: 100%;
                border: 1px solid #6aa1fd;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                &:hover, &.active {
                    background-color: #6aa1fd;
                }
            }
            .item-desc {
                font-size: 0.24rem;
            }
        }
    }
</style>
