
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out Microservices project from GitHub'
            }
        }

        stage('Validate Project') {
            steps {
                echo 'Checking project structure'

                sh 'test -f docker-compose.yml'
                sh 'test -f user-service/Dockerfile'
                sh 'test -f product-service/Dockerfile'
                sh 'test -f order-service/Dockerfile'
                sh 'test -f nginx/default.conf'

                echo 'All project files are present!'
            }
        }

        stage('Build Information') {
            steps {
                echo 'Microservices CI pipeline completed successfully'
            }
        }
    }
}
