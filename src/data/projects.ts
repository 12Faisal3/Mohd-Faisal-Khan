export const projects = [
  {
    title: "ASIC Tapeout",
    subtitle: "Full-Custom ASIC Tapeout - SCL 180nm, MeitY C2S Program, 2024",
    description:
      "Led end-to-end RTL-to-GDSII implementation of a custom CORDIC-based accelerator core (Chip ID: C2S0158) at Semiconductor Laboratory, Chandigarh.",
    highlights: [
      "Timing closure and power signoff with Cadence Genus and Innovus",
      "Clean DRC/LVS verification using Calibre",
      "Synthesis, floorplanning, placement, CTS, routing, STA, and post-layout verification"
    ]
  },
  {
    title: "Edge AI Acceleration",
    subtitle: "",
    description:
      "Designed a mixed-precision SIMD/CORDIC accelerator with INT4-FP32 and Posit-8 support. Integrated quantization-aware training, structured pruning, and approximate arithmetic, then implemented and validated the RTL on FPGA.",
    highlights: []
  },
  {
    title: "Defence Surveillance Pipeline",
    subtitle: "",
    description:
      "Designed a multi-spectral AI pipeline for image restoration, object detection, and classification under a DRDO project. The FPGA/GPU system targeted at least 30 FPS at under 15W with runtime-adaptive INT8, FP16, and Posit-8 precision.",
    highlights: []
  },
  {
    title: "PV Nowcasting",
    subtitle: "",
    description:
      "Developed a pruned and quantized CNN using real-time sky images for L&T, achieving RMSE approximately 2.5 and MAE approximately 1.6 with sub-second FPGA inference.",
    highlights: []
  },
  {
    title: "IoT Air-Quality Monitoring",
    subtitle: "",
    description:
      "Built a real-time pollution monitoring system with ESP8266, MQTT, ThingSpeak cloud integration, and dashboard visualization.",
    highlights: []
  }
];
