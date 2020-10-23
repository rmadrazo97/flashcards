<template>
	<div>
		<page-title-bar></page-title-bar>
    <app-section-loader :status="loader"></app-section-loader>
		<v-container fluid class="grid-list-xl pt-0 mt-n3">
			<v-row v-if="courses !== null">
				<app-card colClasses="col-12 col-sm-6 col-md-4 " v-for="(course, index) in courses" :key="index" >
					<div class="text-center">
						<div class="text-center">
              <v-chip class="ma-2" :color="course.color" text-color="white">
                <v-icon class="" left>mdi-book</v-icon>
                <h3 class="mt-2">{{course.name}}</h3>
              </v-chip>
							<p>{{ course.description.substring(0,65)}}...</p>
						</div>
						<v-btn class="ml-3" color="primary" @click.stop="dialog = true">
							<v-icon class="mr-2">mdi-bookshelf</v-icon> Temas
						</v-btn>
            <v-btn class="ml-3" color="info" @click.stop="dialog2 = true">
							<v-icon class="mr-2">mdi-card-bulleted</v-icon> FlashCards
						</v-btn>
					</div>
				</app-card>
			</v-row>
		</v-container>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" overlay=false scrollable>
      <v-card>
        <v-toolbar color="primary" dark class="dialog-toolbar mb-6">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Temas</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
        <v-card-text>
          <h3>Matemáticas</h3>
          <v-btn class="ml-10 mb-2" color="warning" @click.stop="dialog2 = !dialog2">Ver FlashCards</v-btn>
          <v-divider></v-divider>
          <h3>Algebra</h3>
          <v-btn class="ml-10 mb-2" color="warning" @click.stop="dialog2 = !dialog2">Ver FlashCards</v-btn>
          <v-divider></v-divider>
        </v-card-text>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" fullscreen transition="dialog-bottom-transition" overlay=false scrollable>
      <v-card>
        <v-toolbar color="primary" dark class="dialog-toolbar mb-6">
          <v-btn icon @click.native="dialog2 = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>FlashCards</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="4">
              <div class="app-card" style="background-color: #e8e8e8; border-radius: 15px;">
                <div class="app-card-content">
                  <div class="blog-thumb mb-4">
                    <h2>Hola mundo</h2>
                  </div>
                  <div class="blog-content mb-4">
                    <h4>Where Can You Find Unique Myspace Layouts Nowadays</h4>
                    <h5>hlasasa</h5>
                    <span class="small">11 Nov 2017 , By: Admin , 5 Comments </span>
                  </div>
                  <v-card-actions>
                  </v-card-actions>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
	</div>
</template>

<script>
import api from "Api";
import axios from 'axios';

export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      loader: true,
      usersList: null,
      courses: null,
      connectUsersList: null
    };
  },
  mounted() {
    // this.getUsers();
    this.getCoursesData();
  },
  methods: {
    getUsers() {
      api
        .get("vuely/users.js")
        .then(response => {
          this.loader = false;
          this.usersList = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCoursesData() {
		var config = {
		method: 'get',
		url: 'https://2wdg4glmpb.execute-api.us-west-1.amazonaws.com/Test1/course/owner/1',
		headers: { }
		};

		axios(config).then(response => {
			console.log(response.data);
			this.loader = false;
      this.courses = response.data;
      console.log(this.courses);
        }).catch(error => {
          console.log(error);
		});
		
  }
  },
  
};
</script>
