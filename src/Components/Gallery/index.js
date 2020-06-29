import React,{memo,useState} from 'react';
import Button from '../Button';


function PhotosGallery(props){

    const {photos} = props;

    const [gallery,setGallery] = useState(photos);

    

    const handleRemover = (key) =>{
        const newGallery = gallery.filter((img,index) => index!==key );
        setGallery(newGallery);
    }

    const renderPhotos = (img,key) => {
        
        return (
          <div>
           <img src={img}/>
            <Button onClick={() => handleRemover(key)}>
                 Remover {key}
            </Button>
          </div>  
        );
    }


    return (
        <div>            
            {gallery.map(renderPhotos)} 
        </div>
    );

}


export default memo(PhotosGallery);