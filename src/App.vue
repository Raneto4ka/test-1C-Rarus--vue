<template>
  <div class="wrapper">
    <step1 v-if="!isСhoice" 
          :atsCatalog="atsCatalog" 
          @rememberChoise="rememberChoise"
          :activeAts="activeAts"          
          v-bind:ischoice.sync="isСhoice"
          > 
    </step1>
    
    <step2 v-else
          :activeAts="activeAts" 
          :functions="functions"
          v-bind:ischoice.sync="isСhoice"
          > 
    </step2>
  </div>
</template>

<script>

import Step1 from './js/components/Step1';
import Step2 from './js/components/Step2';

export default {
  components: {
      Step1,
      Step2
  },
  data() {
    return{
      isСhoice: false,
      activeAts: false,
      atsCatalog: [],
      functions:  {
        'program': '',
        'title-program': '',
        'supported-features': [],
        'unsupported-features': [],
      },
    }
  },
  mounted () {
    this.axios({
      method: 'get',
      url: './data/ats.json',
    }).then((result) => {
        this.atsCatalog =  result.data['ats-list'];
      });

    this.axios({
      method: 'get',
      url: './data/functions.json',
    }).then((result) => {
        this.functions =  result.data;
      });

      if(localStorage.getItem('atsName')) {
        try {
          this.activeAts = JSON.parse(localStorage.getItem('atsName'));
        } catch(e) {
          localStorage.removeItem('atsName');
        }
      }      
  },
  methods: {
    rememberChoise(name) {
      if(name == this.activeAts) {
        this.activeAts = false
      }
      else {
        this.activeAts = name;
      } 
      localStorage.setItem('atsName', JSON.stringify(this.activeAts));    
      return this.activeAts;
    },
  }
}
</script>

<style lang="scss">

</style>
