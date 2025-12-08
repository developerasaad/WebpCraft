# WebpCraft

**Professional WebP Image Converter** - Convert images to WebP format instantly with complete privacy.

**Open Source Project by [developerasaad](https://github.com/developerasaad)** | [GitHub Repository](https://github.com/developerasaad/WebpCraft)

## 🚀 Features

- **100% On-Device Processing** - No server uploads, complete privacy
- **Bulk Conversion** - Convert unlimited images with queue-based processing
- **Quality Control** - Adjustable compression (1-100%)
- **Image Resizing** - Optional resize with aspect ratio lock
- **Real-Time Preview** - See before/after comparison
- **ZIP Download** - Download all converted images as compressed ZIP
- **Format Support** - JPG, PNG, GIF to WebP
- **Works Offline** - No internet needed after initial load
- **Free Forever** - No limits, no subscriptions

## 🛠️ Tech Stack

- **Next.js 14** - App Router with SSG
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **Canvas API** - Client-side image processing
- **JSZip** - ZIP file creation
- **React Hot Toast** - Beautiful notifications

## 📦 Installation

```bash
npm install
```

## 🔨 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
```

Creates a static export in `/out` directory.

## ☁️ Deployment

### Vercel Configuration

When deploying to Vercel, it's crucial to configure the build settings correctly to avoid issues with public folder files not copying properly:

1. In your Vercel project dashboard, go to Settings → General → Build & Development Settings
2. Ensure the "Output Directory" is set to `.` (root) or left empty
3. **Do NOT set it to `out`** as this can cause public folder files to fail to copy, resulting in 404 errors

Alternatively, you can use the included `vercel.json` file which explicitly sets the correct configuration:

```json
{
  "version": 2,
  "outputDirectory": ".",
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install"
}
```

This configuration ensures that:
- The static export is handled correctly
- Public folder assets are properly copied
- The routes manifest is generated correctly
- No 404 errors occur for static assets

## 📁 Project Structure

```
/app                    # Next.js App Router pages
  /bulk                # Bulk converter page
  /faq                 # FAQ page
  /privacy             # Privacy policy
  /about               # About page
/components
  /converter           # Converter components
  /layout              # Header, Footer, Container
  /ui                  # Base UI components
/lib                   # Core conversion logic
/public                # Static assets
```

## 🔒 Privacy

WebpCraft is built with privacy by design:

- All image processing happens client-side in your browser
- No server uploads or processing
- No data collection or tracking
- No cookies (except essential)
- Works completely offline after initial load

## 🎯 SEO Optimized

- Schema.org markup (Organization, SoftwareApplication, FAQPage)
- OpenGraph and Twitter Card meta tags
- Semantic HTML structure
- Image optimization (WebP format)
- Clean URL structure
- XML sitemap

## 📄 License

**Apache License 2.0** - See [LICENSE](LICENSE) file for details.

### Open Source Benefits:
- ✅ **Free to use** for any purpose (commercial or personal)
- ✅ **Open source** - Source code available on GitHub
- ✅ **Community driven** - Contributions welcome
- ✅ **Privacy focused** - No tracking or data collection
- ✅ **Self-hostable** - Deploy anywhere

### Brand Protection:
⚠️ **Important**: While the code is open source, the branding, UI design, and visual elements are protected. See [TRADEMARK-NOTICE.md](TRADEMARK-NOTICE.md) and [BRANDING.md](BRANDING.md) for details.

## 🌐 Deploy

Deployed on Vercel: [WebpCraft.vercel.app](https://webpcraft.vercel.app)

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.

### Development Setup:
1. Fork the repository: [https://github.com/developerasaad/WebpCraft](https://github.com/developerasaad/WebpCraft)
2. Clone your fork: `git clone https://github.com/your-username/WebpCraft.git`
3. Install dependencies: `npm install`
4. Start development: `npm run dev`
5. Submit pull request to main repository

### What You Can Contribute:
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Test coverage
- 🌐 Internationalization

---

**Built with ❤️ by [developerasaad](https://github.com/developerasaad) for the web development community**

[⭐ Star on GitHub](https://github.com/developerasaad/WebpCraft) | [🐛 Report Issues](https://github.com/developerasaad/WebpCraft/issues) | [💡 Feature Requests](https://github.com/developerasaad/WebpCraft/issues)