import {services2} from '../../data/steps'
import Step2 from '../cards/Step2';
import SectionWrapper from '../wrappers/SectionWrapper';

const Calling2 = () => {
    return ( 
        <section className='bg-primary-blue py-2'>
        <SectionWrapper>

            <div className='px-40'>
            {services2 .map((service, index) => {
            return(
                <Step2 image={service.image} index={index} step={service.step} description={service.description}/>
            )
        })}
            </div>
    
        </SectionWrapper>
    </section>
     );
}
 
export default Calling2;