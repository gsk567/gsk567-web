<template>
    <div>
        <header>
            <router-link @click.native="scrollToTop" to="/" tag="a" class="logo hvr-pop" title="gsk567"></router-link>
            <div class="top-menu">
                <router-link @click.native="scrollToTop" to="/development" tag="a" active-class="active" class="hvr-pop" title="Development">Development</router-link>
                <router-link @click.native="scrollToTop" to="/design" tag="a" active-class="active" class="hvr-pop" title="Design">Design</router-link>
            </div>
            <a class="menu hvr-pop" href="javascript:;"></a>
        </header>   
        <div class="main-submenu">
            <div class="submenu-wrap">
                <router-link @click.native="scrollToTop" to="/development" class="submenu-anchor-links" tag="a" active-class="active" title="Development">Development</router-link>
                <router-link @click.native="scrollToTop" to="/design" class="submenu-anchor-links" tag="a" active-class="active" title="Design">Design</router-link>
            </div>
	    </div>    
    </div>
</template>

<script>
    export default {
        methods: {
            scrollToTop: function() {
				$('html, body').animate({scrollTop:0}, 'slow');
			}
        }
    }
</script>

<style>

</style>