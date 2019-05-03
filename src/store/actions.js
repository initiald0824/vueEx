import { getAppName } from '@/api/app.js'

const actions = {
  // updateAppName ({ commit }) {
  //   getAppName().then((res) => {
  //     commit('SET_APP_NAME', res.info.appName)
  //   }).catch(err => {
  //     console.log('err', err)
  //   })
  // }
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log('err', err)
    }
  }
}
export default actions
