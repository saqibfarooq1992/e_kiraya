<template>
	<section class="d-flex flex-grow-1">
		<Sidebar />
		<div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
				<Navbar />
				<router-view />
			</div>

			<Footer />
		</div>
	</section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
import * as auth from "../services/auth_service";
export default {
	name: "dashboard",
	components: {
		Navbar,
		Sidebar,
		Footer
	},
	// beforeCreate: async function() {
	// 	try {
	// 		if (auth.isLoggedIn()) {
	// 			const response = await auth.getProfile();
	// 			this.$store.dispatch("authenticate", response.data);
	// 		} else {
	// 			this.$router.push("/login");
	// 		}
	// 	} catch (error) {
	// 		auth.logout();
	// 	}
	// }
};
</script>

