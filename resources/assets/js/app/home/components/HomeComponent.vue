<template lang="html">
  <div>
    <v-container>
      <v-layout align-content-start class="h100">
        <h3>Welcome to panel admin!</h3>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {
	mapGetters,
	mapActions
} from 'vuex'

export default {
	computed: mapGetters( {
		user: 'auth/user'
	} ),
}
</script>
