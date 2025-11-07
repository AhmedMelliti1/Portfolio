# 📱 Mobile Testing Guide

## Quick Start - Test on Your Phone

### Step 1: Start the Development Server

Open a terminal in your project folder and run:

```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Step 2: Find Your Computer's IP Address

**Your Current IP Address (Wi-Fi): `192.168.100.3`**

If you need to find it again:
- **Windows**: Run `ipconfig` in PowerShell/Command Prompt
- Look for "IPv4 Address" under "Wireless LAN adapter Wi-Fi"
- You should see something like `192.168.x.x`

### Step 3: Connect Your Phone to the Same Wi-Fi Network

1. Make sure your phone is connected to the **same Wi-Fi network** as your computer
2. On your phone, open a web browser (Chrome, Safari, etc.)

### Step 4: Access the Website on Your Phone

In your phone's browser, type:

```
http://192.168.100.3:3000
```

**Important:** Replace `192.168.100.3` with your actual IP address if it's different.

---

## Alternative Methods

### Method 1: Using Next.js Dev Server (Recommended)

The dev server is already configured to accept connections from your local network.

1. Run `npm run dev`
2. The server will show: `Ready on http://0.0.0.0:3000`
3. Access from your phone using: `http://YOUR_IP:3000`

### Method 2: Using ngrok (For External Access)

If you want to test from anywhere (not just your local network):

1. Install ngrok: https://ngrok.com/download
2. Run your dev server: `npm run dev`
3. In another terminal, run: `ngrok http 3000`
4. Copy the HTTPS URL from ngrok (e.g., `https://abc123.ngrok.io`)
5. Open that URL on your phone

### Method 3: Build and Deploy

For production testing:

1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Access from your phone using: `http://YOUR_IP:3000`

---

## Troubleshooting

### ❌ "Can't Connect" or "Connection Refused"

**Solution:**
1. Make sure both devices are on the same Wi-Fi network
2. Check Windows Firewall:
   - Go to Windows Security → Firewall & network protection
   - Allow Node.js through the firewall
   - Or temporarily disable firewall for testing

3. Make sure the dev server is running and shows `0.0.0.0:3000`

### ❌ "Page Not Found" or 404 Error

**Solution:**
1. Make sure you're using the correct IP address
2. Check that the port is `:3000`
3. Verify the dev server is running without errors

### ❌ IP Address Changed

**Solution:**
- Your IP might change if you disconnect/reconnect Wi-Fi
- Run `ipconfig` again to get the new IP
- Update the URL on your phone

### ❌ Slow Loading on Phone

**Solution:**
- This is normal for development mode
- For faster testing, use `npm run build` then `npm start`
- Or deploy to a hosting service like Vercel (free)

---

## Testing Checklist

Once you can access the site on your phone, test:

- ✅ **Hero Section**: Text is readable, buttons work
- ✅ **Navigation**: Menu opens/closes properly
- ✅ **Projects**: Cards display correctly, can click/tap
- ✅ **Contact Form**: Can type in inputs, submit works
- ✅ **Scroll**: Smooth scrolling throughout
- ✅ **Touch**: All buttons are tappable
- ✅ **Modals**: Open/close properly
- ✅ **Animations**: Smooth on mobile
- ✅ **Voice Commands**: Microphone button works (if supported)
- ✅ **Theme Toggle**: Dark/light mode works

---

## Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check your IP address (Windows)
ipconfig

# Check your IP address (Mac/Linux)
ifconfig
```

---

## Network Requirements

- ✅ Both devices must be on the **same Wi-Fi network**
- ✅ Windows Firewall must allow Node.js (port 3000)
- ✅ Router should allow local network communication

---

## Pro Tips

1. **Bookmark the URL** on your phone for quick access
2. **Use Chrome DevTools** on desktop to simulate mobile (F12 → Device Toolbar)
3. **Test on different phones** if possible (iOS, Android)
4. **Check different screen sizes** (phone, tablet)
5. **Test in portrait and landscape** orientations

---

## Need Help?

If you're still having issues:

1. Check the terminal where `npm run dev` is running for errors
2. Make sure port 3000 is not being used by another application
3. Try accessing `http://localhost:3000` on your computer first
4. Verify your phone and computer are on the same network

Happy Testing! 🚀📱

