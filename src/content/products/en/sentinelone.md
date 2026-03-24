---
title: "SentinelOne"
description: "Next-gen XDR architecture providing real-time prevention, detection, and response."
lang: "en"
order: 2
logo: "/products/sentinelone.webp"
---

SentinelOne uses artificial intelligence and machine learning to stop threats autonomously.

### SentinelOne architecture is built on three core principles:
*   **Single Agent:** A unified, lightweight agent architecture for all endpoints that reduces deployment and management complexity.
*   **Autonomous Decision-Making:** Local AI that detects and blocks threats directly at the endpoint with zero latency, independent of cloud connectivity.
*   **Unified Data Plane (Singularity Data Lake):** Ingests endpoint, cloud, and identity data into a single data lake for cross-domain analysis and holistic threat hunting.

---

## 1. Platform Architecture and Security Components
SentinelOne offers a multi-layered security architecture. The "single agent — multiple engines" architecture operates at the OS kernel level, monitoring file system, process, and memory activities in real-time.

### Resource Efficiency
The lightweight SentinelOne agent is optimized not to adversely affect endpoint performance:
- **CPU Usage:** 0–4%
- **Memory Usage:** ~20MB
- **Disk Space:** ~200MB

### Autonomous Endpoint Intelligence
The most critical architectural feature is its ability to run detection and response logic locally. This "on-agent" intelligence can detect and block threats even without an internet connection, which is critical especially for isolated networks or critical infrastructure.

---

## 2. Multi-Layered Threat Detection Engines
SentinelOne analyzes files and processes in two main stages to provide protection against zero-day threats and signatureless attacks:
1.  **Static AI Engine (Pre-Execution):** Activates before files are run. It proactively blocks malicious software by evaluating file structure and code features without requiring signatures or hashes.
2.  **Behavioral AI Engine (On-Execution):** Monitors API calls, network connections, and system changes in real-time after a process is launched. It is specifically designed to detect fileless attacks and "Living off the Land" (LotL) techniques.

---

## 3. Contextual Analysis: Storyline™ Technology
Patented Storyline™ technology automatically correlates thousands of raw EDR events into a single actionable attack story. Every event is tagged with a "Storyline ID," allowing analysts to see the attack chain from beginning to end in a single visual interface, reducing Root Cause Analysis (RCA) to seconds.

---

## 4. Incident Response and Security Automation
SentinelOne provides advanced tools to quickly neutralize threats and return systems to a clean state.

-   **Isolate Device:** Instantly disconnects a device from the network upon critical threat detection, but keeps the management console connection open to prevent lateral movement.
-   **1-Click Remediation & Rollback:** Uses Windows VSS (Volume Shadow Copy) infrastructure to undo ransomware damage. It rolls back all system changes and files associated with a malicious Storyline to their clean state immediately preceding the attack.
-   **STAR Rules (Storyline Active Response):** Allows teams to create custom detection and response rules.
-   **Deep Visibility and S1QL:** Telemetry data is stored for 14–90 days and can be queried using the simplified S1QL language.

---

## 5. Autonomous SOC: Purple AI and Hyperautomation
-   **Purple AI:** An AI security analyst embedded within the platform. It offers natural language querying and automated triage capabilities, reducing Mean Time to Repair (MTTR) by up to 55%.
-   **Singularity Hyperautomation:** A no-code automation engine that allows creating complex security playbooks with a drag-and-drop interface.
-   **AI-SIEM:** Runs on the Singularity Data Lake, algorithmically detecting abnormal patterns.

---

## 6. Extended Detection and Response (XDR) Capabilities
SentinelOne extends protection across the entire enterprise attack surface:
-   **Singularity Cloud Security (CNAPP):** Combines CWPP (runtime protection with eBPF technology) and CSPM features.
-   **Singularity Identity Security (ITDR):** Protects Active Directory and Azure AD.
-   **RemoteOps Forensics:** Enables remote digital forensics analysis across thousands of endpoints.

---

## 7. Licensing and Ecosystem
SentinelOne offers a flexible model based on enterprise needs:
-   **Core:** Basic NGAV features.
-   **Control:** Device and firewall management.
-   **Complete:** Advanced EDR, behavioral AI, and RemoteOps.
-   **Commercial:** Includes ITDR and WatchTower threat hunting.
-   **Enterprise:** Full scale with Purple AI and specialized modules.

---

The SentinelOne Singularity Platform is not just a security tool, but a strategic partner in digital transformation. It achieves 100% success in MITRE ATT&CK tests while generating 88% fewer alerts than the industry average, pushing SOC efficiency to its peak.
