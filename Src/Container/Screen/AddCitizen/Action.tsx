export const pushInfo = (storenformation: object) => {

    return function (dispatch: Function, getState: Function) {
        let tempData = getState().SearchDataSourceReducer.dataSource;

        tempData.push(storenformation)
        dispatch({
            type: "seachData",
            dataSource: Array.from(tempData)
        })
        dispatch({
            type: "copySeachData",
            copySeachData: Array.from(tempData)
        })
    }
}

