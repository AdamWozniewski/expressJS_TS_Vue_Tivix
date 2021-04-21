export default function makeUtilities (initialConfig = {}) {
    const namespaced = true
    const defaultState = {
        modalVisibility: false,
        modalProperties: {},
    }
    const getters = {}
    const mutations = {
        SET_MODAL_VISIBILITY(state: any, payload: boolean = false) {
            state.modalVisibility = payload
        },
        SET_MODAL_PROPS(state: any, payload: boolean) {
            state.modalProperties = payload
        },
    }
    const actions = {}
    function makeState ({ ...initialConfig }) {
        return {
            ...defaultState,
            ...initialConfig
        }
    }
    return {
        namespaced,
        state: makeState(initialConfig),
        getters,
        mutations,
        actions
    }
}