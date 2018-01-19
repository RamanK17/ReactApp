import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import {connect} from 'react-redux';
import {likeAction,dislikeAction,bookmarkAction,readMoreAction} from "./../action/clickActions";

class CardsIndexComponent extends React.Component{
    constructor(props,context){
        super(props);
    }
    readMore(index){
        this.props.readMoreAction(index);
        this.context.router.history.push("/details");
    }
    render(){
        return(
                <div>
                    {this.props.dummyData.map((info,index) => (
                    <Row  key={index}>
                        <Col sm="1"></Col>
                        <Col sm="10">
                            <Card className="cards">          
                               <Row>
                                    <Col md="4">
                                        <CardMedia><img src={info.img} alt="" className="cardsImg"/></CardMedia>
                                    </Col>
                                    <Col md="8">
                                        <CardHeader title={info.title} titleStyle={{"fontWeight":"bold","fontSize":"22px","lineHeight":"27px"}}/>
                                        <CardText style={{fontWeight:"300",fontSize:"16px",lineHeight:"22px"}}>
                                            {info.description.substring(0,256)+".... "}
                                            <a style={{cursor:"pointer"}}><span onClick={()=>this.readMore(index)}>read more</span></a>
                                        </CardText>
                                        <CardActions style={{padding:"5px"}} className="mui--text-left">
                                            <IconButton iconStyle={{color:this.props.likeIndex===index?"cyan":"black"}} onClick={()=>this.props.likeAction(index)}><FontIcon className="material-icons" >thumb_up</FontIcon></IconButton>
                                            <IconButton iconStyle={{color:this.props.dislikeIndex===index?"green":"black"}} onClick={()=>this.props.dislikeAction(index)}><FontIcon className="material-icons" >thumb_down</FontIcon></IconButton>
                                            <IconButton iconStyle={{color:this.props.bookmarkIndex===index?"yellow":"black"}} onClick={()=>this.props.bookmarkAction(index)}><FontIcon className="material-icons">bookmark</FontIcon></IconButton>
                                        </CardActions>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    ))}
                </div>
        );
    }
}

CardsIndexComponent.contextTypes = {
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
export default connect(mapStateToProps,{likeAction,dislikeAction,bookmarkAction,readMoreAction})(CardsIndexComponent);

