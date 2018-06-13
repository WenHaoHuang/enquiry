<template>
    <div class="container">
        <div class="section-kpi">
            <div class="item-kpi item-count">
                <div class="item">总询单数：{{dataKPI.totalInquiryCount}}</div>
                <div class="item">本月询单数：{{dataKPI.monthInquiryCount}}</div>
                <div class="item">本年询单数：{{dataKPI.yearInquiryCount}}</div>
            </div>
            <div class="item-kpi item-win">
                <div class="item">总赢单数：{{dataKPI.totalWinCount}}</div>
                <div class="item">本月赢单数：{{dataKPI.monthWinCount}}</div>
                <div class="item">本年赢单数：{{dataKPI.yearWinCount}}</div>
            </div>
            <div class="item-kpi item-rate">
                <div class="item">总成单率：{{dataKPI.totalWinRate}}</div>
                <div class="item">本月成单率：{{dataKPI.monthWinRate}}</div>
                <div class="item">本年成单率：{{dataKPI.yearWinRate}}</div>
            </div>
        </div>
        <div class="section-box section-inquiry mt40 bg-white">
            <div class="box-head">
                <div class="item-title">我的询价</div>
                <div class="item-ft">
                    <router-link :to="{name:'askpriceFiles'}" class="btn btn-xs btn-success"><i
                        class="fa fa-search"></i> 查询已归档
                    </router-link>
                </div>
            </div>
            <el-table
                :data="inquiryList"
                border
                style="width: 100%">
                <el-table-column
                    fixed
                    prop="inquiryid"
                    label="询价单号"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="contact"
                    label="客户名称"
                    width="90">
                </el-table-column>
                <el-table-column
                    prop="original"
                    label="出发地"
                    width="90">
                </el-table-column>
                <el-table-column
                    prop="oport"
                    label="出发港"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="destination"
                    label="目的地"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="dport"
                    label="目的港"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="remarks"
                    label="运输方式"
                    width="150">
                </el-table-column>
                <el-table-column
                    label="报价"
                    width="180">
                    <template slot-scope="scope">
                        <div class="btn btn-xs btn-primary">S013</div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="inquirydate"
                    label="提交人"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="ctime"
                    label="提交时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="submitter"
                    label="接单人"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="utime"
                    label="接单时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="状态"
                    width="180">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="160">
                    <template slot-scope="scope">
                        <div class="btn btn-xs btn-primary">详情</div>
                        <div class="btn btn-xs btn-primary">报价</div>
                        <div class="btn btn-xs btn-primary">归档</div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="box-footer text-right pt20 pb20">
                <el-pagination
                    background
                    :page-size="pageBean.pageSize"
                    :current-page="pageBean.pageIndex"
                    layout="prev, pager, next"
                    @current-change="pageChange"
                    :total="pageBean.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                dataKPI: {},
                inquiryList: [],
                pageBean: {
                    pageSize: 20,
                    pageIndex: 1,
                    total: 0
                },
                rolecode: ''
            }
        },
        mounted() {
            this.getBaseInfo();
            this.getInquiryList();
            this.rolecode = localStorage.getItem('rolecode');
        },
        methods: {
            getBaseInfo() {
                this.$ajax({
                    api: '/askprice/salesKPI'
                }, response => {
                    this.dataKPI = response
                })
            },
            getInquiryList() {
                const options = {
                    pageSize: this.pageBean.pageSize,
                    pageNum: this.pageBean.pageIndex
                };
                if (this.rolecode == 'sales') {
                    options['submitter'] = 'empNo'
                } else if(this.rolecode == 'assistant'){
                    options['receipter'] = 'empNo'
                }
                this.$ajax({
                    api: '/askprice/inquiryList',
                    params: options
                }, response => {
                    this.inquiryList = response.list;
                    this.pageBean.total = response.total;
                    this.pageBean.pageIndex = response.pageNum;

                })
            },
            pageChange(pageIndex) {
                this.pageBean.pageIndex = pageIndex
                this.getInquiryList()
            }
        }
    }
</script>

<style lang="scss">

</style>
