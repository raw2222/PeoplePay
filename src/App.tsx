import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUsers, FiBriefcase, FiCheckCircle, FiBookOpen, FiPhone, FiMail, FiBarChart2, FiUserCheck, FiFileText, FiShield, FiChevronRight } from 'react-icons/fi';
import React from 'react';

const pastelBg = "bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200";
const pastelCard = "bg-white/80 border border-blue-100 shadow-md";
const pastelAccent = "text-blue-500";
const pastelButton = "bg-blue-200 hover:bg-blue-300 text-blue-900";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setFormSent(false);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className={`min-h-screen ${pastelBg} text-blue-900 font-sans`}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-200 opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 60 + 30}px`,
                height: `${Math.random() * 60 + 30}px`,
              }}
              animate={{
                y: [0, -10, 0],
                x: [0, 8, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
          <motion.div
          initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          className="z-10"
          >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            HR & Бухгалтерские услуги
            </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-blue-700">
            Профессиональный подбор персонала, бухгалтерский учет, аудит и налоговое консультирование для вашего бизнеса
            </p>
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            className={`px-10 py-5 rounded-full font-bold text-lg shadow-lg ${pastelButton}`}
          >
            Оставить заявку
              </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <div className="h-1 w-24 bg-blue-300 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-8 ${pastelCard} hover:border-blue-300 transition-all text-center`}
              >
                <div className={`${pastelAccent} mb-4 flex justify-center`}>{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-blue-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Вакансии Section */}
      <section className="py-20 bg-white/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Актуальные вакансии</h2>
            <div className="h-1 w-24 bg-blue-300 mx-auto rounded-full"></div>
            <p className="text-blue-700 mt-2">Откликайтесь на интересные предложения — мы ищем лучших специалистов!</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vacancies.map((vac, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.05 }}
                className={`rounded-xl p-6 ${pastelCard} flex flex-col justify-between`}
              >
                <div className="flex items-center mb-3">
                  <div className="mr-3 text-blue-400">{vac.icon}</div>
                  <div className="font-bold text-lg">{vac.title}</div>
                </div>
                <div className="text-blue-700 text-sm mb-4 flex-1">{vac.description}</div>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold mt-auto ${pastelButton} transition`}
                  onClick={openModal}
                >
                  Откликнуться <FiChevronRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <div className="h-1 w-24 bg-blue-300 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-xl p-6 ${pastelCard} hover:border-blue-300 transition-all`}
              >
                <div className={`flex justify-center mb-3 ${pastelAccent}`}>{adv.icon}</div>
                <div className="text-lg font-bold mb-2">{adv.title}</div>
                <div className="text-blue-700 text-sm">{adv.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <div className="h-1 w-24 bg-blue-300 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-xl p-6 ${pastelCard}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-3 text-blue-700 text-2xl font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">{t.name}</div>
                    <div className="text-blue-400 text-xs">{t.role}</div>
                  </div>
                </div>
                <p className="text-blue-700 text-sm">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/60 to-blue-200/60 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы доверить подбор персонала и бухгалтерию профессионалам?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-700">
              Оставьте заявку — мы свяжемся с вами и предложим лучшее решение для вашего бизнеса
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className={`px-10 py-5 rounded-full font-bold text-lg shadow-lg ${pastelButton}`}
            >
              Оставить заявку
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">HR & Бухгалтерия</h3>
              <p className="text-blue-700 mb-4">
                Комплексные услуги по подбору персонала, бухгалтерскому учету и аудиту для малого и среднего бизнеса
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-blue-200 rounded-full hover:bg-blue-300 transition">
                  <FiPhone size={20} />
                </a>
                <a href="#" className="p-3 bg-blue-200 rounded-full hover:bg-blue-300 transition">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold mb-4 text-blue-900">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, i) => (
                    <li key={i} className="text-blue-700 hover:text-blue-500 transition cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-blue-200 mt-16 pt-8 text-center text-blue-400">
            © {new Date().getFullYear()} HR & Бухгалтерия. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl p-8 max-w-xl w-full border border-blue-100 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-blue-400 hover:text-blue-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {formSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="mb-6">
                  <FiCheckCircle size={64} className="text-green-400 mx-auto" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-blue-900">Заявка успешно отправлена!</h2>
                <p className="text-blue-700 mb-6">Спасибо за обращение. Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={closeModal}
                  className="px-8 py-3 rounded-full font-bold bg-blue-200 hover:bg-blue-300 text-blue-900 transition shadow"
                >
                  Закрыть
                </button>
              </motion.div>
            ) : (
              <>
            <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiUsers size={40} className="text-blue-700" />
              </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Оставьте заявку
              </h2>
                  <p className="text-blue-700 text-lg">
                    Мы свяжемся с вами в ближайшее время и ответим на все вопросы
                  </p>
                </div>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400" required />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400" required />
                  <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400" required />
                  <textarea placeholder="Комментарий" className="w-full px-4 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400" rows={3}></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg ${pastelButton}`}
              >
                    Отправить заявку
              </motion.button>
                </form>
              </>
            )}
            <div className="mt-6 pt-6 border-t border-blue-100 text-center">
              <p className="text-blue-400 text-sm">
                🔒 Ваши данные защищены. Мы не передаем информацию третьим лицам.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const services = [
  {
    icon: <FiUsers size={40} />,
    title: 'Агентство по подбору персонала',
    description: 'Поиск, оценка и подбор квалифицированных специалистов для вашего бизнеса. Индивидуальный подход к каждой вакансии.'
  },
  {
    icon: <FiBookOpen size={40} />,
    title: 'Бухгалтерский учет',
    description: 'Ведение бухгалтерии, подготовка отчетности, автоматизация процессов. Полное сопровождение.'
  },
  {
    icon: <FiBarChart2 size={40} />,
    title: 'Финансовый аудит',
    description: 'Проведение независимого аудита, анализ финансовой отчетности, рекомендации по оптимизации.'
  },
  {
    icon: <FiFileText size={40} />,
    title: 'Налоговое консультирование',
    description: 'Консультации по налогам, оптимизация налогообложения, минимизация рисков.'
  },
  {
    icon: <FiBriefcase size={40} />,
    title: 'HR-аутсорсинг',
    description: 'Передача функций HR-отдела на аутсорсинг. Экономия времени и ресурсов.'
  },
];

const advantages = [
  {
    icon: <FiCheckCircle size={36} />,
    title: 'Экспертность',
    description: 'Команда профессионалов с опытом в HR и бухгалтерии более 10 лет.'
  },
  {
    icon: <FiUserCheck size={36} />,
    title: 'Индивидуальный подход',
    description: 'Решения под задачи и специфику вашего бизнеса.'
  },
  {
    icon: <FiShield size={36} />,
    title: 'Конфиденциальность',
    description: 'Гарантия безопасности и защиты ваших данных.'
  },
  {
    icon: <FiBriefcase size={36} />,
    title: 'Комплекс услуг',
    description: 'Всё для бизнеса: от подбора персонала до полного бухгалтерского сопровождения.'
  },
];

const testimonials = [
  {
    avatar: 'И',
    name: 'Ирина',
    role: 'Генеральный директор',
    text: 'Быстро нашли отличного бухгалтера и полностью взяли на себя ведение отчетности. Очень довольны сервисом!'
  },
  {
    avatar: 'С',
    name: 'Сергей',
    role: 'Владелец бизнеса',
    text: 'Профессиональный аудит помог выявить слабые места и оптимизировать налоги. Рекомендую!'
  },
  {
    avatar: 'А',
    name: 'Александр',
    role: 'HR-менеджер',
    text: 'Передали подбор персонала на аутсорсинг — теперь экономим время и получаем лучших кандидатов.'
  },
];

const footerLinks = [
  {
    title: 'О компании',
    links: ['О нас', 'Команда', 'Контакты']
  },
  {
    title: 'Услуги',
    links: ['Подбор персонала', 'Бухгалтерия', 'Аудит', 'Налоговое консультирование']
  },
  {
    title: 'Контакты',
    links: ['ИНН 246601103450', 'ОГРНИП 325246800073489', '+7(980)170-56-89','Деятельность рекламных агентств']
  }
];

const vacancies = [
  { icon: <FiBriefcase size={28} />, title: 'Бухгалтер', description: 'Ведение бухгалтерского и налогового учета, подготовка отчетности.' },
  { icon: <FiUsers size={28} />, title: 'HR-менеджер', description: 'Поиск и подбор персонала, проведение собеседований.' },
  { icon: <FiBarChart2 size={28} />, title: 'Аудитор', description: 'Проведение финансового аудита, анализ отчетности.' },
  { icon: <FiBookOpen size={28} />, title: 'Налоговый консультант', description: 'Консультирование по вопросам налогообложения.' },
  { icon: <FiUserCheck size={28} />, title: 'Рекрутер', description: 'Активный поиск кандидатов, работа с базой резюме.' },
  { icon: <FiFileText size={28} />, title: 'Специалист по кадровому делопроизводству', description: 'Ведение кадровой документации, оформление приемов и увольнений.' },
  { icon: <FiShield size={28} />, title: 'Юрист', description: 'Правовое сопровождение бизнеса, договорная работа.' },
  { icon: <FiBriefcase size={28} />, title: 'Финансовый аналитик', description: 'Анализ финансовых показателей, подготовка отчетов.' },
  { icon: <FiUsers size={28} />, title: 'Менеджер по персоналу', description: 'Организация обучения и развития сотрудников.' },
  { icon: <FiBarChart2 size={28} />, title: 'Экономист', description: 'Планирование и анализ бюджета компании.' },
  { icon: <FiBriefcase size={28} />, title: 'Главный бухгалтер', description: 'Контроль бухгалтерского учета и отчетности.' },
  { icon: <FiUsers size={28} />, title: 'Ассистент HR', description: 'Помощь в подборе и адаптации персонала.' },
  { icon: <FiBookOpen size={28} />, title: 'Методист по обучению', description: 'Разработка обучающих программ.' },
  { icon: <FiUserCheck size={28} />, title: 'HR Generalist', description: 'Ведение полного цикла HR-процессов.' },
  { icon: <FiFileText size={28} />, title: 'Специалист по расчету зарплаты', description: 'Начисление заработной платы, ведение табелей.' },
  { icon: <FiShield size={28} />, title: 'Специалист по охране труда', description: 'Контроль за соблюдением норм охраны труда.' },
  { icon: <FiBriefcase size={28} />, title: 'Финансовый контролер', description: 'Контроль финансовых операций и расходов.' },
  { icon: <FiUsers size={28} />, title: 'Менеджер по внутренним коммуникациям', description: 'Организация корпоративных мероприятий.' },
  { icon: <FiBarChart2 size={28} />, title: 'Бизнес-аналитик', description: 'Анализ бизнес-процессов и оптимизация.' },
  { icon: <FiBookOpen size={28} />, title: 'Специалист по обучению', description: 'Проведение тренингов и семинаров.' },
  { icon: <FiUserCheck size={28} />, title: 'HR Business Partner', description: 'Взаимодействие с руководителями подразделений.' },
  { icon: <FiFileText size={28} />, title: 'Кадровик', description: 'Ведение личных дел сотрудников.' },
  { icon: <FiShield size={28} />, title: 'Специалист по корпоративному праву', description: 'Юридическое сопровождение сделок.' },
  { icon: <FiBriefcase size={28} />, title: 'Финансовый менеджер', description: 'Управление финансовыми потоками.' },
  { icon: <FiUsers size={28} />, title: 'HR-ассистент', description: 'Административная поддержка HR-отдела.' },
  { icon: <FiBarChart2 size={28} />, title: 'Аналитик по компенсациям и льготам', description: 'Анализ и разработка систем мотивации.' },
  { icon: <FiBookOpen size={28} />, title: 'Тренер по продажам', description: 'Обучение сотрудников техникам продаж.' },
  { icon: <FiUserCheck size={28} />, title: 'HR-координатор', description: 'Координация HR-процессов.' },
  { icon: <FiFileText size={28} />, title: 'Специалист по документообороту', description: 'Организация и контроль документооборота.' },
  { icon: <FiShield size={28} />, title: 'Юрисконсульт', description: 'Правовая экспертиза документов.' },
  { icon: <FiBriefcase size={28} />, title: 'Финансовый директор', description: 'Финансовое планирование и стратегия.' },
  { icon: <FiUsers size={28} />, title: 'Менеджер по адаптации', description: 'Организация процесса адаптации новых сотрудников.' },
  { icon: <FiBarChart2 size={28} />, title: 'Аналитик по персоналу', description: 'Анализ HR-метрик.' },
  { icon: <FiBookOpen size={28} />, title: 'Методист по развитию', description: 'Разработка программ развития персонала.' },
  { icon: <FiUserCheck size={28} />, title: 'HR-аналитик', description: 'Сбор и анализ HR-данных.' },
  { icon: <FiFileText size={28} />, title: 'Специалист по кадровому учету', description: 'Ведение учета кадров.' },
  { icon: <FiShield size={28} />, title: 'Специалист по трудовому праву', description: 'Консультирование по трудовому законодательству.' },
  { icon: <FiBriefcase size={28} />, title: 'Финансовый консультант', description: 'Финансовое консультирование клиентов.' },
  { icon: <FiUsers size={28} />, title: 'HR-менеджер по обучению', description: 'Организация обучающих мероприятий.' },
  { icon: <FiBarChart2 size={28} />, title: 'Экономист-аналитик', description: 'Экономический анализ деятельности.' },
  { icon: <FiBookOpen size={28} />, title: 'Специалист по развитию персонала', description: 'Планирование карьерного роста сотрудников.' },
  { icon: <FiUserCheck size={28} />, title: 'HR-менеджер по мотивации', description: 'Разработка систем мотивации.' },
  { icon: <FiFileText size={28} />, title: 'Специалист по кадровому резерву', description: 'Формирование кадрового резерва.' },
  { icon: <FiShield size={28} />, title: 'Юрист по трудовым спорам', description: 'Ведение трудовых споров.' },
  { icon: <FiBriefcase size={28} />, title: 'Финансовый аудитор', description: 'Проведение внутреннего аудита.' },
  { icon: <FiUsers size={28} />, title: 'HR-менеджер по корпоративной культуре', description: 'Развитие корпоративной культуры.' },
  { icon: <FiBarChart2 size={28} />, title: 'Бизнес-консультант', description: 'Консультирование по вопросам бизнеса.' },
  { icon: <FiBookOpen size={28} />, title: 'Тренер по развитию', description: 'Проведение программ развития.' },
  { icon: <FiUserCheck size={28} />, title: 'HR-менеджер по оценке', description: 'Оценка эффективности сотрудников.' },
  { icon: <FiFileText size={28} />, title: 'Специалист по кадровому обучению', description: 'Организация обучения кадров.' },
  { icon: <FiShield size={28} />, title: 'Юрист по корпоративным вопросам', description: 'Юридическое сопровождение корпоративных процессов.' },
  { icon: <FiBriefcase size={28} />, title: 'Финансовый советник', description: 'Финансовое планирование для клиентов.' },
  { icon: <FiUsers size={28} />, title: 'HR-менеджер по развитию', description: 'Развитие HR-процессов.' },
  { icon: <FiBarChart2 size={28} />, title: 'Аналитик по обучению', description: 'Анализ эффективности обучения.' },
  { icon: <FiBookOpen size={28} />, title: 'Методист по корпоративному обучению', description: 'Разработка корпоративных программ.' },
  { icon: <FiUserCheck size={28} />, title: 'HR-менеджер по внутренним коммуникациям', description: 'Развитие внутренних коммуникаций.' },
  { icon: <FiFileText size={28} />, title: 'Специалист по кадровому администрированию', description: 'Администрирование кадровых процессов.' },
];

export default App;