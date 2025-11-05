// TryHackMe Room Status Checker Bookmarklet
// To use: Create a bookmark and paste this as the URL (with javascript: prefix)

javascript:(function(){
    // Check the page content for status indicators
    var status = 'Unknown';
    var body = document.body.innerHTML.toLowerCase();
    var indicators = [];

    // Check for premium indicators
    if (body.includes('subscribe to access') ||
        body.includes('upgrade to access') ||
        body.includes('premium only') ||
        document.querySelector('[class*="premium"]') ||
        document.querySelector('[class*="subscribe"]')) {
        status = 'PREMIUM';
        indicators.push('Found premium/subscribe keywords');
    }

    // Check for free/accessible indicators
    if (body.includes('start machine') ||
        body.includes('join room') ||
        body.includes('deploy') ||
        document.querySelector('[class*="deploy"]') ||
        document.querySelector('button[class*="start"]')) {
        status = 'FREE';
        indicators.push('Found start/deploy buttons');
    }

    // Check for unavailable indicators
    if (body.includes('not found') ||
        body.includes('404') ||
        body.includes('room does not exist')) {
        status = 'UNAVAILABLE';
        indicators.push('Room not found');
    }

    // Get room name from title or URL
    var roomName = document.title.replace(' | TryHackMe', '').trim();
    var roomUrl = window.location.href;
    var roomSlug = roomUrl.split('/room/')[1] || 'unknown';

    // Create result message
    var message = '🔍 Room Status Check\n\n';
    message += 'Room: ' + roomName + '\n';
    message += 'URL: ' + roomUrl + '\n';
    message += 'Slug: ' + roomSlug + '\n\n';
    message += 'STATUS: ' + status + '\n\n';
    message += 'Indicators:\n' + indicators.join('\n') + '\n\n';
    message += 'Timestamp: ' + new Date().toISOString();

    // Display result
    alert(message);

    // Copy to clipboard
    var textArea = document.createElement('textarea');
    textArea.value = roomSlug + '\t' + roomUrl + '\t' + status;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    console.log('Room check result copied to clipboard!');
    console.log('Format: slug\\turl\\tstatus');
})();

// Instructions for creating bookmarklet:
// 1. Create a new bookmark in your browser
// 2. Name it: "Check THM Room Status"
// 3. In the URL field, paste the javascript code above (starting with javascript:)
// 4. Save the bookmark
// 5. When viewing a TryHackMe room, click the bookmarklet to check its status
