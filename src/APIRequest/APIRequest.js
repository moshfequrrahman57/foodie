import axios from "axios";

const BaseURL="https://dummyjson.com/recipes";
let meal_type=[];
export async function getMealCategory(){
    let res=await axios.get(BaseURL);
    if(res.status===200){
      //  console.dir(res.data['recipes']);
        for (const element of res.data['recipes']) {
            //console.log( element['mealType']);
            for (const item of element['mealType']){
              //  console.log(item);
                meal_type.push(item);
            }
        }
       // console.log(meal_type);
        let unique_meal=meal_type.filter((item,index)=>meal_type.indexOf(item)===index);
        //console.log(unique_meal);
        return unique_meal;
    }
    else{
        return []
    }
}


