<template>
  <Transition name="fade-display">
      <div v-if="modelValue" class="overlay">
        <div class="blur-background"></div>
        <div class="content">
          <LoginView @close="handleClose"/>
        </div>
      </div>
    </Transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import LoginView from "@/views/LoginView.vue";

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])


// 关闭遮罩
const handleClose = () => {
  emit('update:modelValue', false)
}

</script>

<style scoped>
/* 样式与选项式API版本保持一致 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.fade-display-enter-active{
  transition: all 0 ease-in-out;
}
.fade-display-leave-active {
  transition: all 200ms ease-in-out;
}

.fade-display-enter-from,
.fade-display-leave-to {
  display: none;
}
.blur-background {
  background-image: url("../assets/bgc.png");
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(3px) brightness(0.6);
  background-size: cover;
  background-position: center;
}

.content {
  position: relative;
  z-index: 10000;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: black;
}

.no-scroll {
  overflow: hidden;
}
</style>