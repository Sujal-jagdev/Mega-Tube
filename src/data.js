export const API_KEY = 'AIzaSyArtW1MOg2RnD3rmHRd30DtCKOuLTBZDNw';

export const value_convert = (value)=>{
if(value>=1000000){
    return Math.floor(value/1000000)+'M'
}
else if(value>=1000){
    return Math.floor(value/1000)+'K'
}
else{
    return value;
}
}