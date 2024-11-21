const apikey = 'baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs';
cont baseurl = 'https://api.currencybeacon.com/v1';

async function getRate () {
    try{
    const response = await fetch(`${baseUrl}/latest?api_key=${apiKey}`);
        if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
}
