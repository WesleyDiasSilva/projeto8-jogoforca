import React from 'react'
import imagem0 from './assets/forca0.png'
import imagem1 from './assets/forca1.png'
import imagem2 from './assets/forca2.png'
import imagem3 from './assets/forca3.png'
import imagem4 from './assets/forca4.png'
import imagem5 from './assets/forca5.png'
import imagem6 from './assets/forca6.png'
import palavras from './Palavras'
import styled from 'styled-components'

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
      setTentativas(0)
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
    if(palavraAtual.includes('??')){
      if(letra === 'c'){
        setAcertos([...acertos, 'c'])
        return;
      }
    }

    if(palavraAtual.includes('??')){
      if(letra === 'a'){
        setAcertos([...acertos, 'a'])
        return;
      }
    }

    if(palavraAtual.includes('??')){
      if(letra === 'a'){
        setAcertos([...acertos, 'a'])
        return;
      }
    }

    if(palavraAtual.includes('??')){
      if(letra === 'e'){
        setAcertos([...acertos, 'e'])
        return;
      }
    }

    if(palavraAtual.includes('??')){
      if(letra === 'e'){
        setAcertos([...acertos, 'e'])
        return;
      }
    }

    if(palavraAtual.includes('??')){
      if(letra === 'i'){
        setAcertos([...acertos, 'i'])
        return;
      }
    }

    if(palavraAtual.includes('??')){
      if(letra === 'o'){
        setAcertos([...acertos, 'o'])
        return;
      }
    }

    if(palavraAtual.includes('??')){
      if(letra === 'o'){
        setAcertos([...acertos, 'o'])
        return;
      }
    }

    if(palavraAtual.includes('??')){
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
    if(letra === '??'){
      if(acertos.includes('c')){
        contador++
        return '??'
    }
  }

  if(letra === '??'){
    if(acertos.includes('a')){
      contador++
      return '??'
    }
  }

  if(letra === '??'){
    if(acertos.includes('a')){
      contador++
      return '??'
    }
  }

  if(letra === '??'){
    if(acertos.includes('e')){
      contador++
      return '??'
    }
  }

  if(letra === '??'){
    if(acertos.includes('e')){
      contador++
      return '??'
    }
  }

  if(letra === '??'){
    if(acertos.includes('i')){
      contador++
      return '??'
    }
  }

  if(letra === '??'){
    if(acertos.includes('o')){
      contador++
      return '??'
    }
  }

  if(letra === '??'){
    if(acertos.includes('o')){
      contador++
      return '??'
    }
  }

  if(letra === '??'){
    if(acertos.includes('u')){
      contador++
      return '??'
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
          <ButtonEscolhePalavra onClick={mudaPalavra}>Escolher Palavra</ButtonEscolhePalavra>
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
            return (
            <button disabled={disableBtn} onClick={({target}) => verificaLetra(target, target.innerText.toLowerCase())} className={!disableBtn ? trocaClasseLetra(letra): 'desabilitados'} key={index}>{letra.toUpperCase()}
            </button>
            )
          }
      })}

        </div>
      </div>

      <div>
        <LabelInput className='jaSei'>J?? sei a palavra!</LabelInput>

        <Input value={valorInput} onChange={(e) => alteraInput(e.target.value)} type='text' disabled={disableBtn}></Input>

        <ButtonChute disabled={disableBtn} onClick={() => (valorInput.toLowerCase() === palavraAtual ? finalizaJogo(true) : finalizaJogo(false))}>Chutar</ButtonChute>
      </div>
    </div>
  )
}

export default App

const Input = styled.input`
  margin-right: 30px;
  height: 25px;
  width: 250px;
`

const ButtonChute = styled.button`
  width: 80px;
  height: 40px;
  background-color: rgb(215, 226, 255);
  border: solid 1px rgb(144, 166, 229);
  border-radius: 8px;
  color: rgb(87, 113, 186);
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  &:hover{
    background-color: rgb(237, 242, 255);
    transition: .5s;
  }
`

const LabelInput = styled.label`
  font-family: Roboto;
  padding: 10px;
  font-weight: 500;
  font-size: 18px;
`

const ButtonEscolhePalavra = styled.button`
   width: 200px;
  height:50px;
  background-color: rgb(25, 165, 25);
  color: white;
  font-family: roboto;
  font-weight: 500;
  font-size: 18px;
  border: none;
  margin-top: 25px;
  border-radius: 10px;
  &:hover{
    background-color: rgb(44, 189, 44);
    transition: .5s;
    cursor: pointer;
  }
`