<template>
  <el-container>
    <el-header>
      Header
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/about">About</router-link>
        </div>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container?
    </el-container>
  </el-container>
</template>

<style>
  
</style>
