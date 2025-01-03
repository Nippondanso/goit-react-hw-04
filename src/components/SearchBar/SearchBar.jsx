// import {useContext} from "react";
// import {dataContext} from "../../context/DataProvider/dataContext.js";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({onSearch}) => {
	// const {
	// 	page,
	// 	setNextPage,
	// 	setSearchTopic,
	// 	updateData,
	// 	turnOnLoading,
	// 	turnOffLoading,
	// 	createError,
	// 	clearError,
	// 	refreshData
	// } = useContext(dataContext);
	
	const handleSubmit = async (evt) => {
		evt.preventDefault();
		// refreshData();
		// clearError();
		
		const form = evt.target;
		const topic = form.elements['topic'].value;
		
		if (topic.length === 0) {
			toast.error('Please enter a topic.');
			return;
		}
		
		onSearch(topic);
		// updateData(await onSearch(topic, 10, page, turnOnLoading, turnOffLoading, createError));
		// setSearchTopic(topic);
		// setNextPage();
		
		form.reset();
	};
	
	return (
		<header>
			<form onSubmit={handleSubmit} className={styles.inputArea}>
				<input
					className={styles.inputField}
					name="topic"
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
				/>
				<button type="submit">Search</button>
			</form>
		</header>
	
	)
}

export default SearchBar;