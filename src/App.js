import React from 'react'
import imagem0 from './assets/forca0.png'
import imagem1 from './assets/forca1.png'
import imagem2 from './assets/forca2.png'
import imagem3 from './assets/forca3.png'
import imagem4 from './assets/forca4.png'
import imagem5 from './assets/forca5.png'
import imagem6 from './assets/forca6.png'
import palavras from './Palavras'

function App() {

  let [palavraAtual, setPalavraAtual] = React.useState(palavras[Math.floor((Math.random()*200))]);
  let [botaoPalavra, setBotaoPalavra] = React.useState(false);
  let [tentativas, setTentativas] = React.useState([]);
  let [acertos, setAcertos] = React.useState([]);
  let [error, setError] = React.useState([]);
  console.log(palavraAtual)
  function mudaPalavra(){
    setBotaoPalavra(true)
    setPalavraAtual(palavras[Math.floor((Math.random()*200))]);
    console.log(palavraAtual)
  }

  function verificaLetra(letra){
    if(palavraAtual.includes(letra)){
      setAcertos([...acertos, letra])
      console.log('Acerto:',acertos)
      return true
    }else{
      setError([...error, letra]);
      console.log('Erro',error)
      return false
    }
  }

  function trocaClasseLetra(letra){
    if(acertos.includes(letra)){
      return 'letraAcertou';
    }else if(error.includes(letra)){
      return 'letraErrou'
    }else{
      return 'letra'
    }
  }
  

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const imagens = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]

  function palavraUsuario(letra){
    if(acertos.includes(letra)){
      return letra
    }else{
      return '_ '
    }
  }

  return (
    <div className='app'>
      <div className='parteSuperior'> 
        <img src= {imagens[0]} alt='teste'/>     
        <div className='containerPalavra'>
          <button onClick={mudaPalavra} className='btnEscolhePergunta'>Escolher Palavra</button>
          <div>
          {botaoPalavra ? palavraAtual.split('').map((l, index) => <span key={index} className='palavra'>{palavraUsuario(l)}</span>): ''}
          </div>
        </div>
      </div>
      <div className='letras'>

        <div className='letrasCima'>{alfabeto.map((letra, index) => { 
          if(index < 13){
            return <button onClick={({target}) => verificaLetra(target.innerText.toLowerCase())} className={trocaClasseLetra(letra)} key={index}>{letra.toUpperCase()}</button>
          }
      })}</div>

        <div className='letrasBaixo'>

        {alfabeto.map((letra, index) => { 
          if(index >= 13){
            return <button onClick={({target}) => verificaLetra(target.value)} className={trocaClasseLetra(letra)} key={index}>{letra.toUpperCase()}</button>
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
