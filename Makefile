download-data:
	./download_data.sh
	
preprocess-data:
	cd backend/extra && python3 prepare_dataset.py