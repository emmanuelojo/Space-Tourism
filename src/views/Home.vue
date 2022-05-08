<script setup lang="ts">
import patternBg from "../assets/home/background-home-desktop.jpg";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div
    class="h-screen text-white overflow-auto pb-10"
    :style="{
      backgroundImage: `url(${patternBg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
    <Navbar />
    <div class="lg:flex lg:justify-around lg:items- lg:px-10 mt-20">
      <div class="mx-4 lg:w-1/2 grid place-content-center gap-5">
        <p class="text-center uppercase lg:text-left">
          So, you want to travel to
        </p>
        <p class="text-7xl text-center uppercase font-light lg:text-left">
          Space
        </p>
        <p class="mt-5 md:mx-40 lg:mx-1 text-center lg:grid lg:text-left">
          <span>
            Let's face it; if you want to go to space, you might as well</span
          >
          <span>genuinely go to outer space and not hover kind of on the</span>
          <span>
            edge of it. Well sit back, and relax because we'll give you
          </span>

          <span> a truly out of this world experience!</span>
        </p>
      </div>

      <div class="mt-10 md:mt-40 lg:mt-0 grid place-content-center mx-auto">
        <div
          class="bg-white w-44 h-44 px-4 py-8 grid place-content-center mx-auto rounded-full"
        >
          <p class="uppercase font-medium text-black">explore</p>
        </div>
      </div>
    </div>
  </div>
</template>
