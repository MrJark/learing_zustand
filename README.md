# React + TypeScript + Vite + Zustand + TailwindCSS + ReactRouterDom

Este es un cascarón de proyecto, siéntete libre de usarlo para tus proyectos.

<img src="https://github.com/Klerith/zustand-mini-curso/blob/main/public/screenshot.png?raw=true" alt="Dashboard Screenshot">



## Inicialización del proyecto

1. Clonar proyecto
2. Instalar dependencias ```npm install```
3. Correr en desarrollo ```npm run dev```

## Instalaciones

* [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) a través del `npm i zustand` y para colocar un estado global simplemente hay qeu tenr lo siguiente:

```js
  import { create } from 'zustand'

  const useBearStore = create( ( set ) => ( {
    blackBears: 0,
    pandaBears: 1,
    polarBears: 10,

    increaseBlackBears: (by: number) => set((state) => ({blackBears: state.blackBears + by})),
  } ) )
```
```ts
  import { create } from 'zustand'

  interface BearState {
    blackBears: number,
    polarBears: number,
    pandaBears: number,

    increaseBlackBears: (by: number) => void
  }

  const useBearStore = create<BearState>()( ( set ) => ( {
    blackBears: 0,
    pandaBears: 1,
    polarBears: 10,

    increaseBlackBears: (by: number) => set((state) => ({blackBears: state.blackBears + by})),

  } ) )
```