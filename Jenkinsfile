pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'devops-demo'
        CONTAINER_NAME = 'devops-demo'
        HOST_PORT = '9090'
        CONTAINER_PORT = '80'
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning GitHub repository...'
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    bat "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        
        stage('Stop Existing Container') {
            steps {
                echo 'Stopping and removing existing container...'
                script {
                    bat """
                        docker stop ${CONTAINER_NAME} || exit 0
                        docker rm ${CONTAINER_NAME} || exit 0
                    """
                }
            }
        }
        
        stage('Run Container') {
            steps {
                echo 'Running new Docker container...'
                script {
                    bat "docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${DOCKER_IMAGE}"
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline executed successfully! Application is running on port 9090.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
