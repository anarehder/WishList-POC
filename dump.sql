--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: movies_review; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies_review (
    id integer NOT NULL,
    movie_id integer NOT NULL,
    stars integer NOT NULL,
    comments text NOT NULL
);


--
-- Name: moveis_review_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.moveis_review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: moveis_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.moveis_review_id_seq OWNED BY public.movies_review.id;


--
-- Name: wishlist_movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.wishlist_movies (
    id integer NOT NULL,
    name text NOT NULL,
    streaming text NOT NULL,
    genre text NOT NULL,
    status boolean DEFAULT false NOT NULL
);


--
-- Name: wishlist_movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.wishlist_movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: wishlist_movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.wishlist_movies_id_seq OWNED BY public.wishlist_movies.id;


--
-- Name: movies_review id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies_review ALTER COLUMN id SET DEFAULT nextval('public.moveis_review_id_seq'::regclass);


--
-- Name: wishlist_movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.wishlist_movies ALTER COLUMN id SET DEFAULT nextval('public.wishlist_movies_id_seq'::regclass);


--
-- Data for Name: movies_review; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies_review VALUES (1, 2, 5, 'Belo filme, emocionante! Vale a pena assistir de novo!');


--
-- Data for Name: wishlist_movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.wishlist_movies VALUES (1, 'A última música', 'netflix', 'drama', true);
INSERT INTO public.wishlist_movies VALUES (2, 'A vida e morte de charlie', 'netflix', 'drama', true);


--
-- Name: moveis_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.moveis_review_id_seq', 1, true);


--
-- Name: wishlist_movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.wishlist_movies_id_seq', 3, true);


--
-- Name: movies_review moveis_review_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies_review
    ADD CONSTRAINT moveis_review_pkey PRIMARY KEY (id);


--
-- Name: wishlist_movies wishlist_movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.wishlist_movies
    ADD CONSTRAINT wishlist_movies_pkey PRIMARY KEY (id);


--
-- Name: movies_review moveis_review_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies_review
    ADD CONSTRAINT moveis_review_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.wishlist_movies(id);


--
-- PostgreSQL database dump complete
--

