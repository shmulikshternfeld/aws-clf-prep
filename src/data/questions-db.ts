import type { Question } from './types';

export const questions: Question[] = [
    {
        id: "q1",
        domain: "Cloud Concepts",
        text: "A startup company is currently hosting its infrastructure on-premises and wants to migrate to the AWS Cloud to benefit from the ability to trade capital expense for variable expense. Which benefit of the AWS Cloud does this describe?",
        options: [
            "High Availability",
            "Economies of scale",
            "Pay-as-you-go pricing",
            "Elasticity"
        ],
        correctAnswer: 2,
        explanation: "Pay-as-you-go pricing allows you to trade capital expense (fixed costs like data centers and servers) for variable expense (paying only for what you use). This is a core benefit of the AWS Cloud."
    },
    {
        id: "q2",
        domain: "Security and Compliance",
        text: "A company needs to manage the access keys and secret access keys for its developers. Which AWS service should the company use to handle these credentials securely?",
        options: [
            "AWS IAM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS STS"
        ],
        correctAnswer: 0,
        explanation: "AWS Identity and Access Management (IAM) is the service used to manage access to AWS services and resources securely. You use IAM to create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. Managing access keys is a core function of IAM Users."
    },
    {
        id: "q3",
        domain: "Cloud Technology and Services",
        text: "Reviewing the current architecture, a Solutions Architect notices that a web application running on Amazon EC2 instances encounters performance issues during peak hours. The traffic is unpredictable. Which AWS service should be used to automatically distribute incoming application traffic across multiple EC2 instances?",
        options: [
            "Amazon Auto Scaling",
            "Amazon Route 53",
            "Elastic Load Balancing (ELB)",
            "Amazon CloudFront"
        ],
        correctAnswer: 2,
        explanation: "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. This balances the load."
    },
    {
        id: "q4",
        domain: "Billing, Pricing, and Support",
        text: "A company wants to receive alerts when their AWS costs exceed a certain threshold. Which AWS tool should they use to set up these notifications?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Cost and Usage Report",
            "AWS Trusted Advisor"
        ],
        correctAnswer: 1,
        explanation: "AWS Budgets allows you to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount."
    },
    {
        id: "q5",
        domain: "Cloud Technology and Services",
        text: "A developer wants to deploy code to a serverless environment where they do not need to manage the underlying infrastructure/servers. Which AWS service should they use?",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon ECS",
            "Elastic Beanstalk"
        ],
        correctAnswer: 1,
        explanation: "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume."
    },
    {
        id: "q6",
        domain: "Cloud Concepts",
        text: "Which pillar of the AWS Well-Architected Framework focuses on the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures?",
        options: [
            "Performance Efficiency",
            "Operational Excellence",
            "Reliability",
            "Security"
        ],
        correctAnswer: 1,
        explanation: "The Operational Excellence pillar focuses on running and monitoring systems to deliver business value, and continually improving processes and procedures. Key topics include automating changes, responding to events, and defining standards to manage daily operations."
    },
    {
        id: "q7",
        domain: "Security and Compliance",
        text: "Which AWS service effectively protects against Distributed Denial of Service (DDoS) attacks for applications running on AWS?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "Amazon Inspector"
        ],
        correctAnswer: 1,
        explanation: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield Standard is automatically enabled for all AWS customers."
    },
    {
        id: "q8",
        domain: "Cloud Technology and Services",
        text: "A company requires a relational database service that AUTOMATICALLY handles database patching, backups, and redundancy. Which service fits this requirement?",
        options: [
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon DynamoDB",
            "Amazon ElastiCache"
        ],
        correctAnswer: 0,
        explanation: "Amazon Relational Database Service (Amazon RDS) is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It handles routine database tasks such as provisioning, patching, backup, recovery, failure detection, and repair."
    },
    {
        id: "q9",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Support plan provides access to a Technical Account Manager (TAM)?",
        options: [
            "Basic",
            "Developer",
            "Business",
            "Enterprise"
        ],
        correctAnswer: 3,
        explanation: "Only the Enterprise Support plan includes access to a designated Technical Account Manager (TAM) to assist with architectural reviews and ongoing communication."
    },
    {
        id: "q10",
        domain: "Cloud Technology and Services",
        text: "Which AWS storage service provides highly scalable, durable, and secure object storage?",
        options: [
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3",
            "Amazon FSx"
        ],
        correctAnswer: 2,
        explanation: "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance."
    },
    {
        id: "q11",
        domain: "Cloud Concepts",
        text: "A company wants to deploy a new application in the AWS Cloud. They want to ensure that the application is deployed to multiple Availability Zones to ensure high availability. Which benefit of the AWS Cloud does this support?",
        options: [
            "Global Reach",
            "Reliability",
            "Security",
            "Cost Savings"
        ],
        correctAnswer: 1,
        explanation: "Reliability is the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues. Deploying to multiple AZs increases reliability."
    },
    {
        id: "q12",
        domain: "Security and Compliance",
        text: "Which AWS service allows you to create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources?",
        options: [
            "Amazon Cognito",
            "AWS IAM",
            "AWS STS",
            "AWS Organizations"
        ],
        correctAnswer: 1,
        explanation: "AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your users. Using IAM, you can create and manage AWS users and groups and use permissions to allow and deny their access to AWS resources."
    },
    {
        id: "q13",
        domain: "Cloud Technology and Services",
        text: "A user wants to store data in a key-value database. Which AWS service should they use?",
        options: [
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon DynamoDB",
            "Amazon Aurora"
        ],
        correctAnswer: 2,
        explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale."
    },
    {
        id: "q14",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool allows you to view your AWS costs and usage data in a graphical format?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Cost and Usage Report",
            "AWS Pricing Calculator"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time."
    },
    {
        id: "q15",
        domain: "Cloud Concepts",
        text: "What is the term for the ability to scale resources up or down based on demand?",
        options: [
            "Agility",
            "Elasticity",
            "Scalability",
            "Reliability"
        ],
        correctAnswer: 1,
        explanation: "Elasticity gives you the ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you want to do this automatically."
    },
    {
        id: "q16",
        domain: "Security and Compliance",
        text: "Which AWS service is used to protect your web applications from common web exploits?",
        options: [
            "AWS Shield",
            "AWS WAF",
            "Amazon GuardDuty",
            "Amazon Inspector"
        ],
        correctAnswer: 1,
        explanation: "AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources."
    },
    {
        id: "q17",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Support plan provides access to a database of common solutions and best practices?",
        options: [
            "Basic",
            "Developer",
            "Business",
            "Enterprise"
        ],
        correctAnswer: 0,
        explanation: "All AWS Support plans, including Basic, provide access to the AWS Trusted Advisor (for core checks), AWS Personal Health Dashboard, and documentation/whitepapers."
    },
    {
        id: "q18",
        domain: "Cloud Technology and Services",
        text: "A company needs to host a static website. Which AWS service is the most cost-effective and scalable solution?",
        options: [
            "Amazon EC2",
            "Amazon S3",
            "AWS Lambda",
            "Amazon RDS"
        ],
        correctAnswer: 1,
        explanation: "You can host a static website on Amazon S3. On a static website, individual web pages include static content. They might also contain client-side scripts."
    },
    {
        id: "q19",
        domain: "Cloud Concepts",
        text: "Which AWS Cloud benefit allows you to deploy your application in minutes?",
        options: [
            "Agility",
            "Elasticity",
            "Scalability",
            "Global Reach"
        ],
        correctAnswer: 0,
        explanation: "Agility allows you to quickly spin up resources as you need them, deploying hundreds or even thousands of servers in minutes."
    },
    {
        id: "q20",
        domain: "Security and Compliance",
        text: "Which AWS service is responsible for managing encryption keys?",
        options: [
            "AWS Secrets Manager",
            "AWS KMS",
            "AWS IAM",
            "AWS Certificate Manager"
        ],
        correctAnswer: 1,
        explanation: "AWS Key Management Service (AWS KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications."
    },
    {
        id: "q21",
        domain: "Cloud Technology and Services",
        text: "A company is migrating its on-premises database to AWS. The database is 50 TB in size. Which AWS service should they use to transfer this data most efficiently?",
        options: [
            "AWS Direct Connect",
            "AWS VPN",
            "AWS Snowball",
            "Amazon S3 Transfer Acceleration"
        ],
        correctAnswer: 2,
        explanation: "AWS Snowball is a petabyte-scale data transport solution that uses secure devices to transfer large amounts of data into and out of the AWS Cloud. It addresses common challenges with large-scale data transfers including high network costs, long transfer times, and security concerns."
    },
    {
        id: "q22",
        domain: "Billing, Pricing, and Support",
        text: "A customer wants to estimate the cost of running a new application on AWS. Which tool should they use?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Pricing Calculator",
            "AWS Cost and Usage Report"
        ],
        correctAnswer: 2,
        explanation: "The AWS Pricing Calculator allows you to configure a cost estimate that fits your unique business requirements."
    },
    {
        id: "q23",
        domain: "Cloud Concepts",
        text: "Which design principle implies that you should stop guessing your capacity needs?",
        options: [
            "Loose Coupling",
            "Scalability",
            "Disposable Resources",
            "Automation"
        ],
        correctAnswer: 1,
        explanation: "Stop guessing capacity needs. If you make a poor capacity decision, you might end up sitting on expensive idle resources or dealing with performance implications of limited capacity. With cloud computing, these problems go away."
    },
    {
        id: "q24",
        domain: "Security and Compliance",
        text: "Under the AWS Shared Responsibility Model, which of the following is the customer's responsibility?",
        options: [
            "Physical security of data centers",
            "Patching the host operating system",
            "Encryption of customer data",
            "Discarding failed hard drives"
        ],
        correctAnswer: 2,
        explanation: "Customers are responsible for security *in* the cloud, which includes encryption of data at rest and in transit, operating system patching (for EC2), firewall configuration, and account management."
    },
    {
        id: "q25",
        domain: "Cloud Technology and Services",
        text: "Which AWS service allows you to run Docker containers?",
        options: [
            "Amazon EC2 Application Registry",
            "Amazon ECS",
            "AWS Lambda",
            "Amazon EMR"
        ],
        correctAnswer: 1,
        explanation: "Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast container management service that makes it easy to run, stop, and manage Docker containers on a cluster."
    },
    {
        id: "q26",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps you optimize your AWS environment by providing recommendations on security, performance, and cost?",
        options: [
            "AWS Config",
            "AWS Trusted Advisor",
            "Amazon Inspector",
            "AWS CloudTrail"
        ],
        correctAnswer: 1,
        explanation: "AWS Trusted Advisor provides you with real-time guidance to help you provision your resources following AWS best practices."
    },
    {
        id: "q27",
        domain: "Cloud Concepts",
        text: "What is the difference between an Availability Zone and a Region?",
        options: [
            "A Region contains multiple Availability Zones.",
            "An Availability Zone contains multiple Regions.",
            "They are the same thing.",
            "A Region is a backup of an Availability Zone."
        ],
        correctAnswer: 0,
        explanation: "An AWS Region is a physical location in the world where we have multiple Availability Zones. Availability Zones consist of one or more discrete data centers."
    },
    {
        id: "q28",
        domain: "Security and Compliance",
        text: "Where can you find AWS compliance documentation and reports (like SOC 2, ISO 27001)?",
        options: [
            "AWS Artifact",
            "AWS Config",
            "AWS Secrets Manager",
            "Amazon Macie"
        ],
        correctAnswer: 0,
        explanation: "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS security and compliance reports and select online agreements."
    },
    {
        id: "q29",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is used to create a private network within the AWS Cloud?",
        options: [
            "AWS Direct Connect",
            "Amazon VPC",
            "AWS VPN",
            "Amazon Route 53"
        ],
        correctAnswer: 1,
        explanation: "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
    },
    {
        id: "q30",
        domain: "Billing, Pricing, and Support",
        text: "Which logical entity allows you to consolidate payment for multiple AWS accounts?",
        options: [
            "AWS IAM User",
            "AWS Organization",
            "AWS Budget",
            "Resource Group"
        ],
        correctAnswer: 1,
        explanation: "AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources. It offers consolidated billing features."
    },
    {
        id: "q31",
        domain: "Cloud Concepts",
        text: "Which is a benefit of edge locations in AWS?",
        options: [
            "They process data closer to the user to reduce latency.",
            "They provide backup for Regions.",
            "They are used only for storage.",
            "They are larger than Regions."
        ],
        correctAnswer: 0,
        explanation: "Edge locations are endpoints for AWS which are used for caching content. Typically, this consists of CloudFront, Amazon's Content Delivery Network (CDN). This reduces latency."
    },
    {
        id: "q32",
        domain: "Security and Compliance",
        text: "How can you protect your AWS root account?",
        options: [
            "Use it for daily tasks",
            "Enable Multi-Factor Authentication (MFA)",
            "Share the password with admins",
            "Create an access key for it"
        ],
        correctAnswer: 1,
        explanation: "You should enable Multi-Factor Authentication (MFA) on your root account to provide an extra layer of security. You should also avoid using the root account for daily tasks."
    },
    {
        id: "q33",
        domain: "Cloud Technology and Services",
        text: "Which AWS service allows you to decouple the components of a cloud application?",
        options: [
            "Amazon SQS",
            "Amazon EC2",
            "Amazon connect",
            "Amazon EBS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications."
    },
    {
        id: "q34",
        domain: "Billing, Pricing, and Support",
        text: "What is the most cost-effective EC2 purchasing option for a steady-state workload that will run for 3 years?",
        options: [
            "On-Demand Instances",
            "Spot Instances",
            "Reserved Instances (RI)",
            "Dedicated Hosts"
        ],
        correctAnswer: 2,
        explanation: "Reserved Instances provide you with a significant discount (up to 72%) compared to On-Demand instance pricing. They are best for steady-state usage."
    },
    {
        id: "q35",
        domain: "Cloud Technology and Services",
        text: "Which service can identify sensitive data such as PII in Amazon S3 buckets?",
        options: [
            "Amazon GuardDuty",
            "Amazon Macie",
            "AWS Shield",
            "AWS WAF"
        ],
        correctAnswer: 1,
        explanation: "Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS."
    },
    {
        id: "q36",
        domain: "Security and Compliance",
        text: "Which AWS service records API calls for your account and delivers log files to you?",
        options: [
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config",
            "AWS X-Ray"
        ],
        correctAnswer: 1,
        explanation: "AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records API calls."
    },
    {
        id: "q37",
        domain: "Cloud Concepts",
        text: "Moving from a traditional data center to AWS helps a company reduce what type of expense?",
        options: [
            "Variable expense",
            "Capital expense (CapEx)",
            "Operating expense (OpEx)",
            "Monthly subscription fees"
        ],
        correctAnswer: 1,
        explanation: "Cloud computing allows you to trade capital expenses (such as data centers and physical servers) for variable expenses and only pay for IT as you consume it."
    },
    {
        id: "q38",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed NoSQL database?",
        options: [
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon DynamoDB",
            "Amazon Aurora"
        ],
        correctAnswer: 2,
        explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, serverless, NoSQL database."
    },
    {
        id: "q39",
        domain: "Billing, Pricing, and Support",
        text: "Which tool helps you confirm that your resources configuration adheres to AWS best practices?",
        options: [
            "AWS Trusted Advisor",
            "Amazon Inspector",
            "AWS CloudTrail",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor is an online tool that provides you real time guidance to help you provision your resources following AWS best practices."
    },
    {
        id: "q40",
        domain: "Cloud Concepts",
        text: "Which model allows you to deploy applications to the cloud while keeping some data on-premises?",
        options: [
            "Private Cloud",
            "Public Cloud",
            "Hybrid Cloud",
            "Community Cloud"
        ],
        correctAnswer: 2,
        explanation: "A hybrid cloud connects infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud."
    },
    {
        id: "q41",
        domain: "Security and Compliance",
        text: "Which AWS Service acts as a firewall for your EC2 instances?",
        options: [
            "Network ACL",
            "Security Group",
            "Route Table",
            "Internet Gateway"
        ],
        correctAnswer: 1,
        explanation: "A security group acts as a virtual firewall for your EC2 instances to control incoming and outgoing traffic."
    },
    {
        id: "q42",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to send text and email messages from your applications?",
        options: [
            "Amazon SES",
            "Amazon SNS",
            "Amazon SQS",
            "Amazon Pinpoint"
        ],
        correctAnswer: 1,
        explanation: "Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication."
    },
    {
        id: "q43",
        domain: "Billing, Pricing, and Support",
        text: "What resource allows you to define a collection of AWS resources that share the same tags?",
        options: [
            "Resource Groups",
            "AWS Organizations",
            "Placement Groups",
            "Edge Locations"
        ],
        correctAnswer: 0,
        explanation: "You can use Resource Groups to organize your AWS resources. Resource groups make it easier to manage and automate tasks on large numbers of resources at one time."
    },
    {
        id: "q44",
        domain: "Cloud Concepts",
        text: "Which of the following is NOT a benefit of Cloud Computing?",
        options: [
            "Go global in minutes",
            "Stop spending money running and maintaining data centers",
            "Fixed monthly pricing",
            "Increase speed and agility"
        ],
        correctAnswer: 2,
        explanation: "Fixed monthly pricing is not a standard benefit. Instead, AWS offers Pay-as-you-go pricing, where you pay only for what you use (Variable Expense)."
    },
    {
        id: "q45",
        domain: "Security and Compliance",
        text: "What is the safest way to give an application running on EC2 permissions to access an S3 bucket?",
        options: [
            "Store AWS credentials in the code",
            "Store AWS credentials in a file on the instance",
            "Attach an IAM Role to the EC2 instance",
            "Create an IAM user for the application"
        ],
        correctAnswer: 2,
        explanation: "You should attach an IAM role to an EC2 instance. The applications running on the instance can then use the role's temporary security credentials to access AWS resources."
    },
    {
        id: "q46",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is best suited for big data processing using frameworks like Apache Spark and Hadoop?",
        options: [
            "Amazon EMR",
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue"
        ],
        correctAnswer: 0,
        explanation: "Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Hadoop, Apache Spark, Apache Hive, etc."
    },
    {
        id: "q47",
        domain: "Billing, Pricing, and Support",
        text: "Which component of the AWS Global Infrastructure consists of one or more discrete data centers with redundant power, networking, and connectivity?",
        options: [
            "Region",
            "Edge Location",
            "Availability Zone",
            "Local Zone"
        ],
        correctAnswer: 2,
        explanation: "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region."
    },
    {
        id: "q48",
        domain: "Cloud Technology and Services",
        text: "A developer needs to monitor the operational health of their entire AWS application stack. Which service should they use?",
        options: [
            "AWS X-Ray",
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config"
        ],
        correctAnswer: 1,
        explanation: "Amazon CloudWatch provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health."
    },
    {
        id: "q49",
        domain: "Cloud Concepts",
        text: "Which perspective of the AWS Cloud Adoption Framework (CAF) focuses on recovery models and business continuity?",
        options: [
            "Business Perspective",
            "People Perspective",
            "Operations Perspective",
            "Security Perspective"
        ],
        correctAnswer: 2,
        explanation: "The Operations Perspective focuses on how to operate and recover IT workloads to meet the requirements of your business stakeholders."
    },
    {
        id: "q51",
        domain: "Security and Compliance",
        text: "Which AWS service is used to centralize, manage, and audit user permissions across multiple AWS accounts?",
        options: [
            "AWS IAM",
            "AWS Directory Service",
            "AWS Organizations",
            "AWS SSO (IAM Identity Center)"
        ],
        correctAnswer: 3,
        explanation: "AWS IAM Identity Center (formerly AWS SSO) helps you securely create or connect your workforce identities and manage their access centrally across AWS accounts and applications."
    },
    {
        id: "q52",
        domain: "Cloud Technology and Services",
        text: "A company needs to execute code in response to a specific change in data in an Amazon DynamoDB table. Which service should they use?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "Amazon ECS",
            "AWS Step Functions"
        ],
        correctAnswer: 0,
        explanation: "You can use AWS Lambda to process triggers from various AWS services, including updates to Amazon DynamoDB tables (via DynamoDB Streams)."
    },
    {
        id: "q53",
        domain: "Billing, Pricing, and Support",
        text: "Which bucket policy would you use to grant read-only permission to an object in S3 to the public?",
        options: [
            "Grant s3:GetObject to Principal: *",
            "Grant s3:PutObject to Principal: *",
            "Grant s3:ListBucket to Principal: AWS Account ID",
            "Grant s3:DeleteObject to Principal: *"
        ],
        correctAnswer: 0,
        explanation: "To grant public read access, you would use a Bucket Policy that allows the s3:GetObject action for the Principal '*' (everyone)."
    },
    {
        id: "q54",
        domain: "Cloud Concepts",
        text: "Which of the following describes the ability of a system to remain operational even if some of its components fail?",
        options: [
            "Fault Tolerance",
            "Scalability",
            "Elasticity",
            "Compliance"
        ],
        correctAnswer: 0,
        explanation: "Fault tolerance is the property that enables a system to continue operating properly in the event of the failure of (or one or more faults within) some of its components."
    },
    {
        id: "q55",
        domain: "Security and Compliance",
        text: "Which service allows you to assess, audit, and evaluate the configurations of your AWS resources?",
        options: [
            "AWS Config",
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It continuously monitors and records your AWS resource configurations."
    },
    {
        id: "q56",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed file system that is compatible with the Network File System (NFS) protocol?",
        options: [
            "Amazon EFS",
            "Amazon EBS",
            "Amazon S3",
            "Amazon FSx for Windows"
        ],
        correctAnswer: 0,
        explanation: "Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources."
    },
    {
        id: "q57",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS resource is used to identify who created an EC2 instance?",
        options: [
            "Resource Tags",
            "AWS CloudTrail Logs",
            "Security Groups",
            "Instance Metadata"
        ],
        correctAnswer: 0,
        explanation: "Tags are key-value pairs that help you manage, identify, organize, search for, and filter resources. You can create a 'CreatedBy' tag, though CloudTrail logs are the definitive audit source."
    },
    {
        id: "q58",
        domain: "Cloud Technology and Services",
        text: "Which AWS service allows you to easily setup, operate, and scale a search solution for your website or application?",
        options: [
            "Amazon OpenSearch Service",
            "Amazon Athena",
            "Amazon Kendra",
            "Amazon RDS"
        ],
        correctAnswer: 0,
        explanation: "Amazon OpenSearch Service (successor to Amazon Elasticsearch Service) makes it easy to perform interactive log analytics, real-time application monitoring, website search, and more."
    },
    {
        id: "q59",
        domain: "Security and Compliance",
        text: "Which feature of AWS IAM allows you to attach multiple policies to a single entity?",
        options: [
            "IAM Groups",
            "IAM Roles",
            "Inline Policies",
            "Managed Policies"
        ],
        correctAnswer: 0,
        explanation: "IAM Groups are collections of users. You can attach policies to a group, and all users in that group automatically get the permissions defined in those policies. This is a best practice for managing permissions for multiple users."
    },
    {
        id: "q60",
        domain: "Cloud Concepts",
        text: "Which cloud computing model gives the customer the most control over the operating system?",
        options: [
            "IaaS (Infrastructure as a Service)",
            "PaaS (Platform as a Service)",
            "SaaS (Software as a Service)",
            "FaaS (Function as a Service)"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure as a Service (IaaS) provides the highest level of flexibility and management control over your IT resources, including the operating system (e.g., Amazon EC2)."
    },
    {
        id: "q61",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is used to deploy applications using Chef or Puppet?",
        options: [
            "AWS OpsWorks",
            "AWS Elastic Beanstalk",
            "AWS CloudFormation",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet."
    },
    {
        id: "q62",
        domain: "Billing, Pricing, and Support",
        text: "What is the name of the Amazon S3 storage class optimized for data that can be recreated if lost?",
        options: [
            "S3 Standard",
            "S3 One Zone-IA",
            "S3 Intelligent-Tiering",
            "S3 Glacier"
        ],
        correctAnswer: 1,
        explanation: "S3 One Zone-IA is for data that is accessed less frequently, but requires rapid access when needed. Unlike other S3 Storage Classes which store data in a minimum of three Availability Zones (AZs), S3 One Zone-IA stores data in a single AZ and costs less. It is good for secondary backup copies or re-creatable data."
    },
    {
        id: "q63",
        domain: "Cloud Technology and Services",
        text: "Which AWS database service is capable of processing millions of requests per second for heavy-read applications?",
        options: [
            "Amazon ElastiCache",
            "Amazon Neptune",
            "Amazon RDs",
            "Amazon DocumentDB"
        ],
        correctAnswer: 0,
        explanation: "Amazon ElastiCache allows you to set up, run, and scale popular open-source compatible in-memory data stores (Redis or Memcached). It is used to improve application performance by retrieving data from fast, managed, in-memory caches."
    },
    {
        id: "q64",
        domain: "Security and Compliance",
        text: "Which service allows you to centrally manage security policies across your AWS Organization?",
        options: [
            "AWS Firewall Manager",
            "AWS Shield",
            "AWS WAF",
            "Amazon GuardDuty"
        ],
        correctAnswer: 0,
        explanation: "AWS Firewall Manager is a security management service which allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations."
    },
    {
        id: "q65",
        domain: "Cloud Concepts",
        text: "Which AWS pricing model is best for workloads with consistent, heavy usage where you can commit to a 1 or 3 year term?",
        options: [
            "Savings Plans",
            "On-Demand",
            "Spot Instances",
            "Dedicated Hosts"
        ],
        correctAnswer: 0,
        explanation: "Savings Plans is a flexible pricing model that offers low prices on EC2, Lambda, and Fargate usage, in exchange for a commitment to a consistent amount of usage (measured in $/hour) for a 1 or 3 year term."
    },
    {
        id: "q66",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to run infrastructure as code (IaC)?",
        options: [
            "AWS CloudFormation",
            "AWS CodeDeploy",
            "AWS CodeCommit",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code."
    },
    {
        id: "q67",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Free Tier category provides free services for 12 months after you sign up?",
        options: [
            "12-Months Free",
            "Always Free",
            "Trials",
            "Enterprise Free"
        ],
        correctAnswer: 0,
        explanation: "The '12-Months Free' tier offers a specific amount of usage for certain services for 12 months following your initial sign-up date."
    },
    {
        id: "q68",
        domain: "Security and Compliance",
        text: "Who has full access to all resources in an AWS account upon creation?",
        options: [
            "AWS Support",
            "AWS Root User",
            "IAM Admin",
            "Technical Account Manager"
        ],
        correctAnswer: 1,
        explanation: "When you first create an AWS account, you begin with a single sign-in identity that has complete access to all AWS services and resources in the account. This identity is called the AWS account root user."
    },
    {
        id: "q69",
        domain: "Cloud Technology and Services",
        text: "Which service allows users to interface with AWS services using a command-line shell?",
        options: [
            "AWS CLI",
            "AWS SDK",
            "AWS Management Console",
            "AWS CloudShell"
        ],
        correctAnswer: 3,
        explanation: "AWS CloudShell is a browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console to run AWS CLI commands."
    },
    {
        id: "q70",
        domain: "Cloud Concepts",
        text: "A web application has fluctuating traffic. During the weekend, traffic drops. The company wants to reduce costs during low traffic. Which AWS Cloud benefit is this?",
        options: [
            "Elasticity",
            "Reliability",
            "Security",
            "Performance"
        ],
        correctAnswer: 0,
        explanation: "Elasticity is the ability to acquire resources as you need them and release them when the demand drops, thus paying only for what you use."
    },
    {
        id: "q71",
        domain: "Cloud Technology and Services",
        text: "Which service can be used to track the progress of a migration of a portfolio of applications to AWS?",
        options: [
            "AWS Migration Hub",
            "AWS Datasync",
            "AWS Database Migration Service",
            "AWS Application Discovery Service"
        ],
        correctAnswer: 0,
        explanation: "AWS Migration Hub provides a single location to track the progress of application migrations across multiple AWS and partner solutions."
    },
    {
        id: "q72",
        domain: "Security and Compliance",
        text: "What is the AWS service that provides a dedicated network connection from your premises to AWS?",
        options: [
            "AWS VPN",
            "AWS Direct Connect",
            "AWS Transit Gateway",
            "Internet Gateway"
        ],
        correctAnswer: 1,
        explanation: "AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. This bypasses the public internet."
    },
    {
        id: "q73",
        domain: "Cloud Technology and Services",
        text: "Which AWS service enables you to distribute content to end users with low latency?",
        options: [
            "Amazon CloudFront",
            "Amazon Route 53",
            "AWS Global Accelerator",
            "Amazon S3"
        ],
        correctAnswer: 0,
        explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency."
    },
    {
        id: "q74",
        domain: "Billing, Pricing, and Support",
        text: "Which tool can be used to compare the cost of running your applications in an on-premises environment versus AWS?",
        options: [
            "AWS TCO Calculator",
            "AWS Pricing Calculator",
            "Cost Explorer",
            "Budgets"
        ],
        correctAnswer: 0,
        explanation: "The AWS Total Cost of Ownership (TCO) Calculator (or Migration Evaluator) helps you estimate the cost savings when using AWS and provides a detailed set of reports that can be used in executive presentations."
    },
    {
        id: "q75",
        domain: "Cloud Concepts",
        text: "Which of the following is a managed service that makes it easy to coordinate the components of distributed applications and microservices using visual workflows?",
        options: [
            "AWS Step Functions",
            "AWS Lambda",
            "Amazon SWF",
            "AWS Batch"
        ],
        correctAnswer: 0,
        explanation: "AWS Step Functions is a low-code, visual workflow service that developers use to build distributed applications, automate IT and business processes, and build data and machine learning pipelines using AWS services."
    },
    {
        id: "q76",
        domain: "Security and Compliance",
        text: "In the Shared Responsibility Model, who is responsible for the 'Security of the Cloud'?",
        options: [
            "AWS",
            "Customer",
            "Auditor",
            "Government"
        ],
        correctAnswer: 0,
        explanation: "AWS is responsible for 'Security of the Cloud' – protecting the infrastructure that runs all of the services offered in the AWS Cloud (Hardware, software, networking, and facilities)."
    },
    {
        id: "q77",
        domain: "Cloud Technology and Services",
        text: "Which service automates the discovery of applications on on-premise servers for migration?",
        options: [
            "AWS Application Discovery Service",
            "AWS Migration Hub",
            "AWS SMS",
            "AWS DMS"
        ],
        correctAnswer: 0,
        explanation: "AWS Application Discovery Service collects information about your on-premises data centers to help you plan your migration projects."
    },
    {
        id: "q78",
        domain: "Billing, Pricing, and Support",
        text: "Use this service to find and buy software, data, and services that run on AWS.",
        options: [
            "AWS Marketplace",
            "Amazon.com",
            "AWS Service Catalog",
            "AWS Partner Network"
        ],
        correctAnswer: 0,
        explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
        id: "q79",
        domain: "Cloud Concepts",
        text: "Which disaster recovery strategy has the lowest downtime?",
        options: [
            "Backup and Restore",
            "Pilot Light",
            "Warm Standby",
            "Multi-Site Active/Active"
        ],
        correctAnswer: 3,
        explanation: "Multi-Site Active/Active (Hot Standby) runs your workload simultaneously in multiple Regions. It offers the lowest Recovery Time Objective (RTO) and Recovery Point Objective (RPO) but is the most expensive."
    },
    {
        id: "q81",
        domain: "Security and Compliance",
        text: "Which AWS service enables you to manage access to multiple AWS accounts and business applications with a single set of credentials?",
        options: [
            "AWS IAM",
            "AWS IAM Identity Center (AWS SSO)",
            "Amazon Cognito",
            "AWS Directory Service"
        ],
        correctAnswer: 1,
        explanation: "AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create or connect your workforce identities and manage their access centrally across AWS accounts and applications."
    },
    {
        id: "q82",
        domain: "Billing, Pricing, and Support",
        text: "A company wants to check if their S3 buckets have public access enabled. Which AWS service provides this specific check?",
        options: [
            "AWS Trusted Advisor",
            "Amazon Inspector",
            "AWS CloudTrail",
            "Amazon GuardDuty"
        ],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor includes checking S3 bucket permissions to identify buckets that are publicly accessible."
    },
    {
        id: "q83",
        domain: "Cloud Technology and Services",
        text: "Which AWS compute service allows you to run code without provisioning or managing servers, and you pay only for the compute time you consume?",
        options: [
            "Amazon EC2",
            "Amazon Lightsail",
            "AWS Lambda",
            "AWS Fargate"
        ],
        correctAnswer: 2,
        explanation: "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers."
    },
    {
        id: "q84",
        domain: "Cloud Concepts",
        text: "Which AWS Cloud benefit allows a user to stop guessing capacity needs?",
        options: [
            "Global Reach",
            "Scalability",
            "High Availability",
            "Agility"
        ],
        correctAnswer: 1,
        explanation: "Scalability (often achieved via Elasticity) allows you to stop guessing your capacity needs. You can access as much or as little capacity as you need, and scale up and down as required."
    },
    {
        id: "q85",
        domain: "Security and Compliance",
        text: "Which AWS service gives you visibility and control over your AWS infrastructure and allows you to audit resource configurations?",
        options: [
            "AWS Config",
            "AWS CloudFormation",
            "AWS CloudTrail",
            "Amazon CloudWatch"
        ],
        correctAnswer: 0,
        explanation: "AWS Config provides a detailed view of the configuration of AWS resources in your AWS account. It allows you to assess, audit, and evaluate the configurations of your AWS resources."
    },
    {
        id: "q86",
        domain: "Cloud Technology and Services",
        text: "A developer wants to store structured data in a database that is highly available and scalable. The data schema is expected to change frequently. Which service is best?",
        options: [
            "Amazon RDS",
            "Amazon Aurora",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        correctAnswer: 2,
        explanation: "Amazon DynamoDB is a NoSQL database service that supports key-value and document data structures. It is schema-less, making it ideal for data with changing schemas."
    },
    {
        id: "q87",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS pricing feature allows you to receive a discount on On-Demand instances in exchange for a commitment to a specific amount of usage (measured in $/hour)?",
        options: [
            "Reserved Instances",
            "Spot Instances",
            "Savings Plans",
            "Dedicated Hosts"
        ],
        correctAnswer: 2,
        explanation: "Savings Plans offer a flexible pricing model that provides savings of up to 72% on your AWS compute usage, in exchange for a commitment to a consistent amount of usage (measured in $/hour) for a 1 or 3 year term."
    },
    {
        id: "q88",
        domain: "Security and Compliance",
        text: "Which AWS service allows you to rotate, manage, and retrieve database credentials, API keys, and other secrets?",
        options: [
            "AWS Secrets Manager",
            "AWS Systems Manager Parameter Store",
            "AWS KMS",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets."
    },
    {
        id: "q89",
        domain: "Cloud Technology and Services",
        text: "Which service can be used to host a static website that delivers HTML, CSS, JavaScript, and image files to your users?",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon S3",
            "Amazon EBS"
        ],
        correctAnswer: 2,
        explanation: "Amazon S3 allows you to host a static website without the need for a web server. You configure an S3 bucket for website hosting and upload your content."
    },
    {
        id: "q90",
        domain: "Cloud Concepts",
        text: "Which pillar of the AWS Well-Architected Framework focuses on the ability to prevent, and quickly recover from failures to meet business and customer demand?",
        options: [
            "Security",
            "Reliability",
            "Performance Efficiency",
            "Operational Excellence"
        ],
        correctAnswer: 1,
        explanation: "The Reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to. This includes the ability to operate and test the workload through its total lifecycle."
    },
    {
        id: "q91",
        domain: "Cloud Technology and Services",
        text: "A company is migrating to the AWS Cloud and wants to ensure that their data is stored geographically close to their customers to minimize latency. Which AWS infrastructure component should they consider?",
        options: [
            "Availability Zones",
            "Regions",
            "Edge Locations",
            "VPC"
        ],
        correctAnswer: 1,
        explanation: "AWS Regions are separate geographic areas. Choosing a Region close to your customers is the primary way to reduce latency for the majority of your traffic."
    },
    {
        id: "q92",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to visualize, understand, and manage your AWS costs and usage over time?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Pricing Calculator",
            "AWS Consolidated Billing"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time."
    },
    {
        id: "q93",
        domain: "Security and Compliance",
        text: "What is the primary responsibility of the customer when running an EC2 instance according to the Shared Responsibility Model?",
        options: [
            "Protecting the physical hardware",
            "Managing the hypervisor",
            "Patching the guest operating system",
            "Securing the network infrastructure"
        ],
        correctAnswer: 2,
        explanation: "For EC2 (IaaS), the customer is responsible for managing the guest operating system (including updates and security patches), any application software, and the configuration of the AWS-provided security group firewall."
    },
    {
        id: "q94",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is used to automate the deployment of resources using code?",
        options: [
            "AWS CodeDeploy",
            "AWS CloudFormation",
            "AWS CodePipeline",
            "AWS OpsWorks"
        ],
        correctAnswer: 1,
        explanation: "AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code."
    },
    {
        id: "q95",
        domain: "Cloud Concepts",
        text: "What is the benefit of 'Loose Coupling' in cloud architecture?",
        options: [
            "It enforces strict dependencies between components.",
            "It reduces the risk of cascading failures.",
            "It increases the complexity of the application.",
            "It allows for larger monolithic applications."
        ],
        correctAnswer: 1,
        explanation: "Loose coupling breaks a system into smaller, independent components. If one component fails or needs to be updated, it is less likely to affect the other components, reducing the risk of cascading failures."
    },
    {
        id: "q96",
        domain: "Security and Compliance",
        text: "Which AWS service is a threat detection service that continuously monitors for malicious activity and unauthorized behavior?",
        options: [
            "Amazon Inspector",
            "Amazon GuardDuty",
            "AWS WAF",
            "AWS Shield"
        ],
        correctAnswer: 1,
        explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data stored in Amazon S3."
    },
    {
        id: "q97",
        domain: "Cloud Technology and Services",
        text: "Which AWS storage service provides block-level storage volumes for use with EC2 instances?",
        options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon Glacier"
        ],
        correctAnswer: 1,
        explanation: "Amazon Elastic Block Store (Amazon EBS) provides block-level storage volumes for use with EC2 instances. EBS volumes behave like raw, unformatted block devices."
    },
    {
        id: "q98",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps companies migrate their on-premises databases to AWS with minimal downtime?",
        options: [
            "AWS Schema Conversion Tool",
            "AWS Database Migration Service (DMS)",
            "AWS Migration Hub",
            "AWS Server Migration Service"
        ],
        correctAnswer: 1,
        explanation: "AWS Database Migration Service (AWS DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime."
    },
    {
        id: "q99",
        domain: "Cloud Concepts",
        text: "Which cloud deployment model uses a mix of on-premises infrastructure and cloud services?",
        options: [
            "Public Cloud",
            "Private Cloud",
            "Hybrid Cloud",
            "Multi-Cloud"
        ],
        correctAnswer: 2,
        explanation: "A hybrid cloud is a computing environment that combines a public cloud and a private cloud (on-premises infrastructure) by allowing data and applications to be shared between them."
    },
    {
        id: "q100",
        domain: "Security and Compliance",
        text: "Which AWS service creates a secure, private connection between your on-premises network and the AWS Cloud without using the public internet?",
        options: [
            "AWS VPN",
            "AWS Direct Connect",
            "Amazon Connect",
            "AWS Global Accelerator"
        ],
        correctAnswer: 1,
        explanation: "AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable, bypassing the public internet."
    },
    {
        id: "q101",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to distribute incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones?",
        options: [
            "Amazon Route 53",
            "AWS Auto Scaling",
            "Elastic Load Balancing (ELB)",
            "Amazon CloudFront"
        ],
        correctAnswer: 2,
        explanation: "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions."
    },
    {
        id: "q102",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Support plan offers a response time of less than 15 minutes for business-critical system down events?",
        options: [
            "Developer",
            "Business",
            "Enterprise On-Ramp",
            "Enterprise"
        ],
        correctAnswer: 3,
        explanation: "The Enterprise Support plan offers a less than 15-minute response time for business-critical system down events."
    },
    {
        id: "q103",
        domain: "Security and Compliance",
        text: "Where can a user find the Amazon Machine Images (AMIs) that have been built and shared by the community?",
        options: [
            "AWS Marketplace",
            "Amazon EC2 Console",
            "AWS Artifact",
            "Amazon S3"
        ],
        correctAnswer: 0,
        explanation: "AWS Marketplace is a digital catalog that lists thousands of software listings, including AMIs, from independent software vendors and the community."
    },
    {
        id: "q104",
        domain: "Cloud Technology and Services",
        text: "A company wants to run a relational database without managing the OS or database engine patching. Which service should they use?",
        options: [
            "Amazon EC2 with MySQL installed",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        correctAnswer: 1,
        explanation: "Amazon Relational Database Service (Amazon RDS) is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud. AWS manages patching and backups."
    },
    {
        id: "q105",
        domain: "Cloud Concepts",
        text: "How does AWS assist users in achieving compliance with various regulations?",
        options: [
            "By verifying the customer's applications",
            "By providing features like AWS Artifact and compliance reports",
            "By managing all security settings for the user",
            "By taking full responsibility for all data"
        ],
        correctAnswer: 1,
        explanation: "AWS provides on-demand access to security and compliance reports through AWS Artifact, and offers services that are compliant with various global standards (e.g., PCI-DSS, HIPAA)."
    },
    {
        id: "q106",
        domain: "Security and Compliance",
        text: "Which service allows you to manage encryption keys and is integrated with many AWS services?",
        options: [
            "AWS Certificate Manager",
            "AWS Key Management Service (KMS)",
            "AWS Secrets Manager",
            "Amazon Macie"
        ],
        correctAnswer: 1,
        explanation: "AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications."
    },
    {
        id: "q107",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is used to supply data to Amazon CloudWatch for monitoring?",
        options: [
            "AWS CloudTrail",
            "Amazon SNS",
            "Various AWS resources and the CloudWatch Agent",
            "AWS Config"
        ],
        correctAnswer: 2,
        explanation: "Amazon CloudWatch receives metrics from various AWS services (like EC2, RDS, etc.) and can also collect custom metrics and logs via the CloudWatch Agent installed on instances."
    },
    {
        id: "q108",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool compares the cost of your applications in an on-premises environment to AWS?",
        options: [
            "AWS Cost Explorer",
            "AWS Total Cost of Ownership (TCO) Calculator",
            "AWS Budgets",
            "AWS Cost Notification"
        ],
        correctAnswer: 1,
        explanation: "The AWS TCO Calculator (now often referred to as Migration Evaluator) helps you estimate the cost savings when using AWS compared to an on-premises environment."
    },
    {
        id: "q109",
        domain: "Cloud Concepts",
        text: "Which of the following is a factor that determines the cost of an EC2 instance?",
        options: [
            "The name of the instance",
            "The Region where the instance is deployed",
            "The number of IAM users",
            "The VPC ID"
        ],
        correctAnswer: 1,
        explanation: "Pricing for AWS services, including EC2, can vary by Region due to different operational costs in different geographic locations."
    },
    {
        id: "q110",
        domain: "Security and Compliance",
        text: "Which service protects against common web exploits that could affect application availability?",
        options: [
            "Amazon VPC",
            "AWS WAF",
            "AWS Direct Connect",
            "Amazon Route 53"
        ],
        correctAnswer: 1,
        explanation: "AWS WAF is a web application firewall that helps protect your web applications against common web exploits that might affect availability, compromise security, or consume excessive resources."
    },
    {
        id: "q111",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources?",
        options: [
            "AWS Regions",
            "Amazon Virtual Private Cloud (VPC)",
            "Security Groups",
            "AWS Availability Zones"
        ],
        correctAnswer: 1,
        explanation: "Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
    },
    {
        id: "q112",
        domain: "Billing, Pricing, and Support",
        text: "A user has an AWS account with multiple S3 buckets. Which component helps to organize and manage costs associated with these buckets?",
        options: [
            "Resource Groups",
            "Cost Allocation Tags",
            "AWS Organizations",
            "AWS IAM"
        ],
        correctAnswer: 1,
        explanation: "Cost Allocation Tags are key-value pairs that you can apply to resources like S3 buckets. Once activated, they appear in your cost allocation report, allowing you to categorize and track your AWS costs."
    },
    {
        id: "q113",
        domain: "Cloud Concepts",
        text: "What does the concept of 'high availability' mean in AWS?",
        options: [
            "The system is accessible from anywhere in the world.",
            "The system can increase resources based on demand.",
            "The system is designed to operate continuously without failure for a long time.",
            "The system costs less as usage increases."
        ],
        correctAnswer: 2,
        explanation: "High Availability refers to the ability of a system to remain accessible and operational for a high percentage of time, often achieved through redundancy."
    },
    {
        id: "q114",
        domain: "Security and Compliance",
        text: "Which AWS service is used to create users and assign them permissions?",
        options: [
            "AWS IAM",
            "Amazon Inspector",
            "AWS Config",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS Identity and Access Management (IAM) is the service used to manage access to AWS services. You use it to create users, groups, and roles, and assign permissions to them."
    },
    {
        id: "q115",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run containerized applications on a cluster of EC2 instances?",
        options: [
            "AWS Lambda",
            "Amazon Elastic Container Service (ECS)",
            "Amazon Lightsail",
            "AWS OpsWorks"
        ],
        correctAnswer: 1,
        explanation: "Amazon ECS is a fully managed container orchestration service that allows you to easily run, stop, and manage Docker containers on a cluster."
    },
    {
        id: "q116",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to set custom cost and usage budgets and receive alerts?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Cost and Usage Report",
            "AWS Trusted Advisor"
        ],
        correctAnswer: 1,
        explanation: "AWS Budgets allows you to set custom budgets to track your cost and usage from the simplest to the most complex use cases. You can choose to be alerted by email or SNS topic."
    },
    {
        id: "q117",
        domain: "Cloud Concepts",
        text: "Which of the following is an example of 'Variable Expense' in AWS?",
        options: [
            "Paying a fixed monthly fee for a data center",
            "Buying physical servers upfront",
            "Paying for EC2 instances per second",
            "Licensing software for a year"
        ],
        correctAnswer: 2,
        explanation: "Paying for EC2 instances per second of usage is a variable expense. You only pay for the compute resources you actually consume."
    },
    {
        id: "q118",
        domain: "Security and Compliance",
        text: "A company wants to block a specific IP address from accessing their EC2 instances. Which VPC component should they use?",
        options: [
            "Security Groups",
            "Network Access Control List (Network ACL)",
            "Internet Gateway",
            "Route Table"
        ],
        correctAnswer: 1,
        explanation: "Network ACLs act as a firewall for associated subnets, controlling both inbound and outbound traffic at the subnet level. They support both allow and deny rules (Security groups only support allow rules)."
    },
    {
        id: "q119",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed, scalable, and secure data warehouse service?",
        options: [
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon DynamoDB",
            "Amazon Athena"
        ],
        correctAnswer: 1,
        explanation: "Amazon Redshift is the most popular and fastest cloud data warehouse. It allows you to analyze all your data using standard SQL and your existing Business Intelligence (BI) tools."
    },
    {
        id: "q120",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps existing customers plan for future costs of migrating new workloads to AWS?",
        options: [
            "AWS Pricing Calculator",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "The AWS Pricing Calculator allows you to build a cost estimate for your specific use cases and workloads before you build them."
    },
    {
        id: "q121",
        domain: "Cloud Concepts",
        text: "Which is a benefit of using AWS Global Infrastructure?",
        options: [
            "It automatically manages your application code.",
            "It provides lower latency to international users.",
            "It removes the need for security.",
            "It is free of charge."
        ],
        correctAnswer: 1,
        explanation: "The AWS Global Infrastructure (Regions, AZs, Edge Locations) allows you to deploy applications closer to your end users, reducing latency and improving the user experience."
    },
    {
        id: "q122",
        domain: "Security and Compliance",
        text: "Which AWS service provides SSL/TLS certificates for use with AWS Elastic Load Balancers?",
        options: [
            "AWS IAM",
            "AWS Certificate Manager (ACM)",
            "AWS KMS",
            "AWS Artifact"
        ],
        correctAnswer: 1,
        explanation: "AWS Certificate Manager (ACM) handles the complexity of creating, storing, and renewing public and private SSL/TLS certificates and keys that protect your AWS websites and applications."
    },
    {
        id: "q123",
        domain: "Cloud Technology and Services",
        text: "Which storage service is best suited for storing archival data that is rarely accessed?",
        options: [
            "Amazon S3 Standard",
            "Amazon S3 Glacier Deep Archive",
            "Amazon EFS",
            "Amazon EBS"
        ],
        correctAnswer: 1,
        explanation: "Amazon S3 Glacier Deep Archive is the lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year."
    },
    {
        id: "q124",
        domain: "Billing, Pricing, and Support",
        text: "What does the AWS Personal Health Dashboard provide?",
        options: [
            "Performance metrics for EC2",
            "Alerts and guidance when AWS is experiencing events that may affect you",
            "Billing alarms",
            "Security vulnerability scans"
        ],
        correctAnswer: 1,
        explanation: "The AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you. It gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources."
    },
    {
        id: "q125",
        domain: "Cloud Concepts",
        text: "Which of the following describes 'Agility' in the cloud?",
        options: [
            "The ability to trade capital expense for variable expense.",
            "The speed at which you can develop and deploy applications.",
            "The ability to recover from disasters.",
            "The ability to secure data."
        ],
        correctAnswer: 1,
        explanation: "Agility refers to the speed at which you can develop, deploy, and experiment. In the cloud, you can spin up resources in minutes, allowing you to innovate faster."
    },
    {
        id: "q126",
        domain: "Security and Compliance",
        text: "Which AWS service uses machine learning to discover, classify, and protect sensitive data in Amazon S3?",
        options: [
            "Amazon GuardDuty",
            "Amazon Inspector",
            "Amazon Macie",
            "AWS Shield"
        ],
        correctAnswer: 2,
        explanation: "Amazon Macie is a fully managed data security and data privacy service that uses machine learning to discover and protect your sensitive data (like PII) in AWS."
    },
    {
        id: "q127",
        domain: "Cloud Technology and Services",
        text: "Which AWS service provides a fully managed virtual desktop infrastructure (VDI)?",
        options: [
            "Amazon Connect",
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "AWS Cloud9"
        ],
        correctAnswer: 1,
        explanation: "Amazon WorkSpaces is a fully managed, secure Desktop-as-a-Service (DaaS) solution. You can use Amazon WorkSpaces to provision either Windows or Linux desktops in just a few minutes."
    },
    {
        id: "q128",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps you model and visualize your AWS resources?",
        options: [
            "AWS CloudFormation",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS Workload Discovery"
        ],
        correctAnswer: 3,
        explanation: "AWS Workload Discovery (formerly AWS Perspective) is a tool that helps you visualize your workloads. However, in the context of standard exam questions, the answer might often point to 'AWS Application Discovery Service' for migration or 'AWS Systems Manager' for inventory. For visualization specifically, AWS Workload Discovery is the modern answer, but 'CloudFormation Designer' is also a valid visual tool."
    },
    {
        id: "q129",
        domain: "Cloud Concepts",
        text: "Which pricing model allows you to pay for compute capacity by the hour with no long-term commitments?",
        options: [
            "Reserved Instances",
            "On-Demand Instances",
            "Spot Instances",
            "Dedicated Hosts"
        ],
        correctAnswer: 1,
        explanation: "On-Demand Instances let you pay for compute capacity by the hour or second with no long-term commitments or upfront payments."
    },
    {
        id: "q131",
        domain: "Security and Compliance",
        text: "Which AWS service allows you to create private connectivity between VPCs and supported AWS services without exposing traffic to the public internet?",
        options: [
            "AWS PrivateLink",
            "AWS Direct Connect",
            "AWS VPN",
            "Internet Gateway"
        ],
        correctAnswer: 0,
        explanation: "AWS PrivateLink provides private connectivity between VPCs, AWS services, and your on-premises networks, without exposing your traffic to the public internet."
    },
    {
        id: "q132",
        domain: "Cloud Concepts",
        text: "What is the term for the financial model where you pay for services as you use them?",
        options: [
            "Upfront Cost",
            "Pay-as-you-go",
            "Fixed Rate",
            "Tiered Pricing"
        ],
        correctAnswer: 1,
        explanation: "Pay-as-you-go describes the cloud computing model where you pay only for the resources you consume, with no long-term contracts or complex licensing."
    },
    {
        id: "q133",
        domain: "Cloud Technology and Services",
        text: "Which AWS service allows you to capture and process streaming data in real-time?",
        options: [
            "Amazon Kinesis",
            "Amazon SQS",
            "Amazon SNS",
            "AWS Glue"
        ],
        correctAnswer: 0,
        explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information."
    },
    {
        id: "q134",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool provides a unified user interface so you can view operational data from multiple AWS services?",
        options: [
            "AWS Systems Manager",
            "AWS OpsWorks",
            "AWS Config",
            "AWS CloudTrail"
        ],
        correctAnswer: 0,
        explanation: "AWS Systems Manager allows you to centralize operational data from multiple AWS services and automate tasks across your AWS resources."
    },
    {
        id: "q135",
        domain: "Security and Compliance",
        text: "Which of the following is a managed DDoS protection service?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "Amazon Inspector"
        ],
        correctAnswer: 1,
        explanation: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS."
    },
    {
        id: "q136",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is used to deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications?",
        options: [
            "AWS Elastic Beanstalk",
            "Amazon EC2",
            "AWS CloudFormation",
            "Amazon ECS"
        ],
        correctAnswer: 0,
        explanation: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services. You simply upload your code and Elastic Beanstalk automatically handles the deployment."
    },
    {
        id: "q137",
        domain: "Cloud Concepts",
        text: "What is the key difference between a Region and an Edge Location?",
        options: [
            "Regions are used for computing, Edge Locations are used for caching.",
            "Regions are global, Edge Locations are local.",
            "They are the same.",
            "Edge Locations contain Regions."
        ],
        correctAnswer: 0,
        explanation: "Regions are geographic areas with multiple Availability Zones used to host applications and data. Edge Locations are endpoints for AWS used for caching content via CloudFront to reduce latency."
    },
    {
        id: "q138",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service allows you to consolidate billing for multiple accounts?",
        options: [
            "AWS Organizations",
            "AWS Cost Explorer",
            "AWS CloudTrail",
            "AWS IAM"
        ],
        correctAnswer: 0,
        explanation: "AWS Organizations offers consolidated billing, which allows you to view, manage, and pay bills for multiple AWS accounts from a central location."
    },
    {
        id: "q139",
        domain: "Security and Compliance",
        text: "Which AWS service manages the authentication of users for mobile and web applications?",
        options: [
            "AWS IAM",
            "Amazon Cognito",
            "AWS Directory Service",
            "AWS SSO"
        ],
        correctAnswer: 1,
        explanation: "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily."
    },
    {
        id: "q140",
        domain: "Cloud Technology and Services",
        text: "Which AWS service provides high-performance file storage that is optimized for high-performance computing (HPC) workloads?",
        options: [
            "Amazon FSx for Lustre",
            "Amazon EFS",
            "Amazon S3",
            "Amazon EBS"
        ],
        correctAnswer: 0,
        explanation: "Amazon FSx for Lustre is a fully managed service that provides cost-effective, high-performance, scalable storage for compute workloads, such as machine learning and high performance computing (HPC)."
    },
    {
        id: "q141",
        domain: "Cloud Concepts",
        text: "Which AWS design principle helps to reduce Inter-dependencies between application components?",
        options: [
            "Loose Coupling",
            "Scalability",
            "Elasticity",
            "High Availability"
        ],
        correctAnswer: 0,
        explanation: "Loose coupling ensures that IT systems are designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components."
    },
    {
        id: "q142",
        domain: "Security and Compliance",
        text: "Which AWS service checks for security vulnerabilities and deviations from best practices in your EC2 instances?",
        options: [
            "Amazon Inspector",
            "Amazon GuardDuty",
            "AWS Trusted Advisor",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS locally (on EC2 instances)."
    },
    {
        id: "q143",
        domain: "Cloud Technology and Services",
        text: "Which AWS service allows you to run Microsoft Windows Server on AWS?",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon ECS",
            "Amazon EKS"
        ],
        correctAnswer: 0,
        explanation: "Amazon EC2 supports running Microsoft Windows Server instances. You can launch Windows instances using standard AMIs."
    },
    {
        id: "q144",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS pricing model can provide discounts starting at 10% for users who can commit to a one-year or three-year period?",
        options: [
            "Reserved Instances",
            "On-Demand",
            "Spot Instances",
            "Dedicated Hosts"
        ],
        correctAnswer: 0,
        explanation: "Reserved Instances (Standard and Convertible) provide significant savings compared to On-Demand pricing for a 1-year or 3-year term commitment."
    },
    {
        id: "q145",
        domain: "Cloud Concepts",
        text: "Which AWS benefit refers to the ability to rapidly develop, test, and launch software applications?",
        options: [
            "Agility",
            "Reliability",
            "Elasticity",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Agility in the cloud refers to the speed and ease with which you can innovate, experiment, and deploy new applications."
    },
    {
        id: "q146",
        domain: "Security and Compliance",
        text: "Which AWS service lets you create and manage identities for your workforce or external applications?",
        options: [
            "AWS IAM Identity Center",
            "AWS IAM",
            "Amazon Cognito",
            "AWS Directory Service"
        ],
        correctAnswer: 2,
        explanation: "While IAM Identity Center is for workforce, Amazon Cognito is specifically designed for adding user sign-up/sign-in to YOUR mobile/web apps (external users/customers)."
    },
    {
        id: "q147",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is used to create and manage APIs?",
        options: [
            "Amazon API Gateway",
            "AWS AppSync",
            "AWS Lambda",
            "Amazon CloudFront"
        ],
        correctAnswer: 0,
        explanation: "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale."
    },
    {
        id: "q148",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool allows you to forecast your AWS costs?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Pricing Calculator",
            "AWS Bills"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer provides a forecasting feature that helps you estimate your future costs based on your historical usage."
    },
    {
        id: "q149",
        domain: "Cloud Concepts",
        text: "Which of the following is a responsibility of AWS under the Shared Responsibility Model?",
        options: [
            "Securing the physical data centers.",
            " encrypting data at rest.",
            "Managing user access.",
            "Patching the OS on EC2 instances."
        ],
        correctAnswer: 0,
        explanation: "AWS is responsible for 'Security OF the Cloud', which includes the physical security of data centers, hardware, and networking infrastructure."
    },
    {
        id: "q150",
        domain: "Security and Compliance",
        text: "Which AWS service allows you to enforce compliance with internal policies and regulatory standards?",
        options: [
            "AWS Config",
            "AWS CloudTrail",
            "AWS Artifact",
            "Amazon GuardDuty"
        ],
        correctAnswer: 0,
        explanation: "AWS Config enables you to assess, audit, and evaluate the configurations of your AWS resources, helping ensuring compliance with internal and external policies."
    },
    {
        id: "q151",
        domain: "Cloud Technology and Services",
        text: "Which service is best for orchestrating simple to complex data workflows?",
        options: [
            "AWS Data Pipeline",
            "AWS Glue",
            "AWS Step Functions",
            "Amazon Kinesis"
        ],
        correctAnswer: 0,
        explanation: "AWS Data Pipeline is a web service that helps you reliably process and move data between different AWS compute and storage services, as well as on-premises data sources. (Note: AWS Glue is for ETL, Step Functions for app workflows, though overlaps exist)."
    },
    {
        id: "q152",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS feature tags allows you to track costs by grouping expenses with a specific project or department?",
        options: [
            "Cost Allocation Tags",
            "Resource Groups",
            "AWS Organizations",
            "Budgets"
        ],
        correctAnswer: 0,
        explanation: "Cost Allocation Tags are used to organize and track your AWS costs. You can tag resources with a specific project code or department to see costs associated with that tag."
    },
    {
        id: "q153",
        domain: "Cloud Concepts",
        text: "What does the 'Scalability' benefit of the cloud imply?",
        options: [
            "The system can handle unlimited traffic.",
            "The system can grow or shrink in capacity to meet demand.",
            "The system is always available.",
            "The system is free."
        ],
        correctAnswer: 1,
        explanation: "Scalability is the ability of a system to accommodate larger workloads by adding resources (scaling up or out) or removing them when not needed."
    },
    {
        id: "q154",
        domain: "Security and Compliance",
        text: "Which AWS service provides a secure way to access your AWS resources from a web browser?",
        options: [
            "AWS Management Console",
            "AWS CLI",
            "AWS SDK",
            "AWS CloudShell"
        ],
        correctAnswer: 0,
        explanation: "The AWS Management Console is a web-based interface for accessing and managing AWS services."
    },
    {
        id: "q155",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to query data in S3 using SQL?",
        options: [
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon RDS",
            "AWS Glue"
        ],
        correctAnswer: 0,
        explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL."
    },
    {
        id: "q156",
        domain: "Billing, Pricing, and Support",
        text: "Which service alerts you when you are exceeding your free tier limits?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Trusted Advisor",
            "Billing Dashboard"
        ],
        correctAnswer: 0,
        explanation: "AWS Budgets can be configured to send you alerts when your usage exceeds the thresholds you define, including Free Tier limits."
    },
    {
        id: "q157",
        domain: "Cloud Concepts",
        text: "Which AWS Cloud benefit allows for potential lower variable costs?",
        options: [
            "Economies of Scale",
            "Reliability",
            "Security",
            "Global Reach"
        ],
        correctAnswer: 0,
        explanation: "By using cloud computing, you can achieve a lower variable cost than you can get on your own. Because usage from hundreds of thousands of customers is aggregated in the cloud, providers such as AWS can achieve higher economies of scale, which translates into lower pay-as-you-go prices."
    },
    {
        id: "q158",
        domain: "Security and Compliance",
        text: "Which service allows you to control access to your AWS services and resources?",
        options: [
            "AWS IAM",
            "AWS KMS",
            "Amazon Cognito",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS IAM is the primary service for controlling access to AWS resources. It allows you to create users and roles and define permissions."
    },
    {
        id: "q159",
        domain: "Cloud Technology and Services",
        text: "Which AWS service enables you to run applications without managing servers?",
        options: [
            "Serverless Computing (e.g., AWS Lambda)",
            "Amazon EC2",
            "Amazon Lightsail",
            "Amazon EKS"
        ],
        correctAnswer: 0,
        explanation: "Serverless computing services like AWS Lambda allow you to run code without provisioning or managing servers."
    },
    {
        id: "q160",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps you find and buy third-party software that runs on AWS?",
        options: [
            "AWS Marketplace",
            "AWS Partner Network",
            "Amazon.com",
            "AWS Service Catalog"
        ],
        correctAnswer: 0,
        explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
        id: "q161",
        domain: "Cloud Concepts",
        text: "What does 'Elasticity' allow you to do in the cloud?",
        options: [
            "Scale resources up and down automatically.",
            "Guarantee 100% uptime.",
            "Prevent all security attacks.",
            "Decrease latency to zero."
        ],
        correctAnswer: 0,
        explanation: "Elasticity is the ability to automatically add or remove resources to meet changing demand, ensuring you don't over-provision or under-provision."
    },
    {
        id: "q162",
        domain: "Security and Compliance",
        text: "Which AWS service enables you to create and manage security keys?",
        options: [
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager",
            "AWS IAM"
        ],
        correctAnswer: 0,
        explanation: "AWS KMS allows you to create and manage cryptographic keys and control their use across a wide range of AWS services."
    },
    {
        id: "q163",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is used to send email, SMS, and push notifications?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon SES",
            "Amazon Connect"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Notification Service (Amazon SNS) is a managed service that provides message delivery from publishers to subscribers (A2A and A2P), including email, SMS, and push notifications."
    },
    {
        id: "q164",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS support plan gives you access to a Concierge Support Team?",
        options: [
            "Enterprise",
            "Business",
            "Developer",
            "Basic"
        ],
        correctAnswer: 0,
        explanation: "The Enterprise Support plan includes access to a Concierge Support Team to assist with billing and account inquiries."
    },
    {
        id: "q165",
        domain: "Cloud Concepts",
        text: "Which AWS framework provides best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud?",
        options: [
            "AWS Well-Architected Framework",
            "AWS Cloud Adoption Framework",
            "AWS Shared Responsibility Model",
            "AWS Global Architect"
        ],
        correctAnswer: 0,
        explanation: "The AWS Well-Architected Framework helps cloud architects build secure, high-performing, resilient, and efficient infrastructure for their applications and workloads."
    },
    {
        id: "q166",
        domain: "Security and Compliance",
        text: "Which AWS service provides a dedicated network connection from your premises to AWS?",
        options: [
            "AWS Direct Connect",
            "AWS VPN",
            "Internet Gateway",
            "VPC Peering"
        ],
        correctAnswer: 0,
        explanation: "AWS Direct Connect enables you to establish a dedicated network connection from your premises to AWS, bypassing the public internet."
    },
    {
        id: "q167",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is used to create and manage virtual private clouds?",
        options: [
            "Amazon VPC",
            "AWS Direct Connect",
            "Amazon Route 53",
            "AWS VPN"
        ],
        correctAnswer: 0,
        explanation: "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
    },
    {
        id: "q168",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS pricing model is most cost-effective for applications with predictable usage?",
        options: [
            "Reserved Instances",
            "On-Demand",
            "Spot Instances",
            "Pay-as-you-go"
        ],
        correctAnswer: 0,
        explanation: "Reserved Instances offer a significant discount (up to 72%) compared to On-Demand pricing and are best suited for steady-state workloads with predictable usage."
    },
    {
        id: "q169",
        domain: "Cloud Concepts",
        text: "Which of the following is an advantage of cloud computing over on-premises?",
        options: [
            "No need to guess capacity.",
            "Complete physical control of hardware.",
            "Higher upfront costs.",
            "Require manual updates."
        ],
        correctAnswer: 0,
        explanation: "One of the main advantages of cloud computing is the ability to stop guessing capacity needs. You can access as much or as little capacity as you need, unlike on-premises where you have to provision for peak load."
    },
    {
        id: "q170",
        domain: "Security and Compliance",
        text: "Which AWS service helps protect your applications against DDoS attacks?",
        options: [
            "AWS Shield",
            "AWS WAF",
            "Amazon Inspector",
            "Amazon GuardDuty"
        ],
        correctAnswer: 0,
        explanation: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS."
    },
    {
        id: "q171",
        domain: "Cloud Technology and Services",
        text: "Which AWS service allows you to run code without provisioning or managing servers?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "Amazon ECS",
            "Amazon EKS"
        ],
        correctAnswer: 0,
        explanation: "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers."
    },
    {
        id: "q172",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to generate a cost estimate for your AWS use cases?",
        options: [
            "AWS Pricing Calculator",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS CloudTrail"
        ],
        correctAnswer: 0,
        explanation: "The AWS Pricing Calculator allows you to configure services and see an estimated cost for your architecture."
    },
    {
        id: "q173",
        domain: "Cloud Concepts",
        text: "Which AWS global infrastructure component helps reduce latency for end users?",
        options: [
            "Edge Locations",
            "Regions",
            "Availability Zones",
            "Data Centers"
        ],
        correctAnswer: 0,
        explanation: "Edge Locations are used by CloudFront to cache content closer to end users, thereby reducing latency."
    },
    {
        id: "q174",
        domain: "Security and Compliance",
        text: "Which service enables you to manage multiple AWS accounts centrally?",
        options: [
            "AWS Organizations",
            "AWS IAM",
            "AWS Config",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources."
    },
    {
        id: "q175",
        domain: "Cloud Technology and Services",
        text: "Which service offers object storage in the cloud?",
        options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon Glacier"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance."
    },
    {
        id: "q176",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Support plan provides 24x7 phone access to Cloud Support Engineers?",
        options: [
            "Business",
            "Developer",
            "Basic",
            "Free"
        ],
        correctAnswer: 0,
        explanation: "The Business Support plan (and Enterprise) provides 24x7 phone, email, and chat access to Cloud Support Engineers. Developer plan offers business hours email access."
    },
    {
        id: "q177",
        domain: "Cloud Concepts",
        text: "Which AWS cloud value proposition focuses on allowing you to innovate faster?",
        options: [
            "Agility",
            "Cost Savings",
            "Elasticity",
            "Global Reach"
        ],
        correctAnswer: 0,
        explanation: "Agility allows you to quickly spin up resources as you need them, allowing you to deploy hundreds or even thousands of servers in minutes to experiment and innovate faster."
    },
    {
        id: "q178",
        domain: "Security and Compliance",
        text: "Which security service protects your web applications from common web exploits?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "AWS Inspector"
        ],
        correctAnswer: 0,
        explanation: "AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits."
    },
    {
        id: "q179",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is best for long-term data archival?",
        options: [
            "Amazon S3 Glacier",
            "Amazon S3 Standard",
            "Amazon EBS",
            "Amazon EFS"
        ],
        correctAnswer: 0,
        explanation: "Amazon S3 Glacier is a secure, durable, and extremely low-cost cloud storage service for data archiving and long-term backup."
    },
    {
        id: "q181",
        domain: "Security and Compliance",
        text: "Which service can identify sensitive data in S3 buckets and alert you?",
        options: [
            "Amazon Macie",
            "Amazon GuardDuty",
            "AWS Inspector",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data in AWS, primarily in Amazon S3."
    },
    {
        id: "q182",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework looks at managing and monitoring systems to deliver business value?",
        options: [
            "Operational Excellence",
            "Reliability",
            "Security",
            "Performance Efficiency"
        ],
        correctAnswer: 0,
        explanation: "The Operational Excellence pillar focuses on running and monitoring systems to deliver business value, and continually improving processes and procedures."
    },
    {
        id: "q183",
        domain: "Cloud Technology and Services",
        text: "Which AWS service allows you to send application logs to a central location for storage and analysis?",
        options: [
            "Amazon CloudWatch Logs",
            "AWS CloudTrail",
            "AWS Config",
            "Amazon S3"
        ],
        correctAnswer: 0,
        explanation: "Amazon CloudWatch Logs enables you to centralize the logs from all of your systems, applications, and AWS services that you use, in a single, highly scalable service."
    },
    {
        id: "q184",
        domain: "Billing, Pricing, and Support",
        text: "Which cost management tool allows you to visualize and analyze your costs and usage?",
        options: [
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Budgets",
            "AWS Bills"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer is a tool that enables you to visualize, understand, and manage your AWS costs and usage over time."
    },
    {
        id: "q185",
        domain: "Security and Compliance",
        text: "What is the recommended best practice for the root account access keys?",
        options: [
            "Delete them.",
            "Rotate them every 90 days.",
            "Share them only with admins.",
            "Use them for API calls."
        ],
        correctAnswer: 0,
        explanation: "The best practice is to delete root account access keys and use IAM Root users only for specific tasks that require them. Use IAM users for daily interaction."
    },
    {
        id: "q186",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run SQL queries against data in S3 without moving it?",
        options: [
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon RDS",
            "AWS Glue"
        ],
        correctAnswer: 0,
        explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. You pay only for the queries you run."
    },
    {
        id: "q187",
        domain: "Cloud Concepts",
        text: "What is a benefit of using 'infrastructure as code'?",
        options: [
            "Consistency and repeatability",
            "Physical access to servers",
            "Removal of security concerns",
            "Manual configuration"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure as Code (IaC) allows for consistent and repeatable deployments of infrastructure, reducing manual errors and drift."
    },
    {
        id: "q188",
        domain: "Billing, Pricing, and Support",
        text: "Which service provides alerts when AWS events may impact your account's resources?",
        options: [
            "AWS Personal Health Dashboard",
            "AWS Service Health Dashboard",
            "AWS Trusted Advisor",
            "AWS CloudTrail"
        ],
        correctAnswer: 0,
        explanation: "The AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you."
    },
    {
        id: "q189",
        domain: "Security and Compliance",
        text: "Which AWS service is used to govern your AWS environment according to your organization's compliance requirements?",
        options: [
            "AWS Config",
            "AWS IAM",
            "AWS Inspector",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "AWS Config allows you to assess, audit, and evaluate the configurations of your AWS resources to ensure compliance."
    },
    {
        id: "q190",
        domain: "Cloud Technology and Services",
        text: "Which AWS service provides a fully managed Git repository?",
        options: [
            "AWS CodeCommit",
            "AWS CodeBuild",
            "AWS CodeDeploy",
            "AWS CodePipeline"
        ],
        correctAnswer: 0,
        explanation: "AWS CodeCommit is a fully managed source control service that hosts secure Git-based repositories."
    },
    {
        id: "q191",
        domain: "Cloud Concepts",
        text: "Which AWS pricing model allows you to pay for resources only when you use them?",
        options: [
            "Pay-as-you-go",
            "Reserved Instances",
            "Volume discounts",
            "Save when you commit"
        ],
        correctAnswer: 0,
        explanation: "Pay-as-you-go allows you to pay for IT resources only when you consume them, without long term contracts."
    },
    {
        id: "q192",
        domain: "Security and Compliance",
        text: "What is an IAM Role used for?",
        options: [
            "Delegating permissions to AWS resources/services",
            "Creating users",
            "Storing passwords",
            "Encrypting data"
        ],
        correctAnswer: 0,
        explanation: "An IAM Role is an identity that you can create that does not have standard long-term credentials associated with it. It is used to delegate permissions to AWS services or learning entities."
    },
    {
        id: "q193",
        domain: "Cloud Technology and Services",
        text: "Which service is used to accelerate the delivery of static and dynamic web content?",
        options: [
            "Amazon CloudFront",
            "Amazon Route 53",
            "Amazon S3 Transfer Acceleration",
            "AWS Global Accelerator"
        ],
        correctAnswer: 0,
        explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency."
    },
    {
        id: "q194",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan allows for an unlimited number of contacts to open cases?",
        options: [
            "Business",
            "Developer",
            "Basic",
            "Free"
        ],
        correctAnswer: 0,
        explanation: "The Business and Enterprise support plans allow an unlimited number of contacts to open technical support cases."
    },
    {
        id: "q195",
        domain: "Cloud Concepts",
        text: "Which design principle recommends handling failures by automating recovery?",
        options: [
            "Design for failure",
            "Loose coupling",
            "Scalability",
            "Elasticity"
        ],
        correctAnswer: 0,
        explanation: "Design for failure implies that you should assume everything will fail and build architectures that automatically detect and recover from failures."
    },
    {
        id: "q196",
        domain: "Security and Compliance",
        text: "Which service is a threat detection service that continuously monitors for malicious activity?",
        options: [
            "Amazon GuardDuty",
            "Amazon Inspector",
            "AWS Shield",
            "AWS WAF"
        ],
        correctAnswer: 0,
        explanation: "Amazon GuardDuty provides intelligent threat detection to protect your AWS accounts and workloads."
    },
    {
        id: "q197",
        domain: "Cloud Technology and Services",
        text: "Which service is a serverless event bus that connects application data from your own apps, SaaS properties, and AWS services?",
        options: [
            "Amazon EventBridge",
            "Amazon SNS",
            "Amazon SQS",
            "AWS Lambda"
        ],
        correctAnswer: 0,
        explanation: "Amazon EventBridge is a serverless event bus that makes it easier to build event-driven applications at scale using events generated from your applications, integrated SaaS applications, and AWS services."
    },
    {
        id: "q198",
        domain: "Billing, Pricing, and Support",
        text: "Which pricing tool is used to estimate the cost of moving data into AWS?",
        options: [
            "AWS Pricing Calculator",
            "Cost Explorer",
            "AWS Migration Hub",
            "AWS Budgets"
        ],
        correctAnswer: 0,
        explanation: "The AWS Pricing Calculator allows you to estimate costs for specific services, including data transfer costs."
    },
    {
        id: "q199",
        domain: "Cloud Concepts",
        text: "Which AWS Cloud Adoption Framework (CAF) Perspective focuses on skills and organizational change management?",
        options: [
            "People Perspective",
            "Business Perspective",
            "Governance Perspective",
            "Platform Perspective"
        ],
        correctAnswer: 0,
        explanation: "The People Perspective provides guidance for stakeholders who handle human resources (HR), staffing, and people management to ensure their teams are ready for cloud adoption."
    },
    {
        id: "q200",
        domain: "Security and Compliance",
        text: "Which service lets you provision a managed directory in the AWS Cloud?",
        options: [
            "AWS Directory Service",
            "AWS IAM",
            "Amazon Cognito",
            "AWS SSO"
        ],
        correctAnswer: 0,
        explanation: "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) enables your directory-aware workloads and AWS resources to use managed Active Directory in the AWS Cloud."
    },
    {
        id: "q201",
        domain: "Cloud Technology and Services",
        text: "Which database service allows you to create a graph database?",
        options: [
            "Amazon Neptune",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        correctAnswer: 0,
        explanation: "Amazon Neptune is a fast, reliable, fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets."
    },
    {
        id: "q202",
        domain: "Billing, Pricing, and Support",
        text: "Which service allows you to define actions to be taken when costs exceed a threshold?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Bills",
            "AWS Trusted Advisor"
        ],
        correctAnswer: 0,
        explanation: "AWS Budgets allows you to configure 'Budget Actions' to run automatically (e.g. stop EC2 instances) or send alerts when a budget is exceeded."
    },
    {
        id: "q203",
        domain: "Cloud Concepts",
        text: "What does 'Global Reach' mean in the context of AWS?",
        options: [
            "The ability to deploy applications to multiple Regions worldwide.",
            "The ability to reach every person on earth.",
            "Having a website in every language.",
            "Using the internet."
        ],
        correctAnswer: 0,
        explanation: "Global Reach refers to the expansive global infrastructure of AWS (Regions and Edge Locations) allowing you to deploy applications near your users anywhere in the world."
    },
    {
        id: "q204",
        domain: "Security and Compliance",
        text: "Which service allows you to block SQL injection attacks?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "Security Groups"
        ],
        correctAnswer: 0,
        explanation: "AWS WAF (Web Application Firewall) allows you to create rules that block common web exploits like SQL injection and Cross-Site Scripting (XSS)."
    },
    {
        id: "q205",
        domain: "Cloud Technology and Services",
        text: "Which service is used to deploy and scale web applications using Docker containers?",
        options: [
            "Amazon ECS",
            "AWS Lambda",
            "Amazon EC2",
            "AWS Batch"
        ],
        correctAnswer: 0,
        explanation: "Amazon ECS (Elastic Container Service) is a highly scalable container orchestration service for Docker containers."
    },
    {
        id: "q206",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service creates a billing alarm?",
        options: [
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "You can create a billing alarm in Amazon CloudWatch to receive an email notification when your estimated charges exceed a threshold you define."
    },
    {
        id: "q207",
        domain: "Cloud Concepts",
        text: "Which of the following describes the 'Trade capital expense for variable expense' benefit?",
        options: [
            "Pay only for what you use instead of investing in data centers.",
            "Pay for data centers upfront.",
            "Get a fixed invoice every month.",
            "Lower costs by buying hardware."
        ],
        correctAnswer: 0,
        explanation: "Instead of having to invest heavily in data centers and servers before you know how you're going to use them, you can pay only when you consume computing resources, and pay only for how much you consume."
    },
    {
        id: "q208",
        domain: "Security and Compliance",
        text: "Which AWS service helps ensure that your EC2 instances are patched and compliant?",
        options: [
            "AWS Systems Manager",
            "AWS Config",
            "AWS Trusted Advisor",
            "Amazon Inspector"
        ],
        correctAnswer: 0,
        explanation: "AWS Systems Manager Patch Manager automates the process of patching managed instances with both security related and other audit types of updates."
    },
    {
        id: "q209",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to decouple your distributed system components?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon SES",
            "Amazon Pinpoint"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Queue Service (SQS) offers a secure, durable, and available hosted queue that lets you integrate and decouple distributed software systems and components."
    },
    {
        id: "q210",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan includes access to the AWS Support API?",
        options: [
            "Business",
            "Developer",
            "Basic",
            "Free"
        ],
        correctAnswer: 0,
        explanation: "The Business and Enterprise support plans provide access to the AWS Support API for automated interactions with Support."
    },
    {
        id: "q211",
        domain: "Cloud Concepts",
        text: "What does the AWS Shared Responsibility Model determine?",
        options: [
            "Security responsibilities between AWS and the customer.",
            "Who pays for what.",
            "Which region to choose.",
            "How to structure your code."
        ],
        correctAnswer: 0,
        explanation: "The Shared Responsibility Model defines the division of security and compliance responsibilities between AWS (Security of the Cloud) and the customer (Security in the Cloud)."
    },
    {
        id: "q212",
        domain: "Security and Compliance",
        text: "Which service enables you to audit API activity in your AWS account?",
        options: [
            "AWS CloudTrail",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS Inspector"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudTrail tracks user activity and API usage. It records events such as actions taken by a user, role, or an AWS service."
    },
    {
        id: "q213",
        domain: "Cloud Technology and Services",
        text: "Which service makes it easy to migrate relational databases, non-relational databases, and data warehouses to AWS?",
        options: [
            "AWS Database Migration Service (DMS)",
            "AWS Server Migration Service",
            "AWS Application Discovery Service",
            "AWS Migration Hub"
        ],
        correctAnswer: 0,
        explanation: "AWS DMS helps you migrate databases to AWS quickly and securely."
    },
    {
        id: "q214",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to view the status of AWS services globally?",
        options: [
            "AWS Service Health Dashboard",
            "AWS Personal Health Dashboard",
            "AWS CloudWatch",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "The AWS Service Health Dashboard provides access to the status of AWS services in all regions."
    },
    {
        id: "q215",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on avoiding unnecessary costs?",
        options: [
            "Cost Optimization",
            "Performance Efficiency",
            "Reliability",
            "Operational Excellence"
        ],
        correctAnswer: 0,
        explanation: "The Cost Optimization pillar focuses on the ability to run systems to deliver business value at the lowest price point."
    },
    {
        id: "q216",
        domain: "Security and Compliance",
        text: "Which service allows you to manage multiple AWS accounts and consolidated billing?",
        options: [
            "AWS Organizations",
            "AWS IAM",
            "AWS Service Catalog",
            "AWS Control Tower"
        ],
        correctAnswer: 0,
        explanation: "AWS Organizations provides central governance and management across multiple AWS accounts, including consolidated billing."
    },
    {
        id: "q217",
        domain: "Cloud Technology and Services",
        text: "Which storage service allows you to mount a file system to multiple EC2 instances specifically for Linux?",
        options: [
            "Amazon EFS",
            "Amazon EBS",
            "Amazon S3",
            "Amazon FSx for Windows"
        ],
        correctAnswer: 0,
        explanation: "Amazon EFS (Elastic File System) provides a simple, scalable, fully managed elastic NFS file system for Linux based workloads."
    },
    {
        id: "q218",
        domain: "Billing, Pricing, and Support",
        text: "What is the most cost-effective S3 storage class for data that requires instant access but is not frequently accessed?",
        options: [
            "S3 Standard-IA",
            "S3 Standard",
            "S3 Glacier",
            "S3 Deep Archive"
        ],
        correctAnswer: 0,
        explanation: "S3 Standard-Infrequent Access (S3 Standard-IA) is designed for data that is accessed less frequently, but requires rapid access when needed."
    },
    {
        id: "q219",
        domain: "Cloud Concepts",
        text: "Which AWS benefit allows you to deploy your application in multiple Regions around the world?",
        options: [
            "Global Reach",
            "Scalability",
            "Agility",
            "Elasticity"
        ],
        correctAnswer: 0,
        explanation: "Global Reach refers to the ability to leverage the global infrastructure to deploy applications in multiple physical locations."
    },
    {
        id: "q220",
        domain: "Security and Compliance",
        text: "Which AWS service is used to create specific permissions for users and groups?",
        options: [
            "IAM Policies",
            "Security Groups",
            "NACLs",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "You use IAM Policies (JSON documents) to define permissions and attach them to IAM identities (users, groups, roles)."
    },
    {
        id: "q221",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run a dedicated physical server in AWS?",
        options: [
            "Dedicated Host",
            "On-Demand Instance",
            "Reserved Instance",
            "Spot Instance"
        ],
        correctAnswer: 0,
        explanation: "An Amazon EC2 Dedicated Host is a physical server with EC2 instance capacity fully dedicated to your use."
    },
    {
        id: "q222",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS pricing model enables you to bid on unused EC2 capacity?",
        options: [
            "Spot Instances",
            "Reserved Instances",
            "On-Demand",
            "Savings Plans"
        ],
        correctAnswer: 0,
        explanation: "Amazon EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud. Spot Instances are available at up to a 90% discount compared to On-Demand prices."
    },
    {
        id: "q223",
        domain: "Cloud Concepts",
        text: "Which cloud computing model involves the service provider managing the hardware, operating system, and runtime environment?",
        options: [
            "PaaS",
            "IaaS",
            "SaaS",
            "On-premises"
        ],
        correctAnswer: 0,
        explanation: "Platform as a Service (PaaS) removes the need for organizations to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications."
    },
    {
        id: "q224",
        domain: "Security and Compliance",
        text: "Which AWS service analyzes CloudTrail logs to detect anomalous account activity?",
        options: [
            "AWS CloudTrail Insights",
            "AWS Config",
            "AWS Trusted Advisor",
            "Amazon Inspector"
        ],
        correctAnswer: 0,
        explanation: "CloudTrail Insights helps AWS users identify and respond to unusual activity associated with API calls and API error rates."
    },
    {
        id: "q225",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to search and analyze log data from CloudWatch?",
        options: [
            "CloudWatch Logs Insights",
            "AWS X-Ray",
            "AWS CloudTrail",
            "Amazon Athena"
        ],
        correctAnswer: 0,
        explanation: "CloudWatch Logs Insights enables you to interactively search and analyze your log data in Amazon CloudWatch Logs."
    },
    {
        id: "q226",
        domain: "Billing, Pricing, and Support",
        text: "Which is a factor in Amazon S3 pricing?",
        options: [
            "Storage class",
            "VPC ID",
            "IAM user count",
            "Operating System"
        ],
        correctAnswer: 0,
        explanation: "Amazon S3 pricing is based on the storage class (Standard, IA, Glacier, etc.), storage used, requests, and data transfer."
    },
    {
        id: "q227",
        domain: "Cloud Concepts",
        text: "What is the main benefit of decoupling an application?",
        options: [
            "Reduce interdependencies",
            "Increase complexity",
            "Increase coupling",
            "Reduce security"
        ],
        correctAnswer: 0,
        explanation: "Decoupling reduces interdependencies so that failures in one component do not impact others."
    },
    {
        id: "q228",
        domain: "Security and Compliance",
        text: "Which service helps you ensure your S3 Buckets are not publicly accessible?",
        options: [
            "AWS Trusted Advisor",
            "Amazon Macie",
            "AWS Shield",
            "AWS WAF"
        ],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor checks for S3 bucket permissions. (S3 Block Public Access is a feature of S3 itself, but Trusted Advisor provides the check/alert)."
    },
    {
        id: "q229",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to run functions at the edge locations?",
        options: [
            "Lambda @ Edge",
            "CloudFront",
            "Route 53",
            "Direct Connect"
        ],
        correctAnswer: 0,
        explanation: "Lambda@Edge is a feature of Amazon CloudFront that lets you run code closer to users of your application, which improves performance and reduces latency."
    },
    {
        id: "q231",
        domain: "Security and Compliance",
        text: "Which AWS service allows you to centrally manage policies to control access to AWS services across multiple AWS accounts?",
        options: [
            "AWS Organizations (Service Control Policies)",
            "AWS IAM",
            "AWS Security Hub",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "Service Control Policies (SCPs) in AWS Organizations allow you to centrally manage permissions for your organization's accounts, ensuring they stay within your defined guidelines."
    },
    {
        id: "q232",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is designed to help you interact with AWS services using a command-line interface?",
        options: [
            "AWS CLI",
            "AWS Management Console",
            "AWS SDK",
            "AWS CloudShell"
        ],
        correctAnswer: 0,
        explanation: "The AWS Command Line Interface (CLI) allows you to control multiple AWS services from the command line and automate them through scripts."
    },
    {
        id: "q233",
        domain: "Cloud Concepts",
        text: "Which cloud architecture principle supports the ability to upgrade a system without causing an outage?",
        options: [
            "Loose Coupling",
            "High Availability",
            "Fault Tolerance",
            "Vertical Scaling"
        ],
        correctAnswer: 2,
        explanation: "Fault tolerance is the property that enables a system to continue operating properly in the event of the failure of (or one or more faults within) some of its components. This often allows for upgrades without downtime."
    },
    {
        id: "q234",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool can provide a projected estimate of your monthly bill?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Bills page",
            "AWS Pricing Calculator"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer can analyze your historical usage data to provide a forecast of your likely spend for the next 12 months."
    },
    {
        id: "q235",
        domain: "Security and Compliance",
        text: "Which service allows you to manage the security posture of your AWS account by aggregating alerts from various security services?",
        options: [
            "AWS Security Hub",
            "Amazon GuardDuty",
            "AWS Shield",
            "AWS WAF"
        ],
        correctAnswer: 0,
        explanation: "AWS Security Hub gives you a comprehensive view of your security alerts and security posture across your AWS accounts."
    },
    {
        id: "q236",
        domain: "Cloud Technology and Services",
        text: "Which database service allows you to run MongoDB-compatible workloads?",
        options: [
            "Amazon DocumentDB",
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Neptune"
        ],
        correctAnswer: 0,
        explanation: "Amazon DocumentDB (with MongoDB compatibility) is a fast, scalable, highly available, and fully managed document database service that supports MongoDB workloads."
    },
    {
        id: "q237",
        domain: "Cloud Concepts",
        text: "Which component of the AWS Global Infrastructure consists of one or more discrete data centers?",
        options: [
            "Availability Zone",
            "Region",
            "Edge Location",
            "Local Zone"
        ],
        correctAnswer: 0,
        explanation: "An Availability Zone (AZ) allows you to run your applications and databases that are more highly available, fault tolerant, and scalable than a single data center. Each AZ typically consists of one or more data centers."
    },
    {
        id: "q238",
        domain: "Billing, Pricing, and Support",
        text: "Which of the following data transfers is generally free of charge in AWS?",
        options: [
            "Inbound data transfer (Data Transfer In)",
            "Outbound data transfer to the internet",
            "Data transfer between Regions",
            "Data transfer between two public IPs in the same region"
        ],
        correctAnswer: 0,
        explanation: "Data transfer into AWS (Inbound) is typically free."
    },
    {
        id: "q239",
        domain: "Security and Compliance",
        text: "Which AWS service is used to verify that a downloaded file from S3 has not been corrupted?",
        options: [
            "Checksums (e.g., MD5)",
            "AWS KMS",
            "AWS Artifact",
            "Amazon Macie"
        ],
        correctAnswer: 0,
        explanation: "You can use checksums (hashes) to verify the integrity of data. S3 allows you to store and check MD5 hashes or other checksums to ensure file integrity."
    },
    {
        id: "q240",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run Docker containers on serverless infrastructure?",
        options: [
            "AWS Fargate",
            "Amazon EC2",
            "Amazon EKS on EC2",
            "Amazon Lightsail"
        ],
        correctAnswer: 0,
        explanation: "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS."
    },
    {
        id: "q241",
        domain: "Cloud Concepts",
        text: "Which cloud computing benefit reduces the need to handle hardware maintenance?",
        options: [
            "Undifferentiated heavy lifting",
            "Economies of scale",
            "Global reach",
            "Agility"
        ],
        correctAnswer: 0,
        explanation: "AWS handles the 'undifferentiated heavy lifting' of IT—tasks like racking, stacking, and powering servers—so you can focus on your applications."
    },
    {
        id: "q242",
        domain: "Security and Compliance",
        text: "Which AWS capability helps you manage software licenses (e.g., Microsoft, SAP, Oracle)?",
        options: [
            "AWS License Manager",
            "AWS Systems Manager",
            "AWS Config",
            "AWS Service Catalog"
        ],
        correctAnswer: 0,
        explanation: "AWS License Manager serves as a centralized place to manage your software licenses from vendors like Microsoft and Oracle across AWS and on-premises environments."
    },
    {
        id: "q243",
        domain: "Cloud Technology and Services",
        text: "Which networking service allows you to resolve domain names to IP addresses?",
        options: [
            "Amazon Route 53",
            "AWS Global Accelerator",
            "Amazon VPC",
            "AWS Direct Connect"
        ],
        correctAnswer: 0,
        explanation: "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service."
    },
    {
        id: "q244",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan provides a response time of < 1 hour for production system down events?",
        options: [
            "Business",
            "Developer",
            "Enterprise",
            "Basic"
        ],
        correctAnswer: 0,
        explanation: "The Business Support plan provides a < 1 hour response time for 'Production System Down' cases."
    },
    {
        id: "q245",
        domain: "Cloud Concepts",
        text: "Which AWS deployment model gives the customer the most control over security and infrastructure?",
        options: [
            "IaaS",
            "PaaS",
            "SaaS",
            "FaaS"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure as a Service (IaaS) provides the highest level of flexibility and management control over your IT resources compared to PaaS or SaaS."
    },
    {
        id: "q246",
        domain: "Security and Compliance",
        text: "Which service allows you to automatically rotate secrets for RDS databases?",
        options: [
            "AWS Secrets Manager",
            "AWS Systems Manager Parameter Store",
            "AWS KMS",
            "AWS IAM"
        ],
        correctAnswer: 0,
        explanation: "AWS Secrets Manager helps you protect secrets and can automatically rotate credentials for supported services like Amazon RDS without requiring code changes."
    },
    {
        id: "q247",
        domain: "Cloud Technology and Services",
        text: "Which AWS service is an in-memory data store used to improve application performance?",
        options: [
            "Amazon ElastiCache",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        correctAnswer: 0,
        explanation: "Amazon ElastiCache is a fully managed in-memory data store service, compatible with Redis and Memcached, used to improve the performance of web applications."
    },
    {
        id: "q248",
        domain: "Billing, Pricing, and Support",
        text: "A start-up wants to quickly deploy a simple web application and get a predictable monthly bill. Which service should they use?",
        options: [
            "Amazon Lightsail",
            "Amazon EC2",
            "AWS Lambda",
            "AWS Elastic Beanstalk"
        ],
        correctAnswer: 0,
        explanation: "Amazon Lightsail offers easy-to-use virtual private server (VPS) instances, containers, storage, databases, and more at a cost-effective, predictable monthly price."
    },
    {
        id: "q249",
        domain: "Cloud Concepts",
        text: "Which design principle suggests replacing valid, long-lived credentials with temporary credentials?",
        options: [
            "Security best practices",
            "Cost optimization",
            "Performance tuning",
            "Reliability engineering"
        ],
        correctAnswer: 0,
        explanation: "Replacing long-term credentials with temporary ones (like IAM Roles) is a key security best practice to reduce the risk of credential compromise."
    },
    {
        id: "q250",
        domain: "Security and Compliance",
        text: "Which feature of AWS IAM allows you to add an extra layer of protection to user sign-in?",
        options: [
            "MFA (Multi-Factor Authentication)",
            "Access Keys",
            "Password Policy",
            "Roles"
        ],
        correctAnswer: 0,
        explanation: "MFA adds extra security because it requires users to provide a unique authentication code from an approved device in addition to their password."
    },
    {
        id: "q251",
        domain: "Cloud Technology and Services",
        text: "Which service can run jobs to process massive amounts of data (Big Data) using open-source tools like Spark and Hadoop?",
        options: [
            "Amazon EMR",
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue"
        ],
        correctAnswer: 0,
        explanation: "Amazon EMR (Elastic MapReduce) is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Apache Spark, Hive, HBase, Flink, and Presto."
    },
    {
        id: "q252",
        domain: "Billing, Pricing, and Support",
        text: "Which pricing model is optimal for workloads that can handle interruptions?",
        options: [
            "Spot Instances",
            "Reserved Instances",
            "On-Demand",
            "Savings Plans"
        ],
        correctAnswer: 0,
        explanation: "Spot Instances are the most cost-effective choice if your applications is fault-tolerant and flexible about when it runs (can handle interruptions)."
    },
    {
        id: "q253",
        domain: "Cloud Concepts",
        text: "Which AWS concept refers to the ability to launch resources in minutes instead of weeks?",
        options: [
            "Speed of Innovation",
            "High Availability",
            "Elasticity",
            "Privacy"
        ],
        correctAnswer: 0,
        explanation: "Speed of Innovation (or Agility) allows you to spin up resources in minutes, enabling faster experimentation and time-to-market."
    },
    {
        id: "q254",
        domain: "Security and Compliance",
        text: "What is the safest way to grant an EC2 instance access to an S3 bucket?",
        options: [
            "Attach an IAM Role to the instance.",
            "Store AWS keys in the code.",
            "Store keys in a configuration file.",
            "Make the bucket public."
        ],
        correctAnswer: 0,
        explanation: "Attaching an IAM Role to an EC2 instance allows the instance to obtain temporary security credentials to access AWS services securely."
    },
    {
        id: "q255",
        domain: "Cloud Technology and Services",
        text: "Which AWS service enables you to send alerts based on CloudWatch metrics?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "AWS CloudTrail",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "You can configure CloudWatch Alarms to send a notification to an Amazon SNS topic when a metric breaches a threshold."
    },
    {
        id: "q256",
        domain: "Billing, Pricing, and Support",
        text: "Which type of Elastic Load Balancer is best suited for HTTP/HTTPS traffic?",
        options: [
            "Application Load Balancer (ALB)",
            "Network Load Balancer (NLB)",
            "Gateway Load Balancer (GWLB)",
            "Classic Load Balancer (CLB)"
        ],
        correctAnswer: 0,
        explanation: "Application Load Balancer acts at Layer 7 and is best suited for load balancing of HTTP and HTTPS traffic."
    },
    {
        id: "q257",
        domain: "Cloud Concepts",
        text: "Moving from a Capital Expense (CapEx) model to an Operational Expense (OpEx) model allows a company to:",
        options: [
            "Pay only for what they use.",
            "Own all their hardware.",
            "Avoid paying taxes.",
            "Reduce security risks."
        ],
        correctAnswer: 0,
        explanation: "OpEx allows companies to pay for what they use, when they use it, rather than investing large amounts of capital upfront for hardware."
    },
    {
        id: "q258",
        domain: "Security and Compliance",
        text: "Which document provides the terms and conditions for using AWS services?",
        options: [
            "AWS Customer Agreement",
            "AWS Acceptable Use Policy",
            "AWS Service Terms",
            "AWS Privacy Notice"
        ],
        correctAnswer: 0,
        explanation: "The AWS Customer Agreement contains the terms and conditions that govern your access to and use of the Services."
    },
    {
        id: "q259",
        domain: "Cloud Technology and Services",
        text: "Which AWS service converts text into lifelike speech?",
        options: [
            "Amazon Polly",
            "Amazon Transcribe",
            "Amazon Translate",
            "Amazon Lex"
        ],
        correctAnswer: 0,
        explanation: "Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk."
    },
    {
        id: "q260",
        domain: "Billing, Pricing, and Support",
        text: "Which tool helps you right-size your workloads to reduce costs?",
        options: [
            "AWS Cost Explorer (Resource Optimization)",
            "AWS Compute Optimizer",
            "AWS Trusted Advisor",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All these tools help with right-sizing. Compute Optimizer gives ML-based recommendations, Trusted Advisor checks for underutilized resources, and Cost Explorer provides sizing recommendations."
    },
    {
        id: "q261",
        domain: "Cloud Concepts",
        text: "Which perspective of the Cloud Adoption Framework helps you structure and select the cloud delivery models?",
        options: [
            "Platform Perspective",
            "Operations Perspective",
            "Security Perspective",
            "Business Perspective"
        ],
        correctAnswer: 0,
        explanation: "The Platform Perspective includes principles and patterns for implementing new solutions on the cloud, and migrating on-premises workloads."
    },
    {
        id: "q262",
        domain: "Security and Compliance",
        text: "Which service offers a managed detection and response (MDR) team?",
        options: [
            "AWS Managed Services",
            "Amazon GuardDuty",
            "AWS Shield Advanced (Response Team)",
            "AWS Incident Response"
        ],
        correctAnswer: 2,
        explanation: "AWS Shield Advanced provides access to the AWS Shield Response Team (SRT) to assist you during critical events."
    },
    {
        id: "q263",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to orchestrate containers using Kubernetes?",
        options: [
            "Amazon EKS",
            "Amazon ECS",
            "AWS Lambda",
            "Amazon EC2"
        ],
        correctAnswer: 0,
        explanation: "Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS."
    },
    {
        id: "q264",
        domain: "Billing, Pricing, and Support",
        text: "Which factor affects the pricing of Lambda?",
        options: [
            "Number of requests and duration of code execution",
            "The specific OS of the underlying server",
            "The region's weather",
            "Number of IAM users"
        ],
        correctAnswer: 0,
        explanation: "AWS Lambda pricing is based on the number of requests and the duration (time it takes your code to execute) multiplied by the memory allocated."
    },
    {
        id: "q265",
        domain: "Cloud Concepts",
        text: "What allows AWS to offer lower prices than a typical company could achieve on its own?",
        options: [
            "Economies of Scale",
            "Government subsidies",
            "Reducing quality",
            "Charging for support"
        ],
        correctAnswer: 0,
        explanation: "Economies of scale result from AWS having hundreds of thousands of customers, allowing them to pass on the cost savings in the form of lower prices."
    },
    {
        id: "q266",
        domain: "Security and Compliance",
        text: "Which service provides on-demand access to AWS compliance reports?",
        options: [
            "AWS Artifact",
            "AWS Config",
            "AWS CloudTrail",
            "AWS IAM"
        ],
        correctAnswer: 0,
        explanation: "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS' security and compliance reports."
    },
    {
        id: "q267",
        domain: "Cloud Technology and Services",
        text: "Which service would you use to process and format data before loading it into a data warehouse?",
        options: [
            "AWS Glue",
            "Amazon Athena",
            "Amazon QuickSight",
            "Amazon Redshift"
        ],
        correctAnswer: 0,
        explanation: "AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics."
    },
    {
        id: "q268",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool is used to create and manage a catalog of IT services that are approved for use on AWS?",
        options: [
            "AWS Service Catalog",
            "AWS Marketplace",
            "AWS Systems Manager",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS."
    },
    {
        id: "q269",
        domain: "Cloud Concepts",
        text: "Which Well-Architected Framework pillar focuses on the ability to support development and run workloads effectively?",
        options: [
            "Operational Excellence",
            "Security",
            "Cost Optimization",
            "Reliability"
        ],
        correctAnswer: 0,
        explanation: "Operational Excellence includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes."
    },
    {
        id: "q270",
        domain: "Security and Compliance",
        text: "Which object-level permission in S3 allows you to share a single object with others?",
        options: [
            "Bucket Policy",
            "S3 ACL (Access Control List)",
            "IAM Policy",
            "Encryption Key"
        ],
        correctAnswer: 1,
        explanation: "Permissions can be set on individual objects using Access Control Lists (ACLs), although using Bucket Policies is generally recommended for broader control. For a single object 'share' scenario, ACLs or Presigned URLs are often cited."
    },
    {
        id: "q271",
        domain: "Cloud Technology and Services",
        text: "Which storage service allows you to use standard file protocols (NFS) to store data in the cloud?",
        options: [
            "Amazon EFS",
            "Amazon S3",
            "Amazon EBS",
            "Amazon Glacier"
        ],
        correctAnswer: 0,
        explanation: "Amazon EFS provides a file system interface and file system access semantics (such as strong consistency and file locking) and allows you to use the NFSv4 protocol."
    },
    {
        id: "q272",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan allows one primary contact to open cases?",
        options: [
            "Developer",
            "Basic",
            "Business",
            "Enterprise"
        ],
        correctAnswer: 0,
        explanation: "The Developer support plan allows one primary contact to open support cases (via email during business hours)."
    },
    {
        id: "q273",
        domain: "Cloud Concepts",
        text: "How many Availability Zones are typically in an AWS Region?",
        options: [
            "Minimum of 2, usually 3 or more",
            "Exactly 1",
            "Always 5",
            "It varies, but minimum 1"
        ],
        correctAnswer: 0,
        explanation: "An AWS Region consists of a minimum of two Availability Zones (usually 3) to allow for high availability deployment."
    },
    {
        id: "q274",
        domain: "Security and Compliance",
        text: "Which service helps you protect your keys and data using Hardware Security Modules (HSMs)?",
        options: [
            "AWS CloudHSM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud."
    },
    {
        id: "q275",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed message broker for Apache ActiveMQ and RabbitMQ?",
        options: [
            "Amazon MQ",
            "Amazon SQS",
            "Amazon SNS",
            "AWS Step Functions"
        ],
        correctAnswer: 0,
        explanation: "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud."
    },
    {
        id: "q276",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to group resources to manage and automate tasks on them?",
        options: [
            "AWS Systems Manager (Resource Groups)",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Trusted Advisor"
        ],
        correctAnswer: 0,
        explanation: "You can use Resource Groups in AWS Systems Manager to organize your AWS resources. You can then automate tasks on these groups."
    },
    {
        id: "q277",
        domain: "Cloud Concepts",
        text: "Which AWS service is used to host a static website efficiently?",
        options: [
            "Amazon S3",
            "Amazon EC2",
            "Amazon RDS",
            "AWS Lambda"
        ],
        correctAnswer: 0,
        explanation: "Amazon S3 is the most efficient and cost-effective way to host static websites (HTML, CSS, JS, Images) without a server."
    },
    {
        id: "q278",
        domain: "Security and Compliance",
        text: "Which of the following is an IAM Entity?",
        options: [
            "User",
            "Bucket",
            "Instance",
            "Region"
        ],
        correctAnswer: 0,
        explanation: "IAM Entities include Users, Groups, and Roles. Buckets and Instances are resources."
    },
    {
        id: "q279",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to build and run applications using the Apache Kafka framework?",
        options: [
            "Amazon MSK",
            "Amazon Kinesis",
            "Amazon SQS",
            "Amazon SNS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Managed Streaming for Apache Kafka (Amazon MSK) is a fully managed service that makes it easy for you to build and run applications that use Apache Kafka to process streaming data."
    },
    {
        id: "q281",
        domain: "Security and Compliance",
        text: "Which service enables you to enforce compliance with internal policies and regulatory standards by defining a configuration rule?",
        options: [
            "AWS Config",
            "AWS IAM",
            "AWS Artifact",
            "Amazon Macie"
        ],
        correctAnswer: 0,
        explanation: "AWS Config allows you to create rules that automatically check the configuration of AWS resources and record any changes."
    },
    {
        id: "q282",
        domain: "Cloud Technology and Services",
        text: "Which service offers massive scale for data ingestion from millions of IoT devices?",
        options: [
            "AWS IoT Core",
            "Amazon Kinesis",
            "AWS Lambda",
            "Amazon SNS"
        ],
        correctAnswer: 0,
        explanation: "AWS IoT Core lets you connect billions of IoT devices and route trillions of messages to AWS services without managing infrastructure."
    },
    {
        id: "q283",
        domain: "Cloud Concepts",
        text: "Which AWS benefit allows you to pay less as you grow?",
        options: [
            "Economies of scale",
            "Pay as you go",
            "Capacity planning",
            "Global reach"
        ],
        correctAnswer: 0,
        explanation: "Economies of scale allow AWS to lower costs as usage increases, passing those savings to customers."
    },
    {
        id: "q284",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS pricing feature allows you to use a dedicated physical server?",
        options: [
            "Dedicated Hosts",
            "Reserved Instances",
            "Spot Instances",
            "On-Demand"
        ],
        correctAnswer: 0,
        explanation: "Dedicated Hosts allow you to use your existing server-bound software licenses (like Windows, SQL Server) on AWS."
    },
    {
        id: "q285",
        domain: "Security and Compliance",
        text: "Which service helps you manage SSL/TLS certificates?",
        options: [
            "AWS Certificate Manager (ACM)",
            "AWS IAM",
            "AWS Secrets Manager",
            "AWS KMS"
        ],
        correctAnswer: 0,
        explanation: "ACM handles the complexity of creating, storing, and renewing public and private SSL/TLS certificates."
    },
    {
        id: "q286",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed extract, transform, and load (ETL) service?",
        options: [
            "AWS Glue",
            "Amazon EMR",
            "AWS Data Pipeline",
            "Amazon Athena"
        ],
        correctAnswer: 0,
        explanation: "AWS Glue is a serverless data integration service that makes it easy to discover, prepare, and combine data for analytics."
    },
    {
        id: "q287",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on specific business objectives and value?",
        options: [
            "Operational Excellence",
            "Cost Optimization",
            "Security",
            "Performance Efficiency"
        ],
        correctAnswer: 0,
        explanation: "Operational Excellence focuses on running and monitoring systems to deliver business value and to continually improve supporting processes."
    },
    {
        id: "q288",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool provides a free digital catalog with thousands of software listings?",
        options: [
            "AWS Marketplace",
            "AWS Service Catalog",
            "AWS Partner Network",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "AWS Marketplace simplifies the process of finding, buying, and deploying software that runs on AWS."
    },
    {
        id: "q289",
        domain: "Security and Compliance",
        text: "Which service protects web applications from SQL injection?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "Security Groups"
        ],
        correctAnswer: 0,
        explanation: "AWS WAF allows you to create rules to block common web exploits like SQL injection and XSS."
    },
    {
        id: "q290",
        domain: "Cloud Technology and Services",
        text: "Which service is used to run code in response to events?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "Amazon ECS",
            "AWS Batch"
        ],
        correctAnswer: 0,
        explanation: "AWS Lambda runs your code in response to events such as changes to data in an S3 bucket or an Amazon DynamoDB table."
    },
    {
        id: "q291",
        domain: "Cloud Concepts",
        text: "Which concept refers to the ability to acquire resources as you need them and release them when you don't?",
        options: [
            "Elasticity",
            "Reliability",
            "Security",
            "Agility"
        ],
        correctAnswer: 0,
        explanation: "Elasticity is the core cloud concept of scaling resources up and down to match demand."
    },
    {
        id: "q292",
        domain: "Security and Compliance",
        text: "Which AWS service is used to manage encryption keys?",
        options: [
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS IAM",
            "AWS Certificate Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Key Management Service (KMS) makes it easy to create and manage cryptographic keys."
    },
    {
        id: "q293",
        domain: "Cloud Technology and Services",
        text: "Which service is a highly available and scalable DNS web service?",
        options: [
            "Amazon Route 53",
            "Amazon VPC",
            "AWS Direct Connect",
            "Amazon CloudFront"
        ],
        correctAnswer: 0,
        explanation: "Amazon Route 53 routes end users to Internet applications by translating names like www.example.com into numeric IP addresses."
    },
    {
        id: "q294",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan offers 24/7 access to Cloud Support Engineers via phone, chat, and email?",
        options: [
            "Business",
            "Developer",
            "Basic",
            "Free"
        ],
        correctAnswer: 0,
        explanation: "The Business Support plan (and Enterprise) offers 24/7 access to Cloud Support Engineers."
    },
    {
        id: "q295",
        domain: "Cloud Concepts",
        text: "Which cloud computing model gives you the highest level of control over your IT resources?",
        options: [
            "Infrastructure as a Service (IaaS)",
            "Platform as a Service (PaaS)",
            "Software as a Service (SaaS)",
            "Function as a Service (FaaS)"
        ],
        correctAnswer: 0,
        explanation: "IaaS provides you with the basic building blocks for cloud IT (networking, computers, storage) and gives you the most flexibility and control."
    },
    {
        id: "q296",
        domain: "Security and Compliance",
        text: "Which service allows you to centrally manage access to multiple AWS accounts?",
        options: [
            "AWS Organizations",
            "AWS IAM",
            "AWS Config",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "AWS Organizations helps you centrally govern your environment as you grow and scale your AWS resources."
    },
    {
        id: "q297",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to accelerate the transfer of files to S3 over long distances?",
        options: [
            "Amazon S3 Transfer Acceleration",
            "AWS Global Accelerator",
            "AWS Direct Connect",
            "Amazon CloudFront"
        ],
        correctAnswer: 0,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: "q298",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS services are free forever (up to specific limits)?",
        options: [
            "Lambda (1M requests/month), DynamoDB (25GB)",
            "EC2, RDS",
            "S3, EBS",
            "Redshift, EMR"
        ],
        correctAnswer: 0,
        explanation: "AWS offers an 'Always Free' tier which includes 1 million Lambda requests per month and 25GB of DynamoDB storage."
    },
    {
        id: "q299",
        domain: "Cloud Concepts",
        text: "Which AWS design principle advises against manual operations?",
        options: [
            "Perform operations as code",
            "Scalability",
            "security",
            "Reliability"
        ],
        correctAnswer: 0,
        explanation: "In the cloud, you can define your entire workload (applications, infrastructure, etc.) as code and update it with code."
    },
    {
        id: "q300",
        domain: "Security and Compliance",
        text: "Which feature allows you to grant temporary access to users who are not IAM users?",
        options: [
            "IAM Roles (Identity Federation)",
            "IAM Users",
            "IAM Groups",
            "MFA"
        ],
        correctAnswer: 0,
        explanation: "You can use IAM Roles to grant temporary access to users who are authenticated by an external identity provider (IdP) via Identity Federation."
    },
    {
        id: "q301",
        domain: "Cloud Technology and Services",
        text: "Which service provides a fully managed relational database with support for multiple engines?",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Redshift",
            "Amazon ElastiCache"
        ],
        correctAnswer: 0,
        explanation: "Amazon RDS is easy to set up, operate, and scale a relational database in the cloud with choice of Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server."
    },
    {
        id: "q302",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to forecast your AWS spending?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Pricing Calculator",
            "AWS Bills"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer provides forecasting capabilities to help you understand your future costs."
    },
    {
        id: "q303",
        domain: "Cloud Concepts",
        text: "What does 'High Availability' mean?",
        options: [
            "The system is always accessible and operational.",
            "The system is cheap.",
            "The system is fast.",
            "The system is secure."
        ],
        correctAnswer: 0,
        explanation: "High Availability refers to the ability of a system to remain accessible and operational for a high percentage of time."
    },
    {
        id: "q304",
        domain: "Security and Compliance",
        text: "Which service analyzes your AWS environment and provides security recommendations?",
        options: [
            "AWS Trusted Advisor",
            "AWS Artifact",
            "AWS Shield",
            "AWS WAF"
        ],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor includes a 'Security' category that checks for compliance with security best practices."
    },
    {
        id: "q305",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to deploy applications using Chef or Puppet?",
        options: [
            "AWS OpsWorks",
            "AWS CloudFormation",
            "AWS Elastic Beanstalk",
            "AWS CodeDeploy"
        ],
        correctAnswer: 0,
        explanation: "AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet."
    },
    {
        id: "q306",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan includes a review of your architecture by a Solutions Architect?",
        options: [
            "Enterprise",
            "Business",
            "Developer",
            "Basic"
        ],
        correctAnswer: 0,
        explanation: "The Enterprise Support plan (and sometimes Business for specific needs) includes consultative review of your architecture (Well-Architected Reviews)."
    },
    {
        id: "q307",
        domain: "Cloud Concepts",
        text: "Which global infrastructure component is used to cache content?",
        options: [
            "Edge Location",
            "Region",
            "Availability Zone",
            "Data Center"
        ],
        correctAnswer: 0,
        explanation: "Edge Locations are sites that CloudFront uses to cache copies of your content closer to your users."
    },
    {
        id: "q308",
        domain: "Security and Compliance",
        text: "Which service records API calls for your account?",
        options: [
            "AWS CloudTrail",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS X-Ray"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudTrail tracks user activity and API usage."
    },
    {
        id: "q309",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed desktop computing service?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon EC2",
            "AWS Cloud9"
        ],
        correctAnswer: 0,
        explanation: "Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows or Amazon Linux desktops for your users."
    },
    {
        id: "q310",
        domain: "Billing, Pricing, and Support",
        text: "Which pricing model offers the deepeset discount?",
        options: [
            "Spot Instances",
            "Reserved Instances",
            "On-Demand",
            "Dedicated Hosts"
        ],
        correctAnswer: 0,
        explanation: "Spot Instances can offer up to 90% off On-Demand prices."
    },
    {
        id: "q311",
        domain: "Cloud Concepts",
        text: "Which cloud benefit facilitates expanding to new geographic regions quickly?",
        options: [
            "Global Reach",
            "Elasticity",
            "High Availability",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Global Reach (Go global in minutes) allows you to easily deploy your application in multiple locations around the world with just a few clicks."
    },
    {
        id: "q312",
        domain: "Security and Compliance",
        text: "Which credential is required to access the AWS CLI?",
        options: [
            "Access Keys (Access Key ID and Secret Access Key)",
            "Username and Password",
            "MFA Token",
            "SSH Key"
        ],
        correctAnswer: 0,
        explanation: "You need an Access Key ID and Secret Access Key to make programmatic requests to AWS (via CLI or SDK)."
    },
    {
        id: "q313",
        domain: "Cloud Technology and Services",
        text: "Which service helps you build a data lake on S3?",
        options: [
            "AWS Lake Formation",
            "AWS Glue",
            "Amazon Athena",
            "Amazon Redshift"
        ],
        correctAnswer: 0,
        explanation: "AWS Lake Formation is a service that makes it easy to set up a secure data lake in days."
    },
    {
        id: "q314",
        domain: "Billing, Pricing, and Support",
        text: "Which service sends an email when your costs exceed a limit?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CloudTrail",
            "AWS Personal Health Dashboard"
        ],
        correctAnswer: 0,
        explanation: "AWS Budgets allows you to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount."
    },
    {
        id: "q315",
        domain: "Cloud Concepts",
        text: "Which Cloud Adoption Framework perspective focuses on defined processes?",
        options: [
            "Process Perspective",
            "Operations Perspective",
            "Governance Perspective",
            "Platform Perspective"
        ],
        correctAnswer: 1,
        explanation: "Actually, 'Operations Perspective' focuses on the structure and operations. The 'Governance Perspective' focuses on skills and processes for control. However, standard CAF perspectives are Business, People, Governance, Platform, Security, Operations. 'Operations' defines how day-to-day, quarter-to-quarter, and year-to-year business is conducted."
    },
    {
        id: "q316",
        domain: "Security and Compliance",
        text: "Which service protects against DDoS attacks?",
        options: [
            "AWS Shield",
            "AWS WAF",
            "Amazon Macie",
            "Amazon GuardDuty"
        ],
        correctAnswer: 0,
        explanation: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service."
    },
    {
        id: "q317",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to coordinate multiple AWS services into serverless workflows?",
        options: [
            "AWS Step Functions",
            "AWS Lambda",
            "Amazon SWF",
            "AWS Batch"
        ],
        correctAnswer: 0,
        explanation: "AWS Step Functions is a low-code, visual workflow service that developers use to build distributed applications, automate IT and business processes, and orchestrate AWS services with minimal code."
    },
    {
        id: "q318",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to tag resources for cost allocation?",
        options: [
            "Tag Editor / Cost Allocation Tags",
            "AWS Config",
            "AWS CloudTrail",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "You can use tags to organize your resources, and Cost Allocation Tags to track your AWS costs on a detailed level."
    },
    {
        id: "q319",
        domain: "Cloud Concepts",
        text: "What implies that you don't need to over-provision resources for peak load?",
        options: [
            "Elasticity",
            "Reliability",
            "Security",
            "Global Reach"
        ],
        correctAnswer: 0,
        explanation: "Elasticity allows you to provision only what you need and scale out when demand increases, rather than provisioning for peak load upfront."
    },
    {
        id: "q320",
        domain: "Security and Compliance",
        text: "Which service is used to govern compliance of your resources?",
        options: [
            "AWS Config",
            "AWS Artifact",
            "AWS IAM",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS Config enables you to assess, audit, and evaluate the configurations of your AWS resources."
    },
    {
        id: "q321",
        domain: "Cloud Technology and Services",
        text: "Which service acts as a virtual network for your AWS resources?",
        options: [
            "Amazon VPC",
            "AWS Direct Connect",
            "Amazon Route 53",
            "Amazon CloudFront"
        ],
        correctAnswer: 0,
        explanation: "Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
    },
    {
        id: "q322",
        domain: "Billing, Pricing, and Support",
        text: "Which pricing model provides a discount for steady-state usage?",
        options: [
            "Reserved Instances",
            "On-Demand",
            "Spot Instances",
            "Dedicated Hosts"
        ],
        correctAnswer: 0,
        explanation: "Reserved Instances provide a significant discount (up to 72%) compared to On-Demand pricing and are best suited for steady-state usage."
    },
    {
        id: "q323",
        domain: "Cloud Concepts",
        text: "Which cloud benefit allows you to focus on your customers rather than infrastructure?",
        options: [
            "Stop spending money on running and maintaining data centers",
            "Elasticity",
            "Reliability",
            "Global Reach"
        ],
        correctAnswer: 0,
        explanation: "By letting AWS handle the heavy lifting of infrastructure, you can focus on your business and customers."
    },
    {
        id: "q324",
        domain: "Security and Compliance",
        text: "Which service helps prevent data leaks?",
        options: [
            "Amazon Macie",
            "Amazon GuardDuty",
            "AWS WAF",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data in AWS."
    },
    {
        id: "q325",
        domain: "Cloud Technology and Services",
        text: "Which service allows for content delivery with low latency?",
        options: [
            "Amazon CloudFront",
            "Amazon Route 53",
            "Amazon VPC",
            "AWS Direct Connect"
        ],
        correctAnswer: 0,
        explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency."
    },
    {
        id: "q326",
        domain: "Billing, Pricing, and Support",
        text: "Which service helps you migrate databases to AWS?",
        options: [
            "AWS Database Migration Service (DMS)",
            "AWS Schema Conversion Tool",
            "AWS Snowball",
            "AWS DataSync"
        ],
        correctAnswer: 0,
        explanation: "AWS DMS helps you migrate databases to AWS quickly and securely."
    },
    {
        id: "q327",
        domain: "Cloud Concepts",
        text: "Which design principle reduces the impact of failures?",
        options: [
            "Loose Coupling",
            "Vertical Scaling",
            "Monolithic architecture",
            "Manual updates"
        ],
        correctAnswer: 0,
        explanation: "Loose coupling ensures that a failure in one component does not cascade to others."
    },
    {
        id: "q328",
        domain: "Security and Compliance",
        text: "Which service provides centralized management of access and authentication?",
        options: [
            "AWS IAM Identity Center (AWS SSO)",
            "AWS Secrets Manager",
            "AWS KMS",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS IAM Identity Center (formerly AWS SSO) is where you create, or connect, your workforce identities in AWS once and manage access centrally across your AWS organization."
    },
    {
        id: "q329",
        domain: "Cloud Technology and Services",
        text: "Which service provides durable storage for objects?",
        options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon Glacier"
        ],
        correctAnswer: 0,
        explanation: "Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance."
    },
    {
        id: "q331",
        domain: "Security and Compliance",
        text: "Which service allows you to simulate a policy before attaching it to a user?",
        options: [
            "IAM Policy Simulator",
            "AWS Config",
            "AWS Trusted Advisor",
            "Inspector"
        ],
        correctAnswer: 0,
        explanation: "The IAM Policy Simulator allows you to verify the permissions of policies and understand the impact of permission changes before you attach them."
    },
    {
        id: "q332",
        domain: "Cloud Technology and Services",
        text: "Which service offers block-level storage for use with EC2 instances?",
        options: [
            "Amazon EBS",
            "Amazon S3",
            "Amazon EFS",
            "Amazon Glacier"
        ],
        correctAnswer: 0,
        explanation: "Amazon Elastic Block Store (EBS) provides block level storage volumes for use with EC2 instances."
    },
    {
        id: "q333",
        domain: "Cloud Concepts",
        text: "Which AWS benefit allows you to pay for your resources based on the amount of time you use them?",
        options: [
            "Pay as you go",
            "Volume discounts",
            "Free tiers",
            "Custom pricing"
        ],
        correctAnswer: 0,
        explanation: "Pay-as-you-go pricing allows you to easily adapt to changing business needs without overcommitting budgets."
    },
    {
        id: "q334",
        domain: "Billing, Pricing, and Support",
        text: "Which service helps you monitor the performance and availability of your applications?",
        options: [
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "Amazon CloudWatch is a monitoring and observablity service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers."
    },
    {
        id: "q335",
        domain: "Security and Compliance",
        text: "Which service manages authentication for your custom mobile and web apps?",
        options: [
            "Amazon Cognito",
            "AWS IAM",
            "AWS Directory Service",
            "AWS SSO"
        ],
        correctAnswer: 0,
        explanation: "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily."
    },
    {
        id: "q336",
        domain: "Cloud Technology and Services",
        text: "Which service is a simple, serverless, set-and-forget file transfer service?",
        options: [
            "AWS Transfer Family",
            "AWS DataSync",
            "AWS Snowcone",
            "AWS Storage Gateway"
        ],
        correctAnswer: 0,
        explanation: "AWS Transfer Family provides fully managed support for file transfers directly into and out of Amazon S3 using SFTP, FTPS, and FTP."
    },
    {
        id: "q337",
        domain: "Cloud Concepts",
        text: "Which design principle implies removing single points of failure?",
        options: [
            "Fault Tolerance",
            "Scalability",
            "Agility",
            "Pay as you go"
        ],
        correctAnswer: 0,
        explanation: "Fault tolerance typically involves redundancy (removing single points of failure) so that the system remains operational even if components fail."
    },
    {
        id: "q338",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS pricing model is best for long-term workloads with steady usage?",
        options: [
            "Savings Plans",
            "On-Demand",
            "Spot Instances",
            "Pay-as-you-go"
        ],
        correctAnswer: 0,
        explanation: "Savings Plans provide significant savings (up to 72%) in exchange for a commitment to a consistent amount of usage (e.g. $10/hour) for a 1 or 3 year term."
    },
    {
        id: "q339",
        domain: "Security and Compliance",
        text: "What is the primary function of AWS WAF?",
        options: [
            "Protect web applications from common exploits",
            "Protect against DDoS",
            "Encrypt data at rest",
            "Manage keys"
        ],
        correctAnswer: 0,
        explanation: "AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits and bots."
    },
    {
        id: "q340",
        domain: "Cloud Technology and Services",
        text: "Which service connects an on-premises software appliance with cloud-based storage?",
        options: [
            "AWS Storage Gateway",
            "AWS Direct Connect",
            "Amazon S3",
            "AWS Snowball"
        ],
        correctAnswer: 0,
        explanation: "AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage."
    },
    {
        id: "q341",
        domain: "Cloud Concepts",
        text: "Which term describes the ability to serve content to users with low latency worldwide?",
        options: [
            "Global Reach",
            "Elasticity",
            "Fault Tolerance",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Global Reach refers to using the global network of regions and edge locations to deliver content quickly."
    },
    {
        id: "q342",
        domain: "Security and Compliance",
        text: "Which AWS service allows you to create private connections between VPCs?",
        options: [
            "AWS PrivateLink",
            "AWS Direct Connect",
            "AWS VPN",
            "VPC Peering"
        ],
        correctAnswer: 3,
        explanation: "VPC Peering allows you to connect two VPCs. AWS PrivateLink allows you to privately access services hosted on AWS. While both 'connect', VPC peering is the direct network connection between VPCs."
    },
    {
        id: "q343",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run applications without provisioning servers?",
        options: [
            "Serverless (e.g., AWS Lambda)",
            "Amazon EC2",
            "Amazon RDS",
            "Amazon EMR"
        ],
        correctAnswer: 0,
        explanation: "Serverless computing (like AWS Lambda) allows you to build and run applications and services without thinking about servers."
    },
    {
        id: "q344",
        domain: "Billing, Pricing, and Support",
        text: "Which dashboard shows the status of AWS services that you use?",
        options: [
            "AWS Personal Health Dashboard",
            "AWS Service Health Dashboard",
            "CloudWatch Dashboard",
            "Billing Dashboard"
        ],
        correctAnswer: 0,
        explanation: "The AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact *you*."
    },
    {
        id: "q345",
        domain: "Cloud Concepts",
        text: "Which cloud model runs entirely in your own data center but uses cloud technologies?",
        options: [
            "Private Cloud",
            "Public Cloud",
            "Hybrid Cloud",
            "Community Cloud"
        ],
        correctAnswer: 0,
        explanation: "A Private Cloud consists of cloud computing resources used exclusively by a single business or organization, often located in the company’s own data center."
    },
    {
        id: "q346",
        domain: "Security and Compliance",
        text: "Which service is used to secure your VPC network boundaries?",
        options: [
            "Network ACLs and Security Groups",
            "IAM Policies",
            "AWS WAF",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "Security Groups (instance level) and Network ACLs (subnet level) act as virtual firewalls to control traffic."
    },
    {
        id: "q347",
        domain: "Cloud Technology and Services",
        text: "Which service provides a dedicated network connection from your premises to AWS?",
        options: [
            "AWS Direct Connect",
            "AWS VPN",
            "Amazon VPC",
            "AWS Transit Gateway"
        ],
        correctAnswer: 0,
        explanation: "AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable."
    },
    {
        id: "q348",
        domain: "Billing, Pricing, and Support",
        text: "Which service allows you to consolidate billing for multiple accounts?",
        options: [
            "AWS Organizations",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Organizations provides consolidated billing features."
    },
    {
        id: "q349",
        domain: "Cloud Concepts",
        text: "Which AWS benefit allows you to stop guessing capacity?",
        options: [
            "Elasticity",
            "Global Reach",
            "Reliability",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Elasticity (scaling up and down) means you don't have to guess your capacity needs in advance."
    },
    {
        id: "q350",
        domain: "Security and Compliance",
        text: "Which service allows you to inspect traffic between your VPCs?",
        options: [
            "AWS Network Firewall",
            "AWS WAF",
            "AWS Shield",
            "Amazon Macie"
        ],
        correctAnswer: 0,
        explanation: "AWS Network Firewall is a managed service that makes it easy to deploy essential network protections for all of your Amazon VPCs."
    },
    {
        id: "q351",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to distribute traffic across multiple targets?",
        options: [
            "Elastic Load Balancing (ELB)",
            "Auto Scaling",
            "Amazon Route 53",
            "Amazon CloudFront"
        ],
        correctAnswer: 0,
        explanation: "ELB automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses."
    },
    {
        id: "q352",
        domain: "Billing, Pricing, and Support",
        text: "Which tool provides recommendations to improve security and performance?",
        options: [
            "AWS Trusted Advisor",
            "AWS Artifact",
            "AWS Config",
            "AWS Inspector"
        ],
        correctAnswer: 0,
        explanation: "Trusted Advisor inspects your AWS environment and makes recommendations for saving money, improving system availability and performance, and closing security gaps."
    },
    {
        id: "q353",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on recovering from failures?",
        options: [
            "Reliability",
            "Security",
            "Operational Excellence",
            "Performance Efficiency"
        ],
        correctAnswer: 0,
        explanation: "The Reliability pillar focuses on the ability of a workload to perform its intended function correctly and properly when it's expected to, including recovery from failure."
    },
    {
        id: "q354",
        domain: "Security and Compliance",
        text: "What is the root user?",
        options: [
            "The initial identity created when you create an AWS account.",
            "An IAM user with admin privileges.",
            "A Linux user.",
            "A database admin."
        ],
        correctAnswer: 0,
        explanation: "The root user is the identity that is created when you first create your AWS account. It has complete access to all AWS services and resources in the account."
    },
    {
        id: "q355",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run scripts on EC2 instances without logging in?",
        options: [
            "AWS Systems Manager Run Command",
            "SSH",
            "RDP",
            "AWS CloudShell"
        ],
        correctAnswer: 0,
        explanation: "Run Command, a capability of AWS Systems Manager, lets you remotely and securely manage the configuration of your managed instances without logging in."
    },
    {
        id: "q356",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to visualize your cost and usage data?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Bills",
            "AWS Pricing Calculator"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer allows you to visualize, understand, and manage your AWS costs and usage over time."
    },
    {
        id: "q357",
        domain: "Cloud Concepts",
        text: "Which cloud computing deployment model connects infrastructure and applications between a cloud-based resource and existing resources not located in the cloud?",
        options: [
            "Hybrid Cloud",
            "Private Cloud",
            "Public Cloud",
            "Community Cloud"
        ],
        correctAnswer: 0,
        explanation: "A hybrid cloud connects infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud (e.g. on-premises)."
    },
    {
        id: "q358",
        domain: "Security and Compliance",
        text: "Which service allows you to assess the security of your applications running on EC2?",
        options: [
            "Amazon Inspector",
            "AWS WAF",
            "AWS Shield",
            "Amazon Macie"
        ],
        correctAnswer: 0,
        explanation: "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS."
    },
    {
        id: "q359",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to speed up static and dynamic web content using a global network?",
        options: [
            "Amazon CloudFront",
            "Amazon S3",
            "Amazon Route 53",
            "AWS Global Accelerator"
        ],
        correctAnswer: 0,
        explanation: "Amazon CloudFront is a fast content delivery network (CDN) service."
    },
    {
        id: "q360",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Support plan provides business hours email access to Cloud Support Associates?",
        options: [
            "Developer",
            "Basic",
            "Business",
            "Enterprise"
        ],
        correctAnswer: 0,
        explanation: "The Developer support plan allows one primary contact to open support cases via email during business hours."
    },
    {
        id: "q361",
        domain: "Cloud Concepts",
        text: "Which AWS service is a regional service?",
        options: [
            "Amazon EC2",
            "Amazon Route 53 (Global)",
            "Amazon CloudFront (Global)",
            "Check AWS IAM (Global)"
        ],
        correctAnswer: 0,
        explanation: "Most services like EC2, EBS, and RDS are regional. You launch them into a specific Region."
    },
    {
        id: "q362",
        domain: "Security and Compliance",
        text: "Which service allows you to manage multiple AWS accounts?",
        options: [
            "AWS Organizations",
            "AWS IAM",
            "AWS Config",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources."
    },
    {
        id: "q363",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to transfer exabytes of data to AWS physically?",
        options: [
            "AWS Snowmobile",
            "AWS Snowball Edge",
            "AWS Snowcone",
            "AWS Direct Connect"
        ],
        correctAnswer: 0,
        explanation: "AWS Snowmobile is an Exabyte-scale data transfer service used to move extremely large amounts of data to AWS."
    },
    {
        id: "q364",
        domain: "Billing, Pricing, and Support",
        text: "Which service can alert you if you forget to stop an expensive instance?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "AWS Budgets can monitor your usage (e.g. EC2 instance hours) and alert you if it exceeds a threshold."
    },
    {
        id: "q365",
        domain: "Cloud Concepts",
        text: "Which of the following is a shared control in the Shared Responsibility Model?",
        options: [
            "Patch Management",
            "Physical Security",
            "Customer Data",
            "Firmware updates"
        ],
        correctAnswer: 0,
        explanation: "Patch Management is a shared control. AWS patches the infrastructure (hypervisor/managed services), and you patch your guest OS/applications."
    },
    {
        id: "q366",
        domain: "Security and Compliance",
        text: "Which service allows you to rotate database credentials automatically?",
        options: [
            "AWS Secrets Manager",
            "AWS KMS",
            "AWS Systems Manager Parameter Store",
            "AWS IAM"
        ],
        correctAnswer: 0,
        explanation: "AWS Secrets Manager helps you protect secrets and acts as a central store, including automatic rotation for supported services."
    },
    {
        id: "q367",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run SQL queries on data in S3 directly?",
        options: [
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue",
            "Amazon Kinesis"
        ],
        correctAnswer: 0,
        explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL."
    },
    {
        id: "q368",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan includes infrastructure event management?",
        options: [
            "Enterprise",
            "Business",
            "Developer",
            "Basic"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure Event Management (IEM) is included in the Enterprise Support plan (and available for an additional fee in Business)."
    },
    {
        id: "q369",
        domain: "Cloud Concepts",
        text: "Which factor drives the cost of EC2?",
        options: [
            "Instance type",
            "Region's weather",
            "Number of VPCs",
            "Account age"
        ],
        correctAnswer: 0,
        explanation: "The instance type (CPU, RAM, etc.) is a primary driver of EC2 cost."
    },
    {
        id: "q370",
        domain: "Security and Compliance",
        text: "Which service allows you to filter malicious web traffic?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "Security Groups"
        ],
        correctAnswer: 0,
        explanation: "AWS WAF allows you to create rules to filter web traffic based on IP addresses, HTTP headers, and URI strings."
    },
    {
        id: "q371",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to create a graph database?",
        options: [
            "Amazon Neptune",
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift"
        ],
        correctAnswer: 0,
        explanation: "Amazon Neptune is a fast, reliable, fully managed graph database service."
    },
    {
        id: "q372",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to estimate the cost of an architecture solution?",
        options: [
            "AWS Pricing Calculator",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Bills"
        ],
        correctAnswer: 0,
        explanation: "The AWS Pricing Calculator allows you to estimate the cost of your use cases on AWS."
    },
    {
        id: "q373",
        domain: "Cloud Concepts",
        text: "Which benefit refers to the ability to increase or decrease resources based on demand?",
        options: [
            "Scalability",
            "Agility",
            "Global Reach",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Scalability (similar to elasticity, but often refers to the *ability* to handle growth) allows you to increase or decrease resources."
    },
    {
        id: "q374",
        domain: "Security and Compliance",
        text: "Which AWS service is used to create users, groups, and roles?",
        options: [
            "AWS IAM",
            "AWS Organizations",
            "AWS Directory Service",
            "Amazon Cognito"
        ],
        correctAnswer: 0,
        explanation: "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely."
    },
    {
        id: "q375",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run containerized applications?",
        options: [
            "Amazon ECS",
            "Amazon EC2 (Manual)",
            "Amazon EKS",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "You can run containers on ECS, EKS, or even manually on EC2 instances."
    },
    {
        id: "q376",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan has a < 15 minute response time for business-critical system down events?",
        options: [
            "Enterprise",
            "Business",
            "Developer",
            "Basic"
        ],
        correctAnswer: 0,
        explanation: "The Enterprise Support plan offers a < 15 minute response time for Business-Critical System Down cases."
    },
    {
        id: "q377",
        domain: "Cloud Concepts",
        text: "Which principle focuses on using the right tool for the job?",
        options: [
            "Performance Efficiency",
            "Cost Optimization",
            "Security",
            "Reliability"
        ],
        correctAnswer: 0,
        explanation: "Performance Efficiency includes selecting the right resource types and sizes based on workload requirements."
    },
    {
        id: "q378",
        domain: "Security and Compliance",
        text: "Which service allows you to manage encryption keys in a single-tenant hardware security module?",
        options: [
            "AWS CloudHSM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. It provides single-tenant access."
    },
    {
        id: "q379",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed ledger database?",
        options: [
            "Amazon QLDB",
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Neptune"
        ],
        correctAnswer: 0,
        explanation: "Amazon Quantum Ledger Database (QLDB) is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log."
    },
    {
        id: "q381",
        domain: "Security and Compliance",
        text: "Which AWS service allows you to centrally manage security policies across multiple AWS accounts?",
        options: [
            "AWS Firewall Manager",
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty"
        ],
        correctAnswer: 0,
        explanation: "AWS Firewall Manager allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations."
    },
    {
        id: "q382",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to build, train, and deploy machine learning models quickly?",
        options: [
            "Amazon SageMaker",
            "Amazon Rekognition",
            "Amazon Polly",
            "Amazon Lex"
        ],
        correctAnswer: 0,
        explanation: "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly."
    },
    {
        id: "q383",
        domain: "Cloud Concepts",
        text: "Which AWS pricing model is generally the most expensive per hour?",
        options: [
            "On-Demand Instances",
            "Spot Instances",
            "Reserved Instances",
            "Savings Plans"
        ],
        correctAnswer: 0,
        explanation: "On-Demand Instances are typically the most expensive option because you are paying for flexibility and no long-term commitment."
    },
    {
        id: "q384",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool provides you with a set of best practice checks for cost optimization?",
        options: [
            "AWS Trusted Advisor",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Compute Optimizer"
        ],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor provides a 'Cost Optimization' category with checks to help you save money."
    },
    {
        id: "q385",
        domain: "Security and Compliance",
        text: "Which service helps you ensure your IAM users have strong passwords?",
        options: [
            "IAM Password Policy",
            "AWS Secrets Manager",
            "AWS KMS",
            "Amazon Cognito"
        ],
        correctAnswer: 0,
        explanation: "You can set an IAM Password Policy on your AWS account to enforce complexity requirements and rotation periods for user passwords."
    },
    {
        id: "q386",
        domain: "Cloud Technology and Services",
        text: "Which service is used to create a virtual network dedicated to your AWS account?",
        options: [
            "Amazon VPC",
            "AWS Direct Connect",
            "Amazon Route 53",
            "AWS Global Accelerator"
        ],
        correctAnswer: 0,
        explanation: "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
    },
    {
        id: "q387",
        domain: "Cloud Concepts",
        text: "Which cloud architecture principle allows you to provision resources on demand?",
        options: [
            "Self-service",
            "Automated scaling",
            "Broad network access",
            "Resource pooling"
        ],
        correctAnswer: 0,
        explanation: "On-demand self-service allows you to provision computing capabilities, such as server time and network storage, as needed automatically without requiring human interaction with each service provider."
    },
    {
        id: "q388",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS support plan includes a dedicated Technical Account Manager (TAM)?",
        options: [
            "Enterprise Support",
            "Business Support",
            "Developer Support",
            "Basic Support"
        ],
        correctAnswer: 0,
        explanation: "Only the Enterprise Support plan includes a designated Technical Account Manager (TAM) to proactively assist you."
    },
    {
        id: "q389",
        domain: "Security and Compliance",
        text: "Which service provides a hardware security module (HSM) for generating and storing keys?",
        options: [
            "AWS CloudHSM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudHSM provides hardware security modules in the AWS Cloud to generate and use your own encryption keys."
    },
    {
        id: "q390",
        domain: "Cloud Technology and Services",
        text: "Which service can identify objects, people, text, scenes, and activities in images and videos?",
        options: [
            "Amazon Rekognition",
            "Amazon Polly",
            "Amazon Lex",
            "Amazon Comprehend"
        ],
        correctAnswer: 0,
        explanation: "Amazon Rekognition makes it easy to add image and video analysis to your applications."
    },
    {
        id: "q391",
        domain: "Cloud Concepts",
        text: "Which is a benefit of the 'Economies of Scale' in cloud computing?",
        options: [
            "Lower variable costs",
            "Higher fixed costs",
            "Increased hardware maintenance",
            "Reduced security"
        ],
        correctAnswer: 0,
        explanation: "Because AWS operates at a massive scale, it can achieve lower variable costs than you could on your own."
    },
    {
        id: "q392",
        domain: "Security and Compliance",
        text: "Which service allows you to scan your EC2 instances for software vulnerabilities?",
        options: [
            "Amazon Inspector",
            "AWS Trusted Advisor",
            "AWS WAF",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices."
    },
    {
        id: "q393",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to create conversational interfaces (chatbots) using voice and text?",
        options: [
            "Amazon Lex",
            "Amazon Polly",
            "Amazon Connect",
            "Amazon Transcribe"
        ],
        correctAnswer: 0,
        explanation: "Amazon Lex is a service for building conversational interfaces into any application using voice and text (the same technology as Alexa)."
    },
    {
        id: "q394",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to view the current status of all AWS services?",
        options: [
            "AWS Service Health Dashboard",
            "AWS Personal Health Dashboard",
            "AWS CloudTrail",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "The AWS Service Health Dashboard displays the general status of AWS services globally."
    },
    {
        id: "q395",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on selecting the right resource types?",
        options: [
            "Performance Efficiency",
            "Cost Optimization",
            "Security",
            "Reliability"
        ],
        correctAnswer: 0,
        explanation: "Performance Efficiency includes selection of the right resource types and sizes based on workload requirements."
    },
    {
        id: "q396",
        domain: "Security and Compliance",
        text: "Which service monitors your AWS account for malicious activity and unauthorized behavior?",
        options: [
            "Amazon GuardDuty",
            "Amazon Macie",
            "AWS Shield",
            "AWS WAF"
        ],
        correctAnswer: 0,
        explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior."
    },
    {
        id: "q397",
        domain: "Cloud Technology and Services",
        text: "Which service provides a cloud-based contact center?",
        options: [
            "Amazon Connect",
            "Amazon Pinpoint",
            "Amazon SES",
            "Amazon SNS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Connect is an easy-to-use omnichannel cloud contact center that helps you provide superior customer service at a lower cost."
    },
    {
        id: "q398",
        domain: "Billing, Pricing, and Support",
        text: "Which of the following is NOT a fundamental driver of cost in AWS?",
        options: [
            "Data entry",
            "Compute",
            "Storage",
            "Data transfer out"
        ],
        correctAnswer: 0,
        explanation: "You typically do not pay for data entry (uploading data) or simply having an account. The main cost drivers are Compute, Storage, and Data Transfer Out."
    },
    {
        id: "q399",
        domain: "Cloud Concepts",
        text: "Which design principle suggests designing systems that heal themselves?",
        options: [
            "Design for failure",
            "Security first",
            "Stop guessing capacity",
            "Infrastructure as code"
        ],
        correctAnswer: 0,
        explanation: "Design for failure implies assuming failure will occur and building mechanisms to recover automatically (self-healing)."
    },
    {
        id: "q400",
        domain: "Security and Compliance",
        text: "Which service allows you to grant access to S3 resources to a user in another AWS account?",
        options: [
            "S3 Bucket Policy",
            "Security Group",
            "Network ACL",
            "AWS WAF"
        ],
        correctAnswer: 0,
        explanation: "Cross-account access to S3 buckets is commonly managed using S3 Bucket Policies."
    },
    {
        id: "q401",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run code without provisioning servers?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "Amazon RDS",
            "Amazon Redshift"
        ],
        correctAnswer: 0,
        explanation: "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers."
    },
    {
        id: "q402",
        domain: "Billing, Pricing, and Support",
        text: "Which tool helps you choose the optimal AWS resource configuration based on your workload's history?",
        options: [
            "AWS Compute Optimizer",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Pricing Calculator"
        ],
        correctAnswer: 0,
        explanation: "AWS Compute Optimizer recommends optimal AWS resources for your workloads to reduce costs and improve performance by using machine learning to analyze historical utilization metrics."
    },
    {
        id: "q403",
        domain: "Cloud Concepts",
        text: "Which AWS Region feature allows you to keep data within specific geographic boundaries?",
        options: [
            "Data Sovereignty",
            "High Availability",
            "Elasticity",
            "Global Reach"
        ],
        correctAnswer: 0,
        explanation: "Regions allow you to deploy data in specific locations to meet data sovereignty and compliance requirements."
    },
    {
        id: "q404",
        domain: "Security and Compliance",
        text: "Which feature allows you to securely access a private RDS database from your local machine?",
        options: [
            "AWS VPN or Direct Connect",
            "Make the RDS public",
            "Use S3 Transfer Acceleration",
            "Use CloudFront"
        ],
        correctAnswer: 0,
        explanation: "To access a private RDS (in a private subnet), you typically establishing a VPN connection or use a bastion host/SSM Session Manager. Exposing it publicly is not a secure practice."
    },
    {
        id: "q405",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to send push notifications to mobile devices?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon SES",
            "AWS Lambda"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Notification Service (Amazon SNS) enables you to send push notifications to mobile devices (iOS, Android, etc.) as well as SMS and email."
    },
    {
        id: "q406",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service is free to use but you pay for the resources it creates?",
        options: [
            "AWS CloudFormation",
            "Amazon EC2",
            "Amazon RDS",
            "Amazon S3"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudFormation (and Elastic Beanstalk) are free services, but you pay for the underlying AWS resources (like EC2 instances, Load Balancers) they provision."
    },
    {
        id: "q407",
        domain: "Cloud Concepts",
        text: "Which of the following is a responsibility of the customer under the shared responsibility model?",
        options: [
            "Guest operating system patching",
            "Physical security of data centers",
            "Network infrastructure maintenance",
            "Disposal of failed drives"
        ],
        correctAnswer: 0,
        explanation: "The customer is responsible for security 'in' the cloud, which includes patching the guest operating system and applications."
    },
    {
        id: "q408",
        domain: "Security and Compliance",
        text: "Which service protects against accidental deletion of S3 objects?",
        options: [
            "S3 Versioning",
            "S3 Replication",
            "S3 Encryption",
            "S3 Lifecycle Policies"
        ],
        correctAnswer: 0,
        explanation: "S3 Versioning keeps multiple variants of an object in the same bucket. It can be used to preserve, retrieve, and restore every version of every object, protecting against accidental deletion."
    },
    {
        id: "q409",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to discover, classify, and protect sensitive data?",
        options: [
            "Amazon Macie",
            "Amazon GuardDuty",
            "AWS Shield",
            "AWS Inspector"
        ],
        correctAnswer: 0,
        explanation: "Amazon Macie is a fully managed data security and data privacy service that uses machine learning to protect sensitive data in AWS."
    },
    {
        id: "q410",
        domain: "Billing, Pricing, and Support",
        text: "Which is a valid payment option for Reserved Instances?",
        options: [
            "All Upfront, Partial Upfront, No Upfront",
            "Monthly only",
            "Daily only",
            "Post-paid only"
        ],
        correctAnswer: 0,
        explanation: "Reserved Instances offer three payment options: All Upfront (greatest discount), Partial Upfront, and No Upfront (lowest discount)."
    },
    {
        id: "q411",
        domain: "Cloud Concepts",
        text: "Which cloud architecture characteristic allows a system to withstand some measure of degradation?",
        options: [
            "Fault tolerance",
            "Scalability",
            "Elasticity",
            "Agility"
        ],
        correctAnswer: 0,
        explanation: "Fault tolerance is the ability of a system to continue operating properly in the event of the failure of some of its components."
    },
    {
        id: "q412",
        domain: "Security and Compliance",
        text: "Which AWS artifact provides information about AWS's compliance with global standards?",
        options: [
            "AWS Compliance Reports (via AWS Artifact)",
            "AWS Whitepapers",
            "AWS Blog",
            "AWS Documentation"
        ],
        correctAnswer: 0,
        explanation: "AWS Artifact allows you to download AWS security and compliance documents such as ISO certifications and SOC reports."
    },
    {
        id: "q413",
        domain: "Cloud Technology and Services",
        text: "Which service serves as a global content delivery network?",
        options: [
            "Amazon CloudFront",
            "Amazon VPC",
            "Amazon Route 53",
            "AWS Direct Connect"
        ],
        correctAnswer: 0,
        explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data to customers globally."
    },
    {
        id: "q414",
        domain: "Billing, Pricing, and Support",
        text: "Which tagging strategy helps in tracking costs by department?",
        options: [
            "Cost Allocation Tags",
            "Security Tags",
            "Technical Tags",
            "Automation Tags"
        ],
        correctAnswer: 0,
        explanation: "Cost Allocation Tags allow you to categorize and track your AWS costs, for example, by department, project, or cost center."
    },
    {
        id: "q415",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on the ability of a system to recover from infrastructure or service disruptions?",
        options: [
            "Reliability",
            "Security",
            "Performance Efficiency",
            "Cost Optimization"
        ],
        correctAnswer: 0,
        explanation: "The Reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it's expected to."
    },
    {
        id: "q416",
        domain: "Security and Compliance",
        text: "Which service allows you to create and manage safe, private networks in the AWS Cloud?",
        options: [
            "Amazon VPC",
            "Amazon CloudFront",
            "AWS Global Accelerator",
            "Amazon Route 53"
        ],
        correctAnswer: 0,
        explanation: "Amazon VPC enables you to launch AWS resources into a virtual network that you've defined, giving you control over the network environment."
    },
    {
        id: "q417",
        domain: "Cloud Technology and Services",
        text: "Which service provides managed DDoS protection for your applications running on AWS?",
        options: [
            "AWS Shield",
            "AWS WAF",
            "Amazon GuardDuty",
            "Amazon Inspector"
        ],
        correctAnswer: 0,
        explanation: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS."
    },
    {
        id: "q418",
        domain: "Billing, Pricing, and Support",
        text: "What allows you to access the AWS Trusted Advisor checks?",
        options: [
            "AWS Free Tier (Core checks) / Business Support (Full checks)",
            "Only Enterprise Support",
            "Only via API",
            "It is always free for all checks"
        ],
        correctAnswer: 0,
        explanation: "Basic Trusted Advisor checks are available to all customers. The full set of checks requires Business or Enterprise support."
    },
    {
        id: "q419",
        domain: "Cloud Concepts",
        text: "Which AWS infrastructure component consists of one or more discrete data centers with redundant power, networking, and connectivity?",
        options: [
            "Availability Zone",
            "Region",
            "Edge Location",
            "Local Zone"
        ],
        correctAnswer: 0,
        explanation: "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region."
    },
    {
        id: "q420",
        domain: "Security and Compliance",
        text: "Which service allows you to perform security assessments on your Amazon EC2 instances?",
        options: [
            "Amazon Inspector",
            "AWS WAF",
            "AWS Shield",
            "AWS Trusted Advisor"
        ],
        correctAnswer: 0,
        explanation: "Amazon Inspector allows you to analyze the behavior of your AWS resources and helps you to identify potential security issues."
    },
    {
        id: "q421",
        domain: "Cloud Technology and Services",
        text: "Which service provides temporary, block-level storage for an instance that is deleted when the instance is stopped?",
        options: [
            "Instance Store",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3"
        ],
        correctAnswer: 0,
        explanation: "An Instance Store (ephemeral storage) provides temporary block-level storage for your instance. This storage is located on disks that are physically attached to the host computer. Data is lost if the instance stops."
    },
    {
        id: "q422",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service allows you to receive a phone call from support?",
        options: [
            "AWS Support (Business/Enterprise plans)",
            "AWS Community Forums",
            "AWS Documentation",
            "AWS Personal Health Dashboard"
        ],
        correctAnswer: 0,
        explanation: "Phone support is available for customers on the Business and Enterprise support plans."
    },
    {
        id: "q423",
        domain: "Cloud Concepts",
        text: "Which statement about the Total Cost of Ownership (TCO) is true?",
        options: [
            "AWS helps reduce TCO by removing the need to invest in heavy capital expenditure.",
            "TCO is always higher in the cloud.",
            "TCO only considers software licensing.",
            "TCO is not relevant to cloud computing."
        ],
        correctAnswer: 0,
        explanation: "Cloud computing helps reduce TCO by eliminating the upfront cost of infrastructure (CapEx) and reducing operational costs (OpEx) through economies of scale."
    },
    {
        id: "q424",
        domain: "Security and Compliance",
        text: "Which feature allows you to attach a network interface to an instance in a different subnet?",
        options: [
            "Elastic Network Interface (ENI)",
            "Elastic IP",
            "Internet Gateway",
            "NAT Gateway"
        ],
        correctAnswer: 0,
        explanation: "An Elastic Network Interface (ENI) is a logical networking component in a VPC that represents a virtual network card. You can attach multiple ENIs to an instance."
    },
    {
        id: "q425",
        domain: "Cloud Technology and Services",
        text: "Which AWS service allows you to run code in response to triggers like data changes in a DynamoDB table?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "Amazon ECS",
            "AWS Batch"
        ],
        correctAnswer: 0,
        explanation: "AWS Lambda allows you to run code in response to triggers such as changes in data, shifts in system state, or user actions."
    },
    {
        id: "q426",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS feature can answer questions about your billing and account usage in natural language?",
        options: [
            "AWS Cost Explorer (some features are improving, but primarily Query driven), actually Amazon Q/AWS Chatbot. But historically 'Knowledge Center' or 'Support'. In the context of options: AWS Support Center",
            "AWS Knowledge Center",
            "AWS Support Center",
            "Amazon Q Business"
        ],
        correctAnswer: 3,
        explanation: "Amazon Q (Business/Developer) is the new generative AI assistant. However, for a basic CLF question, usually 'AWS Support' is the place for help. Let's stick to standard tools: AWS Cost Explorer allows detailed analysis. The most accurate 'standard' answer for billing help is contacting AWS Support."
    },
    {
        id: "q427",
        domain: "Cloud Concepts",
        text: "Which of the following is an example of 'undifferentiated heavy lifting' that AWS manages?",
        options: [
            "Maintaining physical servers",
            "Developing application code",
            "Setting up user accounts",
            "Analyzing business data"
        ],
        correctAnswer: 0,
        explanation: "Undifferentiated heavy lifting refers to the IT tasks that don't add unique value to your business, such as buying, installing, maintaining, and powering servers."
    },
    {
        id: "q428",
        domain: "Security and Compliance",
        text: "Which service allows you to create valid temporary security credentials?",
        options: [
            "AWS STS (Security Token Service)",
            "AWS IAM",
            "AWS KMS",
            "AWS Secrets Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Security Token Service (AWS STS) is a web service that enables you to request temporary, limited-privilege credentials for AWS IAM users or for users that you authenticate (federated users)."
    },
    {
        id: "q429",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to migrate 10s of PB of data to AWS using a ruggedized storage appliance?",
        options: [
            "AWS Snowball Edge",
            "AWS Snowmobile",
            "AWS Direct Connect",
            "AWS Storage Gateway"
        ],
        correctAnswer: 0,
        explanation: "AWS Snowball Edge is a data migration and edge computing device. Snowmobile is for Exabytes. Snowball is for Petabytes (PB)."
    },
    {
        id: "q431",
        domain: "Security and Compliance",
        text: "Which service enables you to audit and monitor changes to your AWS resources?",
        options: [
            "AWS Config",
            "AWS CloudTrail",
            "Amazon GuardDuty",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Config audits and continuously monitors the configuration of your AWS resources to ensure compliance."
    },
    {
        id: "q432",
        domain: "Cloud Technology and Services",
        text: "Which service provides a fully managed, MongoDB-compatible document database?",
        options: [
            "Amazon DocumentDB",
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Neptune"
        ],
        correctAnswer: 0,
        explanation: "Amazon DocumentDB (with MongoDB compatibility) is a fast, scalable, highly available, and fully managed document database service."
    },
    {
        id: "q433",
        domain: "Cloud Concepts",
        text: "Which AWS benefit allows you to deploy applications to customers around the world with low latency?",
        options: [
            "Global Reach",
            "Elasticity",
            "Agility",
            "Cost Optimization"
        ],
        correctAnswer: 0,
        explanation: "Global Reach uses the AWS global infrastructure (Regions, AZs, Edge Locations) to deploy apps globally with low latency."
    },
    {
        id: "q434",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan provides access to the 'AWS Support API'?",
        options: [
            "Business and Enterprise",
            "Developer",
            "Basic",
            "All plans"
        ],
        correctAnswer: 0,
        explanation: "The AWS Support API (for automated case management) is available only on Business and Enterprise support plans."
    },
    {
        id: "q435",
        domain: "Security and Compliance",
        text: "Which service allows you to find valid AMI IDs?",
        options: [
            "AWS Systems Manager Parameter Store (for public parameters) / EC2 Console",
            "AWS Marketplace",
            "AWS Config",
            "Amazon Inspector"
        ],
        correctAnswer: 1,
        explanation: "You can find AMIs in the AWS Marketplace, or searching via the EC2 console. Systems Manager Parameter Store also hosts public parameters for latest Linux AMIs."
    },
    {
        id: "q436",
        domain: "Cloud Technology and Services",
        text: "Which service is a highly available and scalable in-memory data store from the cloud?",
        options: [
            "Amazon ElastiCache",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        correctAnswer: 0,
        explanation: "Amazon ElastiCache allows you to utilize in-memory caches (Redis or Memcached) to improve application performance."
    },
    {
        id: "q437",
        domain: "Cloud Concepts",
        text: "Which feature of AWS allows you to manually launch instances in physically isolated hardware?",
        options: [
            "Dedicated Hosts",
            "Reserved Instances",
            "Spot Instances",
            "Placement Groups"
        ],
        correctAnswer: 0,
        explanation: "Dedicated Hosts allow you to provision a physical server fully dedicated for your use."
    },
    {
        id: "q438",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool allows you to consolidate billing and Volume Discounts?",
        options: [
            "AWS Organizations (Consolidated Billing)",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Billing Dashboard"
        ],
        correctAnswer: 0,
        explanation: "Consolidated billing in AWS Organizations treats all accounts as one for billing purposes, allowing you to reach volume discount tiers faster."
    },
    {
        id: "q439",
        domain: "Security and Compliance",
        text: "Which AWS service is used to protect your application from SQL injection and Cross-Site Scripting (XSS)?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "AWS Firewall Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS WAF allows you to create rules that block common web exploits like SQL injection and XSS."
    },
    {
        id: "q440",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed message queuing service?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon SES",
            "Amazon MQ"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Queue Service (Amazon SQS) offers a secure, durable, and available hosted queue that lets you integrate and decouple distributed software systems and components."
    },
    {
        id: "q441",
        domain: "Cloud Concepts",
        text: "Which term refers to the delay before a transfer of data begins following an instruction?",
        options: [
            "Latency",
            "Throughput",
            "Bandwidth",
            "Availability"
        ],
        correctAnswer: 0,
        explanation: "Latency is the delay between a request and the response. AWS Edge Locations help reduce latency."
    },
    {
        id: "q442",
        domain: "Security and Compliance",
        text: "Which service allows you to control traffic in and out of a subnet?",
        options: [
            "Network ACLs",
            "Security Groups",
            "Route Tables",
            "Internet Gateway"
        ],
        correctAnswer: 0,
        explanation: "Network Access Control Lists (NACLs) act as a firewall for controlling traffic in and out of one or more subnets."
    },
    {
        id: "q443",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run containers on AWS without managing the underlying EC2 instances?",
        options: [
            "AWS Fargate",
            "Amazon EC2",
            "Amazon EMR",
            "AWS OpsWorks"
        ],
        correctAnswer: 0,
        explanation: "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS."
    },
    {
        id: "q444",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool provides estimated costs for a new solution architecture?",
        options: [
            "AWS Pricing Calculator",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Marketplace"
        ],
        correctAnswer: 0,
        explanation: "The AWS Pricing Calculator is used to estimate the cost of a planned architecture."
    },
    {
        id: "q445",
        domain: "Cloud Concepts",
        text: "Which migration strategy involves moving an application to the cloud with no changes?",
        options: [
            "Rehosting (Lift and Shift)",
            "Replatforming",
            "Refactoring",
            "Repurchasing"
        ],
        correctAnswer: 0,
        explanation: "Rehosting (Lift and Shift) involves moving applications without making any changes to them."
    },
    {
        id: "q446",
        domain: "Security and Compliance",
        text: "Which service helps you manage software licenses in AWS?",
        options: [
            "AWS License Manager",
            "AWS Systems Manager",
            "AWS Config",
            "AWS Service Catalog"
        ],
        correctAnswer: 0,
        explanation: "AWS License Manager makes it easier to manage licenses in AWS and on-premises servers from software vendors such as Microsoft, SAP, Oracle, and IBM."
    },
    {
        id: "q447",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications?",
        options: [
            "AWS Elastic Beanstalk",
            "Amazon EC2",
            "AWS CloudFormation",
            "AWS OpsWorks"
        ],
        correctAnswer: 0,
        explanation: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services meant for developers who want to just upload code."
    },
    {
        id: "q448",
        domain: "Billing, Pricing, and Support",
        text: "Which service allows you to pay for your compute capacity up to 3 years in advance?",
        options: [
            "Reserved Instances / Savings Plans",
            "On-Demand",
            "Spot Instances",
            "Dedicated Hosts"
        ],
        correctAnswer: 0,
        explanation: "Reserved Instances and Savings Plans allow you to commit to a 1 or 3-year term, potentially paying upfront for a discount."
    },
    {
        id: "q449",
        domain: "Cloud Concepts",
        text: "What is the main benefit of decoupling applications?",
        options: [
            "Reduces inter-dependencies so failures don't cascade",
            "Increases tight coupling",
            "Makes the application faster",
            "Reduces storage costs"
        ],
        correctAnswer: 0,
        explanation: "Decoupling ensures that the components of an application run independently, so if one component fails or is slow, it doesn't break the entire system."
    },
    {
        id: "q450",
        domain: "Security and Compliance",
        text: "Which feature of AWS IAM enables you to add an extra layer of protection to user sign-in?",
        options: [
            "Multi-Factor Authentication (MFA)",
            "Access Keys",
            "Password Policy",
            "Groups"
        ],
        correctAnswer: 0,
        explanation: "MFA adds an extra layer of protection on top of your user name and password."
    },
    {
        id: "q451",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed graph database?",
        options: [
            "Amazon Neptune",
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon ElastiCache"
        ],
        correctAnswer: 0,
        explanation: "Amazon Neptune is a fast, reliable, fully managed graph database service."
    },
    {
        id: "q452",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan allows 'unlimited' number of contacts to open cases?",
        options: [
            "Business and Enterprise",
            "Developer",
            "Basic",
            "Free"
        ],
        correctAnswer: 0,
        explanation: "Business and Enterprise support plans allow an unlimited number of contacts to open unlimited cases."
    },
    {
        id: "q453",
        domain: "Cloud Concepts",
        text: "Which AWS offering is a hybrid cloud storage service?",
        options: [
            "AWS Storage Gateway",
            "Amazon S3",
            "Amazon EBS",
            "AWS Direct Connect"
        ],
        correctAnswer: 0,
        explanation: "AWS Storage Gateway connects on-premises software appliances with cloud-based storage."
    },
    {
        id: "q454",
        domain: "Security and Compliance",
        text: "Which service helps you identify and categorize data in S3?",
        options: [
            "Amazon Macie",
            "Amazon GuardDuty",
            "AWS Config",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "Amazon Macie is a data security and data privacy service that uses machine learning to identify and protect sensitive data in Amazon S3."
    },
    {
        id: "q455",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to create and manage APIs?",
        options: [
            "Amazon API Gateway",
            "AWS Lambda",
            "Amazon Route 53",
            "AWS AppSync"
        ],
        correctAnswer: 0,
        explanation: "Amazon API Gateway represents a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale."
    },
    {
        id: "q456",
        domain: "Billing, Pricing, and Support",
        text: "What generates a cost when using S3?",
        options: [
            "Storage, Requests, and Data Transfer Out",
            "Data Transfer In",
            "Listing bucket contents (minimal, but technically yes)",
            "Deleting data"
        ],
        correctAnswer: 0,
        explanation: "You pay for storage (GB/month), requests (GET, PUT, etc.), and data transfer out of AWS. Data transfer IN is usually free."
    },
    {
        id: "q457",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on business value?",
        options: [
            "Operational Excellence",
            "Cost Optimization",
            "Reliability",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Operational Excellence includes the ability to run and monitor systems to deliver business value."
    },
    {
        id: "q458",
        domain: "Security and Compliance",
        text: "Which allows you to define permissions for a specific AWS resource, like an S3 bucket?",
        options: [
            "Resource-based Policy",
            "Identity-based Policy",
            "Managed Policy",
            "Inline Policy"
        ],
        correctAnswer: 0,
        explanation: "Resource-based policies (like S3 Bucket Policies) are attached to a resource and define who can access it."
    },
    {
        id: "q459",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to process streaming data at any scale?",
        options: [
            "Amazon Kinesis",
            "AWS Glue",
            "Amazon Athena",
            "Amazon EMR"
        ],
        correctAnswer: 0,
        explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights."
    },
    {
        id: "q460",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps you migrate databases while keeping the source database operational?",
        options: [
            "AWS Database Migration Service (DMS)",
            "AWS Schema Conversion Tool",
            "AWS Snowball",
            "AWS DataSync"
        ],
        correctAnswer: 0,
        explanation: "AWS DMS helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration."
    },
    {
        id: "q461",
        domain: "Cloud Concepts",
        text: "Which AWS service is used to deploy infrastructure as code?",
        options: [
            "AWS CloudFormation",
            "AWS CodeDeploy",
            "AWS Systems Manager",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code."
    },
    {
        id: "q462",
        domain: "Security and Compliance",
        text: "Which feature allows you to connect your corporate data center to VPC?",
        options: [
            "AWS Direct Connect / Site-to-Site VPN",
            "VPC Peering",
            "Internet Gateway",
            "NAT Gateway"
        ],
        correctAnswer: 0,
        explanation: "You can use AWS Site-to-Site VPN or AWS Direct Connect to establish connectivity between your on-premises network and your VPC."
    },
    {
        id: "q463",
        domain: "Cloud Technology and Services",
        text: "Which service provides a petabyte-scale data warehouse?",
        options: [
            "Amazon Redshift",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Athena"
        ],
        correctAnswer: 0,
        explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud."
    },
    {
        id: "q464",
        domain: "Billing, Pricing, and Support",
        text: "Which tool can show you how much you spent on 'Production' resources vs 'Dev' resources?",
        options: [
            "AWS Cost Explorer (with Cost Allocation Tags)",
            "AWS Budgets",
            "AWS Pricing Calculator",
            "AWS Trusted Advisor"
        ],
        correctAnswer: 0,
        explanation: "By applying Cost Allocation Tags (like Environment:Production) and using Cost Explorer, you can compare costs by tag."
    },
    {
        id: "q465",
        domain: "Cloud Concepts",
        text: "Which determines the location where your EC2 instance is launched physically?",
        options: [
            "Availability Zone",
            "Region",
            "Edge Location",
            "Subnet"
        ],
        correctAnswer: 3,
        explanation: "Actually, when you launch an instance, you choose a Subnet, and the Subnet is tied to a specific Availability Zone (which is the physical location). So Subnet determines the AZ."
    },
    {
        id: "q466",
        domain: "Security and Compliance",
        text: "Which service records the history of changes to your specific resource configurations?",
        options: [
            "AWS Config",
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Config continuously monitors and records your AWS resource configurations."
    },
    {
        id: "q467",
        domain: "Cloud Technology and Services",
        text: "Which service is used for big data processing using frameworks like Spark and Hadoop?",
        options: [
            "Amazon EMR",
            "AWS Glue",
            "Amazon Redshift",
            "Amazon Athena"
        ],
        correctAnswer: 0,
        explanation: "Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Hadoop, Apache Spark, etc."
    },
    {
        id: "q468",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Support Plan provides a 1-hour response time for 'Production System Down'?",
        options: [
            "Business",
            "Developer",
            "Basic",
            "Free"
        ],
        correctAnswer: 0,
        explanation: "The Business Support plan offers < 1 hour response for Production System Down."
    },
    {
        id: "q469",
        domain: "Cloud Concepts",
        text: "Which design principle helps you reduce the interdependencies between components?",
        options: [
            "Loose Coupling",
            "Tight Coupling",
            "Monolithic Architecture",
            "Scaling Up"
        ],
        correctAnswer: 0,
        explanation: "Loose coupling breaks the dependencies between components, so that a change or failure in one does not break the others."
    },
    {
        id: "q470",
        domain: "Security and Compliance",
        text: "Which feature restricts external traffic to an EC2 instance?",
        options: [
            "Security Group",
            "IAM Role",
            "VPC Peering",
            "Route Table"
        ],
        correctAnswer: 0,
        explanation: "A Security Group acts as a virtual firewall for your EC2 instance to control incoming and outgoing traffic."
    },
    {
        id: "q471",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to create and manage desktops in the cloud?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "AWS Cloud9",
            "Amazon EC2"
        ],
        correctAnswer: 0,
        explanation: "Amazon WorkSpaces is a fully managed, secure Desktop-as-a-Service (DaaS) solution."
    },
    {
        id: "q472",
        domain: "Billing, Pricing, and Support",
        text: "Which service checks for service limits (quotas) in your account?",
        options: [
            "AWS Trusted Advisor",
            "AWS Config",
            "AWS CloudTrail",
            "AWS GuardDuty"
        ],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor checks for service usage that is greater than 80% of the service limit."
    },
    {
        id: "q473",
        domain: "Cloud Concepts",
        text: "Which cloud computing model offers the highest level of abstraction (least management)?",
        options: [
            "Software as a Service (SaaS)",
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)",
            "On-Premises"
        ],
        correctAnswer: 0,
        explanation: "SaaS provides a completed product that is run and managed by the service provider (e.g. Gmail, Salesforce)."
    },
    {
        id: "q474",
        domain: "Security and Compliance",
        text: "Which service provides on-demand access to AWS security and compliance reports?",
        options: [
            "AWS Artifact",
            "AWS Config",
            "AWS Trusted Advisor",
            "AWS IAM"
        ],
        correctAnswer: 0,
        explanation: "AWS Artifact is your go-to central resource for compliance-related information."
    },
    {
        id: "q475",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to run applications on an edge device?",
        options: [
            "AWS IoT Greengrass",
            "AWS Lambda",
            "Amazon CloudFront",
            "AWS Snowball"
        ],
        correctAnswer: 0,
        explanation: "AWS IoT Greengrass brings local compute, messaging, data caching, sync, and ML inference capabilities to edge devices."
    },
    {
        id: "q476",
        domain: "Billing, Pricing, and Support",
        text: "Which pricing model allows you to bid for unused EC2 capacity?",
        options: [
            "Spot Instances",
            "On-Demand",
            "Reserved Instances",
            "Dedicated Hosts"
        ],
        correctAnswer: 0,
        explanation: "Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud. Spot Instances are available at up to a 90% discount compared to On-Demand prices."
    },
    {
        id: "q477",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on potential security incidents?",
        options: [
            "Security",
            "Reliability",
            "Operational Excellence",
            "Cost Optimization"
        ],
        correctAnswer: 0,
        explanation: "The Security pillar includes the ability to protect data, systems, and assets, and to take advantage of cloud technologies to improve your security."
    },
    {
        id: "q478",
        domain: "Security and Compliance",
        text: "Which service is a managed service for creating and managing different types of encryption keys?",
        options: [
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager",
            "AWS CloudHSM"
        ],
        correctAnswer: 0,
        explanation: "AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services."
    },
    {
        id: "q479",
        domain: "Cloud Technology and Services",
        text: "Which service provides a highly available, scalable, fully managed generic publish/subscribe messaging service?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon SES",
            "AWS Pinpoint"
        ],
        correctAnswer: 0,
        explanation: "Amazon SNS is a fully managed pub/sub messaging service."
    },
    {
        id: "q481",
        domain: "Security and Compliance",
        text: "Which service allows you to centrally manage and automate security checks and compliance checks?",
        options: [
            "AWS Security Hub",
            "AWS Inspector",
            "Amazon GuardDuty",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS Security Hub gives you a comprehensive view of your security alerts and security posture across your AWS accounts."
    },
    {
        id: "q482",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to run functions at the edge locations?",
        options: [
            "Lambda@Edge",
            "CloudFront Functions",
            "AWS Global Accelerator",
            "AWS Edge Computing"
        ],
        correctAnswer: 0,
        explanation: "Lambda@Edge allows you to run Lambda code closer to your users (at CloudFront edge locations) to improve performance and reduce latency."
    },
    {
        id: "q483",
        domain: "Cloud Concepts",
        text: "Which of the following is a key component of the AWS Global Infrastructure?",
        options: [
            "Availability Zones",
            "Data Pipelines",
            "Resource Groups",
            "Access Keys"
        ],
        correctAnswer: 0,
        explanation: "The AWS Global Infrastructure consists of Regions, Availability Zones, and Edge Locations."
    },
    {
        id: "q484",
        domain: "Billing, Pricing, and Support",
        text: "Which is the most cost-effective storage class for data that is rarely accessed but must be retrievable within milliseconds?",
        options: [
            "S3 Standard-IA (Infrequent Access)",
            "S3 Glacier Deep Archive",
            "S3 Standard",
            "S3 Intelligent-Tiering"
        ],
        correctAnswer: 0,
        explanation: "S3 Standard-IA is for data that is accessed less frequently, but requires rapid access when needed."
    },
    {
        id: "q485",
        domain: "Security and Compliance",
        text: "Which AWS service is used to protect your data at rest in Amazon EBS?",
        options: [
            "AWS KMS",
            "AWS Shield",
            "AWS WAF",
            "AWS Certificate Manager"
        ],
        correctAnswer: 0,
        explanation: "Amazon EBS volumes can be encrypted using keys managed by AWS KMS."
    },
    {
        id: "q486",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to quickly deploy and scale applications using containers?",
        options: [
            "Amazon ECS",
            "AWS Lambda",
            "Amazon S3",
            "Amazon RDS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service."
    },
    {
        id: "q487",
        domain: "Cloud Concepts",
        text: "Which design principle implies that you should automate the creation of your infrastructure?",
        options: [
            "Infrastructure as Code",
            "Manual Provisioning",
            "Security by Design",
            "Loose Coupling"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure as Code (IaC) allows you to define and provision infrastructure using code and automation."
    },
    {
        id: "q488",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to create custom billing reports based on tags?",
        options: [
            "AWS Cost and Usage Report",
            "AWS Pricing Calculator",
            "AWS Trusted Advisor",
            "AWS Service Catalog"
        ],
        correctAnswer: 0,
        explanation: "The AWS Cost and Usage Report contains the most comprehensive set of AWS cost and usage data available, including your tags."
    },
    {
        id: "q489",
        domain: "Security and Compliance",
        text: "Which of the following creates a secure tunnel between your local device and a VPC?",
        options: [
            "Client VPN Endpoint",
            "Site-to-Site VPN",
            "Direct Connect",
            "VPC Peering"
        ],
        correctAnswer: 0,
        explanation: "AWS Client VPN is a managed client-based VPN service that enables you to securely access your AWS resources and on-premises network from any location."
    },
    {
        id: "q490",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to convert video files into different formats?",
        options: [
            "Amazon Elastic Transcoder / AWS Elemental MediaConvert",
            "Amazon Transcribe",
            "Amazon Polly",
            "Amazon Kinesis Video Streams"
        ],
        correctAnswer: 0,
        explanation: "AWS Elemental MediaConvert (or the older Elastic Transcoder) is a file-based video transcoding service with broadcast-grade features."
    },
    {
        id: "q491",
        domain: "Cloud Concepts",
        text: "Which AWS infrastructure concept allows you to launch resources in a virtual network that you define?",
        options: [
            "Amazon VPC",
            "A Subnet",
            "An Availability Zone",
            "A Region"
        ],
        correctAnswer: 0,
        explanation: "Amazon VPC is the virtual network dedicated to your AWS account."
    },
    {
        id: "q492",
        domain: "Security and Compliance",
        text: "Which service allows you to implement single sign-on across all your AWS accounts?",
        options: [
            "AWS IAM Identity Center (AWS SSO)",
            "AWS IAM",
            "Amazon Cognito",
            "AWS Directory Service"
        ],
        correctAnswer: 0,
        explanation: "AWS IAM Identity Center (formerly AWS SSO) is the recommended service for managing workforce access to multiple AWS accounts and applications."
    },
    {
        id: "q493",
        domain: "Cloud Technology and Services",
        text: "Which service provides a fully managed continuous integration (CI) service?",
        options: [
            "AWS CodeBuild",
            "AWS CodeCommit",
            "AWS CodeDeploy",
            "AWS CodePipeline"
        ],
        correctAnswer: 0,
        explanation: "AWS CodeBuild compiles source code, runs tests, and produces software packages that are ready to deploy."
    },
    {
        id: "q494",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS resource can you use to obtain a volume discount on S3?",
        options: [
            "Consolidated Billing (in AWS Organizations)",
            "Reserved Instances",
            "Spot Instances",
            "Dedicated Hosts"
        ],
        correctAnswer: 0,
        explanation: "By consolidating accounts in an Organization, usage from all accounts is combined to reach higher volume tiers for S3 pricing faster."
    },
    {
        id: "q495",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on running workloads effectively and gaining insight into their operations?",
        options: [
            "Operational Excellence",
            "Performance Efficiency",
            "Reliability",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Operational Excellence includes the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures."
    },
    {
        id: "q496",
        domain: "Security and Compliance",
        text: "Which service gives you visibility into your compliance with security recommendations?",
        options: [
            "AWS Security Hub",
            "AWS Shield",
            "AWS WAF",
            "Amazon Macie"
        ],
        correctAnswer: 0,
        explanation: "AWS Security Hub provides a comprehensive view of your high-priority security alerts and compliance status."
    },
    {
        id: "q497",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to easily manage source control?",
        options: [
            "AWS CodeCommit",
            "AWS CodeBuild",
            "AWS CodeDeploy",
            "AWS Cloud9"
        ],
        correctAnswer: 0,
        explanation: "AWS CodeCommit is a fully managed source control service that hosts secure Git-based repositories."
    },
    {
        id: "q498",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service is used to register a new domain name?",
        options: [
            "Amazon Route 53",
            "Amazon CloudFront",
            "AWS Certificate Manager",
            "Amazon VPC"
        ],
        correctAnswer: 0,
        explanation: "Amazon Route 53 is a highly available and scalable Cloud DNS web service that includes domain registration."
    },
    {
        id: "q499",
        domain: "Cloud Concepts",
        text: "Which type of scaling involves increasing the power of an existing resource (e.g., larger CPU)?",
        options: [
            "Vertical Scaling",
            "Horizontal Scaling",
            "Auto Scaling",
            "Elastic Scaling"
        ],
        correctAnswer: 0,
        explanation: "Vertical Scaling (scaling up) involves increasing the specifications (CPU, RAM) of an individual resource."
    },
    {
        id: "q500",
        domain: "Security and Compliance",
        text: "Which security concept implies giving a user only the permissions they need to do their job?",
        options: [
            "Least Privilege",
            "Defense in Depth",
            "Separation of Duties",
            "Traceability"
        ],
        correctAnswer: 0,
        explanation: "The Principle of Least Privilege states that you should grant only the permissions required to perform a task."
    },
    {
        id: "q501",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to orchestrate and automate your software release processes?",
        options: [
            "AWS CodePipeline",
            "AWS CodeCommit",
            "AWS X-Ray",
            "AWS OpsWorks"
        ],
        correctAnswer: 0,
        explanation: "AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates."
    },
    {
        id: "q502",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS support plan offers a < 4-hour response time for 'Check Production System Down' (impaired)?",
        options: [
            "Business",
            "Developer",
            "Basic",
            "Enterprise (15 min)"
        ],
        correctAnswer: 0,
        explanation: "Business Support offers < 4 hour response time for Production System Impaired cases."
    },
    {
        id: "q503",
        domain: "Cloud Concepts",
        text: "Which is a benefit of cloud computing related to speed?",
        options: [
            "Agility",
            "Reliability",
            "Security",
            "Cost Savings"
        ],
        correctAnswer: 0,
        explanation: "Agility allows you to innovate faster because you can focus your valuable IT resources on developing applications that differentiate your business."
    },
    {
        id: "q504",
        domain: "Security and Compliance",
        text: "Which of the following is an AWS managed service that helps you to create and control encryption keys used to encrypt your data?",
        options: [
            "AWS KMS",
            "AWS CloudHSM (Customer managed mostly)",
            "AWS Secrets Manager",
            "AWS WAF"
        ],
        correctAnswer: 0,
        explanation: "AWS KMS is a fully managed service that makes it easy to create and manage cryptographic keys."
    },
    {
        id: "q505",
        domain: "Cloud Technology and Services",
        text: "Which service helps you trace and analyze requests as they travel through your microservices?",
        options: [
            "AWS X-Ray",
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture."
    },
    {
        id: "q506",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps you track the history of inventory changes to resources?",
        options: [
            "AWS Config",
            "AWS CloudTrail",
            "AWS Systems Manager",
            "AWS Trusted Advisor"
        ],
        correctAnswer: 0,
        explanation: "AWS Config records configuration changes to your resources, effectively tracking inventory history."
    },
    {
        id: "q507",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on avoiding unnecessary costs?",
        options: [
            "Cost Optimization",
            "Performance Efficiency",
            "Operational Excellence",
            "Sustainability"
        ],
        correctAnswer: 0,
        explanation: "The Cost Optimization pillar includes the ability to run systems to deliver business value at the lowest price point."
    },
    {
        id: "q508",
        domain: "Security and Compliance",
        text: "Which component of the AWS Shared Responsibility Model is strictly the customer's responsibility?",
        options: [
            "Client-side data encryption",
            "Physical security of facilities",
            "Hypervisor patching",
            "Disks disposal"
        ],
        correctAnswer: 0,
        explanation: "Customers are responsible for 'Security in the Cloud', which includes client-side data encryption and data integrity authentication."
    },
    {
        id: "q509",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to launch Docker containers on AWS?",
        options: [
            "Amazon ECS",
            "Amazon RDS",
            "Amazon ElastiCache",
            "Amazon Neptune"
        ],
        correctAnswer: 0,
        explanation: "Amazon ECS is a fully managed container orchestration service that facilitates running Docker containers."
    },
    {
        id: "q510",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to view your AWS costs by service or linked account?",
        options: [
            "AWS Bills / Cost Explorer",
            "AWS Trusted Advisor",
            "AWS IAM",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "The Bills page (and Cost Explorer) allows you to view your costs broken down by service and by linked account."
    },
    {
        id: "q511",
        domain: "Cloud Concepts",
        text: "What does the concept of 'elasticity' allow you to do regarding costs?",
        options: [
            "Pay only for what you use by scaling down when demand is low",
            "Pay a fixed monthly fee",
            "Avoid paying for storage",
            "Eliminate data transfer costs"
        ],
        correctAnswer: 0,
        explanation: "Elasticity allows you to match supply with demand, so you don't pay for idle resources."
    },
    {
        id: "q512",
        domain: "Security and Compliance",
        text: "Which service scans for PII (Personally Identifiable Information) in S3 buckets?",
        options: [
            "Amazon Macie",
            "Amazon GuardDuty",
            "AWS Inspector",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "Amazon Macie uses machine learning to automatically discover and classify sensitive data, including PII, in AWS."
    },
    {
        id: "q513",
        domain: "Cloud Technology and Services",
        text: "Which service provides a collaborative file system for EC2 instances?",
        options: [
            "Amazon EFS",
            "Amazon EBS",
            "Amazon S3",
            "Amazon Glacier"
        ],
        correctAnswer: 0,
        explanation: "Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources."
    },
    {
        id: "q514",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Support Plan provides access to 'AWS Infrastructure Event Management' for an additional fee?",
        options: [
            "Business",
            "Developer",
            "Basic",
            "Free"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure Event Management is included in Enterprise, but available for an additional fee in Business Support."
    },
    {
        id: "q515",
        domain: "Cloud Concepts",
        text: "Which AWS concept refers to the physical location of your resources?",
        options: [
            "Region",
            "VPC",
            "Security Group",
            "IAM User"
        ],
        correctAnswer: 0,
        explanation: "An AWS Region is a physical location in the world where we have multiple Availability Zones."
    },
    {
        id: "q516",
        domain: "Security and Compliance",
        text: "Which service allows you to deploy SSL/TLS certificates to Elastic Load Balancers?",
        options: [
            "AWS Certificate Manager (ACM)",
            "AWS IAM",
            "AWS Secrets Manager",
            "AWS KMS"
        ],
        correctAnswer: 0,
        explanation: "ACM is used to provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services like ELB."
    },
    {
        id: "q517",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to create a private network connection to the AWS Cloud without using the public internet?",
        options: [
            "AWS Direct Connect",
            "AWS VPN",
            "Amazon VPC",
            "Internet Gateway"
        ],
        correctAnswer: 0,
        explanation: "AWS Direct Connect establishes a dedicated network connection from your premises to AWS, bypassing the public internet."
    },
    {
        id: "q518",
        domain: "Billing, Pricing, and Support",
        text: "Which service allows you to set custom cost and usage budgets?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Trusted Advisor",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS Budgets allows you to set custom budgets that alert you when your costs or usage exceed your budgeted amount."
    },
    {
        id: "q519",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on reducing the environmental impact of your workloads?",
        options: [
            "Sustainability",
            "Cost Optimization",
            "Reliability",
            "Performance Efficiency"
        ],
        correctAnswer: 0,
        explanation: "The Sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads."
    },
    {
        id: "q520",
        domain: "Security and Compliance",
        text: "Which service helps you to manage your security posture?",
        options: [
            "AWS Security Hub",
            "AWS IAM",
            "AWS WAF",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS Security Hub gives you a comprehensive view of your security posture across your AWS accounts."
    },
    {
        id: "q521",
        domain: "Cloud Technology and Services",
        text: "Which service provides a command line tool to manage your AWS services?",
        options: [
            "AWS CLI",
            "AWS SDK",
            "AWS Management Console",
            "AWS CloudShell"
        ],
        correctAnswer: 0,
        explanation: "The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services."
    },
    {
        id: "q522",
        domain: "Billing, Pricing, and Support",
        text: "Which factor does NOT affect the cost of an S3 bucket?",
        options: [
            "The name of the bucket",
            "Storage class",
            "Total size of objects",
            "Data transfer out"
        ],
        correctAnswer: 0,
        explanation: "The name of the bucket does not affect the cost. You pay for storage, requests, and data transfer."
    },
    {
        id: "q523",
        domain: "Cloud Concepts",
        text: "What is the relation between a Region and an Availability Zone?",
        options: [
            "A Region contains multiple Availability Zones",
            "An Availability Zone contains multiple Regions",
            "They are the same thing",
            "A Region is inside a Data Center"
        ],
        correctAnswer: 0,
        explanation: "An AWS Region consists of multiple, isolated, and physically separate AZs within a geographic area."
    },
    {
        id: "q524",
        domain: "Security and Compliance",
        text: "Which service detects intended changes to your infrastructure code?",
        options: [
            "CloudFormation Drift Detection",
            "AWS Config",
            "AWS CloudTrail",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "Drift detection enables you to detect whether a stack's actual configuration differs, or has drifted, from its expected configuration in CloudFormation."
    },
    {
        id: "q525",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to create and run virtual reality (VR) and augmented reality (AR) applications?",
        options: [
            "Amazon Sumerian",
            "Amazon Rekognition",
            "Amazon Polly",
            "Amazon Lex"
        ],
        correctAnswer: 0,
        explanation: "Amazon Sumerian lets you create and run virtual reality (VR), augmented reality (AR), and 3D applications quickly and easily."
    },
    {
        id: "q526",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS feature allows you to organize your AWS resources by user-defined keys and values?",
        options: [
            "Tags",
            "Resource Groups",
            "CloudFormation",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "Tags are key-value pairs that help you manage, identify, organize, search for, and filter resources."
    },
    {
        id: "q527",
        domain: "Cloud Concepts",
        text: "Which type of cloud computing is AWS?",
        options: [
            "Public Cloud",
            "Private Cloud",
            "Hybrid Cloud",
            "Personal Cloud"
        ],
        correctAnswer: 0,
        explanation: "AWS is a public cloud provider, offering resources over the internet to the general public."
    },
    {
        id: "q528",
        domain: "Security and Compliance",
        text: "Which service allows you to block traffic from specific IP addresses?",
        options: [
            "Network ACL",
            "Security Group (Allows only)",
            "IAM Policy",
            "VPC Peering"
        ],
        correctAnswer: 0,
        explanation: "Network ACLs support both allow and deny rules. Security Groups are stateful and only support allow rules."
    },
    {
        id: "q529",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to convert text into lifelike speech?",
        options: [
            "Amazon Polly",
            "Amazon Transcribe",
            "Amazon Lex",
            "Amazon Rekognition"
        ],
        correctAnswer: 0,
        explanation: "Amazon Polly is a service that turns text into lifelike speech."
    },
    {
        id: "q531",
        domain: "Security and Compliance",
        text: "Which service gives you access to a dedicated security team to help with DDoS attacks?",
        options: [
            "AWS Shield Advanced",
            "AWS Shield Standard",
            "AWS WAF",
            "Amazon Inspector"
        ],
        correctAnswer: 0,
        explanation: "AWS Shield Advanced provides 24x7 access to the AWS Shield Response Team (SRT)."
    },
    {
        id: "q532",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to send email using your own domains?",
        options: [
            "Amazon SES",
            "Amazon SNS",
            "Amazon SQS",
            "Amazon Connect"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Email Service (SES) is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application."
    },
    {
        id: "q533",
        domain: "Cloud Concepts",
        text: "Which AWS framework provides guidance on how to migrate to AWS?",
        options: [
            "AWS Cloud Adoption Framework (AWS CAF)",
            "AWS Well-Architected Framework",
            "AWS Shared Responsibility Model",
            "AWS Global Infrastructure"
        ],
        correctAnswer: 0,
        explanation: "The AWS Cloud Adoption Framework (AWS CAF) breaks down the complex process of planning a migration into manageable perspectives."
    },
    {
        id: "q534",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool provides a dashboard for viewing your cost and usage data?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Config",
            "Amazon CloudWatch"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer provides a visual interface to view and analyze your cost and usage."
    },
    {
        id: "q535",
        domain: "Security and Compliance",
        text: "Which service manages the Root User credentials?",
        options: [
            "You (The Customer)",
            "AWS Support",
            "AWS IAM",
            "AWS Organizations"
        ],
        correctAnswer: 0,
        explanation: "The Root User credentials (email and password) are strictly the customer's responsibility to secure. AWS cannot reset or manage them for you."
    },
    {
        id: "q536",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to find valid AMIs provided by the community?",
        options: [
            "Amazon EC2 Console / AWS Marketplace",
            "AWS Systems Manager",
            "AWS Trusted Advisor",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "You can find Community AMIs in the EC2 Launch Instance wizard or AWS Marketplace."
    },
    {
        id: "q537",
        domain: "Cloud Concepts",
        text: "Which perspective of the Cloud Adoption Framework (CAF) focuses on skills and organizational change?",
        options: [
            "People Perspective",
            "Business Perspective",
            "Governance Perspective",
            "Platform Perspective"
        ],
        correctAnswer: 0,
        explanation: "The People Information perspective focuses on preparing the teams for cloud adoption."
    },
    {
        id: "q538",
        domain: "Billing, Pricing, and Support",
        text: "Which service can notify you when your estimated monthly bill exceeds a threshold?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "Amazon CloudWatch Billing Alarms",
            "All of the above (CloudWatch and Budgets)"
        ],
        correctAnswer: 3,
        explanation: "Both AWS Budgets and Amazon CloudWatch Billing Alarms can be used to send notifications when costs exceed a threshold."
    },
    {
        id: "q539",
        domain: "Security and Compliance",
        text: "Which service acts as a firewall for your web applications?",
        options: [
            "AWS WAF",
            "Network ACL",
            "Security Group",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS Web Application Firewall (WAF) helps protect your web applications or APIs against common web exploits."
    },
    {
        id: "q540",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to mount a file system to an EC2 instance over the network?",
        options: [
            "Amazon EFS",
            "Amazon EBS",
            "Amazon S3",
            "Amazon Glacier"
        ],
        correctAnswer: 0,
        explanation: "Amazon EFS allows you to mount a shared file system via NFS."
    },
    {
        id: "q541",
        domain: "Cloud Concepts",
        text: "What does 'Stop Guessing Capacity' mean?",
        options: [
            "You can scale up and down automatically",
            "You should always over-provision",
            "You should always use On-Demand instances",
            "You should use a spreadsheet to calculate capacity"
        ],
        correctAnswer: 0,
        explanation: "Stop guessing capacity means you can access as much or as little capacity as you need, and scale up and down as required with only a few minutes notice."
    },
    {
        id: "q542",
        domain: "Security and Compliance",
        text: "Which service provides compliance-related documents such as ISO and PCI reports?",
        options: [
            "AWS Artifact",
            "AWS Systems Manager",
            "AWS Config",
            "AWS Trusted Advisor"
        ],
        correctAnswer: 0,
        explanation: "AWS Artifact is a self-service portal for on-demand access to AWS's compliance reports."
    },
    {
        id: "q543",
        domain: "Cloud Technology and Services",
        text: "Which service is a serverless query service that allows you to analyze S3 data using SQL?",
        options: [
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon Aurora",
            "Amazon RDS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL."
    },
    {
        id: "q544",
        domain: "Billing, Pricing, and Support",
        text: "Which is a benefit of Consolidated Billing?",
        options: [
            "One bill for multiple accounts",
            "Free support across all accounts",
            "Automatic cross-account access",
            "Shared security groups"
        ],
        correctAnswer: 0,
        explanation: "Consolidated Billing allows you to view and pay the bill for all accounts in the Organization from a single master account."
    },
    {
        id: "q545",
        domain: "Cloud Concepts",
        text: "Which design principle suggests replacing one large resource with multiple smaller resources?",
        options: [
            "Horizontal Scaling",
            "Vertical Scaling",
            "Loose Coupling",
            "High Availability"
        ],
        correctAnswer: 0,
        explanation: "Horizontal Scaling (scaling out) involves adding more resources (instances) rather than increasing the size of a single resource."
    },
    {
        id: "q546",
        domain: "Security and Compliance",
        text: "Which feature allows you to define a private network topology in AWS?",
        options: [
            "Amazon VPC",
            "Subnet",
            "Route Table",
            "Security Group"
        ],
        correctAnswer: 0,
        explanation: "Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you can launch resources in a virtual network that you define."
    },
    {
        id: "q547",
        domain: "Cloud Technology and Services",
        text: "Which service provides a graphical interface to create and manage AWS resources?",
        options: [
            "AWS Management Console",
            "AWS CLI",
            "AWS SDK",
            "AWS CloudShell"
        ],
        correctAnswer: 0,
        explanation: "The AWS Management Console is a web-based interface for accessing and managing AWS services."
    },
    {
        id: "q548",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS Support Plan gives you access to the 'AWS Trust & Safety' team?",
        options: [
            "All Plans",
            "Only Business",
            "Only Enterprise",
            "Only Developer"
        ],
        correctAnswer: 0,
        explanation: "All AWS customers have access to Customer Service for account/billing issues and the Trust & Safety team for abuse reporting."
    },
    {
        id: "q549",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on the ability to support development and run workloads effectively?",
        options: [
            "Operational Excellence",
            "Reliability",
            "Performance Efficiency",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Operational Excellence includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures."
    },
    {
        id: "q550",
        domain: "Security and Compliance",
        text: "Which service allows you to manage access to AWS services and resources securely?",
        options: [
            "AWS IAM",
            "AWS Organizations",
            "AWS Config",
            "AWS Secrets Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely."
    },
    {
        id: "q551",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to run applications on mobile devices?",
        options: [
            "AWS Amplify",
            "AWS Lambda",
            "Amazon Connect",
            "Amazon Pinpoint"
        ],
        correctAnswer: 0,
        explanation: "AWS Amplify creates a set of tools and services that enables mobile and front-end web developers to build secure, scalable full stack applications."
    },
    {
        id: "q552",
        domain: "Billing, Pricing, and Support",
        text: "Which pricing model provides the lowest price for EC2?",
        options: [
            "Spot Instances",
            "Reserved Instances",
            "On-Demand",
            "Savings Plans"
        ],
        correctAnswer: 0,
        explanation: "Spot Instances can offer up to 90% discount compared to On-Demand."
    },
    {
        id: "q553",
        domain: "Cloud Concepts",
        text: "Which cloud computing model gives you the most control over the operating system?",
        options: [
            "Infrastructure as a Service (IaaS)",
            "Platform as a Service (PaaS)",
            "Software as a Service (SaaS)",
            "Serverless"
        ],
        correctAnswer: 0,
        explanation: "IaaS (like EC2) gives you the highest level of control over your IT resources, including the operating system."
    },
    {
        id: "q554",
        domain: "Security and Compliance",
        text: "Which service utilizes Machine Learning to protect sensitive data?",
        options: [
            "Amazon Macie",
            "Amazon GuardDuty",
            "AWS WAF",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "Amazon Macie uses machine learning to automatically discover and classify sensitive data in AWS."
    },
    {
        id: "q555",
        domain: "Cloud Technology and Services",
        text: "Which service provides a managed relational database with support for multiple engines?",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Redshift",
            "Amazon ElastiCache"
        ],
        correctAnswer: 0,
        explanation: "Amazon RDS is a managed relational database service that supports Aurora, PostgreSQL, MySQL, MariaDB, Oracle, and SQL Server."
    },
    {
        id: "q556",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps you understand how your reservation coverage?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Config",
            "AWS Systems Manager"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer provides 'Reservation Reports' to help you visualize your RI coverage and utilization."
    },
    {
        id: "q557",
        domain: "Cloud Concepts",
        text: "Which is a benefit of 'Loose Coupling'?",
        options: [
            "It isolates failures to individual components",
            "It increases the size of components",
            "It requires more manual management",
            "It increases latency significantly"
        ],
        correctAnswer: 0,
        explanation: "Loose coupling isolates the components from one another, so if one fails, the others can continue to work."
    },
    {
        id: "q558",
        domain: "Security and Compliance",
        text: "Which service records API calls made on your account?",
        options: [
            "AWS CloudTrail",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS X-Ray"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudTrail tracks user activity and API usage."
    },
    {
        id: "q559",
        domain: "Cloud Technology and Services",
        text: "Which service is a fully managed Desktop-as-a-Service?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "AWS Cloud9",
            "Amazon EC2"
        ],
        correctAnswer: 0,
        explanation: "Amazon WorkSpaces is a fully managed, secure DaaS solution."
    },
    {
        id: "q560",
        domain: "Billing, Pricing, and Support",
        text: "Which service allows you to estimate the cost of moving your on-premises environment to AWS?",
        options: [
            "AWS Pricing Calculator",
            "AWS Migration Evaluator (formerly TSO Logic)",
            "AWS Cost Explorer",
            "AWS Budgets"
        ],
        correctAnswer: 1,
        explanation: "AWS Migration Evaluator provides a business case for cloud migration."
    },
    {
        id: "q561",
        domain: "Cloud Concepts",
        text: "Which AWS concept ensures that your data is replicated to multiple physical locations within a Region?",
        options: [
            "Availability Zones",
            "Cross-Region Replication",
            "Global Accelerator",
            "Edge Locations"
        ],
        correctAnswer: 0,
        explanation: "When you launch an instance in a Region, you should launch instances across multiple Availability Zones to achieve high availability."
    },
    {
        id: "q562",
        domain: "Security and Compliance",
        text: "Which service provides centralized management of firewall rules?",
        options: [
            "AWS Firewall Manager",
            "AWS WAF",
            "AWS Shield",
            "Security Groups"
        ],
        correctAnswer: 0,
        explanation: "AWS Firewall Manager is a security management service which allows you to centrally configure and manage firewall rules across your accounts and applications."
    },
    {
        id: "q563",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to distribute traffic across multiple targets?",
        options: [
            "Elastic Load Balancing (ELB)",
            "Auto Scaling",
            "Amazon Route 53",
            "AWS Global Accelerator"
        ],
        correctAnswer: 0,
        explanation: "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as EC2 instances."
    },
    {
        id: "q564",
        domain: "Billing, Pricing, and Support",
        text: "Which capability of AWS Organizations enables you to receive a single bill for all accounts?",
        options: [
            "Consolidated Billing",
            "Service Control Policies",
            "Cross-Account Access",
            "Tagging Policies"
        ],
        correctAnswer: 0,
        explanation: "Consolidated billing aggregates usage from all accounts to a single bill."
    },
    {
        id: "q565",
        domain: "Cloud Concepts",
        text: "Which of the following describes the ability to scale resources up or down easily?",
        options: [
            "Elasticity",
            "Reliability",
            "Agility",
            "Global Reach"
        ],
        correctAnswer: 0,
        explanation: "Elasticity is the power to scale computing resources up and down easily."
    },
    {
        id: "q566",
        domain: "Security and Compliance",
        text: "Which service is used to create users, groups, and roles?",
        options: [
            "AWS IAM",
            "AWS Organizations",
            "AWS Directory Service",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS IAM allows you to specify who or what can access services and resources in AWS, using Users, Groups, and Roles."
    },
    {
        id: "q567",
        domain: "Cloud Technology and Services",
        text: "Which service enables you to create a virtual network dedicated to your AWS account?",
        options: [
            "Amazon VPC",
            "AWS PrivateLink",
            "AWS Direct Connect",
            "Amazon Route 53"
        ],
        correctAnswer: 0,
        explanation: "Amazon VPC is a virtual network dedicated to your AWS account."
    },
    {
        id: "q568",
        domain: "Billing, Pricing, and Support",
        text: "Which tool audits your AWS environment and makes recommendations to save money?",
        options: [
            "AWS Trusted Advisor",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Compute Optimizer"
        ],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor includes 'Cost Optimization' checks."
    },
    {
        id: "q569",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on computing power?",
        options: [
            "Performance Efficiency",
            "Reliability",
            "Cost Optimization",
            "Sustainability"
        ],
        correctAnswer: 0,
        explanation: "Performance Efficiency focuses on using computing resources efficiently to meet system requirements."
    },
    {
        id: "q570",
        domain: "Security and Compliance",
        text: "Which service helps protect your applications against DDoS attacks?",
        options: [
            "AWS Shield",
            "AWS WAF",
            "Amazon GuardDuty",
            "Amazon Inspector"
        ],
        correctAnswer: 0,
        explanation: "AWS Shield is a managed DDoS protection service."
    },
    {
        id: "q571",
        domain: "Cloud Technology and Services",
        text: "Which service provides serverless compute?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "Amazon ECS",
            "AWS Batch"
        ],
        correctAnswer: 0,
        explanation: "AWS Lambda allows you to run code without provisioning or managing servers."
    },
    {
        id: "q572",
        domain: "Billing, Pricing, and Support",
        text: "Which tool allows you to forecast your AWS costs?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Pricing Calculator",
            "AWS Bills"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer allows you to visualize, understand, and manage your AWS costs and usage over time, and forecast future costs."
    },
    {
        id: "q573",
        domain: "Cloud Concepts",
        text: "Which cloud computing deployment model connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
        options: [
            "Hybrid Cloud",
            "Public Cloud",
            "Private Cloud",
            "Multi-Cloud"
        ],
        correctAnswer: 0,
        explanation: "A hybrid cloud connects cloud resources with on-premises resources."
    },
    {
        id: "q574",
        domain: "Security and Compliance",
        text: "Which features allows you to control traffic at the instance level?",
        options: [
            "Security Groups",
            "Network ACLs",
            "Route Tables",
            "Flow Logs"
        ],
        correctAnswer: 0,
        explanation: "Security Groups act as a virtual firewall for your instance."
    },
    {
        id: "q575",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to stream data in real-time?",
        options: [
            "Amazon Kinesis",
            "AWS Gluten",
            "Amazon S3",
            "Amazon Athena"
        ],
        correctAnswer: 0,
        explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data."
    },
    {
        id: "q576",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan allows you to have a dedicated Technical Account Manager?",
        options: [
            "Enterprise",
            "Business",
            "Developer",
            "Basic"
        ],
        correctAnswer: 0,
        explanation: "The Enterprise Support plan uses a TAM as your primary point of contact."
    },
    {
        id: "q577",
        domain: "Cloud Concepts",
        text: "Which is a benefit of the 'Pay-as-you-go' pricing model?",
        options: [
            "No upfront costs",
            "Fixed monthly bills",
            "Unlimited storage",
            "Free support"
        ],
        correctAnswer: 0,
        explanation: "Pay-as-you-go allows you to replace upfront capital expense with low variable expense."
    },
    {
        id: "q578",
        domain: "Security and Compliance",
        text: "Which service is a threat detection service?",
        options: [
            "Amazon GuardDuty",
            "AWS Shield",
            "AWS WAF",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity."
    },
    {
        id: "q579",
        domain: "Cloud Technology and Services",
        text: "Which service is an object storage service?",
        options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon RDS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Storage Service (Amazon S3) is an object storage service."
    },
    {
        id: "q581",
        domain: "Security and Compliance",
        text: "Which service allows you to centrally manage access to multiple AWS accounts and business applications?",
        options: [
            "AWS IAM Identity Center",
            "Amazon Cognito",
            "AWS Directory Service",
            "AWS IAM"
        ],
        correctAnswer: 0,
        explanation: "AWS IAM Identity Center (successor to AWS SSO) helps you securely create or connect your workforce identities and manage their access across AWS accounts and applications."
    },
    {
        id: "q582",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to easily run and manage Docker containers?",
        options: [
            "Amazon ECS",
            "AWS Lambda",
            "Amazon EC2",
            "Amazon S3"
        ],
        correctAnswer: 0,
        explanation: "Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service."
    },
    {
        id: "q583",
        domain: "Cloud Concepts",
        text: "Which is a benefit of cloud computing regarding global deployment?",
        options: [
            "You can deploy applications to multiple regions around the world in minutes.",
            "You must physically travel to data centers.",
            "Visualizing global data is free.",
            "Networking costs are zero."
        ],
        correctAnswer: 0,
        explanation: "One of the key benefits of AWS Global Infrastructure is the ability to deploy applications globally in minutes."
    },
    {
        id: "q584",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool allows you to create billing alerts based on your actual or forecasted usage?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount."
    },
    {
        id: "q585",
        domain: "Security and Compliance",
        text: "Which service is used to govern your environment and ensure compliance with internal policies?",
        options: [
            "AWS Organizations (Service Control Policies)",
            "AWS Shield",
            "AWS WAF",
            "Amazon Macie"
        ],
        correctAnswer: 0,
        explanation: "Service Control Policies (SCPs) in AWS Organizations allow you to manage permissions in your organization and ensure compliance."
    },
    {
        id: "q586",
        domain: "Cloud Technology and Services",
        text: "Which service provides a scalable, high-speed, low-latency, fully managed database for key-value data?",
        options: [
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon Neptune"
        ],
        correctAnswer: 0,
        explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale."
    },
    {
        id: "q587",
        domain: "Cloud Concepts",
        text: "Which is NOT a benefit of Cloud Computing?",
        options: [
            "100% guarantees of no hardware failure",
            "Trade capital expense for variable expense",
            "Stop guessing capacity",
            "Increase speed and agility"
        ],
        correctAnswer: 0,
        explanation: "Hardware failures can still happen in the cloud, but AWS manages the underlying infrastructure and provides tools (like Multi-AZ) to mitigate their impact on your application. It is not a 100% guarantee that hardware will never fail."
    },
    {
        id: "q588",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service helps you find the right size for your EC2 instances?",
        options: [
            "AWS Compute Optimizer",
            "AWS Budgets",
            "AWS Shield",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "AWS Compute Optimizer recommends optimal AWS resources for your workloads to reduce costs and improve performance."
    },
    {
        id: "q589",
        domain: "Security and Compliance",
        text: "Which service allows you to rotate, manage, and retrieve database credentials, API keys, and other secrets?",
        options: [
            "AWS Secrets Manager",
            "AWS KMS",
            "AWS IAM",
            "AWS Shield"
        ],
        correctAnswer: 0,
        explanation: "AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. It enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets."
    },
    {
        id: "q590",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to provision resources using common programming languages?",
        options: [
            "AWS Cloud Development Kit (AWS CDK)",
            "AWS CloudFormation",
            "AWS CodeBuild",
            "AWS CodeDeploy"
        ],
        correctAnswer: 0,
        explanation: "The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework to define your cloud application resources using familiar programming languages (like TypeScript, Python)."
    },
    {
        id: "q591",
        domain: "Cloud Concepts",
        text: "Which design principle deals with removing single points of failure?",
        options: [
            "High Availability",
            "Cost Optimization",
            "Loose Coupling",
            "Scaling Vertically"
        ],
        correctAnswer: 0,
        explanation: "High Availability architecture involves removing single points of failure, often through redundancy (e.g., Multi-AZ)."
    },
    {
        id: "q592",
        domain: "Security and Compliance",
        text: "Which service provides intelligent threat detection for your AWS account?",
        options: [
            "Amazon GuardDuty",
            "AWS WAF",
            "AWS Shield",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "Amazon GuardDuty offers intelligent threat detection and continuous monitoring."
    },
    {
        id: "q593",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to analyze and debug distributed applications?",
        options: [
            "AWS X-Ray",
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture."
    },
    {
        id: "q594",
        domain: "Billing, Pricing, and Support",
        text: "Which service allows you to identify your most expensive AWS services?",
        options: [
            "AWS Cost Explorer",
            "AWS Trusted Advisor",
            "AWS Service Catalog",
            "AWS Marketplace"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer allows you to visualize and manage your AWS costs and usage, helping you identify top spending services."
    },
    {
        id: "q595",
        domain: "Cloud Concepts",
        text: "Which implies that you only pay for the services you consume?",
        options: [
            "Pay-as-you-go",
            "Reserved Instances",
            "Consolidated Billing",
            "Subscription"
        ],
        correctAnswer: 0,
        explanation: "Pay-as-you-go pricing allows you to easily adapt to changing business needs without overcommitting budgets and improves your responsiveness to change."
    },
    {
        id: "q596",
        domain: "Security and Compliance",
        text: "Which feature of an S3 bucket can help prevent accidental deletion of objects?",
        options: [
            "MFA Delete",
            "Encryption",
            "Access Control Lists",
            "Bucket Policies"
        ],
        correctAnswer: 0,
        explanation: "MFA Delete (combined with Versioning) requires multi-factor authentication to delete an object version."
    },
    {
        id: "q597",
        domain: "Cloud Technology and Services",
        text: "Which service creates a secure, private network connection from your office to AWS?",
        options: [
            "AWS Direct Connect",
            "AWS Snowball",
            "Amazon VPC Peering",
            "Internet Gateway"
        ],
        correctAnswer: 0,
        explanation: "AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable."
    },
    {
        id: "q598",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service is used to send alerts when billing thresholds are exceeded?",
        options: [
            "AWS Budgets",
            "AWS CloudFormation",
            "AWS Artifact",
            "AWS IAM"
        ],
        correctAnswer: 0,
        explanation: "AWS Budgets allows you to set custom budgets that alert you when your costs or usage exceed your budgeted amount."
    },
    {
        id: "q599",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on recovering from failures?",
        options: [
            "Reliability",
            "Security",
            "Performance Efficiency",
            "Cost Optimization"
        ],
        correctAnswer: 0,
        explanation: "Reliability is the ability of a workload to perform its intended function correctly and consistently when it's expected to, including the ability to recover from failure."
    },
    {
        id: "q600",
        domain: "Security and Compliance",
        text: "Which service enables you to audit your AWS account's configuration history?",
        options: [
            "AWS Config",
            "AWS CloudTrail",
            "AWS Trusted Advisor",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "AWS Config provides a detailed view of the configuration of AWS resources in your AWS account."
    },
    {
        id: "q601",
        domain: "Cloud Technology and Services",
        text: "Which service makes it easy to set up, manage, and scale a relational database in the cloud?",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon ElastiCache",
            "Amazon Neptune"
        ],
        correctAnswer: 0,
        explanation: "Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud."
    },
    {
        id: "q602",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan includes access to the 'Concierge Support Team'?",
        options: [
            "Enterprise Support",
            "Business Support",
            "Developer Support",
            "Basic Support"
        ],
        correctAnswer: 0,
        explanation: "The Concierge Support Team (for billing and account best practices) is available to Enterprise Support customers."
    },
    {
        id: "q603",
        domain: "Cloud Concepts",
        text: "Which AWS service allows you to access AWS services from a browser-based command line?",
        options: [
            "AWS CloudShell",
            "AWS CLI",
            "AWS Management Console",
            "AWS SDK"
        ],
        correctAnswer: 0,
        explanation: "AWS CloudShell is a browser-based shell that makes it easy to securely manage, explore, and interact with your AWS resources."
    },
    {
        id: "q604",
        domain: "Security and Compliance",
        text: "Which service allows you to block malicious SQL injection attacks?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "Amazon GuardDuty",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS WAF can be configured to block common attack patterns, such as SQL injection."
    },
    {
        id: "q605",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to distribute static and dynamic content quickly?",
        options: [
            "Amazon CloudFront",
            "Amazon Route 53",
            "AWS Global Accelerator",
            "Amazon S3"
        ],
        correctAnswer: 0,
        explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally."
    },
    {
        id: "q606",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS tool provides free cost optimization recommendations?",
        options: [
            "AWS Trusted Advisor (Core checks are free)",
            "AWS Cost Explorer (Costs money for API, console free)",
            "AWS Marketplace",
            "AWS Support"
        ],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor provides core checks for free to all customers, including some cost optimization checks."
    },
    {
        id: "q607",
        domain: "Cloud Concepts",
        text: "Which AWS concept allows you to isolate resources within a VPC?",
        options: [
            "Subnets",
            "Regions",
            "Endpoints",
            "Peerings"
        ],
        correctAnswer: 0,
        explanation: "A subnet is a range of IP addresses in your VPC. You can launch AWS resources into a specified subnet."
    },
    {
        id: "q608",
        domain: "Security and Compliance",
        text: "Which service allows you to manage encryption keys?",
        options: [
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS IAM",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "AWS Key Management Service (KMS) allows you to create and manage cryptographic keys."
    },
    {
        id: "q609",
        domain: "Cloud Technology and Services",
        text: "Which service offers object storage in the cloud?",
        options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon FSx"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Storage Service (Amazon S3) is an object storage service."
    },
    {
        id: "q610",
        domain: "Billing, Pricing, and Support",
        text: "Which service is used to budget your AWS costs?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Bills",
            "AWS Pricing Calculator"
        ],
        correctAnswer: 0,
        explanation: "AWS Budgets allows you to set custom cost and usage budgets."
    },
    {
        id: "q611",
        domain: "Cloud Concepts",
        text: "Which is a characteristic of Cloud Computing?",
        options: [
            "On-demand self-service",
            "Manual resource provisioning",
            "High upfront costs",
            "Limited network access"
        ],
        correctAnswer: 0,
        explanation: "On-demand self-service is a key characteristic of cloud computing."
    },
    {
        id: "q612",
        domain: "Security and Compliance",
        text: "Which service protects your AWS account against DDoS attacks?",
        options: [
            "AWS Shield",
            "AWS WAF",
            "Amazon Inspector",
            "Amazon GuardDuty"
        ],
        correctAnswer: 0,
        explanation: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service."
    },
    {
        id: "q613",
        domain: "Cloud Technology and Services",
        text: "Which service is a serverless compute service?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "Amazon EKS",
            "Amazon EMR"
        ],
        correctAnswer: 0,
        explanation: "AWS Lambda allows you to run code without provisioning or managing servers."
    },
    {
        id: "q614",
        domain: "Billing, Pricing, and Support",
        text: "Which tools is best for estimating the cost of a new architecture?",
        options: [
            "AWS Pricing Calculator",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Bills"
        ],
        correctAnswer: 0,
        explanation: "The AWS Pricing Calculator allows you to explore AWS services and create an estimate for the cost of your use cases on AWS."
    },
    {
        id: "q615",
        domain: "Cloud Concepts",
        text: "Which design principle suggests using managed services?",
        options: [
            "Stop spending money on undifferentiated heavy lifting",
            "Guess capacity",
            "Manually deploy",
            "Use monolithic architecture"
        ],
        correctAnswer: 0,
        explanation: "AWS managed services remove the operational burden of maintaining servers, allowing you to focus on your applications."
    },
    {
        id: "q616",
        domain: "Security and Compliance",
        text: "Which feature controls inbound and outbound traffic for subnets?",
        options: [
            "Network ACLs",
            "Security Groups",
            "Route Tables",
            "Internet Gateways"
        ],
        correctAnswer: 0,
        explanation: "Network Access Control Lists (NACLs) are an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets."
    },
    {
        id: "q617",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to launch virtual servers?",
        options: [
            "Amazon EC2",
            "Average S3",
            "Amazon RDS",
            "Amazon SNS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the AWS cloud."
    },
    {
        id: "q618",
        domain: "Billing, Pricing, and Support",
        text: "Which support plan creates a closer partnership with AWS?",
        options: [
            "Enterprise Support",
            "Business Support",
            "Developer Support",
            "Basic Support"
        ],
        correctAnswer: 0,
        explanation: "Enterprise support provides a designated Technical Account Manager (TAM) to coordinate access to programs and other resources."
    },
    {
        id: "q619",
        domain: "Cloud Concepts",
        text: "Which benefit allows you to deploy in multiple regions for lower latency?",
        options: [
            "Global Reach",
            "Agility",
            "Elasticity",
            "Scalability"
        ],
        correctAnswer: 0,
        explanation: "The global footprint of AWS allows you to deploy applications to customers around the world with low latency."
    },
    {
        id: "q620",
        domain: "Security and Compliance",
        text: "Which service allows you to assess the security and compliance of your EC2 instances?",
        options: [
            "Amazon Inspector",
            "AWS Shield",
            "AWS WAF",
            "AWS Artifact"
        ],
        correctAnswer: 0,
        explanation: "Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices."
    },
    {
        id: "q621",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to send notifications to users?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EC2",
            "Amazon RDS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication."
    },
    {
        id: "q622",
        domain: "Billing, Pricing, and Support",
        text: "Which is a way to get discounts on EC2?",
        options: [
            "Reserved Instances",
            "Paying monthly",
            "Using On-Demand",
            "Using multiple regions"
        ],
        correctAnswer: 0,
        explanation: "Reserved Instances (and Savings Plans) provide a significant discount compared to On-Demand pricing."
    },
    {
        id: "q623",
        domain: "Cloud Concepts",
        text: "Which allows you to run code without thinking about servers?",
        options: [
            "Serverless",
            "IaaS",
            "PaaS",
            "SaaS"
        ],
        correctAnswer: 0,
        explanation: "Serverless computing allows you to build and run applications and services without thinking about servers."
    },
    {
        id: "q624",
        domain: "Security and Compliance",
        text: "Which service helps you manage software licenses?",
        options: [
            "AWS License Manager",
            "AWS Systems Manager",
            "AWS Config",
            "AWS OpsWorks"
        ],
        correctAnswer: 0,
        explanation: "AWS License Manager makes it easier to manage licenses in AWS and on-premises from software vendors."
    },
    {
        id: "q625",
        domain: "Cloud Technology and Services",
        text: "Which service stores your data as objects?",
        options: [
            "Amazon S3",
            "Amazon EFS",
            "Amazon EBS",
            "Amazon RDS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Storage Service (Amazon S3) is an object storage service."
    },
    {
        id: "q626",
        domain: "Billing, Pricing, and Support",
        text: "Which tool helps you visualize and manage your AWS costs?",
        options: [
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Marketplace",
            "AWS Support"
        ],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time."
    },
    {
        id: "q627",
        domain: "Cloud Concepts",
        text: "Which pillar of the Well-Architected Framework focuses on business goals?",
        options: [
            "Operational Excellence",
            "Performance Efficiency",
            "Reliability",
            "Security"
        ],
        correctAnswer: 0,
        explanation: "Operational Excellence includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value."
    },
    {
        id: "q628",
        domain: "Security and Compliance",
        text: "Which service uses machine learning to protect sensitive data?",
        options: [
            "Amazon Macie",
            "AWS Shield",
            "AWS WAF",
            "AWS Config"
        ],
        correctAnswer: 0,
        explanation: "Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS."
    },
    {
        id: "q629",
        domain: "Cloud Technology and Services",
        text: "Which service allows you to decouple components of a distributed application?",
        options: [
            "Amazon SQS",
            "Amazon SES",
            "Amazon EC2",
            "Amazon RDS"
        ],
        correctAnswer: 0,
        explanation: "Amazon Simple Queue Service (Amazon SQS) offers a secure, durable, and available hosted queue that lets you integrate and decouple distributed software systems and components."
    },
    {
        id: "q630",
        domain: "Billing, Pricing, and Support",
        text: "Which AWS service is used to consolidate billing for multiple accounts?",
        options: [
            "AWS Organizations",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Billing Dashboard"
        ],
        correctAnswer: 0,
        explanation: "AWS Organizations provides consolidated billing, which allows you to view and pay the bill for all accounts in the organization from a single master account."
    }
];
