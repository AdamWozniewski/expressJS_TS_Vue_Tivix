<template>
  <el-row>
    <el-col :span="24">
      <h2>Search Video</h2>
      <el-divider />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-input
          placeholder="Please input title"
          suffix-icon="el-icon-search"
          v-model="title"
          clearable>
      </el-input>
      <el-divider />
    </el-col>
    <el-col :span="24">
      <el-select
        v-model="selectedVideoType"
        placeholder="Select type"
        class="w-full"
        clearable>
        <el-option
            v-for="type in videoTypes"
            :key="type"
            :label="type"
            :value="type">
        </el-option>
      </el-select>
      <el-divider />
    </el-col>
    <el-col :span="24">
      <el-date-picker
          v-model="year"
          type="year"
          placeholder="Pick a year">
      </el-date-picker>
      <el-divider />
    </el-col>
    <el-col :span="24">
      <el-button icon="el-icon-search" type="primary" @click="search">Search</el-button>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6" v-for="(item, index) in 4" :key="index">
      <el-card class="box-card">
        <div>
          information
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-empty description="Empty" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface VideoSearch {
  videos: object[];
  $message: any;
  title: string;
  videoTypes: string[];
  selectedVideoType: string;
  year: string;
}

export default defineComponent({
  data() {
    return {
      videos: [],
      $message: {},
      title: '',
      videoTypes: ['movie', 'series', 'episode'],
      selectedVideoType: '',
      year: '',
    } as VideoSearch;
  },
  methods: {
    search() {
      console.log(this.selectedVideoType)
      console.log(this.year)
      console.log(this.title)
    }
  }
});
</script>