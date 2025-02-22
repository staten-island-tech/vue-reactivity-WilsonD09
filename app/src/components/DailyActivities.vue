<template>
  <div
    class="card w-[22%] h-[20rem] border-[0.3rem] border-black rounded-[1rem] flex flex-col items-center justify-around text-center mt-[2rem]"
  >
    <h2>{{ activity.name }}</h2>
    <h3>{{ activity.category }}</h3>
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
import { time } from './dayList'

const props = defineProps({
  activity: Object,
})

function addToDay() {
  dayList.push(props.activity)
  updateTime()
  console.log(`Added ${props.activity.name} to day`)
  console.log(dayList)
}

function updateTime() {
  time.fill(0)
  dayList.forEach((day) => {
    if (day.category === 'School') {
      time[0] += 1
    } else if (day.category === 'Sleep') {
      time[1] += 1
    } else if (day.category === 'Exercise') {
      time[2] += 1
    } else if (day.category === 'Electronics') {
      time[3] += 1
    } else if (day.category === 'Travel') {
      time[4] += 1
    } else if (day.category === 'Essentials') {
      time[5] += 1
    }
  })
  console.log(time)
}
</script>

<style scoped></style>
