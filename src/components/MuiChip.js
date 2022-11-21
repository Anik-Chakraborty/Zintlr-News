import React from 'react'
import {motion} from 'framer-motion'
import {useRef , useEffect , useState} from "react"
import {Stack ,Chip} from '@mui/material'
function MuiChip() {

    const[width ,setWidth] = useState(0);
    const carousel = useRef();

    useEffect(()=>{
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    },[])


  return (
    <motion.Stack ref={carousel} direction='row' spacing={1} drag= "x" dragConstraints = {{right: 0 , left: -(width) }} >
      <Chip label='All' color='primary' size='small' />
      <Chip label='Business' color='primary' size='small' />
      <Chip label='Entertainment' color='primary' size='small' />
      <Chip label='Health' color='primary' size='small' />
      <Chip label='Science' color='primary' size='small' />
      <Chip label='Sports' color='primary' size='small' />
      <Chip label='Technology' color='primary' size='small' />
      
    </motion.Stack>
  )
}

export default MuiChip