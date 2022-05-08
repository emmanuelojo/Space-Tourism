<script setup lang="ts">
import { ref } from "vue";
import patternBg from "../assets/destination/background-destination-desktop.jpg";
import Navbar from "../components/Navbar.vue";

const activeTab = ref(1);
const tabs = [
  {
    id: 1,
    name: "Moon",
  },
  {
    id: 2,
    name: "Mars",
  },
  {
    id: 3,
    name: "Europa",
  },
  {
    id: 4,
    name: "Titan",
  },
];
</script>

<template>
  <div
    class="h-screen overflow-auto text-white"
    :style="{
      backgroundImage: `url(${patternBg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
    <Navbar />
    <div class="md:px-8 lg:mt-0">
      <div class="px-4 pt-10">
        <p><span class=""> 01 </span> PICK YOUR DESTINATION</p>
      </div>

      <div class="md:mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div class="order-2 pb-20 md:pb-0 md:order-1">
          <img
            v-if="activeTab === 1"
            class="w-44 md:w-full lg:w-2/3 flex justify-center mx-auto"
            src="../assets/destination/image-moon.png"
            alt="Moon Image"
          />
          <img
            v-if="activeTab === 2"
            class="w-44 md:w-full lg:w-2/3 flex justify-center mx-auto"
            src="../assets/destination/image-mars.png"
            alt="Mars Image"
          />
          <img
            v-if="activeTab === 3"
            class="w-44 md:w-full lg:w-2/3 flex justify-center mx-auto"
            src="../assets/destination/image-europa.png"
            alt="Europa Image"
          />
          <img
            v-if="activeTab === 4"
            class="w-44 md:w-full lg:w-2/3 flex justify-center mx-auto"
            src="../assets/destination/image-titan.png"
            alt="Titan Image"
          />
        </div>

        <div class="flex flex-col order-1 md:order-2">
          <div class="flex">
            <a
              v-for="(tab, idx) in tabs"
              :key="idx"
              @click="activeTab = idx + 1"
              class="no-underline m-6 cursor-pointer transition ease-in hover:border-white hover:border-b-4"
              :class="[
                idx + 1 === activeTab
                  ? 'pb-2 border-white border-b-4'
                  : 'pb-0 border-none',
              ]"
            >
              {{ tab.name }}</a
            >
          </div>

          <div v-if="activeTab === 1" class="p-4">
            <h1 class="text-5xl md:text-6xl lg:text-8xl uppercase mt-0">
              MOON
            </h1>

            <p class="grid pt-7 pb-10 border-b border-gray-300">
              <span>
                See our planet as you've never seen it before. A perfect
                relaxing trip away to help
              </span>
              <span>
                regain perspective and come back refreshed. While you're there,
                take in some history
              </span>

              <span> by visiting the Luna 2 and Apollo 11 landing sites. </span>
            </p>

            <div class="mt-5 grid grid-cols-2auto gap-5">
              <div class="grid">
                <p class="text-sm">AVG. DISTANCE</p>
                <span class="text-3xl uppercase"> 384,400 km </span>
              </div>

              <div class="grid">
                <p class="text-sm">EST. TRAVEL TIME</p>
                <span class="text-3xl uppercase"> 3 days</span>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 2" class="p-4">
            <h1 class="text-5xl md:text-6xl lg:text-8xl uppercase mt-0">
              MARS
            </h1>

            <p class="grid pt-7 pb-10 border-b border-gray-300">
              <span>
                Don't forget to pack your hiking boots. You'll need them
              </span>

              <span>
                to tackle Olympus Mons, the tallest planetary mountain in
              </span>

              <span>
                our solar system. It's two and a half times the size of
              </span>

              <span> Everest!</span>
            </p>

            <div class="mt-5 grid grid-cols-2auto gap-5">
              <div class="grid">
                <p class="text-sm">AVG. DISTANCE</p>
                <span class="text-3xl uppercase"> 225 MIL. KM</span>
              </div>

              <div class="grid">
                <p class="text-sm">EST. TRAVEL TIME</p>
                <span class="text-3xl uppercase"> 9 MONTHS </span>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 3" class="p-4">
            <h1 class="text-5xl md:text-6xl lg:text-8xl uppercase mt-0">
              EUROPA
            </h1>

            <p class="grid pt-7 pb-10 border-b border-gray-300">
              <span>
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a
              </span>
              <span>
                winter lover's dream. With an icy surface, it's perfect for a
                bit of
              </span>
              <span>
                ice skating, curling, hockey, or simple relaxation in your snug
              </span>
              <span>wintery cabin.</span>
            </p>

            <div class="mt-5 grid grid-cols-2auto gap-5">
              <div class="grid">
                <p class="text-sm">AVG. DISTANCE</p>
                <span class="text-3xl uppercase"> 628 mil. km </span>
              </div>

              <div class="grid">
                <p class="text-sm">EST. TRAVEL TIME</p>
                <span class="text-3xl uppercase"> 3 years </span>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 4" class="p-4">
            <h1 class="text-5xl md:text-6xl lg:text-8xl uppercase mt-0">
              TITAN
            </h1>

            <p class="grid pt-7 pb-10 border-b border-gray-300">
              <span>
                The only moon known to have a dense atmosphere other than Earth,
                Titan
              </span>

              <span>
                is a home away from home (just a few hundred degrees colder!).
                As a
              </span>

              <span>
                bonus, you get striking views of the Rings of Saturn.</span
              >
            </p>

            <div class="mt-5 grid grid-cols-2auto gap-5">
              <div class="grid">
                <p class="text-sm">AVG. DISTANCE</p>
                <span class="text-3xl uppercase"> 1.6 bil. km </span>
              </div>

              <div class="grid">
                <p class="text-sm">EST. TRAVEL TIME</p>
                <span class="text-3xl uppercase">7 years </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
