
// import React from 'react'
// import { ChevronDown, Search, ShoppingCart } from "lucide-react";

// import section from '../../assets/images/section.png';
// import elements from '../../assets/images/elements.png';
// import { Link, useLocation } from "react-router-dom";




// const Navbar = () => {
//     const location = useLocation();

//   // 2. Создаём объект, где ключ — путь, значение — текст
//   const pageTitles = {
//     '/shop': 'Home / Shop',
//     '/contact': 'Home / Contact',
//     // Если нужны ещё пути, добавьте их сюда
//   };

//   // 3. Определяем, есть ли в нашем объекте текущий путь
//   const currentTitle = pageTitles[location.pathname] || '';

//     return (
//         <div className="relative">
//             {/* Навигация с фоновым изображением */}
//             <nav 
//                 className="w-full flex justify-center relative z-10 mt-[15px]"
//                 style={{ backgroundImage: `url(${section})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//             >
//                 <div className="w-[1170px] max-w-full flex items-center justify-between  py-5">
//                     <ul className="flex items-center justify-around space-x-15">
//                         <li className="relative group">
//                             <Link to="/" className="flex items-center text-[#878680] font-medium hover:text-[rgba(31,30,23,1)] transition-colors">
//                                 Home  <ChevronDown className="h-3 w-3 ml-1" />
//                             </Link>
//                         </li>
//                         <li className="relative group">
//                             <Link to="#" className="flex items-center text-[#878680] font-medium hover:text-[rgba(31,30,23,1)] transition-colors">
//                                 About
//                             </Link>
//                         </li>
//                         <li className="relative group">
//                             <Link to="#" className="flex items-center text-[#878680] font-medium hover:text-[rgba(31,30,23,1)] transition-colors">
//                                 Services <ChevronDown className="h-3 w-3 ml-1" />
//                             </Link>
//                             <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                                 <ul className="py-2">
//                                     <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680)] hover:bg-gray-50 hover:text-[rgba(31,30,23,1)]">Service 1</Link></li>
//                                     <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[rgba(31,30,23,1)]">Service 2</Link></li>
//                                     <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[rgba(31,30,23,1)]">Service 3</Link></li>
//                                 </ul>
//                             </div>
//                         </li>
//                         <li className="relative group">
//                             <Link to="#" className="flex items-center text-[#878680] font-medium hover:text-[rgba(31,30,23,1)] transition-colors">
//                                 Projects <ChevronDown className="h-3 w-3 ml-1" />
//                             </Link>
//                             <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                                 <ul className="py-2">
//                                     <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[rgba(31,30,23,1)]">Project 1</Link></li>
//                                     <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[rgba(31,30,23,1)]">Project 2</Link></li>
//                                     <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[rgba(31,30,23,1)]">Project 3</Link></li>
//                                 </ul>
//                             </div>
//                         </li>
//                         <li className="relative group">
//                             <Link to="#" className="flex items-center text-[#878680] font-medium hover:text-[rgba(31,30,23,1)] transition-colors">
//                                 News  <ChevronDown className="h-3 w-3 ml-1" />
//                             </Link>
//                         </li>
//                         <li className="relative group">
//                             <Link to="/shop" className="flex items-center text-[#878680] font-medium hover:text-[rgba(31,30,23,1)] transition-colors">
//                                 Shop  <ChevronDown className="h-3 w-3 ml-1" />
//                             </Link>
//                         </li>
//                         <li className="relative group">
//                             <Link to="/contact" className="flex items-center text-[#878680] font-medium hover:text-[rgba(31,30,23,1)] transition-colors">
//                                 Contact
//                             </Link>
//                         </li>
//                     </ul>
//                     <div className="flex items-center space-x-4">
//                         <button className="text-[rgba(31,30,23,1)] hover:text-[rgba(75,175,71,1)] transition-colors">
//                             <Search size={24} />
//                         </button>
//                         <Link to="#" className="relative text-[rgba(31,30,23,1)] hover:text-[rgba(75,175,71,1)] transition-colors">
//                             <ShoppingCart size={24} />
//                             <span className="absolute -top-2 -right-2 bg-[rgba(75,175,71,1)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
//                         </Link>
//                     </div>
//                 </div>
//             </nav>

//             <img
//                 src={elements}
//                 alt="Wheat"
//                 className=" relative  -top-4  z-0"
//             />
//         </div>
//     )
// }

// export default Navbar;



import React from 'react'
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import section from '../../assets/images/section.png';
import elements from '../../assets/images/elements.png';

const Navbar = () => {
  const location = useLocation();

  // Определяем контент для разных страниц
  const getPageContent = () => {
    switch(location.pathname) {
     
      case '/shop':
        return {
          breadcrumbs: ['HOME', 'SHOP'],
          title: 'Our Shop'
        }
      case '/contact':
        return {
          breadcrumbs: ['HOME', 'CONTACT'],
          title: 'Contact'
        }
        case '/projects':
            return {
              breadcrumbs: ['HOME', 'PROJECTS'],
              title: 'Projects'
            }
            case '/news':
                return {
                  breadcrumbs: ['HOME', 'NEWS'],
                  title: 'News'
                }
                case '/about':
                    return {
                      breadcrumbs: ['HOME', 'ABOUT'],
                      title: 'About'
                    }
                    case '/service':
                        return {
                          breadcrumbs: ['HOME', 'service'],
                          title: 'Service'
                        }
      default:
        return {
          breadcrumbs: ['HOME'],
          title: 'Welcome'
        }
    }
  }

  const { breadcrumbs, title } = getPageContent();

  return (
    <div className="relative">
      
      <nav className="w-full h-[80px] flex justify-center relative z-30 mt-[15px] "
        style={{ 
            backgroundImage: `url(${section})`,
            backgroundSize: '100%  100% ',
            backgroundPosition: 'center',
          }}
      >
        <div className="w-[1170px] max-w-full flex items-center justify-around py-5">
          
          <ul className="flex items-center space-x-12 ml-[100px] mb-[10px]">
            <li className="relative group">
              <Link to="/" className="flex items-center text-[#878680] text-[16px] font-medium hover:text-[#1F1E17] transition-colors">
                Home <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
            </li>
            
            <li className="relative group">
              <Link to="/about" className="flex items-center text-[#878680] text-[16px] font-medium hover:text-[#1F1E17] transition-colors">
                About
              </Link>
            </li>

            <li className="relative group">
              <Link to="/service" className="flex items-center text-[#878680] text-[16px] font-medium hover:text-[#1F1E17] transition-colors">
                Services <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Service 1</Link></li>
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Service 2</Link></li>
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Service 3</Link></li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Link to="/projects" className="flex items-center text-[#878680] text-[16px] font-medium hover:text-[#1F1E17] transition-colors">
                Projects <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Project 1</Link></li>
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Project 2</Link></li>
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Project 3</Link></li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Link to="/news" className="flex items-center text-[#878680] text-[16px] font-medium hover:text-[#1F1E17] transition-colors">
                News <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
            </li>

            <li className="relative group">
              <Link to="/shop" className="flex items-center text-[#878680] text-[16px] font-medium hover:text-[#1F1E17] transition-colors">
                Shop <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
            </li>

            <li className="relative group">
              <Link to="/contact" className="flex items-center text-[#878680] text-[16px] font-medium hover:text-[#1F1E17] transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <div className=" flex items-end space-x-4 ml-auto">
          <div className="mx-4 h-10 w-px bg-[rgba(228,226,215,1)]" />
            <button className="text-[#1F1E17] hover:text-[#4BAF47] mb-[10px]">
            
              <Search size={24} />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="text-[#1F1E17] hover:text-[#4BAF47] mb-[10px]" />
              <span className="absolute -top-2 -right-2 bg-[#4BAF47] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
      </nav>

   
      
        <div className="text-center text-white relative -bottom-20 left-1/2 -translate-x-1/2  z-20 ">
          <div className="flex items-center justify-center space-x-2 text-lg mb-3">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={item}>
                <Link 
                  to={index === 0 ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-[#4BAF47] transition-colors uppercase "
                >
                  {item}
                </Link>
                {index !== breadcrumbs.length - 1 && <span className="mx-1 ">/</span>}
              </React.Fragment>
            ))}
          </div>
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        <img
          src={elements}
          alt="Decor"
          className="relative  -top-25    -z-20"
        
        />
      </div>
  
  )
}

export default Navbar;