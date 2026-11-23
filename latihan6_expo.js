import React from "react";
import { View, Text } from "react-native";

const JudulApklikasi = () => {
  return "Aplikasi Data Siswa SMK";
};

const KartuSiswa = ({ nama, kelas }) => {
  return (
    <View style={{ padding: 15, marginTop: 10, backgroundColor: "#DCFCE7" }}>
      <Text>Nama Siswa: {nama}</Text>
      <Text>kelas: {kelas}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ padding: 25, marginTop: 40 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Aplikasi Data Siswa SMK
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        Daftar Siswa
      </Text>

      <KartuSiswa nama="Budi Santoso" kelas="11 rpl 911" />
      <KartuSiswa nama="Siti Aminah" kelas="12 rpl 67" />
      <KartuSiswa nama="Rafif Ruyan" kelas="12 rpl 177013" />
    </View>
  );
}
