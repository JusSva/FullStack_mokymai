import black_hole from './black-hole.jpg'

export default function first_block() {
    return (
        <div className="d-flex holder">
            <img className='image ' src={black_hole} alt="" />
            <div className='text'>
                <h4>Black holes</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nihil quam, saepe eum hic corrupti architecto quis facilis sint molestias, beatae fuga magnam iure, commodi perferendis? Asperiores corrupti ipsa quas placeat, expedita dolores deserunt eius, omnis provident voluptas ratione alias magni minima illo doloremque nostrum mollitia velit enim illum culpa.</p>
            </div>
        </div>
    )
}