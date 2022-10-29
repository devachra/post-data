import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const Post = () => {
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const formData = useSelector((state) => state.form.formData);
  console.log(formData);
  const limit = 12;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`
      );

      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setTotalPage(Math.ceil(total / limit));

      setItems(data);
    };
    fetchData();
  }, [formData]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentdata = await fetchComments(currentPage);
    setItems(commentdata);
  };
  console.log(items);
  return (
    <div className="container m-6 p-6">
      <div className="flex gap-2 flex-wrap justify-center items-center -m-4">
        {items.map((post) => {
          const { id, title, body } = post;
          return (
            <div
              className="lg:w-1/4 md:w-1/2 p-4  w-full border-blue-200 border-2"
              key={id}
            >
              <div className="">
                <div className="">
                  <h5 className="font-bold text-center mb-2">id:{id}</h5>
                  <h6 className="font-medium text-center mb-2">{title}</h6>
                  <p className="font-serif text-center ">{body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"---"}
          pageCount={totalPage}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Post;
