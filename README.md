# KumarProjects Portfolio

Welcome to the source code for **KumarProjects**, my personal portfolio website designed to showcase my software engineering projects, game development work, and machine learning experiments.

## 📖 About

This website is a custom-built platform featuring a modern dark-themed UI, smooth scroll animations, and interactive elements. It serves as a central hub for detailed documentation, screenshots, and download links for my various projects.

## 🚀 Featured Projects

The portfolio currently details the following major projects:

### ♟️ [Chess Project](chess.html)
A hybrid Chess engine and game interface.
*   **Core:** Python (Frontend) + C# (Backend Logic).
*   **Key Features:**
    *   Full legal move validation and Checkmate/Stalemate detection.
    *   FEN (Forsyth–Edwards Notation) string loading and saving.
    *   PGN (Portable Game Notation) support.
    *   Custom UI with backtracking and promotion support.

### 🧠 [Neural Network Basics](neural_network.html)
A handwritten digit recognition system built from scratch.
*   **Core:** Python + NumPy + Pygame.
*   **Key Features:**
    *   Multi-layer perceptron implemented without high-level ML libraries.
    *   Interactive Pygame interface for drawing digits (0-9).
    *   Model training on the MNIST dataset with JSON persistence.

## 🛠️ Website Tech Stack

*   **HTML5:** Semantic structure for project pages.
*   **CSS3:**
    *   **Modular Design:** Separated into `components.css` (Global), `style.css` (Home), and project-specific files (`chess.css`, `neural_network.css`).
    *   **Animations:** Keyframe animations for fade-ups (`.reveal`), particle floating, and scroll-triggered scaling effects.
    *   **Typography:** Uses 'Playfair Display' for headers and 'Iosevka Charon Mono' for technical text.
*   **JavaScript:**
    *   `IntersectionObserver` API for performance-friendly scroll reveal effects.
    *   Custom dynamic particle background generator.
    *   Responsive Sidebar navigation logic.

## 📂 Project Structure

```text
KumarProjects/
├── css/
│   ├── components.css     # Global styles (Navbar, Footer, Cards, Animations)
│   ├── chess.css          # Styles specific to the Chess page layout
│   ├── neural_network.css # Styles specific to the NN page layout
│   └── style.css          # Homepage specific styles
├── images/                # Project screenshots and icons
├── js/
│   └── main.js            # UI logic, Scroll Observer, and Particles
├── chess.html             # Chess project documentation
├── neural_network.html    # Neural Network project documentation
└── index.html             # Landing page
```

## 🔗 Connect

*   **Itch.io:** rudravns
*   **Replit:** @-THE-CODER-

---
*Built by Rudransh Kumar © 2026*