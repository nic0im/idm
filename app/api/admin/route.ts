import Usuario from "../../db/models/userSchema";

export async function GET(req: Request): Promise<Response> {
  const params = new URLSearchParams(req.url.split("?")[1]);

  const sendAllFR = params.get("sendAllFR");
  const removeAllFR = params.get("removeAllFR")

  if (sendAllFR == "1") {
    try {

        const idmpUser = {
            _id: "658a8328ae8b36efd1f8ae5c",
            nombre: "IDMP",
            foto:"https://lh3.googleusercontent.com/a/ACg8ocIcRSurDaO8saG8OnOmif4Tl_F1oQyGLZENXE5FYCYoVg=s96-c"
        }



      const usuarios = await Usuario.find();
        
      let totalFR=1
      usuarios.map(async (u, index) => {
        totalFR++
        await Usuario.findByIdAndUpdate({ _id: u._id }, { $push:{solicitudes:idmpUser} });
      });
      return new Response(`${totalFR} friend request has been sent`);
    } catch (err) {
      console.log(err);
      return new Response(err);
    }
  }else if(removeAllFR=="1"){
    try {
        const usuarios = await Usuario.find();
        
        let totalRemoved = 1
        usuarios.map(async (u, index) => {
            totalRemoved++
          await Usuario.findByIdAndUpdate({ _id: u._id }, { solicitudes: [], amigos: [] });
        });
        return new Response(`${totalRemoved} request has been removed`);
      } catch (err) {
        console.log(err);
        return new Response(err);
      }
  }
}
