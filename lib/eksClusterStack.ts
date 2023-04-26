import * as cdk from "@aws-cdk/core";
import * as iam from "@aws-cdk/aws-iam";
import * as eks from "@aws-cdk/aws-eks";
import * as ec2 from "@aws-cdk/aws-ec2";

// import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class EksClusterStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const clusterAdmin = new iam.Role(this, "AdminRole", {
      assumedBy: new iam.AccountRootPrincipal(),
    });

    const cluster = new eks.Cluster(this, "demogo-cluster", {
      clusterName: `demogo`,
      mastersRole: clusterAdmin,
      version: eks.KubernetesVersion.of("1.25"),
      defaultCapacity: 0,
    });

    // cluster.awsAuth.addMastersRole(clusterAdmin, 'clusterAdmin');

    cluster.addNodegroupCapacity("spot-ng1", {
      instanceTypes: [
        new ec2.InstanceType("t3a.medium"),
        new ec2.InstanceType("t3a.small"),
        new ec2.InstanceType("t3.medium"),
        new ec2.InstanceType("t3.small"),
      ],
      minSize: 1,
      maxSize: 3,
      desiredSize: 1,
      capacityType: eks.CapacityType.SPOT,
    });
  }
}
