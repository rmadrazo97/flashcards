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
    stage('Test') {
        steps {
        echo 'Testing..'
        }
    }

 }
}