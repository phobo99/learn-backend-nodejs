import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state }    // c1
            copyState.isLoadingGender = true
            // console.log('check fire fetch gender start', action)
            return {
                ...copyState
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data // mutate (allow with redux)
            state.isLoadingGender = false // c2
            // console.log('check fire fetch gender success', action)
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAILED:
            // console.log('check fire fetch gender failed', action)
            state.genders = []
            state.isLoadingGender = false
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = []
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = []
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;