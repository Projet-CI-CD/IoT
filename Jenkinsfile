pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Lint') {
      steps {
        sh 'npx eslint .'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}
