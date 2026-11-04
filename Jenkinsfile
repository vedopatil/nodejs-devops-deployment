pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                sh 'sudo -n -u vedo /home/vedo/nodejs-devops-deployment/deploy.sh'
            }
        }

        stage('Verify') {
            steps {
                sh '''
                    for i in $(seq 1 10); do
                        if curl --fail --silent http://localhost/health; then
                            echo "Deployment successful"
                            exit 0
                        fi
                        sleep 2
                    done

                    echo "Deployment verification failed"
                    exit 1
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully.'
        }
        failure {
            echo 'CI/CD pipeline failed. Check the stage logs.'
        }
    }
}