<template>
  <el-row>
    <el-col :span="24">
      <h2>Secret Admin View</h2>
      <el-divider />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-empty description="This is Secret View" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import {mapState} from "vuex";

export default defineComponent({
  // computed: {
  //   ...mapState('user', ['user']),
  // },
  // beforeRouteEnter: (to: any, from: any, next: Function) => {
  //   // if (getCookie('JWT')) next();
  //   // else next('login');
  //   // console.log(this.user?.roles?.includes('admin'))
  //   // next();
  // },
})
</script>
