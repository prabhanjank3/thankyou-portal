import React, { Component } from "react";
import TYForm from "../../component/thankyouform";
import { connect } from "react-redux";
import "./homepage.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../component/miraclebox";
const getGridArr = (prevMiracles) => {
  var col = 3;
  var rounds = Math.floor(prevMiracles.length / col);
  console.log(rounds);
  var rowarr = [];
  for (var i = 0; i < rounds; i++) {
    var colarr = [];
    for (var j = 0; j < col; j++) {
      colarr.push(
        <Col>
          <Card item={prevMiracles[i * col + j]} />
        </Col>
      );
    }
    rowarr.push(<Row>{colarr}</Row>);
  }
  console.log(rowarr);
  return rowarr;
};
class ThankYouPortal extends Component {
  render() {
    return (
      <div>
        <Container fluid className="gratitude-homepage-container">
          <Row className="gratitude-quote">
            <Col>
              <div>May the gratitude in my heart KISS all the Universe!</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <TYForm state={this.props} />;
            </Col>
          </Row>
        </Container>
        <Container className="past-miracles-container">
          <Row>
            <Col>
              <p>Past Miracles</p>
              {this.props.prevMiracles.map((item) => {
                return <Card item={item} />;
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.isUserLoggedIn,
    prevMiracles: state.prevMiracles
  };
};
export default connect(mapStateToProps)(ThankYouPortal);
