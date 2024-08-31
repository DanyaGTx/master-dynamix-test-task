<template>
  <div class="main">
    <div class="container"><slot /></div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  margin-top: -100px;
}

.container {
  max-width: 1440px;
  margin: 0px auto;
  padding: 0px 80px;
}
</style>
