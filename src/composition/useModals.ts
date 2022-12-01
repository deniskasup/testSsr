import { $vfm } from 'vue-final-modal'
import {
    LazyModalsCheckCity,
    LazyModalsNeedHelp,
    LazyModalsNotion,
    LazyModalsOneClick,
    LazyModalsRegistration,
    LazyModalsSelectCity,
} from '#components'

export default function useModals() {
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

    const showNotion = (type: string) => {
        $vfm.show({
            component: LazyModalsNotion,
            bind: {
                type,
            },
        })
    }
    return {
        showCheckCity,
        showSelectCity,
        showNotion,
        showRegistration,
        showOneClick,
        showNeedHelp,
    }
}
