pipeline {
    agent any
    
    tools {
        nodejs 'node1'
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-auth', url: 'https://github.com/abhim0055/Covid19-ReactApp'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                   
            }
        }
        
        stage('Build the artifact') {
            steps {
                sh 'npm run build'
                   
            }
        }
}
}
