
import React from "react";

import { LogoProps } from "./logo.types";

const GDSLogo: React.FC<LogoProps> = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="974"
        height="327"
        fill="none"
        viewBox="0 0 974 327"
        >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M53.724 121.514c7.806 3.216 16.672-.461 19.847-8.184 3.2-7.698-.46-16.647-8.266-19.846-7.657-3.15-16.557.6-19.74 8.331-3.183 7.691.502 16.557 8.16 19.699M19.373 141.654c7.814 3.225 16.664-.46 19.847-8.183 3.2-7.699-.46-16.647-8.274-19.855-7.65-3.142-16.549.617-19.732 8.348-3.183 7.682.502 16.549 8.16 19.69M29.16 171.696c3.199-7.698-.461-16.647-8.267-19.855-7.657-3.142-16.556.609-19.748 8.34-3.183 7.691.502 16.557 8.16 19.691 7.813 3.224 16.671-.461 19.854-8.176M92.109 133.624c7.805 3.216 16.671-.461 19.846-8.184 3.2-7.698-.46-16.647-8.266-19.855-7.657-3.141-16.556.609-19.74 8.349-3.182 7.682.502 16.548 8.16 19.69M231.092 121.514c7.658-3.142 11.342-12.008 8.151-19.699-3.183-7.73-12.074-11.481-19.74-8.331-7.805 3.2-11.457 12.148-8.266 19.846 3.183 7.723 12.042 11.4 19.855 8.184M265.466 141.654c7.658-3.141 11.342-12.008 8.159-19.69-3.183-7.731-12.082-11.49-19.739-8.348-7.806 3.208-11.466 12.156-8.266 19.855 3.174 7.723 12.041 11.408 19.846 8.183M283.666 160.181c-3.183-7.731-12.082-11.482-19.739-8.34-7.806 3.208-11.466 12.157-8.266 19.855 3.174 7.715 12.041 11.4 19.846 8.176 7.666-3.126 11.351-12 8.159-19.691M192.734 133.624c7.658-3.142 11.343-12.008 8.151-19.69-3.174-7.74-12.074-11.49-19.731-8.349-7.806 3.208-11.466 12.157-8.274 19.855 3.183 7.723 12.041 11.4 19.854 8.184M134.335 94.443a10 10 0 001.982 1.966l-11.021 33.245c-.008.041-.025.082-.033.123l-.016.033.008.008a17.553 17.553 0 00-.798 5.248c0 8.99 6.646 16.417 15.282 17.691.123.017.255.042.386.058.741.099 1.481.156 2.246.156.765 0 1.513-.057 2.245-.156.132-.016.263-.041.387-.058 8.636-1.274 15.282-8.701 15.282-17.691 0-1.826-.28-3.595-.79-5.248v-.008l-.008-.033c-.008-.041-.025-.082-.041-.123l-11.022-33.245a10.236 10.236 0 001.991-1.966l.041-.041 19.189 10.075V76.192l-19.164 6.07-.058-.058a10.3 10.3 0 00-1.859-1.875l-.057-.057L156.222 56l-13.851.008L128.52 56l7.715 24.272-.057.057c-.7.543-1.325 1.176-1.859 1.876l-.058.057-19.164-6.07v28.285l19.197-10.075.041.041zM253.762 206.105c-3.405-3.323-6.63-9.45-9.146-18.802l-10.002 33.303c6.087-4.187 10.775-6.893 16.146-7.016-9.517 20.496-21.41 25.777-29.116 24.354-9.41-1.728-13.736-10.117-12.272-17.231 2.163-10.084 12.51-12.708 17.338-.979 9.253-18.852-6.432-24.732-16.524-19.148 15.496-15.463 17.273-29.206 4.762-45.837-17.436 13.324-17.634 26.525-9.795 45.089-10.183-11.655-26.016-5.396-20.291 13.431 7.336-11.367 17.058-4.219 15.528 6.58-1.291 9.401-13.702 17.001-29.173 15.652-22.158-2.007-23.474-17.305-24.033-29.963 5.445-1.012 15.257 4.046 23.622 15.791l3.084-35.325c-9.097 9.483-17.371 11.284-26.558 11.58 3.059-9.541 17.116-25.176 17.116-25.176H120.354s14.057 15.635 17.116 25.176c-9.187-.296-17.461-2.097-26.558-11.58l3.076 35.325c8.373-11.745 18.177-16.795 23.63-15.791-.551 12.658-1.867 27.956-24.033 29.963-15.47 1.349-27.89-6.251-29.173-15.652-1.53-10.799 8.191-17.947 15.536-6.58 5.717-18.827-10.124-25.086-20.299-13.431 7.839-18.564 7.633-31.765-9.796-45.089-12.51 16.631-10.733 30.374 4.763 45.837-10.092-5.584-25.769.296-16.532 19.148 4.836-11.729 15.191-9.105 17.346.979 1.456 7.114-2.87 15.512-12.272 17.231-7.706 1.423-19.591-3.858-29.116-24.354 5.371.123 10.06 2.829 16.146 7.016l-10.002-33.303c-2.517 9.352-5.74 15.479-9.146 18.802-2.303-6.736-1.974-11.613.074-22.1l-20.628 7.353c10.956 14.961 21.574 35.967 30.293 72.634 30.711-4.392 65.173-6.86 101.601-6.86S213.295 259.6 244.023 264c8.719-36.675 19.329-57.681 30.293-72.642l-20.637-7.353c2.057 10.487 2.377 15.364.083 22.1"
            clipRule="evenodd"
        ></path>
        <path
            fill="#fff"
            d="M373.245 176.772c0 5.118.639 10.041 1.919 14.77 1.279 4.728 3.226 8.9 5.841 12.516 2.615 3.616 5.952 6.537 10.013 8.762 4.061 2.169 8.901 3.254 14.52 3.254 5.396 0 9.874-.862 13.434-2.587 3.616-1.724 6.481-3.866 8.595-6.425 2.169-2.614 3.671-5.424 4.506-8.428.89-3.004 1.335-5.785 1.335-8.344v-1.168h-30.624v-18.441h54.155v65.587h-21.195v-14.019c-1.502 2.336-3.365 4.478-5.59 6.425-2.226 1.892-4.729 3.533-7.51 4.923-2.782 1.335-5.842 2.392-9.179 3.171-3.282.779-6.787 1.168-10.514 1.168-8.734 0-16.494-1.585-23.281-4.756-6.787-3.171-12.517-7.538-17.19-13.101-4.617-5.563-8.149-12.071-10.597-19.525-2.392-7.455-3.588-15.493-3.588-24.116 0-8.567 1.335-16.577 4.005-24.032 2.726-7.51 6.564-14.018 11.516-19.526 5.006-5.563 11.014-9.929 18.023-13.1 7.065-3.227 14.965-4.84 23.699-4.84 5.674 0 11.042.667 16.104 2.003 5.118 1.279 9.763 3.143 13.935 5.59 4.228 2.392 7.955 5.313 11.182 8.762a44.05 44.05 0 017.844 11.348l-21.195 11.933a40.456 40.456 0 00-4.506-7.093 26.427 26.427 0 00-6.008-5.674c-2.225-1.613-4.784-2.865-7.677-3.755-2.893-.946-6.119-1.419-9.679-1.419-5.619 0-10.459 1.113-14.52 3.338-4.061 2.17-7.398 5.062-10.013 8.678-2.615 3.616-4.562 7.816-5.841 12.6-1.28 4.729-1.919 9.624-1.919 14.687v.834zM529.368 114.94c8.901 0 16.884 1.613 23.949 4.84 7.065 3.171 13.045 7.537 17.94 13.1 4.951 5.508 8.706 12.016 11.265 19.526 2.615 7.455 3.922 15.465 3.922 24.032 0 8.623-1.307 16.661-3.922 24.116-2.559 7.454-6.314 13.962-11.265 19.525-4.895 5.563-10.875 9.93-17.94 13.101-7.065 3.171-15.048 4.756-23.949 4.756-8.956 0-16.967-1.585-24.031-4.756-7.01-3.171-12.99-7.538-17.941-13.101-4.895-5.563-8.65-12.071-11.265-19.525-2.559-7.455-3.838-15.493-3.838-24.116 0-8.567 1.279-16.577 3.838-24.032 2.615-7.51 6.37-14.018 11.265-19.526 4.951-5.563 10.931-9.929 17.941-13.1 7.064-3.227 15.075-4.84 24.031-4.84zm0 101.134c5.23 0 9.819-.973 13.769-2.92 4.005-2.003 7.371-4.757 10.096-8.261 2.726-3.505 4.785-7.649 6.175-12.434 1.391-4.784 2.086-10.013 2.086-15.687v-.668c0-5.618-.695-10.819-2.086-15.604-1.39-4.839-3.449-9.012-6.175-12.516a28.285 28.285 0 00-10.096-8.178c-3.95-2.002-8.539-3.004-13.769-3.004-5.229 0-9.846 1.002-13.851 3.004a28.288 28.288 0 00-10.097 8.178c-2.67 3.504-4.701 7.677-6.091 12.516-1.391 4.785-2.087 9.986-2.087 15.604v.668c0 5.674.696 10.903 2.087 15.687 1.39 4.785 3.421 8.929 6.091 12.434 2.726 3.504 6.091 6.258 10.097 8.261 4.005 1.947 8.622 2.92 13.851 2.92zM629.501 236.268l-33.795-119.659h27.12l23.114 89.952h.834l22.614-89.952h26.785l-33.795 119.659h-32.877zM699.594 222.75c0-2.059.39-3.978 1.168-5.758.835-1.836 1.947-3.421 3.338-4.756a15.138 15.138 0 014.84-3.255 14.528 14.528 0 015.925-1.251c2.058 0 4.005.417 5.841 1.251a15.134 15.134 0 014.839 3.255 14.197 14.197 0 013.255 4.756c.834 1.78 1.251 3.699 1.251 5.758 0 2.114-.417 4.088-1.251 5.924a15.138 15.138 0 01-3.255 4.84 15.131 15.131 0 01-4.839 3.254 14.799 14.799 0 01-5.841 1.168c-2.059 0-4.034-.389-5.925-1.168a15.136 15.136 0 01-4.84-3.254 16.354 16.354 0 01-3.338-4.84c-.778-1.836-1.168-3.81-1.168-5.924zM798.142 216.074c3.504 0 6.759-.501 9.763-1.502 3.059-1.057 5.674-2.614 7.843-4.673 2.225-2.114 3.978-4.756 5.257-7.927 1.28-3.226 1.92-7.009 1.92-11.348v-74.182h23.864v77.77c0 6.675-1.223 12.711-3.671 18.107-2.392 5.396-5.758 9.986-10.097 13.768-4.283 3.783-9.401 6.704-15.353 8.762-5.953 2.058-12.461 3.087-19.526 3.087-7.065 0-13.574-1.029-19.526-3.087-5.953-2.058-11.098-4.979-15.437-8.762-4.34-3.782-7.733-8.372-10.181-13.768-2.392-5.396-3.588-11.432-3.588-18.107v-77.77h23.949v74.182c0 4.339.639 8.122 1.919 11.348 1.279 3.171 3.004 5.813 5.174 7.927 2.225 2.059 4.839 3.616 7.843 4.673 3.06 1.001 6.342 1.502 9.847 1.502zM870.488 116.609h24.198v51.819l42.724-51.819h29.789l-41.555 47.563 44.225 72.096h-28.12l-31.625-53.655-15.438 17.273v36.382h-24.198V116.609z"
        ></path>
        </svg>
    )
} 


export default GDSLogo;

