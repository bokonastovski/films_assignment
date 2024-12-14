import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_FILMS } from "../queries";
import { Film } from "../types";
import { formatDate } from "../utils";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";
import { Input, Select, Row, Col, Card } from "antd";
const { Option } = Select;

const FilmsList: React.FC = () => {
  const { loading, error, data } = useQuery<{ allFilms: { films: Film[] } }>(
    GET_FILMS
  );
  const { language } = useLanguage();
  const t = translations[language];

  const [visibleFilms, setVisibleFilms] = useState<Film[]>([]);
  const [directorFilter, setDirectorFilter] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<number | string>("");
  const [sortBy, setSortBy] = useState<"title" | "releaseDate">("title");
  const [nextIndex, setNextIndex] = useState(4);

  const handleLoadMore = () => {
    setNextIndex((prevIndex) => prevIndex + 4);
  };

  useEffect(() => {
    if (data && data.allFilms.films) {
      let films = [...data.allFilms.films];

      if (directorFilter) {
        films = films.filter((film) =>
          film.director.toLowerCase().includes(directorFilter.toLowerCase())
        );
      }

      if (yearFilter) {
        const year = Number(yearFilter);
        films = films.filter(
          (film) => new Date(film.releaseDate).getFullYear() === year
        );
      }

      films = films.sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }
        return (
          new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
        );
      });

      setVisibleFilms(films.slice(0, nextIndex));
    }
  }, [data, directorFilter, yearFilter, sortBy, nextIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const filmsLength = data?.allFilms?.films?.length ?? 0;
      const bottom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;

      if (bottom && !loading && visibleFilms.length < filmsLength) {
        handleLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, visibleFilms, data]);

  if (loading) return <p className="white-color">Loading...</p>;
  if (error) return <p className="white-color">Error: {error.message}</p>;
  if (!data || !data.allFilms || !data.allFilms.films) {
    return <p>{t.noFilms}</p>;
  }

  return (
    <div>
      <div className="margin-8 ">
        <label className="white-color">{t.director}:</label>
        <Input
          style={{ backgroundColor: "#b8c1ec" }}
          className="margin-1-rem"
          value={directorFilter}
          onChange={(e) => setDirectorFilter(e.target.value)}
          placeholder={t.director}
        />
        <label className="white-color">{t.releaseDate}:</label>
        <Input
          style={{ backgroundColor: "#b8c1ec" }}
          className="margin-1-rem"
          type="number"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          placeholder={t.releaseDate}
        />
      </div>

      <div className="margin-8">
        <label className="white-color margin-right-1rem">{t.sortBy}:</label>
        <Select
          style={{ backgroundColor: "#b8c1ec", borderRadius: "4px" }}
          className="margin-1-rem"
          value={sortBy}
          onChange={(value) => setSortBy(value as "title" | "releaseDate")}
        >
          <Option value="title">{t.title}</Option>
          <Option value="releaseDate">{t.releaseDate}</Option>
        </Select>
      </div>

      <Row gutter={[16, 16]} style={{ margin: 0 }}>
        {visibleFilms.map((film) => (
          <Col span={12} xs={24} sm={12} key={film.id}>
            <Card
              className="purple-bg-color  dark-blue-color"
              title={`Episode ${film.episodeID}: ${film.title}`}
              bordered
            >
              <p>
                <strong>{t.director}:</strong> {film.director}
              </p>
              <p>
                <strong>{t.releaseDate}:</strong> {formatDate(film.releaseDate)}
              </p>
              <p>
                <strong>{t.producers}:</strong> {film.producers.join(", ")}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FilmsList;
