import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import {connect} from 'react-redux';
import {likeAction,dislikeAction,bookmarkAction} from "./../action/clickActions";

class CardDetailComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const data=this.props.dummyData[this.props.readMoreIndex];
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
                                        <Row>
                                            <Col md="4" className="mui--text-left">
                                                <IconButton iconStyle={{color:this.props.likeIndex===this.props.readMoreIndex?"cyan":"black"}} onClick={()=>this.props.likeAction(this.props.readMoreIndex)}><FontIcon className="material-icons" >thumb_up</FontIcon></IconButton>
                                                <IconButton iconStyle={{color:this.props.dislikeIndex===this.props.readMoreIndex?"green":"black"}} onClick={()=>this.props.dislikeAction(this.props.readMoreIndex)}><FontIcon className="material-icons" >thumb_down</FontIcon></IconButton>
                                                <IconButton iconStyle={{color:this.props.bookmarkIndex===this.props.readMoreIndex?"yellow":"black"}} onClick={()=>this.props.bookmarkAction(this.props.readMoreIndex)}><FontIcon className="material-icons">bookmark</FontIcon></IconButton>
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
                            <Row>
                                <div className="mui--text-right">
                                    <span style={{padding:"18px",display:"inline-flex",cursor:"pointer"}}  onClick={()=>this.context.router.history.push("/")} ><i  style={{color:"#2196F3"}} className="material-icons">arrow_back</i><a>GoBack</a></span>
                                    </div>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

CardDetailComponent.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    return {
        dummyData:state.dataObj,
        likeIndex:state.likeBookmarkManager.likeIndex,
        dislikeIndex:state.likeBookmarkManager.dislikeIndex,
        bookmarkIndex:state.likeBookmarkManager.bookmarkIndex,
        readMoreIndex:state.likeBookmarkManager.readMoreIndex
    };
}
export default connect(mapStateToProps, {likeAction,dislikeAction,bookmarkAction})(CardDetailComponent);
