import {useContext} from "react";
import {dataContext} from "../../context/DataProvired/dataContext.js";
import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";


const ImageGallery = () => {
	const {data} = useContext(dataContext);
	
	
	
	
	return (<>
		{data.length > 0
			&& <ul className={styles['gallery']}>
				{Array.isArray(data) && data.map((image) => {
					return <ImageCard key={image.id} {...image} />
				})}
			</ul>
		}
	
	</>)
}

export default ImageGallery;