export const GET_TRAVEL_LIST_REQUEST = "getTravelList/GET_TRAVEL_LIST_REQUEST";
export const GET_TRAVEL_LIST_SUCCESS = "getTravelList/GET_TRAVEL_LIST_SUCCESS";
export const GET_TRAVEL_LIST_FAIL = "getTravelList/GET_TRAVEL_LIST_FAIL";

export function getTravelList(data) {
    return {
        types: [GET_TRAVEL_LIST_REQUEST, GET_TRAVEL_LIST_SUCCESS, GET_TRAVEL_LIST_FAIL],
        promise: client => client.get('/api/user',data)
    }
}