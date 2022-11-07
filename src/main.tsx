import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/*
* Por que um componente renderiza?
* - Hooks changed (mudou estado, contexto, reducer)
* - Props changed (mudou propriedades)
* - Parent rerendered (componente pai renderizou)
*
* Qual o fluxo de renderizacao?
* 1. O React recria o HTML da interface daquele componente
* 2. Compara a versao do HTML recriada com a versao anterior
* 3. Se mudou alguma coisa, ele reecreve o HTML na tela
* 
* Memo:
* 0.: Hook changed, Props changed (deep comparison)
* 0.1: Comparar a versao anterior dos hooks e props
* 0.2: Se mudou algo, ele vai permitir a nova renderizacao
*/
