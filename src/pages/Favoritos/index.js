import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Importando o toast para exibir mensagens de alerta
import './favoritos.css';


function Favoritos() {
const [filmes, setFilmes] = useState([]); // Cria um estado para armazenar os filmes favoritos
useEffect(() =>{

const minhaLista = localStorage.getItem('@primeflix'); // Obtém a lista de filmes salvos do localStorage
setFilmes(JSON.parse(minhaLista)|| []); // Converte a lista de filmes salvos de JSON para um array, ou cria um array vazio se não houver filmes salvos


},[])

function excluirFilme(id) {
  let filtroFilmes = filmes.filter((item) => {
    return (item.id !== id); // Filtra os filmes, removendo o filme com o ID especificado
  });
  setFilmes(filtroFilmes); // Atualiza o estado com a nova lista de filmes
  localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes)); // Salva a nova lista de filmes no localStorage
  toast.success("Filme excluído com sucesso!"); // Exibe uma mensagem de sucesso
}

  return (
    <div className="meus-filmes">
      <h1>Meus Favoritos</h1>
      {filmes.length === 0 ? (
        <p>Você não tem filmes favoritos.</p>
      ) : (
        <ul>
          {filmes.map((item) => {
            return(
            <li key={item.id}>
            <span>{item.title}</span>
            <div>
              <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
              <button onClick={() => excluirFilme(item.id)}> Excluir </button>

            </div>
            </li>
          )})}
        </ul>
      )}
    </div>
  );
}
export default Favoritos;
