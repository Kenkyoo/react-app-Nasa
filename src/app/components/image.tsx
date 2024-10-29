import ModalImage from "react-modal-image";

export default function ImageCard({title, url, description, date, author, hdurl, type}) {
    return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
          <a
            href={hdurl}
            className="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-4"
          >
            {title}
          </a>
          <div className="relative">
            {type==='video' ?
            <iframe
              className="mx-auto"
              width={720}
              height={420} 
              src={url}
            ></iframe>  
            :
            <ModalImage
              className="w-full rounded-lg"
              small={url}
              large={hdurl}
              alt={title}
            />
            }
          </div>
          <p className="py-5 text-base leading-8">
            {description}
          </p>
          <div className="py-5 text-sm font-regular flex">
            <span className="mr-3 flex flex-row items-center">
              <svg
                className="text-indigo-600"
                fill="currentColor"
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                  c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                  c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                    />
                  </g>
                </g>
              </svg>
              <span className="ml-1">{date}</span></span>
              <a href="#" className="flex flex-row items-center hover:text-indigo-600">
                <svg className="text-indigo-600" fill="currentColor" height="16px" aria-hidden="true" role="img"
                    focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor"
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                    </path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span className="ml-1">{author}</span>
              </a>
          </div>
          <hr />
        </div>
      </div>
      )
}