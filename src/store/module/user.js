import { login, authorization } from '@/api/user'
import { setToken } from '../../lib/util'

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
  },
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('error'))
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then((res) => {
        if (parseInt(res.code) === 401) {
          reject(new Error('token Error'))
        } else {
          setToken(res.data.token)
          resolve()
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
