<script lang="ts">
export default {
  name: 'RuleMixin',
  data() {
    const validatePass = (rule, value, callback)  => {
      if (!value) callback(new Error('Please input the password'));
      else {
        if (this.ruleForm.password) this.$refs.ruleForm.validateField('password');
        callback();
      }
    };
    const confirmPass = (rule, value, callback) => {
      if (!value) callback(new Error('Please input the password again'));
      else if (value !== this.ruleForm.password) callback(new Error('Two inputs don\'t match!'));
      else callback();
    };
    return {
      ruleForm: {
        password: 'admin',
        checkPass: '',
        email: 'admin@admin.admin',
        first_name: '',
        last_name: '',
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
        ],
        checkPass: [{ validator: confirmPass, trigger: 'blur' }],
        first_name: [{ required: true, message: 'Please input first name', trigger: 'blur' }],
        last_name: [{ required: true, message: 'Please input last name', trigger: 'blur' }],
      },
    };
  },
};
</script>
