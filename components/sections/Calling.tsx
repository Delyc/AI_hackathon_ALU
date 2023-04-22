import {services} from '../../data/steps'
import Step from '../cards/Step';
import SectionWrapper from '../wrappers/SectionWrapper';

const Calling = () => {
    return ( 
        <section>
            <SectionWrapper>

                <div className='px-40'>
                {services .map((service, index) => {
                return(
                    <Step image={service.image} index={index} step={service.step} description={service.description}/>
                )
            })}
                </div>
        
            </SectionWrapper>
        </section>
     );
}
 
export default Calling;