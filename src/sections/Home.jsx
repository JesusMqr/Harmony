import axios from 'axios';
import '../css/home.css';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Galery from '../components/Galery';
import Footer from '../components/Footer';

const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: '<REQUIRED>',
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '23a1fc8706msh70f1fbb9339a65bp170941jsnd8f571700bff',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

  

const Home=()=>{

    
    return(
        <>
        
        <div id='bg__home' className=' grid items-center justify-center min-h-screen text-white text-center '>
            <div className='bg-black/20 grid gap-5 md:p-20 max-w-screen-lg rounded-lg '>
                <h1 className='uppercase text-4xl font-bold'><span className='text-orange-400'>Harmony</span>, El mejor 
                <span className='text-orange-200'> reproductor de musica</span> del mundo</h1>
                <h2 className='text-2xl font-semibold' >Tu ritmo, tu mundo. Descubre la melodia de la vida</h2>
                <p className='text-base' >Sumérgete en Harmony, donde la música cobra vida. Con recomendaciones personalizadas, listas de reproducción inteligentes y una interfaz intuitiva, descubre un universo musical hecho a tu medida. Únete a nuestra comunidad y deja que la melodía te inspire como nunca antes.</p>
                <div className='text-center mt-5'>

                  <button className="p-3 border-2 rounded-lg font-semibold
                  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-transparent  hover:bg-orange-600 ">
                    Unete ahora
                  </button>
                </div>
            </div>
        </div>

        <ItemList/>
        <Galery/>
        <Footer/>


        </>
    )
};

export default Home;