BEGIN;

CREATE TABLE users (
    id SERIAL,
    username VARCHAR(55),
    email VARCHAR(150),
    password VARCHAR(150),
    UNIQUE (email, username),
    PRIMARY KEY (id)
);

CREATE TABLE posts(
    id SERIAL, 
    user_id INT,
    text_content TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE subreddits(
    id SERIAL,
    user_id INT,
    title VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
    id SERIAL,
    user_id INT,
    post_id INT,
    text_content TEXT,
    PRIMARY KEY (id, user_id, post_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);


CREATE TABLE subreddits_posts(
    subr_id INT,
    post_id INT,
    PRIMARY KEY (subr_id, post_id),
    FOREIGN KEY (subr_id) REFERENCES subreddits(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TYPE vote AS ENUM ('up', 'down');
CREATE TABLE user_vote_post(
    user_id INT,
    post_id INT,
    PRIMARY KEY (user_id, post_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

COMMIT;