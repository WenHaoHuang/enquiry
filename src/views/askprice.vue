<template>
    <div class="wrapper wrapper-flex">
        <header-bar></header-bar>
        <div class="wrapper-tbody">
            <div class="wrapper-menu">
                <menu-bar></menu-bar>
            </div>
            <div class="wrapper-content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import headerBar from 'components/headerBar'
    import menuBar from 'components/askpriceMenu'
    export default {
        name: "index",
        components:{
            headerBar,
            menuBar
        }
    }
</script>

<style lang="scss">

</style>
