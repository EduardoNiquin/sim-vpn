async function obtenerIpYGenerarHtml() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const dataIp = await response.json();
      const ip = dataIp.ip;
  

      const apiKey = process.env.VPN_API_KEY; // Usa la variable de entorno
      const responseVpn = await fetch(`https://vpnapi.io/api/${ip}?key=${apiKey}`);
      const dataVpn = await responseVpn.json();
  
      const isp = dataVpn.network.autonomous_system_organization;

      const estadoVPN = dataVpn.security.vpn ? "PROTEGIDO" : "DESPROTEGIDO";
  
      return `
        <div class="ip-locator-bar">
          <span>Tu IP: ${ip}</span> · <span>ISP: ${isp}</span> · <span>Tu estado: ${estadoVPN}</span>
        </div>
      `;
    } catch (error) {
      console.error('Error al obtener la información:', error);
      return `
      <div class="ip-locator-bar">
        <span>Tu IP: 0.0.0.0</span> · <span>ISP: Default</span> · <span>Tu estado: Default</span>
      </div>
    `;
    }
  }
  
  async function verificarVPN(ip) {
    try {
      const response = await fetch(`https://vpnapi.io/api/${ip}?key=${apiKey}`);
      const data = await response.json();
      return data.security.vpn ? "PROTEGIDO" : "DESPROTEGIDO";
    } catch (error) {
      console.error('Error al verificar la VPN:', error);
      return "DESPROTEGIDO";
    }
  }
  
  export { obtenerIpYGenerarHtml, verificarVPN };
  