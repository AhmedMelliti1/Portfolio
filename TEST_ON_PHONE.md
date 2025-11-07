# 📱 How to Test Your Portfolio on Your Phone

## Quick Steps (2 Minutes!)

### 1️⃣ Start the Development Server

Open PowerShell or Command Prompt in your project folder and run:

```bash
npm run dev
```

You should see:
```
✓ Ready in X seconds
○ Local:        http://localhost:3000
○ Network:      http://0.0.0.0:3000
```

### 2️⃣ Find Your Computer's IP Address

**Your IP Address is: `192.168.100.3`** (from Wi-Fi)

To find it again:
- Open PowerShell
- Type: `ipconfig`
- Look for "IPv4 Address" under "Wireless LAN adapter Wi-Fi"

### 3️⃣ Connect Your Phone to the Same Wi-Fi

Make sure your phone is connected to the **same Wi-Fi network** as your computer.

### 4️⃣ Open on Your Phone

On your phone's browser (Chrome, Safari, etc.), type:

```
http://192.168.100.3:3000
```

**That's it!** 🎉

---

## 🔧 Troubleshooting

### ❌ Can't Connect?

**Fix 1: Check Windows Firewall**
1. Open Windows Security
2. Go to Firewall & network protection
3. Click "Allow an app through firewall"
4. Find Node.js and check both "Private" and "Public"
5. Or click "Allow another app" and add Node.js

**Fix 2: Verify Same Network**
- Make sure phone and computer are on the same Wi-Fi
- Try disconnecting and reconnecting both devices

**Fix 3: Check IP Address**
- Your IP might have changed
- Run `ipconfig` again to get the current IP
- Update the URL on your phone

### ❌ Port 3000 Already in Use?

Run on a different port:
```bash
npm run dev -- -p 3001
```
Then use: `http://192.168.100.3:3001`

---

## ✅ What to Test

Once connected, test these on your phone:

- [ ] Hero section looks good
- [ ] Navigation menu works
- [ ] Can scroll smoothly
- [ ] All buttons are tappable
- [ ] Projects section displays correctly
- [ ] Contact form works
- [ ] Touch interactions feel smooth
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling
- [ ] Animations are smooth
- [ ] Voice commands work (if supported)
- [ ] Theme toggle works

---

## 🚀 Alternative: Deploy for Testing

For easier testing, deploy to Vercel (free):

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy (takes 2 minutes)
5. Get a URL like: `https://your-portfolio.vercel.app`
6. Open on any device, anywhere!

---

## 📝 Quick Reference

**Your Computer IP:** `192.168.100.3`  
**Port:** `3000`  
**URL to use:** `http://192.168.100.3:3000`

**Commands:**
```bash
# Start server (accessible from phone)
npm run dev

# Start server (localhost only)
npm run dev:local

# Check IP address
ipconfig
```

---

## 💡 Pro Tips

1. **Bookmark the URL** on your phone for quick access
2. **Keep the terminal open** while testing (server must be running)
3. **Hot reload works** - changes will appear on your phone automatically
4. **Test in different orientations** (portrait/landscape)
5. **Test on different devices** if possible

Happy Testing! 🎉

