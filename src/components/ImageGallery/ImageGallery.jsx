import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";


const ImageGallery = ({data, updateImageUrl, openModal}) => {
	
	return (<>
		{data.length > 0
			&& <ul className={styles['gallery']}>
				{Array.isArray(data) && data.map((image) => {
					return <ImageCard key={image.id} {...image}  updateImageUrl={updateImageUrl} openModal= {openModal}/>
				})}
			</ul>
		}
	
	</>)
}

export default ImageGallery;