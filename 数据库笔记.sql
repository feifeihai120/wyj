-- 分组函数:作用于一组数据并返回一个你想要的值
-- 分别有avg sum min max count(个数) wm_concat(行转列:同一个条件下不同数据可以采取行的形式呈现出来) distinct(去掉重复值)   这些函数会自动忽略空值，可以使用nvl函数使其无法忽略空值
-- nvl(a,b)如果a为空则返回b，否则返回a
-- select列表中没有在组函数中的列(属性)都应该包含在group by语句中，而在group by中的列不需要在select中。groupby语句加强：group by rollup(a,b)//以ab列分组后再以a分组再不分组显示出结果
-- having:过滤分组内容(与where类似) 区别:where后面不可使用组函数。从效率上来说，尽量使用where
-- 左(右)外连接，为了防止等值连接条件不成立而忽略的数据。分别对应着显示出左(右)表的数据；写法:在右(左)表的连接条件后加上(+)
-- 最好使用层次查询来代替自连接(效率低，笛卡尔积过大，不适合大表)//关键字 connect by；start with(具体用到再说)
select count(distinct shuxing) from table










/*
sql语句的执行顺序(序号标注)
1  (8)SELECT  (9) DISTINCT (11)  
2  (1)  FROM  
3  (3) JOIN  
4  (2) ON  
5  (4) WHERE  
6  (5) GROUP BY  
7  (6) WITH {CUBE | ROLLUP} 
8  (7) HAVING  
9 (10) ORDER BY
*/



/*select * from table
insert into table('','') values('','')
delete from table where 
update table set colume = values where*/	