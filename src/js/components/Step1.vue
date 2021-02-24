<template>
    <div class="window">
      <div class="question window__question">
        <span class="question__num text-header">1/2</span> 
        <span class="text-header">Какая у вас АТС?</span>
      </div>

      <div class="answer">
        <div class="options">
          <div class="options__inner">
            <div class="options__list">
              <div class="options__name options__name--empty text-usually text-semiBold">У меня нет АТС </div>

              <template  
                 v-for="(atsList, atsListIndex) in atsCatalog" >  
              <div class="options__name options__name--usual text-small" :key="atsListIndex">{{ atsList.name }}</div>
              <div class="options__item options__item--link text-usually"
                  :class="{active: atsName == activeAts}"
                  v-for="(atsName, atsNameIndex) in atsList.list"
                  :key="`${atsListIndex}-${atsNameIndex}`"
                  @click="rememberChoise(atsName)">
                    {{ atsName }}
              </div>
              </template>

            </div>
          </div>
        </div>
        <div class="button">
          <div class="button__inner">
            <button type="button" :disabled="!activeAts" @click="goToNextStep">
              <span class="button__name">Перейти к следующему шагу

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13V11ZM19 12L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L19 12ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289C12.9024 6.68342 12.9024 7.31658 13.2929 7.70711L14.7071 6.29289ZM13.2929 16.2929C12.9024 16.6834 12.9024 17.3166 13.2929 17.7071C13.6834 18.0976 14.3166 18.0976 14.7071 17.7071L13.2929 16.2929ZM5 13H19V11H5V13ZM19.7071 11.2929L14.7071 6.29289L13.2929 7.70711L18.2929 12.7071L19.7071 11.2929ZM18.2929 11.2929L13.2929 16.2929L14.7071 17.7071L19.7071 12.7071L18.2929 11.2929Z" fill="white"/>
              </svg>                
              </span>              
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	props: {
		atsCatalog: {
			type: Array,
			default: () => ([]),
		},
		activeAts: {
			default: false,
		},
		isСhoice: {
			type: Boolean,
			default: false,
		}
	},

	methods: {
		rememberChoise(atsName) {
			this.$emit('rememberChoise', atsName);
		},
		goToNextStep() {
			this.$emit('update:ischoice', true)
		}
	},
}
</script>
