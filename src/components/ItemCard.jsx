
const ItemCard =({image,title,text})=>{

    return(
        <>
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300
        bg-zinc-900 hover:shadow-orange-600 hover:shadow-xl  shadow-orange-600 shadow-md'>
            <img src={image} alt="" />
            <div className='text-center p-4'>
                <h3 className='text-orange-600 text-xl font-semibold mb-5'>{title}</h3>
                <p className='text-white text-base'>{text}</p>
            </div>
        </div>
        </>
    )
}

export default ItemCard;