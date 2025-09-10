import React from 'react'

const ProductDescription = ({productInfo}) => {
  
  return (
      <div className='flex flex-col gap-3'>
         <h4 className='font-semibold text-[16px] text-slate-800'>Detail</h4>
            {productInfo === 'description' ? (<p className='text-gray-600 text-sm w-full '>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eius ex doloremque eligendi provident accusantium corrupti. Iure, nam quasi modi omnis quae dolores vel molestias, adipisci fugit, quibusdam incidunt ducimus?
                                 Rerum eligendi dicta dolores perferendis fugit quasi quia aliquam sit reprehenderit cum magni beatae libero corporis blanditiis distinctio qui, numquam, quae ipsum exercitationem sed veniam recusandae esse. At, molestiae eos.
                                 Dicta mollitia est sapiente velit ducimus nisi, pariatur quasi odit, minima fuga exercitationem, fugiat minus incidunt quod similique tempore commodi omnis. Neque voluptate temporibus odit doloribus, praesentium exercitationem dicta dolor?

            </p>) :  productInfo === "care guide" ? (<p className='text-gray-600 text-sm w-full'>CareLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus architecto facere quisquam corrupti ratione ab iste sunt repellendus voluptatibus, assumenda non sed esse blanditiis repudiandae molestias cumque tenetur velit?
            Commodi ipsum harum aliquid iusto? Natus eos magnam consequuntur obcaecati sunt! Doloremque, deleniti dolorem. Quaerat quisquam debitis non itaque laboriosam repudiandae. Veniam illo error ipsa vel obcaecati esse ducimus sequi?</p>) : <p className='text-gray-600 text-sm w-full'>
                ColorLorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat, quaerat recusandae fugit blanditiis laboriosam obcaecati. Aliquam eos molestiae optio incidunt perspiciatis, exercitationem quaerat laudantium aut. Itaque doloremque deleniti quis.
                Tenetur error corporis aut quasi, nam minus unde vitae inventore dicta atque natus deleniti repellat minima modi nobis sit asperiores ut! Deleniti enim temporibus dolorum exercitationem sequi tenetur impedit reiciendis!
                Qui dolorem animi excepturi praesentium fuga quia dolorum libero ratione magnam aut commodi velit incidunt veniam ut quod eos quisquam sint autem eligendi in laboriosam, beatae facilis. Placeat, esse quis!
                Corporis, a facere. Magni unde, quo cupiditate non, aliquid, totam voluptatum ipsum aut tempora atque dolor corrupti maxime nihil tenetur mollitia nemo. Voluptatibus rerum quaerat optio, nihil nemo totam incidunt.

            </p> }
          <h5 className='text-[16px] text-slate-800'>Benefit</h5>
          <ul className='list-disc list-inside'>
            <li className='text-sm text-slate-500'>High-quality materials ensure long-lasting durability and comfort</li>
            <li className='text-sm text-slate-500' >Designed to meet the needs of modern, active lifestyles</li>
             <li className='text-sm text-slate-500'>available in a wide range of colors and trendy colors</li>
           </ul>
      </div>
  )
}

export default ProductDescription;







