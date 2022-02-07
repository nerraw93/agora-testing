<template>
  <div class="agora-video-player" ref="player" :id="domId">
    <font-awesome-icon :id="'mute_' + domId + '_enabled'" class="mic" icon="microphone" />
    <font-awesome-icon :id="'mute_' + domId + '_disabled'" class="mic" icon="microphone-slash" style="display: none" />
  </div>
</template>

<script>
export default {
  name: 'stream-player',
  props: [
    'stream',
    'domId'
  ],
  mounted () {
    this.$nextTick(function () {
      if (this.stream && !this.stream.isPlaying()) {
        this.stream.play(`${this.domId}`, {fit: 'cover'}, (err) => {
          if (err && err.status !== 'aborted') {
            console.warn('trigger autoplay policy')
          }
        })
      }
    })
  },
  beforeDestroy () {
    if (this.stream) {
      if (this.stream.isPlaying()) {
        this.stream.stop()
      }
      this.stream.close()
    }
  }
}
</script>

<style>
.agora-video-player {
  height: 100%;
  width: 100%;
}

video {
  position: relative !important;
}

.mic {
position: absolute;
z-index: 1;
margin-left: 120px;
margin-top: 20px;
}
</style>