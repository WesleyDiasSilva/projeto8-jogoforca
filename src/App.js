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
  let [jogoFinalizado, setJogoFinalizado] = React.useState(false);
  let [classFinalizado, setClassFinalizado] = React.useState('palavra');
  let [disableBtn, setDisableBtn] = React.useState(true);
  let [tentativas, setTentativas] = React.useState(0);
  let [acertos, setAcertos] = React.useState([]);
  let [error, setError] = React.useState([]);
  let [valorInput, setValorInput] = React.useState('');

  let contador = 0;

 function alteraInput(target){
  setValorInput(target)
 }

  function mudaPalavra(){
    setBotaoPalavra(true)
    setJogoFinalizado(false);
    setPalavraAtual(palavras[Math.floor((Math.random()*200))]);
    setDisableBtn(false)
    setAcertos([]);
    setError([]);
    setTentativas(0);
    setValorInput('')
  }

  function finalizaJogo(result){
    setJogoFinalizado(true);
    setDisableBtn(true);
    setBotaoPalavra(false);
    if(result){
      setClassFinalizado('palavra finalizadoGanhou')
      return {class: 'ganhouJogo'}
    }else{
      setClassFinalizado('palavra finalizadoPerdeu');
      setTentativas(6)
      return {class: 'perdeuJogo'}
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

  function verificaLetra(target, letra){
    target.disabled = true
    if(palavraAtual.includes('ç')){
      if(letra === 'c'){
        setAcertos([...acertos, 'c'])
        return;
      }
    }

    if(palavraAtual.includes('á')){
      if(letra === 'a'){
        setAcertos([...acertos, 'a'])
        return;
      }
    }

    if(palavraAtual.includes('ã')){
      if(letra === 'a'){
        setAcertos([...acertos, 'a'])
        return;
      }
    }

    if(palavraAtual.includes('é')){
      if(letra === 'e'){
        setAcertos([...acertos, 'e'])
        return;
      }
    }

    if(palavraAtual.includes('ê')){
      if(letra === 'e'){
        setAcertos([...acertos, 'e'])
        return;
      }
    }

    if(palavraAtual.includes('í')){
      if(letra === 'i'){
        setAcertos([...acertos, 'i'])
        return;
      }
    }

    if(palavraAtual.includes('ô')){
      if(letra === 'o'){
        setAcertos([...acertos, 'o'])
        return;
      }
    }

    if(palavraAtual.includes('ó')){
      if(letra === 'o'){
        setAcertos([...acertos, 'o'])
        return;
      }
    }

    if(palavraAtual.includes('ú')){
      if(letra === 'u'){
        setAcertos([...acertos, 'u'])
        return;
      }
    }
   
    if(palavraAtual.includes(letra)){
      setAcertos([...acertos, letra])
    }else{
      setError([...error, letra]);
      if(tentativas > 4){
        finalizaJogo(false)   
       }
      setTentativas(tentativas +1)
    }
  }

  function palavraUsuario(letra){
    if(letra === 'ç'){
      if(acertos.includes('c')){
        contador++
        return 'ç'
    }
  }

  if(letra === 'á'){
    if(acertos.includes('a')){
      contador++
      return 'á'
    }
  }

  if(letra === 'ã'){
    if(acertos.includes('a')){
      contador++
      return 'ã'
    }
  }

  if(letra === 'é'){
    if(acertos.includes('e')){
      contador++
      return 'é'
    }
  }

  if(letra === 'ê'){
    if(acertos.includes('e')){
      contador++
      return 'ê'
    }
  }

  if(letra === 'í'){
    if(acertos.includes('i')){
      contador++
      return 'í'
    }
  }

  if(letra === 'ó'){
    if(acertos.includes('o')){
      contador++
      return 'ó'
    }
  }

  if(letra === 'ô'){
    if(acertos.includes('o')){
      contador++
      return 'ô'
    }
  }

  if(letra === 'ú'){
    if(acertos.includes('u')){
      contador++
      return 'ú'
    }
  }
  if(contador > palavraAtual.length -1){
    finalizaJogo(true)
  }
    if(acertos.includes(letra)){
      contador++
      if(contador > palavraAtual.length -1){
        finalizaJogo(true)
      }
      return letra
    }else{
      return '_ '
    }
  }

  document.addEventListener('keydown', enviaEnter)
  function enviaEnter(e){
    if(e.key === 'Enter'){
      if(valorInput !== ''){
        if(valorInput.toLowerCase() === palavraAtual){
          finalizaJogo(true)
        }else{
          finalizaJogo(false)
        }
      }
    }
  }

  return (
    <div className='app'>
      <div className='parteSuperior'> 
        <img src= {imagens[tentativas]} alt='teste'/>   
          
        <div className='containerPalavra'>
          <button onClick={mudaPalavra} className='btnEscolhePergunta'>Escolher Palavra</button>
          <div>
            {jogoFinalizado ? <span className={classFinalizado}>{palavraAtual}</span> : botaoPalavra ? palavraAtual.split('').map((l, index) => <span key={index} className='palavra'>{palavraUsuario(l)}</span>): ''}
          </div>
        </div>
      </div>

      <div className='letras'>

        <div className='letrasCima'>{alfabeto.map((letra, index) => { 
          if(index < 13){
            return <button disabled={disableBtn} onClick={({target}) => verificaLetra(target, target.innerText.toLowerCase())} className={!disableBtn ?trocaClasseLetra(letra): 'desabilitados'} key={index}>{letra.toUpperCase()}
            </button>
          }
      })}</div>

        <div className='letrasBaixo'>

        {alfabeto.map((letra, index) => { 
          if(index >= 13){
            return <button disabled={disableBtn} onKeyPress={(e) => console.log(e)} onClick={({target}) => verificaLetra(target, target.innerText.toLowerCase())} className={!disableBtn ?trocaClasseLetra(letra): 'desabilitados'} key={index}>{letra.toUpperCase()}</button>
          }
      })}

        </div>
      </div>

      <div className='chute'>
        <label className='jaSei'>Já sei a palavra!</label>
        <input value={valorInput} onChange={(e) => alteraInput(e.target.value)} type='text' disabled={disableBtn}/>
        <button disabled={disableBtn} onClick={() => (valorInput.toLowerCase() === palavraAtual ? finalizaJogo(true) : finalizaJogo(false))} className='btnChutar'>Chutar</button>
      </div>
    </div>
  )
}

export default App
