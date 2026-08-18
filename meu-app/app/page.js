export default function Home() {
  const Botao = ({ texto }) => <button> {texto} </button>

  const BotaoGrande = ({ texto }) => {
  return <button className="btn btn-lg">{texto}</button>;


  };

  return (
    <div>
      <button texto="Botao"/>

      <BotaoGrande texto="Botao Grande" ligado={false}/>
    </div>
  )
}