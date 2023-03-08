import Footer from "../../components/Footer";
import Produtos from "../../components/Produtos"
import Header from "../../components/Header";
import ImgAlmofada1 from "../../assets/images/almofadaVideoGame.png"
import ImgAlmofada2 from "../../assets/images/almofadaGamer.png"
import ImgAlmofada3 from "../../assets/images/almofadaMestresTheMasters.png"
import ImgCaneca1 from "../../assets/images/canecaCavernaDragão.png";
import ImgCaneca2 from "../../assets/images/canecaCoringa.png";
import ImgCaneca3 from "../../assets/images/canecaStarWars2.png";
import ImgFunko1 from "../../assets/images/funkoJackSkellington.png";
import ImgFunko2 from "../../assets/images/funkoGodOfWar.png";
import ImgFunko3 from "../../assets/images/funkoLara.png";
import ImgFunko4 from "../../assets/images/funkoRobocop.png";
import ImgFunko5 from "../../assets/images/funkoTheWitcher3Geralt.png";
import { ListaProdutosContainer } from "./styles";

export default function ListaProdutos() {
  return (
    <>
     
        <Header />
        <ListaProdutosContainer>
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgAlmofada1} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgAlmofada2} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgAlmofada3} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgCaneca1} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgCaneca2} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgCaneca3} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgFunko1} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgFunko2} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgFunko3} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgFunko4} />
        <Produtos titulo="Almofada" descricao="11,99" imagem={ImgFunko5} />
        </ListaProdutosContainer>
        <Footer />
      
    </>
  );
}