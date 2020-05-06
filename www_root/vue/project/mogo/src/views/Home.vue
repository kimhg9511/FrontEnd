
<template>
  <div id="app">
    <app-nav>
    </app-nav>
    <app-view>
      <app-sidebar></app-sidebar>
      <app-content></app-content>
    </app-view>
  </div>
</template>

<script>
import appNav from '@/components/appnav.vue' 
import appView from '@/components/appview.vue' 
import appSidebar from '@/components/appsidebar.vue' 
import appContent from '@/components/appcontent.vue'

export default {
  name: 'Home',
  components: {
    appNav,
    appView,
    appSidebar,
    appContent
  }
}
</script>
<style src='@/assets/reset.css'>
</style>
