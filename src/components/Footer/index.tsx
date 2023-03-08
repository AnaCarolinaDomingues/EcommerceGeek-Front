import { Container, Navbar } from "react-bootstrap";
import { FooterContainer } from "../Footer/styles";

export default function Footer() {
  return (
    <FooterContainer>
      <Navbar className="p-3">
        <Container className="ml-5"  fluid>
          <Navbar.Brand href="/">
            <h3>GeekStore</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <h5>Densenvolvido por: </h5>
              <a href="https://www.linkedin.com/in/ana-carolina-domingues-313362180">
                Ana Carolina Domingues
              </a>
              <br />
              <a href="https://www.linkedin.com/in/anarieper/">
                Ana Caroline Rieper
              </a>
              <br />
              <a href="https://www.linkedin.com/in/pedro-henrique-silveira-4b02b1251/">
                Pedro Henrique Silveira
              </a>
              <br />
              <a href="https://www.linkedin.com/in/alexandre-lainer-111129247/">
                Alexandre Lainer
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </FooterContainer>
  );
}
