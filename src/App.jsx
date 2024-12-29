import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import {fetchDataWithTopic} from "./api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import {Toaster} from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal.jsx";


function App() {
	
	return (
		<div className='container'>
			<SearchBar onSearch={fetchDataWithTopic}/>
			<ImageGallery/>
			<ImageModal />
			<Toaster/>
		</div>
	)
}

export default App
