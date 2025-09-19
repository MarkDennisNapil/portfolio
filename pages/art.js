import Head from "next/head"
import Planets from "../components/planets"
import Navigation from "../components/navigation"
import styles from "../styles/Art.module.css"

const data = [
  {
    title: "Neon Tetras Art",
    image: "neon_tetras.jpg",
    url: ""
  },
  {
    title: "Betta Fish Art",
    image: "bettafishart.jpg",
    url: ""
  },
  {
    title: "Anime Art",
    image: "anime_art.jpg",
    url: ""
  },
  {
    title: "Tiamat Art",
    image: "tiamatart.jpg",
    url: ""
  },
  {
    title: "Ape Woman Art",
    image: "apewomanart.jpg",
    url: ""
  },
  {
    title: "Swallow Tail Butterfly Art",
    image: "swallowtailbutterfly_art.jpg",
    url: ""
  },
  {
    title: "Toucan Art",
    image: "toucan_art.jpg",
    url: ""
  },
  {
    title: "Sushi Art",
    image: "sushi.jpg",
    url: ""
  },
  {
    title: "Ornamental Taro Art",
    image: "taro_digitalart.jpg",
    url: ""
  }
]
const Arts = () => {
  return(
    <div className={styles.container}>
    <Planets />
      <Head className={styles.Head}>
        <title>Artworks of Mark Dennis Napil</title>
        <link rel="icon" href="/me.png" className={styles.headimage} />
      </Head>
      <Navigation active={"art"} color={`rgba(0, 255, 165, 1)`} />
      <div className={styles.artContainer}>
        {
          data.map((art, i) => {
            return(
              <img src={`/${art.image}`} className={styles.artImage} onClick={`/${art.url}`} key={>
            )
          })
        }
      </div>
    </div>
  )
}