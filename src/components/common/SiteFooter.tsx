import Link from "next/link";
import { Container } from "./Primitives";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <Link className="footer-wordmark" href="/">
            FORMA
          </Link>
          <p>
            Digital atelier
            <br />
            for local business
          </p>
          <nav aria-label="Навигация в подвале">
            <Link href="/work">Проекты</Link>
            <Link href="/services">Услуги</Link>
            <Link href="/about">Подход</Link>
            <Link href="/contact">Контакты</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 FORMA</span>
          <span>Тольятти / удалённо</span>
          <Link href="/privacy">Политика конфиденциальности</Link>
          <span>Все кейсы демонстрационные</span>
        </div>
      </Container>
    </footer>
  );
}
