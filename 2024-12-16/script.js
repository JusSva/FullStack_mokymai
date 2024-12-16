class TV {

    constructor (gamintojas, kanalas, garsas) {
        this.gamintojas = gamintojas
        if (!kanalas)
            this.kanalas = 1
        if (!garsas)
            this.garsas = 50
    }

    return_parameters() {
        return `Televizorius "${this.gamintojas}" šiuo metu rodo ${this.kanalas} kanalą. Garso lygis ${this.garsas}.`
    }

    change_chanel (new_chanel) {
        if(new_chanel < 1 || new_chanel > 50){
            return this.kanalas = 1
        }
        else return this.kanalas = new_chanel
    }

    change_volume (new_volume) {
        if (new_volume > 100)
            return this.garsas = 100
        else if (new_volume < 0)
            return this.garsas = 0
        else return this.garsas = new_volume
    }

    get_manufacturer() {
        return this.gamintojas
    }

    factory_settings () {
        let factory_kanalas = 1
        let factory_garsas = 50
        document.write(`${this.get_manufacturer()}, ${this.change_chanel(factory_kanalas)}, ${this.change_volume(factory_garsas)}`)
        return this.get_manufacturer(), this.change_chanel(factory_kanalas), this.change_volume(factory_garsas)
    }
}

let sony = new TV("Sony")