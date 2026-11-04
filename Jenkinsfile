
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out Microservices project'
            }
        }

        stage('Validate Project') {
            steps {
                sh 'test -f docker-compose.yml'
                sh 'test -f user-service/Dockerfile'
                sh 'test -f product-service/Dockerfile'
                sh 'test -f order-service/Dockerfile'
                sh 'test -f nginx/default.conf'
                echo 'Project validation successful'
            }
        }

        stage('Build User Service') {
            steps {
                sh 'docker build -t user-service:latest ./user-service'
            }
        }

        stage('Build Product Service') {
            steps {
                sh 'docker build -t product-service:latest ./product-service'
            }
        }

        stage('Build Order Service') {
            steps {
                sh 'docker build -t order-service:latest ./order-service'
            }
        }

        stage('Build Information') {
            steps {
                echo 'All three Docker images built successfully!'
            }
        }
    }
}

