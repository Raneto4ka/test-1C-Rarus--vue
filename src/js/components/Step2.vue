<template>
    <div class="window">
      <div class="question window__question">
        <div class="best-choise">
          <a href="#" class="link link--usual text-usually" @click.prevent="goToPrevStep">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 8.99992C16.3855 8.99992 16.8333 9.44763 16.8333 9.99992C16.8333 10.5522 16.3855 10.9999 15.8333 10.9999V8.99992ZM4.16658 9.99992L3.45948 10.707C3.27194 10.5195 3.16658 10.2651 3.16658 9.99992C3.16658 9.7347 3.27194 9.48035 3.45948 9.29281L4.16658 9.99992ZM7.62614 5.12615C8.01667 4.73562 8.64983 4.73562 9.04036 5.12615C9.43088 5.51667 9.43088 6.14983 9.04036 6.54036L7.62614 5.12615ZM9.04036 13.4595C9.43088 13.85 9.43088 14.4832 9.04036 14.8737C8.64983 15.2642 8.01667 15.2642 7.62614 14.8737L9.04036 13.4595ZM15.8333 10.9999H4.16658V8.99992H15.8333V10.9999ZM3.45948 9.29281L7.62614 5.12615L9.04036 6.54036L4.87369 10.707L3.45948 9.29281ZM4.87369 9.29281L9.04036 13.4595L7.62614 14.8737L3.45948 10.707L4.87369 9.29281Z" fill="white"/>
            </svg>          
            Подходящие решения</a>
        </div>
        <span class="question__num text-header">2/2</span>
        <span class="text-header">Вы получите следующие функции</span>
      </div>

      <div class="answer">
        <div class="options">
          <div class="options__inner">
            <div class="options__description">
              <p class="text-usually text-semiBold"><span class="color-dark-grey">Модель АТС:</span> {{ activeAts }}</p>
              <p class="text-usually text-semiBold"><span class="color-dark-grey">Программа 1С:</span> {{ functions['program'] }}</p>
              <p class="text-usually text-semiBold"><span class="color-dark-grey">Подходящие решения:</span>  {{ functions['title-program'] }}</p>
            </div>
            <div class="title-program color-dark-grey text-usually text-semiBold"> {{ functions['title-program'] }}</div>
            <div class="options__list d-flex">
              <div class="options__list--item supported-features"> 
                <div class="text-usually text-semiBold color-green">Поддерживаемые функции:</div>
                <div class="options__item  text-usually"
                    v-for="(features, featuresIndex) in functions['supported-features']"
                    :key="`${featuresIndex}`">
                    {{ features }}
                </div>
              </div>
              <div class="options__list--item unsupported-features"> 
                <div class="text-usually text-semiBold color-red">Неподдерживаемые функции:</div>
                <div class="options__item text-usually"
                    v-for="(features, featuresIndex) in functions['unsupported-features']"
                    :key="`${featuresIndex}`">
                    {{ features }}
                </div>
              </div>
            </div>
            <div class="options__links">
              <p class="text-usually text-semiBold color-dark-grey">Ссылки на инструкции:</p>
              <a href="javascript:" class="text-usually text-semiBold">Инструкция к АТС Mango</a>
              <a href="javascript:" class="text-usually text-semiBold">Инструкция к АТС Яндекс</a>
              <a href="javascript:" class="text-usually text-semiBold">Инструкция к АТС iToolabs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	props: {
		activeAts: {
			default: false,
		},
    functions: {
			type: Object,
      default: () => ({}),
    }
	},
	methods: {
		goToPrevStep() {
			this.$emit('update:ischoice', false)
		}
	},
}
</script>

<style lang="scss" scoped>
	.best-choise {	
		left: 0;
		position: absolute;
		top: 0;
		transform: translate(32px, 50%);

		a {
			align-items: center;
			display: inline-flex;
			line-height: 40px;

			svg {
				margin-right: 4px;
			}
		}
	}
	
	.options__description p {
		margin-bottom: 10px;
	}	
</style>