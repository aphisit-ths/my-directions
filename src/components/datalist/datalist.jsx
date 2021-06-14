import React,{useState,useEffect} from 'react'
import firebase from '../../utils/firebase';
import Data from '../data/data';
import './datalist.scss'

function DataList() {

    const [datalist, setDataList] = useState()

    useEffect(() => {
        const dataRef = firebase.database().ref('todolist')
        dataRef.on('value', (snapshot) =>{
            const data = snapshot.val();
            const datalist = []
            for (let id in data) {
                datalist.push({id,...data[id]})
            }
            setDataList(datalist)
            
        });
        
        
    }, [])


    return (
        <div className="_datalist">
            <h3 className="headertext">TASK LIST</h3>
            <div className="listitem">
                {datalist ? datalist.map((data,index) => <Data data={data} key={index} /> ):""}
            </div>
            
        </div>
    )
}

export default DataList
