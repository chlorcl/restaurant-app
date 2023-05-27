import { IconCirclePlus } from "@tabler/icons-react"

type cardProps = {
  img: string
  name: string
  price: number
  discount?: number
}

export default function Card({ name, price, discount, img }: cardProps) {
  return (
    <div style={{background: `url('${img}')`, backgroundSize: 'cover'}} className={`p-4 font-semibold items-center text-white w-60 h-80 rounded-3xl shadow-2xl grid grid-cols-5 grid-rows-6`}>
      <p className='col-span-4 row-start-5 text-xl'>{name}</p>
      <p className={`col-span-2 row-start-6 ${discount ? 'line-through text-sm' : 'text-lg'}`}>{price}zł</p>
      <p className={`col-span-2 col-start-3 row-start-6 text-lg' ${!discount ? 'hidden' : ''}`}>{discount}zł</p>
      <button className='row-start-6 rounded-full aspect-square'><IconCirclePlus size={40} /></button>
    </div>
  );
}
