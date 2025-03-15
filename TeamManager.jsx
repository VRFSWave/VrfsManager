import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

export default function TeamManager() {
  const [team, setTeam] = useState([]);
  const [formation, setFormation] = useState('4-4-2');
  const [playerName, setPlayerName] = useState('');
  const [tactics, setTactics] = useState('');

  const addPlayer = () => {
    if (playerName) {
      setTeam([...team, playerName]);
      setPlayerName('');
    }
  };

  return (
    <div className="p-8 space-y-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center">VRFS Team Manager</h1>

      <Tabs defaultValue="team">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger value="team">Team Sheet</TabsTrigger>
          <TabsTrigger value="formation">Formation</TabsTrigger>
          <TabsTrigger value="tactics">Tactics</TabsTrigger>
        </TabsList>

        <TabsContent value="team">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-semibold">Team Sheet</h2>
              <Input
                type="text"
                placeholder="Enter player name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
              <Button onClick={addPlayer}>Add Player</Button>

              <ul className="list-decimal pl-5 space-y-1">
                {team.map((player, index) => (
                  <li key={index}>{player}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formation">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-semibold">Formation</h2>
              <select
                value={formation}
                onChange={(e) => setFormation(e.target.value)}
                className="p-2 border rounded-lg text-black"
              >
                <option value="4-4-2">4-4-2</option>
                <option value="4-3-3">4-3-3</option>
                <option value="3-5-2">3-5-2</option>
                <option value="5-3-2">5-3-2</option>
              </select>
              <p>Selected: {formation}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tactics">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-semibold">Tactics</h2>
              <textarea
                placeholder="Describe your tactics here"
                value={tactics}
                onChange={(e) => setTactics(e.target.value)}
                className="p-2 w-full h-32 rounded-lg text-black"
              />
              <p>{tactics || 'No tactics provided.'}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
