import { IconWrapper } from "./icon.style";

interface PropsType {
    icon: keyof typeof icons
    width?: string
    height?: string
    fill?: string
    [key: string]: any
}

const icons: any = {
    "logo": (
        <svg width="221" height="48" viewBox="0 0 221 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.450514 2.90054H10.9152V45H0.450514V2.90054ZM15.486 45H7.18643V35.9787H15.1252C16.729 35.9787 18.2726 35.7782 19.7561 35.3773C21.2797 34.9763 22.6028 34.3148 23.7255 33.3926C24.8882 32.4704 25.8104 31.2475 26.492 29.7239C27.1736 28.1602 27.5145 26.2357 27.5145 23.9503C27.5145 21.6649 27.1736 19.7604 26.492 18.2368C25.8104 16.6731 24.8882 15.4301 23.7255 14.508C22.6028 13.5858 21.2797 12.9242 19.7561 12.5233C18.2726 12.1223 16.729 11.9219 15.1252 11.9219H7.18643V2.90054H15.486C20.0969 2.90054 24.0864 3.76258 27.4543 5.48665C30.8223 7.21073 33.4284 9.63646 35.2728 12.7638C37.1171 15.8912 38.0393 19.62 38.0393 23.9503C38.0393 28.2404 37.1171 31.9692 35.2728 35.1367C33.4284 38.2641 30.8223 40.6898 27.4543 42.4139C24.0864 44.138 20.0969 45 15.486 45ZM81.8303 26.8972L90.0096 2.90054H102.098L83.8751 47.4658L70.283 22.0859L56.751 47.4658L38.528 2.90054H50.5564L58.856 26.8972L70.283 0.795572L81.8303 26.8972ZM114.294 23.9503C114.294 26.4361 114.775 28.6414 115.737 30.5659C116.74 32.4504 118.123 33.9339 119.887 35.0164C121.691 36.099 123.796 36.6403 126.202 36.6403C128.568 36.6403 130.632 36.099 132.397 35.0164C134.201 33.9339 135.584 32.4504 136.546 30.5659C137.549 28.6414 138.05 26.4361 138.05 23.9503C138.05 21.4644 137.569 19.2792 136.607 17.3948C135.644 15.4702 134.281 13.9667 132.517 12.8841C130.753 11.8016 128.648 11.2603 126.202 11.2603C123.796 11.2603 121.691 11.8016 119.887 12.8841C118.123 13.9667 116.74 15.4702 115.737 17.3948C114.775 19.2792 114.294 21.4644 114.294 23.9503ZM103.528 23.9503C103.528 20.7026 104.09 17.7356 105.212 15.0492C106.375 12.3629 107.979 10.0374 110.024 8.07276C112.069 6.10812 114.474 4.60457 117.241 3.56211C120.007 2.47955 122.994 1.93827 126.202 1.93827C129.45 1.93827 132.437 2.47955 135.163 3.56211C137.93 4.60457 140.335 6.10812 142.38 8.07276C144.425 10.0374 146.009 12.3629 147.131 15.0492C148.254 17.7356 148.815 20.7026 148.815 23.9503C148.815 27.1979 148.254 30.185 147.131 32.9114C146.049 35.6379 144.485 38.0035 142.44 40.0082C140.436 42.0129 138.05 43.5766 135.283 44.6993C132.517 45.7818 129.49 46.3231 126.202 46.3231C122.874 46.3231 119.827 45.7818 117.06 44.6993C114.294 43.5766 111.888 42.0129 109.843 40.0082C107.839 38.0035 106.275 35.6379 105.152 32.9114C104.07 30.185 103.528 27.1979 103.528 23.9503ZM155.328 2.90054H165.492V45H155.328V2.90054ZM161.703 11.2603V2.90054H169.943C173.511 2.90054 176.498 3.46187 178.904 4.58452C181.35 5.66708 183.194 7.23077 184.437 9.2756C185.68 11.3204 186.301 13.7863 186.301 16.6731C186.301 19.4797 185.68 21.9255 184.437 24.0104C183.194 26.0552 181.35 27.639 178.904 28.7616C176.498 29.8442 173.511 30.3855 169.943 30.3855H161.703V22.0257H169.943C171.987 22.0257 173.591 21.5646 174.754 20.6425C175.917 19.7203 176.498 18.3972 176.498 16.6731C176.498 14.9089 175.917 13.5657 174.754 12.6436C173.591 11.7214 171.987 11.2603 169.943 11.2603H161.703ZM199.535 45V36.6403H220.766V45H199.535ZM199.535 11.2603V2.90054H220.766V11.2603H199.535ZM199.535 26.9574V18.7781H219.563V26.9574H199.535ZM192.799 2.90054H202.542V45H192.799V2.90054Z" fill="white" />
        </svg>
    ),
    "logoDark": (
        <svg width="168" height="24" viewBox="0 0 168 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.1 9.10969e-06C29.4959 -3.40047e-06 31.7941 0.945775 33.491 2.6301C35.1879 4.31442 36.1451 6.59993 36.1529 8.98579V15.0201C36.1482 17.4074 35.1922 19.6953 33.4948 21.3812C31.7974 23.0672 29.4974 24.0132 27.1 24.0117H0V6.0022H6.02743V18.0037H27.1C28.427 18.0037 29.4326 17.2894 30.1166 15.8609C30.1197 15.8415 30.1197 15.8218 30.1166 15.8025V8.21215C30.1163 8.19183 30.1112 8.17187 30.102 8.15376C29.4218 6.72717 28.4173 6.01387 27.0883 6.01387H6.02743V9.10969e-06H27.1ZM21.1077 15.0201H15.0481V8.98579H21.1077V15.0201ZM40.1106 6.0022H46.1351V8.98579H76.2664V15.0201H46.138C46.138 16.3027 46.8484 17.2923 48.2693 17.9891C48.2866 17.9934 48.3047 17.9934 48.3221 17.9891H76.2664V24.0117H49.1341C46.7418 24.0055 44.4494 23.056 42.7583 21.3709C41.0672 19.6859 40.1152 17.4024 40.1106 15.0201V6.0022ZM76.2634 6.0022H46.138V9.10969e-06H76.2664L76.2634 6.0022ZM111.112 9.12299C112.253 9.32514 113.332 9.78779 114.263 10.4746C115.212 11.1679 115.982 12.0746 116.511 13.1207C117.041 14.1669 117.314 15.3229 117.309 16.4944C117.313 17.4818 117.12 18.4601 116.743 19.3732C116.365 20.2862 115.81 21.1159 115.109 21.8145C114.408 22.5132 113.576 23.0669 112.659 23.444C111.743 23.8211 110.761 24.014 109.769 24.0117H81.1534V6.0022H87.1808V9.01789H103.742C104.132 9.0008 104.5 8.83445 104.77 8.55355C105.04 8.27264 105.191 7.89884 105.191 7.51004C105.191 7.12123 105.04 6.74743 104.77 6.46653C104.5 6.18562 104.132 6.01929 103.742 6.0022H87.1838V9.10969e-06H103.745C104.735 -0.00152865 105.716 0.191635 106.632 0.568431C107.547 0.945228 108.379 1.49825 109.08 2.1958C109.78 2.89334 110.335 3.72168 110.714 4.63336C111.092 5.54504 111.286 6.5221 111.285 7.50858C111.283 8.05118 111.225 8.59216 111.112 9.12299ZM109.769 18.0037C109.968 18.0052 110.165 17.9665 110.349 17.8897C110.532 17.8129 110.698 17.6997 110.836 17.557C111.05 17.3442 111.197 17.0744 111.26 16.7801C111.323 16.4859 111.299 16.1798 111.191 15.8988C111.057 15.6369 110.854 15.4167 110.603 15.2622C110.353 15.1077 110.064 15.025 109.769 15.023H87.1955V18.0066L109.769 18.0037ZM120.437 6.0022H126.465V8.98579H156.596V15.0201H126.471C126.471 16.3017 127.177 17.2913 128.599 17.9891C128.616 17.9934 128.634 17.9934 128.652 17.9891H156.596V24.0117H129.464C127.071 24.0048 124.779 23.0551 123.088 21.3703C121.396 19.6854 120.443 17.4024 120.437 15.0201V6.0022ZM156.59 6.0022H126.471V9.10969e-06H156.596L156.59 6.0022ZM164.998 0.00585352C164.402 0.00470005 163.82 0.179611 163.324 0.508419C162.829 0.837228 162.442 1.30513 162.214 1.85285C161.986 2.40057 161.926 3.00344 162.042 3.58509C162.158 4.16674 162.445 4.70097 162.866 5.1201C163.288 5.53923 163.824 5.82439 164.409 5.93944C164.993 6.0545 165.598 5.99427 166.148 5.76639C166.698 5.53852 167.167 5.15325 167.497 4.65941C167.827 4.16557 168.002 3.58537 168 2.99235C167.998 2.20048 167.681 1.44176 167.118 0.882105C166.555 0.322445 165.793 0.00739373 164.998 0.00585352Z" fill="black" />
        </svg>
    ),
    "logo-sm": (
        <svg width="148" height="32" viewBox="0 0 148 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.96 2H7.92V30H0.96V2ZM10.96 30H5.44V24H10.72C11.7867 24 12.8133 23.8667 13.8 23.6C14.8133 23.3333 15.6933 22.8933 16.44 22.28C17.2133 21.6667 17.8267 20.8533 18.28 19.84C18.7333 18.8 18.96 17.52 18.96 16C18.96 14.48 18.7333 13.2133 18.28 12.2C17.8267 11.16 17.2133 10.3333 16.44 9.72C15.6933 9.10667 14.8133 8.66667 13.8 8.4C12.8133 8.13333 11.7867 8 10.72 8H5.44V2H10.96C14.0267 2 16.68 2.57333 18.92 3.72C21.16 4.86667 22.8933 6.48 24.12 8.56C25.3467 10.64 25.96 13.12 25.96 16C25.96 18.8533 25.3467 21.3333 24.12 23.44C22.8933 25.52 21.16 27.1333 18.92 28.28C16.68 29.4267 14.0267 30 10.96 30ZM55.085 17.96L60.525 2H68.565L56.445 31.64L47.405 14.76L38.405 31.64L26.285 2H34.285L39.805 17.96L47.405 0.599999L55.085 17.96ZM76.6763 16C76.6763 17.6533 76.9963 19.12 77.6363 20.4C78.3029 21.6533 79.2229 22.64 80.3963 23.36C81.5963 24.08 82.9963 24.44 84.5963 24.44C86.1696 24.44 87.5429 24.08 88.7162 23.36C89.9163 22.64 90.8363 21.6533 91.4763 20.4C92.1429 19.12 92.4763 17.6533 92.4763 16C92.4763 14.3467 92.1563 12.8933 91.5163 11.64C90.8763 10.36 89.9696 9.36 88.7963 8.64C87.6229 7.92 86.2229 7.56 84.5963 7.56C82.9963 7.56 81.5963 7.92 80.3963 8.64C79.2229 9.36 78.3029 10.36 77.6363 11.64C76.9963 12.8933 76.6763 14.3467 76.6763 16ZM69.5163 16C69.5163 13.84 69.8896 11.8667 70.6363 10.08C71.4096 8.29333 72.4763 6.74667 73.8363 5.44C75.1963 4.13333 76.7963 3.13333 78.6363 2.44C80.4763 1.72 82.4629 1.36 84.5963 1.36C86.7563 1.36 88.7429 1.72 90.5563 2.44C92.3963 3.13333 93.9963 4.13333 95.3563 5.44C96.7163 6.74667 97.7696 8.29333 98.5163 10.08C99.2629 11.8667 99.6363 13.84 99.6363 16C99.6363 18.16 99.2629 20.1467 98.5163 21.96C97.7963 23.7733 96.7563 25.3467 95.3963 26.68C94.0629 28.0133 92.4763 29.0533 90.6363 29.8C88.7963 30.52 86.7829 30.88 84.5963 30.88C82.3829 30.88 80.3563 30.52 78.5163 29.8C76.6763 29.0533 75.0763 28.0133 73.7163 26.68C72.3829 25.3467 71.3429 23.7733 70.5963 21.96C69.8763 20.1467 69.5163 18.16 69.5163 16ZM103.968 2H110.728V30H103.968V2ZM108.208 7.56V2H113.688C116.061 2 118.048 2.37333 119.648 3.12C121.274 3.84 122.501 4.88 123.328 6.24C124.154 7.6 124.568 9.24 124.568 11.16C124.568 13.0267 124.154 14.6533 123.328 16.04C122.501 17.4 121.274 18.4533 119.648 19.2C118.048 19.92 116.061 20.28 113.688 20.28H108.208V14.72H113.688C115.048 14.72 116.114 14.4133 116.888 13.8C117.661 13.1867 118.048 12.3067 118.048 11.16C118.048 9.98667 117.661 9.09333 116.888 8.48C116.114 7.86666 115.048 7.56 113.688 7.56H108.208ZM133.37 30V24.44H147.49V30H133.37ZM133.37 7.56V2H147.49V7.56H133.37ZM133.37 18V12.56H146.69V18H133.37ZM128.89 2H135.37V30H128.89V2Z" fill="white" />
        </svg>

    ),
    "nfts": (
        <svg width="301" height="63" viewBox="0 0 301 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1_143_310" maskUnits="userSpaceOnUse" x="-1" y="-1" width="303" height="65" fill="black">
                <rect fill="white" x="-1" y="-1" width="303" height="65" />
                <path d="M0 63V0.792969H17.7734V9.67969H26.6602V18.5664H35.5469V27.4531H44.4336V36.3398H53.3203V0.792969H71.0938V63H53.3203V54.1133H44.4336V45.2266H35.5469V36.3398H26.6602V27.4531H17.7734V63H0ZM82.4 63V0.792969H153.494V18.5664H144.607V9.67969H100.173V27.4531H144.607V36.3398H100.173V63H82.4ZM182.573 63V54.1133H191.46V9.67969H173.687V18.5664H164.8V0.792969H235.894V18.5664H227.007V9.67969H209.234V54.1133H218.12V63H182.573ZM247.2 63V54.1133H282.747V45.2266H256.087V36.3398H247.2V27.4531H256.087V18.5664H300.52V27.4531H264.973V36.3398H291.634V45.2266H300.52V54.1133H291.634V63H247.2Z" />
            </mask>
            <path d="M0 63H-1V64H0V63ZM0 0.792969V-0.207031H-1V0.792969H0ZM17.7734 0.792969H18.7734V-0.207031H17.7734V0.792969ZM17.7734 9.67969H16.7734V10.6797H17.7734V9.67969ZM26.6602 9.67969H27.6602V8.67969H26.6602V9.67969ZM26.6602 18.5664H25.6602V19.5664H26.6602V18.5664ZM35.5469 18.5664H36.5469V17.5664H35.5469V18.5664ZM35.5469 27.4531H34.5469V28.4531H35.5469V27.4531ZM44.4336 27.4531H45.4336V26.4531H44.4336V27.4531ZM44.4336 36.3398H43.4336V37.3398H44.4336V36.3398ZM53.3203 36.3398V37.3398H54.3203V36.3398H53.3203ZM53.3203 0.792969V-0.207031H52.3203V0.792969H53.3203ZM71.0938 0.792969H72.0938V-0.207031H71.0938V0.792969ZM71.0938 63V64H72.0938V63H71.0938ZM53.3203 63H52.3203V64H53.3203V63ZM53.3203 54.1133H54.3203V53.1133H53.3203V54.1133ZM44.4336 54.1133H43.4336V55.1133H44.4336V54.1133ZM44.4336 45.2266H45.4336V44.2266H44.4336V45.2266ZM35.5469 45.2266H34.5469V46.2266H35.5469V45.2266ZM35.5469 36.3398H36.5469V35.3398H35.5469V36.3398ZM26.6602 36.3398H25.6602V37.3398H26.6602V36.3398ZM26.6602 27.4531H27.6602V26.4531H26.6602V27.4531ZM17.7734 27.4531V26.4531H16.7734V27.4531H17.7734ZM17.7734 63V64H18.7734V63H17.7734ZM1 63V0.792969H-1V63H1ZM0 1.79297H17.7734V-0.207031H0V1.79297ZM16.7734 0.792969V9.67969H18.7734V0.792969H16.7734ZM17.7734 10.6797H26.6602V8.67969H17.7734V10.6797ZM25.6602 9.67969V18.5664H27.6602V9.67969H25.6602ZM26.6602 19.5664H35.5469V17.5664H26.6602V19.5664ZM34.5469 18.5664V27.4531H36.5469V18.5664H34.5469ZM35.5469 28.4531H44.4336V26.4531H35.5469V28.4531ZM43.4336 27.4531V36.3398H45.4336V27.4531H43.4336ZM44.4336 37.3398H53.3203V35.3398H44.4336V37.3398ZM54.3203 36.3398V0.792969H52.3203V36.3398H54.3203ZM53.3203 1.79297H71.0938V-0.207031H53.3203V1.79297ZM70.0938 0.792969V63H72.0938V0.792969H70.0938ZM71.0938 62H53.3203V64H71.0938V62ZM54.3203 63V54.1133H52.3203V63H54.3203ZM53.3203 53.1133H44.4336V55.1133H53.3203V53.1133ZM45.4336 54.1133V45.2266H43.4336V54.1133H45.4336ZM44.4336 44.2266H35.5469V46.2266H44.4336V44.2266ZM36.5469 45.2266V36.3398H34.5469V45.2266H36.5469ZM35.5469 35.3398H26.6602V37.3398H35.5469V35.3398ZM27.6602 36.3398V27.4531H25.6602V36.3398H27.6602ZM26.6602 26.4531H17.7734V28.4531H26.6602V26.4531ZM16.7734 27.4531V63H18.7734V27.4531H16.7734ZM17.7734 62H0V64H17.7734V62ZM82.4 63H81.4V64H82.4V63ZM82.4 0.792969V-0.207031H81.4V0.792969H82.4ZM153.494 0.792969H154.494V-0.207031H153.494V0.792969ZM153.494 18.5664V19.5664H154.494V18.5664H153.494ZM144.607 18.5664H143.607V19.5664H144.607V18.5664ZM144.607 9.67969H145.607V8.67969H144.607V9.67969ZM100.173 9.67969V8.67969H99.1734V9.67969H100.173ZM100.173 27.4531H99.1734V28.4531H100.173V27.4531ZM144.607 27.4531H145.607V26.4531H144.607V27.4531ZM144.607 36.3398V37.3398H145.607V36.3398H144.607ZM100.173 36.3398V35.3398H99.1734V36.3398H100.173ZM100.173 63V64H101.173V63H100.173ZM83.4 63V0.792969H81.4V63H83.4ZM82.4 1.79297H153.494V-0.207031H82.4V1.79297ZM152.494 0.792969V18.5664H154.494V0.792969H152.494ZM153.494 17.5664H144.607V19.5664H153.494V17.5664ZM145.607 18.5664V9.67969H143.607V18.5664H145.607ZM144.607 8.67969H100.173V10.6797H144.607V8.67969ZM99.1734 9.67969V27.4531H101.173V9.67969H99.1734ZM100.173 28.4531H144.607V26.4531H100.173V28.4531ZM143.607 27.4531V36.3398H145.607V27.4531H143.607ZM144.607 35.3398H100.173V37.3398H144.607V35.3398ZM99.1734 36.3398V63H101.173V36.3398H99.1734ZM100.173 62H82.4V64H100.173V62ZM182.573 63H181.573V64H182.573V63ZM182.573 54.1133V53.1133H181.573V54.1133H182.573ZM191.46 54.1133V55.1133H192.46V54.1133H191.46ZM191.46 9.67969H192.46V8.67969H191.46V9.67969ZM173.687 9.67969V8.67969H172.687V9.67969H173.687ZM173.687 18.5664V19.5664H174.687V18.5664H173.687ZM164.8 18.5664H163.8V19.5664H164.8V18.5664ZM164.8 0.792969V-0.207031H163.8V0.792969H164.8ZM235.894 0.792969H236.894V-0.207031H235.894V0.792969ZM235.894 18.5664V19.5664H236.894V18.5664H235.894ZM227.007 18.5664H226.007V19.5664H227.007V18.5664ZM227.007 9.67969H228.007V8.67969H227.007V9.67969ZM209.234 9.67969V8.67969H208.234V9.67969H209.234ZM209.234 54.1133H208.234V55.1133H209.234V54.1133ZM218.12 54.1133H219.12V53.1133H218.12V54.1133ZM218.12 63V64H219.12V63H218.12ZM183.573 63V54.1133H181.573V63H183.573ZM182.573 55.1133H191.46V53.1133H182.573V55.1133ZM192.46 54.1133V9.67969H190.46V54.1133H192.46ZM191.46 8.67969H173.687V10.6797H191.46V8.67969ZM172.687 9.67969V18.5664H174.687V9.67969H172.687ZM173.687 17.5664H164.8V19.5664H173.687V17.5664ZM165.8 18.5664V0.792969H163.8V18.5664H165.8ZM164.8 1.79297H235.894V-0.207031H164.8V1.79297ZM234.894 0.792969V18.5664H236.894V0.792969H234.894ZM235.894 17.5664H227.007V19.5664H235.894V17.5664ZM228.007 18.5664V9.67969H226.007V18.5664H228.007ZM227.007 8.67969H209.234V10.6797H227.007V8.67969ZM208.234 9.67969V54.1133H210.234V9.67969H208.234ZM209.234 55.1133H218.12V53.1133H209.234V55.1133ZM217.12 54.1133V63H219.12V54.1133H217.12ZM218.12 62H182.573V64H218.12V62ZM247.2 63H246.2V64H247.2V63ZM247.2 54.1133V53.1133H246.2V54.1133H247.2ZM282.747 54.1133V55.1133H283.747V54.1133H282.747ZM282.747 45.2266H283.747V44.2266H282.747V45.2266ZM256.087 45.2266H255.087V46.2266H256.087V45.2266ZM256.087 36.3398H257.087V35.3398H256.087V36.3398ZM247.2 36.3398H246.2V37.3398H247.2V36.3398ZM247.2 27.4531V26.4531H246.2V27.4531H247.2ZM256.087 27.4531V28.4531H257.087V27.4531H256.087ZM256.087 18.5664V17.5664H255.087V18.5664H256.087ZM300.52 18.5664H301.52V17.5664H300.52V18.5664ZM300.52 27.4531V28.4531H301.52V27.4531H300.52ZM264.973 27.4531V26.4531H263.973V27.4531H264.973ZM264.973 36.3398H263.973V37.3398H264.973V36.3398ZM291.634 36.3398H292.634V35.3398H291.634V36.3398ZM291.634 45.2266H290.634V46.2266H291.634V45.2266ZM300.52 45.2266H301.52V44.2266H300.52V45.2266ZM300.52 54.1133V55.1133H301.52V54.1133H300.52ZM291.634 54.1133V53.1133H290.634V54.1133H291.634ZM291.634 63V64H292.634V63H291.634ZM248.2 63V54.1133H246.2V63H248.2ZM247.2 55.1133H282.747V53.1133H247.2V55.1133ZM283.747 54.1133V45.2266H281.747V54.1133H283.747ZM282.747 44.2266H256.087V46.2266H282.747V44.2266ZM257.087 45.2266V36.3398H255.087V45.2266H257.087ZM256.087 35.3398H247.2V37.3398H256.087V35.3398ZM248.2 36.3398V27.4531H246.2V36.3398H248.2ZM247.2 28.4531H256.087V26.4531H247.2V28.4531ZM257.087 27.4531V18.5664H255.087V27.4531H257.087ZM256.087 19.5664H300.52V17.5664H256.087V19.5664ZM299.52 18.5664V27.4531H301.52V18.5664H299.52ZM300.52 26.4531H264.973V28.4531H300.52V26.4531ZM263.973 27.4531V36.3398H265.973V27.4531H263.973ZM264.973 37.3398H291.634V35.3398H264.973V37.3398ZM290.634 36.3398V45.2266H292.634V36.3398H290.634ZM291.634 46.2266H300.52V44.2266H291.634V46.2266ZM299.52 45.2266V54.1133H301.52V45.2266H299.52ZM300.52 53.1133H291.634V55.1133H300.52V53.1133ZM290.634 54.1133V63H292.634V54.1133H290.634ZM291.634 62H247.2V64H291.634V62Z" fill="white" mask="url(#path-1-outside-1_143_310)" />
        </svg>
    ),
    "scroll-down": (
        <svg width="149" height="159" viewBox="0 0 149 159" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="74.5405" cy="79.3674" r="39.5" stroke="#CCCCCC" />
            <path d="M73.1263 101.782C73.9074 102.563 75.1737 102.563 75.9547 101.782L88.6827 89.0537C89.4637 88.2727 89.4637 87.0063 88.6827 86.2253C87.9016 85.4442 86.6353 85.4442 85.8542 86.2253L74.5405 97.539L63.2268 86.2253C62.4458 85.4442 61.1794 85.4442 60.3984 86.2253C59.6173 87.0063 59.6173 88.2727 60.3984 89.0537L73.1263 101.782ZM72.5405 57.3674V100.367H76.5405V57.3674H72.5405Z" fill="#CCCCCC" />
            <path d="M13.8024 68.3664C12.6595 69.1749 11.3517 69.3209 9.87911 68.8044L10.9279 65.5492C11.6187 65.6877 12.2056 65.5616 12.7077 65.177C13.2098 64.7925 13.5891 64.1372 13.8712 63.2615C14.1226 62.481 14.2047 61.8351 14.0921 61.3365C13.9796 60.838 13.6915 60.4931 13.2156 60.3397C12.892 60.2355 12.5825 60.2829 12.2805 60.4377C11.9723 60.6116 11.7035 60.9242 11.4611 61.3504L9.80743 64.2006C9.13 65.3902 8.36034 66.2139 7.50458 66.6526C6.64268 67.1103 5.71985 67.1702 4.72996 66.8513C3.47355 66.4465 2.66216 65.6388 2.26996 64.3777C1.89067 63.1419 1.98282 61.6167 2.5716 59.7892C3.16651 57.9426 4.05142 56.6308 5.18214 55.8604C6.33189 55.0962 7.66484 54.9373 9.16195 55.3776L8.13159 58.5757C7.47209 58.4053 6.89127 58.5123 6.38239 58.8526C5.88641 59.2182 5.48752 59.8041 5.21766 60.6417C4.97234 61.4031 4.91547 62.0362 5.00898 62.5286C5.12152 63.0271 5.40285 63.3279 5.85972 63.4751C6.20238 63.5855 6.53085 63.5442 6.87646 63.3194C7.2411 63.1006 7.56639 62.7432 7.8646 62.2089L9.81715 58.8876C10.3584 57.9904 11.0225 57.3638 11.7844 57.0209C12.5652 56.6842 13.4126 56.663 14.3644 56.9696C15.6398 57.3806 16.458 58.2325 16.8312 59.4874C17.2172 60.7674 17.0876 62.3436 16.4866 64.2092C15.8487 66.189 14.9645 67.5641 13.8024 68.3664Z" fill="white" />
            <path d="M23.2885 32.8621C23.1159 31.9453 23.1824 31.0567 23.5179 30.1698C23.8668 29.2978 24.4232 28.509 25.2006 27.8181C26.3367 26.8083 27.5276 26.3118 28.7749 26.3002C30.0223 26.2887 31.1401 26.7937 32.1149 27.8003L29.7081 29.9393C29.2149 29.4145 28.7083 29.1155 28.2001 29.0855C27.6919 29.0556 27.2284 29.2267 26.78 29.6252C26.2568 30.0903 26.0259 30.6433 26.1022 31.2712C26.1786 31.899 26.5223 32.5567 27.1468 33.2593C28.5684 34.8589 29.7958 35.1862 30.8722 34.2296C31.3505 33.8044 31.6047 33.3377 31.5914 32.8411C31.5914 32.3594 31.3257 31.8196 30.8508 31.225L33.2576 29.0859C33.9053 29.8748 34.2972 30.6771 34.4034 31.5192C34.5097 32.3613 34.3767 33.1751 34.0345 33.9341C33.6907 34.7214 33.1691 35.399 32.4815 36.0102C31.7041 36.701 30.8969 37.1777 30.0182 37.4234C29.1529 37.6841 28.261 37.6741 27.3442 37.3651C26.4124 37.0694 25.5421 36.4515 24.6918 35.4948C23.9478 34.6576 23.4745 33.7939 23.2885 32.8621Z" fill="white" />
            <path d="M54.8088 14.8894C54.6931 13.8037 54.7007 12.9548 54.8458 12.3181C54.9716 11.6865 55.2924 11.1696 55.8031 10.7482C56.2995 10.3512 57.0582 10.0103 58.1038 9.73975L58.7802 12.3537C57.6772 12.7217 56.836 13.0633 56.3002 13.3879C55.745 13.7175 55.3799 14.1425 55.1803 14.6486C54.9857 15.1741 54.9818 15.8775 55.1686 16.7589L56.2808 21.0573L53.1247 21.8739L50.5395 11.883L53.6181 11.0864L54.6926 14.9194L54.8088 14.8894Z" fill="white" />
            <path d="M82.3995 17.9155C81.6461 17.2827 81.1384 16.4826 80.8477 15.5492C80.557 14.6159 80.5471 13.6264 80.8079 12.5372C81.0593 11.4869 81.5162 10.6091 82.1934 9.92805C82.8705 9.24698 83.6808 8.78288 84.6391 8.55983C85.5779 8.33214 86.5868 8.32688 87.6372 8.57831C88.6875 8.82975 89.5652 9.28664 90.3186 9.91943C91.0526 10.5475 91.5649 11.3283 91.8602 12.2421C92.1556 13.156 92.185 14.1502 91.9335 15.2005C91.6728 16.2897 91.1964 17.1628 90.5146 17.8633C89.8328 18.5638 89.0178 19.0474 88.079 19.2751C87.1208 19.4981 86.1359 19.4886 85.0856 19.2372C84.0353 18.9857 83.1334 18.5436 82.3995 17.9155ZM87.557 16.5589C88.0865 16.151 88.4821 15.4437 88.7242 14.4322C88.957 13.4597 88.9153 12.6888 88.6279 12.0853C88.3405 11.4818 87.8176 11.0893 87.0784 10.9124C86.3004 10.7261 85.6564 10.8393 85.1269 11.2472C84.5973 11.6552 84.2306 12.3283 83.9977 13.3008C83.7556 14.3122 83.7685 15.1173 84.0559 15.7208C84.3433 16.3243 84.8663 16.7169 85.6443 16.9031C86.3835 17.08 87.0275 16.9669 87.557 16.5589Z" fill="white" />
            <path d="M109.223 28.6783L117.851 17.6525L120.434 19.6737L111.807 30.6996L109.223 28.6783Z" fill="white" />
            <path d="M123.396 42.2404L135.095 34.5517L136.897 37.2928L125.197 44.9814L123.396 42.2404Z" fill="white" />
            <path d="M138.41 79.5798C138.733 79.0853 139.145 78.7187 139.667 78.4817C140.189 78.2448 140.759 78.1525 141.376 78.2047C141.974 78.2552 142.5 78.4401 142.955 78.7596C143.41 79.079 143.775 79.5112 144.01 80.053C144.247 80.5748 144.339 81.1445 144.285 81.7823C144.235 82.3801 144.048 82.9264 143.727 83.401C143.408 83.8558 142.976 84.2207 142.474 84.4593C141.972 84.6979 141.42 84.8118 140.822 84.7613C140.205 84.7091 139.66 84.5025 139.185 84.1814C138.711 83.8603 138.366 83.4298 138.127 82.9279C137.89 82.4061 137.798 81.8363 137.848 81.2384C137.902 80.6007 138.089 80.0545 138.41 79.5798Z" fill="white" />
            <path d="M122.636 134.821C121.484 135.12 120.309 135.076 119.155 134.679C118 134.281 116.899 133.477 115.909 132.272C114.36 130.386 113.769 128.595 114.093 126.879C114.433 125.15 115.422 123.613 117.06 122.267L121.635 118.509L130.521 129.327L125.947 133.085C124.896 133.948 123.788 134.522 122.636 134.821ZM118.882 124.265C118.032 124.963 117.553 125.797 117.469 126.798C117.4 127.786 117.808 128.849 118.722 129.961C119.661 131.105 120.638 131.726 121.595 131.82C122.567 131.901 123.491 131.608 124.341 130.91L126.072 129.488L120.613 122.843L118.882 124.265Z" fill="white" />
            <path d="M89.5025 138.034C90.4307 138.36 91.188 138.93 91.7892 139.701C92.3905 140.471 92.7488 141.394 92.8891 142.505C93.0244 143.576 92.9065 144.559 92.5131 145.435C92.1197 146.311 91.5252 147.031 90.7073 147.578C89.9091 148.122 88.9669 148.483 87.8954 148.618C86.8239 148.754 85.8414 148.636 84.9132 148.309C84.0049 147.981 83.2501 147.431 82.6514 146.68C82.0526 145.929 81.6744 145.009 81.5392 143.938C81.3989 142.826 81.5366 141.841 81.9275 140.945C82.3184 140.049 82.9104 139.309 83.7085 138.765C84.5265 138.218 85.4513 137.88 86.5228 137.745C87.5943 137.609 88.5942 137.705 89.5025 138.034ZM85.1551 141.123C84.8035 141.691 84.6829 142.493 84.8132 143.524C84.9384 144.516 85.2494 145.223 85.7312 145.686C86.213 146.15 86.8408 146.333 87.5949 146.237C88.3886 146.137 88.9513 145.804 89.3028 145.236C89.6544 144.667 89.7602 143.908 89.6349 142.916C89.5047 141.884 89.2086 141.135 88.7268 140.672C88.2449 140.208 87.6171 140.026 86.8234 140.126C86.0694 140.221 85.5067 140.554 85.1551 141.123Z" fill="white" />
            <path d="M56.5108 137.122L54.7864 147.863L51.6834 146.243L52.0574 144.273L52.2726 143.212C52.5672 141.696 52.8478 140.467 53.0792 139.505L52.9905 139.458C52.6343 139.882 51.7222 140.895 50.2813 142.489L49.7524 143.07L48.4031 144.532L45.7789 143.162L46.1884 141.21C46.5647 139.625 46.9318 138.056 47.3166 136.498L47.2102 136.442C46.8085 136.909 46.3891 137.367 45.9334 137.851C45.4955 138.345 45.1586 138.688 44.9488 138.917C44.5117 139.365 44.1563 139.744 43.9011 140.017L42.4809 141.441L39.3957 139.832L47.2019 132.264L50.234 133.847L48.8328 140.379L48.9392 140.435L53.4788 135.54L56.5108 137.122Z" fill="white" />
            <path d="M12.6052 111.602C12.619 110.94 12.8125 110.319 13.1765 109.721C13.5404 109.124 14.112 108.62 14.8558 108.23L20.6997 105.163L22.2148 108.049L17.2386 110.661C16.5302 111.033 16.0565 111.507 15.8435 112.048C15.6398 112.607 15.696 113.187 16.0213 113.807C16.3652 114.462 16.8473 114.864 17.4582 114.996C18.0691 115.127 18.7641 114.988 19.5256 114.588L24.3247 112.069L25.8398 114.956L16.702 119.752L15.2241 116.936L18.0026 115.387L17.9469 115.281C17.2629 115.527 16.6024 115.603 15.9653 115.508C15.3376 115.431 14.7519 115.219 14.2437 114.853C13.7449 114.505 13.3513 114.057 13.0632 113.508C12.7472 112.905 12.6007 112.282 12.6052 111.602Z" fill="white" />
        </svg>
    ),
    "discord": (
        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7682 1.33005C16.4382 0.710046 14.9982 0.260046 13.4982 4.59982e-05C13.485 -0.000374605 13.4719 0.00209348 13.4598 0.00727676C13.4477 0.01246 13.4369 0.0202326 13.4282 0.0300462C13.2482 0.360046 13.0382 0.790046 12.8982 1.12005C11.3072 0.880046 9.68916 0.880046 8.09816 1.12005C7.95816 0.780046 7.74816 0.360046 7.55816 0.0300462C7.54816 0.0100462 7.51816 4.59982e-05 7.48816 4.59982e-05C5.98816 0.260046 4.55816 0.710046 3.21816 1.33005C3.20816 1.33005 3.19816 1.34005 3.18816 1.35005C0.468164 5.42005 -0.281836 9.38004 0.0881641 13.3C0.0881641 13.32 0.0981641 13.34 0.118164 13.35C1.91816 14.67 3.64816 15.47 5.35816 16C5.38816 16.01 5.41816 16 5.42816 15.98C5.82816 15.43 6.18816 14.85 6.49816 14.24C6.51816 14.2 6.49816 14.16 6.45816 14.15C5.88816 13.93 5.34816 13.67 4.81816 13.37C4.77816 13.35 4.77816 13.29 4.80816 13.26C4.91816 13.18 5.02816 13.09 5.13816 13.01C5.15816 12.99 5.18816 12.99 5.20816 13C8.64816 14.57 12.3582 14.57 15.7582 13C15.7782 12.99 15.8082 12.99 15.8282 13.01C15.9382 13.1 16.0482 13.18 16.1582 13.27C16.1982 13.3 16.1982 13.36 16.1482 13.38C15.6282 13.69 15.0782 13.94 14.5082 14.16C14.4682 14.17 14.4582 14.22 14.4682 14.25C14.7882 14.86 15.1482 15.44 15.5382 15.99C15.5682 16 15.5982 16.01 15.6282 16C17.3482 15.47 19.0782 14.67 20.8782 13.35C20.8982 13.34 20.9082 13.32 20.9082 13.3C21.3482 8.77004 20.1782 4.84005 17.8082 1.35005C17.7982 1.34005 17.7882 1.33005 17.7682 1.33005ZM7.01816 10.91C5.98816 10.91 5.12816 9.96005 5.12816 8.79005C5.12816 7.62005 5.96816 6.67005 7.01816 6.67005C8.07817 6.67005 8.91816 7.63005 8.90816 8.79005C8.90816 9.96005 8.06816 10.91 7.01816 10.91ZM13.9882 10.91C12.9582 10.91 12.0982 9.96005 12.0982 8.79005C12.0982 7.62005 12.9382 6.67005 13.9882 6.67005C15.0482 6.67005 15.8882 7.63005 15.8782 8.79005C15.8782 9.96005 15.0482 10.91 13.9882 10.91Z" fill="#CCCCCC" />
        </svg>
    ),
    "youtube": (
        <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7452 0H10.864C11.961 0.00400391 17.5198 0.0440433 19.0186 0.447104C19.4717 0.570116 19.8846 0.809888 20.216 1.14246C20.5474 1.47503 20.7857 1.88876 20.9071 2.34229C21.0419 2.84945 21.1367 3.52078 21.2007 4.21345L21.2141 4.35226L21.2434 4.69926L21.2541 4.83806C21.3409 6.05792 21.3515 7.20037 21.3529 7.44995V7.55005C21.3515 7.80897 21.3395 9.02883 21.2434 10.2994L21.2328 10.4395L21.2207 10.5783C21.154 11.3418 21.0553 12.0998 20.9071 12.6577C20.7861 13.1114 20.5479 13.5253 20.2164 13.858C19.885 14.1906 19.4719 14.4303 19.0186 14.5529C17.4704 14.9693 11.586 14.9987 10.7705 15H10.581C10.1686 15 8.46294 14.992 6.67453 14.9306L6.44764 14.9226L6.33152 14.9173L6.1033 14.9079L5.87508 14.8986C4.39363 14.8332 2.98292 14.7277 2.33295 14.5516C1.87982 14.429 1.46685 14.1896 1.13541 13.8572C0.803964 13.5248 0.565682 13.1112 0.444435 12.6577C0.29629 12.1012 0.197526 11.3418 0.130795 10.5783L0.120117 10.4382L0.10944 10.2994C0.0435727 9.39505 0.0070734 8.4888 0 7.58208L0 7.41792C0.00266928 7.13097 0.0133464 6.13934 0.0854169 5.04493L0.0947593 4.90746L0.0987632 4.83806L0.10944 4.69926L0.138802 4.35226L0.152149 4.21345C0.216211 3.52078 0.310971 2.84812 0.445769 2.34229C0.566812 1.88858 0.805003 1.47466 1.13646 1.14203C1.46792 0.809396 1.881 0.569747 2.33428 0.447104C2.98425 0.273601 4.39496 0.16683 5.87641 0.100098L6.1033 0.0907553L6.33286 0.0827478L6.44764 0.0787438L6.67586 0.0694014C7.94605 0.0285275 9.21675 0.00583619 10.4876 0.0013347H10.7452V0ZM8.54169 4.28419V10.7145L14.0898 7.50067L8.54169 4.28419Z" fill="#CCCCCC" />
        </svg>
    ),
    "twitter": (
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.95871 18C15.3186 18 19.8917 11.0731 19.8917 5.07669C19.8917 4.88285 19.8917 4.68625 19.8834 4.49241C20.7737 3.84789 21.5422 3.04993 22.1527 2.13592C21.321 2.50262 20.4397 2.7443 19.5373 2.85312C20.4878 2.28495 21.1997 1.391 21.5407 0.337403C20.6476 0.86647 19.6702 1.23787 18.6512 1.43534C17.9661 0.705724 17.0595 0.222372 16.0719 0.0601592C15.0843 -0.102054 14.0707 0.0659244 13.1882 0.538075C12.3057 1.01023 11.6036 1.7602 11.1905 2.67182C10.7774 3.58345 10.6764 4.60585 10.9033 5.58066C9.09608 5.49005 7.32812 5.02057 5.71406 4.20269C4.1 3.3848 2.67588 2.23678 1.53407 0.833069C0.95442 1.83421 0.777522 3.01843 1.0393 4.14526C1.30108 5.27209 1.98191 6.25705 2.94354 6.90013C2.22294 6.87565 1.51818 6.68215 0.886107 6.33524V6.39754C0.887349 7.44631 1.25067 8.46247 1.91465 9.27429C2.57863 10.0861 3.50254 10.6438 4.53022 10.853C4.14014 10.9605 3.7372 11.014 3.33259 11.0122C3.04735 11.0131 2.76269 10.9867 2.48248 10.9333C2.77294 11.8361 3.33851 12.6254 4.09997 13.1908C4.86143 13.7561 5.78065 14.0691 6.72887 14.0859C5.11803 15.3511 3.12823 16.0373 1.07994 16.034C0.719021 16.0355 0.358351 16.0147 0 15.9716C2.07891 17.297 4.49325 18.0008 6.95871 18Z" fill="#CCCCCC" />
        </svg>

    ),
    "moon": (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.99383 3.70655C3.17225 4.53075 2.52443 5.51145 2.08874 6.59055C1.65305 7.66966 1.43835 8.82522 1.45735 9.98881C1.47635 11.1524 1.72868 12.3003 2.19938 13.3646C2.67008 14.4289 3.34958 15.388 4.19764 16.1849C5.0457 16.9818 6.04506 17.6004 7.13654 18.0041C8.22802 18.4078 9.38941 18.5884 10.5519 18.5351C11.7145 18.4818 12.8545 18.1957 13.9044 17.6939C14.9544 17.192 15.893 16.4845 16.6645 15.6133C14.9693 16.0303 13.1952 16.0028 11.5136 15.5335C9.83214 15.0642 8.30014 14.1691 7.06577 12.9345C5.83141 11.7 4.93642 10.1679 4.46735 8.48637C3.99828 6.8048 3.97099 5.03066 4.38812 3.33546C4.25293 3.45511 4.12144 3.57886 3.99383 3.70655ZM8.09467 11.9068C9.65946 13.4716 11.7619 14.3812 13.9738 14.4501C16.1858 14.5191 18.3408 13.7422 20 12.2779C19.5701 14.0246 18.6837 15.6256 17.4314 16.9169C16.1792 18.2082 14.6062 19.1435 12.8735 19.6268C11.1409 20.1102 9.31087 20.1242 7.57101 19.6676C5.83114 19.2109 4.24393 18.3 2.97199 17.028C1.70004 15.7561 0.789083 14.1689 0.332426 12.429C-0.124231 10.6891 -0.110169 8.85913 0.373171 7.12649C0.856511 5.39384 1.79175 3.82082 3.08309 2.56858C4.37443 1.31633 5.97545 0.429867 7.72213 0C6.25753 1.65948 5.48071 3.81491 5.54993 6.02718C5.61914 8.23945 6.52919 10.3421 8.09467 11.9068Z" fill="#F8F8F8" />
        </svg>


    ),
    "sun": (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33333 2.66667V0.666667C9.33333 0.489856 9.40357 0.320286 9.5286 0.195262C9.65362 0.0702379 9.82319 0 10 0C10.1768 0 10.3464 0.0702379 10.4714 0.195262C10.5964 0.320286 10.6667 0.489856 10.6667 0.666667V2.66667C10.6667 2.84348 10.5964 3.01305 10.4714 3.13807C10.3464 3.2631 10.1768 3.33333 10 3.33333C9.82319 3.33333 9.65362 3.2631 9.5286 3.13807C9.40357 3.01305 9.33333 2.84348 9.33333 2.66667ZM15.3333 10C15.3333 11.0548 15.0205 12.086 14.4345 12.963C13.8485 13.8401 13.0155 14.5237 12.041 14.9274C11.0664 15.331 9.99408 15.4366 8.95952 15.2309C7.92495 15.0251 6.97464 14.5171 6.22876 13.7712C5.48288 13.0254 4.97493 12.075 4.76915 11.0405C4.56336 10.0059 4.66898 8.93356 5.07264 7.95902C5.47631 6.98448 6.1599 6.15153 7.03696 5.5655C7.91402 4.97946 8.94517 4.66667 10 4.66667C11.414 4.66821 12.7697 5.23061 13.7695 6.23047C14.7694 7.23033 15.3318 8.58599 15.3333 10ZM14 10C14 9.20887 13.7654 8.43552 13.3259 7.77772C12.8864 7.11992 12.2616 6.60723 11.5307 6.30448C10.7998 6.00173 9.99556 5.92252 9.21964 6.07686C8.44372 6.2312 7.73098 6.61216 7.17157 7.17157C6.61216 7.73098 6.2312 8.44372 6.07686 9.21964C5.92252 9.99556 6.00173 10.7998 6.30448 11.5307C6.60723 12.2616 7.11992 12.8864 7.77772 13.3259C8.43552 13.7654 9.20887 14 10 14C11.0605 13.9989 12.0773 13.5771 12.8272 12.8272C13.5771 12.0773 13.9989 11.0605 14 10ZM4.195 5.13833C4.32009 5.26343 4.48976 5.3337 4.66667 5.3337C4.84358 5.3337 5.01324 5.26343 5.13833 5.13833C5.26343 5.01324 5.3337 4.84358 5.3337 4.66667C5.3337 4.48976 5.26343 4.32009 5.13833 4.195L3.805 2.86167C3.67991 2.73657 3.51024 2.6663 3.33333 2.6663C3.15642 2.6663 2.98676 2.73657 2.86167 2.86167C2.73657 2.98676 2.6663 3.15642 2.6663 3.33333C2.6663 3.51024 2.73657 3.67991 2.86167 3.805L4.195 5.13833ZM4.195 14.8617L2.86167 16.195C2.73657 16.3201 2.6663 16.4898 2.6663 16.6667C2.6663 16.8436 2.73657 17.0132 2.86167 17.1383C2.98676 17.2634 3.15642 17.3337 3.33333 17.3337C3.51024 17.3337 3.67991 17.2634 3.805 17.1383L5.13833 15.805C5.20027 15.7431 5.24941 15.6695 5.28293 15.5886C5.31645 15.5077 5.3337 15.4209 5.3337 15.3333C5.3337 15.2457 5.31645 15.159 5.28293 15.0781C5.24941 14.9971 5.20027 14.9236 5.13833 14.8617C5.07639 14.7997 5.00286 14.7506 4.92193 14.7171C4.841 14.6836 4.75426 14.6663 4.66667 14.6663C4.57907 14.6663 4.49233 14.6836 4.4114 14.7171C4.33047 14.7506 4.25694 14.7997 4.195 14.8617ZM15.3333 5.33333C15.4209 5.3334 15.5076 5.31622 15.5886 5.28276C15.6695 5.2493 15.743 5.20022 15.805 5.13833L17.1383 3.805C17.2634 3.67991 17.3337 3.51024 17.3337 3.33333C17.3337 3.15642 17.2634 2.98676 17.1383 2.86167C17.0132 2.73657 16.8436 2.6663 16.6667 2.6663C16.4898 2.6663 16.3201 2.73657 16.195 2.86167L14.8617 4.195C14.7683 4.28824 14.7047 4.40707 14.679 4.53646C14.6532 4.66585 14.6664 4.79998 14.7169 4.92186C14.7674 5.04374 14.8529 5.1479 14.9627 5.22115C15.0724 5.29439 15.2014 5.33344 15.3333 5.33333ZM15.805 14.8617C15.6799 14.7366 15.5102 14.6663 15.3333 14.6663C15.1564 14.6663 14.9868 14.7366 14.8617 14.8617C14.7366 14.9868 14.6663 15.1564 14.6663 15.3333C14.6663 15.5102 14.7366 15.6799 14.8617 15.805L16.195 17.1383C16.2569 17.2003 16.3305 17.2494 16.4114 17.2829C16.4923 17.3165 16.5791 17.3337 16.6667 17.3337C16.7543 17.3337 16.841 17.3165 16.9219 17.2829C17.0029 17.2494 17.0764 17.2003 17.1383 17.1383C17.2003 17.0764 17.2494 17.0029 17.2829 16.9219C17.3165 16.841 17.3337 16.7543 17.3337 16.6667C17.3337 16.5791 17.3165 16.4923 17.2829 16.4114C17.2494 16.3305 17.2003 16.2569 17.1383 16.195L15.805 14.8617ZM3.33333 10C3.33333 9.82319 3.2631 9.65362 3.13807 9.5286C3.01305 9.40357 2.84348 9.33333 2.66667 9.33333H0.666667C0.489856 9.33333 0.320286 9.40357 0.195262 9.5286C0.0702379 9.65362 0 9.82319 0 10C0 10.1768 0.0702379 10.3464 0.195262 10.4714C0.320286 10.5964 0.489856 10.6667 0.666667 10.6667H2.66667C2.84348 10.6667 3.01305 10.5964 3.13807 10.4714C3.2631 10.3464 3.33333 10.1768 3.33333 10ZM10 16.6667C9.82319 16.6667 9.65362 16.7369 9.5286 16.8619C9.40357 16.987 9.33333 17.1565 9.33333 17.3333V19.3333C9.33333 19.5101 9.40357 19.6797 9.5286 19.8047C9.65362 19.9298 9.82319 20 10 20C10.1768 20 10.3464 19.9298 10.4714 19.8047C10.5964 19.6797 10.6667 19.5101 10.6667 19.3333V17.3333C10.6667 17.1565 10.5964 16.987 10.4714 16.8619C10.3464 16.7369 10.1768 16.6667 10 16.6667ZM19.3333 9.33333H17.3333C17.1565 9.33333 16.987 9.40357 16.8619 9.5286C16.7369 9.65362 16.6667 9.82319 16.6667 10C16.6667 10.1768 16.7369 10.3464 16.8619 10.4714C16.987 10.5964 17.1565 10.6667 17.3333 10.6667H19.3333C19.5101 10.6667 19.6797 10.5964 19.8047 10.4714C19.9298 10.3464 20 10.1768 20 10C20 9.82319 19.9298 9.65362 19.8047 9.5286C19.6797 9.40357 19.5101 9.33333 19.3333 9.33333Z" fill="#F8F8F8" />
        </svg>
    )
}

const Icon = ({ icon, width, height, fill, ...rest }: PropsType) => {
    return (
        <IconWrapper width={width} height={height} fill={fill} {...rest}>
            {icons[icon]}
        </IconWrapper>
    )
}

export default Icon;