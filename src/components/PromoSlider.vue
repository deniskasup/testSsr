<template>
    <section class="promo-slider">
        <Wrapper class="promo-slider__wrapper">
            <Swiper class="promo-slider__swiper promo-slider-swiper" v-bind="swiperOptions">
                <SwiperSlide v-for="promo in 4" class="promo-slider-swiper__slide">
                    <div class="promo-slide">
                        <div class="promo-slide__image promo-slide-image">
                            <nuxt-img format="webp" src="assets/images/dev/promo/promo1.png" />
                        </div>
                        <div class="promo-slide__sticker">- 50%</div>
                        <div class="promo-slide__content promo-slide-content">
                            <div class="promo-slide-content__title">Прояви себя!</div>
                            <div class="promo-slide-content__description">
                                Добавь стиль жизни в интерьер
                            </div>
                            <CustomButton :size="ButtonSize.SMALL"> Посмотреть </CustomButton>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    </section>
</template>

<script setup lang="ts">
import { Navigation, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Wrapper from '~/components/Wrapper.vue'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'
import { ButtonSize } from '~/model/enums/formElements/ButtonSize'
const swiperOptions: SwiperOptions = {
    modules: [Navigation],
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    navigation: {
        enabled: true,
    },
    updateOnWindowResize: true,
}
</script>

<style lang="sass" scoped>

.promo-slide-image
    & img
        aspect-ratio: 2/1
</style>
