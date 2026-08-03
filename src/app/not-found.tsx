import {
  Container,
  PrimaryButton,
  SectionLabel,
} from "@/components/common/Primitives";
export default function NotFound() {
  return (
    <Container>
      <section className="page-hero">
        <div className="page-hero-grid">
          <div>
            <SectionLabel index="404" title="NOT FOUND" />
          </div>
          <h1>ТАКОЙ СТРАНИЦЫ НЕТ</h1>
          <p>
            Возможно, адрес изменился. Вернитесь к проектам и продолжите
            знакомство.
          </p>
          <div style={{ marginTop: 40 }}>
            <PrimaryButton href="/work">Смотреть проекты</PrimaryButton>
          </div>
        </div>
      </section>
    </Container>
  );
}
