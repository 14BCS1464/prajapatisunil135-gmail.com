
const initialState = {
    dataSource:[],
    copySeachData:[]
    
};
const SearchDataSourceReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "seachData":
            return Object.assign({}, state, { dataSource: action.dataSource });
            case "copySeachData":
            return Object.assign({}, state, { copySeachData: action.copySeachData }); 
        default:
            return state;
    }
};
export default SearchDataSourceReducer;
