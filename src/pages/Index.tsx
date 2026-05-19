import { useEffect, useMemo, useState } from "react";
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
  Menu,
  Instagram,
  MessageCircle,
  MonitorSmartphone,
  RadioTower,
  Route,
  Satellite,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Truck,
  Tv,
  Video,
  X,
  Zap,
} from "lucide-react";

import lordTrackerLogo from "@/assets/lord-tracker-logo.png";
import appMapImage from "@/assets/lord-tracker-app-map.png";
import welcomePost from "@/assets/welcome-post.png";
import lordSistemLogo from "@/assets/lord-sistem-logo-clean.png";
import { Button } from "@/components/ui/button";

const whatsappNumber = "5519998438210";
const instagramUrl = "https://www.instagram.com/lord.tracker?igsh=dnVnNXJkYjM0NGYz";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "A Empresa", href: "#empresa" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Combos", href: "#combos" },
  { label: "Frotas & Pesados", href: "#frotas" },
  { label: "Lord Sistem", href: "#lord-sistem" },
  { label: "Adicionais", href: "#adicionais" },
  { label: "FAQ", href: "/faq" },
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
    text: "Rastreamento em tempo real, histórico de rotas , cerca virtual, alertas inteligentes para uso empresarial, e muito mais...",
  },
  {
    icon: RadioTower,
    title: "Módulo Anti-Furto",
    text: "Tecnologia para motos, carros, e veículos pesados, com bloqueio remoto. Dispositivos de ponta com tecnologia anti-jammer.",
  },
  {
    icon: CircuitBoard,
    title: "Telemetria Avançada",
    text: "Leitura de ignição, eventos, velocidade e parâmetros para gestão profissional de operação.",
  },
];

const plans = [
  {
    name: "Basic 4G Moto",
    oldPrice: "R$ 49,90",
    price: "R$ 39,90",
    features: ["Rastreamento", "Telemetria", "Aplicativo", "Cerca virtual", "Relatórios"],
  },
  {
    name: "Pro 4G Moto",
    oldPrice: "R$ 59,90",
    price: "R$ 49,90",
    features: ["Rastreamento", "Telemetria", "Aplicativo", "Bloqueio do veículo", "Cerca virtual", "Relatórios", "Desconto em IPTV e assistência veicular"],
  },
  {
    name: "Basic 4G Car",
    oldPrice: "R$ 59,90",
    price: "R$ 49,90",
    features: ["Rastreamento", "Telemetria", "Aplicativo", "Cerca virtual", "Relatórios"],
  },
  {
    name: "Pró 4G Car",
    oldPrice: "R$ 69,90",
    price: "R$ 59,90",
    features: ["Rastreamento", "Telemetria", "Aplicativo", "Bloqueio do veículo", "Cerca virtual", "Relatórios", "Desconto em IPTV e assistência veicular"],
  },
];

const TowTruckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 20h15l5-7h4" />
    <path d="M6 20v-6h8l5 6" />
    <path d="M14 14V9h5" />
    <path d="M19 9l-4 5" />
    <path d="M25 13v8" />
    <path d="M23 23h4" />
    <circle cx="9" cy="23" r="2.5" />
    <circle cx="19" cy="23" r="2.5" />
  </svg>
);

const extras = [
  { icon: TowTruckIcon, title: "Assistência 24h", text: "Apoio dedicado para emergências e suporte operacional.", iconClassName: "text-warning" },
  { icon: Tv, title: "LordTV IPTV", text: "Benefício exclusivo para clientes em planos selecionados." },
  { icon: Smartphone, title: "App do Cliente", text: "Acompanhe localização, alertas e rotas direto no celular." },
  { icon: Clock3, title: "Instalação Ágil", text: "Atendimento programado para Campinas e região." },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quickContactOpen, setQuickContactOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (!sessionStorage.getItem("lordtracker-welcome-seen")) {
        const timer = setTimeout(() => setWelcomeOpen(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setWelcomeOpen(true);
    }
  }, []);

  const closeWelcome = () => {
    setWelcomeOpen(false);
    try {
      sessionStorage.setItem("lordtracker-welcome-seen", "1");
    } catch {
      /* ignore */
    }
  };
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

  const handleQuickContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("quickName") ?? "").trim().slice(0, 80);
    const phone = String(formData.get("quickPhone") ?? "").trim().slice(0, 30);
    const vehicles = String(formData.get("quickVehicles") ?? "").trim().slice(0, 40);
    const email = String(formData.get("quickEmail") ?? "").trim().slice(0, 120);
    const message = `Olá, quero falar com a Lord Tracker. Nome: ${name || "não informado"}. WhatsApp: ${phone || "não informado"}. Quantidade de veículos: ${vehicles || "não informado"}. E-mail: ${email || "não informado"}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setQuickContactOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/86 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
          <a href="#inicio" className="group flex items-center" aria-label="Lord Tracker início">
            <img
              src={lordTrackerLogo}
              alt="Logo Lord Tracker Rastreamento Veicular"
              className="h-16 w-auto max-w-[230px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-20 sm:max-w-[300px] lg:h-24 lg:max-w-[360px]"
            />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Lord Tracker"
              className="inline-flex size-9 items-center justify-center rounded-md border border-primary/35 bg-primary/10 text-primary transition-colors hover:bg-primary/20 hover:text-foreground"
            >
              <Instagram className="size-4" />
            </a>
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
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-primary hover:bg-secondary"
              >
                <Instagram className="size-4" /> Instagram @lord.tracker
              </a>
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
            <h1 className="sr-only">Lord Tracker Rastreamento Veicular</h1>
            <img
              src={lordTrackerLogo}
              alt="Lord Tracker Rastreamento Veicular"
              className="mt-4 w-full max-w-[760px] object-contain drop-shadow-[0_0_42px_hsl(var(--primary)/0.42)]"
            />
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
                <img
                  src={appMapImage}
                  alt="Mapa oficial do app Lord Tracker com veículos monitorados"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="transparencia" className="border-y border-warning/35 bg-warning/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-md border border-warning/40 bg-surface-strong p-5 shadow-warning sm:flex-row">
          <AlertTriangle className="mt-1 size-7 shrink-0 text-warning" aria-hidden="true" />
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-warning">Transparência e responsabilidade técnica</h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                Na Lord Tracker, entendemos que o rastreamento veicular é uma peça fundamental na estratégia de segurança e logística. Nosso foco é oferecer ferramentas de alta tecnologia que permitam controle sobre o uso do veículo, tanto para fins particulares quanto para a gestão profissional de frotas.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground">Por que o Rastreamento Lord Tracker é essencial?</h3>
              <ul className="mt-2 space-y-2 leading-7 text-muted-foreground">
                <li><strong className="text-foreground">Gestão de comportamento:</strong> receba alertas em tempo real sobre eventos críticos, como freadas bruscas e excesso de velocidade, contribuindo para a preservação do veículo e a segurança do condutor.</li>
                <li><strong className="text-foreground">Histórico poderoso:</strong> acesse até um ano de histórico de posições e eventos, ideal para auditorias e análise de rotas.</li>
                <li><strong className="text-foreground">Segurança ativa:</strong> utilize cerca virtual para monitorar perímetros autorizados e bloqueio veicular para controle imediato, conforme o plano contratado.</li>
                <li><strong className="text-foreground">Foco em resultados:</strong> conte com uma solução indispensável para otimizar custos e acompanhar a produtividade de frotas.</li>
              </ul>
            </div>

            <div className="border-t border-warning/25 pt-4">
              <p className="leading-7 text-muted-foreground">
                Nossa atuação é pautada pela transparência. É fundamental que nossos clientes compreendam que o rastreamento é um serviço de monitoramento e auxílio logístico, e não uma modalidade de seguro veicular.
              </p>
              <p className="mt-2 leading-7 text-muted-foreground">
                Embora nossa tecnologia seja avançada, dispositivos de rastreamento podem estar sujeitos a interferências externas, como jammers, bloqueadores de sinal por terceiros, áreas sem cobertura ou remoção física do equipamento em ações criminosas. Por esses motivos técnicos, a Lord Tracker não realiza reembolso de valores ou indenizações caso o veículo seja furtado ou roubado e não seja possível recuperá-lo.
              </p>
              <p className="mt-2 leading-7 text-muted-foreground">
                O rastreamento aumenta significativamente as chances de recuperação e oferece dados valiosos para a gestão, sendo um investimento de excelente custo-benefício para quem não abre mão de estar no controle.
              </p>
            </div>
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
            {[
              "Desde 2022, entregamos excelência e tecnologia de ponta em rastreamento e telemetria veicular de alta precisão.",
              "Referência consolidada em Segurança Veicular, em toda Campinas e região metropolitana.",
              "Base de clientes robusta, com mais de 1200 veículos, sendo mais de 800 veículos, só na região de Campinas.",
              "Soluções inteligentes e personalizadas, para atender desde veículos pessoais, até frotas pesadas de grandes empresas. "
            ].map((item) => (
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
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <article key={plan.name} className={`rounded-md border p-6 ${index === 1 || index === 3 ? "border-primary bg-primary/10 shadow-tech" : "border-border bg-panel-tech"}`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-sm font-semibold text-muted-foreground">
                  De <span className="line-through decoration-warning decoration-2">{plan.oldPrice}</span> por
                </p>
                <p className="mt-1 text-4xl font-black text-primary">{plan.price}<span className="text-sm font-medium text-muted-foreground">/mês</span></p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <ChevronRight className="size-4 text-accent" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={index === 1 || index === 3 ? "hero" : "tech"} className="mt-7 w-full">
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

      <section id="lord-sistem" className="relative overflow-hidden border-y border-primary/30 bg-hero-tech px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-location-grid opacity-40" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-primary/10 px-3 py-2 text-sm font-bold uppercase tracking-[0.22em] text-primary">
              <Sparkles className="size-4" /> Em breve
            </p>
            <h2 className="sr-only">Lord Sistem</h2>
            <img
              src={lordSistemLogo}
              alt="Lord Sistem - Segurança eletrônica com inteligência artificial"
              className="mt-4 w-full max-w-[520px] object-contain drop-shadow-[0_0_42px_hsl(var(--primary)/0.35)]"
            />
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Em breve, a Lord Tracker também estará atuando no setor de <strong className="text-foreground">segurança eletrônica</strong>, com <strong className="text-foreground">monitoramento de câmeras e alarmes</strong> potencializados por <strong className="text-foreground">inteligência artificial</strong>.
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Uma nova frente para proteger residências, comércios e empresas com a mesma tecnologia, presença local e prontidão que já são marca da Lord Tracker.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href={contactLink} target="_blank" rel="noreferrer">
                  Quero ser avisado <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Video, title: "Monitoramento de câmeras", text: "Visão em tempo real com análise inteligente de eventos." },
              { icon: ShieldAlert, title: "Alarmes integrados", text: "Detecção e resposta rápida a invasões e ocorrências." },
              { icon: MonitorSmartphone, title: "Central com IA", text: "Algoritmos identificam comportamentos suspeitos automaticamente." },
              { icon: Eye, title: "Vigilância 24h", text: "Acompanhamento contínuo, com registros e relatórios." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-md border border-primary/25 bg-panel-tech p-5 shadow-tech">
                  <Icon className="mb-4 size-7 text-primary" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
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
                  <Icon className={`mb-5 size-8 ${item.iconClassName ?? "text-primary"}`} />
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
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>© 2026 Lord Tracker. Rastreamento veicular em Campinas/SP.</p>
          <div className="flex items-center gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Lord Tracker"
              className="inline-flex items-center gap-2 text-primary transition-colors hover:text-foreground"
            >
              <Instagram className="size-4" /> @lord.tracker
            </a>
            <a href="#transparencia" className="text-warning hover:text-accent">Leia o aviso de transparência</a>
          </div>
        </div>
      </footer>

      {quickContactOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-md border border-primary/35 bg-surface-strong p-5 shadow-tech sm:right-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">WhatsApp</p>
              <h2 className="mt-1 text-xl font-black">Atendimento rápido</h2>
            </div>
            <button type="button" onClick={() => setQuickContactOpen(false)} className="flex size-9 items-center justify-center rounded-md border border-border bg-secondary text-foreground" aria-label="Fechar formulário">
              <X className="size-4" />
            </button>
          </div>
          <form onSubmit={handleQuickContactSubmit} className="grid gap-3">
            <input name="quickName" required maxLength={80} className="h-11 rounded-md border border-input bg-background px-3 text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring" placeholder="Nome" />
            <input name="quickPhone" required maxLength={30} className="h-11 rounded-md border border-input bg-background px-3 text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring" placeholder="Número de WhatsApp" />
            <input name="quickVehicles" required maxLength={40} className="h-11 rounded-md border border-input bg-background px-3 text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring" placeholder="Quantidade de veículos" />
            <input name="quickEmail" required type="email" maxLength={120} className="h-11 rounded-md border border-input bg-background px-3 text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring" placeholder="E-mail" />
            <Button type="submit" variant="hero" className="mt-2 w-full">
              Enviar para WhatsApp <MessageCircle />
            </Button>
          </form>
        </div>
      )}

      {welcomeOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Boas-vindas Lord Tracker">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-primary/35 bg-surface-strong shadow-tech">
            <button
              type="button"
              onClick={closeWelcome}
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-md border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background"
              aria-label="Fechar boas-vindas"
            >
              <X className="size-4" />
            </button>
            <img
              src={welcomePost}
              alt="Caso real: motocicleta roubada às 14:00 e recuperada às 14:13 pela equipe Lord Tracker"
              className="block h-auto w-full object-contain"
              loading="eager"
            />
            <div className="space-y-3 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Bem-vindo à Lord Tracker</p>
              <h2 className="text-2xl font-black leading-tight">Resposta em minutos. Tecnologia que recupera.</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Veja como nossa equipe de pronta resposta atua para proteger seu patrimônio. Fale agora com a gente e proteja seu veículo.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild variant="hero" className="flex-1">
                  <a href={contactLink} target="_blank" rel="noreferrer" onClick={closeWelcome}>
                    Quero proteger meu veículo <ArrowRight />
                  </a>
                </Button>
                <Button variant="dark" className="flex-1" onClick={closeWelcome}>
                  Explorar o site
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setQuickContactOpen((open) => !open)}
        className="fixed bottom-5 right-5 z-50 flex size-16 items-center justify-center rounded-full bg-success text-primary-foreground shadow-warning transition-transform hover:scale-105"
        aria-label="Abrir formulário de WhatsApp da Lord Tracker"
      >
        <svg className="size-9" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3.2A12.74 12.74 0 0 0 5.2 22.66L3.8 28.8l6.29-1.36A12.72 12.72 0 1 0 16.04 3.2Zm0 2.3a10.43 10.43 0 1 1-5.31 19.4l-.42-.25-3.67.79.82-3.58-.28-.44A10.42 10.42 0 0 1 16.04 5.5Zm-4.1 4.97c-.23 0-.58.09-.88.42-.3.33-1.16 1.13-1.16 2.76 0 1.63 1.19 3.2 1.35 3.43.17.22 2.29 3.67 5.68 5 .7.28 1.25.45 1.68.57.7.22 1.34.18 1.84.11.56-.08 1.73-.71 1.97-1.4.25-.68.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35-.3-.15-1.73-.86-2-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.6.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.58Z" />
        </svg>
      </button>
    </main>
  );
};

export default Index;
