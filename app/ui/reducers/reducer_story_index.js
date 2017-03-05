import {FETCH_STORIES} from '../actions/index'

const INITIAL_STATE = {
    stories: [
        {
            img: '',
            title: 'Breakfast',
            author: 'jill111',
        },
        {
            img: '',
            title: 'Tasty burger',
            author: 'pashminu',
        },
        {
            img: '',
            title: 'Camera',
            author: 'Danson67',
        },
        {
            img: '',
            title: 'Morning',
            author: 'fancycrave1',
        },
        {
            img: '',
            title: 'Hats',
            author: 'Hans',
        },
        {
            img: '',
            title: 'Honey',
            author: 'fancycravel',
        },
        {
            img: '',
            title: 'Vegetables',
            author: 'jill111',
        },
        {
            img: '',
            title: 'Water plant',
            author: 'BkrmadtyaKarki',
        },
    ]
}

export default function(state=INITIAL_STATE, action={}){
    const actionLookup = {
        FETCH_STORIES: () => ({...state, stories: action.payload.data.stories}),
        DEFAULT: () => state
    }

    const fn = actionLookup[action.type] || actionLookup.DEFAULT

    return fn()
}
