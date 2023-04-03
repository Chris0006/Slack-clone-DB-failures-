import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SidebarOption from './SidebarOption';
import db from './firebase';

function Sidebar() {
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => 
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,

            })))
        )
    }, [])

  return (
    <div className='sidebar'>
        <div className='sidebar__header'>

            <div className='sidebar__info'>
                <h2>The Slack Server</h2>
                <h3>
                    <FiberManualRecordIcon/> 
                    Derek Powers
                </h3>
            </div>
                
            <CreateIcon/>
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption  title="Threads" />
        <SidebarOption Icon={InsertCommentIcon} title="Mentioned & Reactions" />
        <SidebarOption Icon={InsertCommentIcon} title="Saved Items" />
        <SidebarOption Icon={InsertCommentIcon} title="Channel Browser" />
        <SidebarOption Icon={InsertCommentIcon} title="People & User Groups" />
        <SidebarOption Icon={InsertCommentIcon} title="Apps" />
        <SidebarOption Icon={InsertCommentIcon} title="File Browser" />
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <hr/>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <hr/>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        {channels.map(channel => (
            <SidebarOption title={channel.name} id={channel.id}/>
        ))}
    </div>
  )
}

export default Sidebar