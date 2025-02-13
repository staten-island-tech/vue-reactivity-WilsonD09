<template>
  <div
    class="card w-[22%] h-[30rem] border-[0.3rem] border-black rounded-[1rem] flex flex-col items-center justify-around text-center mt-[2rem]"
  >
    <h2>{{ activity.name }}</h2>
    <h3>{{ activity.category }}</h3>
    <img :src="activity.picture" :alt="activity.alt" />
    <button
      @click="addToDay"
      class="mt-[1rem] text-black hover:bg-blue-600 transition p-[1rem] border-black border-[.2rem] rounded-[1rem]"
    >
      Add to Day
    </button>
  </div>
</template>

<script setup>
import { dayList } from './dayList'

const props = defineProps({
  activity: {
    type: Object,
  },
})

const addToDay = () => {
  dayList.push(props.activity)
  console.log(`Added ${props.activity.name} to day`)
  console.log(dayList)
}
</script>

<style scoped></style>
