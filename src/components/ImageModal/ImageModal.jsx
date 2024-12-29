import Modal from "react-modal";
import {useContext} from "react";
import {dataContext} from "../../context/DataProvired/dataContext.js";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = () => {
	
	const {isModalOpen,  closeModal, imageUrl} = useContext(dataContext);
	
	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={closeModal}
			contentLabel="Image Viewer"
			overlayClassName={styles.overlay}
			className={styles.content}
		>
			<button
				onClick={closeModal}
				className={styles.closeButton}
			>
				Close
			</button>
			<img
				src={imageUrl}
				alt="Large view"
				className={styles.image}
			/>
		</Modal>
	)
}

export default ImageModal;