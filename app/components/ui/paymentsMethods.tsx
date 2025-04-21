import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { QrCode, RefreshCcw, Clipboard, CircleAlert } from 'lucide-react'
import BankSlipForm from '@/app/components/ui/bankSlipForm'

export function CreditCard() {
  return (
    <div className='mt-6'>
      a
    </div>
  )
}

export function BankSlip() {
  return (
    <div className='mt-6'>
      <Alert className='flex items-center' variant='destructive'>
        <div>
          <CircleAlert/>
        </div>
        <AlertDescription className='text-center'>
          O boleto bancário vence em 3 dias úteis. Após o pagamento, a compensação pode levar até 3 dias úteis.
        </AlertDescription>
      </Alert>

      <BankSlipForm/>
    </div>
  )
}

export function Pix() {
  return (
    <div className='mt-6 flex flex-col gap-5 justify-center items-center'>
      <Alert variant='successfully'>
        <QrCode/>
        <AlertDescription>
          Pagamento instantâneo! Após o pagamento via PIX, a confirmação é imediata.
        </AlertDescription>
      </Alert>

      <div className='border rounded-md p-3'>
        <QrCode size={150} className='bg-gray-200 rounded-md p-3'/>
      </div>

      <Button variant='outline' className='cursor-pointer'>
        <RefreshCcw/>
        Atualizar QR code
      </Button>

      <p className='self-start'>Ou copie e cole o código pix:</p>
      <div className='border rounded-md flex items-center w-full p-2 cursor-pointer transition-colors hover:bg-gray-100'>
        <div>
          <p className='text-ellipsis line-clamp-1'>00020126580014BR.GOV.BCB.PIX0136a629534e-7e14-rrrerererrffhjiopbropqbnvopqdffa1</p>
        </div>
        <div>
          <Clipboard/>
        </div>
      </div>

      <p className='text-center text-gray-400'>Abra o aplicativo do seu banco, escolha a opção PIX e escaneie o QR code ou cole o código acima para realizar o pagamento.</p>

      <Button className='w-full cursor-pointer'>
        Finalizar Pagamento
      </Button>
    </div>
  )
}
