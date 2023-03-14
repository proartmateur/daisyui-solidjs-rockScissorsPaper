import { texts } from './texts';

const StartScreen = ({ setIsPlaying }: { setIsPlaying: Function }) => {
  return (
    <>
      <div className="bg-e-white w-[320px] h-[480px] flex flex-col justify-center px-5">
        <h1 className="font-extrabold font-sono text-6xl text-e-rock">
          Piedra
        </h1>
        <h1 className="font-extrabold font-sono text-6xl text-e-paper">
          Papel
        </h1>
        <h1 className="font-extrabold font-sono text-6xl text-e-scissors ">
          <span className="text-e-green">o</span> Tijeras
        </h1>
        <button
          onclick={() => setIsPlaying(true)}
          className="btn mt-11 bg-e-black text-e-white"
        >
          {texts.es.playButton}
        </button>
      </div>
    </>
  );
};

export { StartScreen };
