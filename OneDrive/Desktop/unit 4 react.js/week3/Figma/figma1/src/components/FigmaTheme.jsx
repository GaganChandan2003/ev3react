import React, { useContext } from 'react'
import { ThemeContext } from '../contexxt/ThemeContext'
// import { Switch } from 'antd'
import { Switch,Box,Flex,Button,Image,Slider,SliderThumb,SliderTrack,SliderFilledTrack} from '@chakra-ui/react'
import './Figma.css'

const FigmaTheme = () => {
    const {toogletheme,isLight}=useContext(ThemeContext)
  return (
      <>
      <div className={isLight? 'dark':'light'}>
      <Box
      className={isLight? 'sided':'sidel'}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      width="100px"
      pos="fixed"
      h="full">
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        
          
        <div className='icons'>
        <img src="https://i.pinimg.com/736x/05/d1/94/05d1948a0b051439f26a835c33b79823.jpg" style={{width:'40px',height:'40px',marginLeft:'20px',marginTop:'20px'}} alt="" />
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'blue'}} width='70px' fontSize={'25px'}><i  class="fa-solid fa-chart-simple"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'blue'}} width='70px'  fontSize={'25px'}><i class="fa-solid fa-envelope"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'blue'}} width='70px'  fontSize={'25px'}><i class="fa-solid fa-gifts"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'blue'}} width='70px'  fontSize={'25px'}><i class="fa-brands fa-rocketchat"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'blue'}} width='70px'  fontSize={'25px'}><i class="fa-solid fa-clone"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'blue'}} width='70px' fontSize={'25px'}><i class="fa-solid fa-gear"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' width='60px' style={{marginTop:"80px", fontSize:'25px'}}><i  class="fa-solid fa-circle-plus"></i></Button>
        </div>
       
      </Flex>
    </Box>

    <div className='dashboard' > DASHBOARD 
      <p style={{fontSize:'10px'}} >{isLight ? 'Dark Mode':'Light Mode'}</p>
      <Switch onChange={toogletheme}/>
      </div>
      <div>

      </div>
      <div className={isLight? 'darkb':'lightb'}>
        <div style={{display:'flex' , justifyContent:'space-between'}}><p style={{fontSize:'12px',marginBottom:"20px"}}>Active Users</p><p style={{fontSize:'10px'}}> For August 2022</p></div>
        <div className='profile'>
        <Image borderRadius='full' boxSize='150px' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' width='40px' height='40px' alt='Dan Abramov'/>
        <div>
          <p style={{fontSize:'13px'}}>Nrupal Dev</p>
          <p style={{fontSize:'11px',color:'grey'}}>Copenhangen,Denmark</p>
        </div>
        <i class="fa-solid fa-ellipsis" style={{float:'right'}}></i>
        </div>
        <Slider aria-label='slider-ex-1' defaultValue={60}><SliderTrack><SliderFilledTrack /></SliderTrack><SliderThumb /></Slider>
        <div className='down'><p>Professional 15</p>
        <p>4723 Points</p></div>

         {/* 1st profile */}
 <hr />
        <div className='profile'>
        <Image borderRadius='full' boxSize='150px' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' width='40px' height='40px' alt='Dan Abramov'/>
        <div>
          <p style={{fontSize:'13px'}}>Sandya</p>
          <p style={{fontSize:'11px',color:'grey'}}>Copenhangen,Denmark</p>
        </div>
        <i class="fa-solid fa-ellipsis" style={{marginLeft:'30px'}}></i>
        </div>
        <Slider aria-label='slider-ex-1' defaultValue={60}><SliderTrack><SliderFilledTrack /></SliderTrack><SliderThumb /></Slider>
        <div className='down'><p>Professional 11</p>
        <p>2339 Points</p></div>

 {/* 1st profile */}
<hr />
        <div className='profile'>
        <Image borderRadius='full' boxSize='150px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg' width='40px' height='40px' alt='Dan Abramov'/>
        <div>
          <p style={{fontSize:'13px'}}>Elon Tusk</p>
          <p style={{fontSize:'11px',color:'grey'}}>California,USA</p>
        </div>
        <i class="fa-solid fa-ellipsis" style={{marginLeft:'30px'}}></i>
        </div>
        <Slider aria-label='slider-ex-1' defaultValue={60}><SliderTrack><SliderFilledTrack /></SliderTrack><SliderThumb /></Slider>
        <div className='down'><p>Professional 6</p>
        <p>1884 Points</p></div>
        
      </div>
      
      </div>
      
       
       
      </>
   
  )
}

export default FigmaTheme