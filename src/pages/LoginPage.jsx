import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import loginimg from "../../src/assets/images/banners/admin-checkin.jpeg";
import afterLogin from "../../src/assets/images/banners/admin.jpeg";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";
import "../assets/styles/login.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [bulkOrdersData, setBulkOrdersData] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteType, setDeleteType] = useState("");


  useEffect(() => {
    if (!isLoggedIn) {
      setEmail("");
      setPassword("");
      setShowPassword(false);
      setError("");
    }
  }, [isLoggedIn]);


  // ----------------------------
  // Firestore Subscriptions
  // ----------------------------
  const subscribeUsers = () => {
    setLoadingUsers(true);
    const usersRef = collection(db, "users");
    const unsubscribe = onSnapshot(
      usersRef,
      (snapshot) => {
        const data = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => {
            const hasDateA = a.createdDate && a.createdTime;
            const hasDateB = b.createdDate && b.createdTime;

            // Items without date/time go to the bottom
            if (!hasDateA && hasDateB) return 1;
            if (hasDateA && !hasDateB) return -1;
            if (!hasDateA && !hasDateB) return 0;

            const dateA = new Date(`${a.createdDate} ${a.createdTime}`);
            const dateB = new Date(`${b.createdDate} ${b.createdTime}`);
            return dateB - dateA; // Newest first
          });

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
        const data = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => {
            const hasDateA = a.createdDate && a.createdTime;
            const hasDateB = b.createdDate && b.createdTime;

            // Items without date/time go to the bottom
            if (!hasDateA && hasDateB) return 1;
            if (hasDateA && !hasDateB) return -1;
            if (!hasDateA && !hasDateB) return 0;

            const dateA = new Date(`${a.createdDate} ${a.createdTime}`);
            const dateB = new Date(`${b.createdDate} ${b.createdTime}`);
            return dateB - dateA; // Newest first
          });

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

  // ----------------------------
  // Handle Login
  // ----------------------------
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

  // ----------------------------
  // Handle Logout
  // ----------------------------
  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setError("");
    setIsLoggedIn(false);
    sessionStorage.setItem("isLoggedIn", "false");
    setUsersData([]);
    setBulkOrdersData([]);
    window.location.href = window.location.pathname;
  };

  // ----------------------------
  // Main Effect
  // ----------------------------
  useEffect(() => {
    // Initialize login state from session (true/false)
    const storedLogin = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedLogin);
  }, []);

  useEffect(() => {
    let unsubscribeUsers = () => { };
    let unsubscribeOrders = () => { };

    if (isLoggedIn) {
      // Always fetch fresh data when session indicates user is logged in
      unsubscribeUsers = subscribeUsers();
      unsubscribeOrders = subscribeBulkOrders();
    } else {
      // If logged out, clear UI state and ensure no subscriptions
      setUsersData([]);
      setBulkOrdersData([]);
      try { unsubscribeUsers(); } catch (e) { }
      try { unsubscribeOrders(); } catch (e) { }
      unsubscribeUsers = () => { };
      unsubscribeOrders = () => { };
    }

    return () => {
      try { unsubscribeUsers(); } catch (e) { }
      try { unsubscribeOrders(); } catch (e) { }
    };
  }, [isLoggedIn]);

  const openDeletePopup = (item, type) => {
    setDeleteItem(item);
    setDeleteType(type);
    setShowDeletePopup(true);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    setDeleteItem(null);
    setDeleteType("");
  };

  const confirmDelete = async () => {
    if (!deleteItem || !deleteType) return;

    try {
      await deleteDoc(doc(db, deleteType, deleteItem.id));

      // Clear session storage for correct fresh reload
      if (deleteType === "users") {
        setUsersData((prev) => prev.filter((u) => u.id !== deleteItem.id));
      }
      else if (deleteType === "bulkorders") {
        setBulkOrdersData((prev) => prev.filter((o) => o.id !== deleteItem.id));
      }

    } catch (err) {
      console.error("Delete failed", err);
    }

    cancelDelete();
  };

  return (
    <>
      <Header />
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
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </div>
                <div className="input-group d-flex flex-column">
                  <label>Password</label>
                  <div className="password-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      aria-label="Password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        // eye-off (hide)
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.58 10.58A3 3 0 1113.42 13.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2.3 12.03C3.86 7.86 7.8 5 12 5c1.5 0 2.93.34 4.2.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19.8 11.97C18.24 16.14 14.3 19 10.1 19c-1.5 0-2.93-.34-4.2-.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        // eye (show)
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  </div>
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
            <div className="after-login-img">
              <img className="login-image" src={afterLogin} alt="image" />
            </div>
            <h2>Welcome, Admin!</h2>

            {/* ---------------- USERS TABLE ---------------- */}
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
                      <th className="text-center">Delete</th>
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
                        <td className="col-delete">
                          <button
                            className="delete-icon"
                            onClick={() => openDeletePopup(user, "users")}
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ---------------- BULK ORDERS TABLE ---------------- */}
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
                      <th className="text-center">Delete</th>
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
                        <td className="col-delete">
                          <button
                            className="delete-icon"
                            onClick={() => openDeletePopup(order, "bulkorders")}
                          >
                            🗑️
                          </button>
                        </td>
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
      {showDeletePopup && (
        <div className="delete-popup-overlay">
          <div className="delete-popup">
            <h2>Would you like to delete?</h2>

            <div className="popup-actions">
              <button className="btn-cancel" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="btn-delete" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default LoginPage;
