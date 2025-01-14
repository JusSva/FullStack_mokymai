

export default function Admin () {

    return(
        <div className="container">
            <form>
                <label htmlFor="pavadinimas">Pavadinimas</label>
                <input type="text" name="pavadinimas"/>
                
                <label htmlFor="photo">Nuotrauka</label>
                <input type="text" name="photo"/>
                
                <label htmlFor="description">Aprasymas</label>
                <input type="text" name="description"/>
                
                <label htmlFor="price">Kaina</label>
                <input type="text" name="price"/>    
                
                <label htmlFor="discount">Nuolaida</label>
                <input type="text" name="discount"/>
                
                <label htmlFor="rating">Ivertinimas</label>
                <input type="text" name="rating"/>

                <button>Patvirtinti</button>
            </form>
        </div>
    )
}