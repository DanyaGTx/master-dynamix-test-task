<template>
  <div class="main">
    <div class="container"><slot /></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: 0px auto;
  padding: 0px 80px;

  @media (max-width: 1150px) {
    padding: 0px 20px;
  }
}
</style>
