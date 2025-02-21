<script setup>
import { reactive } from 'vue'
import PieChart from '../components/PieChart.vue'
import DailyActivities from '@/components/DailyActivities.vue'
import { dayList } from '@/components/dayList'
import { time } from '@/components/dayList'
const chartData = reactive({
  labels: ['School', 'Sleep', 'Exercise', 'Electronics', 'Travel', 'Essentials'],
  datasets: [
    {
      data: time, // Time in 30 minute intervals should add up to 48
      backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#FFA726', '#BF53FF'],
    },
  ],
})
</script>

<template>
  <div class="container flex w-[90%] items-center justify-center m-auto">
    <PieChart class="w-[45%]" :data="chartData" />
    <DailyActivities
      class="w-[45%] flex flex-wrap justify-center items-center border-[0.3rem] border-black rounded-[1rem] p-[1rem]"
      v-for="activity in dayList"
      :activity="activity"
      :key="activity.id"
    />
  </div>
</template>
