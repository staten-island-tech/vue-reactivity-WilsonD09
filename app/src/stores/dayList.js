import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const dayList = defineStore('dayList', () => {
  const dayList = reactive([])
  return {
    dayList,
  }
})
