export const searchData = (text: string,tempData:[]) => {

    return function (dispatch: Function, getState: Function) {
        let tempData = getState().SearchDataSourceReducer.dataSource
        let backupData = getState().SearchDataSourceReducer.copySeachData
        let searchText = text.trim().toLowerCase();
        if (!text) {
           
            dispatch({
                type: "seachData",
                dataSource: Array.from(backupData)
            })
        }
        else {
            let data = tempData.filter(l => {
                return l.Name.toLowerCase().match(searchText);
            });

            dispatch({
                type: "seachData",
                dataSource: Array.from(data)
            })
        }

    }
}



export const onCrossClick = (index: number) => {

    return function (dispatch: Function, getState: Function) {
        let tempData = getState().SearchDataSourceReducer.dataSource
       
        tempData.splice(index, 1);
           
            dispatch({
                type: "seachData",
                dataSource: Array.from(tempData)
            })
        }
 

    
}
