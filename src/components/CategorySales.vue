<template>
    <section class="category-sales">
        <Wrapper class="category-sales__wrapper">
            <h2 class="category-sales__title">Скидки в категориях</h2>
            <div class="category-sales__cards category-sales-cards">
                <NuxtLink
                    v-for="item in 6"
                    :key="`category-sales-cards-item-${item}`"
                    to="/"
                    class="category-sales-cards__item category-sales-cards-item"
                >
                    <div class="category-sales-cards-item__title">Кровати</div>
                    <div class="category-sales-cards-item__tag">20%</div>
                    <nuxt-img
                        loading="lazy"
                        class="category-sales-cards-item__img"
                        format="webp"
                        :src="`assets/images/showcase/showcase-beds.png`"
                    />
                </NuxtLink>
            </div>
        </Wrapper>
    </section>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.category-sales
    &__wrapper
        display: grid
        grid-gap: 40px
    &__title
        font-weight: 700
        font-size: 26px
        line-height: 30px
        +until-tablet
            font-size: 24px
            line-height: 24px
        +while-mob
            font-size: 20px

.category-sales-cards
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 30px
    +media-until(767px)
        grid-template-columns: 1fr 1fr
        grid-gap: 20px
    +while-mob
        grid-gap: 16px

.category-sales-cards-item
    position: relative
    padding-top: 100%
    +while-mob
        padding-top: 147%
    &__img
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 100%
        transition: transform .3s

        &:hover
            transform: scale(1.01)

    &__tag
        position: absolute
        top: 20px
        right: 12px
        z-index: 2
        width: 48px
        height: 30px
        display: flex
        align-items: center
        justify-content: center
        padding-left: 10px
        font-weight: 700
        font-size: 14px
        color: $color_primary
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0OSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4yNzg4IDBDMTAuNTk5NCAwIDkuOTY2NTIgMC4zNDQ4NTEgOS41OTgyMSAwLjkxNTY5NUwxLjIxMDU1IDEzLjkxNTdDMC43ODQ2MzQgMTQuNTc1OCAwLjc4NDYzMyAxNS40MjQyIDEuMjEwNTUgMTYuMDg0M0w5LjU5ODIxIDI5LjA4NDNDOS45NjY1MiAyOS42NTUxIDEwLjU5OTQgMzAgMTEuMjc4OCAzMEg0Ni44OTE4QzQ3Ljk5NjQgMzAgNDguODkxOCAyOS4xMDQ2IDQ4Ljg5MTggMjhWMkM0OC44OTE4IDAuODk1NDMxIDQ3Ljk5NjQgMCA0Ni44OTE4IDBIMTEuMjc4OFpNNy43NzA3IDE3LjVDOS4xMDY2NCAxNy41IDEwLjE4OTYgMTYuMzgwNyAxMC4xODk2IDE1QzEwLjE4OTYgMTMuNjE5MyA5LjEwNjY0IDEyLjUgNy43NzA3IDEyLjVDNi40MzQ3NyAxMi41IDUuMzUxNzggMTMuNjE5MyA1LjM1MTc4IDE1QzUuMzUxNzggMTYuMzgwNyA2LjQzNDc3IDE3LjUgNy43NzA3IDE3LjVaIiBmaWxsPSIjRjJGMkYyIi8+Cjwvc3ZnPgo=)
        background-size: contain
        background-repeat: no-repeat
        +until-tablet
            top: 15px
        +while-mob
            padding-left: 7px
            width: 42px
            height: 24px
            font-size: 12px
            top: 8px
            right: 8px
    &__title
        z-index: 2
        position: absolute
        top: 20px
        left: 20px
        font-weight: 600
        font-size: 20px
        line-height: 24px
        +until-tablet
            line-height: 1.4
            font-size: 18px
            top: 15px
            left: 15px
        +while-mob
            top: 8px
            left: 8px
            font-size: 14px
</style>
