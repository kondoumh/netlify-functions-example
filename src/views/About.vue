<template>
  <v-container>
    <div class="about">
      <HelloWorld msg="SB MZ"/>
    </div>
  </v-container>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  }
}
</script>
