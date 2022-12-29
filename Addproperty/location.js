import '../addproperty/form.css';

const LocationInfo = () => {
  

    return (
        <>
            <form className='form-container'>
                <label className='input-box' htmlFor='email'>Email <br />
                    <input type='text' id='email' name='email' placeholder='Email' class='input' />
                </label><br />

                <label className='input-box' htmlFor='city'>City <br />
                    <select id="city" name="city"  className='selection-input'>
                        
                        <option value="Adilabad">Adilabad</option> 
                        <option value="Agra">Agra</option> 
                        <option value="Ahmedabad">Ahmedabad</option> 
                        <option value="Ahmednagar">Ahmednagar</option> 
                        <option value="Aizawl">Aizawl</option> 
                        <option value="Ajmer">Ajmer</option> 
                        <option value="Akola">Akola</option>
                         <option value="Alappuzha">Alappuzha</option> 
                         <option value="Aligarh">Aligarh</option>
                        </select>
                </label><br />

                <label className='input-box' htmlFor='area'>Area <br />
                    <select id="area" name="area"  className='selection-input'>
                        <option value="Adilabad">Adilabad</option>
                         <option value="Agra">Agra</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                           <option value="Ahmednagar">Ahmednagar</option> 
                           <option value="Aizawl">Aizawl</option>
                        </select>
                </label><br />

                <label className='input-box' htmlFor='pincode'>Pincode <br />
                    <input type='text' id='pincode' name='pincode' placeholder='Example: 220059'  class='input'  />
                </label><br />

                <label className='input-box' htmlFor='address'>Address <br />
                    <input type='text' id='address' name='address' placeholder='Address'  className='input' />
                </label><br />

                <label className='input-box' htmlFor='landmark'>Landmark <br />
                    <input type='landmark' id='landmark' name='landmark' placeholder='Landmark' className='input'  />
                </label><br />

                <label className='input-box' htmlFor='latitude'>Latitude <br />
                    <input type='text' id='latitude' name='latitude' placeholder='Latitude'className='input' />
                </label><br />

                <label className='input-box' htmlFor='longitude'>Longitude <br />
                    <input type='text' id='longitude' name='longitude' placeholder='Longitude' className='input'  />
                </label><br />
            </form>
        </>
    )
}

export default LocationInfo;