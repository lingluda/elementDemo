//@分页控件。
<template>
  <div class="myPagination">
    <div class="div2">共 {{total}} 项</div>

    <div class="div4">
      <el-button class="button1" :disabled="MyCurrentPage==1" @click="MyCurrentPage = 1"></el-button>
      <el-button class="button2" :disabled="MyCurrentPage==1" @click="MyCurrentPage--"></el-button>
      <el-select v-model="MyCurrentPage" class="select2" size="mini">
        <el-option v-for="index in pageNum" :key="index" :label="index +'/'+pageNum" :value="index">
          <span>{{index>=10?index:'0'+index}}</span>
        </el-option>
      </el-select>
      <el-button class="button3" :disabled="MyCurrentPage==pageNum" @click="MyCurrentPage++"></el-button>
      <el-button
        class="button4"
        :disabled="MyCurrentPage==pageNum"
        @click="MyCurrentPage = pageNum"
      ></el-button>
    </div>

    <div class="div3">每页显示行
      <el-select v-model="MyPageSize" class="select1" size="mini">
        <el-option v-for="item in [5, 10, 20, 30, 50, 100]" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //总记录数
    total: {
      type: [Number, String],
      default: 0
    },
    //每页长度
    pageSize: {
      type: [Number, String],
      default: 10
    },
    //当前页数。
    currentPage: {
      type: [Number, String],
      default: 1
    }
  },

  data() {
    return {
      //当前页数。
      MyCurrentPage: 1,
      //每页长度
      MyPageSize: 10
    };
  },

  computed: {
    //总页数。
    pageNum() {
      return Math.ceil(this.total / this.pageSize) || 1;
    }
  },

  watch: {
    currentPage() {
      this.MyCurrentPage = this.currentPage;
    },
    pageSize() {
      this.MyPageSize = this.pageSize;
    },
    MyCurrentPage() {
      this.$emit("update:currentPage", this.MyCurrentPage);
    },
    MyPageSize() {
      this.MyCurrentPage = 1;
      this.$emit("update:pageSize", this.MyPageSize);
    }
  }
};
</script>

<style lang="less">
// 下拉框样式
.myPagination {
  .select1 {
    input {
      padding: 0 0 0 5px;
      width: 50px;
      color: #000000;
      font-weight: bold;
      font-size: 16px;
    }
  }

  .select2 {
    input {
      padding: 0 0 0 5px;
      width: 70px;
      color: #000000;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>

<style lang="less" scoped>
.myPagination {
  margin-top: 10px;

  // 解决高度塌陷
  &:after {
    content: "";
    display: block;
    clear: both;
  }

  .div2 {
    float: left;
    font-size: 16px;
    color: #888888;
    line-height: 28px;
  }

  .div3 {
    float: right;
    font-size: 16px;
    color: #888888;
  }

  .div4 {
    float: right;
    margin: 0 0 0 20px;

    .button {
      height: 28px;
      width: 28px;
      padding: 0;
      margin: 0;
      float: left;
    }

    .button1 {
      background: url(../../assets/imgs/pagination1.png) no-repeat 50% 50%;
      .button;
    }

    .button2 {
      background:url(../../assets/imgs/pagination2.png) no-repeat 50% 50%;
      .button;
    }

    .button3 {
      background: url(../../assets/imgs/pagination2.png) no-repeat 50% 50%;
      transform: rotateY(180deg);
      .button;
    }

    .button4 {
      background: url(../../assets/imgs/pagination1.png) no-repeat 50% 50%;
      transform: rotateY(180deg);
      .button;
    }

    .select2 {
      float: left;
    }
  }
}
</style>
