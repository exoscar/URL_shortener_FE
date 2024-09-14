import React, { useState, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@mui/material';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import './index.css'; // Import the external CSS file

// Define the props and state types for the LandingPage component
const LandingPage: React.FC = () => {
  const [isBugFormVisible, setBugFormVisible] = useState<boolean>(false); // State to toggle bug form visibility
  const [bugDescription, setBugDescription] = useState<string>(''); // State to store the bug description

  // Function to toggle the bug form
  const handleBugReportClick = (): void => {
    setBugFormVisible(!isBugFormVisible);
  };

  // Function to handle input change in the bug description form
  const handleBugDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBugDescription(e.target.value);
  };

  // Function to handle bug report submission
  const handleBugSubmit = (): void => {
    if (bugDescription.trim()) {
      console.log('Bug Description:', bugDescription);
      alert('Bug report submitted successfully!');
      setBugFormVisible(false); // Close the form after submission
      setBugDescription(''); // Clear the input
    } else {
      alert('Please provide a bug description before submitting.');
    }
  };

  return (
    <div className="landing-container">
      <h2 className="landing-title">
        The Best URL Shortener <br /> You Will Ever Need
      </h2>

      <Tabs defaultValue="account" className="tabs-container">
        <TabsList className="tabs-list">
          <TabsTrigger value="shorten" className="tabs-trigger">
            Shorten
          </TabsTrigger>
          <TabsTrigger value="expand" className="tabs-trigger">
            Expand
          </TabsTrigger>
        </TabsList>

        <TabsContent value="shorten">
          <Card className="card-container">
            <p className="card-title">Change your Origin</p>
            <CardContent className="card-content">
              <Input className="col-span-2" name="longurl" type="url" placeholder="Enter Long URL" />
              <Input name="alias" type="text" placeholder="Alias" />
              <Input name="expdate" type="number" placeholder="Expiry Date" />
            </CardContent>
            <CardFooter className="card-footer">
              <Button className="submit-button" variant="outlined">
                Shorten
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="expand">
          <Card className="card-container">
            <CardContent>
              <p className="card-title">Find Your Destination</p>
              <Input name="expand" type="url" placeholder="Enter Short URL" />
            </CardContent>
            <CardFooter className="card-footer">
              <Button className="submit-button" variant="outlined">
                Expand
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Bug Report Form */}
      {isBugFormVisible && (
        <div className="bug-form-container">
          <Input
            value={bugDescription}
            onChange={handleBugDescriptionChange}
            placeholder="Describe the bug"
            className="bug-input"
          />
          <Button onClick={handleBugSubmit} variant="contained" className="submit-bug-button">
            Submit
          </Button>
        </div>
      )}

      <div className="landing-footer">
        <p>© All Rights Reserved</p>
        <Button className="bug-button" onClick={handleBugReportClick}>
          Report a Bug
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
