<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-openeds="['1']">
        <el-menu-item :key="index" v-for="({ name, exact, icon, title }, index) in routes">
          <i :class="icon" />
          <el-link type="primary">
            <router-link :to="{ name }" :exact="exact">{{ title }}</router-link>
          </el-link>
        </el-menu-item>
        <el-divider />
        <el-menu-item>
          <i class="el-icon-video-pause" />
          <el-link type="primary">
            Logout
          </el-link>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="userProfile">User Profile</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
  <ModalBasic />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from "vuex";
import routes from '@/router/routes';
import ModalBasic from '@/components/ModalBasic.vue'
export default defineComponent({
  components: { ModalBasic },
  data() {
    return {
      routes
    }
  },
  methods: {
    ...mapMutations('utilities', ['SET_MODAL_VISIBILITY', 'SET_MODAL_PROPS']),
    userProfile() {
      this.SET_MODAL_VISIBILITY(true)
      this.SET_MODAL_PROPS({
        title: 'User Information',
        type: 'UserInformation',
      })
    }
  }
})
</script>