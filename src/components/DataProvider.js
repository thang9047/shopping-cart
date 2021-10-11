import React, { createContext, useState} from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
  
  const [products, setProducts] = useState([
    {
      "_id": "1",
      "title": "Product 01",
      "images": [
        "https://media-cdn.laodong.vn/Storage/NewsPortal/2020/3/12/790444/My-Nhan-Redvelvet5.jpg",
        "https://kenh14cdn.com/2020/4/21/irene-15874496092521392789796.jpg",
        "https://kpopnews.vn/uploadcontent/fileuploads/uploads/2019/04/03/irene3.jpg",
        
      ],
      "description": "UI/UX designing, html css tutorials",
      "content": "The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time. We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.",
      "price": 23,
      "colors":["red","black","crimson","teal"],
      "size": ["XL", "L", "M", "S"]
  },
  {
      "_id": "2",
      "title": "Product 02",
      "images": [
        "https://kpopnews.vn/uploadcontent/fileuploads/uploads/2019/04/03/irene3.jpg",
        "https://kenh14cdn.com/2020/4/21/irene-15874496092521392789796.jpg",
        "https://kpopnews.vn/uploadcontent/fileuploads/uploads/2019/04/03/irene3.jpg",
      ],
      "description": "UI/UX designing, html css tutorials",
      "content": "The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time. We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.",
      "price": 19,
      "colors":["red","crimson","teal"],
      "size": ["XL", "L", "M", "S"]
  },
  {
      "_id": "3",
      "title": "Product 03",
      "images": [
        "https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/15/17346843713122589225601731033365589088201839n-16184231987681622721137.jpg",
        "https://kenh14cdn.com/2020/4/21/irene-15874496092521392789796.jpg",
        "https://kpopnews.vn/uploadcontent/fileuploads/uploads/2019/04/03/irene3.jpg",
      ],
      "description": "UI/UX designing, html css tutorials",
      "content": "The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time. We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.",
      "price": 50,
      "colors":["lightblue","white","crimson","teal"],
      "size": ["XL", "L", "M", "S"]
  },
  {
      "_id": "4",
      "title": "Product 04",
      "images": [
        "https://2sao.vietnamnetjsc.vn/images/2021/01/19/00/28/irene-1.jpg",
        "https://kenh14cdn.com/2020/4/21/irene-15874496092521392789796.jpg",
        "https://kpopnews.vn/uploadcontent/fileuploads/uploads/2019/04/03/irene3.jpg",
      ],
      "description": "UI/UX designing, html css tutorials",
      "content": "The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time. We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.",
      "price": 15,
      "colors":["orange","black","crimson","teal"],
      "size": ["XL", "L", "M", "S"]
  },
  {
      "_id": "5",
      "title": "Product 05",
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtfnEkTX3X1B5_hP-ogywkLeWFGIkIqq0Yg&usqp=CAU",
        "https://kenh14cdn.com/2020/4/21/irene-15874496092521392789796.jpg",
        "https://kpopnews.vn/uploadcontent/fileuploads/uploads/2019/04/03/irene3.jpg",
      ],
      "description": "UI/UX designing, html css tutorials",
      "content": "The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time. We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.",
      "price": 10,
      "colors":["orange","black","crimson","teal"],
      "size": ["XL", "L", "M", "S"]
  },
  {
      "_id": "6",
      "title": "Product 06",
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3JnPS_W_JrQE4G9zA-uGJ2rF7RqGg-MX2Q&usqp=CAU",
        "https://kenh14cdn.com/2020/4/21/irene-15874496092521392789796.jpg",
        "https://kpopnews.vn/uploadcontent/fileuploads/uploads/2019/04/03/irene3.jpg",
      ],
      "description": "UI/UX designing, html css tutorials",
      "content": "The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time. We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.",
      "price": 17,
      "colors":["orange","black","crimson","teal"],
      "size": ["XL", "L", "M", "S"]
  }
  ])

  return (
    <div>
      
    </div>
  )
}
