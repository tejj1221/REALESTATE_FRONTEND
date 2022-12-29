import "../addproperty/form.css"

const BasicInfo = () => {
   

    return (
        <form className='form-container'>
            <label className='input-box' htmlFor='propertyType'> Property Type <br />
                <select id='propertyType' name='propertyType' className='selection-input'>
                     <option value='Select Property Type'>Select Property Type</option> :
                        <option ></option>
                    <option value='Residential'>Residential</option>
                    <option value='Commercial'>Commercial</option>
                    <option value='Industrial'>Industrial</option>
                    <option value='Investing'>Investing</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='price'>Price <br />
                <input type='text' id='price' name='price' placeholder='Example: 100000'
                    class='input' />
            </label><br />

            <label className='input-box' htmlFor='propertyAge'>Property Age <br />
                <select id='propertyAge' name='propertyAge'  className='selection-input'>
                    <option value='0-5'>0-5</option>
                    <option value='5-10'>5-10</option>
                    <option value='10-15'>10-15</option>
                    <option value='More Than 15 Years'>More Than 15 Years</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='propertyDiscription'>Property Discription <br />
                <input type='text' id='propertyDiscription' name='propertyDiscription'/>        
            </label><br />

            <label className='input-box' htmlFor='negotiable'>Negotiable <br />
                <select id='negotiable' name='negotiable'  className='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='ownership'>Ownership <br />
                <select id='ownership' name='ownership'  className='selection-input'>
                    <option value='Individual Ownership'>Individual Ownership</option>
                    <option value='Joint Ownership'>Joint Ownership</option>
                    <option value='Ownership By Way Of Nomination'>Ownership By Way Of Nomination</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='propertyApproved'>Property Approved <br />
                <select id='propertyApproved' name='propertyApproved'  className='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br />

            <label className='input-box' htmlFor='bankLoan'>Bank Loan <br />
                <select id='bankLoan' name='bankLoan'  className='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br />
        </form>
    )
};

export default BasicInfo;