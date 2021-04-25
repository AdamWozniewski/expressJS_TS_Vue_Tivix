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
        SET_USER_VIDEOS(state: any, payload: object = {}) {
            state.user.videos = payload;
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