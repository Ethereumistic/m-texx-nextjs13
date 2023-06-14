"use client"
import React from 'react';
import Image from 'next/image';
import Navbar from '../navbar/page';
import BannerPic from '../components/BannerPic';
import TextBox from '../components/TextBox';
import 'tailwindcss/tailwind.css';
import '../globals.css';
import Footer from '../components/Footer';



const jiznenCikul = ['опазване на природните ресурси (напр. необходими са 6813 литра/1800 галона вода, за да се отгледа достатъчно памук, за да се направят само един чифт дънки',
 'Item 2', 'Item 3'];

const Recycling: React.FC = () => {
  return (
    <div className='text-center'>
       <BannerPic 
  mediaSource="/recycling-bg.png" 
  mediaType="image" 
  headingText="Рециклиране на текстил: Втори живот за стари дрехи, първа стъпка към..." 
  buttonText="РЕЦИКЛИРАНЕ НА ТЕКСТИЛ" 
  linkUrl="#" 
  height="500px"
  showButton={false}
  showText={true}
  zoom={1}
  navbarHeight="0px"
  headingPaddingTop = '0px'
  headingPaddingBottom = '0px'
  headingPaddingLeft = '0px'
  headingPaddingRight = '0px'
  buttonPaddingTop = '0px'
  buttonPaddingBottom = '0px'
  buttonPaddingLeft = '0px'
  buttonPaddingRight = '0px'
  headingFontSize = '4xl md:text-2xl lg:text-4xl'
  buttonFontSize = 'text-sm md:text-base lg:text-sm'

/>




    <div className="p-4 sm:p-8 bg-white text-green-600 rounded-md shadow-lg">
    <h2 className="text-4xl font-bold text-center mb-4 font-oswald">Нашата Мисия</h2>
      <p className="font-oswald text-base sm:text-5xl lg:text-2x1 xl:text-3xl mb-8 text-black">M-Texx се стреми да окаже положително въздействие; <br></br>
        Настоящата ни цел е да утроим процента на рециклирания текстил от 2% на 6% до 2030 г. <br></br>
        Ние ще предоставим безплатни услуги за рециклиране на текстил на домакинства и организации <br></br>
        в България и да насърчим за намаляване на използването, преизползването и рециклирането, <br></br>
        чрез образование, с акцент върху ангажирането на младежите в училищата.</p>
    </div>

    <div className="p-4 sm:p-8 bg-white  rounded-md shadow-lg">
    <h2 className="text-4xl font-bold text-center mb-4 text-green-600 font-oswald">Жизненият цикъл на текстила</h2>
      <h1 className="xl:text-2xl sm:text-2xl mx-auto xl:max-w-3xl text-gray-600 font-semibold mb-4">Ние работим с нашите партньори, за да поддържаме текстила в затворен цикъл на рециклиране, за да помогнем на:</h1>

      <ul className="xl:text-lg sm:text-4xl list-disc list-inside text-gray-600 mx-auto xl:max-w-3xl">
        <li>опазване на природните ресурси (напр. необходими са 6813 литра/1800 галона вода, за да се отгледа достатъчно памук, за да се направят само един чифт дънки)</li>
        <li>намаляване на замърсяването на околната среда (тъй като намаляваме отпадъците, отиващи в инсталацията за изгаряне и депата)</li>
        <li>улесняване на икономичното ценообразуване на дрехи и обувки (за използване в развиващите се страни)</li>
      </ul>
      
      <p className="xl:text-base sm:text-base text-gray-600 mt-4 mb-4 ">Събраните материали за рециклиране на M-Texx се продават на вносители на <br></br>
      текстил втора употреба в различни развиващи се страни. Това подкрепя нашия бизнес модел в предоставянето на <br></br>
      безплатни услуги за събиране и образователни дейности.</p>
    </div>

    <BannerPic 
  mediaSource="/ourmission.webp" 
  mediaType="image" 
  lightbulbSize={55}
  lightbulbOpacity={0.44}
  headingText="НАПРАВЕТЕ ВАШИЯ ПРИНОС ЗА ОПАЗВАНЕ НА ПРИРОДАТА КАТО ДАРИТЕ ВТОРИ ЖИВОТ НА ВАШИТЕ ДРЕХИ." 
  paragraph1Text="________________"
  paragraph2Text={`"M-Texx Textile Recycling"`}
  buttonText="РЕЦИКЛИРАНЕ НА ТЕКСТИЛ" 
  linkUrl="#" 
  height="500px"
  showButton={false}
  showText={true}
  zoom={1}
  navbarHeight="0px"
  headingPaddingTop = '30px'
  headingPaddingBottom = '0px'
  headingPaddingLeft = '0px'
  headingPaddingRight = '0px'
  buttonPaddingTop = '0px'
  buttonPaddingBottom = '0px'
  buttonPaddingLeft = '0px'
  buttonPaddingRight = '0px'
  paragraphFontSize="text-xl xl:text-x1 mt-8 mb-4"
  headingFontSize = 'xl sm:text-2xl xl:text-4xl xl:max-w-3xl'
  buttonFontSize = 'text-sm md:text-base lg:text-sm'

/>
<div className="container mx-auto my-5 p-5">
<p className="xl:text-base sm:text-base text-gray-600 mx-auto xl:max-w-4xl sm:px-4 mt-20 mb-20">Предвид жизнения цикъл на продуктите се приема,  че отпадъците от текстил и обувки ще се увеличават. 
Средностатистическият потребител днес купува с 60% повече дрехи и ги използва 50% по-кратко време, отколкото преди  години. Активният живот на дрехите в страните от 
Европейския съюз варира между 3 и 4 години.   С развитието на модела т.нар. „бърза мода (fast fashion)“, което води до големи щети на околната среда както от гледна точка 
на производството, така и от гледна точка на третирането на образуваните текстилни отпадъци, увеличаването броя на контейнери/пунктове за отпадъци от текстил с цел 
повторната им употреба и рециклиране е адекватна добра практика.</p>
</div>

<div className="flex items-center justify-center">
      <div className="">
        <Image
          src="/cycle-bg.svg"
          alt="Cycle Background"
          className="mb-20 ml-0"
          width={800}
          height={800}
        />
      </div>
    </div>

    <h2 className="text-3xl font-bold text-green-600 text-center mb-16">Дейността на M-TEXX Textile Recycling е свързана с:</h2>
<div className="container mx-auto my-5 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-center -mt-16">
          <h2 className="font-oswald text-2xl font-bold text-center">Организирана система за разделно събиране и рециклиране на отпадъци от текстил и обувки</h2>
          <p className="text-gray-600 text-center font-oswald text-xl my-8">Организираната система за разделно събиране и последващо оползотворяване и рециклиране на отпадъците от текстил и обувки обхваща всички видове отпадъци от облекла и текстил, независимо от съдържанието им и източника на образуване.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-oswald text-2xl font-bold text-center">Управление на разделно рециклиране и оползотворяване на отпадъци от текстилни дрехи и обувки</h2>
          <p className="text-gray-600 text-center font-oswald text-xl my-8">Организира и управлява дейности по разделно събиране, рециклиране и оползотворяване на отпадъци от текстил, облекла и обувки, поставя основите на една устойчива, екологосъобразна и икономически рентабилна система за разделно събиране на отпадъци от текстил, облекла и обувки на територията на над 60 Общини на Република България и се развива съобразно изискванията на европейското и българското законодателства в сферата управление на специфични потоци отпадъци.</p>
        </div>
      </div>
    </div>


<BannerPic 
  mediaSource="/m-texx-donation.jpg" 
  mediaType="image" 
  lightbulbSize={55}
  lightbulbOpacity={0.44}
  headingText="„Всяко малко действие, което предприемаме, за да сме отговорни към околната среда, оказва голяма разлика в спасяването на нашата планета.“" 
  paragraph1Text="________________"
  paragraph2Text={`"M-Texx Textile Recycling"`}
  buttonText="РЕЦИКЛИРАНЕ НА ТЕКСТИЛ" 
  linkUrl="#" 
  height="500px"
  showButton={false}
  showText={true}
  zoom={1}
  navbarHeight="0px"
  headingPaddingTop = '30px'
  headingPaddingBottom = '0px'
  headingPaddingLeft = '0px'
  headingPaddingRight = '0px'
  buttonPaddingTop = '0px'
  buttonPaddingBottom = '0px'
  buttonPaddingLeft = '0px'
  buttonPaddingRight = '0px'
  paragraphFontSize="text-xl xl:text-x1 mt-8 mb-4"
  headingFontSize = 'xl sm:text-2xl xl:text-4xl xl:max-w-3xl'
  buttonFontSize = 'text-sm md:text-base lg:text-sm'

/>

<div className="container mx-auto my-10 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="flex justify-center">
          <div className="max-w-xs sm:max-w-full">
            <Image
              src="/m-texx-donation2.jpg"
              alt="Your Image"
              width={400}
              height={800}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div>
          <p className="my-8 font-oswald text-xl">
            Повторната употреба е най-екологичното продължаване на живота на текстила, тъй като за него се изисква най-малко допълнителен ресурс и енергия. Събраните дрехи се сортират и според своето състояние намират реализация на следващи пазари. По-голямата част от годните за употреба дрехи, събрани в България, се реализират в страни с по-нисък стандарт на живот. Основната цел е всяка дреха да намери собственик, който има нужда точно от нея и би я носил, удължавайки жизнения ѝ цикъл.
          </p>
          <p className='my-8 font-oswald text-xl'>
            Има известно количество текстилни отпадъци, които са негодни за употреба под формата на дрехи, но могат да бъдат оползотворени като парцали. Това са памучни тъкани, които са незаменим консуматив в различните индустриални предприятия, цеховете за металообработка, корабостроене, печатници, сервизи, автомивки и др. За тази употреба се отделят определени материи с добри попивателни способности. Текстилните отпадъци се разделят по състав и цвят и се нарязват с определени размери на специализирани машини, като се отстраняват циповете, копчета и други твърди части. За да се гарантира липсата на елементи, които могат да надраскат повърхностите.
          </p>
        </div>
      </div>
    </div>

    

      
      

    <div className="p-4 grid grid-cols-3 gap-4">
    </div>
    </div>
  )
}

export default Recycling