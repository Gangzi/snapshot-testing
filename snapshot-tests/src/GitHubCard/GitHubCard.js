import React from "react"
import Card from "react-bootstrap/Card"
import Mole from './mole.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={Mole} />
        
        <Card.Body>
            <Card.Title>Mole</Card.Title>
            <Card.Text>
            I am a cartoon character.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard