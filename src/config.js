const config = {
  s3: {
   REGION: "us-east-1",
   BUCKET: "notes-pliwanag-uploads",
  },
  apiGateway: {
   REGION: "us-east-1",
   URL: "https://dw19o3uwo7.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
   REGION: "us-east-1",
   USER_POOL_ID: "us-east-1_DcGP8ItJI",
   APP_CLIENT_ID: "ogc3c2ga1df4g6n82dpa8pk5e",
   IDENTITY_POOL_ID: "us-east-1:ed591eb8-5086-4842-8077-424150dbf41d",
  },
};

export default config;