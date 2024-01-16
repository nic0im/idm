import {crearPost} from "../../api/controllers/post"

export async function GET(req: Request){
    const params = new URLSearchParams(req.url.split('?')[1]);
    //const username = params.get('user')
    console.log("test"+ params)

    return new Response('test')
}

export async function POST(req: Request){
    const body = await req.json()
    var res = await crearPost(body)
    return new Response(res)
}

export async function DELETE(req: Request) {
    const params = new URLSearchParams(req.url.split('?')[1])
}