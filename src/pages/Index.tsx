import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Clock3,
  Eye,
  Factory,
  Headphones,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  RadioTower,
  Route,
  Satellite,
  ShieldAlert,
  Smartphone,
  Truck,
  Tv,
  X,
  Zap,
} from "lucide-react";

import lordTrackerLogo from "@/assets/lord-tracker-logo.png";
import { Button } from "@/components/ui/button";

const whatsappNumber = "5519999999999";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "A Empresa", href: "#empresa" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Combos", href: "#combos" },
  { label: "Frotas & Pesados", href: "#frotas" },
  { label: "Adicionais", href: "#adicionais" },
];

const stats = [
  { value: "2022", label: "fundação" },
  { value: "4+", label: "anos de experiência" },
  { value: "800+", label: "veículos ativos" },
];

const trackers = [
  {
    icon: Satellite,
    title: "Tracker Pro GPS/GSM",
    text: "Rastreamento em tempo real, histórico de rotas e alertas inteligentes para uso urbano.",
  },
  {
    icon: RadioTower,
    title: "Módulo Anti-Furto",
    text: "Tecnologia compacta para motos e carros, com bloqueio remoto conforme configuração contratada.",
  },
  {
    icon: CircuitBoard,
    title: "Telemetria Avançada",
    text: "Leitura de ignição, eventos, velocidade e parâmetros para gestão profissional de operação.",
  },
];

const plans = [
  { name: "Essencial", price: "R$ 59,90", features: ["Localização", "Histórico", "Alertas básicos"] },
  { name: "Plus", price: "R$ 79,90", features: ["Bloqueio remoto", "Cerca virtual", "Suporte prioritário"] },
  { name: "Premium", price: "R$ 99,90", features: ["Assistência 24h", "App LordTV", "Monitoramento ampliado"] },
];

const extras = [
  { icon: Headphones, title: "Assistência 24h", text: "Apoio dedicado para emergências e suporte operacional." },
  { icon: Tv, title: "LordTV IPTV", text: "Benefício exclusivo para clientes em planos selecionados." },
  { icon: Smartphone, title: "App do Cliente", text: "Acompanhe localização, alertas e rotas direto no celular." },
  { icon: Clock3, title: "Instalação Ágil", text: "Atendimento programado para Campinas e região." },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const contactLink = useMemo(
    () =>
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Olá, quero conhecer os planos da Lord Tracker.",
      )}`,
    [],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim().slice(0, 80);
    const phone = String(formData.get("phone") ?? "").trim().slice(0, 30);
    const vehicle = String(formData.get("vehicle") ?? "").trim().slice(0, 80);
    const message = `Olá, sou ${name || "cliente"}. Telefone: ${phone || "não informado"}. Veículo/frota: ${vehicle || "não informado"}. Quero uma cotação Lord Tracker.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/86 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Lord Tracker início">
            <span className="flex size-11 items-center justify-center overflow-hidden rounded-md border border-primary/35 bg-primary/10 shadow-tech transition-transform group-hover:scale-105">
              <img src={lordTrackerLogo} alt="Logo Lord Tracker" className="h-full w-full object-cover" />
            </span>
            <span className="leading-none">
              <strong className="block text-base tracking-wide">Lord Tracker</strong>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Campinas/SP</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild variant="tech" size="sm">
              <a href={contactLink} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-secondary text-foreground lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-surface-strong px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative min-h-[92vh] bg-hero-tech pt-28">
        <div className="absolute inset-0 bg-location-grid opacity-70 radar-mask" aria-hidden="true" />
        <div className="absolute inset-x-0 top-16 h-px bg-accent-tech" aria-hidden="true" />
        <div className="absolute right-[8%] top-32 hidden h-80 w-80 rounded-full border border-primary/25 bg-primary/5 lg:block" aria-hidden="true">
          <span className="absolute left-0 right-0 top-8 h-px bg-primary/60 animate-scan" />
          <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary))]" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
              <Zap className="size-4" /> Rastreamento veicular inteligente
            </p>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Lord Tracker
            </h1>
            <img src={lordTrackerLogo} alt="Lord Tracker Rastreamento Veicular" className="mt-6 max-h-28 w-auto rounded-md border border-border bg-surface/70 object-contain p-2 shadow-tech sm:max-h-36" />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Tecnologia, presença local e monitoramento para carros, motos, utilitários e frotas na região de Campinas/SP.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href={contactLink} target="_blank" rel="noreferrer">
                  Solicitar cotação <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="dark" size="xl">
                <a href="#transparencia">
                  Ver transparência <ShieldAlert />
                </a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-md border border-border bg-surface/70 backdrop-blur">
              {stats.map((stat) => (
                <div key={stat.label} className="border-r border-border p-4 last:border-r-0 sm:p-5">
                  <strong className="block text-2xl text-primary sm:text-3xl">{stat.value}</strong>
                  <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg animate-float lg:max-w-none">
            <div className="rounded-md border border-primary/25 bg-panel-tech p-5 shadow-tech">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Painel ativo</p>
                  <strong className="text-xl">Campinas/SP</strong>
                </div>
                <span className="rounded-md bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">800+ online</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-surface-strong">
                <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.55)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.55)_1px,transparent_1px)] bg-[size:34px_34px]" />
                <Route className="absolute left-[12%] top-[18%] size-20 text-accent/70" />
                <Truck className="absolute right-[18%] top-[38%] size-12 text-primary drop-shadow" />
                <MonitorSmartphone className="absolute bottom-[18%] left-[32%] size-14 text-foreground" />
                <span className="absolute left-[55%] top-[18%] size-4 rounded-full bg-success shadow-[0_0_28px_hsl(var(--success))]" />
                <span className="absolute bottom-[28%] right-[22%] size-3 rounded-full bg-accent shadow-[0_0_24px_hsl(var(--accent))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="transparencia" className="border-y border-warning/35 bg-warning/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-md border border-warning/40 bg-surface-strong p-5 shadow-warning sm:flex-row">
          <AlertTriangle className="mt-1 size-7 shrink-0 text-warning" aria-hidden="true" />
          <div>
            <h2 className="text-xl font-bold text-warning">Aviso de transparência: rastreador não é seguro veicular</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              O rastreamento é uma ferramenta de auxílio à localização e recuperação, mas não substitui seguro. O sistema não é 100% eficaz e pode sofrer interferências de criminosos, incluindo bloqueadores de sinal (Jammers), áreas sem cobertura, danos ao equipamento ou outras ações externas.
            </p>
          </div>
        </div>
      </section>

      <section id="empresa" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">A Empresa</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Presença local, operação técnica e atendimento direto.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Fundada em 2022 com foco em rastreamento veicular.", "Atuação consolidada em Campinas e região metropolitana.", "Mais de 800 veículos ativos monitorados.", "Soluções para uso pessoal, empresas e veículos pesados."].map((item) => (
              <div key={item} className="rounded-md border border-border bg-panel-tech p-5 transition-transform hover:-translate-y-1">
                <CheckCircle2 className="mb-4 size-6 text-primary" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipamentos" className="bg-surface-strong px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Equipamentos</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Rastreadores para diferentes operações.</h2>
            </div>
            <Eye className="hidden size-12 text-accent sm:block" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {trackers.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group rounded-md border border-border bg-panel-tech p-6 shadow-tech transition-all hover:-translate-y-1 hover:border-primary/45">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-md bg-primary/12 text-primary transition-transform group-hover:scale-110">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="combos" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Combos</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Planos claros para proteger sua rotina.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article key={plan.name} className={`rounded-md border p-6 ${index === 1 ? "border-primary bg-primary/10 shadow-tech" : "border-border bg-panel-tech"}`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-4xl font-black text-primary">{plan.price}<span className="text-sm font-medium text-muted-foreground">/mês</span></p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <ChevronRight className="size-4 text-accent" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={index === 1 ? "hero" : "tech"} className="mt-7 w-full">
                  <a href={contactLink} target="_blank" rel="noreferrer">Contratar combo</a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="frotas" className="bg-surface-strong px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Frotas & Pesados</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Gestão logística para empresas que precisam enxergar a operação.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Controle rotas, acompanhe deslocamentos, reduza ociosidade e tenha dados para decisões operacionais em frotas leves, pesadas e equipamentos.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[{ icon: Factory, text: "Painel para operação B2B" }, { icon: Truck, text: "Veículos pesados e utilitários" }, { icon: Building2, text: "Relatórios gerenciais" }, { icon: Route, text: "Rotas e cercas virtuais" }].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="rounded-md border border-border bg-panel-tech p-5">
                  <Icon className="mb-4 size-7 text-accent" />
                  <p className="font-semibold">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="adicionais" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Adicionais</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Serviços extras para elevar a experiência.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {extras.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-md border border-border bg-panel-tech p-5 transition-colors hover:border-accent/50">
                  <Icon className="mb-5 size-8 text-primary" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-hero-tech px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Contato</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Fale com a Lord Tracker.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Envie seus dados e abra uma conversa direta pelo WhatsApp para receber uma cotação.</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-md border border-border bg-panel-tech p-6 shadow-tech">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Nome
                <input name="name" required maxLength={80} className="h-11 rounded-md border border-input bg-background px-3 text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring" placeholder="Seu nome" />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                WhatsApp
                <input name="phone" required maxLength={30} className="h-11 rounded-md border border-input bg-background px-3 text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring" placeholder="(19) 99999-9999" />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-medium">
              Veículo ou frota
              <input name="vehicle" maxLength={80} className="h-11 rounded-md border border-input bg-background px-3 text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring" placeholder="Ex.: carro, moto, caminhão ou frota" />
            </label>
            <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
              Enviar pelo WhatsApp <MessageCircle />
            </Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border bg-surface-strong px-4 py-8 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <p>© 2026 Lord Tracker. Rastreamento veicular em Campinas/SP.</p>
          <a href="#transparencia" className="text-warning hover:text-accent">Leia o aviso de transparência</a>
        </div>
      </footer>

      <a
        href={contactLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-md bg-accent-tech text-primary-foreground shadow-warning transition-transform hover:scale-105"
        aria-label="Abrir WhatsApp da Lord Tracker"
      >
        <MessageCircle className="size-6" />
      </a>
    </main>
  );
};

export default Index;