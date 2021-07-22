import {
  faCode,
  faDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  const download = () => {
    debugger;
    // fetch("https://www.googleapis.com/drive/v2/files/", {
    //   mode:"no-cors",
    //   credentials: "same-origin"
    // })
    //   .then(response => response.blob())
    //   .then(res => {
    //     const url = window.URL
    //     .createObjectURL(new Blob([res.data],  {type: 'application/pdf'}));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'resume.pdf');
    //     document.body.appendChild(link);
    //     link.click();
    //   })

  };
  return (
    <div className="w-full flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between items-center px-20 py-5 bg-blue-50">
      <div>
        <h1 className="flex justify-center sm:justify-start items-center text-blue-900 space-x-1">
          <FontAwesomeIcon icon={faCode} height={20} width={20} />
          <span> by Pooja Thapa</span>
        </h1>
        <div className="flex space-x-2 items-center text-blue-900">
          <FontAwesomeIcon icon={faEnvelope} height={20} width={20} />
          <p>poojathapa9815@gmail.com</p>
        </div>
      </div>
      <div className="flex space-x-2 px-2 py-1 h-14 items-center font-medium text-blue-900 rounded-md transform hover:scale-105 cursor-pointer transition duration-200 border border-blue-900 hover:bg-blue-900 hover:text-gray-50">
        <FontAwesomeIcon icon={faDownload} height={20} width={20} />
        <button type="button" onClick={download}>
          Download Resume
        </button>
      </div>
    </div>
  );
}
