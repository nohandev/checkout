import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { QrCode, CreditCardIcon, CircleDollarSign  } from 'lucide-react'
import { CreditCard, BankSlip, Pix } from '@/app/components/ui/paymentsMethods'

export default function Checkout() {
  return (
    <section className='bg-white p-6 rounded-md flex flex-col'>
      <div>
        <h1 className='text-3xl font-bold'>Finalizar Compra</h1>
        <h2 className='text-xl text-gray-500'>Escolha seu método de pagamento preferido</h2>
      </div>
      <div>
        <Tabs defaultValue='credit card'>
          <TabsList className='w-full mt-6'>
            <TabsTrigger value='credit card' className='cursor-pointer'><CreditCardIcon/> Cartão de crédito</TabsTrigger>
            <TabsTrigger value='ticket' className='cursor-pointer'><CircleDollarSign/> Boleto</TabsTrigger>
            <TabsTrigger value='pix' className='cursor-pointer'><QrCode/> Pix</TabsTrigger>
          </TabsList>
          <TabsContent value='credit card'>
            <CreditCard/>
          </TabsContent>
          <TabsContent value='ticket'>
            <BankSlip/>
          </TabsContent>
          <TabsContent value='pix'>
            <Pix/>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
