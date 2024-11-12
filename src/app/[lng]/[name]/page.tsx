"use client";
import values from "@/values";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Moviedata {
  Poster?: string;
  Title?: string;
  Genre?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  imdbID?: string;
  Type?: string;
  BoxOffice?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  HdUrl?: string;
  LowUrl?: string;
  FullHdUrl?: string;
  QhdUrl?: string;
}

export default function Single() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Moviedata>({});
  const id = searchParams.get("id");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`${values.url}/movie/get?id=${id}`);
      setData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="single">
      <div className="container">
        <h1>{data?.Title}</h1>
        <div className="single-body">
          <div className="single-body-left">
            <Image
              src={data?.Poster || ""}
              width={1000}
              height={1000}
              alt={data?.Title || ""}
            />
          </div>
          <div className="single-body-right">
            <div className="top">
              <h4>{data?.Title}</h4>
              <span className="genre">{data?.Genre}</span>
              <span>{data?.Language}</span>
            </div>
            <div className="mid">
              <span>
                <b>Country:</b> {data?.Country}
              </span>
              <span>
                <b>Awards:</b> {data?.Awards}
              </span>
              <span>
                <b>imdbID:</b> {data?.imdbID}
              </span>
              <span>
                <b>Type:</b> {data?.Type}
              </span>
              <span>
                <b>BoxOffice:</b> {data?.BoxOffice}
              </span>
              <span>
                <b>Year:</b> {data?.Year}
              </span>
              <span>
                <b>Rated:</b> {data?.Rated}
              </span>
              <span>
                <b>Released:</b> {data?.Released}
              </span>
              <span>
                <b>Runtime:</b> {data?.Runtime}
              </span>
              <span>
                <b>Director:</b> {data?.Director}
              </span>
              <span>
                <b>Writer:</b> {data?.Writer}
              </span>
              <span>
                <b>Actors:</b> {data?.Actors}
              </span>
              <span>
                <b>Plot:</b> {data?.Plot}
              </span>
            </div>
            <div className="bottom">
              <h3>Download Links</h3>

              <div className="bottom-body">
                {data?.LowUrl && (
                  <a className="btn" target="_blank" href={data?.LowUrl}>
                    Download 420p
                  </a>
                )}

                {data?.HdUrl && (
                  <a className="btn" target="_blank" href={data?.HdUrl}>
                    Download HD
                  </a>
                )}

                {data?.FullHdUrl && (
                  <a className="btn" target="_blank" href={data?.FullHdUrl}>
                    Download Full HD
                  </a>
                )}

                {data?.QhdUrl && (
                  <a className="btn" target="_blank" href={data?.QhdUrl}>
                    Download QHD
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
