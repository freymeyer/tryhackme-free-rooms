# TryHackMe Room Availability Checking Guide

## Problem
TryHackMe has bot protection that blocks automated checking of room availability. This guide provides manual and semi-automated solutions.

## Known Issues (from README.md)

Based on the current README, these rooms are already documented as **PREMIUM** or **UNAVAILABLE**:

### Already Marked as Premium:
1. **Intro to LAN** - https://tryhackme.com/room/introtolan
2. **Walking An Application** - https://tryhackme.com/room/walkinganapplication
3. **Linux Fundamentals Parts 2 & 3** - Mentioned as "made premium"

## Methods to Check Room Availability

### Method 1: Manual Browser Checking (Most Reliable)

1. Log in to your TryHackMe account
2. Visit each room URL
3. Look for these indicators:

**FREE ROOM indicators:**
- Green "Start Machine" or "Join Room" button
- No subscription prompts
- Can access all content

**PREMIUM ROOM indicators:**
- "Upgrade to access this room" message
- "Premium" badge
- Redirect to subscription page
- Orange/yellow "Subscribe" button

**UNAVAILABLE ROOM indicators:**
- 404 Not Found page
- "Room not found" message
- Broken links

### Method 2: Bookmarklet (Semi-Automated)

Add this bookmarklet to your browser. When you're on a TryHackMe room page, click it to automatically detect the room status:

```javascript
javascript:(function(){var status='Unknown';var body=document.body.innerHTML.toLowerCase();if(body.includes('subscribe to access')||body.includes('upgrade to access')||body.includes('premium')){status='PREMIUM'}else if(body.includes('start machine')||body.includes('join room')||body.includes('deploy')){status='FREE'}else if(body.includes('not found')||body.includes('404')){status='UNAVAILABLE'};var result=prompt('Room Status: '+status+'\n\nRoom Name:',document.title);if(result){console.log('Room: '+result+' - Status: '+status);}})();
```

**How to add bookmarklet:**
1. Create a new bookmark
2. Set the name to "Check THM Room"
3. Paste the JavaScript code above into the URL/Location field
4. Click it when viewing any TryHackMe room page

### Method 3: Browser Console Script

While viewing a TryHackMe room page, open browser console (F12) and run:

```javascript
const checkRoomStatus = () => {
    const body = document.body.innerHTML.toLowerCase();
    const title = document.title;

    let status = 'Unknown';
    let indicators = [];

    if (body.includes('subscribe to access') || body.includes('upgrade to access')) {
        status = 'PREMIUM';
        indicators.push('Contains subscription prompt');
    }

    if (body.includes('start machine') || body.includes('join room')) {
        status = 'FREE';
        indicators.push('Has start/join buttons');
    }

    if (body.includes('not found') || body.includes('404')) {
        status = 'UNAVAILABLE';
        indicators.push('404 or not found');
    }

    const result = {
        title: title,
        url: window.location.href,
        status: status,
        indicators: indicators,
        timestamp: new Date().toISOString()
    };

    console.log('Room Check Result:');
    console.table(result);

    return result;
};

checkRoomStatus();
```

### Method 4: Bulk Checking with Browser Extension

For checking many rooms at once, you can use a browser extension like:
- **LinkChecker** - Checks if links are active
- **Check My Links** - Validates all links on a page

## Recording Your Findings

When you find premium or unavailable rooms, please update the README.md:

For **PREMIUM rooms**, add a strikethrough and note:
```markdown
- ~~[TryHackMe | Room Name](url)~~ -- This room is **PREMIUM**
```

For **UNAVAILABLE rooms**, add a strikethrough and note:
```markdown
- ~~[TryHackMe | Room Name](url)~~ -- This room is **UNAVAILABLE** (404)
```

## Batch Checking Tips

If checking many rooms:

1. **Use a spreadsheet** - Copy room list to Excel/Google Sheets
2. **Open in batches** - Open 10-20 tabs at a time
3. **Use keyboard shortcuts** - Quickly cycle through tabs
4. **Take notes** - Document premium/unavailable rooms as you find them
5. **Take breaks** - Check 50-100 rooms per session

## Contributing Updates

After checking rooms:

1. Create a branch: `git checkout -b update-room-status`
2. Update README.md with your findings
3. Commit: `git commit -m "Update premium/unavailable room status"`
4. Push and create a pull request

## Automation Limitations

**Why we can't fully automate:**
- TryHackMe uses Cloudflare bot protection
- Automated requests return 403 Forbidden
- Rate limiting prevents bulk checking
- Authentication required to see room status

**What we've tried:**
- ✗ Direct HTTP requests (blocked by Cloudflare)
- ✗ curl with headers (still blocked)
- ✗ Parallel requests (blocked even faster)
- ✓ Manual checking (works, but time-consuming)
- ✓ Browser bookmarklet (semi-automated, reliable)

## Quick Reference

Total rooms to check: **544 rooms**

Estimated time for manual checking:
- Fast checking: ~2-3 hours (20 seconds per room)
- Thorough checking: ~4-5 hours (30-40 seconds per room)

## Next Steps

1. Use Method 2 (Bookmarklet) or Method 3 (Console Script) for semi-automated checking
2. Check rooms in categories (easier to organize)
3. Start with high-priority categories (e.g., Intro Rooms, CTF rooms)
4. Document findings in a separate file
5. Update README.md with confirmed premium/unavailable rooms

## Tools Created

- `check_rooms_browser.html` - Browser-based checking interface (limited by bot protection)
- `room_names.txt` - Complete list of all 544 rooms
- `parallel_room_checker.py` - Python script (blocked by Cloudflare)
- This guide - Manual and semi-automated checking methods
