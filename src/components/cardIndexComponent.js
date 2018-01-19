import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'material-ui/Card';

import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import CardDescriptionComponent from "./CardDescriptionComponent";//cards having data with like/dislike and bookmark actions
import dummyData from './dummyData';//will give dummy data to render on ui

class CardsIndexComponent extends React.Component{
    constructor(props,context){
        super(props);
    }
    render(){
        return(
                <div>
                    {dummyData.map((info,index) => (
                    <Row  key={index}>
                        <Col sm="1"></Col>
                        <Col sm="10">
                            <Card className="cards">          
                                <CardDescriptionComponent detail={info} index={index} />
                            </Card> 
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    ))}
                </div>
        );
    }
}

export default CardsIndexComponent;
