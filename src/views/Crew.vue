<script setup lang="ts">
import { ref } from "vue";
import patternBg from "../assets/crew/background-crew-desktop.jpg";
import Navbar from "../components/Navbar.vue";

const slides = ref(4);
const active = ref(1);
const activeSlide = ref(1);

const jump = (index: number) => {
  activeSlide.value = index;
};
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
    <div class="p-4 md:p-8 lg:px-20 mt-6">
      <div class="">
        <p class="text-xl md:text-2xl lg:text-3xl">
          <span class="mr-4 text-gray-300"> 02 </span> MEET YOUR CREW
        </p>
      </div>

      <div class="md:mt-20 grid lg:grid-cols-2auto gap-8 md:items-center">
        <div class="relative order-2 lg:order-1 pb-40">
          <div
            v-if="activeSlide === 1"
            class="grid place-content-center lg:place-content-start"
          >
            <div>
              <h3 class="text-gray-300 mb-0 uppercase">Commander</h3>
              <h1 class="mt-1 text-white text-4xl md:text-5xl uppercase">
                Douglas Hurley
              </h1>

              <p class="mt-8 grid text-white">
                <span>
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot
                </span>
                <span>
                  and former NASA astronaut. He launched into space for the
                  third time as
                </span>
                <span> commander of Crew Dragon Demo-2.</span>
              </p>
            </div>
          </div>

          <div
            v-if="activeSlide === 2"
            class="grid place-content-center lg:place-content-start"
          >
            <div>
              <h3 class="text-gray-300 mb-0 uppercase">FLIGHT ENGINEER</h3>
              <h1 class="mt-1 text-white text-4xl md:text-5xl uppercase">
                ANOUSHEH ANSARI
              </h1>

              <p class="mt-8 grid text-white">
                <span>
                  Anousheh Ansari is an Iranian American engineer and co-
                </span>
                <span>
                  founder of Prodea Systems. Ansari was the fourth self-</span
                >
                <span>
                  funded space tourist, the first self-funded woman to fly</span
                >
                <span> to the ISS, and the first Iranian in space.</span>
              </p>
            </div>
          </div>

          <div
            v-if="activeSlide === 3"
            class="grid place-content-center lg:place-content-start"
          >
            <div>
              <h3 class="text-gray-300 mb-0 uppercase">Pilot</h3>
              <h1 class="mt-1 text-white text-4xl md:text-5xl uppercase">
                Victor Glover
              </h1>

              <p class="mt-8 grid text-white">
                <span>
                  Pilot on the first operational flight of the SpaceX Crew
                  Dragon to the
                </span>
                <span>
                  International Space Station. Glover is a commander in the U.S.
                  Navy where
                </span>
                <span>
                  he pilots an F/A-18.He was a crew member of Expedition 64, and
                  served as a
                </span>
                <span> station systems flight engineer. </span>
              </p>
            </div>
          </div>

          <div
            v-if="activeSlide === 4"
            class="grid place-content-center lg:place-content-start"
          >
            <div>
              <h3 class="text-gray-300 mb-0 uppercase">Mission Specialist</h3>
              <h1 class="mt-1 text-white text-4xl md:text-5xl uppercase">
                Mark Shuttleworth
              </h1>

              <p class="mt-8 grid text-white">
                <span>
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind
                </span>
                <span>
                  Linux-based Ubuntu operating system. Shuttleworth became the
                  first South
                </span>
                <span> to travel to space as a space tourist. </span>
              </p>
            </div>
          </div>

          <ul
            class="absolute left-1/3 md:left-3/5 lg:left-0 bottom-10 md:bottom-12"
          >
            <li
              v-for="(dot, idx) in slides"
              :key="idx"
              @click="jump(idx + 1)"
              class="w-5 h-5 rounded-full inline-block mx-1 cursor-pointer transition ease-in-out bg-white"
              :class="[
                idx + 1 === activeSlide
                  ? 'bg-white'
                  : 'bg-gray-300 opacity-20  ',
              ]"
            ></li>
          </ul>
        </div>

        <div class="mt-10 md:mt-0 order-1 lg:order-2">
          <div
            v-if="activeSlide === 1"
            class="flex justify-center mx-auto w-2/3 md:w-2/5 lg:w-2/3"
          >
            <img
              src="../assets/crew/image-douglas-hurley.png"
              alt="Crew Image"
              class="w-2/3 md:w-2/5 lg:w-2/3"
            />
          </div>

          <div
            v-if="activeSlide === 2"
            class="flex justify-center mx-auto w-2/3 md:w-2/5 lg:w-2/3 border border-red-500"
          >
            <img
              src="../assets/crew/image-anousheh-ansari.png"
              alt="Crew Image"
              class="w-2/3 md:w-2/5 lg:w-2/3"
            />
          </div>

          <div
            v-if="activeSlide === 3"
            class="flex justify-center mx-auto w-2/3 md:w-2/5 lg:w-2/3 border border-red-500"
          >
            <img
              src="../assets/crew/image-victor-glover.png"
              alt="Crew Image"
              class="w-2/3 md:w-2/5 lg:w-2/3"
            />
          </div>

          <div
            v-if="activeSlide === 4"
            class="flex justify-center mx-auto w-2/3 md:w-2/5 lg:w-2/3 border border-red-500"
          >
            <img
              src="../assets/crew/image-mark-shuttleworth.png"
              alt="Crew Image"
              class="w-2/3 md:w-2/5 lg:w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
