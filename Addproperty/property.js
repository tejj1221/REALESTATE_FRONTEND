import "../addproperty/form.css"

const PropertDetail = () => {

    return (
        <form className='form-container'>
            <label className='input-box' htmlFor='length'> Length <br/>
                <input type='text' id='length' name='length' placeholder='Example: 1000' />
            </label><br/>

            <label className='input-box' htmlFor='breadth'> Breadth <br/>
                <input type='text' id='breadth' name='breadth' placeholder='Example: 1000' />
            </label><br/>

            <label className='input-box' htmlFor='totalArea'>Total Area <br/>
                <input type='text' id='totalArea' name='totalArea' placeholder='Example: 7500' />
            </label><br/>

            <label className='input-box' htmlFor='areaUnit'>Area Unit <br/>
                <input type='text' id='areaUnit' name='areaUnit' placeholder='Area Unit' />
            </label><br/>
            
            <label className='input-box' htmlFor='noOfBHK'>No Of BHK <br/>
                <select id='noOfBHK' name='noOfBHK' class='selection-input'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='More Than 3'>More Than 3</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='noOfFloor'>No Of Floor <br/>
                <select id='noOfFloor' name='noOfFloor'  class='selection-input'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='More Than 3'>More Than 3</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='attached'>Attached <br/>
                <select id='attached' name='attached'  class='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='westernToilet'>Western Toilet <br/>
                <select id='westernToilet' name='westernToilet'  class='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='furnished'>Furnished <br/>
                <select id='furnished' name='furnished'  class='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>
            <label className='input-box' htmlFor='carParking'>Car Parking <br/>
                <select id='carParking' name='carParking' class='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='lift'>Lift <br/>
                <select id='lift' name='lift'  class='selection-input'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </label><br/>

            <label className='input-box' htmlFor='electricity'>Electricity <br/>
                <input type='text' id='electricity' name='electricity' placeholder='Example: 3 Phase' 
                class='input' />
            </label><br/>

            <label className='input-box' htmlFor='facing'>Facing <br/>
                <select id='facing' name='facing'  class='selection-input'>
                    <option value='North'>North</option>
                    <option value='South'>South</option>
                    <option value='East'>East</option>
                    <option value='West'>West</option>
                </select>
            </label><br/>
        </form>
    )
}

export default PropertDetail;