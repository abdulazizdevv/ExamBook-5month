import { useEffect, useRef, useState } from "react";
import {
  SearchAll,
  SearchBox,
  SearchData,
  SearchForm,
  SearchHd,
  SearchIcon,
  SearchInput,
  SearchInputBtn,
} from "./search.style";
import {
  CategoryCard,
  CategoryCardBody,
  CategoryCardPr,
  CategoryCardsBox,
  CategoryCardTitle,
  CategoryCardTop,
  CategoryCardTopImg,
} from "../Poet/poet.style";
import searchIcon from "../../assets/images/searchIcon.png";
import axios from "axios";
export const Search = () => {
  const searchRef = useRef();
  const [PoetData, setPoetData] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(searchRef.current.value);
  };
  const handleChange = () => {
    const id = searchRef.current.value;
    const searchAuthor = async () => {
      const data = await axios.get(
        "http://localhost:5000/author/search?author=" + id
      );
      if(data.status === 201){
        setPoetData(data.data);
localStorage.setItem('search' , JSON.stringify(data.data))
        console.log(data.data);
      }
    };
    searchAuthor();
  };
  useEffect(() => {
    handleChange()
  }, []);

  const [editModal, setEditModal] = useState(false);
  // const [deleteModal, setDeleteModal] = useState(false);

  
       
  return (
    <>
  <SearchBox className="">
      <SearchHd>Qidirish</SearchHd>
      <button onClick={() => setEditModal(true)}>
          Edit Modal
        </button>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleChange}
          ref={searchRef}
          type="search"
          placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
        />
        <SearchInputBtn type="submit">
          <SearchIcon src={searchIcon} alt="serchicon" /> Search
        </SearchInputBtn>
      </SearchForm>

    </SearchBox>

    <EditModal
        modal={editModal}
        setModal={setEditModal}
        title="Add new product item to list"
      >
        {/* <ModalForm>
          <EditFormInput type="text" placeholder="Product name  " />
          <EditFormInput type="text" placeholder="Product bowls    " />
          <EditFormInput type="number" placeholder="Product price    " />
          <ModalFormSelect>
            <ModalFormOption selected  value="Product category" >Product category</ModalFormOption>
            <ModalFormOption value="Hod dishes" >Hod dishes</ModalFormOption>
            <ModalFormOption value="Soup" >Soup</ModalFormOption>
            <ModalFormOption value="Grill" >Grill</ModalFormOption>
            <ModalFormOption value="Appetizer" >Appetizer</ModalFormOption>
          </ModalFormSelect>
          <UploadBox>
            <UploadBoxDiv>
              <UploadBoxImg src={Uploadimg} alt="download" />
              <UploadBoxHd>
                Click or drag file to this area to upload
              </UploadBoxHd>
              <UploadBoxPr>Support for a single or bulk upload.</UploadBoxPr>
            </UploadBoxDiv>
          </UploadBox>
          <FormDateBox>
            <ModalFormBtn>Cancel</ModalFormBtn>
            <ModalFormBtn>Add</ModalFormBtn>
          </FormDateBox>
        </ModalForm> */}
      </EditModal>
   

    </>
  
  );
};


// import { useRef } from "react";
// import {
//   SearchBox,
//   SearchForm,
//   SearchHd,
//   SearchIcon,
//   SearchInput,
//   SearchInputBtn,
// } from "./search.style";
// import searchIcon from "../../assets/images/searchIcon.png";
// export const Search = () => {
//   const searchRef = useRef();
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(searchRef.current.value);
//   };
//   const handleChange = () => {
//     console.log(searchRef.current.value);
//   };
//   return (
//     <SearchBox className="">
//       <SearchHd>Qidirish</SearchHd>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchInput
//           onChange={handleChange}
//           ref={searchRef}
//           type="search"
//           placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
//         />
//         <SearchInputBtn type="submit">
//           {" "}
//           <SearchIcon src={searchIcon} alt="serchicon" /> Search
//         </SearchInputBtn>
//       </SearchForm>
//     </SearchBox>
//   );
// };




// import { useRef } from "react";
// import { useEffect, useRef, useState } from "react";
// import {
//   SearchBox,
//   SearchForm,
//   SearchHd,
//   SearchIcon,
//   SearchInput,
//   SearchInputBtn,
// } from "./search.style";
// import {
//   CategoryCard,
//   CategoryCardBody,
//   CategoryCardPr,
//   CategoryCardsBox,
//   CategoryCardTitle,
//   CategoryCardTop,
//   CategoryCardTopImg,
// } from "../Poet/poet.style";
// import searchIcon from "../../assets/images/searchIcon.png";
// import axios from "axios";
// export const Search = () => {
//   const searchRef = useRef();
//   const [PoetData, setPoetData] = useState([]);

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(searchRef.current.value);
//   };
//   const handleChange = () => {
//     const id = searchRef.current.value;
//     const searchAuthor = async () => {
//       const data = await axios.get(
//         "http://localhost:5000/author/search?author=" + id
//       );
//       if(data.status === 201){
//         setPoetData(data.data);
// localStorage.setItem('search' , JSON.stringify(data.data))
//         console.log(data.data);
//       }
//     };
//     searchAuthor();
//   };
//   useEffect(() => {
//     handleChange()
//   }, []);

//   return (
//     <SearchBox className="">
//       <SearchHd>Qidirish</SearchHd>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchInput
//           onChange={handleChange}
//           ref={searchRef}
//           type="search"
//           placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
//         />
//         <SearchInputBtn type="submit">
//           <SearchIcon src={searchIcon} alt="serchicon" /> Search
//         </SearchInputBtn>
//       </SearchForm>

//       {
//         PoetData.map((poet) => {
//         return (
//        <>
//        <CategoryCard to={`about${poet.id}`} key={poet.id}>
//             <CategoryCardTop>
//               <CategoryCardTopImg
//                 src={"http://localhost:5000/" + poet.image}
//                 alt="catd-img"
//               />
//             </CategoryCardTop>
//             <CategoryCardBody>
//               <CategoryCardTitle>
//                 {poet.first_name + " " + poet.last_name}
//               </CategoryCardTitle>
//               <CategoryCardPr>
//                 {poet.date_of_birth + "-" + poet.date_of_death}
//               </CategoryCardPr>
//             </CategoryCardBody>
//           </CategoryCard>
//        </>
//         )
//       })
//       }
//     </SearchBox>
//   );
// };
// import {
//   SearchBox,
//   SearchForm,
//   SearchHd,
//   SearchIcon,
//   SearchInput,
//   SearchInputBtn,
// } from "./search.style";
// import searchIcon from "../../assets/images/searchIcon.png";
// export const Search = () => {
//   const searchRef = useRef();
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(searchRef.current.value);
//   };
//   const handleChange = () => {
//     console.log(searchRef.current.value);
//   };
//   return (
//     <SearchBox className="">
//       <SearchHd>Qidirish</SearchHd>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchInput
//           onChange={handleChange}
//           ref={searchRef}
//           type="search"
//           placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
//         />
//         <SearchInputBtn type="submit">
//           {" "}
//           <SearchIcon src={searchIcon} alt="serchicon" /> Search
//         </SearchInputBtn>
//       </SearchForm>
//     </SearchBox>
//   );
// };


