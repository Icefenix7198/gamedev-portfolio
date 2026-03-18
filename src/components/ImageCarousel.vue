<template>
  <div class="carousel-container" v-if="images && images.length > 0">
    <div class="carousel-wrapper">
      <transition-group name="carousel-fade" tag="div" class="carousel-slides">
        <div 
          v-for="(image, index) in images" 
          :key="image" 
          v-show="index === currentIndex"
          class="carousel-slide"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        >
        </div>
      </transition-group>

      <button v-if="images.length > 1" class="carousel-control prev" @click="prev" aria-label="Previous image">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button v-if="images.length > 1" class="carousel-control next" @click="next" aria-label="Next image">
        <i class="fa fa-chevron-right"></i>
      </button>

      <div v-if="images.length > 1" class="carousel-indicators">
        <span 
          v-for="(image, index) in images" 
          :key="'indicator-' + index"
          :class="{ active: index === currentIndex }"
          @click="goTo(index)"
          :aria-label="'Go to slide ' + (index + 1)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ImageCarousel",
  props: {
    images: {
      type: Array as () => string[],
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goTo(index: number) {
      this.currentIndex = index;
    }
  }
});
</script>

<style scoped>
.carousel-container {
  width: 100%;
  margin: 30px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  background-color: #000; /* Dark background for transparent images or letterboxing */
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.carousel-slides {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}

.carousel-control:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 15px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.carousel-indicators span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicators span.active {
  background: white;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Transitions */
.carousel-fade-enter-active, .carousel-fade-leave-active {
  transition: opacity 0.6s ease;
}
.carousel-fade-enter, .carousel-fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .carousel-control {
    width: 36px;
    height: 36px;
    padding: 8px;
  }
  .prev { left: 10px; }
  .next { right: 10px; }
}
</style>
