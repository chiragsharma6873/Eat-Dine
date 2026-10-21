import {motion} from 'motion/react'

const Animated = ({children,
    delay = 0,
     y = 50,
     x = 0,
     scale = 1,
     className,
     ...props
     }) => {
  return (
    <motion.div 
    initial={{opacity: 0, y, x, scale}}
    whileInView={{opacity: 1, y:0, x:0, scale:1}}
    viewport={{once: true}}
    transition={{delay, type: "spring", stiffness:320, damping:70, mass: 1,}}
    className={className}
    {...props}
    >
    {children}
    </motion.div>
  )
}

export default Animated