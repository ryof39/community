alter table comment modify commentator BIGINT not null comment '评论人id';

alter table question modify creator bigint not null;