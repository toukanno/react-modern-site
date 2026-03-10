from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "react-modern-site-summary.pdf"


def build_story():
    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "Title",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=22,
        textColor=colors.HexColor("#1d1635"),
        spaceAfter=6,
    )
    section = ParagraphStyle(
        "Section",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=12,
        textColor=colors.HexColor("#ff5f6d"),
        spaceBefore=4,
        spaceAfter=3,
    )
    body = ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.3,
        leading=10.1,
        textColor=colors.HexColor("#2a2547"),
        spaceAfter=2,
    )
    bullet = ParagraphStyle(
        "Bullet",
        parent=body,
        leftIndent=0,
        firstLineIndent=0,
        spaceAfter=1.2,
    )
    note = ParagraphStyle(
        "Note",
        parent=body,
        fontSize=7.5,
        leading=9,
        textColor=colors.HexColor("#5d557c"),
    )

    story = [
        Paragraph("react-modern-site: App Summary", title),
        Paragraph(
            "One-page summary based only on repo evidence from the React + Vite codebase and deployment files.",
            note,
        ),
        Spacer(1, 2.5 * mm),
        Paragraph("What It Is", section),
        Paragraph(
            "A single-page marketing site for RainbowMD, presented as an Electron Markdown editor with colorful themes, real-time preview, and HTML/PDF export. "
            "The repo ships the site as a React 18 SPA built with Vite and deployed to GitHub Pages.",
            body,
        ),
        Paragraph("Who It's For", section),
        Paragraph(
            "Primary persona: creators, individual developers, and Markdown beginners who want a lightweight writing tool and a simple path to preview, export, and download plans.",
            body,
        ),
        Paragraph("What It Does", section),
        *bullet_paragraphs(
            [
                "Presents RainbowMD as a lightweight Electron Markdown editor.",
                "Highlights real-time preview as a core writing workflow.",
                "Promotes colorful themes as part of the product identity.",
                "Explains HTML/PDF export for sharing or document distribution.",
                "Shows three download options: free, beta, and product editions via Booth.",
                "Links users to the official page, GitHub repo, Ko-fi support, and a privacy policy page.",
            ],
            bullet,
        ),
        Paragraph("How It Works", section),
        *bullet_paragraphs(
            [
                "Entry/rendering: `index.html` hosts `#root`; `src/main.jsx` mounts React 18 in `StrictMode`.",
                "Routing: `HashRouter` and `Routes` in `src/App.jsx` serve five client routes: Home, Features, Plans, Links, and Support.",
                "UI composition: `AppShell` provides shared header/footer chrome; each route renders mostly static marketing content from arrays defined in `src/App.jsx`.",
                "External/services flow: CTA links send users to Booth product pages, the GitHub repo, Ko-fi, the official site, and `privacy-policy.html`.",
                "Build/deploy: Vite builds with base path `/react-modern-site/`; GitHub Actions runs `npm ci`, `npm run build`, and deploys `dist/` to GitHub Pages.",
                "Backend/API/auth/persistence: Not found in repo.",
            ],
            bullet,
        ),
        Paragraph("How To Run", section),
        *bullet_paragraphs(
            [
                "Prerequisites: Node.js version not found in repo; npm is required.",
                "Install dependencies: `npm install`",
                "Start local dev server: `npm run dev`",
                "Optional production build: `npm run build`",
            ],
            bullet,
        ),
    ]
    return story


def bullet_paragraphs(items, style):
    return [Paragraph(f"- {item}", style) for item in items]


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=13 * mm,
        rightMargin=13 * mm,
        topMargin=11 * mm,
        bottomMargin=11 * mm,
        title="react-modern-site summary",
        author="Codex",
    )
    story = build_story()
    doc.build(story)

    reader = PdfReader(str(OUTPUT))
    if len(reader.pages) != 1:
        raise SystemExit(f"Expected 1 page, got {len(reader.pages)}")

    print(OUTPUT)


if __name__ == "__main__":
    main()
