import httpService from "@/Config/httpServices";

class AdminService {

  // Method to get admin details by ID
//   getAdminById = async (id) => {
//     try {
//       const response = await httpService.get(`api/admins/${id}`);
//       return response.data.result;
//     } catch (error) {
//       console.error("Fetching admin by ID failed:", error);
//       // Handle token error appropriately
//       if (error.response && error.response.status === 401) {
//         localStorage.setItem("token", "");
//         // Perform any additional logout or error handling logic
//       }
//     }
//   };
}

export default new AdminService();
