<script setup>
import { onMounted, reactive } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

// Reactive data for the chart
const props = defineProps(['data'])

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
})
</script>

<template>
  <div>
    <!-- <Pie class="mt-[2rem]" :data="chartData" :options="chartOptions" /> -->
    <Pie class="mt-[2rem]" :data="props.data" :options="chartOptions" />
  </div>
</template>
