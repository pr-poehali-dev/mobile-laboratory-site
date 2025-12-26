import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function Index() {
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState<string>('');

  const services = [
    {
      title: 'Испытание электрооборудования',
      description: 'Профессиональное тестирование электрических систем и оборудования',
      icon: 'Zap',
      features: ['До 10 кВ', 'Сертифицированное оборудование', 'Быстрое оформление']
    },
    {
      title: 'Измерение сопротивления изоляции',
      description: 'Точные измерения для обеспечения безопасности',
      icon: 'Activity',
      features: ['Высокая точность', 'Протокол измерений', 'Консультация специалиста']
    },
    {
      title: 'Проверка защитного заземления',
      description: 'Контроль системы заземления и молниезащиты',
      icon: 'Shield',
      features: ['Полная проверка', 'Акты выполненных работ', 'Гарантия качества']
    },
    {
      title: 'Тепловизионное обследование',
      description: 'Выявление скрытых дефектов электрооборудования',
      icon: 'Scan',
      features: ['Инфракрасная диагностика', 'Детальный отчет', 'Предотвращение аварий']
    }
  ];

  const equipment = [
    {
      name: 'Мегаомметр Fluke 1550C',
      description: 'Измерение сопротивления изоляции до 5 ТОм',
      specs: ['0-5000 В', 'Автоматический разряд', 'Память 99 измерений']
    },
    {
      name: 'Тепловизор FLIR E95',
      description: 'Профессиональная тепловизионная камера',
      specs: ['464×348 пикселей', 'MSX технология', 'Wi-Fi передача']
    },
    {
      name: 'Измеритель параметров M-417',
      description: 'Универсальный прибор для электролабораторий',
      specs: ['Сопротивление заземления', 'Параметры УЗО', 'Сопротивление петли']
    }
  ];

  const portfolio = [
    { client: 'ТРЦ "Галерея"', project: 'Испытание электросетей', year: '2024' },
    { client: 'ООО "Промстрой"', project: 'Тепловизионное обследование', year: '2024' },
    { client: 'Бизнес-центр "Альфа"', project: 'Комплексные измерения', year: '2023' },
    { client: 'Завод "Техмаш"', project: 'Проверка заземления', year: '2023' }
  ];

  const certificates = [
    'Аккредитация электролаборатории № РОСС RU.0001.21ЭН47',
    'Свидетельство СРО № 12345-ЭЛ',
    'ISO 9001:2015 - Система менеджмента качества',
    'Членство в НП "ЭнергоАльянс"'
  ];

  const blogPosts = [
    {
      title: 'Важность регулярных испытаний электрооборудования',
      date: '15 декабря 2024',
      excerpt: 'Почему проведение плановых проверок помогает избежать аварий и простоев производства'
    },
    {
      title: 'Новые требования к электробезопасности в 2024',
      date: '10 декабря 2024',
      excerpt: 'Обзор изменений в нормативных документах и их влияние на бизнес'
    },
    {
      title: 'Тепловизионное обследование: скрытые угрозы',
      date: '5 декабря 2024',
      excerpt: 'Как инфракрасная диагностика помогает обнаружить проблемы до их возникновения'
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary glow" size={32} />
            <span className="text-2xl font-heading font-bold text-glow">ЭлектроЛаб</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#certificates" className="hover:text-primary transition-colors">Сертификаты</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="glow">
            <Icon name="Phone" size={16} className="mr-2" />
            Записаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 glow" variant="outline">
              <Icon name="Award" size={16} className="mr-2" />
              Аккредитованная лаборатория
            </Badge>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 text-glow">
              Передвижная
              <br />
              <span className="text-primary">Электролаборатория</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональные испытания и измерения электрооборудования. 
              Современное оборудование, опытные специалисты, полный пакет документов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg glow-strong animate-pulse-glow">
                <Icon name="Calendar" size={20} className="mr-2" />
                Онлайн-запись
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр электротехнических измерений и испытаний</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all hover:glow group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon} size={32} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">
                        <Icon name="Check" size={14} className="mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">Оборудование</h2>
            <p className="text-xl text-muted-foreground">Современные приборы ведущих мировых производителей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {equipment.map((item, index) => (
              <Card key={index} className="border-accent/20 hover:border-accent/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="CircleDot" size={12} className="text-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Наши последние проекты</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <Card key={index} className="border-primary/20 hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.year}</Badge>
                    <Icon name="Building2" size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{project.client}</CardTitle>
                  <CardDescription>{project.project}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">Сертификаты</h2>
            <p className="text-xl text-muted-foreground">Все необходимые документы и аккредитации</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card key={index} className="border-accent/20">
                <CardContent className="flex items-center gap-4 p-6">
                  <Icon name="BadgeCheck" size={32} className="text-accent flex-shrink-0" />
                  <p className="text-lg">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Полезные статьи об электробезопасности</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto font-semibold">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">Онлайн-запись</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
          </div>
          <Card className="border-primary/30 glow">
            <CardContent className="p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Организация</Label>
                    <Input id="company" placeholder="ООО Компания" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Услуга *</Label>
                    <Select value={selectedService} onValueChange={setSelectedService} required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, idx) => (
                          <SelectItem key={idx} value={service.title}>{service.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Желаемая дата</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <Icon name="Calendar" size={16} className="mr-2" />
                          {date ? format(date, 'PP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} locale={ru} />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea id="message" placeholder="Расскажите подробнее о ваших задачах..." rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full glow-strong text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-primary/20 text-center">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 text-center">
              <CardContent className="p-6">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@electrolab.ru</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 text-center">
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8 px-4 mt-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="font-heading font-bold text-xl">ЭлектроЛаб</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 ЭлектроЛаб. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
