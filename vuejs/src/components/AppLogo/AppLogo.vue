<template>
    <div class="site-logo">
        <router-link to="/">
            <img src="https://img.icons8.com/ios/40/000000/flashcards.png"/> OneCard
        </router-link>
    </div>
</template>

<script>
import AppConfig from "Constants/AppConfig";
import { mapGetters } from "vuex";

export default {
   computed: {
      ...mapGetters(["sidebarSelectedFilter"])
   },
   data() {
      return {
          appLogo: AppConfig.appLogo,
          darkLogo: AppConfig.darkLogo
      }
   }
}
</script>
