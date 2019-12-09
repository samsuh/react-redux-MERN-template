const keys = require("../../config/keys");
//HTML for email body being send from the bucket; backticks allow writing multiline html
//this can be styled fully
module.exports = bucket => {
  return `
<html>
<body>
<div style="text-align: center;">
<h3>Thanks for using Archon Buckets</h3>
<p>Are you satisfied with Archon?</p>
<p>${bucket.body}</p>
  <div>
  <a href="${keys.redirectDomain}/api/buckets/thanks">Yes</a>
  <a href="${keys.redirectDomain}/api/buckets/thanks">No</a>
</div>
</body>
</html>  
  `;
};
