import Mock from 'mockjs'
import { getUserInfo } from './response/user'

Mock.mock('http://localhost:8080/getUserInfo', getUserInfo)

export default Mock
