// Made By https://telegram.dog/JokerBots
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const url = new URL(request.url);
    const startParam = url.searchParams.get('start');

    if (!startParam) {
      const encodedRedirectUrl = 'aHR0cHM6Ly90ZWxlZ3JhbS5tZS9Kb2tlcmJvdHM=';  
      const redirectUrl = atob(encodedRedirectUrl); 
      return Response.redirect(redirectUrl, 302);
    }

    const parts = startParam.split('_');
    const file_id = parts[parts.length - 1];

    const redirectUrl = `https://telegram.me/YOUR_BOT_USERNAME?start=JokerBots_${file_id}`; // Replace with your desired URL

    return Response.redirect(redirectUrl, 302);
  } catch (error) {
    console.error('Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
