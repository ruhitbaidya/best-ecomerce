
import { Link } from 'react-router-dom';
import imge1 from '../../../assets/btslid1.png'
import imge2 from '../../../assets/btslid2.png'
import { FaLocationDot } from "react-icons/fa6";
import "./stylesot.css"

const BottomSlider = () => {
  return (
    <>
     <div className=' flex border p-[30px] items-center rounded-lg mb-[10px]'>
            <div className='w-[30%]'>
                <img src={imge1} alt="" />
            </div>
            <div className='w-[5%]'></div>
            <div className='w-[65%] space-y-4'>
                <p className='flex items-center gap-[15px]'> <FaLocationDot /> <span>123 Elm Street, ew York</span> </p>
                <p className='text-left font-bold'>Healing Bodywork <Link to="">by Cort</Link></p>
                <p className='text-left'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of</p>
            </div>
        </div>
        <div className=' flex border p-[30px] items-center rounded-lg'>
            <div className='w-[30%]'>
                <img src={imge2} alt="" />
            </div>
            <div className='w-[5%]'></div>
            <div className='w-[65%] space-y-4'>
                <p className='flex items-center gap-[15px]'> <FaLocationDot /> <span>123 Elm Street, ew York</span> </p>
                <p className='text-left font-bold'>Healing Bodywork <Link to="">by Cort</Link></p>
                <p className='text-left'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of</p>
            </div>
        </div>
  </>
  )
}

export default BottomSlider