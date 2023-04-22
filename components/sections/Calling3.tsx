import {services2} from '../../data/steps'
import Step3 from '../cards/Step3';
import SectionWrapper from '../wrappers/SectionWrapper';

const Calling3 = () => {
    return ( 
        <section className='py-2'>
        <SectionWrapper>

            <div className='px-40'>
            {services2 .map((service, index) => {
            return(
                <Step3 image={service.image} index={index} step={service.step} description={service.description}/>
            )
        })}
            </div>
    
        </SectionWrapper>
    </section>
     );
}
 
export default Calling3;