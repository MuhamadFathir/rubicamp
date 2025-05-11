sqlite3 university.db

create table jurusan (
    kode_jurusan character(5) primary key not null,
     nama_jurusan varchar(100) not null);

insert into jurusan values 
('62201', 'Akuntansi'), 
('23201', 'Arsitektur');

CREATE TABLE mahasiswa (
    nim character(4) primary key not null, nama_mahasiswa varchar(100) not null, 
    alamat varchar(100), kode_jurusan character(5) not null, 
    umur varchar(2) not null, 
    foreign key(kode_jurusan) references jurusan(kode_jurusan));

insert into mahasiswa (nim, nama_mahasiswa, alamat, kode_jurusan, umur) values 
('7389', 'fathir', 'banten', '62201', '18'),
('2536', 'iqbal', 'bandung', '23201', '20'),
('5237', 'aria', 'sumedang', '62201', '19');

CREATE TABLE mata_kuliah (
    kode_matkul character(3) primary key not null, 
    nama_matkul varchar(100) not null, 
    SKS varchar(20) not null);

insert into mata_kuliah (kode_matkul, nama_matkul, sks) values 
('001', 'Matematika', '12'),
('002', 'data mining', '10'),
('003', 'data mining', '12');


CREATE TABLE dosen (
    id_dosen character(4) primary key not null, 
    nama_dosen varchar(100) not null);

insert into dosen (id_dosen, nama_dosen) values 
('0001', 'indra'),
('0002', 'adrian');

create table belajar (
    id character(3) primary key not null, 
    nim character(4) not null, 
    id_dosen character(4) not null, 
    kode_matkul character(6) not null, 
    nilai character(3) not null, 
    foreign key(id_dosen) references dosen(id_dosen),
    foreign key(nim) references mahasiswa(nim), 
    foreign key(kode_matkul) references mata_kuliah(kode_matkul)
);

insert into belajar values 
('001', '7389', '0001', '001', 'A'),
('002', '2536', '0001', '002', 'C'),
('003', '5237', '0002', '003', 'D');








