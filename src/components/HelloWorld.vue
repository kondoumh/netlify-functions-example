<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="projectName"
        append-icon="mdi-content-save-settings"
        label="Project name"
        single-line
        hide-details
        @click:append="saveProjectName"
      ></v-text-field>
    </v-card-title>
    <v-card-title>
      <v-text-field
        v-model="connectSid"
        append-icon="mdi-content-save-settings"
        label="Connect sid"
        single-line
        hide-details
        @click:append="saveConnectSid"
      ></v-text-field>
    </v-card-title>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress" target="_blank" rel="noopener">e2e-cypress</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </v-card>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    saveProjectName () {
      if (this.projectName) {
        localStorage.setItem("PROJECT_NAME", this.projectName)
      }
    },
    saveConnectSid () {
      if (this.connectSid) {
        localStorage.setItem("CONNECT_SID", this.connectSid)
      }
    }
  },
  data: () => ({
    token: '',
    projectName: '',
    connectSid: ''
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
