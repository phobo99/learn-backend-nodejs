import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctors: [],
    allScheduleTime: [],

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
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_FAILED:
            state.users = []
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_FAILED:
            state.topDoctors = []
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
            state.allDoctors = action.dataDr;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DOCTORS_FAILED:
            state.allDoctors = []
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_ALLCODE_SCHEDULE_TIME_SUCCESS:
            state.allScheduleTime = action.dataTime;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_ALLCODE_SCHEDULE_TIME_FAILED:
            state.allScheduleTime = []
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;