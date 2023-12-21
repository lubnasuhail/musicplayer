
import { BASE_URL } from "./base_url";
import { CommonRequest } from "./CommonRequest";


// to upload videos

 export const addVideos=async(body)=>{
    return await CommonRequest("POST",`${BASE_URL}/Videos`,body)
}

// to get all videos
export const getVideos=async()=>{
    return await CommonRequest("GET",`${BASE_URL}/videos`,'')
}

// to delete a specific video
export const deletevideo=async(id)=>{
    return await CommonRequest(`DELETE`,`${BASE_URL}/videos/${id}`,{})
}

// to add Category
export const addCategory=async(body)=>{
    return await CommonRequest("POST",`${BASE_URL}/categories`,body)
}

// to get categorylist
export const getCategories=async()=>{
    return await CommonRequest("GET",`${BASE_URL}/categories`,'')
}

// to delete a  category
export const deleteCategory=async(id)=>{
    return await CommonRequest(`DELETE`,`${BASE_URL}/categories/${id}`,{})
}


// to get all history

export const getHistory=async(body)=>{
    return await CommonRequest("GET",`${BASE_URL}/watch-history`,"")
}

// to add history

export const addHistory=async(body)=>{
    return await CommonRequest("POST",`${BASE_URL}/watch-history`,body)
}
    
    // to get specific video

export const getSpecificVideo=async(id)=>{
    return await CommonRequest("GET",`${BASE_URL}/videos/${id}`,id)
}

// to update category

export const updatecategory=async(id,body)=>{
    return await CommonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
}
