import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormC from "../../components/FormC";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CadastroContainer } from "./styles";

function CadastroPage() {
  return (
    <>
      <Header />
      <CadastroContainer>
        
        <div>
        <br/>
          <Link id="voltar" to="/admin">
            <Button id="botao1" variant="outline-dark">
              Voltar
            </Button>
          </Link>
        </div>
        
        <div className="main">
         
          <h2>Cadastro de Produto</h2>
          <FormC />
        </div>
      </CadastroContainer>
      <Footer />
    </>
  );
}

export default CadastroPage;
