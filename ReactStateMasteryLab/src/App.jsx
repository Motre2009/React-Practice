import UserProfile from './level1-state-healer/UserProfile.jsx'
import TagsList from './level1-state-healer/TagsList.jsx'
import InputApp from './level1-state-healer/LiftedInput/InputApp.jsx'

import SmartForm from './level2-collection-master/SmartForm.jsx'
import CommentList from './level2-collection-master/CommentList.jsx'
import PostsList from './level2-collection-master/PostsList.jsx'

import Shop from './level3-state-architect/ProductFilter/Shop.jsx'
import TodoList from './level3-state-architect/TodoEditor/TodoList.jsx'
import ShopWithCart from './level3-state-architect/ShoppingCart/ShopWithCart.jsx'

import './App.css'

function App() {
    return (
        <div>
            <h1 className="lab-title">ReactStateMasteryLab: Immutability & Lifting State</h1>

            <section className="lab-level-section" data-level="1">
                <h2 className="lab-level-heading">Рівень 1: Лікар Мутацій</h2>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">1.1</span> Профіль користувача
                    </h3>
                    <UserProfile />
                </div>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">1.2</span> Додавання тегів
                    </h3>
                    <TagsList />
                </div>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">1.3</span> Спільний інпут
                    </h3>
                    <InputApp />
                </div>
            </section>

            <section className="lab-level-section" data-level="2">
                <h2 className="lab-level-heading">Рівень 2: Майстер Колекцій</h2>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">2.1</span> Розумна анкета
                    </h3>
                    <SmartForm />
                </div>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">2.2</span> Видалення коментаря
                    </h3>
                    <CommentList />
                </div>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">2.3</span> Лайк у списку
                    </h3>
                    <PostsList />
                </div>
            </section>

            <section className="lab-level-section" data-level="3">
                <h2 className="lab-level-heading">Рівень 3: Архітектор Дашбордів</h2>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">3.1</span> Фільтр товарів
                    </h3>
                    <Shop />
                </div>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">3.2</span> Редактор завдань
                    </h3>
                    <TodoList />
                </div>

                <div className="lab-task-card">
                    <h3 className="lab-task-title">
                        <span className="lab-task-index">3.3</span> Кошик інтернет-магазину
                    </h3>
                    <ShopWithCart />
                </div>
            </section>
        </div>
    )
}

export default App
