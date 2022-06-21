import { Button,  ButtonGroup,  FormLayout,  Icon,  Modal, Select, TextField } from '@shopify/polaris'
import {
  MinusMinor,PlusMinor
} from '@shopify/polaris-icons'; 
import React, { useCallback, useState } from 'react'
export const AddFieldsModel = () => {
  const [active, setActive] = useState(false);
  const [group, setGroup] = useState([{value:""}])
  const [state, setState] = useState({
    label:"",
    field:"",
  })
  const handleChange = useCallback(() => setActive(!active), [active]);
  const activator = <Button primary onClick={handleChange}>Add Fields</Button>;
  const handleChange2=(name,value)=>{   
    setState((preValue)=>{return{...preValue,[name]:value,}})}

  const options = [
    {label: 'Input', value: 'text'},
    {label: 'Email', value: 'email'},
    {label: 'Date', value: 'date'},  
    {label: 'Textarea', value: 'textarea'},
    {label: 'Radio-Button', value:'radio'},
    {label: 'Checkbox', value: 'checkbox'},
  ];

  const groupChangval = (i,name,value) => {
    const newFormValues = [...group];
    newFormValues[i][name]=value;
    setGroup(newFormValues);
  }
  
  let addGroupField = () => {
    setGroup([...group,{value:""}])
    }
  
  let removeGroupField = (i) => {
    if(i>0){
      let newFormValues = [...group];
      newFormValues.splice(i, 1);
      setGroup(newFormValues)
    }
  }

  return (
    <div>
    <Modal
      activator={activator}
      open={active}
      onClose={handleChange}
      title="Create New Field"
    >
      <Modal.Section>
      {group.map((element, index) => (
            <div key={index}>
             {state&&state.field=='radio'||state.field=='checkbox'?
                    <TextField        
                    value={element.value}      
                    onChange={(val) => groupChangval(index,"value",val)}
                    label={`Value-${index+1}`}
                    name="value"
                    type="text"   
                    connectedRight={<ButtonGroup><Button onClick={() => removeGroupField(index)}><Icon source={MinusMinor}/></Button><Button onClick={() => addGroupField()}><Icon source={PlusMinor}color="base" /></Button></ButtonGroup>}
                    />  
                  :null}         
            </div>
          ))} 
              <FormLayout>
               <FormLayout.Group condensed>
                  <Select
                  label="Select field type"
                  placeholder="Select Type"
                  options={options}
                  onChange={(val)=>handleChange2("field",val)}   
                  value={state.field}
                  name="field"
                  />        
                  </FormLayout.Group>   
                  <FormLayout.Group>
                  <TextField              
                    value={state.label}
                    onChange={(val)=>handleChange2("label",val)}   
                    label="Field label"
                    name="label"
                    type="text"   
                    connectedRight={<Button primary>Create</Button>}           
                    />     
                    </FormLayout.Group>                                                                        
                </FormLayout>
      </Modal.Section>
    </Modal>
  </div>
  )
}
