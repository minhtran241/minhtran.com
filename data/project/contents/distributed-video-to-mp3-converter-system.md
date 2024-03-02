This project is a distributed video-to-mp3 converter system built with microservices architecture. The system consists of four services

- Auth Service
- Converter Service
- Notification Service
- API Gateway

## Architecture

The system architecture is shown in the diagram below

![architecture diagram](https://github.com/minhtran241/video-to-mp3-conveter-microservices/raw/main/system-design.png)

- After registering, users must log in to obtain an authentication token.
- This token is required to access the upload video endpoint.
- When a user hits the upload endpoint, the API gateway verifies the validity and expiration status of the token.
- If the token is valid, the video is uploaded to MongoDB GridFS, and a message is sent to the videos queue.
- The converter services then receive the message from the videos queue, convert the video to audio, and upload the audio to MongoDB GridFS.
- Next, the converter services send a message to the audios queue.
- Finally, the notification services receive the message from the audios queue and notify the user with a download link for the audio file.

## Technologies

- [MySQL](https://www.mysql.com/) - Database for storing user information
- [MongoDB](https://www.mongodb.com/) - Database for storing video and audio files
- [RabbitMQ](https://www.rabbitmq.com/) - Message broker for communication between services
- [smtplib](https://docs.python.org/3/library/smtplib.html) - Python library for sending emails
- [moviepy](https://zulko.github.io/moviepy/) - Python library for video editing
- [K8s](https://kubernetes.io/) - Container orchestration
