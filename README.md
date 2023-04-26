# cdk-eks-app

easily manage and automate eks with aws cdk.

## prerequisites

- aws cli
- aws cdk cli
- node & npm
- kubectl

## get started

install required dependencies:

```sh
npm i
```

bootstrap your cdk (if not already done yet):

```sh
cdk bootstrap
```

deploy the resources:

```sh
cdk deploy
```

give it some time to deploy the cluster and other related resources.

once it's deployed, copy the output that starts with `aws eks update-kubeconfig`. it should look something like:

```sh
aws eks update-kubeconfig --name demogo --region <region> --role-arn <role-arn>
```

this will allow you to access the cluster directly via `kubectl`.

now, port forward nginx svc on local port 8080 to test it:

```sh
kubectl port-forward svc/nginx 8080:80
```

finally visit [localhost:8080](localhost:8080) and voila - you should see nginx running!

## making changes

on a new terminal, activate ts compiler watch mode:

```sh
npm run watch
```

check diff generated:

```sh
cdk diff
```

deploy the resources:

```sh
cdk deploy
```

## clean up

destroy the app and resources:

```sh
cdk destroy
```

---

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
