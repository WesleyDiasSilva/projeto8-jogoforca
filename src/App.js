import React from 'react'
import imagem0 from './assets/forca0.png'
import imagem1 from './assets/forca1.png'
import imagem2 from './assets/forca2.png'
import imagem3 from './assets/forca3.png'
import imagem4 from './assets/forca4.png'
import imagem5 from './assets/forca5.png'
import imagem6 from './assets/forca6.png'

function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const imagens = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]

  return (
    <div className='app'>
      <div className='parteSuperior'> 
        <img src= {imagens[0]} alt='teste'/>     
        <button className='btnEscolhePergunta'>Escolher Palavra</button>
      </div>
      <div className='letras'>

        <div className='letrasCima'>{alfabeto.map((letra, index) => { 
          if(index < 13){
            return <button className='letra' key={index}>{letra}</button>
          }
      })}</div>

        <div className='letrasBaixo'>

        {alfabeto.map((letra, index) => { 
          if(index >= 13){
            return <button className='letra' key={index}>{letra}</button>
          }
      })}

        </div>
      </div>
      <div className='chute'>
        <label className='jaSei'>Já sei a palavra!</label>
        <input type='text'/>
        <button className='btnChutar'>Chutar</button>
      </div>
    </div>
  )
}

export default App
