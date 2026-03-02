import { useEffect, useState } from 'react';
import { FOOTER_DATA } from '../data/footer';

const COOKIE_STORAGE_KEY = 'cookie_consent';

function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const stored = window.localStorage.getItem(COOKIE_STORAGE_KEY);
        if (stored !== 'accepted') {
            setVisible(true);
        }
    }, []);

    if (!visible) return null;

    const legalColumn = FOOTER_DATA.columns.find((col) => col.title === '法務');
    const cookieLink = legalColumn?.links.find((link) => link.label.includes('Cookie'));

    const handleAccept = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(COOKIE_STORAGE_KEY, 'accepted');
        }
        setVisible(false);
    };

    return (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie 使用說明">
            <div className="container cookie-banner__inner">
                <div className="cookie-banner__content">
                    <h2 className="cookie-banner__title">我們使用 Cookie 優化你的體驗</h2>
                    <p className="cookie-banner__desc">
                        我們會使用必要與分析類 Cookie，協助提升產品體驗與服務品質。你可以隨時在瀏覽器中調整相關設定。
                    </p>
                </div>
                <div className="cookie-banner__actions">
                    {cookieLink ? (
                        <a href={cookieLink.href} className="cookie-banner__link">
                            了解更多
                        </a>
                    ) : null}
                    <button type="button" className="btn btn--primary btn--sm cookie-banner__button" onClick={handleAccept}>
                        接受
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;

