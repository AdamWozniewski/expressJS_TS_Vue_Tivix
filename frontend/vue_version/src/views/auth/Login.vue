<template>
  <el-card shadow="always">
    <template #header>
      <div class="card-header">
        <span>Login to app</span>
      </div>
    </template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" />
      </el-form-item>
      <el-form-item prop="email" label="Email">
        <el-input v-model="ruleForm.email" />
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

<script>
// import { defineComponent } from 'vue'
import AuthService from "@/services/AuthService";
import RuleMixin from "@/mixins/RuleMixin";

export default {
  name: 'Login',
  mixins: [ RuleMixin ],
  methods: {
    async validForm() {
      await this.$refs['ruleForm'].validate(async (valid) => {
        if (valid) this.submit()
        else return false;
      });
    },
    async submit () {
        try {
          const { email, pass } = this.ruleForm
          const data = await AuthService.login({ email, pass })
          console.log(data)
        } catch ({ message }) {
          this.$message({
            type: 'error',
            message
          })
        }
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields();
    }
  }
}
</script>
