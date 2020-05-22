<!--
Copyright (c) 2020 by Nicolas Udy (https://codepen.io/udyux/pen/WgjXBz) And modification by me

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->

<template>
  <div class="clock-container">
    <figure class="analog-clock">
      <figcaption class="analog-clock__face">
        <span
          v-for="n in 60"
          :key="n"
          class="analog-clock__notch"
          :class="{ '-long': !(n % 5) }"
          :style="{ transform: `rotate(${n * 6}deg)` }"
        >
        </span>
      </figcaption>

      <span class="analog-clock__hand -seconds" :style="seconds"></span>
      <span class="analog-clock__hand -minutes" :style="minutes"></span>
      <span class="analog-clock__hand -hours" :style="hours"></span>
    </figure>
  </div>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class AnalogClock extends Vue {
  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      tick: 0,
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      rotation: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  }

  get hours() {
    return { transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.hours}deg)` };
  }

  get minutes() {
    return { transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.minutes}deg)` };
  }

  get seconds() {
    return { transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.seconds}deg)` };
  }

  @Watch('tick')
  onTickChange() {
    this.rotation.seconds += 6;
    this.rotation.minutes += 0.1;
  }

  @Watch('minute')
  onMinuteChange(to, from) {
    if (from === to) return;
    this.rotation.hours += 0.5;
  }

  updateTime(time) {
    this.tick += 1;
    this.time = {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
    };

    setTimeout(() => this.updateTime(new Date()), 1000 - new Date().getMilliseconds());
  }

  mounted() {
    const date = new Date();
    this.updateTime(date);
    const [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    this.rotation = {
      hours: h * 30 + m * 0.5,
      minutes: m * 6 + s * 0.1,
      seconds: s * 6 - 6,
    };
  }
}
</script>

<style lang="scss" scoped>
.analog-clock {
  /* top: 0;
  left: -50%;
  width: 50vh;
  height: 50vh; */
  top: 20vh;
  left: 16%;
  width: 40vh;
  height: 40vh;
  position: relative;
  border-radius: 100%;
  background-color: white;
  transform: translate3d(-1.5rem, -50%, 0);
  filter: drop-shadow(0 0.125rem 0.5rem rgba(black, 0.1));

  &::after {
    top: 50%;
    left: 50%;
    content: "";
    width: 2.5%;
    height: 2.5%;
    position: absolute;
    border-radius: 100%;
    background-color: #edbec5;
    transform: translate3d(-50%, -50%, 0);
  }

  &__face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__notch {
    transform-origin: 50% 100%;
    position: absolute;
    width: 1px;
    height: 49%;
    bottom: 50%;
    left: 50%;

    &::after {
      content: "";
      width: 100%;
      height: 2.5%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #b6c3c9;
    }

    &.-long::after {
      width: 2px;
      height: 7.5%;
    }
  }

  &__hand {
    transform-origin: 50% 100%;
    background-color: #7392a0;
    position: absolute;
    width: 2px;
    height: 40%;
    bottom: 50%;
    left: 50%;
    border-radius: 2px;
    transition: transform 1s linear;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 10%;
      background-color: inherit;
      backface-visibility: hidden;
    }

    &.-hours {
      height: calc(100% / 3);
      width: 3px;
      border-radius: 3px;
      transition: transform 60s linear;
    }

    &.-seconds {
      width: 1px;
      height: 45%;
      border-radius: 0;
      background-color: #edbec5;
      transition: transform 100ms cubic-bezier(0.6, 0.05, 0, 1.6);

      &::after {
        height: 12.5%;
      }
    }
  }
}
</style>
