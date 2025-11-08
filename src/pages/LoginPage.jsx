import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import "./Login.scss";
import loginimg from "../../src/assets/images/banners/admin-img.jpg"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [bulkOrdersData, setBulkOrdersData] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);

  // Firestore subscriptions
  const subscribeUsers = () => {
    setLoadingUsers(true);
    const usersRef = collection(db, "users");
    const unsubscribe = onSnapshot(
      usersRef,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsersData(data);
        setLoadingUsers(false);
      },
      (err) => {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users data.");
        setLoadingUsers(false);
      }
    );
    return unsubscribe;
  };

  const subscribeBulkOrders = () => {
    setLoadingOrders(true);
    const ordersRef = collection(db, "bulkorders");
    const unsubscribe = onSnapshot(
      ordersRef,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBulkOrdersData(data);
        setLoadingOrders(false);
      },
      (err) => {
        console.error("Error fetching bulk orders:", err);
        setError("Failed to fetch bulk orders data.");
        setLoadingOrders(false);
      }
    );
    return unsubscribe;
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsersData([]);
    setBulkOrdersData([]);
    sessionStorage.removeItem("isLoggedIn");
  };

  // Main effect to manage subscriptions
  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    let unsubscribeUsers = () => { };
    let unsubscribeOrders = () => { };

    if (loggedIn) {
      unsubscribeUsers = subscribeUsers();
      unsubscribeOrders = subscribeBulkOrders();
    }

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribeUsers();
      unsubscribeOrders();
    };
  }, [isLoggedIn]);

  return (
    <div className="login-page">
      {!isLoggedIn ? (
        <>
          <div className="login-img">
            <img className="login-image" src={loginimg} alt="image" />
          </div>
          <div className="login-card">
            <h2 className="title">Admin Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="admin-dashboard">
          <h2>Welcome, Admin!</h2>

          {/* Users Table */}
          <h3 className="py-3">Contact Info</h3>
          {loadingUsers ? (
            <p>Loading users...</p>
          ) : usersData.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <div className="table-wrapper">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>Message</th>
                    <th>Created Date</th>
                    <th>Created Time</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user) => (
                    <tr key={user.id}>
                      <td>{user.userName || "-"}</td>
                      <td>{user.email || "-"}</td>
                      <td>{user.mobileNo || "-"}</td>
                      <td>{user.message || "-"}</td>
                      <td>{user.createdDate || "-"}</td>
                      <td>{user.createdTime || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Bulk Orders Table */}
          <h3 className="py-3">Bulk Orders</h3>
          {loadingOrders ? (
            <p>Loading bulk orders...</p>
          ) : bulkOrdersData.length === 0 ? (
            <p>No bulk orders found.</p>
          ) : (
            <div className="table-wrapper">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Contact Info</th>
                    <th>Quantity</th>
                    <th>Special Request</th>
                    <th>Created Date</th>
                    <th>Created Time</th>
                  </tr>
                </thead>
                <tbody>
                  {bulkOrdersData.map((order) => (
                    <tr key={order.id}>
                      <td>{order.address || "-"}</td>
                      <td>{order.contactInfo || "-"}</td>
                      <td>{order.quantity || "-"}</td>
                      <td>{order.specialRequest || "-"}</td>
                      <td>{order.createdDate || "-"}</td>
                      <td>{order.createdTime || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
