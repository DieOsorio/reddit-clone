<template>
  <div id="app">
    
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/#/">
          Reddit Clone
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="!isLoggedIn" @click="login()" class="button is-primary">
              <strong>Login with Google</strong>
            </a>
            <div v-if="isLoggedIn">
              <section class="avatar">
                <figure class="is-128x128">
                  <img :src="user.image" alt="User Image">
                </figure>
                <figcaption>{{user.name}}</figcaption>
              </section>
              <a @click="logout()" class="button is-light">
                Logout
              </a>
            </div>  
          </div>
        </div>
      </div>
    </nav>

    <router-view class="container main" />

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
};
</script>

<style lang="scss">
  .main {
    margin-top: 2em !important;
  }

  .avatar {
    float: left;
  }
  
</style>
