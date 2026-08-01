
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Kiran4ukir/registration-project.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building HTML Registration Project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing HTML Registration Project...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Registration Project...'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }

        success {
            echo 'Build Successful!'
        }

        failure {
            echo 'Build Failed!'
        }
    }
}
