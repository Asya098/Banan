export default {
  async fetch(request) {
    return new Response(JSON.stringify({
      status: "ok",
      message: "Worker работает"
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
