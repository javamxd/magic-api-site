<template>
  <div id="app">
    <magic-editor :config="config"/>
  </div>
</template>

<script>
// 引入组件
import MagicEditor from 'magic-editor'
// 引入样式
import 'magic-editor/dist/magic-editor.css'
export default {
  name: 'App',
  components: {
    MagicEditor
  },
  data(){
    return {
      config:{
        baseURL: 'https://backend.ssssssss.org:9998/magic/web',    //配置后台服务
        serverURL: 'https://backend.ssssssss.org:9998/',    //配置接口实际路径
        autoSave: false,
        checkUpdate: false,
        defaultTheme: 'dark'
        // 其它配置请参考文档
      }
    }
  }
}
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
