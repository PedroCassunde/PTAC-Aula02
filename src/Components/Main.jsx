import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [listaContatos, setListaContatos] = useState([]);

    const registrar = (event) =>{
        event.preventDefault();
        alert("Deu certo!");
        setListaContatos([...listaContatos,
        {
            nomeSalvo: nome,
            telefoneSalvo: telefone,
        }]);
    }
console.table(listaContatos)
    return(
        <main>
            <form onSubmit={registrar}>
                <label htmlForm="Nome">
                    Nome de Contato
                </label>
            <input
            type="text"
            name=""
            id="nome"
            value={nome}
            onChange={
                (event) => setNome(event.target.value)
            }/>
            <label htmlFor="telefone">
                Número de Contato
            </label>
            <input
            type="tel"
            id="telefone"
            onChange={(event)=> setTelefone(event.target.value)}/>
            <button>Salvar</button>
            </form>
            <div>
            { listaContatos.map((contato, index)=>
            <p key={index}>{contato.nomeSalvo}</p>)}
            {nome}
            {telefone}
            </div>
            </main>
    );
}