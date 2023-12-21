import React,{useEffect, useState} from 'react'
import { Modal, Button, FloatingLabel,Form } from 'react-bootstrap'
import { addCategory, deleteCategory ,getSpecificVideo, updatecategory} from '../Services/Allapi';
import { toast } from 'react-toastify';
import { getCategories } from '../Services/Allapi';
import Videocard from './Videocard';


function Category() {
  const [show, setShow] = useState(false);
  const [Categories,setCategories]=useState([])
  const[CategoryDetails,setCategoryDetails]=useState({
    id:'',categoryName:'',allVideos:[]
  })

  const handleCategoryList=async()=>{
    const res=await getCategories()
    console.log(res.data)
    setCategories(res.data)
  }

  const handleCategory=(e)=>{
    const {name,value}=e.target
    setCategoryDetails({...CategoryDetails,[name]:value})
  }

const handleRequest=async()=>{
  const res=await addCategory(CategoryDetails)
  console.log(res)
  if(res.status>=200 && res.status<300)
  {
    setShow(false)
    handleCategoryList()
    toast.success("Category added!!")
  }
  else{
    toast.error("Failed!!")
  }
}
const handleCategoryDelete=async(id)=>{
  const res=await deleteCategory(id)
  // console.log(res)
  if(res.status>=200 && res.status<300){
    toast.success("category Removed!!")
    handleCategoryList()
}
else{
  toast.error("category not Removed")
}
}

console.log(CategoryDetails)
const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
      handleCategoryList()
    },[])

    const dragOver=(e)=>{
      e.preventDefault()
      console.log("Dragging Over Category Board!!")
    }

    const onDrophandle=async(e,id)=>{
      console.log("Drop Target category id:",id)
      let Videoid=e.dataTransfer.getData("Videoid")
      console.log("Video ID",Videoid);
      const Video=await getSpecificVideo(Videoid)
      console.log(Video.data)

      let selectCategory=Categories?.find(item=>item?.id===id)
      // console.log(selectCategory)
      selectCategory.allVideos.push(Video.data)
      console.log(selectCategory)
const res=await updatecategory(id,selectCategory)
console.log(res)
if(res.status>=200 && res.status<300){
  toast.success("Video Added To Category!!")
  handleCategoryList()
}
    }

  return (
    <>
    <div className='d-grid'>
        <Button onClick={handleShow} className='btn btn-info'>Add Category</Button>
    </div>
    {
      Categories.map(item=>(
        <div className='bg-aqua m-3 p-1 border border-danger shadow rounded' droppable
        onDragOver={e=>dragOver(e)} onDrop={(e)=>onDrophandle(e,item?.id)}>
          <div>
          <span>
            {item?.categoryName}
          </span>
          <span style={{float:'right'}} className='btn' onClick={() =>handleCategoryDelete(item?.id)}><i className="fa-solid fa-trash fa-bounce"></i></span>
        </div>
        <div>
        {
        item?.allVideos?.map(video=>(
          <Videocard video={video}/>
        ))
        }
        </div>

</div>

        
))}

  <Modal
        show={show} onHide={handleClose} backdrop="static"keyboard={false}
      >
        <Modal.Header closeButton>
         <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingId" label="ID"className="mb-3">
        <Form.Control type="text" placeholder="Enter Unique ID"  name='id' onChange={(e)=>handleCategory(e)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingCategory" label="Category Name">
        <Form.Control type="text" placeholder="Category Name" name='categoryName' onChange={(e)=>handleCategory(e)} />
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRequest}>Add</Button>
        </Modal.Footer>
      </Modal>
      </>
    
    )
  }
  
  export default Category