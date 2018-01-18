import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class CardDescriptionComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
          likeFlag:false,
          bookmarkFlag:false
        };

        this.likeClick=this.likeClick.bind(this);
        this.bookmark=this.bookmark.bind(this);
  }

  likeClick(index){ //function for likeDislike click action in particular card
    this.setState({likeFlag:!this.state.likeFlag}); 
  }
  bookmark(index){ //function for bookmark click action in particular card
    this.setState({bookmarkFlag:!this.state.bookmarkFlag}); 
  }
  
    render(){
        const indexValue=this.props.index; //index in props has been taken to perform an action on a particular clicked card's button

        return(
            <div>
                <Row>
                    <Col md="4">
                        <CardMedia><img src={this.props.detail.img} alt="" className="cardsImg"/></CardMedia>
                    </Col>
                    <Col md="8">
                        <CardHeader title={this.props.detail.title} titleStyle={{"fontWeight":"bold","fontSize":"22px","lineHeight":"27px"}}/>
                        <CardText style={{fontWeight:"300",fontSize:"16px",lineHeight:"22px"}}>
                            {this.props.detail.description.substring(0,256)+".... "}
                            <a style={{cursor:"pointer"}}><span onClick={()=>{this.context.router.history.push("/"+indexValue+"/"+this.props.detail.title)}}>read more</span></a>
                        </CardText>
                        <CardActions style={{padding:"5px"}} className="mui--text-left">
                            <IconButton iconStyle={{color:"cyan"}}onClick={()=>this.likeClick(indexValue)}>{this.state.likeFlag?<FontIcon className="material-icons" >thumb_up</FontIcon>:<FontIcon className="material-icons" >thumb_down</FontIcon>}</IconButton>
                            <IconButton onClick={()=>this.bookmark(indexValue)} iconStyle={{color:this.state.bookmarkFlag?"yellow":"black"}}><FontIcon className="material-icons">bookmark</FontIcon></IconButton>
                        </CardActions>
                    </Col>
                </Row>
            </div>
        );
    }
}

CardDescriptionComponent.contextTypes = {
    router: PropTypes.object
};


export default CardDescriptionComponent;