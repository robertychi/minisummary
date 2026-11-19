<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const page = {
  style: "home",
  name: "Home",
  upperCamelCaseName: "Home",
  snakeCaseName: "home",
  lowerCamelCaseName: "home",
  title: "首頁",
  subTitle: "",
}

const toMajorPage = () => {
  router.push({ name: "MajorIndex" })
}

const toLoginPage = () => {
  router.push({ name: "LoginView" })
}

onMounted(() => {
  window.document.title = `abc`
})
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" xl="3" lg="4" md="5" sm="8">
            <v-row density="compact">
              <v-col cols="12" class="text-center text-h3 font-weight-bold">
                <h1>小商.23423</h1>
              </v-col>
              <v-col cols="12">
                <v-btn block color="primary" @click="toMajorPage">進入系統</v-btn>
                <!-- <v-btn block variant="outlined" color="primary" @click="toLoginPage">登入</v-btn> -->
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
