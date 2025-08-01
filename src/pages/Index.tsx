import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeObject, setActiveObject] = useState(null);

  const services = [
    {
      title: 'Охрана объектов',
      description: 'Круглосуточная физическая охрана коммерческих и жилых объектов',
      icon: 'Shield',
      price: 'от 15 000 ₽/мес'
    },
    {
      title: 'Видеонаблюдение',
      description: 'Установка и мониторинг систем видеонаблюдения',
      icon: 'Camera',
      price: 'от 25 000 ₽'
    },
    {
      title: 'Контроль доступа',
      description: 'Системы пропускного режима и контроля доступа',
      icon: 'Key',
      price: 'от 35 000 ₽'
    },
    {
      title: 'Пультовая охрана',
      description: 'Подключение к центральному пульту мониторинга',
      icon: 'Monitor',
      price: 'от 8 000 ₽/мес'
    },
    {
      title: 'Инкассация',
      description: 'Безопасная перевозка денежных средств и ценностей',
      icon: 'Truck',
      price: 'от 500 ₽/выезд'
    },
    {
      title: 'Личная охрана',
      description: 'Индивидуальная защита VIP-персон',
      icon: 'User',
      price: 'от 50 000 ₽/мес'
    }
  ];

  const protectedObjects = [
    { id: 1, name: 'ТЦ "Галерея"', type: 'Торговый центр', status: 'Активна', x: 60, y: 40 },
    { id: 2, name: 'Офис "БизнесПарк"', type: 'Офисное здание', status: 'Активна', x: 45, y: 60 },
    { id: 3, name: 'Склад "Логистик+"', type: 'Складской комплекс', status: 'Активна', x: 75, y: 25 },
    { id: 4, name: 'ЖК "Премиум"', type: 'Жилой комплекс', status: 'Активна', x: 30, y: 70 },
    { id: 5, name: 'Банк "Финанс"', type: 'Банковское отделение', status: 'Активна', x: 55, y: 35 }
  ];

  const licenses = [
    { number: 'ЧО № 12345', date: '25.12.2024', authority: 'МВД России' },
    { number: 'ЧД № 67890', date: '15.11.2024', authority: 'МВД России' },
    { number: 'ИСО 27001', date: '10.10.2024', authority: 'Сертификационный центр' }
  ];

  return (
    <div className="min-h-screen dark">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={32} className="text-secondary" />
              <h1 className="text-2xl font-bold text-card-foreground">СекьюритиПро</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-muted-foreground hover:text-card-foreground transition-colors">Услуги</a>
              <a href="#about" className="text-muted-foreground hover:text-card-foreground transition-colors">О компании</a>
              <a href="#prices" className="text-muted-foreground hover:text-card-foreground transition-colors">Цены</a>
              <a href="#contacts" className="text-muted-foreground hover:text-card-foreground transition-colors">Контакты</a>
              <Button variant="secondary" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Профессиональная 
                <span className="text-secondary block">охрана</span>
                вашего бизнеса
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Комплексные услуги безопасности с использованием современных технологий. 
                Лицензированная охранная организация с опытом работы более 15 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Icon name="Shield" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">200+</div>
                  <div className="text-sm text-muted-foreground">объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/a1348547-f35f-4ceb-8552-c6b6291b1f77.jpg" 
                alt="Профессиональная охрана"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-semibold">Сертифицированные специалисты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">Карта охраняемых объектов</h3>
            <p className="text-muted-foreground">Мы обеспечиваем безопасность более 200 объектов по всему городу</p>
          </div>
          
          <Card className="bg-muted">
            <CardContent className="p-6">
              <div className="relative bg-gradient-to-br from-muted-foreground/5 to-muted-foreground/20 rounded-lg h-96 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20zM0 20v20h20c0-11.046-8.954-20-20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                
                {protectedObjects.map((obj) => (
                  <div
                    key={obj.id}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      activeObject === obj.id ? 'scale-125 z-10' : 'hover:scale-110'
                    }`}
                    style={{ left: `${obj.x}%`, top: `${obj.y}%` }}
                    onClick={() => setActiveObject(activeObject === obj.id ? null : obj.id)}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 bg-secondary rounded-full border-2 border-background shadow-lg animate-pulse"></div>
                      {activeObject === obj.id && (
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-card p-3 rounded-lg shadow-xl border border-border min-w-48">
                          <h4 className="font-semibold text-card-foreground">{obj.name}</h4>
                          <p className="text-sm text-muted-foreground">{obj.type}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-muted-foreground">{obj.status}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span>Охраняемые объекты</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Активная охрана</span>
                  </div>
                </div>
                <span>{protectedObjects.length} объектов под защитой</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Наши услуги</h3>
            <p className="text-muted-foreground">Полный спектр услуг безопасности для вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm">{service.price}</Badge>
                    <Button variant="outline" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About & Licenses Section */}
      <section id="about" className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-card-foreground mb-6">О компании</h3>
              <p className="text-muted-foreground mb-6">
                СекьюритиПро — ведущая частная охранная организация, специализирующаяся на предоставлении
                комплексных услуг безопасности. Мы используем передовые технологии и проверенные методы
                для обеспечения максимальной защиты ваших объектов и персонала.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary" />
                  <span>Лицензированная деятельность</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary" />
                  <span>Квалифицированные специалисты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary" />
                  <span>Современное оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary" />
                  <span>Круглосуточная поддержка</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-card-foreground mb-6">Лицензии и сертификаты</h4>
              <div className="space-y-4">
                {licenses.map((license, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-card-foreground">{license.number}</h5>
                          <p className="text-sm text-muted-foreground">{license.authority}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-card-foreground">до {license.date}</p>
                          <Badge variant="outline" className="text-xs">Действующая</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Тарифы</h3>
            <p className="text-muted-foreground">Выберите подходящий тариф для вашего объекта</p>
          </div>
          
          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="physical">Физическая охрана</TabsTrigger>
              <TabsTrigger value="technical">Техническая охрана</TabsTrigger>
              <TabsTrigger value="complex">Комплексная</TabsTrigger>
            </TabsList>
            
            <TabsContent value="physical" className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Базовый</CardTitle>
                  <CardDescription>Для небольших объектов</CardDescription>
                  <div className="text-3xl font-bold text-secondary">15 000 ₽</div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>1 охранник в смену</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Дневная охрана</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Журнал происшествий</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">Выбрать план</Button>
                </CardContent>
              </Card>
              
              <Card className="border-secondary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Популярный</Badge>
                  <CardTitle>Стандартный</CardTitle>
                  <CardDescription>Для средних объектов</CardDescription>
                  <div className="text-3xl font-bold text-secondary">25 000 ₽</div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>2 охранника в смену</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Круглосуточная охрана</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Патрулирование</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Отчеты онлайн</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Выбрать план</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Премиум</CardTitle>
                  <CardDescription>Для крупных объектов</CardDescription>
                  <div className="text-3xl font-bold text-secondary">45 000 ₽</div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>4 охранника в смену</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Круглосуточная охрана</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Старший смены</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Быстрое реагирование</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">Выбрать план</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technical" className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Видеонаблюдение</CardTitle>
                  <CardDescription>Установка и мониторинг</CardDescription>
                  <div className="text-3xl font-bold text-secondary">25 000 ₽</div>
                  <div className="text-sm text-muted-foreground">под ключ</div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">Подробнее</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Контроль доступа</CardTitle>
                  <CardDescription>СКУД и турникеты</CardDescription>
                  <div className="text-3xl font-bold text-secondary">35 000 ₽</div>
                  <div className="text-sm text-muted-foreground">под ключ</div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">Подробнее</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="complex" className="mt-8">
              <Card className="text-center p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Комплексная безопасность</CardTitle>
                  <CardDescription>Индивидуальное решение для вашего объекта</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Мы разработаем персональный план безопасности, учитывающий все особенности вашего объекта
                  </p>
                  <Button size="lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Получить расчет
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">Контакты</h3>
            <p className="text-muted-foreground">Свяжитесь с нами для получения консультации</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Круглосуточно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Email</h4>
                      <p className="text-muted-foreground">info@securitypro.ru</p>
                      <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Безопасности, д. 1</p>
                      <p className="text-sm text-muted-foreground">Ежедневно 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Быстрая заявка</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <input className="w-full p-2 border border-border rounded-md bg-background" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефон</label>
                    <input className="w-full p-2 border border-border rounded-md bg-background" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Услуга</label>
                  <select className="w-full p-2 border border-border rounded-md bg-background">
                    <option>Выберите услугу</option>
                    <option>Охрана объектов</option>
                    <option>Видеонаблюдение</option>
                    <option>Контроль доступа</option>
                    <option>Комплексная безопасность</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Комментарий</label>
                  <textarea className="w-full p-2 border border-border rounded-md bg-background h-24" placeholder="Опишите ваши потребности..."></textarea>
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" size={24} className="text-secondary" />
                <h5 className="font-bold text-foreground">СекьюритиПро</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Надежная защита вашего бизнеса с 2009 года
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold text-foreground mb-3">Услуги</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Охрана объектов</li>
                <li>Видеонаблюдение</li>
                <li>Контроль доступа</li>
                <li>Пультовая охрана</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold text-foreground mb-3">Компания</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
                <li>Отзывы</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold text-foreground mb-3">Контакты</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@securitypro.ru</li>
                <li>г. Москва, ул. Безопасности, 1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 СекьюритиПро. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;