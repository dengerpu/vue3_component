<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <div>
        <el-button type="primary">
          按钮
        </el-button>
        <el-button type="success">
          按钮
        </el-button>
        <el-button>按钮</el-button>
        <el-button size="small">
          按钮
        </el-button>
      </div>
      <div>
        <el-form
          ref="myForm"
          :model="model"
          :rules="rules"
          style="width: 460px;"
        >
          <el-form-item
            label="用户名："
            prop="username"
          >
            <el-input v-model="model.username" />
          </el-form-item>
          <el-form-item
            label="密码："
            prop="password"
          >
            <el-input
              v-model="model.password"
              type="password"
            />
          </el-form-item>
          <br>
          <el-form-item>
            <el-button
              type="primary"
              @click="login"
            >
              登 录
            </el-button>
          </el-form-item>
        </el-form>
      </div>    
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
    <hr>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import {FormType} from './components/form/type'
const model = reactive({
  username: "",
  password: "",
})

const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名！",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码！",
    },
  ],
})
// 获取表单实例
const myForm = ref<FormType>()
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model)
    } else {
      alert("请正确填写表单！")
    }
  })
}
</script>

<style scoped>
body{
  width:1000px;
  margin:10px auto;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
