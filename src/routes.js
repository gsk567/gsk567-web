import Home from './components/Home.vue';
import Development from './components/development/Development.vue';
import Design from './components/design/Design.vue';
import About from './components/about/About.vue';
import Videos from './components/videos/Videos.vue';
import Contact from './components/contact/Contact.vue';
import Competences from './components/competences/Competences.vue';
import Tools from './components/tools/Tools.vue';
import Snippets from './components/snippets/Snippets.vue';
import PageNotFound from './components/errors/PageNotFound.vue';
//tools
import LevelingNetworkLeastSquareAdjustment from './components/tools/list/LevelingNetworkLeastSquareAdjustment.vue';
import JavaScriptConsole from './components/tools/list/JavaScriptConsole.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/development', component: Development },
    { path: '/design', component: Design },
    { path: '/about', component: About },
    { path: '/videos', component: Videos },
    { path: '/contact', component: Contact },
    { path: '/competences', component: Competences },
    { path: '/tools', component: Tools },
    { path: '/snippets', component: Snippets },
    //tools
    { path: '/tools/leveling-network-least-square-adjustment', component: LevelingNetworkLeastSquareAdjustment },
    { path: '/tools/javascript-console', component: JavaScriptConsole },

    //errors
    { path: '/404', component: PageNotFound },  
    { path: '*', redirect: '/404' },  
]