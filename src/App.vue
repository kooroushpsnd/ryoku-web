<template>
  <v-app>
    <div class="top-half">
    </div>
    <div class="bottom-half">
    </div>
    <div class="box" dir="rtl">
      <h1>سلام، به <img :src="logoSrc" alt="ریوکو" class="logo-background"> خوش اومدین!</h1>
      <hr><br>
      <p dir="rtl">
        ریوکو جاییه که جذاب ترین نرم افزارها و بازی های بلاکچینی و وب برای مخاطب درجه یک ایرانی طراحی میشه؛ چرا که
        <span style="font-family: NianSemiBold ,sans-serif;">شما لایق بهترین ها هستید</span>
        <br><br>
        همین الان عضو کانال تلگرامی ریوکو بشید و از محتوای ناب تکنولوژی لذت ببرید !
      </p>
      <a :href="telegramLink" target="_blank" class="btn">عضویت در کانال تلگرام</a>
    </div>
  </v-app>
</template>

<script>
import logo from "./assets/logo.png"

export default {
  name: 'App',
  data(){
    return{
      logoSrc: logo,
      telegramLink: "https://t.me/riokusoftware"
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    height: 100vh;
  }

  .top-half {
    background-color: #5A9842;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .bottom-half {
    background-color:#E8E8E8;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .logo-background {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    margin: 5px;
  }

  .box {
    background-color: white;
    padding: 50px;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 600px;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .box h1 {
    font-family: "NianBold" ,sans-serif;
    color: #333;
    margin-bottom: 10px;
    font-size: 30px;
  }

  .box p {
    font-family: "NianRegular" ,sans-serif;
    color: #555;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 1.6;
  }

  .btn {
    font-family: "NianRegular" ,sans-serif;
    background-color: #24A1DE;
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 18px;
    display: inline-block;
  }

  .btn:hover {
    background-color: #e68900;
  }

  @media (max-width: 768px) {
    .top-half, .bottom-half {
      height: 50%;
    }

    .logo-background {
      height: 11px;
    }

    .box {
      padding: 12px;
      width: 67%;
    }

    .box h1 {
      font-size: 20px;
    }

    .box p {
      font-size: 14px;
    }
    .btn {
      padding: 10px 16px;
      font-size: 16px;
      width: 100%;
      display: block;
    }   
  }
  @font-face {
    font-family: NianBold;
    src: url("./assets/fontsBold/Nian-Bold.ttf") format("truetype"),
         url("./assets/fontsBold/Nian-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: NianRegular;
    src: url("./assets//NianRegular/Nian-Regular.ttf") format("truetype"),
         url("./assets/NianRegular/Nian-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: NianSemiBold;
    src: url("./assets//NianSemiBold/Nian_Semi\ Bold.ttf") format("truetype"),
         url("./assets/NianSemiBold/Nian_Semi\ Bold.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
</style>
