const FooterItem =({title,list})=>{
    return(<>
        <div className="min-w-min" >
            <h3 className= "text-lg text-orange-600 font-semibold uppercase">{title}</h3>
            <ul className=" text-sm">
                { list.map(({icon,text},index)=>(
                    <li className="flex" key={index} >
                    
                        {icon}
                    
                    
                        {text}
                    
                </li>
                ))}
            </ul>
        </div>
    
    </>)
}

export default FooterItem;