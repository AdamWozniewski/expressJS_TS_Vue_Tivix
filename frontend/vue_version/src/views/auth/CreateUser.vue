<template>
  <el-row>
    <el-col :span="24" class="h-auto">
      <el-card shadow="always">
        <template #header>
          <div class="card-header">
            <span>Create user account</span>
          </div>
        </template>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" />
          </el-form-item>
          <el-form-item prop="email" label="Email" >
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-divider />
          <el-form-item prop="first_name" label="First Name" >
            <el-input v-model="ruleForm.first_name"></el-input>
          </el-form-item>
          <el-form-item prop="last_name" label="Last Name" >
            <el-input v-model="ruleForm.last_name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="validForm">Submit</el-button>
            <el-button @click="resetForm">Reset</el-button>
          </el-form-item>
        </el-form>
        <el-divider />
        <el-col :span="24" class="flex justify-center">
          <p>Do you have an account?
            <router-link :to="{ name: 'Login' }" >
              <el-link type="primary">Sign in</el-link>
            </router-link>
          </p>
        </el-col>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// import { defineComponent } from 'vue'
import AuthService from '@/services/AuthService';
import RuleMixin from '@/mixins/RuleMixin';

export default {
  name: 'CreateUser',
  mixins: [ RuleMixin ],
  methods: {
    async validForm() {
      await this.$refs['ruleForm'].validate(async (valid) => {
        if (valid) this.submit()
        else return false;
      });
    },
    async submit() {
      try {
        const { email, password, first_name, last_name } = this.ruleForm;
        await AuthService.createUser({ email, password, first_name, last_name });
        this.$message({
          type: 'success',
          message: 'Create account successfull'
        });
        this.$router.push({ name: 'Login' });
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
  },
};
</script>
