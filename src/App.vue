<template>
  <div id="app">
    <regionButtons></regionButtons>
    <countryList></countryList>
  </div>
</template>

<script>
import RegionButtons from './components/RegionButtons.vue';
import CountryList from './components/CountryList.vue';

export default {
  name: 'App',
  components: {
    RegionButtons, 
    CountryList
  }
}
</script>

<style>

</style>
