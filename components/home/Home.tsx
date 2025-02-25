"use client";

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface IUserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function HomePage() {
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as IUserData);
    }
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      {userData ? (
        <div className="space-y-4">
          <h1 className="text-2xl font-bold mb-4">User Information</h1>

          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="grid grid-cols-2">
              <span className="text-gray-600">ID:</span>
              <span className="font-medium">{userData.id}</span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-gray-600">First Name:</span>
              <span className="font-medium">{userData.first_name}</span>
            </div>

            {userData.last_name && (
              <div className="grid grid-cols-2">
                <span className="text-gray-600">Last Name:</span>
                <span className="font-medium">{userData.last_name}</span>
              </div>
            )}

            {userData.username && (
              <div className="grid grid-cols-2">
                <span className="text-gray-600">Username:</span>
                <span className="font-medium">@{userData.username}</span>
              </div>
            )}

            <div className="grid grid-cols-2">
              <span className="text-gray-600">Language:</span>
              <span className="font-medium">
                {userData.language_code.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-gray-600">Premium User:</span>
              <span className="font-medium">
                {userData.is_premium ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-600">Loading...</div>
      )}
    </div>
  );
}
