const manifest = {
  kind: "Deployment",
  apiVersion: "apps/v1",
  metadata: {
    name: "nginx",
    labels: {
      app: "nginx",
    },
  },
  spec: {
    replicas: 2,
    selector: {
      matchLabels: {
        app: "nginx",
      },
    },
    template: {
      metadata: {
        labels: {
          app: "nginx",
        },
      },
      spec: {
        containers: [
          {
            name: "nginx",
            image: "nginx:alpine",
            resources: {},
          },
        ],
      },
    },
    strategy: {},
  },
  status: {},
};

export default manifest;
