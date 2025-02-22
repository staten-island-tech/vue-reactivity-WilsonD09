<script setup>
import { reactive } from 'vue'
import PieChart from '../components/PieChart.vue'
import { dayList } from '@/components/dayList'
import { time } from '@/components/dayList'
import HomeDay from '@/components/HomeDay.vue'

const dataTime = [time[0], time[1], time[2], time[3], time[4], time[5]]

const chartData = reactive({
  labels: ['School', 'Sleep', 'Exercise', 'Electronics', 'Travel', 'Essentials'],
  datasets: [
    {
      data: dataTime, // Time in 30 minute intervals should add up to 48
      backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#FFA726', '#BF53FF'],
    },
  ],
})
</script>

<template>
  <div class="container flex w-[90%] items-center m-auto justify-between">
    <PieChart class="w-[50%]" :data="chartData" />
    <div
      class="w-[35%] h-auto flex flex-wrap justify-center items-center border-[.3rem] border-black rounded-[1rem] p-[1rem]"
    >
      <HomeDay v-for="activity in dayList" :activity="activity" :key="activity.id" />
    </div>
  </div>
</template>
