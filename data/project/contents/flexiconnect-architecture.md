## Building Scalable Microservices with Go

Welcome to my latest project showcase! In this project, I'll walk you through the journey of building scalable microservices using Go. Let's get started!

### Overview

The microservices architecture consists of several essential components:

- **Broker Service**: Acts as the entry point for request redirection.
- **Authentication Service with PostgreSQL**: Manages credential verification securely.
- **Logger Service with MongoDB**: Handles logging of service interactions efficiently.
- **Mail Service**: Facilitates seamless email communication.
- **Listener Service AMQP**: Listens for and processes requests pushed to RabbitMQ.

### Tools and Technologies

To develop and manage the microservices ecosystem, I utilized various tools and technologies:

- **[GNU Make](https://www.gnu.org/software/make/)**: For efficient program generation and Docker image building.
- **[Docker](https://www.docker.com/)**: To containerize and deploy the services effectively.
- **[Caddy](https://caddyserver.com/)**: As a proxy to frontend and broker services for enhanced security.
- **[PostgreSQL](https://www.postgresql.org/)**: To store and manage credentials securely for the authentication service.
- **[MongoDB](https://www.mongodb.com/)**: For storing and managing logs efficiently in the logger service.
- **[RabbitMQ](https://www.rabbitmq.com/)**: To facilitate seamless communication between services.
- **[Go-Chi](https://github.com/go-chi/chi)**: A lightweight, idiomatic, and composable router for building Go HTTP services.

### Deployment

The deployment process is streamlined with Docker Swarm:

- **Build and Push Images**: Docker images are built and pushed to [Docker Hub](https://hub.docker.com/) for seamless deployment.
- **Swarm Deployment**: Services are deployed using Docker Swarm, ensuring scalability and resilience.
- **Caddy Proxy**: Caddy is deployed as a proxy to frontend and broker services, providing an additional layer of security.

### Testing and Development

For testing and development purposes, I've implemented a robust environment:

- **Frontend Test**: A dedicated test page allows for comprehensive testing of the services.
- **Local Development**: Detailed instructions for local development using Docker Compose are provided, ensuring a smooth development experience.

### Conclusion

Building scalable microservices with Go has been an exhilarating journey. With a focus on modularity, scalability, and resilience, we've created a robust ecosystem capable of handling diverse workloads effectively.

Stay tuned for more exciting updates and projects from me on my website.
