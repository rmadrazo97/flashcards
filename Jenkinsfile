pipeline {
 agent any

stages {
    stage('Unit Testing') {
        steps {
            dir("vuejs") {
                sh 'ls'
                sh "pwd"
                sh 'npm install'
                sh 'npm run test:unit'
            }
            
        }
    }
    stage('Integration Testing') {
        steps {
        sh 'newman run "https://api.getpostman.com/collections/b79c5642-b4dd-4568-8382-acbaf54eb4c0?apikey=PMAK-5fbf066208b57d0043f76084-2d794bfb49962958b8d759e7184fe2e4e7" \
        -e "https://api.getpostman.com/environments/8b0330bf-354f-4e73-b100-8274a13df502?apikey=PMAK-5fbf066208b57d0043f76084-2d794bfb49962958b8d759e7184fe2e4e7" \
        --reporters cli,junit \
        --reporter-junit-export "newman/report.xml"' 
        }
    }
    stage("Chrome"){
        steps{
                node('windows-node'){
                bat 'cd ../../../AutomationSystemTesting && mvn clean test'
            }
        }

    }
    stage("Deploy to Firebase"){
        steps{
            dir("vuejs") {
                sh "pwd"
                sh "npm run build"
            }
        }

    }
 }
 
 post {
        always {
            junit 'newman/report.xml'
        }
    }
}