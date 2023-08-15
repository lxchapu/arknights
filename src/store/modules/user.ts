import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    name: '博士',
    id: '517882257',
    level: 5,
    exp: 60,
  })

  const asset = reactive({
    money: 142470,
    gem: 2800,
    stone: 0,
    sense: 924,
  })

  const fightInfo = reactive({
    level: '2-3',
    name: '无罪推定',
  })

  return {
    user,
    asset,
    fightInfo,
  }
})
