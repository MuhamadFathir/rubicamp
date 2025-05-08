-- case 1
select * from mahasiswa join jurusan using (kode_jurusan);

-- case 2
select nama_mahasiswa, umur from mahasiswa where umur < '20';

-- case 3
select nama_mahasiswa, nilai from mahasiswa join belajar using (nim) where nilai = 'A';

-- case 4
select nama_mahasiswa, sks from mahasiswa join mata_kuliah using (nim) where sks > '10';

-- case 5
select nama_mahasiswa, nama_matkul from mahasiswa join mata_kuliah using (nim) where nama_matkul = 'data mining';

-- case 6
select nama_dosen, count(nim) as jumlah_mahasiswa from belajar join dosen using(id_dosen) join mahasiswa using(nim) group by id_dosen;

-- case 7
select nama_mahasiswa, umur from mahasiswa order by umur;

-- case 8
select nama_mahasiswa, nama_matkul, nilai from mahasiswa join mata_kuliah using (nim) join belajar using (nim) where nilai = 'E' or nilai = 'D';

select * from belajar join mahasiswa using (nim) join jurusan using (kode_jurusan) join dosen using (id_dosen);

