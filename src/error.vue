<template>
    <NuxtLayout name="error">
        <main class="error-page">
            <section class="error">
                <Wrapper class="error__wrapper">
                    <div class="error__smile">😬</div>
                    <div v-if="error" class="error__text error-text">
                        <div class="error-text__code">Ошибка {{ error.statusCode }}</div>
                        <div class="error-text__message">
                            <p v-if="error.statusCode === '404'">
                                Вы запросили доступ к странице, доступ к которой ограничен
                                специальными правами.
                                <br />
                                Обратитесь к администратору
                            </p>
                            <p v-else>Произошла непредвиденная ошибка</p>
                        </div>
                        <CustomButton @click="handleError"> На главную </CustomButton>
                    </div>
                </Wrapper>
            </section>
        </main>
    </NuxtLayout>
</template>
<script lang="ts" setup>
import { clearError, useError } from '#imports'
import CustomButton from '~/components/UIComponents/formElements/CustomButton.vue'

const error = useError()
const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="sass">
.error
    padding: 100px 0
    &__wrapper
        display: grid
        grid-template-columns: 55px 1fr
        grid-gap: 32px
    &__smile
        font-weight: 600
        font-size: 56px
.error-text
    display: grid
    justify-items: flex-start
    grid-gap: 24px
    &__code
        font-weight: 600
        font-size: 56px
    &__message
        font-size: 16px
</style>
