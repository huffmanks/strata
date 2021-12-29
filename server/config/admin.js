module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2a655ac8421c612d6dc458260cf775ce'),
  },
});
