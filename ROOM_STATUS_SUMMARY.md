# TryHackMe Room Status Summary

**Generated:** 2025-11-05
**Total Rooms Tracked:** 544
**Status:** Automated checking blocked by Cloudflare protection

## Current Situation

An automated check of all 544 rooms in this repository was attempted but blocked by TryHackMe's bot protection (Cloudflare). All automated HTTP requests returned **403 Forbidden** errors.

## Known Premium/Unavailable Rooms

Based on annotations already present in the README.md:

### Confirmed Premium Rooms

1. **Intro to LAN**
   - URL: https://tryhackme.com/room/introtolan
   - Status: PREMIUM (marked in README line 145)
   - Alternative: Khan Academy resource provided

2. **Walking An Application**
   - URL: https://tryhackme.com/room/walkinganapplication
   - Status: PREMIUM (marked in README line 216)

3. **Linux Fundamentals Part 2 & 3**
   - Status: Made PREMIUM (mentioned in README line 83)
   - Alternative: Linux Journey website provided

## Tools Created for Manual/Semi-Automated Checking

Since automated checking is blocked, the following tools have been created:

### 1. Room Checking Guide
**File:** `ROOM_CHECKING_GUIDE.md`
- Comprehensive guide for manual and semi-automated room checking
- Multiple methods provided
- Step-by-step instructions

### 2. Browser Bookmarklet
**File:** `bookmarklet.js`
- JavaScript bookmarklet for quick room status checking
- Works while logged into TryHackMe
- Auto-detects premium/free/unavailable status
- Copies results to clipboard

### 3. Browser-Based Checker
**File:** `check_rooms_browser.html`
- HTML interface for systematic checking
- Progress tracking
- Export results as JSON or text
- Requires manual interaction due to bot protection

### 4. Room List (All 544 Rooms)
**Files:**
- `/tmp/room_names.txt` - Complete list of room slugs and URLs
- Extracted from README.md
- Ready for batch checking

## Automated Check Results

**Attempted:** 2025-11-05
**Method:** Parallel HTTP requests with curl (10 workers)
**Duration:** 4.6 seconds
**Result:** 544/544 rooms returned 403 Forbidden (Access Denied)

This confirms that TryHackMe uses strong bot protection that cannot be bypassed with simple HTTP requests.

## Recommendations

### For Repository Maintainers

1. **Use the bookmarklet** (`bookmarklet.js`) for quick checking while browsing
2. **Check rooms by category** - Easier to organize and track progress
3. **Prioritize high-traffic categories:**
   - Introductory Rooms (19 rooms)
   - Easy CTF (52 rooms)
   - Web Security (30 rooms)
   - Basic Rooms (13 rooms)

4. **Document findings** in README.md using existing format:
   ```markdown
   - ~~[TryHackMe | Room Name](url)~~ -- This room is **PREMIUM**
   ```

### For Contributors

1. **Submit findings via pull requests**
2. **Include verification date** in comments
3. **Check rooms you're actually interested in** - More motivation to verify thoroughly
4. **Use the checking guide** (`ROOM_CHECKING_GUIDE.md`)

## Statistics

| Category | Count | Status |
|----------|-------|--------|
| Total Rooms | 544 | Listed in README |
| Confirmed Premium | 3 | Documented in README |
| Confirmed Unavailable | 0 | None documented yet |
| Unchecked | 541 | Need manual verification |

## Next Steps

1. ✅ Created comprehensive checking tools
2. ✅ Documented all methods and limitations
3. ⏳ Manual checking required (community effort)
4. ⏳ Update README.md with findings
5. ⏳ Create tracking spreadsheet (optional)

## Technical Details

### Why Automation Failed

```
Method: curl with browser headers
Workers: 10 parallel requests
Delay: 0.3 seconds between batches
Result: 100% blocked (403 Forbidden)

Headers tested:
- User-Agent: Mozilla/5.0
- Accept: text/html,application/xhtml+xml
- Follow redirects: enabled
- Timeout: 10 seconds

Conclusion: Cloudflare bot protection cannot be
bypassed without browser automation or authentication.
```

### What We Learned

1. TryHackMe uses **Cloudflare bot protection**
2. HTTP requests without valid authentication are **blocked**
3. Rate limiting is aggressive (blocks even with delays)
4. **Browser-based checking** is the only reliable method
5. **Manual verification** is necessary for accurate results

## Resources Created

All tools and documentation are saved in the repository:

```
/home/user/tryhackme-free-rooms/
├── ROOM_CHECKING_GUIDE.md      # Comprehensive guide
├── ROOM_STATUS_SUMMARY.md      # This file
├── bookmarklet.js              # Browser bookmarklet
├── check_rooms_browser.html    # Browser-based checker
├── room_status_report.txt      # Auto-check attempt log
├── unavailable_rooms.txt       # Found unavailable rooms
├── premium_likely_rooms.txt    # Found premium rooms
└── access_denied_rooms.txt     # Blocked rooms (all 544)
```

## Conclusion

Due to TryHackMe's bot protection, **manual or semi-automated checking is required**. The tools provided will make this process much easier, but community effort is needed to verify all 541 unchecked rooms.

The bookmarklet method is recommended as the best balance between speed and reliability.

---

**Last Updated:** 2025-11-05
**Next Review:** After community checking effort
