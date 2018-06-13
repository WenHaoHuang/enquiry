<template>
    <div class="container">
        <div class="section-box bg-white">
            <div class="box-head">
                <div class="item-title">询价详情</div>
                <div class="item-ft">
                    <div class="btn btn-xs btn-success">
                        归档
                    </div>
                    <div class="btn btn-xs btn-success">
                        上传报价
                    </div>
                    <div class="btn btn-xs btn-success">
                        添加备注
                    </div>
                    <div class="btn btn-xs btn-success">
                        作废
                    </div>
                    <div class="btn btn-xs btn-success">
                        返回
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inquiry-detail",
        data() {
            return {
                inquiryId: '',
                infoData:{},
                logData:[],
                quotationData:[]
            }
        },
        mounted() {
            const query = this.$route.query;
            this.inquiryId = query.inquiryid
            this.getBaseData();
        },
        methods: {
            getBaseData() {
                this.$ajax({
                    api: '/askprice/inquiryDetail',
                    params: {
                        inquiryId: this.inquiryId
                    }
                }, response => {
                    this.infoData = response.info;
                    this.logData = response.log;
                    this.quotationData = response.quotation;
                })
            }
        }
    }
</script>

<style lang="scss">

</style>
