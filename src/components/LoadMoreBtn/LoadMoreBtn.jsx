const LoadMoreBtn = ({onSearch}) => {
	
	const handleClick = async (evt) => {
		evt.preventDefault();
		onSearch();
	}
	
	return (
		<button type="submit" onClick={handleClick}>Load more</button>
	)
}

export default LoadMoreBtn;