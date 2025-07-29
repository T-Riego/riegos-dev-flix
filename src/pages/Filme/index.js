import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Importando o toast para exibir mensagens de alerta
import api from '../../services/api';
import './filme-info.css'; // Importando o CSS para estilização

function Filme(){
const { id } = useParams(); // Obtém o ID do filme da URL o ID foi definido no routes.js
const navigate = useNavigate(); // Usado para navegar entre as páginas

const[filme, setFilme] = useState({}); // Cria um estado para armazenar os dados do filme
const[loading, setLoading] = useState(true); // Cria um estado para controlar o carregamento dos dados

useEffect(() => {
async function loadFilme() {
  await api.get(`/movie/${id}`, {
    params: {
      api_key: 'fc880fc9d83d54f4b9123c6dd3ec7ee6',
      language: "pt-BR",
    }
  })
  .then((response) => {
    setFilme(response.data); // Armazena os dados do filme no estado
    setLoading(false); // Define o estado de carregamento como falso
  })
  .catch(() => { // Se ocorrer um erro ao carregar os dados do filme
    navigate('/', { replace: true }); // Redireciona para a página inicial se ocorrer um erro
    return;
  })
}
loadFilme();
// O useEffect é usado para carregar os dados do filme quando o componente é montado.

return () => {
    console.log("Componente desmontado");
  };

},[navigate, id]);// O useEffect depende do navigate e do id, para que ele seja executado novamente se esses valores mudarem.


function salvarFilme() {
const minhaLista = localStorage.getItem('@primeflix'); // Obtém a lista de filmes salvos do localStorage
let filmesSalvos = JSON.parse(minhaLista) || []; // Converte a lista de filmes salvos de JSON para um array, ou cria um array vazio se não houver filmes salvos
const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id); // está verificando se o filme já está salvo no noosso localhost O ´some´ Verifica se o filme já está na lista de filmes salvos
if (hasFilme) {
  toast.warn("Esse filme já está na sua lista!"); // Se o filme já estiver salvo
  return;
}

filmesSalvos.push(filme); // Adiciona o filme à lista de filmes salvos
localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos)); // Salva a lista de filmes no localStorage, transformando o array de filmes salvos em uma string JSON
toast.success('Filme salvo com sucesso!'); // Exibe uma mensagem de sucesso usando o toast
}

if  (loading) {
  return(
    <div className="filme-info">
      <h1>Carregando...</h1>
    </div>
  )
}

  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="blank" rel="noopener noreferrer">
            Trailer
            </a>
            </button> 
    </div>
    </div>
  )
}

export default Filme;