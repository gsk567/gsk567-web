<template>
  <div class="app">
      <app-header></app-header>
      <div class="body-container">
        <router-view class="view-content"></router-view>
        <app-footer></app-footer>
      </div>
  </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';
    export default {
        components: {
            appHeader: Header,
            appFooter: Footer
		},
		methods: {
			closeSideMenus: function() {
				$(".cover_div").hide();
				if ($(".menu").hasClass("open")) {
					$('.main-submenu').removeClass("open");
					$('.menu').removeClass("open");			
				}
			}
		},
		mounted: function() {
			$('.container').click(function(){
				closeSideMenus();
			});
			$('.menu').click(function() {
				if ($(this).hasClass("open")) {
					$('.main-submenu').removeClass("open");
					$(this).removeClass("open");
					jQuery(".cover_div").hide();	
				}
				else {
					closeSideMenus();
					$('.main-submenu').addClass("open");
					$(this).addClass("open");
					jQuery(".cover_div").show();
				}
			});

			jQuery(".submenu-anchor-links").click(function()
			{
				closeSideMenus();
			});
		}
    }
		
	function closeSideMenus() {
		jQuery(".cover_div").hide();
		if ($(".menu").hasClass("open")) {
			$('.main-submenu').removeClass("open");
			$('.menu').removeClass("open");			
		}
	}
</script>

<style>
    @import './assets/css/normalize.css';
    @import 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i';
    @import './assets/css/fontawesome-all.min.css';
    @import './assets/css/style.css';
</style>