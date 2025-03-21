import FormTest from "../componentes/FormTeste";
import { fetchById, updateEvent } from "../util/http";
import { useParams } from "react-router";
import { useQuery,useMutation } from "@tanstack/react-query";
export default function EditEvent(){
    const {id} = useParams();
    let queries = useQuery({
        queryKey:["events",id],
        queryFn: ({ signal }) => fetchById({ id, signal }),
    })
    let mutation = useMutation({
        mutationFn:updateEvent,
        onSuccess:()=>{
          alert("Evento alterado com sucesso!")
        }
      })
      function handleSubmit(event){
        event.preventDefault();
        let fd = new FormData(event.target);
        const eventData = Object.fromEntries(fd.entries());
        mutation.mutate({
          id,event:eventData
        },{
            onSuccess:()=>{
                console.log("Evento alterado com sucesso!")
            },
            onError:(error)=>{
                console.log(error.message)
            }
        })
      }
    console.log(queries.data)
    return(
        <FormTest title="Change your event." data={queries.data} handleSubmit={handleSubmit}/>
    )
}