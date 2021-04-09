package life.majiang.community.mapper;

import life.majiang.community.controller.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    @Insert("INSERT into USER (name,account_id,token,gmt_create,gmt_modified,avatar_url) values (#{name},#{accountId},#{token},#{gmtCreate},#{gmtModified},#{avatarUrl})")
    void insert(User user);

    @Select("SELECT * from user where token = #{token}")
    User findByToken(@Param("token") String token);

    @Select("SELECT * from user where id = #{id}")
    User findById(@Param("id") Integer id);
}
