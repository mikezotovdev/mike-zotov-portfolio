<template>
  <ul class="app-chips">
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;

  .app-chips {
    display: flex;
    flex-flow: row wrap;
    gap: fun.space(2);
  }
</style>
