const candidates = [
  { "name": "Nainar Nagenthran", "initials": "NN", "party": "BJP", "color": "#FF9933", "constituency": "Sattur", "age": 62, "education": "B.Com", "city": "Thoothukudi", "gender": "Male" },
  { "name": "Tamilisai Soundararajan", "initials": "TS", "party": "BJP", "color": "#FF9933", "constituency": "Mylapore", "age": 63, "education": "MBBS", "city": "Chennai", "gender": "Female" },
  { "name": "Vanathi Srinivasan", "initials": "VS", "party": "BJP", "color": "#FF9933", "constituency": "Coimbatore North", "age": 55, "education": "B.L.", "city": "Coimbatore", "gender": "Female" },

  { "name": "M. K. Stalin", "initials": "MS", "party": "DMK", "color": "#E53935", "constituency": "Kolathur", "age": 71, "education": "B.A.", "city": "Chennai", "gender": "Male" },
  { "name": "Udhayanidhi Stalin", "initials": "US", "party": "DMK", "color": "#E53935", "constituency": "Chepauk–Triplicane", "age": 46, "education": "B.Com", "city": "Chennai", "gender": "Male" },
  { "name": "K. N. Nehru", "initials": "KN", "party": "DMK", "color": "#E53935", "constituency": "Trichy West", "age": 68, "education": "B.A.", "city": "Trichy", "gender": "Male" },
  { "name": "Senthil Balaji", "initials": "SB", "party": "DMK", "color": "#E53935", "constituency": "Karur", "age": 48, "education": "B.Com", "city": "Karur", "gender": "Male" },

  { "name": "Edappadi K. Palaniswami", "initials": "EP", "party": "AIADMK", "color": "#2E7D32", "constituency": "Edappadi", "age": 70, "education": "B.Sc.", "city": "Salem", "gender": "Male" },
  { "name": "O. Panneerselvam", "initials": "OP", "party": "AIADMK", "color": "#2E7D32", "constituency": "Bodinayakanur", "age": 73, "education": "Intermediate", "city": "Theni", "gender": "Male" },
  { "name": "D. Jayakumar", "initials": "DJ", "party": "AIADMK", "color": "#2E7D32", "constituency": "Royapuram", "age": 63, "education": "B.Com", "city": "Chennai", "gender": "Male" },

  { "name": "Sowmiya Anbumani", "initials": "SA", "party": "PMK", "color": "#FFCC00", "constituency": "Dharmapuri", "age": 45, "education": "MBBS", "city": "Dharmapuri", "gender": "Female" },
  { "name": "K. Balu", "initials": "KB", "party": "PMK", "color": "#FFCC00", "constituency": "Thiruporur", "age": 50, "education": "B.L.", "city": "Chengalpattu", "gender": "Male" },

  { "name": "T. Ramachandran", "initials": "TR", "party": "INC", "color": "#1976D2", "constituency": "Aranthangi", "age": 45, "education": "B.E.", "city": "Pudukottai", "gender": "Male" },
  { "name": "Lenin Prasath", "initials": "LP", "party": "INC", "color": "#1976D2", "constituency": "Thuraiyur", "age": 36, "education": "Engineering", "city": "Trichy", "gender": "Male" },

  { "name": "C. Vijay", "initials": "VJ", "party": "TVK", "color": "#6A1B9A", "constituency": "Perambur", "age": 51, "education": "High School", "city": "Chennai", "gender": "Male" },
  
  { "name": "Duraimurugan", "initials": "DM", "party": "DMK", "color": "#E53935", "constituency": "Katpadi", "age": 85, "education": "B.L.", "city": "Vellore", "gender": "Male" },
  { "name": "Ma. Subramanian", "initials": "MS", "party": "DMK", "color": "#E53935", "constituency": "Saidapet", "age": 64, "education": "B.Sc.", "city": "Chennai", "gender": "Male" },
  { "name": "Thangam Thennarasu", "initials": "TT", "party": "DMK", "color": "#E53935", "constituency": "Tiruchuli", "age": 57, "education": "PhD", "city": "Virudhunagar", "gender": "Male" },

  { "name": "S. P. Velumani", "initials": "SV", "party": "AIADMK", "color": "#2E7D32", "constituency": "Thondamuthur", "age": 54, "education": "B.E.", "city": "Coimbatore", "gender": "Male" },
  { "name": "K. P. Munusamy", "initials": "KM", "party": "AIADMK", "color": "#2E7D32", "constituency": "Krishnagiri", "age": 65, "education": "B.A.", "city": "Krishnagiri", "gender": "Male" },
  { "name": "C. Ve. Shanmugam", "initials": "CS", "party": "AIADMK", "color": "#2E7D32", "constituency": "Villupuram", "age": 61, "education": "B.L.", "city": "Villupuram", "gender": "Male" },

  { "name": "Annamalai K", "initials": "AK", "party": "BJP", "color": "#FF9933", "constituency": "Coimbatore South", "age": 40, "education": "IPS, MBA", "city": "Coimbatore", "gender": "Male" },
  { "name": "H. Raja", "initials": "HR", "party": "BJP", "color": "#FF9933", "constituency": "Karaikudi", "age": 66, "education": "B.Sc.", "city": "Sivaganga", "gender": "Male" },

  { "name": "K. S. Alagiri", "initials": "KA", "party": "INC", "color": "#1976D2", "constituency": "Sriperumbudur", "age": 62, "education": "B.A.", "city": "Chennai", "gender": "Male" },
  { "name": "Jothimani S", "initials": "JS", "party": "INC", "color": "#1976D2", "constituency": "Karur", "age": 48, "education": "M.A.", "city": "Karur", "gender": "Female" },

  { "name": "Dr. Anbumani Ramadoss", "initials": "AR", "party": "PMK", "color": "#FFCC00", "constituency": "Pennagaram", "age": 56, "education": "MBBS", "city": "Dharmapuri", "gender": "Male" },
  { "name": "G. K. Mani", "initials": "GM", "party": "PMK", "color": "#FFCC00", "constituency": "Mettur", "age": 71, "education": "B.A.", "city": "Salem", "gender": "Male" },

  { "name": "Kamal Haasan", "initials": "KH", "party": "MNM", "color": "#6A1B9A", "constituency": "Coimbatore South", "age": 69, "education": "High School", "city": "Coimbatore", "gender": "Male" },
  { "name": "R. Mahendran", "initials": "RM", "party": "MNM", "color": "#6A1B9A", "constituency": "Singanallur", "age": 53, "education": "MBA", "city": "Coimbatore", "gender": "Male" },

  { "name": "T. Velmurugan", "initials": "TV", "party": "TVK", "color": "#6A1B9A", "constituency": "Panruti", "age": 55, "education": "B.A.", "city": "Cuddalore", "gender": "Male" },
  { "name": "R. Arul", "initials": "RA", "party": "TVK", "color": "#6A1B9A", "constituency": "Madurai Central", "age": 44, "education": "B.Com", "city": "Madurai", "gender": "Male" }

]