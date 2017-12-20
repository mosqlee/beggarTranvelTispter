import { GET_TRAVEL_LIST_REQUEST, GET_TRAVEL_LIST_SUCCESS, GET_TRAVEL_LIST_FAIL } from 'actions/travelList';

const initState = {
    isLoading: false,
    travelList: {travelList:[]},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_TRAVEL_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                travelList: { travelList: [] },
                errorMsg: ''
            };
        case GET_TRAVEL_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                travelList: action.result.data,
                errorMsg: ''
            };
        case GET_TRAVEL_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
                travelList: { travelList: [] },
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}