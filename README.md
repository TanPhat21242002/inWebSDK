## Drawing inWeb

Drawing inWeb is a WebAssembly-based library (compiled from C++) that provides powerful APIs for working with DWG and DXF files directly in the browser. While it closely follows the desktop SDK’s architecture, certain modifications have been introduced to optimize performance and ensure compatibility with web environments.

This library requires the ProtectionServer for enhanced security. Without the ProtectionServer, Drawing inWeb will not function correctly.

---

## Key Features
- **DWG/DXF Reading**: Load data from DWG and DXF files directly in the browser.
- **Visualization**: Render and inspect geometry objects.
- **File Creation**: Initialize new DWG or DXF files from scratch.
- **Editing Tools**: Modify fundamental entities, layers, views, and other objects.
- **Version Compatibility**: Save or export changes to a range of supported file versions.

---

## System Requirements
### Browser
- A modern browser that supports both WebAssembly and WebGL.

### ProtectionServer
- Requires .NET Core 8.0 or a compatible environment to run.

---

## Installation & Setup
1. **Configure the ProtectionServer**
   - Install .NET Core 8.0 or higher, following Microsoft’s official guidelines:
     - [https://learn.microsoft.com/en-us/dotnet/core/install/](https://learn.microsoft.com/en-us/dotnet/core/install/)
   - Launch the ProtectionServer and specify the desired port if needed. For example, to run on port 8080, use the following command:
     ```sh
     dotnet InWeb.FileProtectionServer.dll --urls "http://localhost:8080"
     ```
2. **Set Up the Library**
   - In your HTML file, include a reference to the library hosted by the ProtectionServer. For example:
     ```html
     <script src="/DrawingWeb.js"></script>
     ```

---

## Running Examples
You can find sample projects in the **examples** directory. To start the examples, we recommend using a proxy server that forwards requests to the ProtectionServer:

```sh
npx http-server -p 3000 -cors -P http://localhost:8080
```

This command will:
- Serve the example files on port 3000
- Enable CORS for cross-origin requests
- Forward any unhandled requests to the ProtectionServer running on port 8080

### Steps
1. **Install Node.js 18+**
2. **Go to the Examples folder**:
   ```sh
   cd Examples\Basic
   ```
3. **Start the proxy server**:
   ```sh
   npx http-server -p 3000 -cors -P http://localhost:8080
   ```
4. **Open your browser** and navigate to `http://localhost:3000`.

---

## Usage Notes
- When the browser loads your application, it will fetch the WebAssembly modules from the ProtectionServer.
- Make sure your firewall settings or any other security rules allow communication between the proxy server and the ProtectionServer.

---

## Directory Structure
- **ProtectionServer**: A static web server that securely provides the library files.
- **examples**: Contains working demos illustrating how to use Drawing inWeb in various scenarios.

To see additional examples or a live demo, visit:
[https://cloud.opendesign.com/examples/#/drawinginweb](https://cloud.opendesign.com/examples/#/drawinginweb)

---

**Thank you for choosing Drawing inWeb!**
