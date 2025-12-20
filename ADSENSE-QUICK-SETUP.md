# Google AdSense - Quick Setup Guide

## 🚀 5-Minute Setup

### 1. Get AdSense Credentials (2 minutes)

1. Go to https://adsense.google.com/
2. Sign in or create account
3. Copy your **Publisher ID**: `ca-pub-XXXXXXXXXXXXXXXX`
4. Create 2 ad units:
   - "Below Tool" → Copy slot ID
   - "Footer" → Copy slot ID

### 2. Configure Environment Variables (1 minute)

Create `.env.local` in project root:

```bash
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-YOUR-ACTUAL-ID-HERE
NEXT_PUBLIC_ADSENSE_SLOT_BELOW_TOOL=YOUR-SLOT-ID-HERE
NEXT_PUBLIC_ADSENSE_SLOT_FOOTER=YOUR-SLOT-ID-HERE
NEXT_PUBLIC_ADSENSE_ENABLED=true
```

### 3. Update ads.txt (30 seconds)

Edit `public/ads.txt`:
```
google.com, pub-YOUR-ACTUAL-ID-HERE, DIRECT, f08c47fec0942fa0
```

### 4. Deploy to Vercel (1 minute)

**Via Dashboard:**
1. Go to Vercel project → Settings → Environment Variables
2. Add all 4 variables
3. Redeploy

**Via CLI:**
```bash
git add .
git commit -m "Add Google AdSense integration"
git push
```

### 5. Verify (30 seconds)

1. Visit your site
2. Check `https://yoursite.com/ads.txt`
3. Scroll down to see ads (if approved)

## ✅ Done!

Ads will appear after AdSense approval (24-48 hours).

## 📍 Ad Locations

- **Homepage**: Below converter tool (after user interaction)
- **All Pages**: Footer (above copyright)

## 🔧 Disable Ads

Set in `.env.local`:
```bash
NEXT_PUBLIC_ADSENSE_ENABLED=false
```

## 📚 Full Documentation

See `ADSENSE-INTEGRATION.md` for complete guide.

---

**Build Status**: ✅ Successful
**Performance Impact**: Zero
**Ready for Production**: Yes
