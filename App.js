
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserForm from './UserForm'
import UserTable from './UserTable'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import "./LabStyle.css"


function App() {
  return(
    <>
    <Container class>
      <Row>
        <Col><UserForm /></Col>
        <Col class="TableCom"><UserTable /></Col>
      </Row>
      <Row>
        <br></br>
      </Row>
      <Row>
        <a href="https://scu.org.ua/pravyla-gry-v-shahy/" target="_blank">Game rules</a>
      </Row>
      <Row>
      <a href="https://www.chess.com/puzzles/problem/35465" target="_blank">This puzzle</a>
      </Row>
    </Container>

    </>
  )
}

export default App;
