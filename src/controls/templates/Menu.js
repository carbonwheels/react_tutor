import React from "react"
import { Link } from "react-router-dom"

import CloudIcon from '@material-ui/icons/Cloud'
import Divider from '@material-ui/core/Divider'
import Drawer from "@material-ui/core/Drawer"
import HomeIcon from '@material-ui/icons/Home'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ReceiptIcon from '@material-ui/icons/Receipt'
import SettingsIcon from '@material-ui/icons/Settings'

class Menu extends React.Component {

	// NOTES: onClick, onClose are the event on the control.  'this.props.closeMenuDrawer' will be property on <Menu />
	render() {
		return (
			<Drawer variant="temporary" anchor="left" open={this.props.showMenu} onClose={this.props.closeMenuDrawer}>
				<div style={{ width: 250 }} onClick={this.props.closeMenuDrawer} >
					<List >
						<Divider />
						<ListItem>
							<ListItemIcon><HomeIcon /></ListItemIcon>
							<ListItemText><Link to="/" style={{ textDecorationLine: 'none' }}>Home</Link></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon><ReceiptIcon /></ListItemIcon>
							<ListItemText><Link to="/jason" style={{ textDecorationLine: 'none' }}>Jason</Link></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon><ReceiptIcon /></ListItemIcon>
							<ListItemText><Link to="/jasonreduxsaga" style={{ textDecorationLine: 'none' }}>Jason Redux Saga</Link></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon><CloudIcon /></ListItemIcon>
							<ListItemText><Link to="/aboutUs" style={{ textDecorationLine: 'none' }}>About Us</Link></ListItemText>
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemIcon><SettingsIcon /></ListItemIcon>
							<ListItemText>Settings</ListItemText>
						</ListItem>
					</List>
				</div>
			</Drawer>
		);
	}
}

export default Menu;
