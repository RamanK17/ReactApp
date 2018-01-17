import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Card from 'material-ui/Card';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


class CardsIndexComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container fluid={true}>
                <div>
                    {this.props.data.map((info,index) => (
                    <Row  key={index}>
                        <Col sm="1"></Col>
                        <Col sm="10">
                            <Card className="cards">
                                
                            </Card>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    ))}
                </div>
            </Container>
        );
    }
}
export default CardsIndexComponent;
