import { Button } from '@/components/ui/button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link1Icon, Link2Icon } from '@radix-ui/react-icons';
import './index.css'; // Import the external CSS file

const Header = () => {
  const navigate = useNavigate();
  const user = true;

  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src="/logo.png" className="logo-image" alt="logo" />
      </Link>
      {!user ? (
        <div>
          <Button onClick={() => navigate("/auth")}>Login</Button>
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="dropdown-trigger">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to='/dashboard'>
              <Link2Icon className="dropdown-item-icon" />
              My Links
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="logout-text">
              <LogoutIcon className="logout-icon" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};

export default Header;
