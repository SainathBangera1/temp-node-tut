console.log(__dirname);
console.log(__filename);
let i = 0;
const setter = setInterval(()=>{
    if(i<6){
        console.log("Praise the Lord Jesus");
        i++;
    } else if(i==6) {
        clearInterval(setter);
    }
    
},1000)