import './bootstrap';
import '../css/app.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import "../css/frontendasset/css/animate.css";
import "../css/frontendasset/css/style.css";
import "../css/frontendasset/css/responsive.css";
import "../css/frontendasset/color/theme.css";
import "../css/frontendasset/css/ionicons.min.css";
import "../css/frontendasset/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/frontendasset/css/themify-icons.css";
import "../css/frontendasset/css/magnific-popup.css";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: false,
});