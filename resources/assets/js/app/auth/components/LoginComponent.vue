<template lang="html">

<v-container>
    <v-layout align-center justify-center class="h100">
        <v-flex xs12 sm12 md4>
            <v-card light>
                <v-card-media class="white--text" height="200px" src="../storage/images/material.jpg">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">Iniciar Sesión</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
                <form @submit.prevent="submit">
                    <v-card-text>
                        <v-text-field label="Correo Electronico"
                                      light
                                      color="purple darken-2"
                                      v-model="email"
                                      @keyup.native="cleanFields('email')"
                                      :error-messages="errors.email"
                                      prepend-icon="mail">
                        </v-text-field>
                        <v-text-field label="Contraseña"
                                      light
                                      v-model="password"
                                      color="purple darken-2"
                                      @keyup.native="cleanFields('password')"
                                      :error-messages="errors.password"
                                      type="password"
                                      prepend-icon="vpn_key">
                        </v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn type="submit"
                               color="purple darken-2"
                               block
                               :loading="loading"
                               ripple
                               dark>
                            Iniciar
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>

</template>

<script>
import {
	mapActions
}
from 'vuex'
import localforage from 'localforage'
import {
	isEmpty
}
from 'lodash'

export default {
	data() {
		return {
			email: null,
			password: null,
			errors: [],
			loading: false
		}
	},
	methods: {
		...mapActions( {
			login: 'auth/login'
		} ),

		submit() {
			this.login( {
					payload: {
						email: this.email,
						password: this.password
					},
					context: this
				} )
				.then( () => {
					this.redirect()
				} )
				.catch( ( err ) => {} )
		},

		redirect() {
			this.loading = true
			localforage.getItem( 'intended' )
				.then( ( name ) => {
					if ( isEmpty( name ) ) {
						this.$router.replace( {
							name: 'home'
						} )
						this.loading = false
						return
					}
					this.$router.replace( {
						name: name
					} )
					this.loading = false
				} )
		},

		cleanFields( field ) {
			return this.errors[ field ] = []
		}
	}
}
</script>
