create table comment
(
    id BIGINT auto_increment,
    parent_id BIGINT not null comment '父类id',
    type int not null comment '父类类型',
    commentator int not null comment '评论人id',
    gmt_create BIGINT not null comment '创建时间',
    gmt_modified BIGINT not null,
    like_count BIGINT default 0 null,
    constraint comment_pk
        primary key (id)
);