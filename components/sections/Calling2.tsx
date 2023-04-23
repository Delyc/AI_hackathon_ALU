import {services2} from '../../data/steps'
import Step2 from '../cards/Step2';
import SectionWrapper from '../wrappers/SectionWrapper';
import { languageChange } from '@/utils/languages';
const Calling2 = () => {
    return ( 
        <section className='bg-primary-blue py-2'>

            <h1 id="descr3">testing</h1>
        <SectionWrapper>

            <div className='px-40'>
            {services2 .map((service, index) => {
            return(
                <Step2 id={service.id} image={service.image} index={index} step={service.step} description={service.description}/>
            )
        })}
            </div>
    
        </SectionWrapper>
    </section>
     );
}
 
export default Calling2;