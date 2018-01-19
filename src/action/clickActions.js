
export const likeAction = (index) => {

    return {
        type: 'LIKE_CLICKED',
        payload:index
    }
};

export const dislikeAction = (index) => {

    return {
        type: 'DISLIKE_CLICKED',
        payload: index
    }
};

export const bookmarkAction = (index) => {

    return {
        type: 'BOOKMARK_CLICKED',
        payload: index
    }
};

export const readMoreAction = (index) => {

    console.log("You clicked on readMoreAction button",index);
    return {
        type: 'READ_MORE_CLICKED',
        payload: index
    }
};