# 🏢 Business Company Website

A modern, professional, and fully responsive business website template built with HTML, CSS, and JavaScript. This template includes all the essential sections a business website needs.

---

## 📁 File Structure

```
SSierraAl.github.io/
├── index.html          # Main HTML file (all website content)
├── css/
│   └── styles.css      # All styles and customizable variables
├── js/
│   └── script.js       # Interactive features and animations
└── README.md           # This file
```

---

## 🎨 Quick Customization Guide

### 1. CHANGE COLORS (Easiest Method)

Open `css/styles.css` and find the `:root` section at the top. Change these values:

```css
:root {
    /* Main brand color - change this to your company color */
    --primary-color: #2563eb;        /* Try: #e11d48 (red), #16a34a (green), #9333ea (purple) */
    --primary-dark: #1d4ed8;         /* Darker shade for hover */
    --primary-light: #dbeafe;        /* Lighter shade for backgrounds */
}
```

**Popular Color Palettes:**
| Color | Primary | Dark | Light |
|-------|---------|------|-------|
| 🔵 Blue | `#2563eb` | `#1d4ed8` | `#dbeafe` |
| 🔴 Red | `#e11d48` | `#be123c` | `#ffe4e6` |
| 🟢 Green | `#16a34a` | `#15803d` | `#dcfce7` |
| 🟣 Purple | `#9333ea` | `#7e22ce` | `#f3e8ff` |
| 🟠 Orange | `#ea580c` | `#c2410c` | `#fff7ed` |
| 🔵 Navy | `#1e40af` | `#1e3a8a` | `#dbeafe` |
| ⚫ Black | `#000000` | `#000000` | `#f3f4f6` |

> 💡 **Tip:** Use [https://htmlcolorcodes.com](https://htmlcolorcodes.com) to pick your colors!

---

### 2. CHANGE IMAGES

#### Hero Background (Main Banner)
In `css/styles.css`, find `.hero-section`:
```css
.hero-section {
    /* Change this URL to your image */
    background: url('YOUR_IMAGE_URL_HERE') center center / cover no-repeat;
}
```

**Options:**
- Use your own image: `url('../images/your-photo.jpg')`
- Use free images from [Unsplash](https://unsplash.com): Copy any image URL
- Use a gradient instead: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

#### About Section Image
In `index.html`, find the About section:
```html
<!-- Change the src to your image -->
<img src="YOUR_IMAGE_URL" alt="About Our Company" class="img-fluid rounded-3 shadow about-img">
```

#### Team Member Photos
In `index.html`, find each team member:
```html
<!-- Change each team member photo -->
<img src="YOUR_PHOTO_URL" alt="Member Name" class="team-img rounded-circle mb-3">
```

#### Portfolio Project Images
In `index.html`, find each portfolio item:
```html
<!-- Change project images -->
<img src="YOUR_PROJECT_IMAGE_URL" alt="Project Name" class="img-fluid w-100">
```

---

### 3. CHANGE TEXT CONTENT

All text is in `index.html`. Look for these `CUSTOMIZE` comments:

```html
<!-- CUSTOMIZE: Your company name -->
<!-- CUSTOMIZE: Your headline -->
<!-- CUSTOMIZE: Your description -->
```

#### Important Text to Change:

| Section | What to Change | Where in HTML |
|---------|---------------|---------------|
| Navigation | Company name | `<a class="navbar-brand">` |
| Hero | Main headline and tagline | `<h1>` and `<p class="lead">` |
| About | Company description | `<p class="text-muted">` |
| Stats | Numbers (500+, 1200+, etc.) | `<div class="stat-number">` |
| Services | Service names and descriptions | Each `.service-card` |
| Portfolio | Project names and images | Each `.portfolio-item` |
| Team | Member names, positions, photos | Each `.team-card` |
| Testimonials | Client quotes and names | Each `.testimonial-card` |
| Contact | Email, phone, address | `.contact-info` section |
| Footer | Copyright and social links | `<footer>` section |

---

### 4. CHANGE ICONS

Icons are from [Font Awesome](https://fontawesome.com/icons).

To change an icon, replace the class name:

```html
<!-- Current icon -->
<i class="fas fa-laptop-code"></i>

<!-- Change to any icon, e.g., a phone icon -->
<i class="fas fa-phone"></i>
```

**Browse icons at:** [https://fontawesome.com/icons](https://fontawesome.com/icons)

**Common icons:**
- `fa-home` - Home
- `fa-phone` - Phone
- `fa-envelope` - Email
- `fa-map-marker-alt` - Location
- `fa-star` - Star
- `fa-heart` - Heart
- `fa-cog` - Settings
- `fa-chart-bar` - Chart
- `fa-users` - Users

---

### 5. CHANGE SOCIAL MEDIA LINKS

#### In the Footer:
```html
<!-- CUSTOMIZE: Your social media links -->
<a href="YOUR_FACEBOOK_URL" class="text-white me-3"><i class="fab fa-facebook"></i></a>
<a href="YOUR_TWITTER_URL" class="text-white me-3"><i class="fab fa-twitter"></i></a>
<a href="YOUR_LINKEDIN_URL" class="text-white me-3"><i class="fab fa-linkedin"></i></a>
<a href="YOUR_INSTAGRAM_URL" class="text-white me-3"><i class="fab fa-instagram"></i></a>
```

#### For Team Members:
```html
<a href="LINK" class="me-2"><i class="fab fa-linkedin"></i></a>
<a href="LINK" class="me-2"><i class="fab fa-twitter"></i></a>
<a href="LINK" class="me-2"><i class="fab fa-github"></i></a>
```

---

### 6. CHANGE GOOGLE MAP

In `index.html`, find the map section (if added):

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the HTML
5. Replace the `<iframe>` src with your link

---

### 7. MAKE CONTACT FORM WORK

The contact form currently shows an alert. To make it send real emails:

#### Option A: Formspree (Easiest - Free)
1. Go to [https://formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Get your form endpoint (like `https://formspree.io/f/xn......`)
5. Change the form tag:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option B: Netlify Forms
If hosting on Netlify, just add `netlify` attribute:
```html
<form name="contact" netlify>
```

---

## 📱 Sections Overview

| Section | Description |
|---------|-------------|
| **Navigation** | Fixed top menu with company name and links |
| **Hero** | Full-screen banner with headline and CTA buttons |
| **About** | Company description, image, and statistics |
| **Services** | 6 service cards with icons |
| **Portfolio** | Filterable project gallery |
| **Team** | Team member cards with photos and social links |
| **Testimonials** | Customer reviews with star ratings |
| **Contact** | Contact info and message form |
| **Footer** | Company info, quick links, newsletter signup |

---

## 🚀 How to Deploy

### GitHub Pages (Free Hosting)

Since your repo is `SSierraAl.github.io`, your site will be automatic!

1. Commit your changes:
```bash
git add .
git commit -m "Add business website"
git push
```

2. Your site will be live at: `https://SSierraAl.github.io`

---

## 🛠️ Features

✅ Fully Responsive (Mobile, Tablet, Desktop)
✅ Smooth Scroll Navigation
✅ Animated Stats Counter
✅ Portfolio Filtering
✅ Hover Effects on Cards
✅ Back to Top Button
✅ Fade-in Animations
✅ Contact Form Validation
✅ Newsletter Signup
✅ Social Media Links
✅ Google Fonts Integration
✅ Font Awesome Icons

---

## 📝 Editing Checklist

Before launching your site, make sure to:

- [ ] Change company name in navigation and footer
- [ ] Update hero section headline and tagline
- [ ] Replace all placeholder images with your own
- [ ] Update about section with your company info
- [ ] Change statistics numbers
- [ ] Update services with your actual services
- [ ] Add your real portfolio projects
- [ ] Update team member info and photos
- [ ] Add real testimonials or remove the section
- [ ] Update contact information (email, phone, address)
- [ ] Add your social media links
- [ ] Change colors to match your brand
- [ ] Update copyright year in footer
- [ ] Test on mobile device
- [ ] Make contact form work (Formspree or other)

---

## 🎓 Resources for Beginners

| Need | Resource |
|------|----------|
| Free Images | [Unsplash](https://unsplash.com), [Pexels](https://pexels.com) |
| Color Picker | [htmlcolorcodes.com](https://htmlcolorcodes.com) |
| Icons | [Font Awesome](https://fontawesome.com/icons) |
| Fonts | [Google Fonts](https://fonts.google.com) |
| HTML/CSS Practice | [MDN Web Docs](https://developer.mozilla.org) |
| Google Maps Embed | [Google Maps](https://www.google.com/maps) |
| Contact Forms | [Formspree](https://formspree.io) |

---

## 📞 Need Help?

Search for `CUSTOMIZE` or `CUSTOMIZE:` in the `index.html` file to find all the places you can edit!

All CSS variables are at the top of `css/styles.css` for easy customization.

---

**Happy Building! 🚀**