import React, {useState} from 'react'

const Form = () => {
    const [numero,
        setNumero] = useState(0)
    const [lista,
        setLista] = useState([])

    const multiplicar = (e) => {
        e.preventDefault()
        setNumero(numero * 3)
        console.log(setNumero)
        if (!numero.trim) {
            console.log('el campo numero esta vacio')
            alert('introduce un numero')
            return
        }
        setNumero(numero * 3)
        if (numero % 2 !== 0) {
            alert('agrega un numero par')
            return
        } else {
            console.log('procesando datos del formulario')

            setLista([{
                    setNumero
                }])
        }
    }
    return (
        <div className=" container m-5 rounded bg-dark bg-gradient p-5">
            <h1 className="text-center white">Aplicación numero impar</h1>
            <form onSubmit={multiplicar} className="form-control w-100 ">
                <input
                    type="number"
                    placeholder="ingresa un numero"
                    className="w-100 p-3 form-control  text-center"
                    onChange=
                    {(event)=>setNumero(event.target.value)}/>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary mt-5 a" type="submit">
                        Multiplicar x3
                    </button>
                </div>
            </form>
            <p className="text-center fs-4 p-5">
                resultado= {numero}
                - {numero % 2 === 0
                    ? 'es par'
                    : 'es inpar'
}
            </p>
        </div>
    )
}

export default Form
