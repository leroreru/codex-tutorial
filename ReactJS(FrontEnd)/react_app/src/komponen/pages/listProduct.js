import React, { useState } from 'react'

function ListProduct(props) {
    const ProductList=[
        {id:1,nama:"Laptop",harga:2000,jumlah:2,like:0},
        {id:2,nama:"Mouse",harga:2000,jumlah:3,like:0},
        {id:3,nama:"Lemari",harga:4000,jumlah:1,like:0},
        {id:4,nama:"Sepeda",harga:5000,jumlah:6,like:0},
        {id:5,nama:"Kemejap",harga:6000,jumlah:5,like:0},
    ]

    const [product,setProduct] = useState(ProductList)

    const tambah=(id)=>{
        setProduct([
            ...product.map((p)=>{
                if(p.id===id){
                    p.jumlah=p.jumlah+1

                    return p
                }
                return p
            })
        ])
    }
    
    const kurang=(id)=>{
        setProduct([
            ...product.map((p)=>{
                if(p.id===id){
                    p.jumlah=p.jumlah-1
                    if(p.jumlah <= 0){
                        p.jumlah = 0
                    }
                    return p
                }
                return p
            })
        ])
    }

    const like=(id)=>{
        setProduct([
            ...product.map((p)=>{
                if(p.id===id){
                    p.like=p.like+1
                    return p
                }
                return p
            })
        ])
    }
    
   return(
    <div>

    <h4> DAFTAR PRODUCT</h4>
      
    <ul>
    {product.map(p=>{
        return(
            <div>
                <tr>
                <td> Nama : {p.nama} </td>
                <td> Harga : {p.harga} </td>
                <td> Jumlah : {p.jumlah} </td>
                <td> Like : {p.like} </td>
                <button onClick={()=>tambah(p.id)}>+</button>
                <button onClick={()=>kurang(p.id)}>-</button>
                <button onClick={()=>like(p.id)}>LIKE</button>
                </tr>
            </div>
        )
    })
}
    </ul>
</div>
   )
    }


export default ListProduct
