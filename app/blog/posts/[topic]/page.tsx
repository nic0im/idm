
type Params = {
    params: {
      topic: string
    }
  }

export default function Posts({params: {topic}}: Params){
return(<div>
  {topic}
</div>)
}