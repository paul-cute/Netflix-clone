import { table } from 'console'
import React from 'react'
import { Product } from '@stripe/firestore-stripe-payments/lib/product'

interface Props {
    products: Product[]
}


function Table({products}:Props) {
    console.log(products)
  return (
    <table>
        <tbody className='divide-y divide-[gray]'>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Monthly price</td>
                {products.map((product) => (
                    <td key={product.id} className='tableDataFeature'> 
                    
                        EUR{product.prices[0].unit_amount! / 100}
                    </td>
                ))}
            </tr>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Monthly price</td>
                {products.map((product) => (
                    <td key={product.id} className='tableDataFeature'> 
                    
                        EUR{product.prices[0].unit_amount! / 100}
                    </td>
                ))}
            </tr>
        </tbody>
    </table>
  )
}

export default Table