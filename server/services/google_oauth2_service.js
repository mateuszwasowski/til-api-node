module.exports = function GoogleOuath2Service() {
  this.run = function () {
    return "hello"
    console.log('hello');
    const client_id = process.env.CLIENT_ID || "null";
    console.log(client_id);
  }
};
