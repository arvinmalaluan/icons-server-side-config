const db_conn = require("../../Config/db.conn");

module.exports = {
  get_all: (query_variables, return_message) => {
    db_conn.query(
      `SELECT ${query_variables.fields} FROM ${query_variables.table_name} `,
      [],
      (error, results, fields) => {
        if (error) {
          return return_message(error);
        }

        return return_message(null, results);
      }
    );
  },

  get_w_condition: (query_variables, return_message) => {
    db_conn.query(
      `SELECT ${query_variables.fields} FROM ${query_variables.table_name} WHERE ${query_variables.condition}`,
      [],
      (error, results, fields) => {
        if (error) {
          return return_message(error);
        }
        console.log(results);
        return return_message(null, results);
      }
    );
  },

  post_: (query_variables, callBack) => {
    db_conn.query(
      `INSERT INTO ${query_variables.table_name}(${query_variables.fields}) VALUES (${query_variables.values})`,
      [],
      (error, results) => {
        if (error) {
          console.log(
            `INSERT INTO ${query_variables.table_name}(${query_variables.fields}) VALUES (${query_variables.values})`
          );
          return callBack(error);
        }

        return callBack(null, results);
      }
      );
    },

  patch_: (query_variables, callBack) => {
    db_conn.query(
      `UPDATE ${query_variables.table_name} SET ${query_variables.values} WHERE id = ${query_variables.id}`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  patchengage_: (query_variables, callBack) => {
    db_conn.query(
      `UPDATE ${query_variables.table_name} SET ${query_variables.values} WHERE community_post_fkid = ${query_variables.id}`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  delete_: (query_variables, callBack) => {
    db_conn.query(
      `DELETE FROM ${query_variables.table_name} WHERE community_post_fkid = ? AND account_fkid = ?`,
      [query_variables.id, query_variables.id1],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
},


  get_community_posts_using_joins: (query_variables, callBack) => {
    db_conn.query(
      `
      SELECT
          post.id AS post_id,
          post.title,
          post.author,
          post.timestamp,
          post.image,
          post.content,
          profile.name AS author_name,
          profile.location AS author_location,
          account.email AS account_email,
          SUM(CASE WHEN engagement.is_liked = 1 THEN 1 ELSE 0 END) AS like_count,
          SUM(CASE WHEN engagement.is_disliked = 1 THEN 1 ELSE 0 END) AS dislike_count,
          COUNT(DISTINCT comment.id) AS comment_count
      FROM
          tbl_community_post AS post
      INNER JOIN
          tbl_profile AS profile ON post.profile_fkid = profile.id
      INNER JOIN
          tbl_account AS account ON post.account_fkid = account.id
      LEFT JOIN
          tbl_engagement AS engagement ON post.id = engagement.community_post_fkid
      LEFT JOIN
          tbl_comment AS comment ON post.id = comment.community_post_fkid
      GROUP BY
          post.id, post.title, post.image,post.author, post.content, profile.name, profile.location, engagement.is_liked, engagement.is_disliked;
      `,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  get_count_engagement: (query_variables, callBack) => {
    
    db_conn.query(
      `
      SELECT is_liked, is_disliked, COUNT(*) AS count
      FROM tbl_engagement
      WHERE ${query_variables.condition}
      GROUP BY is_liked, is_disliked;
      `,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  get_community_posts_using_joins_with_condition: (
    query_variables,
    callBack
  ) => {
    db_conn.query(
      `
      SELECT
          post.id AS post_id,
          post.title,
          post.author,
          post.timestamp,
          post.content,
          profile.name AS author_name,
          profile.location AS author_location,
          account.email AS account_email,
          engagement.is_liked,
          engagement.is_disliked,
          COUNT(DISTINCT comment.id) AS comment_count
      FROM
          tbl_community_post AS post
      INNER JOIN
          tbl_profile AS profile ON post.profile_fkid = profile.id
      INNER JOIN
          tbl_account AS account ON post.account_fkid = account.id
      LEFT JOIN
          tbl_engagement AS engagement ON post.id = engagement.community_post_fkid
      LEFT JOIN
          tbl_comment AS comment ON post.id = comment.community_post_fkid
      GROUP BY
          post.id, post.title, post.author, post.content, profile.name, profile.location, engagement.is_liked, engagement.is_disliked
      HAVING ${query_variables.condition};
      `,
      [],
      (error, results, fields) => {
        if (error) {
          console.log(query_variables.condition);
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
};


