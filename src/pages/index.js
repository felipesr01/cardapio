import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Banner } from '@/components/Banner'
import { Categorias } from '@/components/Categorias'
import { useState } from 'react'
import Card from '@/components/Cards'
import { produtos } from "../data/data-produtos"
import CampoDeBusca from '@/components/CampoDeBusca'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [listaPratos, setListaPratos] = useState(produtos)
  const [textoBusca, setTextoBusca] = useState("")

  const handleFiltrarPratosCategoria = (categoria) => {
    setListaPratos(
      produtos.filter((prato) => prato.categoria === categoria)
    );
    setTextoBusca("");
  }

  const handleBuscarPrato = (textoDigitado) => {
    setTextoBusca(textoDigitado)
    setListaPratos(
      produtos.filter(
        (prato) =>
          prato.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
          prato.categoria.toLowerCase().includes(textoDigitado.toLowerCase()) ||
          prato.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
      )
    )
  }

  return (
    <>
      <Head>
        <title>Cardapio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap" rel="stylesheet"/>
      </Head>
      <Banner />
      <Categorias 
        onFiltrarPratosCategorias={handleFiltrarPratosCategoria}
        />
      <CampoDeBusca filtrarPratosTexto={handleBuscarPrato} />
      <h2 className={styles.subtitulo}>Cardápio</h2>
      <div className={styles.containerCards}>
        {listaPratos.map((prato) => (
          <Card
            imagem={prato.imagem}
            nome={prato.nome}
            categoria={prato.categoria}
            descricao={prato.descricao}
            preco={prato.preco}
          />
        ))}
      </div>
    </>
  )
}
