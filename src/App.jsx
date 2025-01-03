import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import {fetchDataWithTopic} from "./api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import {Toaster} from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";
import {useEffect, useState} from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";

function App() {
	
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [imageUrl, setImageUrl] = useState('');
	const [searchTopic, setSearchTopic] = useState('');
	
	
	const setNextPage = () => setPage((prevState) => prevState + 1);
	const addData = (data) => setData((prevState) => [...prevState, ...data]);
	const refreshData = () => setData([]);
	const turnOnLoading = () => setLoading(true);
	const turnOffLoading = () => setLoading(false);
	const setIsError = (value) => setError(value);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const updateImageUrl = (data) => setImageUrl(data);
	
	
	const onSearchTopic = (topic) => {
		refreshData();
		setSearchTopic(topic);
	}
	
	const onLoadMore = () => {
		setNextPage();
	}
	
	useEffect(() => {
		const getData = async () => {
			try {
				turnOnLoading();
				setIsError(false);
				const newData = await fetchDataWithTopic(searchTopic, 15, page);
				addData(newData)
			} catch (error) {
				setIsError(true);
				console.log(error);
			} finally {
				turnOffLoading();
			}
		}
		
		searchTopic.length > 0 && getData();
	}, [ searchTopic, page]);
	
	
	return (<div className='container'>
		<SearchBar onSearch={onSearchTopic}/>
		<ImageGallery data={data} updateImageUrl={updateImageUrl} openModal={openModal}/>
		{error && <ErrorMessage/>}
		{(loading && <Loader active={loading} color="#fff"/>) || (data.length > 0 &&
			<LoadMoreBtn onSearch={onLoadMore}/>)}
		<ImageModal isModalOpen={isModalOpen} closeModal={closeModal} imageUrl={imageUrl}/>
		<Toaster/>
	</div>)
}

export default App
