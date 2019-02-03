import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import MailIcon from "@material-ui/icons/Mail"
import NotificationsIcon from "@material-ui/icons/Notifications"
import AccountCircle from "@material-ui/icons/AccountCircle"

class Header extends React.Component {
	render() {
		return (
			<div>
				<AppBar position="fixed">
					<Toolbar>
						<IconButton color="inherit" aria-label="Open drawer" onClick={this.props.toggleMenu}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5" color="inherit" noWrap> Sample Application </Typography>
						<div style={{ flexGrow: 3 }} />
						<div>
							<IconButton color="inherit">
								<Badge badgeContent={4} color="secondary">
									<MailIcon />
								</Badge>
							</IconButton>
							<IconButton color="inherit">
								<Badge badgeContent={17} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton aria-haspopup="true" color="inherit">
								<AccountCircle />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Header;
