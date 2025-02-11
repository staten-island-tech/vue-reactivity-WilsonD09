<template>
  <div
    class="card w-[22%] h-[30rem] border-[0.3rem] border-black rounded-[1rem] flex flex-col items-center justify-around text-center mt-[2rem]"
  >
    <h2>{{ activity.name }}</h2>
    <h3>{{ activity.category }}</h3>
    <img :src="activity.picture" :alt="activity.alt" />
    <button
      @click="addToDay(activity)"
      class="mt-[1rem] text-black hover:bg-blue-600 transition p-[1rem] border-black border-[.2rem] rounded-[1rem]"
    >
      Add to Day
    </button>
  </div>
</template>

<script setup>
import { dayList } from '@/stores/dayList.js'

const props = defineProps({
  activity: {
    type: Object,
  },
})

const addToDay = (activity) => {
  dayList().push(activity)
  console.log(`Added ${activity.name} to day`)
  console.log(dayList)
}
</script>

<style scoped></style>
