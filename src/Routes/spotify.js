
const router = require('express').Router();
const { json } = require('body-parser');
const spotifyWebApi = require('spotify-web-api-node');
const client_id = '52c7d5e6ef174f6d9461e654aacc2d45';
const redirect_uri = 'http://localhost:3000';

router.route('/login')
    .post((req,res)=>{
      const code = req.body.code;
      let spotifyApi = new spotifyWebApi({
        clientId: '52c7d5e6ef174f6d9461e654aacc2d45',
        clientSecret: '37c847b194854fbe86b81772cfd40c79',
        redirectUri: 'http://www.example.com/callback'
      });
      spotifyApi.authorizationCodeGrant(code).then(data=>{
        res.json({
          accessToken:data.body.access_token,
          refreshToken:data.body.refresh_token,
          expiresIn:data.body.expires_in
        })
      })
    });

module.exports = router;