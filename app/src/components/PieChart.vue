<script setup>
import { onMounted, reactive } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

// Reactive data for the chart
const chartData = reactive({
  labels: ['School', 'Sleep', 'Exercise', 'Electronics', 'Travel', 'Essentials'],
  datasets: [
    {
      data: [0, 0, 0, 0, 0, 0], // Example time allocation in hours
      backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#FFA726', '#BF53FF'],
    },
  ],
})

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
    <Pie class="mt-[2rem]" :data="chartData" :options="chartOptions" />
  </div>
</template>
