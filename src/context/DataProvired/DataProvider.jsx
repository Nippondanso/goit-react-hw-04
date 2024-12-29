import {useState} from "react";
import {dataContext} from "./dataContext.js";

const DataProvider = ({children}) => {
	
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [imageUrl, setImageUrl] = useState('');
	
	const setNextPage = () => setPage((prevState) => prevState + 1);
	
	const [searchTopic, setSearchTopic] = useState('');
	
	const updateData = (data) => setData(data);
	const addData = (data) => setData((prevState) => [...prevState, ...data]);
	const refreshData = () => setData([]);
	
	const turnOnLoading = () => setLoading(true);
	const turnOffLoading = () => setLoading(false);
	
	const createError = () => setError(true);
	const clearError = () => setError(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	
	const updateImageUrl = (data) => setImageUrl(data);
	
	const contextValue = {
		data,
		addData,
		updateData,
		refreshData,
		
		loading,
		turnOnLoading,
		turnOffLoading,
		
		error,
		createError,
		clearError,
		
		page,
		setNextPage,
		
		searchTopic,
		setSearchTopic,
		
		isModalOpen,
		openModal,
		closeModal,
		
		imageUrl,
		updateImageUrl
	}
	
	return (
		<dataContext.Provider value={contextValue}>
			{children}
		</dataContext.Provider>
	)
}

export default DataProvider;