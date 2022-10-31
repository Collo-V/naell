import React, {useState} from 'react';

function Product(props) {
    const [quantity, setQuantity] = useState(1)
    const [unit, setUnit] = useState('Kg')
    const handleInput = (event)=>{
        let value = event.target.value
        if(value === ''){
            setQuantity(null)
            return
        }
        value =  parseInt(value)
        if(!isNaN(value)){
            setQuantity(value)
        }else {
            setQuantity('')
        }
    }
    const changeQuantity = (n) => {
      if(quantity===1 && n===-1) return
        if(quantity ==='' || quantity === null)setQuantity(0)
        let q = quantity+n
        setQuantity(q)
    }
    const handleBlur = ()=>{
        if (quantity===''){
            setQuantity(1)
        }
    }
    return(
        <div className='w-90% md:w-80% 2xl:w-60% mx-auto p-3 pt-16'>
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="h-300px w-400px bg-slate-100 flex items-center">
                    <img src="/veggies/peppers.png" alt="" className='w-90% h-auto mx-auto'/>
                </div>
                <div className="w-full">
                    <h1>Kenyan Strawberries</h1>
                    <div className="mt-3 flex gap-2">
                        <button className="h-8 w-8 border-1px rounded-sm" onClick={()=>{changeQuantity(-1)}}>-</button>
                        <input type="text" className="w-50px max-w-full border-1px rounded-md h-8 p-1 text-center"
                               value={quantity} onChange={handleInput} onBlur={handleBlur}/>
                        <button className="h-8 w-8 border-1px rounded-sm" onClick={()=>{changeQuantity(1)}}>+</button>
                        <select className='w-100px h-8 border-1px rounded-md px-2 focus:outline-none'>
                            <option value="Kg">Kg</option>
                            <option value="Kg">Tons</option>
                        </select>
                    </div>
                    <div className="mt-4 shadow-md h-10"></div>
                </div>
            </div>
            <div className="border-t-1px mt-10">
                <div className="flex flex-col lg:flex-row gap-10 pt-4">
                    <div className="w-full">
                        <h1 className='mb-4'>Product information</h1>
                        <div>
                            <table className='w-90% max-w-300px'>
                                <tr className='mb-4'>
                                    <td className="w-full">lorem </td>
                                    <td className="w-full">ipsum</td>
                                </tr>
                                <tr className='mb-4'>
                                    <td className="w-full">lorem </td>
                                    <td className="w-full">ipsum</td>
                                </tr>
                                <tr className='mb-4'>
                                    <td className="w-full">lorem </td>
                                    <td className="w-full">ipsum</td>
                                </tr>
                                <tr className='mb-4'>
                                    <td className="w-full">lorem </td>
                                    <td className="w-full">ipsum</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="w-full">
                        <h1>Products description</h1>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Cum doloremque illum maiores sapiente soluta voluptas voluptatibus!
                            Alias assumenda autem corporis dolor eligendi esse, eum nobis
                            non odit porro quisquam reprehenderit?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
;
}

export default Product;
