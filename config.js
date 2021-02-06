var config = {}

config.host = process.env.HOST || "https://newuser1.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "XObmSVA82F2RzR5gjyPbqjZxoVbTJRWmudTCA18cItqJNmB7mTj7uIGYmpxnTTblknITvtKNL63Gm0PXMfxPZg==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
