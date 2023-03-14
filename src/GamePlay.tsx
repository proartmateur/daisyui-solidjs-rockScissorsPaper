import { createSignal, createEffect } from 'solid-js';
function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;

  return rand;
}

const options = ['piedra', 'papel', 'tijeras'];

const play = (selected: string): { result: string; cpuOption: string } => {
  const cpuSelected = options[generateRandom(1, 3) - 1];
  const option = `${selected}_${cpuSelected}`;
  switch (option) {
    case 'piedra_piedra':
    case 'tijeras_ijeras':
    case 'papel_papel':
      return { result: 'empate', cpuOption: cpuSelected };
      break;

    case 'piedra_tijera':
    case 'tijera_papel':
    case 'papel_piedra':
      return { result: 'ganas', cpuOption: cpuSelected };
      break;

    default:
      return { result: 'pierdes', cpuOption: cpuSelected };
      break;
  }
};

const [selectedOption, setSelectedOptiton] = createSignal<string | null>(null);
const [result, setResult] = createSignal<string | null>(null);
const [cpuOption, setCpuOption] = createSignal<string | null>(null);

const GamePlay = () => {
  createEffect((prev) => {
    const result = play(selectedOption());
    setCpuOption(result.cpuOption);
    console.log(selectedOption());
    if (selectedOption() !== null) {
      setResult(result.result);
    } else {
      setResult(null);
    }
  });

  return (
    <>
      <div className="bg-e-white w-[320px] h-[480px] flex flex-col justify-center items-center px-5">
        <h2
          className={
            result() === 'ganas'
              ? 'text-e-green text-4xl'
              : 'text-e-black text-3xl'
          }
        >
          {' '}
          {result}{' '}
        </h2>
        <h3 className="font-sono text-e-black text-xl uppercase my-5">
          CPU:{cpuOption} , {selectedOption}
        </h3>
        <div className="btn-group">
          <button
            onclick={() => setSelectedOptiton('piedra')}
            className="btn bg-e-rock text-e-white"
          >
            Piedra
          </button>
          <button
            onclick={() => setSelectedOptiton('papel')}
            className="btn bg-e-paper text-e-black hover:text-e-white"
          >
            Papel
          </button>
          <button
            onclick={() => setSelectedOptiton('tijeras')}
            className="btn bg-e-scissors text-e-black hover:text-e-white"
          >
            Tijeras
          </button>
        </div>
      </div>
    </>
  );
};

export { GamePlay };
