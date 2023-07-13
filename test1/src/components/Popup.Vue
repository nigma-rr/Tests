<template>
  <div class="popup" v-if="isOpen">
    <div class="popup-content">
      <slot></slot>
      <button class="popup-close" @click="closePopup">×</button>
    </div>
    <div class="popup__overlay-close" @click="closePopup"></div>
  </div>
</template>

<style lang="scss">
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .popup__overlay-close {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 80vw;
    max-height: 80vh;
    min-width: 80vw;
    min-height: 80vh;
    overflow: auto;
    position: relative;
    z-index: 1;
  }

  .product__added-pu {
    .popup-content {
      min-height: 50px;
      min-width: 250px;
    }
  }

  .popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    background: transparent;
    color: #000;
    font-size: 45px;
    cursor: pointer;
  }
</style>

<script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      openPopup() {
        this.isOpen = true;
      },
      closePopup() {
        this.isOpen = false;
      },
    }
  };
</script>
