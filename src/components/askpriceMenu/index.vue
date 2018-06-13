<template>
    <div id="menu" class="menu-bar">
        <div class="menu-list" v-for="(list,index) in menuList" :key="list.id">
            <div class="item"
                 :class="`item-${index}-${_index}`"
                 v-for="(item,_index) in list"
                 :key="item.id"
                 @click="menuFn(item.link)"
            >
                <span v-if="item.key">{{menuCount[item.key]}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                menuList: [[{
                    key: 'myInquiryCount',
                    link: 'askpriceIndex'
                }], [{
                    link: 'askpriceDemand'
                }, {
                    key: 'taskRobSingleCount',
                    link: 'askpriceTask'
                }, {
                    key: 'uploadPriceCount',
                    link: 'askpriceOffer'
                }, {
                    key: 'priceFeedbackCount',
                    link: 'askpriceFeedback'
                }, {
                    key: 'inquiryArchiveCount',
                    link: 'askpriceOrder'
                }], [{
                    link: 'askpriceProgress'
                }, {
                    link: 'askpriceData'
                }, {
                    link: 'askpriceFiles'
                }]],
                menuCount: {
                    inquiryArchiveCount: 0,
                    myInquiryCount: 0,
                    priceFeedbackCount: 0,
                    taskRobSingleCount: 0,
                    uploadPriceCount: 0,
                }
            }
        },
        mounted() {
            this.getMenuCount()
        },
        methods: {
            getMenuCount() {
                this.$ajax({
                    api: '/askprice/menuCount'
                }, response => {
                    this.menuCount = response
                    setTimeout(() => {
                        if (this && !this._isDestroyed) {
                            this.getMenuCount()
                        }
                    }, 60000)
                })
            },
            menuFn(str) {
                this.$router.push({
                    name: str
                })
            }
        }
    }
</script>

<style lang="scss">

</style>
