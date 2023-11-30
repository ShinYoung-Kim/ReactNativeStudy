import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    fill?: string;
    width: string;
    height: string;
    type: keyof typeof svgPaths;
    onPress?: (id: number) => void;
}

const svgPaths = {
    home: 'M5 19V10.308C5 10.052 5.05733 9.80966 5.172 9.58099C5.286 9.35232 5.444 9.16366 5.646 9.01499L11.031 4.93799C11.3123 4.72266 11.6343 4.61499 11.997 4.61499C12.359 4.61499 12.683 4.72266 12.969 4.93799L18.354 9.01499C18.556 9.16366 18.714 9.35232 18.828 9.58099C18.9427 9.80966 19 10.052 19 10.308V19C19 19.268 18.9003 19.5017 18.701 19.701C18.501 19.9003 18.2673 20 18 20H14.615C14.3863 20 14.1947 19.9227 14.04 19.768C13.8853 19.6133 13.808 19.4213 13.808 19.192V14.423C13.808 14.1943 13.7303 14.0027 13.575 13.848C13.4203 13.6927 13.2287 13.615 13 13.615H11C10.7713 13.615 10.5797 13.6927 10.425 13.848C10.2697 14.0027 10.192 14.1943 10.192 14.423V19.193C10.192 19.4217 10.1147 19.6133 9.96 19.768C9.80533 19.9227 9.61367 20 9.385 20H6C5.732 20 5.49833 19.9003 5.299 19.701C5.09967 19.501 5 19.2673 5 19Z',
    arrowBack: 'M8.82 12L16.535 19.715C16.6817 19.863 16.7543 20.0397 16.753 20.245C16.751 20.4497 16.6763 20.6257 16.529 20.773C16.3817 20.9203 16.2053 20.994 16 20.994C15.7947 20.994 15.6183 20.9207 15.471 20.774L7.83 13.136C7.66867 12.974 7.55067 12.794 7.476 12.596C7.40133 12.3967 7.364 12.1977 7.364 11.999C7.364 11.8003 7.40133 11.6017 7.476 11.403C7.55067 11.2043 7.66867 11.0243 7.83 10.863L15.47 3.21999C15.6173 3.07266 15.7947 2.99999 16.002 3.00199C16.2087 3.00399 16.386 3.07866 16.534 3.22599C16.682 3.37333 16.7553 3.54966 16.754 3.75499C16.754 3.95966 16.6807 4.13599 16.534 4.28399L8.82 12Z',
    trash: 'M11.5 15.308H12.5V10.619L14.6 12.708L15.308 12L12 8.69198L8.692 12L9.4 12.708L11.5 10.619V15.308ZM7.615 20C7.155 20 6.771 19.846 6.463 19.538C6.15433 19.2293 6 18.845 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8456 16.845 20 16.385 20H7.615ZM17 5.99998H7V18.385C7 18.5383 7.064 18.6793 7.192 18.808C7.32067 18.936 7.46167 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V5.99998Z',
    theme: 'M8.954 20H5C4.71933 20 4.48267 19.9033 4.29 19.71C4.09667 19.518 4 19.2813 4 19V15.046C4.56933 14.8793 5.045 14.5643 5.427 14.101C5.809 13.6377 6 13.104 6 12.5C6 11.896 5.809 11.3623 5.427 10.899C5.045 10.4357 4.56933 10.1207 4 9.95399V5.99999C4 5.71932 4.09667 5.48266 4.29 5.28999C4.482 5.09666 4.71867 4.99999 5 4.99999H9C9.18 4.42799 9.49533 3.97099 9.946 3.62899C10.3973 3.28632 10.9153 3.11499 11.5 3.11499C12.0847 3.11499 12.6027 3.28632 13.054 3.62899C13.5047 3.97099 13.82 4.42799 14 4.99999H18C18.2807 4.99999 18.5173 5.09666 18.71 5.28999C18.9033 5.48266 19 5.71932 19 5.99999V9.99999C19.572 10.18 20.029 10.4953 20.371 10.946C20.7137 11.3973 20.885 11.9153 20.885 12.5C20.885 13.0847 20.7137 13.6027 20.371 14.054C20.029 14.5047 19.572 14.82 19 15V19C19 19.2807 18.9033 19.5173 18.71 19.71C18.5173 19.9033 18.2807 20 18 20H14.046C13.866 19.3973 13.5427 18.9133 13.076 18.548C12.6087 18.1827 12.0833 18 11.5 18C10.9167 18 10.3913 18.1827 9.924 18.548C9.45733 18.9133 9.134 19.3973 8.954 20Z',
    add: 'M11.5 16.5H12.5V12.5H16.5V11.5H12.5V7.5H11.5V11.5H7.5V12.5H11.5V16.5ZM12.003 21C10.759 21 9.589 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.5587 4.18167 16.6067 3.709 15.512C3.23633 14.4173 3 13.2477 3 12.003C3 10.759 3.236 9.589 3.708 8.493C4.18067 7.39767 4.822 6.44467 5.632 5.634C6.44133 4.82333 7.39333 4.18167 8.488 3.709C9.58267 3.23633 10.7523 3 11.997 3C13.241 3 14.411 3.236 15.507 3.708C16.6023 4.18067 17.5553 4.822 18.366 5.632C19.1767 6.44133 19.8183 7.39333 20.291 8.488C20.7637 9.58267 21 10.7523 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.8193 16.6023 19.178 17.5553 18.368 18.366C17.5587 19.1767 16.6067 19.8183 15.512 20.291C14.4173 20.7637 13.2477 21 12.003 21Z',
    circle: 'M12.003 21C10.759 21 9.589 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.5587 4.18167 16.6067 3.709 15.512C3.23633 14.4173 3 13.2477 3 12.003C3 10.759 3.236 9.589 3.708 8.493C4.18067 7.39767 4.822 6.44467 5.632 5.634C6.44133 4.82333 7.39333 4.18167 8.488 3.709C9.58267 3.23633 10.7523 3 11.997 3C13.241 3 14.411 3.236 15.507 3.708C16.6023 4.18067 17.5553 4.822 18.366 5.632C19.1767 6.44133 19.8183 7.39333 20.291 8.488C20.7637 9.58267 21 10.7523 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.8193 16.6023 19.178 17.5553 18.368 18.366C17.5587 19.1767 16.6067 19.8183 15.512 20.291C14.4173 20.7637 13.2477 21 12.003 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z',
    check: 'M10.562 14.492L8.065 11.996C7.97167 11.9027 7.857 11.8527 7.721 11.846C7.585 11.8393 7.464 11.8893 7.358 11.996C7.25133 12.1027 7.198 12.2207 7.198 12.35C7.198 12.4793 7.25133 12.5973 7.358 12.704L9.996 15.342C10.1573 15.504 10.346 15.585 10.562 15.585C10.7773 15.585 10.9657 15.504 11.127 15.342L16.604 9.865C16.6973 9.77167 16.7473 9.657 16.754 9.521C16.7607 9.385 16.7107 9.264 16.604 9.158C16.4973 9.05133 16.3793 8.998 16.25 8.998C16.1207 8.998 16.0027 9.05133 15.896 9.158L10.562 14.492ZM12.003 21C10.759 21 9.589 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.5587 4.18167 16.6067 3.709 15.512C3.23633 14.4173 3 13.2477 3 12.003C3 10.759 3.236 9.589 3.708 8.493C4.18067 7.39767 4.822 6.44467 5.632 5.634C6.44133 4.82333 7.39333 4.18167 8.488 3.709C9.58267 3.23633 10.7523 3 11.997 3C13.241 3 14.411 3.236 15.507 3.708C16.6023 4.18067 17.5553 4.822 18.366 5.632C19.1767 6.44133 19.8183 7.39333 20.291 8.488C20.7637 9.58267 21 10.7523 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.8193 16.6023 19.178 17.5553 18.368 18.366C17.5587 19.1767 16.6067 19.8183 15.512 20.291C14.4173 20.7637 13.2477 21 12.003 21Z',
};

export default function Icon({ fill, width, height, type, onPress }: IconProps) {
    return (
        <Svg width={width} height={height} onPress={onPress} viewBox="0 0 24 24">
            <Path d={svgPaths[type]} fill={fill} />
        </Svg>
    );
}
