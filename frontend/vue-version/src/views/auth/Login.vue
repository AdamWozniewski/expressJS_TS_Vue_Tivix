<template>
  <el-card shadow="always">
    <template #header>
      <div class="card-header">
        <span>Login to app</span>
      </div>
    </template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item prop="email" label="Email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="validForm">Submit</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
    <el-divider />
    <el-col :span="24" class="flex justify-center">
      <p>Don't have an account?
        <router-link :to="{ name: 'CreateUser' }" >
          <el-link type="primary">Sign up!</el-link>
        </router-link>
      </p>
    </el-col>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import AuthService from '@/services/AuthService';
import RuleMixin from '@/mixins/RuleMixin.vue';

export default defineComponent({
  name: 'login-component',
  mixins: [ RuleMixin ],
  methods: {
    ...mapMutations('user', ['SET_USER']),
    async validForm() {
      await this.$refs['ruleForm'].validate(async valid => {
        if (valid) this.submit();
        else return false;
      });
    },
    async submit () {
        try {
          const { email, password }: { email: string, password: string } = this.ruleForm;
          const { token, refreshToken }: { token: any, refreshToken: any } = await AuthService.login({ email, password });
          token && refreshToken && this.$router.push({ name: 'Home' });
        } catch ({ message }) {
          this.$message({
            type: 'error',
            message,
          });
        }
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields();
    }
  }
});
</script>
