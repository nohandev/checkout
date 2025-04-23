
'use client'

import  { useForm }  from 'react-hook-form'
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel
 } from '@/components/ui/form'
 import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'

const formSchema = z.object({
  cardNumber: z.string(),
  cardName: z.string(),
  validate: z.string(),
  cvv: z.string(),
  installments: z.string(),
  futurePurchases: z.boolean().default(false).optional()
})

export default function CreditCardForm() {
  // installments simulation
  const installments = [
    { id: 1, description: "1x de R$299,90 (sem juros)", valueInstallments: "1*299.90" },
    { id: 2, description: "2x de R$149,95 (sem juros)", valueInstallments: "2*149.95" },
    { id: 3, description: "3x de R$99,97 (sem juros)", valueInstallments: "3*99.97" },
    { id: 4, description: "4x de R$74,98 (sem juros)", valueInstallments: "4*74.98" }
  ]

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: '',
      cardName: '',
      validate: '',
      cvv: '',
      installments: '',
      futurePurchases: true
    }
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form 
      className='mt-6 flex flex-col gap-6'
      onSubmit={form.handleSubmit(onSubmit)}>
        <FormField 
          control={form.control}
          name='cardNumber'
          render={({field}) => (
          <FormItem>
            <FormLabel>Número do cartão de crédito</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  placeholder='0000 0000 0000 0000' 
                  type='text' 
                  />
              </FormControl>
              <FormMessage/>
          </FormItem>
        )}/>

        <FormField 
          control={form.control}
          name='cardName'
          render={({field}) => (
          <FormItem>
            <FormLabel>Nome no cartão</FormLabel>
            <FormControl>
              <Input 
              {...field}
              placeholder='Nome como está no cartão' 
              type='text' 
              />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}/>

        <div className='flex justify-between'>
          <FormField 
            control={form.control}
            name='validate'
            render={({field}) => (
              <FormItem>
                <FormLabel>Validade</FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='MM/AA' 
                    type='text' 
                    />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}/>

          <FormField 
            control={form.control}
            name='cvv'
            render={({field}) => (
              <FormItem>
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='123' 
                    type='text' 
                    />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}/>
        </div>

        <FormField 
          control={form.control}
          name='installments'
          render={({field}) => (
            <FormItem>
              <FormLabel>Parcelas</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Selecione a quantidade de parcelas"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {installments.map((item) => (
                    <SelectItem value={item.valueInstallments} key={item.id}>
                      {item.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage/>
            </FormItem>
        )}/>  

        <FormField
          control={form.control}
          name='futurePurchases'
          render={({field}) => (
            <FormItem className='flex flex-row items-center space-x-2'>
              <FormControl>
                <Checkbox 
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className='cursor-pointer'/>
              </FormControl>
              <div>
                <FormLabel>
                  Salvar cartão para compras futuras
                </FormLabel>
              </div>
            </FormItem>
          )}/>

          <div className='flex items-center justify-center gap-4 text-gray-400'>
            <Lock/>
            <p>Seus dados estão protegidos com critpografia SSL</p>
          </div>

          <Button type='submit'>Finalizar Pagamento</Button>
      </form>
    </Form>
  )
}
