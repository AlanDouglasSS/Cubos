/*select distinct valor, origem 
	select distinct composicao AS valor, 'composicao' AS origem
  from musicas
  union all
  select distinct compositor AS valor, 'compositor' AS origem
  from musicas
)as subquery;*/

/*
select compositor
from musicas 
where id = 3
*/

/*
select composicao, id 
from musicas 
where compositor = 'Schubert'
*/

/*
select composicao, id 
from musicas 
where compositor = 'Schubert' 
limit 10
*/

/*
select composicao, id 
from musicas
where compositor = 'Schubert'
and id between 5 and 8
limit 10;
*/

select composicao, id 
from musicas 
where composicao 
like '%B-flat major'
and id between 50 and 150
limit 10
