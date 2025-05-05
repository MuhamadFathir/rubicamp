

create table jurusan (
    kode_jurusan character(5) primary key not null,
     nama_jurusan varchar(100) not null);

insert into jurusan values 
('62201', 'Akuntansi'), 
('23201', 'Arsitektur');

CREATE TABLE mahasiswa (
    nim character(4) primary key not null, nama_mahasiswa varchar(100) not null, 
    alamat varchar(100), kode_jurusan character(5) not null, 
    foreign key(kode_jurusan) references jurusan(kode_jurusan));

insert into mahasiswa (nim, nama_mahasiswa, alamat, kode_jurusan) values 
('7389', 'fathir', 'banten', '62201'),
('2536', 'iqbal', 'bandung', '23201'),
('5237', 'aria', 'sumedang', '62201');

CREATE TABLE mata_kuliah (
    kode_matkul character(6) primary key not null, 
    nama_matkul varchar(100) not null, SKS varchar(20) not null);

insert into mata_kuliah (kode_matkul, nama_matkul, sks) values 
('MT201', 'Matematika', '2'),
('BI101', 'bahasa indonesia', '2');

CREATE TABLE dosen (
    id_dosen character(4) primary key not null, 
    nama_dosen varchar(100) not null);

insert into dosen (id_dosen, nama_dosen) values 
('0001', 'indra'),
('0002', 'adrian');

create table belajar (
    id character(3) primary key not null, 
    nim character(4) not null, 
    kode_matkul character(6) not null, 
    nilai character(3) not null, 
    foreign key(nim) references mahasiswa(nim), 
    foreign key(kode_matkul) references mata_kuliah(kode_matkul)
);

insert into belajar values 
('001', '7389', 'MT201', '85'),
('002', '2536', 'MT201', '89'),
('003', '5237', 'BI101', '90');

create table mengajar (
    id character(2) primary key not null, 
    id_dosen character(4) not null, 
    kode_matkul character(6) not null, 
    foreign key(id_dosen) references dosen(id_dosen),
    foreign key(kode_matkul) references mata_kuliah(kode_matkul)
);

insert into mengajar values 
('01', '001', 'BI101'),
('02', '002', 'MT202');




