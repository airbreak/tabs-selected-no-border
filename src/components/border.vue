<template>
  <div class="hello">
      <div class="panel-body-nav-bar">
        <div class="panel-body-nav-bar-content">
            <div class="nav-bar-item"
                :class="{selected:searchOrderType=='list'}"
                @click="switchSearchOrderType('list')">选择订单</div>
            <div class="nav-bar-item"
                :class="{selected:searchOrderType=='input'}"
                @click="switchSearchOrderType('input')">输入订单</div>
        </div>
    </div>
    <!-- 每个tab对应的内容 -->
    <div class="panel-body-nav-content">
        <div class="panel-body-nav-content-item" v-show="searchOrderType=='list'">
            1
        </div>
        <div class="panel-body-nav-content-item" v-show="searchOrderType=='input'">
            2
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <a href="#/noborder/">没有底边框(margin-bottom实现方式)</a>
     <br/>
    <a href="#/noborder1/">没有底边框(box-sizing实现方式)</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchOrderType:'list'
    }
  },
  methods: {
    switchSearchOrderType (val){
      this.searchOrderType = val
    }
  }
}
</script>

<style scoped>
	.panel-body-nav-bar{
      border-bottom: 1px solid #e4e7ed;
      margin:20px 0 20px;
      height: 40px;
    }
    .panel-body-nav-bar-content{
        border: 1px solid #e4e7ed;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        white-space: nowrap;
        height: 100%;
        float: left;
        display: flex;
    }
    .panel-body-nav-bar-content .nav-bar-item{
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #333;
        border-left: 1px solid #e4e7ed;
    }
    .panel-body-nav-bar-content .nav-bar-item:first-child{
        border-left: none;
    }
    .panel-body-nav-bar-content .nav-bar-item.selected{
        color: #409eff;
    }
</style>
