create table cantadas(
id serial primary key,
chamada varchar(255)not null,
paquera varchar(255) not null
)

insert into cantadas(chamada, paquera) values('oi, meu mel', 'vc já viu aquele filme? o místerio de benjaminha boca');
insert into cantadas(chamada, paquera) values('Dr. Sonic confirma!', 'Seu diagnóstico deu positivo para GOSTOSA');
insert into cantadas(chamada, paquera) values('ei meu anjo','se meu coração fosse uma favela, eu te dava um barraco');
insert into cantadas(chamada, paquera) values('que carinha mais linda vc tem','será que posso sentar nela?');

select * from public.cantadas 
