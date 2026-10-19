# AWS GameDay Africa - React Application

Web application for the AWS GameDay Africa 2026 event.

## 🚀 Quick start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start the application in development mode
npm start
```

The application will be available at http://localhost:3000

> **Note:** With Node.js 17+ and react-scripts 5, you may need to set
> `NODE_OPTIONS=--openssl-legacy-provider` before `npm start` to avoid an
> `ERR_OSSL_EVP_UNSUPPORTED` error.

### Available scripts

- `npm start` - Starts the application in development mode
- `npm run build` - Builds the application for production
- `npm test` - Runs the tests
- `npm run eject` - Ejects the configuration (irreversible)

## 📁 Project structure

```
webapp/
├── public/
│   ├── data/
│   │   ├── usergroups.json    # User groups data
│   │   ├── organizers.json    # Organizers data
│   │   └── sponsors.json      # Sponsors data
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Navigation.js
│   │   ├── AboutSection.js
│   │   ├── UserGroupsSection.js
│   │   ├── UserGroupCard.js
│   │   ├── JoinSection.js
│   │   ├── OrganizersSection.js
│   │   ├── OrganizerCard.js
│   │   ├── TeamCard.js
│   │   ├── SponsorsSection.js
│   │   └── Footer.js
│   ├── hooks/
│   │   └── useData.js         # Custom hooks for data loading
│   ├── i18n/
│   │   ├── translations.js    # French and English strings
│   │   └── LanguageContext.js # Language detection and provider
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Features

- **Responsive design**: Interface adapted for mobile and desktop
- **Dynamic loading**: Data loaded from JSON files
- **Bilingual (FR/EN)**: Language auto-detected from the browser, with a manual switch
- **Smooth navigation**: Fluid scrolling between sections
- **Animations**: Visual effects on scroll
- **Error handling**: Displays loading errors

## 🌍 Internationalization (i18n)

The site is available in French and English:
- The language is detected automatically from the browser (`navigator.language`).
- The user's choice is saved in `localStorage`.
- A FR/EN switch in the navigation bar lets users change the language manually.
- All interface strings live in `src/i18n/translations.js`; both languages share the same keys.

## ⚙️ Configuration

### Data
Data is managed through JSON files in `public/data/`:
- `usergroups.json`: List of participating user groups
- `organizers.json`: Organizers information
- `sponsors.json`: Sponsors information

## 🏗️ Build and deployment

```bash
# Build for production
npm run build

# The build output will be in the 'build/' folder
```

## 🔧 Customization

- **Colors**: Edit the CSS variables in `App.css`
- **User Groups**: Edit `public/data/usergroups.json`
- **Organizers**: Edit `public/data/organizers.json`
- **Sponsors**: Edit `public/data/sponsors.json`
- **Text / translations**: Edit `src/i18n/translations.js`
- **Content**: Edit the components in `src/components/`

## 📱 Browser support

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)
