export default function Hero() {
    return (
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 p-8"> 
            <span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Me chamo {''}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Levi</span>
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Sou um iniciante {''} 
                    <span className="bg-gradient-to-r from-red-500
                    to-yellow-500 text-transparent bg-clip-text
                    font-semibold">
                        desenvolvedor web
                    </span>, 
                    apaixonado por criar experiências digitais envolventes e funcionais. Meu objetivo é transformar ideias em realidade através do código, sempre buscando aprender e evoluir na área!
                </p>
                
                {/* Tecnologias que utilizo */}
                <nav className="flex gap-4 justify-center">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-md text-sm font-semibold ">
                        React.js
                    </span>

                    <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-semibold ">
                        Next.js
                    </span>

                    <span className="bg-orange-600 text-white px-2 py-1 rounded-md text-sm font-semibold ">
                        HTML
                    </span>

                    <span className="bg-yellow-600 text-white px-2 py-1 rounded-md text-sm font-semibold ">
                        JavaScript
                    </span>

                    <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold ">
                        CSS
                    </span>

                    <span className="bg-purple-600 text-white px-2 py-1 rounded-md text-sm font-semibold ">
                        Tailwind CSS
                    </span>

                    <span className="bg-pink-600 text-white px-2 py-1 rounded-md text-sm font-semibold ">
                        PHP
                    </span>

                    <span className="bg-gray-600 text-white px-2 py-1 rounded-md text-sm font-semibold ">
                        MySQL
                    </span>
                </nav>
            </span>
        </section>
    )
}