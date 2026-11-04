pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/vedopatil/nodejs-devops-deployment.git'
            }
        }

        stage('Deploy') {
            steps {
                sh 'sudo -u vedo /home/vedo/nodejs-devops-deployment/deploy.sh'
            }
        }

        stage('Verify') {
            steps {
                sh 'curl --fail http://localhost:3000/health'
            }
        }
    }
}