import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [listaContatos, setListaContatos] = useState([]);
    const [email, setEmail] = useState([]);

    const registrar = () =>{
        alert
    }

    return(
        <main>
            <form>
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
            tel=""
            id="telefone"
            onChange={(event)=> setTelefone(event.target.value)}/>
            <button>Salvar</button>
            </form>
            {nome}
            {telefone}
            </main>
    );
}