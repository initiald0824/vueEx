const state = {
  userName: 'David'
}

const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}

const actions = {
  updateUserName ({ commit, state, rootState }) {
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
