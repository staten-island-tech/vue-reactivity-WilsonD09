<template>
  <div
    class="card w-[95%] h-[8rem] border-[.3rem] border-black rounded-[1rem] flex flex-col items-center justify-around text-center mt-[2rem]"
  >
    <h2>{{ activity.name }}</h2>
    <h3>{{ activity.category }}</h3>
    <button class="border-[.2rem] rounded-[.8rem] p-[.3rem]" @click="remove(activity.name)">
      Remove
    </button>
  </div>
</template>

<script setup>
import { dayList } from './dayList'
import { time } from './dayList'
const props = defineProps({
  activity: Object,
})

function remove(name) {
  dayList.forEach((el, index) => {
    if (el.name === name) {
      dayList.splice(index, 1)
      updateTime()
    }
  })
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
