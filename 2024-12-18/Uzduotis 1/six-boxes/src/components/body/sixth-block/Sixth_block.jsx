import eye from './mass-eyeballs.jpg'

export default function sixth_block(){
    return (
    <div className="d-flex holder">
        <div className='text'> 
            <h4>Eye Mass</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nihil quam, saepe eum hic corrupti architecto quis facilis sint molestias, beatae fuga magnam iure, commodi perferendis? Asperiores corrupti ipsa quas placeat, expedita dolores deserunt eius, omnis provident voluptas ratione alias magni minima illo doloremque nostrum mollitia velit enim illum culpa.</p>
        </div>
        <img className='image' src={eye} alt="" />
    </div>
    )
}