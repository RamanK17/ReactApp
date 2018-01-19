export default function reducer (state ={
    fetching: false,
    fetched: false,
    error: null,
    likeIndex:null,
    dislikeIndex:null,
    bookmarkIndex:null,
    readMoreIndex:null
}, action)
    {   
        switch (action.type) {
            case 'LIKE_CLICKED':{
                return{...state,
                    fetching: false,
                    fetched: true,
                    likeIndex:action.payload
                }
            }
            case 'DISLIKE_CLICKED':{
                return{...state,
                    fetching: false,
                    fetched: true,
                    dislikeIndex:action.payload
                }
            }
            case 'BOOKMARK_CLICKED':{
                return{...state,
                    fetching: false,
                    fetched: true,
                    bookmarkIndex:action.payload
                }
            }
            case 'READ_MORE_CLICKED':{
                return{...state,
                    fetching: false,
                    fetched: true,
                    readMoreIndex:action.payload
                }
            }
            
        }
        return state;
}