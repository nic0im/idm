export async function GET(request: Request){
    return new Response('test')
}

export async function POST(req: Request){
    const body = await req.json()
    console.log(body.hello)
    return new Response("ok")
}