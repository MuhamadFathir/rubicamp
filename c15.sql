-- case 1
select * from mahasiswa join jurusan using (kode_jurusan);

-- case 2
select nama_mahasiswa, umur from mahasiswa where umur < '20';

-- case 3.
select nama_mahasiswa, nilai from belajar join mahasiswa using (nim) where nilai <= 'B';

-- case 4
select nama_mahasiswa, sum(sks) as total_sks from belajar join mahasiswa using (nim) join mata_kuliah using (kode_matkul) group by nama_mahasiswa having sks > '10';

-- case 5
select nama_mahasiswa, nama_matkul from belajar join mahasiswa using (nim) join mata_kuliah using (kode_matkul) where nama_matkul like 'data mining';

-- case 6
select nama_dosen, count(distinct nim) as jumlah_mahasiswa from belajar join dosen using (id_dosen) join mahasiswa using (nim) group by id_dosen;

-- case 7
select nama_mahasiswa, umur from mahasiswa order by umur;

-- case 8
select * from belajar join mahasiswa using (nim) join jurusan using (kode_jurusan) join dosen using (id_dosen) where nilai like 'E' or nilai like 'D';
