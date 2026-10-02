async function check() {
  try {
    const res = await fetch('https://theweddingco.in/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();
    console.log('HTML length:', html.length);

    const matches = html.match(/src=["']([^"']+\.js[^"']*)["']/g) || [];
    console.log('All JS scripts:', matches);

    const keywords = ['scroll', 'lenis', 'locomotive', 'gsap', 'tween', 'luxy', 'smooth'];
    for (const kw of keywords) {
      const found = html.toLowerCase().includes(kw);
      console.log(`Keyword "${kw}":`, found);
    }

    const cssMatches = html.match(/href=["']([^"']+\.css[^"']*)["']/g) || [];
    console.log('All CSS:', cssMatches.filter(c => c.toLowerCase().includes('lenis') || c.toLowerCase().includes('scroll')));
  } catch (err) {
    console.error('Error:', err);
  }
}
check();
