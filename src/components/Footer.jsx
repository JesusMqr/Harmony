import { useEffect } from "react";
import FooterItem from "./FooterItem";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import MailIcon from "./icons/MailIcon";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import ViteIcon from "./icons/ViteIcon";
import WhatsappIcon from "./icons/WhatsappIcon";


    const dateRights = new Date();


const FootItems = [
    {
        type: "Recursos",
        content: [
            {
                icon: <TailwindIcon/>,
                text: "Tailwind" 
            },
            {
                icon: <ReactIcon/>, 
                text: "React" 
            },
            {
                icon: <ViteIcon/>, 
                text: "Vite"
            }
            
        ]
    },
    {
        type: "Siguenos",
        content: [
            {
                icon: <GithubIcon/>, 
                text: "github.com/JesusMqr" 
            },
            {
                icon: <LinkedinIcon/>,
                text: "linkedin.com/in/JesusMCode",
            },
            {
                icon: <InstagramIcon/>,
                text: "jm_code_dev" 
            },
            {
                icon: <FacebookIcon/>,
                text: "JMCode " 
            }
        ]
    },
    {
        type: "Contacto",
        content: [
            {
                icon: <MailIcon/>,
                text: "jesusmaquera10@gmail.com" 
            },
            {
                icon: <WhatsappIcon/>, 
                text: "+51 966021962" 
            }
           
        ]
    }
];



const Footer=()=>{
    return(<>
        <div className=" text-white py-20 px-5
        bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950">
            <div className="grid grid-cols-3 max-w-screen-lg mx-auto">
                <div className="text-start">
                    <h4 className="uppercase text-xl font-bold">Harmony</h4>
                </div>
                <div className="grid gap-5 col-span-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                   {FootItems.map(({type,content},index)=>(
                    <FooterItem key={index} title={type} list={content}/>
                   )
                    
                   )}
                </div>

            </div>
            <hr className="w-full max-w-screen-lg mx-auto  h-px my-8 bg-orange-600 border-0" />
            <div className="text-center">
                © {dateRights.getFullYear()} JMCode. Algunos derechos reservados.
            </div>


        </div>
        
    </>)
}

export default Footer;
