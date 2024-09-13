import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smile, ShoppingCart, Users, DollarSign, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(null)
  const [countdown, setCountdown] = useState(3600) // 1 hour in seconds

  const products = [
    { id: 1, name: 'هاتف ذكي حديث', originalPrice: 1000, discountedPrice: 900, buyers: 1, maxBuyers: 5 },
    { id: 2, name: 'حاسوب محمول', originalPrice: 3000, discountedPrice: 2700, buyers: 3, maxBuyers: 5 },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-right" dir="rtl">
      <header className="bg-gradient-to-r from-primary to-secondary text-white py-6 px-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1 
            className="text-4xl font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            شملنا
          </motion.h1>
          <nav>
            <ul className="flex space-x-6 space-x-reverse">
              <li><a href="#home" className="hover:text-accent transition-colors">الرئيسية</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">كيف يعمل</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">المنتجات</a></li>
              <li><a href="#join" className="hover:text-accent transition-colors">انضم إلينا</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">اتصل بنا</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="home" className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            شملنا - وفر أكثر مع الشراء الجماعي!
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            احصل على خصم 10% عند الدفع نقدًا مع مجموعة من المشترين
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              تسوق الآن <ArrowRight className="mr-2" size={16} />
            </Button>
          </motion.div>
        </section>

        <motion.section 
          id="how-it-works" 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">كيف يعمل شملنا؟</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li className="flex items-center"><ShoppingCart className="ml-2" size={20} /> اختر المنتج الذي ترغب بشرائه</li>
                <li className="flex items-center"><Users className="ml-2" size={20} /> سجل في قائمة المشترين</li>
                <li className="flex items-center"><DollarSign className="ml-2" size={20} /> انتظر حتى يكتمل العدد (2-5 أشخاص)</li>
                <li className="flex items-center"><Smile className="ml-2" size={20} /> ادفع نقدًا في المتجر واحصل على خصمك</li>
              </ol>
            </CardContent>
          </Card>
        </motion.section>

        <section id="products" className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">منتجاتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="transition-transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>السعر الأصلي: {product.originalPrice} ريال</p>
                    <p>السعر بعد الخصم: {product.discountedPrice} ريال</p>
                    <p>عدد المشترين الحالي: {product.buyers}/{product.maxBuyers}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <Button 
                        className="bg-accent hover:bg-accent/90"
                        onClick={() => setActiveProduct(product.id)}
                      >
                        انضم للشراء
                      </Button>
                      <div className="text-sm">
                        الوقت المتبقي: {formatTime(countdown)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          id="join" 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">انضم إلى شملنا</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="text" placeholder="الاسم الكامل" required />
                <Input type="email" placeholder="البريد الإلكتروني" required />
                <Input type="tel" placeholder="رقم الهاتف" required />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">سجل الآن</Button>
              </form>
            </CardContent>
          </Card>
        </motion.section>

        <section id="testimonials" className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">آراء عملائنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: "وفرت الكثير مع شملنا! تجربة رائعة ومريحة.", author: "أحمد س." },
              { text: "أحب فكرة الشراء الجماعي، ساعدتني على شراء هاتف جديد بسعر مميز.", author: "سارة م." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="relative pt-10">
                    <Smile className="absolute top-4 right-4 text-accent" size={24} />
                    <p className="mb-2">{testimonial.text}</p>
                    <p className="text-sm text-gray-500">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">جميع الحقوق محفوظة © 2024 شملنا</p>
          <p className="mb-4">تم تطوير الموقع بواسطة المطور محمد قمصاني</p>
          <nav className="flex justify-center space-x-4 space-x-reverse">
            <a href="#privacy" className="hover:text-accent transition-colors">سياسة الخصوصية</a>
            <a href="#terms" className="hover:text-accent transition-colors">الشروط والأحكام</a>
            <a href="#faq" className="hover:text-accent transition-colors">الأسئلة الشائعة</a>
          </nav>
        </div>
      </footer>

      {activeProduct && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>انضمام للشراء الجماعي</CardTitle>
            </CardHeader>
            <CardContent>
              <p>هل أنت متأكد من رغبتك في الانضمام لشراء {products.find(p => p.id === activeProduct)?.name}؟</p>
              <div className="flex justify-end space-x-2 space-x-reverse mt-4">
                <Button onClick={() => setActiveProduct(null)} variant="outline">إلغاء</Button>
                <Button className="bg-accent hover:bg-accent/90">تأكيد</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
