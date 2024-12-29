import {useContext} from "react";
import {dataContext} from "../../context/DataProvired/dataContext.js";

const LoadMoreBtn = ({onSearch}) => {
	const {
		page,
		setNextPage,
		addData,
		turnOnLoading,
		turnOffLoading,
		createError,
		clearError,
		searchTopic
	} = useContext(dataContext);
	
	const handleClick = async (evt) => {
		evt.preventDefault();
		clearError();
		
		addData(await onSearch(searchTopic, 10, page, turnOnLoading, turnOffLoading, createError));
		setNextPage();
		
		
	}
	
	
	return (
		<button type="submit" onClick={handleClick}>Load more</button>
	)
}

export default LoadMoreBtn;