import { $vfm } from 'vue-final-modal'
import {
    LazyModalsCheckCity,
    LazyModalsNeedHelp,
    LazyModalsNotion,
    LazyModalsOneClick,
    LazyModalsRegistration,
    LazyModalsSelectCity,
    LazyModalsReview,
} from '#components'

export default function useModals() {
    const showReview = (productName: string) => {
        $vfm.show({
            component: LazyModalsReview,
            bind: { productName },
        })
    }

    const showCheckCity = () => {
        $vfm.show({
            component: LazyModalsCheckCity,
        })
    }
    const showSelectCity = () => {
        $vfm.show({
            component: LazyModalsSelectCity,
        })
    }

    const showNeedHelp = () => {
        $vfm.show({
            component: LazyModalsNeedHelp,
        })
    }

    const showOneClick = () => {
        $vfm.show({
            component: LazyModalsOneClick,
        })
    }

    const showRegistration = () => {
        $vfm.show({
            component: LazyModalsRegistration,
        })
    }

    const showNotion = (smile: string, title: string, text: string) => {
        $vfm.show({
            component: LazyModalsNotion,
            bind: { smile, title, text },
        })
    }
    return {
        showReview,
        showCheckCity,
        showSelectCity,
        showNotion,
        showRegistration,
        showOneClick,
        showNeedHelp,
    }
}
