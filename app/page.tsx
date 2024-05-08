import { CardUsageExample } from '@/component/card'
import { AreaChartHero } from '@/component/grafica'
import { ListUsageExample } from '@/component/list'
import { TableUsageExample } from '@/component/tablas';
import { Card } from '@tremor/react';


function Page (){
  return(
    <div className='container mx-auto pt-10'>
      <h1 className='text-white text-center text-4xl'>Dashboard Ahorros del mes de Mayo</h1>
      <div className="grid grid-cols-4 gap-2 mt-10">
      
      <CardUsageExample />
      <CardUsageExample />
      <CardUsageExample />
      <CardUsageExample />
      <CardUsageExample />
      <CardUsageExample />
      <CardUsageExample />
      <CardUsageExample />
    </div>

<div className='grid grid-cols-4 mt-10'>
  <div className='cols-span-2 px-7'>
    <ListUsageExample/>
  </div>
  <div className='col-span-2 px-7'>
 <Card>
  <AreaChartHero/>
 </Card>
</div>
<div className='pt-5'>
  <TableUsageExample/>
</div>
</div>




    </div>
  )
}
export default Page