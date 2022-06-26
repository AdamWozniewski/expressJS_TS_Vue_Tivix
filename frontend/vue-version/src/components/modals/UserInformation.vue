<template>
  <div>
    <h3>Basic Info</h3>
    <p>Name: <el-tag><b>{{ user.first_name }}</b></el-tag></p>
    <p>Last Name: <el-tag><b>{{ user.last_name }}</b></el-tag></p>
    <p>email: <el-tag><b>{{ user.email }}</b></el-tag></p>
    <el-divider />
    <h3>Additional information</h3>
    <p>Videos: <el-tag><b>{{ user.videos }}</b></el-tag></p>
    <p>Roles: <el-tag><b>{{ user.roles }}</b></el-tag></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex';

export default defineComponent({
  computed: {
    ...mapState('user', ['user']),
  },
});
</script>