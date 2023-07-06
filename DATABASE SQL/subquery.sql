/* SUBQUERY */
select 
w.id,
wp.age,
w.coins_needed,
w.power
from wands w
join wands_property wp using(code)
where wp.is_evil='0' and (w.power,wp.age,w.coins_needed) in 
(select w.power,wp.age,min(w.coins_needed) from Wands w inner join Wands_Property wp using(code) where wp.is_evil='0'
group by w.power, wp.age 
order by w.power, wp.age)
 
order by w.power desc,wp.age desc

/* CTE Common Table Expression */
WITH Everyone AS (
select id,name,c_id
from (select h.hacker_id as id ,h.name as name ,count(c.challenge_id) as c_id from
hackers h 
join challenges c using(hacker_id) group by id,name order by c_id desc , id) as subq
    )
    
SELECT * FROM Everyone AS O
WHERE O.c_id = (SELECT MAX(I.c_id) FROM Everyone AS I) OR
1=(SELECT COUNT(*) FROM Everyone AS I WHERE I.c_id=O.c_id);


Penjelasan 
Kondisi pertama adalah O.c_id = (SELECT MAX(I.c_id) FROM Everyone AS I). 
Kondisi ini membandingkan nilai c_id dari setiap baris dengan nilai maksimum c_id yang ada dalam tabel sementara "Everyone". 
Jadi, baris-baris yang memiliki nilai c_id maksimum akan dipilih.

Kondisi kedua adalah 1=(SELECT COUNT(*) FROM Everyone AS I WHERE I.c_id=O.c_id). 
Kondisi ini menghitung jumlah baris dalam tabel sementara "Everyone" yang memiliki 
nilai c_id yang sama dengan baris saat ini (O.c_id). Jika jumlah tersebut adalah 1,
maka baris tersebut akan dipilih. 
Dalam kata lain, ini akan memilih baris-baris yang memiliki nilai c_id unik.
