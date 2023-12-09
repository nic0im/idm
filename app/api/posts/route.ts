import crearPost from "../../api/controllers/post"

export async function GET(request: Request){
    return new Response('test')
}

export async function POST(req: Request){
    const body = await req.json()
    var res = await crearPost(body)
    return new Response(res)
}

export async function DELETE(req: Request) {
    
}