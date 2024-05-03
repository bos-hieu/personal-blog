---
title: 'Module 9 - Challenge Lab: Creating a Scalable and Highly Available Environment for the Café'
date: '2024-05-02'
tags:
  [
    '100DaysOfCode',
    'Ethereum',
    'Blockchain',
    'Cloud Computing',
    'Rules',
    '100DaysOfCodeRules',
    'Solidity',
    'Golang',
    'AWS',
    'Remix',
    'Truffle',
    'Geth',
  ]
images: '/static/images/individualBlogPostImages/100daysofcode/challenge-accepted.jpg'
draft: true
summary: 'Module 9 - Challenge Lab: Creating a Scalable and Highly Available Environment for the Café'
---

## Scenario

The café will soon be featured in a famous TV food show. When it airs, Sofía and Nikhil anticipate that the café’s web
server will experience a temporary spike in the number of users—perhaps even up to tens of thousands of users.
Currently, the café’s web server is deployed in one Availability Zone, and they are worried that it won’t be able to
handle the expected increase in traffic. They want to ensure that their customers have a great experience when they
visit the website, and that they don’t experience any issues, such as lags or delays in placing orders.

To ensure this experience, the website must be responsive, able to scale both up and down to meet fluctuating customer
demand, and be highly available. Instead of overloading a single server, the architecture must distribute customer order
requests across multiple application servers so it can handle the increase in demand.

In this lab, you will take on the role of Sofía to implement a scalable and highly available architecture for the café's
web application.

## Overview and Objectives

Lab overview and objectives
In this lab, you use Elastic Load Balancing and Amazon EC2 Auto Scaling to create a scalable and highly available
environment on AWS.

After completing this lab, you should be able to:

- Inspect a VPC
- Update a network to work across multiple Availability Zones
- Create an Application Load Balancer
- Create a launch template
- Create an Auto Scaling group
- Test load balancing and automatic scaling

When you start the lab, your architecture will look like the following example:

![img.png](/static/images/individualBlogPostImages/cloud-computing/img.png)

At the end of this lab, your architecture should look like the following example:

![img.png](/static/images/individualBlogPostImages/cloud-computing/img1.png)

