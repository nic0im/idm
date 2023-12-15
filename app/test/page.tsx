import {getUserbyName} from "../api/controllers/usuario"
export default async function page(){

    const arr = await getUserbyName("Nicooow")

    return(
    <div>
        hello from test!{arr[0].nombre}
    </div>)
}