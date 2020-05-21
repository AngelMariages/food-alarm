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
          expanded>
            Iniciar
        </b-button>
      </div>
      <div class="column is-full">
        <b-button
          @click="pararAlarma"
          :loading="stopLoading"
          type="is-primary"
          :disabled="!stopAllowed"
          expanded>
            Parar
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AnalogClock from './AnalogClock.vue';

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

    fetch('https://angelm340.ddns.net/sound/?start', { mode: 'no-cors' })
      .then(() => {
        this.alarmaLoading = false;
        this.getStatus();
      });
  }

  pararAlarma() {
    this.stopLoading = true;

    fetch('https://angelm340.ddns.net/sound/?stop', { mode: 'no-cors' })
      .then(() => {
        this.stopLoading = false;
        this.getStatus();
      });
  }

  getStatus() {
    fetch('https://angelm340.ddns.net/sound/?status')
      .then((resp) => resp.json()).then((apiStatus) => {
        const { status } = apiStatus;

        if (status === 'SOUNDING') {
          this.startAllowed = false;
          this.stopAllowed = true;
        } else if (status === 'STOPPED') {
          this.startAllowed = true;
          this.stopAllowed = false;
        }
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
