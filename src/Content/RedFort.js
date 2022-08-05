import React from 'react'
import redf from '../asset/redfort.jpg'

function RedFort() {
  return (
    <div className='redfort'>
        <div><h2>Red Fort</h2></div><br></br>
        <div className='redfortContent'>
        <img src={redf} ></img>
        <div className='rcontent'>
        <p>The fort’s massive red sandstone walls, which stand 75 feet (23 metres) high, 
        enclose a complex of palaces and entertainment halls, projecting balconies, 
        baths and indoor canals, and geometrical gardens, as well as an ornate mosque. 
        Among the most famous structures of the complex are the Hall of Public Audience (Diwan-i-ʿAm), 
        which has 60 red sandstone pillars supporting a flat roof, and the Hall of Private Audience (Diwan-i-Khas), 
        which is smaller and has a pavilion of white marble.</p>

       <span> The Red Fort was built by none other than the Mughal Emperor Shah Jahan to serve as the palace fort for his 
        capital Shahjahanabad. He commissioned the construction of the fort by the River Yamuna when he decided to 
        shift his capital to Delhi from Agra. The construction, which started in 1638, took over 8 years to complete. 
        The structure was originally named Qila-i-Mubarak, which means ‘the Blessed Fort’. During its history of over 
        three centuries, the fort saw many occupants, including Aurangzeb, Jahandar Shah, Muhammad Shah, and Bahadur 
        Shah II, among others.</span><br></br><br></br>

<span>The Red Fort underwent massive destruction in 1739 when the Persian ruler Nadir Shan invaded 
the city and plundered the fort of many valuable artifacts, including the Peacock Throne. Later, 
during the 1857 Revolt against the British, the marble structures of the fort were also destroyed.</span><br></br><br></br>
        </div>
        </div>
    </div>
  )
}

export default RedFort