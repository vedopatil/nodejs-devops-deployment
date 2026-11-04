stage('Verify') {
    steps {
        sh '''
            for attempt in $(seq 1 10); do
                if curl --fail --silent http://localhost/health; then
                    echo "Application health check passed"
                    exit 0
                fi

                echo "Waiting for application... ($attempt/10)"
                sleep 2
            done

            echo "Application failed health check"
            exit 1
        '''
    }
}