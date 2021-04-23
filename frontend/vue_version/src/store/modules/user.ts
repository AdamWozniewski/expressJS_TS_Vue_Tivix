export default function makeUser (initialConfig = {}) {
    const namespaced = true;
    const defaultState = {
        user: {},
    };
    const getters = {}
    const mutations = {
        SET_USER(state: any, payload: object = {}) {
            state.user = payload;
        },
    };
    const actions = {}
    function makeState ({ ...initialConfig }) {
        return {
            ...defaultState,
            ...initialConfig,
        };
    }
    return {
        namespaced,
        state: makeState(initialConfig),
        getters,
        mutations,
        actions,
    };
}