import First_block from "./first-block/First_block"
import Second_block from './second-block/Second_block'
import Third_block from './third-block/Third_block.jsx'
import Fourth_block from './fourth-block/Fourth_block.jsx'
import Fifth_block from './fifth-block/Fifth_block.jsx'
import Sixth_block from './sixth-block/Sixth_block.jsx'
import './blocks.css'

export default function body () {
    return(
        <div className="content_holder">
            <First_block />
            <Second_block />
            <Third_block />
            <Fourth_block />
            <Fifth_block />
            <Sixth_block />
        </div>
    )
}