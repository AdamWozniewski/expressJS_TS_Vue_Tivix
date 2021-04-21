<template>
  <el-row>
    <el-col :span="24">
      <h1>Favourities</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col class="mb-10" :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">28.04.1992</time>
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>
