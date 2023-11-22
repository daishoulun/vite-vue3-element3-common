<template>
  <el-container>
    <el-header class="layout-header">Header</el-header>
    <el-container class="layout-content">
      <el-aside class="layout-aside">
        <AppSlider></AppSlider>
      </el-aside>
      <el-main class="layout-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
