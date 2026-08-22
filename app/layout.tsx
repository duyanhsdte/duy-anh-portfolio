import type { Metadata } from "next";
import "./globals.css";
import "./profile-overrides.css";
import "./language-switch.css";
import "./contact-popover.css";

export const metadata: Metadata = {
  title: "Mai Duy Anh — Affiliate Marketing Portfolio",
  description: "Affiliate Marketing, Creator Management and Performance Analytics portfolio of Mai Duy Anh.",
};

const contactScript = `
(() => {
  const setup = () => {
    const trigger = document.querySelector('.hero-actions .secondary');
    if (!trigger || trigger.dataset.contactReady === '1') return;
    trigger.dataset.contactReady = '1';
    trigger.classList.add('contact-trigger');
    trigger.setAttribute('href', '#contact');
    trigger.setAttribute('aria-expanded', 'false');

    const popover = document.createElement('div');
    popover.className = 'contact-popover';
    popover.innerHTML = ` + "`" + `
      <div class="contact-head"><strong>Contact</strong><span>Available</span></div>
      <div class="contact-list">
        <div class="contact-row"><span class="contact-label">Phone</span><span class="contact-value">0911643774</span><button type="button" class="contact-copy" data-copy="0911643774">Copy</button></div>
        <div class="contact-row"><span class="contact-label">Email</span><span class="contact-value">duyanhsdte@gmail.com</span><button type="button" class="contact-copy" data-copy="duyanhsdte@gmail.com">Copy</button></div>
        <div class="contact-row"><span class="contact-label">LinkedIn</span><span class="contact-value">linkedin.com/in/anhmd2003</span><a class="contact-open" href="https://www.linkedin.com/in/anhmd2003/" target="_blank" rel="noreferrer">Open</a></div>
      </div>
    ` + "`" + `;
    trigger.parentElement?.appendChild(popover);

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const open = popover.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(open));
    });

    popover.addEventListener('click', async (event) => {
      const button = event.target.closest('.contact-copy');
      if (!button) return;
      const value = button.dataset.copy || '';
      try {
        await navigator.clipboard.writeText(value);
        const old = button.textContent;
        button.textContent = 'Copied';
        button.classList.add('copied');
        setTimeout(() => { button.textContent = old; button.classList.remove('copied'); }, 1200);
      } catch (_) {}
    });

    document.addEventListener('click', (event) => {
      if (!popover.classList.contains('open')) return;
      if (popover.contains(event.target) || trigger.contains(event.target)) return;
      popover.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
  new MutationObserver(setup).observe(document.body, { childList: true, subtree: true });
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script dangerouslySetInnerHTML={{ __html: contactScript }} /></body></html>;
}