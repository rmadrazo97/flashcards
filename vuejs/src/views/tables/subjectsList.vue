<template>
	<div>
		<page-title-bar></page-title-bar>
		<app-section-loader :status="loader"></app-section-loader>
		<v-container fluid class="grid-list-xl py-0 mt-n3">
			<v-row>
				<app-card
					:heading="$t('message.searchRow')"
					:fullBlock="true"
					colClasses="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
				>
					<v-card-title>Temas
						<v-spacer></v-spacer>
						<v-text-field
							append-icon="search"
							label="Search"
							single-line
							hide-details
							v-model="search"
						>
						</v-text-field>
					</v-card-title>
					<v-data-table
						v-bind:headers="headers"
						v-bind:items="items"
						v-bind:search="search"
					>
						<template slot="items" slot-scope="props">
							<td class="">
								{{ props.item.name }}	
							</td>
							<td>{{ props.item.name}}</td>
							<td>{{ props.item.calories }}</td>
							<td>{{ props.item.fat }}</td>
						</template>
						<template slot="pageText" slot-scope="{ pageStart, pageStop }">
							From {{ pageStart }} to {{ pageStop }}
						</template>
					</v-data-table>
				</app-card>
			</v-row>
	</v-container>
	</div>
</template>

<script>
// import api from "../../api";
import axios from 'axios';

export default {
  data() {
    return {
      loader: true,
      max25chars: v => v.length <= 25 || "Input too long!",
      tmp: "",
      search: "",
      pagination: {},
      headers: [
        {
          text: "ID",
          align: "center",
          sortable: true,
          value: "id_subject"
		},
		{
          text: "Curso",
          align: "center",
          sortable: true,
          value: "course_id"
        },
		{
			text: "Nombre",
			value: "name",
			sortable: true,
		},
        {
			text: "Descripción",
			value: "description",
			sortable: true
		}
      ],
      items: []
    };
  },
  mounted() {
    this.getTablesData();
  },
  methods: {
        getTablesData() {
		var config = {
		method: 'get',
		url: 'https://2wdg4glmpb.execute-api.us-west-1.amazonaws.com/Test1/subject/user/1',
		headers: { }
		};

		axios(config).then(response => {
			console.log(response.data);
			this.loader = false;
			this.items = response.data;
        }).catch(error => {
          console.log(error);
		});
		
    }
  }
};
</script>
