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
          likecounter:1,
          bookmarkCounter:1,
          likeFlag:false,
          bookmarkFlag:false
        };
        
        this.likeClick=this.likeClick.bind(this);
        this.bookmark=this.bookmark.bind(this);
    }
    
    
    likeClick(){ //function for likeDislike click action in particular card
        this.setState({likecounter:this.state.likecounter+1});
        if(((this.state.likecounter+1) % 2) == 0) //condition executes on each click of like icon
        {
            this.setState({likeFlag:true}); //if no.of clicks is even,flag will be true
        }
        else 
        {
            this.setState({likeFlag:false}); //if no. of clicks is odd,flag will be false
        }
    }
    bookmark(){ //function for bookmark click action in particular card
        this.setState({bookmarkCounter:this.state.bookmarkCounter+1});
        if(((this.state.bookmarkCounter+1) % 2) == 0)//condition executes on each click of like icon
        {
            this.setState({bookmarkFlag:true}); //if no.of clicks is even,flag will be true
        }
        else
        {
            this.setState({bookmarkFlag:false}); //if no. of clicks is odd,flag will be false
        }
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
                                    <CardActions>
                                        <Row>
                                            <Col md="4" className="mui--text-left">
                                                <IconButton onClick={()=>this.likeClick()}>{this.state.likeFlag?<FontIcon className="material-icons" >thumb_up</FontIcon>:<FontIcon className="material-icons" >thumb_down</FontIcon>}</IconButton>
                                                <IconButton onClick={()=>this.bookmark()} iconStyle={{color:this.state.bookmarkFlag?"yellow":"black"}}><FontIcon className="material-icons">bookmark</FontIcon></IconButton>
                                            </Col>
                                            <Col md="8" className="mui--text-right">
                                                <TextField 
                                                    hintText="Share your experience if you have ever visited this place !!"
                                                    style={{display:"block",width:"none"}}
                                                />
                                            </Col>
                                        </Row>
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
