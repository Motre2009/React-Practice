import Counter from './level1-code-repair/Counter.jsx'
import Card from './level1-code-repair/Card.jsx'
import AlertButton from './level1-code-repair/AlertButton.jsx'

import Greeting from './level2-interactivity/Greeting.jsx'
import ThemeToggle from './level2-interactivity/ThemeToggle.jsx'
import Gallery from './level2-interactivity/Gallery.jsx'

import ShoppingList from './level3-mini-apps/ShoppingList.jsx'
import AccordionItem from './level3-mini-apps/AccordionItem.jsx'
import PizzaApp from './level3-mini-apps/PizzaApp/PizzaApp.jsx'
import { faq } from './data/faq.jsx'
import './App.css'

function App() {
    return (
        <div>
            <h1 className="app-title">React Practice: State, Props, Events</h1>

            <section className="level-section">
                <h2>Рівень 1: React-Інтерн</h2>

                <div className="task-card">
                    <h3>Завдання 1: Лічильник</h3>
                    <Counter />
                </div>

                <div className="task-card">
                    <h3>Завдання 2: Карта</h3>
                    <Card />
                </div>

                <div className="task-card">
                    <h3>Завдання 3: Кнопка</h3>
                    <AlertButton />
                </div>
            </section>

            <section className="level-section">
                <h2>Рівень 2: Майстер Інтерактивності</h2>

                <div className="task-card">
                    <h3>Завдання 1: Генератор привітань</h3>
                    <Greeting />
                </div>

                <div className="task-card">
                    <h3>Завдання 2: Перемикач теми</h3>
                    <ThemeToggle />
                </div>

                <div className="task-card">
                    <h3>Завдання 3: Галерея</h3>
                    <Gallery />
                </div>
            </section>

            <section className="level-section">
                <h2>Рівень 3: UI-Архітектор</h2>

                <div className="task-card">
                    <h3>Завдання 1: Список покупок</h3>
                    <ShoppingList />
                </div>

                <div className="task-card">
                    <h3>Завдання 2: Акордеон</h3>
                    {faq.map((item) => (
                        <AccordionItem key={item.id} question={item.q} answer={item.a} />
                    ))}
                </div>

                <div className="task-card">
                    <h3>Завдання 3: Піца-конструктор</h3>
                    <PizzaApp />
                </div>
            </section>
        </div>
    )
}

export default App
