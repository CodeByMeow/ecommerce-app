

  1. Homepage (*) (DONE)

  2. Authentication page
    2.1 Sign-in (*) (DONE)
    2.2 Sign-up (*) (DONE)
    2.3 Set up access Token (*) (DONE)
    2.4 Set up refresh Token (**)

  3. Search page: filter with ... (*) 

  4. Product detail: with slug (*)

  5. Cart Page: add product to cart, delete product, update quantity (REMEMBER store in local storage) => CALL API when click on Checkout button (*)
    + API POST new order: userId + list of productId (array) -> body (*)

        body: {
          userId: ...,
          orderProducts: []
        }
    
    + API Get all: (6.3) (**)

  6. Account settings (**):
    6.1: Manage basic information
    6.2: Update password
    6.3: Manage shopping history
    6.4: Delete Account

  7. Wishlist 


  Load page

  - Verify access token: call API with accessToken embed to headers
    + Expired: => call API with refreshToken => True => new accessToken (update localStorage, add accessToken axiosInstance)
                                             => false => logout (clear localStorage, call API clear refresh token in Database)

    + Not expired: normal
  - SCRUM: => MVP (*)
  - (**)
  

  - Product model: (add new property to show product detail)
      detail: {
        ram: ...,
        rom: ...,
        frontCamera: ... ,
        backCamera: ... ,
        chip: ... ,
        memory: ...,
        screenSize: ...,
      }


