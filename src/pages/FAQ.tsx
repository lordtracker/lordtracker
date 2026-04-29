import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, CheckCircle2, HelpCircle, MessageCircle, ShieldAlert } from "lucide-react";

import lordTrackerLogo from "@/assets/lord-tracker-logo.png";
import { Button } from "@/components/ui/button";

const whatsappNumber = "5519998438210";

const faqs = [
  {
    question: "O Rastreamento da Lord Tracker é um seguro? Se não recuperar meu veículo, a Lord Tracker reembolsa?",
    answer:
      "NÃO! Rastreamento veicular é um auxílio de recuperação, tendo também outras finalidades, como controle de frota, monitoramento de percurso, localização, histórico de rotas e apoio à gestão operacional. Ele não substitui seguro, não garante recuperação em 100% dos casos e não gera reembolso pela Lord Tracker caso o veículo não seja recuperado.",
    highlight: true,
  },
  {
    question: "O rastreador funciona em tempo real?",
    answer:
      "Sim, o sistema acompanha a localização conforme cobertura, sinal disponível e funcionamento do equipamento instalado no veículo.",
  },
  {
    question: "Posso usar para controlar minha frota?",
    answer:
      "Sim. A Lord Tracker atende empresas com recursos para monitoramento de percurso, cercas virtuais, histórico e apoio à logística.",
  },
  {
    question: "Bloqueadores de sinal podem interferir?",
    answer:
      "Sim. Jammers, áreas sem cobertura, danos físicos ou ações criminosas podem interferir no rastreamento e prejudicar a localização.",
  },
];

const FAQ = () => {
  const contactLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, tenho dúvidas sobre o rastreamento da Lord Tracker.",
  )}`;

  return (
    <main className="min-h-screen bg-hero-tech text-foreground">
      <div className="absolute inset-0 bg-location-grid opacity-60 radar-mask" aria-hidden="true" />
      <section className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center" aria-label="Voltar para início">
            <img
              src={lordTrackerLogo}
              alt="Logo Lord Tracker Rastreamento Veicular"
              className="h-14 w-auto max-w-[220px] object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </Link>
          <Button asChild variant="dark" size="sm">
            <Link to="/">
              <ArrowLeft /> Início
            </Link>
          </Button>
        </header>

        <div className="py-16 sm:py-20">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
            <HelpCircle className="size-4" /> Perguntas frequentes
          </p>
          <h1 className="text-balance text-4xl font-black leading-tight sm:text-6xl">FAQ Lord Tracker</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Respostas objetivas sobre rastreamento veicular, recuperação, frotas e limitações técnicas.
          </p>
        </div>

        <div className="grid gap-5 pb-16">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className={`rounded-md border p-6 shadow-tech ${faq.highlight ? "border-warning/50 bg-warning/10" : "border-border bg-panel-tech"}`}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/12 text-primary">
                  {faq.highlight ? <ShieldAlert className="size-6" /> : <CheckCircle2 className="size-6" />}
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${faq.highlight ? "text-warning" : "text-foreground"}`}>{faq.question}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="mb-16 rounded-md border border-warning/40 bg-surface-strong p-5 shadow-warning">
          <div className="flex flex-col gap-4 sm:flex-row">
            <AlertTriangle className="size-7 shrink-0 text-warning" />
            <div>
              <h2 className="text-xl font-bold text-warning">Transparência em primeiro lugar</h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                Rastreamento é uma ferramenta de auxílio e pode sofrer interferências externas. Para proteção patrimonial completa, avalie também a contratação de seguro veicular.
              </p>
              <Button asChild variant="hero" className="mt-5">
                <a href={contactLink} target="_blank" rel="noreferrer">
                  Falar com atendimento <MessageCircle />
                </a>
              </Button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default FAQ;