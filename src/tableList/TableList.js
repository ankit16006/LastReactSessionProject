import React from 'react'
import { useSelector } from 'react-redux'

const TableList = () => {
    const list = useSelector((state) => state.listReducer.list);
  return (
    <div className='showlist'>
        {
            list.map((listData) =>{
                return(
                    <div className='list'>
                    <div className='listdata'>
                    <table>
                        <tr style={{paddingLeft:"30px"}}>
                            <th>UserId</th>
                            <th style={{paddingLeft:"60px"}}>User-Email</th>
                        </tr>
                        <tr>
                    <td style={{listStyle:"none"}}>{listData.id}</td>
                    <td style={{listStyle:"none"}}>{listData.data}</td>
                    </tr>
                   
                </table>
                </div>
                </div>
                )
              
            })
        }
    </div>
  )
}

export default TableList