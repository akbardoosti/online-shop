import './styles/404.css'
export default function NotFound() {
    return <div id="notfound">
        <div className="notfound">
            <div className=" notfound-404">
                <h1 className='text-orange-600'>404</h1>
                <h2 className='site-font text-gray-200'>چنین صفحه ای وجود ندارد</h2>
            </div>
            <a href="/" className='site-font rounded bg-fuchsia-700 text-white'>
                بازگشت به صفحه اصلی
            </a>
        </div>
    </div>
}