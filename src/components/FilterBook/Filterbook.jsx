import axios from "axios";
import { useEffect, useState } from "react";
import {
  CategoryBox,
  CategoryCard,
  CategoryCardBody,
  CategoryCardPr,
  CategoryCardsBox,
  CategoryCardTitle,
  CategoryCardTop,
  CategoryCardTopImg,
  CategoryFilter,
  CategoryNavLink,
  CategoryTitle,
} from "../CategoriesBooks/category.style";

export const FilTerBooks = ({ id }) => {
  const [PoetData, setPoetData] = useState([]);

  const GetPoet = async () => {
    const data = await axios.get("http://localhost:5000/book/genreId/" + id);
    if (data.status === 201) {
      // localStorage.setItem("poet", JSON.stringify(data.data));
      setPoetData(data.data);
    }
  };
  useEffect(() => {
    GetPoet();
  }, []);

  return (
    <>
      {PoetData.length ? (
        <>
          {PoetData.map((book) => (
            <>
              {" "}
              <CategoryCard
                to={"/bookabout" + book.genre_id + "_" + book.title}
              >
                <CategoryCardTop>
                  <CategoryCardTopImg
                    src={"http://localhost:5000/" + book.image}
                    alt="catd-img"
                  />
                </CategoryCardTop>
                <CategoryCardBody>
                  <CategoryCardTitle>{book.title} </CategoryCardTitle>
                  <CategoryCardPr>{book.year} </CategoryCardPr>
                </CategoryCardBody>
              </CategoryCard>
            </>
          ))}
        </>
      ) : (
        "kitoblar yo'q "
      )}
    </>
  );
};
