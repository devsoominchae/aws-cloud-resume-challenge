# AWS Cloud Resume Challenge
This is my attempt of the [cloud resume challenge in AWS](https://cloudresumechallenge.dev/docs/the-challenge/aws/). It is a static website of my resume hosted on AWS using its various services. Visit [here](https://resume.soominchae.net).

# Architecture
![Cloud Resume Challenge Architecture](images/cloud_resume_challenge.png)

# Tech Stacks
- S3
- CloudFront
- Certificate Manager
- API Gateway
- Lambda
- Dynamo DB
- Route 53
- EventBridge
- GitHub Actions

# Unique Features (Completed)
1. API Gateway

The original challenge did not include the API Gateway to invoke the Lambda function. However, Lambda function invoke URL does not work in ap-northeast-2. In order to resolve this, I added an API Gateway to invoke the Lambda function.

2. View count for today

# Additional features (Planning)
1. Graph of visit count history.
2. Total time users spent
3. Section for AI to answer questions about me (Amazon Comprehend)

   Q. Does Soo Min have experience in customer support?
   
   A. Yes. He worked as frontline support for Texas Tech University between November 2019 to April 2020. He supported troubleshooting network and OS issues.
   
4. View count per country
5. Keyword search feature for my skills. Summarize my experience and projects for each keyword.
