<template>
  <div
    class="el-form-item"
  >
    <label
      v-if="label"
      class="el-form-item__label"
      :style="{width: formData.labelWidth}"
    >{{ label }}</label>
    <div class="el-form-item__content" :style="{'margin-left': formData.labelWidth}">
      <slot />
      <p
      v-if="error"
      class="error"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default{
  name:'ElFormItem'
}
</script>

<script setup lang="ts">
import Schema from "async-validator"
import { onMounted, ref, inject } from "vue"
import { FormItem, key } from "./type"
import { emitter } from "../../emitter"

interface Props {
  label?: string
  prop?: string
}
const props = withDefaults(defineProps<Props>(), { label: "", prop: "" })
// 错误
const error = ref("")

const formData = inject(key)

const o: FormItem = {
  validate,
}

defineExpose(o)

onMounted(() => {
  if (props.prop) {
    emitter.on("validate", () => {
      validate()
    })
    emitter.emit("addFormItem", o)
  }
})

function validate() {
  if (formData?.rules === undefined) {
    return Promise.resolve({ result: true })
  }
  const rules = formData.rules[props.prop]
  const value = formData.model[props.prop]
  const schema = new Schema({ [props.prop]: rules })
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      error.value = errors[0].message || "校验错误"
    } else {
      error.value = ""
    }
  })
}
</script>

<style lang="scss">
@import '../styles/mixin';
.el-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.el-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
@include b(form-item) {
  margin-bottom: 22px;
  label{
    line-height:1.2;
    margin-bottom:5px;
    display: inline-block;
  }
  & .el-form-item {
    margin-bottom: 0;
  }
}
.error{
  color:red;
}
</style>