import {useContext} from "react";
import {dataContext} from "../../context/DataProvired/dataContext.js";
import ImageCard from "../ImageCard/ImageCard.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import {fetchDataWithTopic} from "../../api.js";
import styles from "./ImageGallery.module.css";


const ImageGallery = () => {
	const {data, loading, error} = useContext(dataContext);
	
	
	if (error) return (<ErrorMessage/>)
	
	
	return (<>
		{data.length > 0
			&& <ul className={styles['gallery']}>
				{Array.isArray(data) && data.map((image) => {
					return <ImageCard key={image.id} {...image} />
				})}
			</ul>
		}
			{(loading && <Loader active={loading} color="#fff"/>) || (data.length > 0 &&
				<LoadMoreBtn onSearch={fetchDataWithTopic}/>)}
	</>)
}

export default ImageGallery;