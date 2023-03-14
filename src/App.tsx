import { createSignal } from 'solid-js';
import { GamePlay } from './GamePlay';
import { StartScreen } from './StartScreen';
const [isPlaying, setIsPlaying] = createSignal(false);
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center align-middle w-full h-[100vh] bg-black">
      {!isPlaying() ? (
        <StartScreen setIsPlaying={setIsPlaying} />
      ) : (
        <GamePlay />
      )}
    </div>
  );
};

export default App;
