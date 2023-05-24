import React ,{useState,useEffect} from 'react'
import apiMethod from '../api/apiMethod';

const Category=()=> {
const [cat, setCat] = useState('');

useEffect(() => {
  const getDataCat = async () => {
    const result = await apiMethod.categoryProd();
    setCat(result.data[0]);
  };
  getDataCat();
}, []);

  return (
    <div>

    <div className="p-10 w-full text-center grid lg:grid-cols-3 gap-5 mt-10 ">
    {
      (cat || []).map((data)=>
      <div className="  rounded-b-lg hover:scale-110 transition-all duration-500 cursor-pointer">
       <img
            src= {`{../../svg/${data.image}`}
            className="p-1"
            alt="picture"
          />
        <div className="text-md text-center font-semibold">
          <p>{data.name}</p>
        </div>      
        </div>
      )
    }
  </div>
</div>
  )
}

export default Category
