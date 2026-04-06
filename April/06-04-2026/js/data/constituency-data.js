const constituencies = [
  { constituency: "Harbour", district: "Chennai", type: "General", voters: 234567, candidates: ["DMK", "AIADMK"] },
  { constituency: "Chepauk-Triplicane", district: "Chennai", type: "General", voters: 256789, candidates: ["DMK", "AIADMK"] },
  { constituency: "Thousand Lights", district: "Chennai", type: "General", voters: 198456, candidates: ["DMK"] },
  { constituency: "Anna Nagar", district: "Chennai", type: "General", voters: 287654, candidates: [] },
  { constituency: "Virugambakkam", district: "Chennai", type: "General", voters: 267890, candidates: ["AIADMK"] },
  { constituency: "Saidapet", district: "Chennai", type: "General", voters: 234123, candidates: ["DMK"] },
  { constituency: "T. Nagar", district: "Chennai", type: "General", voters: 245678, candidates: [] },
  { constituency: "Mylapore", district: "Chennai", type: "General", voters: 212345, candidates: ["BJP"] },
  { constituency: "Velachery", district: "Chennai", type: "General", voters: 298765, candidates: [] },
  { constituency: "Sholinganallur", district: "Chennai", type: "General", voters: 312456, candidates: ["DMK", "AIADMK"] },

  { constituency: "Maduravoyal", district: "Chennai", type: "General", voters: 221345, candidates: ["DMK"] },
  { constituency: "Ambattur", district: "Chennai", type: "General", voters: 276543, candidates: ["AIADMK"] },
  { constituency: "Avadi", district: "Chennai", type: "General", voters: 301234, candidates: ["DMK", "PMK"] },
  { constituency: "Tiruvottiyur", district: "Chennai", type: "General", voters: 245123, candidates: ["DMK"] },
  { constituency: "Royapuram", district: "Chennai", type: "General", voters: 219876, candidates: ["AIADMK"] },

  { constituency: "Coimbatore North", district: "Coimbatore", type: "General", voters: 278654, candidates: ["BJP"] },
  { constituency: "Coimbatore South", district: "Coimbatore", type: "General", voters: 289765, candidates: ["BJP", "DMK"] },
  { constituency: "Singanallur", district: "Coimbatore", type: "General", voters: 254321, candidates: ["AIADMK"] },
  { constituency: "Sulur", district: "Coimbatore", type: "General", voters: 243567, candidates: [] },
  { constituency: "Kinathukadavu", district: "Coimbatore", type: "General", voters: 198765, candidates: ["DMK"] },

  { constituency: "Madurai Central", district: "Madurai", type: "General", voters: 267890, candidates: ["DMK"] },
  { constituency: "Madurai East", district: "Madurai", type: "General", voters: 256789, candidates: ["AIADMK"] },
  { constituency: "Madurai West", district: "Madurai", type: "General", voters: 245678, candidates: [] },
  { constituency: "Thiruparankundram", district: "Madurai", type: "General", voters: 234567, candidates: ["DMK"] },
  { constituency: "Melur", district: "Madurai", type: "General", voters: 210987, candidates: ["AIADMK"] },

  { constituency: "Salem North", district: "Salem", type: "General", voters: 223456, candidates: ["DMK"] },
  { constituency: "Salem South", district: "Salem", type: "General", voters: 234567, candidates: ["AIADMK"] },
  { constituency: "Edappadi", district: "Salem", type: "General", voters: 245678, candidates: ["AIADMK"] },
  { constituency: "Omalur", district: "Salem", type: "General", voters: 198765, candidates: [] },
  { constituency: "Mettur", district: "Salem", type: "General", voters: 210123, candidates: ["DMK"] },

  { constituency: "Trichy East", district: "Tiruchirappalli", type: "General", voters: 234567, candidates: ["DMK"] },
  { constituency: "Trichy West", district: "Tiruchirappalli", type: "General", voters: 223456, candidates: ["AIADMK"] },
  { constituency: "Srirangam", district: "Tiruchirappalli", type: "General", voters: 256789, candidates: ["AIADMK"] },
  { constituency: "Thiruverumbur", district: "Tiruchirappalli", type: "General", voters: 212345, candidates: ["DMK"] },

  { constituency: "Tirunelveli", district: "Tirunelveli", type: "General", voters: 245678, candidates: ["DMK"] },
  { constituency: "Palayamkottai", district: "Tirunelveli", type: "General", voters: 234567, candidates: ["AIADMK"] },
  { constituency: "Ambasamudram", district: "Tirunelveli", type: "General", voters: 198765, candidates: [] },

  { constituency: "Erode East", district: "Erode", type: "General", voters: 223456, candidates: ["DMK"] },
  { constituency: "Erode West", district: "Erode", type: "General", voters: 234567, candidates: ["AIADMK"] },
  { constituency: "Perundurai", district: "Erode", type: "General", voters: 210987, candidates: [] },

  { constituency: "Vellore", district: "Vellore", type: "General", voters: 245678, candidates: ["DMK"] },
  { constituency: "Katpadi", district: "Vellore", type: "General", voters: 234567, candidates: ["AIADMK"] },

  { constituency: "Kanchipuram", district: "Kanchipuram", type: "General", voters: 256789, candidates: ["DMK"] },
  { constituency: "Sriperumbudur", district: "Kanchipuram", type: "General", voters: 278654, candidates: ["AIADMK"] },

  { constituency: "Villupuram", district: "Villupuram", type: "General", voters: 223456, candidates: ["DMK"] },
  { constituency: "Tindivanam", district: "Villupuram", type: "General", voters: 234567, candidates: ["AIADMK"] },

  { constituency: "Dharmapuri", district: "Dharmapuri", type: "General", voters: 198765, candidates: ["PMK"] },
  { constituency: "Krishnagiri", district: "Krishnagiri", type: "General", voters: 210987, candidates: ["AIADMK"] },

  { constituency: "Karur", district: "Karur", type: "General", voters: 223456, candidates: ["DMK"] },
  { constituency: "Namakkal", district: "Namakkal", type: "General", voters: 234567, candidates: ["AIADMK"] }
];