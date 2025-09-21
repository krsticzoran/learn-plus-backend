module.exports = () => {
  console.log("🔎 Cloudinary config: using direct values");

  return {
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: "dgvpycwpj",
          api_key: "739389835857721",
          api_secret: "7kJ6Ia2dCsk466CQYcNZdkdIfh0",
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  };
};
