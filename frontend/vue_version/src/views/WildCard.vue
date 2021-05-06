<template>
  <el-row>
    <el-col :span="24">
      <el-empty description="Wrong link" />
      <router-link :to="{ name: 'VideoSearch' }">Go back to dashboard</router-link>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>