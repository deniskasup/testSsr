import { reactive, shallowReadonly } from '#imports'

const state: {
    openedModals: string[]
} = reactive({
    openedModals: [],
})

const addModal = (modalComponentName: string) => {
    state.openedModals.push(modalComponentName)
}
const removeAllModals = () => {
    state.openedModals = []
}
const removeLastModal = () => {
    state.openedModals.pop()
}

export const modalsStore = shallowReadonly({
    addModal,
    removeAllModals,
    removeLastModal,
})
