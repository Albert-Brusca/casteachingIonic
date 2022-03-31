<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>User</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div>
        <h1>User</h1>
        name: {{ this.user && this.user.name}}
      </div>
      <ion-button v-if="disabled===false" @click="refresh">Refresh</ion-button>
      <ion-spinner v-else-if="disabled === true" name="bubbles"></ion-spinner>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
} from "@ionic/vue";
import store from "../store"
// import axios from "axios";
// import adapter from 'axios/lib/adapters/xhr'


export default {
  name: "user",
  components: {
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonPage,
    IonMenuButton,
  },
  data () {
    return {
      user: {},
      token: "",
      disabled: false
    }
  },
  async mounted() {
    this.user = await store.get('user')
    this.token = await store.get('token')
  },
  methods: {
    async refresh() {
      this.disabled = true

      // console.log(this.token);
      // const axiosClient = axios.create({
      //   adapter,
      //   baseURL: 'https://casteaching.albertbrusca.me/api',
      //   withCredentials: true,
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     Authorization: 'Bearer ' + this.token
      //   }
      // })
      // let response = [];
      // try {
      //   response = await axiosClient.get('/user')
      //   await store.set('user', response.data)
      //   console.log(this.user)
      // } catch (error) {
      //   console.log(error);
      // }

      let user
      try {
        user = await this.casteaching.user()
      } catch (error) {
        console.log(error);
      }
      await store.set('user', user)

      await window.location.reload()
      this.disabled=false
    }
  }
}
</script>

<style scoped>

</style>