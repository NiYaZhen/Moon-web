<script setup>
// 登入卡片 📄
import { inject, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 登入資訊
const loginParams = reactive({
  email: "",
  password: ""
});
const loginRes = ref("test text");
// 提取API
const $api = inject("$api");
// api 處理
const ApiLogin = async () => {
  const data = await $api.Login(loginParams);

  
  console.log(data.err);
  if (data.err==0){
    router.push("/");
  }else{
    loginRes.value = data.message;
  }

  // TODO check data
  
  
};
const OnFinish = () => {
  console.log("Finish");
  ApiLogin();
};
const OnFinishFailed = () => {
  console.log("failed");
  router.push("/member");
};
</script>

<template lang="pug">
#LoginCardFrom
  p {{loginRes}}
  .card-header {{"LOGIN"}}
  aForm(
    :model="loginParams"
    name="loginFrom"
    autocomplete="off"
    hideRequiredMark
    @finish="OnFinish"
    @finishFailed="OnFinishFailed"
  )
    aFormItem(
      name="email"
      :rules="[{ required: true, type:'email', message: 'Please input your email!' }]"
    )
      aInput( v-model:value="loginParams.email" placeholder="Email")

    aFormItem(
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    )
      aInput(type="password" v-model:value="loginParams.password" placeholder="Password")
    .bt-gap-40
      a.forgot-pwd {{"Forgot password?"}}
    .row-center
      aFormItem
        aButton(type="primary" danger size="large" html-type="submit") {{"LOGIN"}}
</template>

<style lang="scss" scoped>
#LoginCardFrom {
  .card-header {
    font-family: 'Dancing Script', cursive;
    font-size: 24px;
    color: #e8716d;
    padding-bottom: 20px;
    letter-spacing: 2px;
  }
 
 
  .forgot-pwd {
    font-size: 16px;
    letter-spacing: 2px;
    color: #ccc;
    text-decoration: underline;
    &:hover {
      color: #aaa;
    }
  }

  .bt-gap-40 {
    margin-bottom: 40px;
  }
  .from-center {
  }
  .row-center {
    display: flex;
    justify-content: center;
  }
} 
.ant-input {
  border-width: 0;
  border-radius: 0px !important;
  border-bottom: 1px solid #ccc;
  border-right: 0 !important;
  box-shadow: none !important;
  letter-spacing: 2px;
}
.ant-btn {
  letter-spacing: 2px;
  min-width: 150px;
}
</style>