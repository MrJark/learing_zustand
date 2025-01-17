import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';

export const BearPage = () => {
  // const blackBear = useBearStore( state => state.blackBears)
  // const increaseBlackBears = useBearStore( state => state.increaseBlackBears)
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        {/* <WhiteCard centered>
          <h2>Osos Negros</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increaseBlackBears( +1 )}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {blackBear} </span>
            <button onClick={ () => increaseBlackBears( -1 ) }>-1</button>
          </div>

        </WhiteCard> */}

        {/* <WhiteCard centered>
          <h2>Osos Polares</h2>

          <div className="flex flex-col md:flex-row">
            <button> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> 0 </span>
            <button>-1</button>

          </div>

        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Pandas</h2>

          <div className="flex flex-col md:flex-row">
            <button> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> 0 </span>
            <button>-1</button>
          </div>

        </WhiteCard> */}
        <BlackBear />
        <PandaBear />
        <PolarkBear />


      </div>

    </>
  );
};



export const BlackBear = () => {
  const blackBear = useBearStore( state => state.blackBears )
  const increaseBlackBears = useBearStore( state => state.increaseBlackBears )
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={ () => increaseBlackBears( +1 ) }> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> { blackBear } </span>
        <button onClick={ () => increaseBlackBears( -1 ) }>-1</button>
      </div>

    </WhiteCard>
  )
}

export const PolarkBear = () => {
  const polarBear = useBearStore( state => state.polarBears )
  const increasePolarBears = useBearStore( state => state.increasePolarBears )
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={ () => increasePolarBears( +1 ) }> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> { polarBear } </span>
        <button onClick={ () => increasePolarBears( -1 ) }>-1</button>
      </div>

    </WhiteCard>
  )
}

export const PandaBear = () => {
  const pandaBear = useBearStore( state => state.pandaBears )
  const increasePandaBear = useBearStore( state => state.increasePandaBears )
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={ () => increasePandaBear( +1 ) }> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> { pandaBear } </span>
        <button onClick={ () => increasePandaBear( -1 ) }>-1</button>
      </div>

    </WhiteCard>
  )
}
