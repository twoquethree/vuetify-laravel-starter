<template>
<div v-if="user.authenticated">
	<v-navigation-drawer v-model="drawer" temporary clipped app enable-resize-watcher>
		<v-list class="pa-0">
			<v-list-tile avatar tag="div">
				<v-list-tile-content>
					<v-list-tile-title>{{ user.data.name }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
		<v-list class="pt-0" dense>
			<v-divider></v-divider>
			<v-list-tile v-for="item in items" :key="item.title" :to="{ name: item.to }" exact>
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title v-text="item.title"></v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
	<v-toolbar dark app flat fixed extended prominent clipped-left color="deep-purple" style="z-index: 0">
		<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
		<v-toolbar-title class="white--text">Tu Salario SV</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn v-if="user.authenticated" flat>
			{{ user.data.name }}
		</v-btn>
		<v-btn icon @click.prevent.native="signout">
			<v-icon light>exit_to_app</v-icon>
		</v-btn>
	</v-toolbar>
</div>
</template>

<script>
import {
	mapGetters,
	mapActions
}
from 'vuex'

export default {
	data() {
		return {
			drawer: false,
			items: [{
				title: 'Inicio',
				icon: 'dashboard',
				to: 'home'
      }, ],
			mini: false,
			right: null
		}
	},
	computed: mapGetters({
		user: 'auth/user'
	}),
	methods: {
		...mapActions({
			logout: 'auth/logout'
		}),
		signout() {
			this.logout()
				.then(() => {
					this.$router.replace({
						name: 'login'
					})
				})
		}
	}
}
</script>
