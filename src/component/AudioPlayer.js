import { useRef, useState} from "react";


const AudioPlayer = () => {


  const mp3Player = useRef();
  const [time, setTime] = useState(0);
  const [updateValue, setUpdateValue] = useState(0);

  const play = () => {
    mp3Player.current.play();
  };

  const pause = () => {
    mp3Player.current.pause();    
  };

  const stop = () => {
    mp3Player.current.pause();
    mp3Player.current.time = 0;
  };

  //set the time to the audio element’s time value in seconds.
  const onPlaying = () => {
    setTime(mp3Player.current.time);
    setUpdateValue(
      (mp3Player.current.time / mp3Player.current.duration) * 100
    );
  }; 


    return (
        <div className="main-container">
            <div className="image-container">
                <img src="https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School-768x569.png" alt="songimage" width="200px" height="auto"/>
            </div>
            <div className="audio-container">
            <audio
            src="http://www.noiseaddicts.com/samples_1w72b820/4186.mp3"
            ref={mp3Player}
            onTimeUpdate={onPlaying}
            >
            </audio>
            <br />
            <p>{time}</p>
            <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={updateValue}
            onChange={(e) => {
            const seekto = mp3Player.current.duration * (e.target.value / 100);
            mp3Player.current.time = seekto;
            setUpdateValue(e.target.value);
            }}

            />
                <div className='button-container'>
                    <button onClick={play}>play</button>
                    <button onClick={pause}>pause</button>
                    <button onClick={stop}>stop</button>
                </div>
            </div>
        </div>
    )
}


export default AudioPlayer;