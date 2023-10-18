import { getCurrentInstance,ComponentInternalInstance } from 'vue'
// getCurrentInstance 用于获取当前组件实例
// ComponentInternalInstance 是组件实例的类型

export function useGlobalConfig(){
  const instance:ComponentInternalInstance|null =getCurrentInstance()
  if(!instance){
    console.log('useGlobalConfig 必须得在setup里面整')
    return
  }
  console.log('组件实例', instance)
  console.log('组件全局参数', instance.appContext.config)
  return instance.appContext.config.globalProperties.$AILEMENTE || {}
}