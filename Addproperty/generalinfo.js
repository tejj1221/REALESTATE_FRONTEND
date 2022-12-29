
import '../addproperty/form.css';

const GeneralInfo = () => {
  

    return (
        <form className='form-container'>
            <label className='input-box' htmlFor='name'>Name <br/>
                <input type='text' id='name' name='name' placeholder='Owner' />
            </label><br/>

            <label className='input-box' htmlFor='mobile'>Mobile <br/>
                <input type='text' id='mobile' name='mobile' placeholder='Enter Mobile Number' />
            </label><br/>

            <label className='input-box' htmlFor='postedBy'>Posted By <br/>
                <select id='postedBy' name='postedBy' className='selection-input'>
                    <option value='Owner'>Owner</option>
                    <option value='Dealer'>Dealer</option>
                    <option value='Relative'>Relative</option>
                    <option value='Other'>Other</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='saleType'>Sale Type <br/>
                <select id='saleType' name='saleType'  className='selection-input'>
                    <option value='Standard Sales'>Standard Sales</option>
                    <option value='Bank Owned Sales'>Bank Owned Sales</option>
                    <option value='Short Sales'>Short Sales</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='featuredPackage'>Featured Package <br/>
                <select id='featuredPackage' name='featuredPackage'  className='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='PPDPackage'>PPD Package <br/>
                <select id='PPDPackage' name='PPDPackage' className='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>
        </form>
    )
}

export default GeneralInfo;