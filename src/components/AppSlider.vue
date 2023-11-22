<template>
  <main class="app-slider">
    <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
      >
      <el-menu-item index="Home">Home</el-menu-item>
      <el-menu-item index="About">About</el-menu-item>
    </el-menu>
  </main>
</template>

<script setup>
  improt { ref } from 'vue'
  const activeIndex = ref('Home')
  const handleSelect = (val => {
    console.log('selectSlider', val)
  }
</script>

<style lang="scss" scoped>
  .app-slider {
    :deep(.el-menu--vertical) {
      border-right: none;
    }
  }
</style>
