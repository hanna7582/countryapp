<template>
    <div>
        <button class="region" v-for="region in regions" :key="region"
            v-bind:class="isSelected(region)"
            @click="changeRegion({changeRegion:region})">
            {{region}}
        </button>        
    </div>
</template>

<script>
import Constant from '../Constant';
import { mapMutations, mapGetters } from 'vuex';

export default {
    name:'regionButtons',
    // computed: {
    //     regions(){
    //         return this.$store.getters.regions;
    //     }, 
    //     currentRegion(){
    //          return this.$store.getters.currentRegion;
    //     }
    // },    
    computed: mapGetters([        
      'regions', 'currentRegion' 
    ]),
    methods: {
        isSelected(region){
            if(region == this.currentRegion) return {selected:true};
            else return {selected:false};
        },
        ...mapMutations([
            Constant.CHANGE_REGION
        ])
    },
}
</script>

<style lang="scss">
    button{
       &.region{
           width: 80px;
           margin: 2px;
           border:1px solid gray;
           text-align: center;
       } 
       &.selected{
           background-color: lightblue;           
       }
    }
</style>