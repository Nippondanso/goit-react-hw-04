import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import {fetchDataWithTopic} from "./api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import {Toaster} from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import {useContext} from "react";
import {dataContext} from "./context/DataProvired/dataContext.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

function App() {
	const {
		data,
		loading,
		error,
		page,
		setNextPage,
		addData,
		turnOnLoading,
		turnOffLoading,
		createError,
		clearError,
		searchTopic
	} = useContext(dataContext);
	
	const onLoadMore = async () => {
		clearError();
		addData(await fetchDataWithTopic(searchTopic, 15, page, turnOnLoading, turnOffLoading, createError));
		setNextPage();
	}
	
	
	return (
		<div className='container'>
			<SearchBar onSearch={fetchDataWithTopic}/>
			<ImageGallery/>
			{error && <ErrorMessage/>}
			{(loading && <Loader active={loading} color="#fff"/>)
				|| (data.length > 0
					&& <LoadMoreBtn onSearch={onLoadMore}/>)}
			<ImageModal/>
			<Toaster/>
		</div>
	)
}

export default App
