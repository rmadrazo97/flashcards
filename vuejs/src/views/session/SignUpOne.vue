<template>
	<div class="session-wrapper">
		<v-row class="d-flex justify-center mt-15">
			<v-col cols="12" sm="12" md="4" lg="4" xl="4">
				<div class=" text-center">
					<div class="session-table-cell">
						<div class="session-content">
							<img 
								src="https://img.icons8.com/ios-filled/50/000000/flashcards.png"
								class="img-responsive mb-4" 
								width="78" 
								height="78" 
							/>
							<h2 class="mb-4">{{$t('message.signUp')}}</h2>
							<p class="fs-14">{{$t('message.havingAnAccount')}}
								<router-link to="/session/login">{{$t('message.login')}}</router-link>
							</p>
							<v-form v-model="valid" class="mb-5">
								<v-text-field 
									id="signUpUsername"
									label="Username" 
									v-model="name" 
									:rules="nameRules" 
									:counter="20" 
									required
								></v-text-field>
								<v-text-field 
									id="signUpEmail"
									label="E-mail ID" 
									v-model="email" 
									:rules="emailRules" 
									required
								></v-text-field>
								<v-text-field 
									id="signUpPassword"
									label="Password" 
									v-model="password" 
									:rules="passwordRules" 
									type="password" 
									required
								></v-text-field>
								<v-btn id="signUpBtn" large @click="submit" block color="primary" class="mb-4">{{$t('message.signUp')}}</v-btn>
								<p>{{$t('message.bySigningUpYouAgreeTo')}} {{brand}}</p>
								<router-link to="">{{$t('message.termsOfService')}}</router-link>
							</v-form>
							<div class="session-social-links d-inline-block">
								<ul class="list-inline">
									<li @click="signInWithFacebook">
										<span class="facebook-bg session-icon">
											<i class="ti-facebook"></i>
										</span>
									</li>
									<li @click="signInWithGoogle">
										<span class="google-bg session-icon">
											<i class="ti-google"></i>
										</span>
									</li>
									<li @click="signInWithTwitter">
										<span class="twitter-bg session-icon">
											<i class="ti-twitter-alt"></i>
										</span>
									</li>
									<li @click="signInWithGithub">
										<span class="github-bg session-icon">
											<i class="ti-github"></i>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import AppConfig from "Constants/AppConfig";

export default {
  components: {
    
  },
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 20 || "Name must be less than 20 characters"
      ],
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
      if (this.valid) {
        let userDetail = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        this.$store.dispatch("signupUserInFirebase", {
          userDetail,
          router: this.$router
        });
      }
    },
    signInWithFacebook() {
      this.$store.dispatch("signinUserWithFacebook", {
        router: this.$router
      });
    },
    signInWithGoogle() {
      this.$store.dispatch("signinUserWithGoogle", {
        router: this.$router
      });
    },
    signInWithTwitter() {
      this.$store.dispatch("signinUserWithTwitter", {
        router: this.$router
      });
    },
    signInWithGithub() {
      this.$store.dispatch("signinUserWithGithub", {
        router: this.$router
      });
    }
  }
};
</script>
