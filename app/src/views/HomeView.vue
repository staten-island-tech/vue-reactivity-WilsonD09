<script setup>
import { reactive } from 'vue'
import PieChart from '../components/PieChart.vue'
import DailyActivities from '@/components/DailyActivities.vue'
import { dayList } from '@/stores/dayList.js'
const chartData = reactive({
  labels: ['School', 'Sleep', 'Exercise', 'Electronics', 'Travel', 'Essentials'],
  datasets: [
    {
      data: [6, 8, 2, 4, 2, 2], // Time in 30 minute intervals should add up to 48
      backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#FFA726', '#BF53FF'],
    },
  ],
})
</script>

<template>
  <div class="container flex w-[90%] items-center justify-center m-auto">
    <PieChart class="w-[45%]" :data="chartData" />
    <DailyActivities v-for="activity in dayList" :activity="activity" :key="activity.id" />
  </div>
</template>
