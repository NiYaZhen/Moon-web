<script setup>
// 註冊卡片 📄
import { inject, reactive} from "vue";
// 登入資訊
const signUpInfo = reactive({
  name: "",
  email: "",
  password: ""
});

// 提取API
const $api = inject("$api");
// api 處理
const ApiSignUp = async () => {
  const data = await $api.SignUp(signUpInfo);
  console.log(data);
};
const OnFinish = () => {
  console.log("Finish");
  ApiSignUp();
};
const OnFinishFailed = () => {
  console.log("failed");
};
</script>

<template lang="pug">
#SignupCardFrom
  .card-header {{"SIGN UP"}}
  aForm(
    :model="signUpInfo"
    name="loginFrom"
    autocomplete="off"
    hideRequiredMark
    @finish="OnFinish"
    @finishFailed="OnFinishFailed"
  )
    aFormItem(
      name="name"
      :rules="[{ required: true, message: 'Please input your name!' }]"
    )
      aInput( v-model:value="signUpInfo.name" placeholder="Name")
    
    aFormItem(
      name="email"
      :rules="[{ required: true, type:'email', message: 'Please input your email!' }]"
    )
      aInput( v-model:value="signUpInfo.email" placeholder="Email")

    aFormItem(
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    )
      aInput(type="password" v-model:value="signUpInfo.password" placeholder="Password")
    .bt-gap-20
    .row-center
      aFormItem
        aButton(type="primary" danger size="large" html-type="submit") {{"SIGN UP"}}
</template>

<style lang="scss" scoped>
#SignupCardFrom {
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
  .ant-input {
    border-width: 0;
    border-radius: 0px !important;
    border-bottom: 1px solid #ccc;
    border-right: 0 !important;
    box-shadow: none !important;
  }
  .ant-btn {
    letter-spacing: 2px;
  }
  .bt-gap-20 {
    margin-bottom: 20px;
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