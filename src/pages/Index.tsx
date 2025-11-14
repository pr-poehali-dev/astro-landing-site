import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const blogPosts = [
    {
      title: "Влияние Луны на знаки зодиака",
      description: "Узнайте, как фазы Луны влияют на эмоциональное состояние каждого знака зодиака",
      icon: "Moon",
      gradient: "from-cosmic-purple to-cosmic-magenta"
    },
    {
      title: "Меркурий в ретроградном движении",
      description: "Что означает ретроградный Меркурий и как подготовиться к этому периоду",
      icon: "Sparkles",
      gradient: "from-cosmic-magenta to-cosmic-blue"
    },
    {
      title: "Совместимость знаков зодиака",
      description: "Астрологический анализ совместимости в отношениях",
      icon: "Heart",
      gradient: "from-cosmic-blue to-cosmic-purple"
    },
    {
      title: "Солнечные и лунные затмения",
      description: "Как космические явления влияют на нашу жизнь и судьбу",
      icon: "Eclipse",
      gradient: "from-cosmic-purple to-cosmic-blue"
    },
    {
      title: "Венера и любовный гороскоп",
      description: "Планета любви и её влияние на романтические отношения",
      icon: "Stars",
      gradient: "from-cosmic-magenta to-cosmic-purple"
    },
    {
      title: "Планеты в домах",
      description: "Как расположение планет в астрологических домах формирует характер",
      icon: "Orbit",
      gradient: "from-cosmic-blue to-cosmic-magenta"
    }
  ];

  const faqItems = [
    {
      question: "Что такое натальная карта?",
      answer: "Натальная карта - это индивидуальная астрологическая карта, составленная на момент вашего рождения. Она показывает расположение планет, знаков зодиака и астрологических домов в момент вашего появления на свет, раскрывая уникальные черты характера, таланты и потенциал."
    },
    {
      question: "Как часто нужно читать гороскоп?",
      answer: "Частота чтения гороскопа зависит от ваших целей. Ежедневные гороскопы дают общие тенденции дня, месячные - более глубокий анализ периода, а годовые помогают планировать важные события. Рекомендуется сочетать разные виды для полной картины."
    },
    {
      question: "Влияют ли планеты на нашу судьбу?",
      answer: "В астрологии планеты рассматриваются как символы энергий и тенденций, а не прямых причин событий. Они указывают на благоприятные и сложные периоды, помогая лучше понимать циклы жизни и принимать осознанные решения."
    },
    {
      question: "Что означает ретроградное движение планет?",
      answer: "Ретроградное движение - это оптический эффект, когда планета кажется движущейся назад по небосводу. В астрологии это время пересмотра, переоценки и завершения дел в сферах, за которые отвечает планета. Самый известный - ретроградный Меркурий, влияющий на коммуникации."
    },
    {
      question: "Можно ли изменить свою судьбу, зная астрологию?",
      answer: "Астрология не определяет судьбу жёстко, а показывает тенденции и возможности. Знание астрологических влияний помогает принимать более осознанные решения, выбирать благоприятное время для действий и лучше понимать свои сильные стороны."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/9639b874-df13-4967-a2d5-959c11296075/files/44ad95f6-e93b-4ac9-b2e6-1cc56b062644.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cosmic-purple via-cosmic-magenta to-cosmic-blue bg-clip-text text-transparent animate-float">
              Астрология
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto">
              Откройте тайны космоса и узнайте, как звёзды влияют на вашу жизнь
            </p>
            <div className="flex gap-4 justify-center items-center text-cosmic-purple">
              <Icon name="Sparkles" size={32} className="animate-float" />
              <Icon name="Moon" size={32} className="animate-float" style={{ animationDelay: '0.5s' }} />
              <Icon name="Stars" size={32} className="animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmic-magenta to-cosmic-purple bg-clip-text text-transparent">
              Астрологический блог
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Погрузитесь в мир астрологии через наши статьи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
                <CardContent className="p-6">
                  <div className={`mb-4 p-3 rounded-full bg-gradient-to-r ${post.gradient} w-fit`}>
                    <Icon name={post.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/9639b874-df13-4967-a2d5-959c11296075/files/7c91a52b-7c38-4c75-8277-4702310f86f8.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmic-blue to-cosmic-magenta bg-clip-text text-transparent">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые популярные вопросы об астрологии
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors py-6">
                    <div className="flex items-center gap-3">
                      <Icon name="HelpCircle" size={24} className="text-cosmic-magenta" />
                      <span className="text-left">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Icon name="Moon" size={32} className="text-cosmic-purple animate-float" />
            <Icon name="Stars" size={32} className="text-cosmic-magenta animate-float" style={{ animationDelay: '0.5s' }} />
            <Icon name="Sparkles" size={32} className="text-cosmic-blue animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-muted-foreground">
            © 2024 Астрология. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
