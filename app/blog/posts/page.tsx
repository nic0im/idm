import SinglePost from "../../components/SinglePost";
export default function Posts() {
  const posts = [
    {
        titulo: "Un lugar ideal para hacer trekking, a minutos del centro",
        thumbnail: "test",
        descripcion: "test",
        autor: "Nicolas",
        categoria: "test",
        createdAt: "2023-12-06T22:27:12.701+00:00"
    },
    {
        titulo: "Explorando la naturaleza cerca de la ciudad",
        thumbnail: "test",
        descripcion: "test",
        autor: "Laura",
        categoria: "test",
        createdAt: "2023-12-06T22:27:12.701+00:00"
    },
    {
        titulo: "Aventuras en la montaña",
        thumbnail: "test",
        descripcion: "test",
        autor: "Alejandro",
        categoria: "test",
        createdAt: "2023-12-06T22:27:12.701+00:00"
    },
    {
        titulo: "Descubriendo nuevos senderos",
        thumbnail: "test",
        descripcion: "test",
        autor: "Mariano",
        categoria: "test",
        createdAt: "2023-12-06T22:27:12.701+00:00"
    },
    {
        titulo: "Rutas secretas en la naturaleza",
        thumbnail: "test",
        descripcion: "test",
        autor: "Carla",
        categoria: "test",
        createdAt: "2023-12-06T22:27:12.701+00:00"
    },{
        titulo: "Exploración bajo la lluvia",
        thumbnail: "test",
        descripcion: "test",
        autor: "Ana",
        categoria: "test",
        createdAt: "2023-12-06T22:27:12.701+00:00"
    },
    {
        titulo: "Senderismo al atardecer",
        thumbnail: "test",
        descripcion: "test",
        autor: "Fernando",
        categoria: "test",
        createdAt: "2023-12-06T22:27:12.701+00:00"
    },
    {
        titulo: "Aventuras en solitario",
        thumbnail: "test",
        descripcion: "test",
        autor: "Elena",
        categoria: "test",
        createdAt: "2023-12-06T22:27:12.701+00:00"
    }
  ];
  return (<div className="h-full bg-gray-800">
    <div>
        todos los post
    </div>
    <div className="flex justify-center py-10">
    <div className="grid grid-cols-4 justify-center gap-6">
    {posts.map((p)=>{
        const fecha = p.createdAt
        const fechaFormateada = new Date(fecha)
        const fechaString = `${fechaFormateada.getDate()}/${fechaFormateada.getMonth()}/${fechaFormateada.getFullYear()}`

        return (<SinglePost titulo={p.titulo} autor={p.autor} fecha={fechaString}/>)})}
    </div>
    </div>
  </div>);
}
