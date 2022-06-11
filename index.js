// Code your solution here
const drivers = ['Noran', 'Yvonne', 'Dee', 'Azinu', 'Sifu', 'Noran'];
function findMatching(array, name){
    return array.filter((match) => match.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = (array, names)=>{
    let newArray = [];
    for(const name of array){
        if(name.slice(0,1)===names.slice(0,1)){
            newArray.push(name);
        }
    }
    return newArray;
}

const matchName = (array,structure)=>{
    const newDataArray = [];
    for(const dataStructure of array){
        if(dataStructure.name.toLowerCase()===structure.toLowerCase()||
        dataStructure.hometown.toLowerCase()===structure.toLowerCase()){
            newDataArray.push(dataStructure);
        }
    }
    return newDataArray;
}