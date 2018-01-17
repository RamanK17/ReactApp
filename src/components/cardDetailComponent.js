import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

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
  likeClick(index){ //function for likeDislike click action in particular card

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
  bookmark(index){ //function for bookmark click action in particular card

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
                            {this.props.detail.description.substring(0,256)+"...."}
                        </CardText>
                        <CardActions style={{padding:"16px"}} className="mui--text-left">
                            <IconButton onClick={()=>this.likeClick(indexValue)}>{this.state.likeFlag?<FontIcon className="material-icons" >thumb_up</FontIcon>:<FontIcon className="material-icons" >thumb_down</FontIcon>}</IconButton>
                            <IconButton onClick={()=>this.bookmark(indexValue)} iconStyle={{color:this.state.bookmarkFlag?"yellow":"black"}}><FontIcon className="material-icons">bookmark</FontIcon></IconButton>
                        </CardActions>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CardDetailComponent;