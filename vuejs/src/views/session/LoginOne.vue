<template>
	<div class="session-wrapper">
		<v-row class="d-flex justify-center mt-15">
			<v-col cols="12" sm="12" md="4" lg="4" xl="4">
				<app-card contentCustomClass="text-center">
					<div class="session-table-cell mt-5" >
						<div class="session-content">
							<img 
								src="https://img.icons8.com/ios-filled/50/000000/flashcards.png"
								class="img-responsive mb-4" 
								width="78" 
								height="78" 
							/>
							<h2 class="mb-4">One Card</h2>
							<v-form v-model="valid" class="mb-5">
								<v-text-field 
									label="E-mail " 
									v-model="email" 
									:rules="emailRules" 
									required
								></v-text-field>
								<v-text-field 
									label="Password" 
									v-model="password" 
									type="password" 
									:rules="passwordRules" 
									required
								></v-text-field>
								<v-checkbox 
									color="primary" 
									label="Remember me" 
									v-model="checkbox"
								></v-checkbox>
								<router-link class="mb-2" to="/session/forgot-password">{{$t('message.forgotPassword')}}?</router-link>
								<div>
									<v-btn large @click="submit" block color="primary" class="mb-2">{{$t('message.loginNow')}}</v-btn>
									<v-btn large @click="onCreateAccount" block color="warning" class="mb-2">{{$t('message.createAccount')}}</v-btn>
								</div>
							</v-form>
						</div>
					</div>
				</app-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
// import firebase from "firebase/app";
// import { mapGetters } from "vuex";
import AppConfig from "Constants/AppConfig";

import AuthService from "../../auth/AuthService";

const auth = new AuthService();
// const { login, logout, authenticated, authNotifier } = auth;

const { login} = auth;

export default {
  components: {
  },
  data() {
    return {
      checkbox: false,
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      appLogo: AppConfig.appLogo2,
      brand: AppConfig.brand
    };
  },
  methods: {
    submit() {
      const user = {
        email: this.email,
        password: this.password
			};
			
      this.$store.dispatch("signinUserInFirebase", {
        user
      });
    },
    signInWithFacebook() {
      this.$store.dispatch("signinUserWithFacebook");
    },
    signInWithGoogle() {
      this.$store.dispatch("signinUserWithGoogle");
    },
    signInWithTwitter() {
      this.$store.dispatch("signinUserWithTwitter");
    },
    signInWithGithub() {
      this.$store.dispatch("signinUserWithGithub");
    },
    onCreateAccount() {
      this.$router.push("/session/sign-up");
    },
    signinWithAuth0() {
      login();
    }
  }
};
</script>
