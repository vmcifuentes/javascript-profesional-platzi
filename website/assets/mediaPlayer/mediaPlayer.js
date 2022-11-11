function MediaPlayer(config){
    this.media = config.el;
}

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

/* const button = document.querySelector('button');
button.onclick = () => {
    player.media.paused ? player.play() : player.pause();
};   */
  
MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
};

export default MediaPlayer;