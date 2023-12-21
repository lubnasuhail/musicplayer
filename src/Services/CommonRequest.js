import axios from "axios";

export const CommonRequest=async (method,url,body)=>{
    let axiosConfig={
        method,
        url,
        data:body,
        header:{
           'content-type':"application/json"
        }
        }
        return await axios(axiosConfig).then((res)=>{
            return res
        }).catch(rej=>{
            return rej
        })

}