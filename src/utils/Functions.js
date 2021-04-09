export const checkRequiredFormatForCSV = (data) => {
    if(data[0].KP && data[0].X && data[0].Y && data[0].Z){
        return true;
    }else{
        return false;
    }
}