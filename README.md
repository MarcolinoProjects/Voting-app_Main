# About the Project
This is a simple voting app that quickly displays the results of the voting. It is event-driven and uses an activity and sequence diagram for its workflow. Images and gifs of the app can be seen below.

## Workflow
### Activity Diagrams
* Create new voting session
  ![](./docs/img/activity-Create_new_voting_session.png)
* The Voting and Result workflow:
  ![](./docs/img/activity-Voting_flow.png)

### Sequence Diagrams
* Create new voting session
  ![](./docs/img/sequence-Create_new_voting_session.png)
* The Voting and Result workflow:
  ![](./docs/img/sequence-ResultVoting.png)

### Technologies Used
* Golang
* Node.js
* React
* Rabbitmq
* Redis
* Socket.io
* Docker
* Kubernetes
* Helm
* Github Actions

## Getting Started
To begin working with this project, execute the following commands:
```sh
git clone https://github.com/VictorMarcolino/votingMicroservicesApp.git
docker-compose up -V
```
Then access `localhost:3000`

### Prerequisites
To build this project, you only need Docker with Docker Compose. Then simply execute `docker-compose up`.

## Contact
Victor Marcolino - marcolino.victor@gmail.com