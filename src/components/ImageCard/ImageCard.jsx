import styles from './ImageCard.module.css'
import {useContext} from "react";
import {dataContext} from "../../context/DataProvired/dataContext.js";

const ImageCard = ({id, urls, likes, user}) => {
	
	const { updateImageUrl, openModal} = useContext(dataContext);
	
	const handleClick = () => {
		updateImageUrl(urls['regular']);
		openModal();
	}
	
	return (<li className={styles['gallery-item']} key={id} onClick={handleClick}>
			<div className={styles["image-card"]}>
				<img className={styles["gallery-image"]}  src={urls.small} alt=""/>
				<span className={styles["gallery-legend"]}>
					<div className={styles['gallery-legend-item']}>
						<p className={styles['gallery-legend-item-label']}>Likes</p>
						<p className={styles['gallery-legend-item-value']}>{likes}</p>
					</div>
					<div className={styles[`gallery-legend-item`]}>
					<p className={styles[`gallery-legend-item-label`]}>Author</p>
					<p className={styles[`gallery-legend-item-value`]}>{user.name}</p>
				</div>
				
				</span>
			</div>
		</li>
	
	)
}
export default ImageCard;