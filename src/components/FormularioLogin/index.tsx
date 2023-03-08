import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContexts";
import { FormLogin, LoginContainer } from "./styles";

export default function FormularioLogin() {
  const loginInfo = useContext(LoginContext);
  function click() {
    console.log(loginInfo);
  }
  return (
    <>
      <LoginContainer>

        <FormLogin>

          <div className="headerLogin">
            <span>Faça seu login!</span>
          </div>

          <form action="">

            <div className="inputForm">
              <label className="email" htmlFor="email">E-mail:</label>              
              <input
                className="emailInput"
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu melhor e-mail"
              />              
            </div>

            <div className="inputForm">
              <label className="senha" htmlFor="password">Senha:</label>
              <input className="senhaInput"
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
              />
            </div>
            
            <button className="button">Entrar</button>

          </form>
        </FormLogin>
      </LoginContainer>
      
    </>
  );
}
