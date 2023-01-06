import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'
import { GlobalStyle } from './GlobalStyle'
import { Router } from './routes/Router'
import { BASE_URL } from './constants/BASE_URL'


function App() {

  const [pokemons, setPokemons] = useState([]) // Variável para armazenar pokémons
  const [pokedex, setPokedex] = useState([]) // Variável para armazenar pokémons na pokédex
  const [isLoading, setIsLoading] = useState(false) // Variável para armazenar status do carregamento da página
  const [pokemonDetail, setPokemonDetail] = useState([]) // Variável para armazenar detalhes do pokémon
  const [modalShow, setModalShow] = useState(false) // Variável para exibição do modal
  const [action, setAction] = useState("") // Variável para verificar a ação executada sobre o pokemon para ser exibido o modal

  useEffect(() => {
    browserPokemon()
  }, [])

  const browserPokemon = async () => {
    let i = 1
    setIsLoading(true)
    const pokemonAux = [...new Set(pokemons)] // Serve de apoio e elimina a duplicidade de cadastro pelo Set

    if (pokemons.length > 0) {
      return
    } else {

      while (i <= 20) {
        try {
          const response = await axios.get(`${BASE_URL}/${i}`)
          pokemonAux.push(response.data)
          setPokemons(pokemonAux)
          setPokemonDetail(pokemonAux)
          console.log(`${response.data.name} adicionado com sucesso à base!`)
        } catch (error) {
          console.log(`ERRO!${error.data.name} não foi possível adicionar à base!`)
          console.log(error)
        }
        i++
      }
      setIsLoading(false)
    }
  }

  // Função para adicionar pokemon na pokelist
  function addPokemonPokedex(pokemonAdd) {
    setModalShow(true)
    setAction("add")
    const pokemonOnList = pokemons.filter((pokemon) => pokemon.id !== pokemonAdd.id)
    const newBrowserPokedex = [...pokedex, pokemonAdd]
    setPokedex(newBrowserPokedex)
    setPokemons(pokemonOnList)
    console.log("Adicionar Pokemon", pokemonOnList)
    console.log("Pokedex", pokedex)
  }

  // Função para remover pokemon da pokedex
  function removePokemonPokedex(pokemonAdd) {
    setModalShow(true)
    setAction("remove")
    const pokemonOnPokedex = pokedex.filter((pokemon) => pokemon.id !== pokemonAdd.id)
    const newBrowserPokeList = [...pokemons, pokemonAdd]
    console.log("newBrowser", newBrowserPokeList)
    setPokedex(pokemonOnPokedex)
    setPokemons(newBrowserPokeList)
  }

  const context = {
    pokemons,
    setPokemons,
    pokemonDetail,
    setPokemonDetail,
    pokedex,
    setPokedex,
    isLoading,
    setIsLoading,
    addPokemonPokedex,
    removePokemonPokedex,
    modalShow,
    setModalShow,
    action,
    setAction
  }

  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={context}>
        <Router />
        {modalShow ? <Modal action={action} /> : ''}
      </GlobalContext.Provider>
    </>
  )
}

export default App
