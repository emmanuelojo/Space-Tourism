<script setup lang="ts">
import { ref } from "vue";
import router from "../router";

const route = router.currentRoute.value.name;

const isToggled = ref(false);

const activeLink = ref("HOME");

if (route === "Crew") {
  activeLink.value = "CREW";
} else if (route === "Destination") {
  activeLink.value = "DESTINATION";
} else if (route === "Technology") {
  activeLink.value = "TECHNOLOGY";
} else {
  activeLink.value = "HOME";
}

const navbarItems = [
  {
    name: "HOME",
    number: "00",
    link: "/",
  },
  {
    name: "DESTINATION",
    number: "01",
    link: "/destination",
  },
  {
    name: "CREW",
    number: "02",
    link: "/crew",
  },
  {
    name: "TECHNOLOGY",
    number: "03",
    link: "/tech",
  },
];
</script>

<template>
  <div class="navbar sticky w-full flex justify-between p-2 lg:py-4">
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
    </div>

    <div class="flex justify-between items-center">
      <div class="line hidden lg:block">
        <hr class="bg-gray-500 max-w-[500px] ml-[500px]" />
      </div>

      <nav
        class="lg:pl-7 bg-[rgba(0,0,0,0.2)]"
        :class="
          isToggled
            ? 'flex justify-between items-center fixed right-0 top-0 w-full bg-[rgba(0,0,0,0.7)]'
            : 'hidden md:flex justify-between items-center pt-5'
        "
      >
        <ul
          class="grid pt-16 md:pt-0 gap-5 md:flex md:items-center md:mr-5 lg:mr-10"
          :class="isToggled ? 'mx-auto' : ''"
        >
          <li
            v-for="(ele, idx) in navbarItems"
            :key="idx"
            class="text-left lg:mx-7"
            :class="idx === navbarItems.length - 1 ? 'mb-8 md:mb-0' : ''"
            @click="activeLink = ele.name"
          >
            <router-link :to="ele.link" class="">
              <p
                class="w-fit flex text-white font-normal pb-4"
                :class="[
                  activeLink === ele.name ? ' border-b-2 border-white ' : '',
                ]"
              >
                <span class="font-semibold mr-2"> {{ ele.number }}</span>
                {{ ele.name }}
              </p>
            </router-link>
          </li>
        </ul>
      </nav>

      <div
        class="p-2 z-20 md:hidden absolute top-0 right-0"
        @click="isToggled = !isToggled"
      >
        <button :class="isToggled ? 'hamburger active' : 'hamburger'">
          <span class="line"> </span> <span class="line"> </span
          ><span class="line"> </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hamburger {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.hamburger .line {
  display: block;
  width: 40px;
  height: 3px;
  background-color: #fff;
  margin-block: 7px;
  border-radius: 4px;
  transition: transform 0.5s, opacity 0.25s;
}

.hamburger.active .line:nth-child(1) {
  transform: translateY(13px) rotate(45deg);
}

.hamburger.active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .line:nth-child(3) {
  transform: translateY(-13px) rotate(-45deg);
}

a {
  text-decoration: none;
}
.router-link-exact-active {
  background: #fff;
  height: 3px;
}
</style>
