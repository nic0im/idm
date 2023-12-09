
type Params = {
    params: {
      postId: string
    }
  }

export default function Post({params: {postId}}: Params){
return(<div>
  {postId}
</div>)
}