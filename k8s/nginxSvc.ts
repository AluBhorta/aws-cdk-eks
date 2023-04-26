const manifest = {
  kind: "Service",
  apiVersion: "v1",
  metadata: {
    name: "nginx",
    labels: {
      app: "nginx",
    },
  },
  spec: {
    ports: [
      {
        name: "default",
        protocol: "TCP",
        port: 80,
        targetPort: 80,
      },
    ],
    selector: {
      app: "nginx",
    },
    type: "ClusterIP",
  },
  status: {},
};

export default manifest;
