pipeline {
    agent any
    
    tools {
        maven 'maven3'
    }

    stages {
        stage('Git checkout') {
            steps {
                git branch: 'main', credentialsId: 'DockerHub', url: 'https://github.com/abhim0055/SpringBoot-WebApplication.git'
            }
        }
        
        stage('build the job') {
            steps {
                sh "mvn compile"
            }
        }
        
        stage('Test the build') {
            steps {
                sh "mvn test"
            }
        }
        
        stage('sonar qube scanning') {
            steps {
                withSonarQubeEnv('sonar') {
                    sh "mvn sonar:sonar"
                }
            }
        }
        
        stage('Maven build') {
            steps {
                sh "mvn clean package"
            }
        }
        
        stage('Docker Build and Push') {
            steps {
                withDockerRegistry(credentialsId: 'DockerHub', url: 'https://index.docker.io/v1/') {
                sh '''
                docker build -t web-app . 
                docker tag web-app abhim0055/web-app:latest
                docker push abhim0055/web-app:latest
                '''
            }
        }
    }
    }
}
