<template>
    <div class="skeleton-loading">
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
      <div class="skeleton-loading-item" />
    </div>
  </template>
  
  <style  scoped>
  .skeleton-loading {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
  
  .skeleton-loading-item {
    width: 100%;
    height: 100%;
    background-color: #eee;
    animation: pulse 1s infinite;
  }
  
  @keyframes pulse {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.4;
    }
  }
  </style>
  