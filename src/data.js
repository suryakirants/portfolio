// ALL editable content lives here. Links below were read from your resume PDF.
const B = import.meta.env.BASE_URL
export const links = {
  github: 'https://github.com/suryakirants',
  linkedin: 'https://www.linkedin.com/in/suryakirants/',
  email: 'suryakirants3157@gmail.com',
  resume: B + 'resume/Suryakiran_TS_Cyber_Security_Resume.pdf',
  location: 'Ernakulam, Kerala, India',
}
export const available = true // set false to change the hero status text
export const img = (n) => B + 'images/' + n + '.webp'

export const skills = {
  'SOC & SIEM': [
    ['Splunk', 'SPL', 'SIEM searches and log analysis in lab environments.'],
    ['Wazuh', 'WZ', 'Endpoint monitoring and alerting in training labs.'],
    ['SIEM Monitoring', 'SM', 'Watching dashboards and alerts for suspicious activity.'],
    ['Log Analysis', 'LG', 'Reading system and application logs for evidence.'],
    ['Alert Triage', 'AT', 'Sorting alerts by relevance and severity.'],
    ['Incident Reporting', 'IR', 'Writing clear findings from an investigation.'],
  ],
  'Digital Forensics': [
    ['Autopsy', 'AU', 'Disk and file system analysis of acquired images.'],
    ['FTK Imager', 'FTK', 'Forensic disk imaging in RAW, E01 and AFF.'],
    ['Evidence Hashing', '#', 'Verifying integrity of files and images.'],
    ['File System Analysis', 'FS', 'Examining file structures and artefacts.'],
    ['Malware Detection', 'MD', 'Spotting malicious files with hashes and scans.'],
    ['Forensic Reports', 'RPT', 'Documenting evidence and conclusions.'],
  ],
  'Network & AppSec': [
    ['Wireshark', 'WS', 'Packet capture and network traffic analysis.'],
    ['Nmap', 'NM', 'Host discovery and vulnerability scanning.'],
    ['Burp Suite', 'BS', 'Web application testing practice with PortSwigger.'],
    ['Kali Linux', 'KL', 'Security toolkit environment for labs.'],
    ['Vulnerability Assessment', 'VA', 'Finding and describing weaknesses.'],
    ['Cryptography', 'CR', 'Hashing and encryption fundamentals.'],
  ],
  'Programming & OS': [
    ['Python', 'PY', 'Used to build the security tools in my projects.'],
    ['Windows', 'WIN', 'Daily operating system and event log source.'],
    ['Kali Linux', 'KL', 'Linux command line for security work.'],
  ],
}
export const projects = [
  { id: 'FileSentinel', sub: 'Insider Threat Detection System', tags: ['Access control', 'Logging', 'Alerts', 'Watermarking'], text: 'Monitors employee file activity and detects insider threats using access control, logging, alerts and watermark-based tracking.', icon: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.500-1 8-4 8-9V6z M9 12l2 2 4-4' },
  { id: 'CipherTrace', sub: 'File Forensic Analysis Toolkit', tags: ['Hashing', 'Malware detection', 'Encryption', 'Reports'], text: 'A forensic tool for file hashing, malware detection, encryption/decryption and automated report generation.', icon: 'M7 11V8a5 5 0 0 1 10 0v3 M5 11h14v10H5z M12 15v2' },
  { id: 'PhishGuard', sub: 'Phishing Detection & Monitoring', tags: ['Honeypot', 'Login traps', 'Attacker behaviour'], text: 'Simulated login traps and honeypot credentials to capture and analyze attacker behaviour.', icon: 'M3 12c3-6 15-6 18 0-3 6-15 6-18 0z M12 9.500a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5' },
  { id: 'Cyber Toolkit', sub: 'Security Tools Platform', tags: ['Nmap', 'Dirsearch', 'Hashing', 'Visualization'], text: 'Integrates Nmap, Dirsearch and hashing tools with result visualization and report generation.', icon: 'M4 5h16v11H4z M8 20h8 M12 16v4 M8 9l2 2-2 2 M12 13h4' },
]
export const repo = (p) => links.github // add per-project URLs here, e.g. { FileSentinel: 'https://github.com/...' }
export const labs = [
  ['SOC & SIEM Investigation', 'Splunk, Wazuh', 'Monitoring and log analysis with Splunk and Wazuh.'],
  ['Disk Imaging & Forensics', 'FTK Imager, Autopsy', 'Disk imaging in RAW, E01 and AFF, analysed in Autopsy and FTK Imager.'],
  ['Network Traffic Analysis', 'Wireshark, Nmap', 'Network analysis and vulnerability scanning.'],
  ['Web Application Testing', 'Burp Suite', 'Practice on PortSwigger labs with Burp Suite.'],
]
export const education = [
  ['M.Sc. Cyber Forensics', 'KMM College of Arts & Science, Thrikkakara', '2024 – 2026', 'A Grade, 2nd Rank, MG University'],
  ['B.Sc. Cyber Forensics', 'KMM College of Arts & Science, Thrikkakara', '2021 – 2024', 'A+ Grade, 5th Rank, MG University'],
  ['PGP in Cyber Forensics', 'Blitz Academy', 'Training', 'EC-Council CEH, SOC and CHFI training'],
]
