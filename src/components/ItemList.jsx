import ItemCard from "./ItemCard";
import studyImage from '../assets/images/quality-study.webp';
import singerImage from '../assets/images/singer.webp';
import cdImage from '../assets/images/cd.webp';

const ItemList=()=>{

    const items = [
        {

            image: studyImage,
            title: 'SONIDO INIGUALABLE',
            text:"Sumérgete en un mundo de calidad de sonido premium que transformará tu experiencia auditiva."
        },
        {

            image: cdImage,
            title: 'BIBLIOTECA INFINITA',
            text:"Descubre tus canciones favoritas, álbumes clásicos y artistas emergentes en un solo lugar."

        },
        {
            image: singerImage,
            title: 'ULTIMAS NOVEDADES',
            text:"Descubre las canciones y artistas más recientes que están marcando tendencia en la industria de la música."

        }

    ];



    return(<>
        <div className="bg-gradient-to-b from-black to-gray-800
            ">
            <div className="grid px-10 lg:px-0 grid-cols-1 lg:grid-cols-3 gap-20 max-w-screen-lg mx-auto py-20">
                {
                    items.map((item,index)=>{
                        return(
                            <ItemCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                text={item.text}
                            />
                        )
                    })
                }
            </div>
        </div>
    </>)
}

export default ItemList;