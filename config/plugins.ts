module.exports = ({ env }) => {
  console.log("🔎 Cloudinary config:", {
    cloud_name: env("CLOUDINARY_CLOUD_NAME"),
    api_key: env("CLOUDINARY_API_KEY") ? "OK" : "MISSING",
    api_secret: env("CLOUDINARY_API_SECRET") ? "OK" : "MISSING",
  });

  return {
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  };
};
