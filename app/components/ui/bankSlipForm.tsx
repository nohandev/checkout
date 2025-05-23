'use client'

import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  cpf: z
    .string()
    .nonempty('Preencha o CPF por favor')
    .length(11, 'Insira um CPF válido'),
  name: z
    .string()
    .nonempty('Preencha nome do pagador')
})

export default function BankSlipForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: '',
      name: ''
    },
  })

  const onSubmit = (e: z.infer<typeof formSchema>) => {
    console.log(e)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)} 
        className='mt-6 flex flex-col gap-6'>
        <FormField
          control={form.control}
          name='cpf'
          render={({field}) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  placeholder='000.000.000-00' 
                  type='text'
                  maxLength={12} 
                  />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}/>
          
          <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Nome completo do pagador' 
                  {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}/>
          <Button type='submit'>Gerar Boleto</Button>
      </form>

    </Form>
  )
}
