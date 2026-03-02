import { FAQ_ITEMS } from '../data/faq';

function FAQ() {
    return (
        <section id="faq" className="section faq" aria-labelledby="faq-heading">
            <div className="container">
                <header className="section-header">
                    <p className="section-header__badge">常見問題</p>
                    <h2 id="faq-heading" className="section-header__title">
                        常見 QA，一次解答你的疑慮
                    </h2>
                    <p className="section-header__desc">
                        從試用、導入到資料安全，將團隊最常問的問題整理在這裡，幫助你更快評估是否適合導入 SalesPilot。
                    </p>
                </header>

                <div className="faq__grid">
                    {FAQ_ITEMS.map((item) => (
                        <article key={item.question} className="faq__item">
                            <h3 className="faq__question">{item.question}</h3>
                            <p className="faq__answer">{item.answer}</p>
                            {item.category ? <p className="faq__category">{item.category}</p> : null}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;

