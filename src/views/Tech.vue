<script setup lang="ts">
import { ref } from "vue";
import patternBg from "../assets/technology/background-technology-desktop.jpg";
import Navbar from "../components/Navbar.vue";

const activeTab = ref(1);
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
          <span class="text-gray-300 mr-4"> 03 </span> SPACE LAUNCH 101
        </p>
      </div>

      <div
        class="mx-4 lg:mx-0 pb-10 grid lg:flex lg:justify-between lg:items-center"
      >
        <div class="mt-10 md:mt-16 lg:mt-0 flex justify-center lg:grid pr-12">
          <span
            v-for="(dot, idx) in 3"
            :key="idx"
            @click="activeTab = idx + 1"
            class="mx-3 lg:my-3 rounded-full cursor-pointer"
            :class="[
              activeTab === idx + 1
                ? 'bg-white text-black'
                : 'bg-transparent text-white border border-[rgba(255,255,255,0.4)]',
            ]"
          >
            <p class="px-2 md:px-5 md:py-3 lg:px-5 lg:py-3 m-1">{{ dot }}</p>
          </span>
        </div>

        <div
          v-if="activeTab === 1"
          class="grid lg:grid-cols-2auto gap-4 overflow-hidden"
        >
          <div>
            <h5 class="text-gray-300 mt-16 lg:mt-36 mb-0 uppercase">
              The terminology...
            </h5>
            <h1 class="mt-0 text-white text-4xl md:text-5xl uppercase">
              Launch vehicle
            </h1>

            <p class="mt-8">
              <span
                >A launch vehicle or carrier rocket is a rocket-propelled
              </span>
              <span>
                vehicle used to carry a payload from Earth's surface to
              </span>
              <span> space, usually to Earth orbit or beyond. Our WEB-X </span>
              <span
                >carrier rocket is the most powerful in operation. on the launch
                pad!
              </span>
              <span> carrier rocket is the most powerful in operation. </span>
              <span>
                Standing 150 metres tall, it's quite an awe-inspiring sight
              </span>

              <span>on the launch pad!</span>
            </p>
          </div>

          <div class="mt-5 mx-auto lg:mt-10 md:w-[450px] md:h-[480px] lg:ml-8">
            <img
              src="../assets/technology/image-launch-vehicle-portrait.jpg"
              alt="Tech Image"
            />
          </div>
        </div>

        <div
          v-if="activeTab === 2"
          class="grid lg:grid-cols-2auto gap-4 overflow-hidden"
        >
          <div>
            <h5 class="text-gray-300 mt-16 lg:mt-36 mb-0 uppercase">
              The terminology...
            </h5>
            <h1 class="mt-0 text-white text-4xl md:text-5xl uppercase">
              Space capsule
            </h1>

            <p class="mt-8">
              <span>
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry
              </span>
              <span>
                capsule to reenter the Earth's atmosphere without wings. Our
                capsule is where
              </span>
              <span
                >you'll spend your time during the flight. It includes a space
                gym, cinema,
              </span>

              <span
                >and plenty of other activities to keep you entertained.
              </span>
            </p>
          </div>

          <div class="mt-5 mx-auto lg:mt-10 md:w-[450px] md:h-[480px] lg:ml-8">
            <img
              src="../assets/technology/image-space-capsule-portrait.jpg"
              alt="Tech Image"
            />
          </div>
        </div>

        <div
          v-if="activeTab === 3"
          class="grid lg:grid-cols-2auto gap-4 overflow-hidden"
        >
          <div>
            <h5 class="text-gray-300 mt-16 lg:mt-36 mb-0 uppercase">
              The terminology...
            </h5>
            <h1 class="mt-0 text-white text-4xl md:text-5xl uppercase">
              Spaceport
            </h1>

            <p class="mt-8">
              <span>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft,
              </span>

              <span>
                by analogy to the seaport for ships or airport for aircraft.
                Based in the
              </span>

              <span>
                famous Cape Canaveral, our spaceport is ideally situated to take
                advantage
              </span>

              <span> of the Earth's rotation for launch.</span>
            </p>
          </div>

          <div class="mt-5 mx-auto lg:mt-10 md:w-[450px] md:h-[480px] lg:ml-8">
            <img
              src="../assets/technology/image-spaceport-portrait.jpg"
              alt="Tech Image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
