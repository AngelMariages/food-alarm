<template>
  <div class="section">
    <div class="columns">
      <div class="clock-column column">
        <AnalogClock></AnalogClock>
      </div>
      <div class="column is-full">
        <b-button
          @click="iniciarAlarma"
          :loading="alarmaLoading"
          type="is-primary"
          :disabled="!startAllowed"
          expanded
        >
          Iniciar
        </b-button>
      </div>
      <div class="column is-full">
        <b-button
          @click="pararAlarma"
          :loading="stopLoading"
          type="is-primary"
          :disabled="!stopAllowed"
          expanded
        >
          Parar
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AnalogClock from './AnalogClock.vue';

const API = 'https://angelm340.ddns.net/sound/';

@Component({
  components: {
    AnalogClock,
  },
})
export default class MainDisplay extends Vue {
  alarmaLoading = false;

  stopLoading = false;

  startAllowed = false;

  stopAllowed = false;

  iniciarAlarma() {
    this.alarmaLoading = true;

    fetch(`${API}?start`)
      .then(() => {
        this.alarmaLoading = false;
        this.getStatus();
      });

    this.iniciarTimer();
  }

  pararAlarma() {
    this.stopLoading = true;

    fetch(`${API}?stop`)
      .then(() => {
        this.stopLoading = false;
        this.getStatus();
      });
  }

  iniciarTimer() {
    const intervalNum = setInterval(async () => {
      const status = await this.getStatus();

      if (status && status === 'STOPPED') {
        clearInterval(intervalNum);
      }
    }, 500);
  }

  async getStatus(): Promise<string> {
    return fetch(`${API}?status`)
      .then((resp) => resp.json()).then((apiStatus) => {
        const { status } = apiStatus;

        if (status === 'SOUNDING') {
          this.startAllowed = false;
          this.stopAllowed = true;
        } else if (status === 'STOPPED') {
          this.startAllowed = true;
          this.stopAllowed = false;
        }

        return status;
      });
  }

  mounted() {
    this.getStatus();
  }
}
</script>

<style scoped>
.clock-column {
  height: 50vh;
  width: 100%;
}
</style>
