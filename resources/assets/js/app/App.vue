<template>
<v-app>
	<v-card flat height="100vh">
		<navigation-component></navigation-component>
		<v-content>
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</v-content>
	</v-card>
</v-app>
</template>

<script>
import {
	mapGetters,
	mapActions
}
from 'vuex'

export default {
	computed: mapGetters({
		user: 'auth/user'
	}),
}
</script>
