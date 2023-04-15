def email_recipient = "xxx@xxx.com"

pipeline {
    agent {
        label "general"
    }

    options {
        timestamps()
        ansiColor('xterm')
        preserveStashes(buildCount: 10)
        disableConcurrentBuilds()
    }

    environment {
        DOCKER_BUILDKIT = 1
        BUILDKIT_PROGRESS = "plain"
        AWS_DEFAULT_REGION = "us-east-1"
        IMAGE_NAME = "cms-test"
    }

    stages {
        stage('Build docker image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Tests and static checks') {
            parallel {
                stage('Compiles without errors') {
                    steps {
                        echo "Checking for typescript errors"
                        sh "docker run --rm ${IMAGE_NAME}:latest tsc"
                    }
                }

                stage('Formatting correctness') {
                    steps {
                        echo "Checking if code had been properly reformatted with prettier"
                        sh "docker run --rm ${IMAGE_NAME}:latest format:check"
                    }
                }

                stage('ESLint errors') {
                    steps {
                        echo "Checking if there are any unaddressed ESLint errors"
                        sh "docker run --rm ${IMAGE_NAME}:latest lint"
                    }
                }

                stage('Unit tests') {
                    steps {
                        echo "Running unit tests"
                        sh "docker run --rm ${IMAGE_NAME}:latest test:unit"
                    }
                }

                stage('Build storybook') {
                    steps {
                        echo "Building storybook"
                        sh "docker run --rm ${IMAGE_NAME}:latest build-storybook"
                    }
                }

                stage('Packages without errors') {
                    steps {
                        echo "Checking package"
                        sh "docker run --rm ${IMAGE_NAME}:latest package"
                    }
                }
            }
        }
    }


    post {
        always {
            script {
                currentBuild.result = currentBuild.result ?: 'Success'
                notifyBitbucket()
            }
        }
        success {
            deleteDir()
            emailext(
                    subject: "Jenkins build succeeded",
                    body: """
                        <p>Success: <b>${env.JOB_BASE_NAME} [${env.BUILD_NUMBER}]</b></p>
                    """,
                    mimeType: "text/html",
                    to: email_recipient,
                    recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']]
            )
        }
        failure {
            emailext(
                    subject: "Jenkins build failed: ${env.JOB_BASE_NAME} - ${currentBuild.displayName} [${env.BUILD_NUMBER}]",
                    body: """
                        <p>Failure: <b>${env.JOB_BASE_NAME} [${env.BUILD_NUMBER}]</b></p>
                        <p>Check console output <a href='${env.BUILD_URL}'>here</a> or in the attachment.</p>
                    """,
                    mimeType: "text/html",
                    to: email_recipient,
                    attachLog: true,
                    compressLog: true,
                    recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']]
            )
        }
    }
}