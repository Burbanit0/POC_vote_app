up-dev:
	docker-compose up --build

run:
	docker-compose start

stop:
	docker-compose stop

down: 
	docker-compose down

set-up:
	@echo "MONGO_URI=mongodb://mongodb:27017/jwtnode" > .env
	@echo "API_PORT=3001" >> .env
	@echo "TOKEN_KEY=mysecretkey" >> .env