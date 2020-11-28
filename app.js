function MyCustomeIterator(lists){
    let countIndex = 0;

    return {
        nextVal : ()=>{
            if(countIndex < lists.length){
                console.log(countIndex)
             return   { 
                   value : lists[countIndex++] , 
                 hasDone : false
                };
                
            }else{
              return{  hasDone: true}
            }
        }
    }
}




const lis = ['ashii','vajdbj','sbhajbhdhk']
const res = MyCustomeIterator(lis)
console.log(res.nextVal().value)
console.log(res.nextVal().value)


// Generators (Might be useful as a counter !! )


function* createIDs(){
    let id = 0;
    while(true){
       yield id++;
    }
}


const generateIds = createIDs();
console.log(generateIds.next().value)
console.log(generateIds.next().value)
console.log(generateIds.next().value)
console.log(generateIds.next().value)
console.log(generateIds.next().value)
console.log(generateIds.next().value)

