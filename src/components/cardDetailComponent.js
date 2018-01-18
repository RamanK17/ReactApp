import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import dummyData from './dummyData';

class CardDetailComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
          likeFlag:false,
          bookmarkFlag:false
        };
        
        this.likeClick=this.likeClick.bind(this);
        this.bookmark=this.bookmark.bind(this);
    }

    likeClick(){ //function for likeDislike click action in particular card
         this.setState({likeFlag:!this.state.likeFlag}); 
    }
    bookmark(){ //function for bookmark click action in particular card
        this.setState({bookmarkFlag:!this.state.bookmarkFlag}); 
    }

    render(){
        const indexValue=this.props.match.params.details; //index coming from route 
        const data=dummyData[indexValue];
        return(
            <div>
                <Row>
                    <Col>
                        <Card className="cardDetail"> 
                            <Row>
                                <Col md="4">
                                    <CardMedia><img src={data.img} alt="" className="cardDetailImg"/></CardMedia>
                                </Col>
                                <Col md="8">
                                    <CardHeader title={data.title} titleStyle={{"fontWeight":"bold","fontSize":"22px","lineHeight":"27px"}}/>
                                    <CardText style={{fontWeight:"300",fontSize:"16px",lineHeight:"22px"}}>
                                        {data.description}
                                    </CardText>
                                    <CardActions style={{padding:"5px",marginLeft:"9px"}} >
                                        <TextField
                                            hintText="Share your experience if you have ever visited this place !!"
                                            style={{display:"block",width:"none"}}
                                        />
                                   </CardActions>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CardDetailComponent;
