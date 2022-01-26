function LikeCoinIconPinbar(props) {
  return (
    <div
      onClick={props.onClick}
      style={props.paddingLeft ? { paddingLeft: props.paddingLeft } : {}}
    >
      <svg
        width='36'
        height='36'
        viewBox='0 0 36 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16.8404 13.4694C16.4883 13.4694 16.2066 13.1838 16.2027 12.8357C16.2027 12.6518 16.281 12.4797 16.4179 12.3584C18.2134 10.7741 19.0075 9.46368 19.1483 9.22506C19.6764 8.30969 20.5175 7.82854 21.4172 7.9498C21.7653 8.00848 22.0001 8.33316 21.9414 8.68131C21.8866 9.01382 21.5815 9.24853 21.2451 9.20941C20.7248 9.139 20.3766 9.63971 20.2515 9.85486C20.0989 10.1287 19.2031 11.5956 17.2589 13.309C17.1416 13.4146 16.9929 13.4694 16.8404 13.4694Z'
          fill={props.color}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M6.13763 24.2426C5.78556 24.2426 5.5 23.9609 5.5 23.6089C5.5 23.4211 5.58215 23.2411 5.7308 23.1199C6.47013 22.537 7.2525 22.0167 8.07007 21.5551C8.38302 21.3987 8.76638 21.5238 8.92285 21.8407C9.07932 22.1537 8.95414 22.537 8.63729 22.6935C7.90577 23.1081 7.20556 23.5776 6.54446 24.0978C6.43101 24.1956 6.28628 24.2504 6.13763 24.2504'
          fill={props.color}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M22.1214 18.2144C22.3757 18.4492 22.6651 18.3514 22.9351 18.0932C24.7775 16.3329 26.7295 13.5828 27.375 12.1511C27.5119 11.846 27.7935 11.6778 28.0987 11.7951C28.4546 11.9399 28.4468 12.5462 28.126 13.2112C27.2772 14.9637 26.0958 16.8922 23.7604 19.3058C23.5649 19.4897 23.5531 19.7948 23.737 19.9904C23.7487 20.0021 23.7604 20.0139 23.7722 20.0256C23.9795 20.2134 24.312 20.1977 24.625 19.8809C25.6186 18.8951 26.53 17.8311 27.3515 16.7006C27.5314 16.4385 27.7466 16.3407 27.9617 16.3837C28.2669 16.4463 28.3177 16.7397 28.2238 17.0917C28.0713 17.6629 26.4635 19.7753 25.8259 20.4833C24.1008 22.4118 22.3717 23.4641 19.0467 25.1931C17.8849 25.7956 17.0165 26.3745 16.4923 27.2625C16.0111 28.0683 15.8703 28.3304 15.8233 28.436C15.6278 28.8311 15.7842 29.3084 16.1754 29.5118C16.281 29.5627 16.3984 29.59 16.5118 29.5861C16.8287 29.5861 17.1143 29.3944 17.2355 29.105C17.2355 29.0932 17.212 29.1167 17.8458 28.0605C18.3152 27.3055 18.9958 26.7031 19.8017 26.3354C23.1267 24.8137 24.488 23.6206 26.4205 21.6881C27.3006 20.808 28.5172 18.9186 28.8497 18.3631C29.7807 16.7984 29.2918 15.4566 28.4507 15.2297C28.392 15.2141 28.3608 15.1554 28.3764 15.1006C28.3803 15.0928 28.3803 15.085 28.3842 15.0772C29.0336 13.9623 29.327 13.1956 29.4522 12.5971C29.6165 11.7873 29.3896 10.8015 28.2747 10.5668C28.216 10.5512 28.1808 10.4964 28.1965 10.4377V10.4338C28.2669 10.1796 28.3334 9.85487 28.3842 9.64363C28.6189 8.59135 27.95 7.63686 27.152 7.46866C26.6317 7.3513 26.0841 7.46474 25.6538 7.7816C25.5912 7.82072 25.509 7.8129 25.4621 7.75813C25.2509 7.51951 24.9496 7.38259 24.6328 7.37086C23.9365 7.35521 23.2519 7.57036 22.7512 8.6422C22.3913 9.40501 21.8593 10.4377 20.2946 12.1707C18.8394 13.7706 16.817 15.3432 15.5691 16.1607C15.35 16.3055 15.0449 16.2703 15.0801 15.9769C15.1388 15.5192 15.6395 12.378 15.7256 11.4548C15.8625 9.95267 15.0566 9.27201 14.153 9.14683C13.4098 9.04512 12.2792 9.26027 11.6573 10.958C11.2935 11.9516 10.5385 13.5828 9.89693 16.2155C9.44707 18.0658 9.37275 20.2212 9.78349 22.7013C9.81087 22.85 9.77957 23.0025 9.70134 23.1316C9.20845 23.9453 8.48085 25.0132 8.08184 25.9481C7.91363 26.3237 8.05837 26.7657 8.41435 26.9691C8.78988 27.1764 9.26321 27.0395 9.47054 26.664C9.47836 26.6483 9.48619 26.6327 9.49401 26.6131C9.73263 26.1085 10.2255 25.1579 10.4211 24.7628C10.6636 24.3012 10.8827 23.824 11.0705 23.335C11.1526 23.0729 11.1996 22.7717 11.0509 22.0872C10.7967 20.9293 10.7106 18.7621 11.18 16.8492C11.6925 14.8698 12.3184 12.9178 13.0538 11.0089C13.2415 10.5394 13.5115 10.3986 13.7814 10.4182C14.0513 10.4377 14.5637 10.5707 14.4151 11.5252C14.153 13.2386 13.7814 15.4136 13.6523 16.1451C13.5897 16.505 13.5232 17.3421 14.1843 17.7294C14.7007 18.0345 15.2718 17.8624 15.8977 17.4438C17.3138 16.5011 19.7547 14.5764 21.2843 12.8552C22.8959 11.048 23.4045 9.97222 23.8191 8.99818C24.0069 8.55614 24.492 8.55614 24.6602 8.607C24.8323 8.65394 25.0396 8.88865 24.8949 9.37763C24.5389 10.5629 23.0681 13.2855 20.2398 15.8361C19.919 16.1255 19.966 16.4659 20.1264 16.6458C20.2907 16.8257 20.584 16.9314 20.9048 16.6458C22.8646 14.9402 24.4489 12.8474 25.5521 10.4964C25.7711 10.0348 25.9589 9.56148 26.1115 9.0725C26.2484 8.66959 26.5613 8.52485 26.7765 8.57179C27.0816 8.63829 27.2889 8.95515 27.1911 9.47542C27.0346 10.1443 26.8038 10.7937 26.4987 11.4079C25.6851 13.1369 23.9639 15.4527 22.1057 17.4399C21.8945 17.6355 21.8828 17.9641 22.0823 18.1753C22.1057 18.1949 22.1136 18.2027 22.1214 18.2144Z'
          fill={props.color}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M10.6245 9.59668C10.7222 9.51062 10.6831 9.39718 10.6557 9.31112C10.5188 8.87299 9.74038 7.04617 9.53305 6.67846C9.47829 6.53763 9.32182 6.46331 9.18099 6.51807C9.17317 6.52199 9.16925 6.52199 9.16143 6.5259C8.97758 6.59631 8.75069 6.76452 8.39862 7.06964C8.04656 7.37476 7.85488 7.57818 7.75709 7.7503C7.67885 7.87939 7.71797 8.05151 7.84706 8.12975C7.85097 8.13366 7.85879 8.13757 7.8627 8.13757C8.19912 8.38793 9.90859 9.40109 10.3272 9.59277C10.4093 9.63189 10.5188 9.68274 10.6166 9.59277L10.6245 9.59668Z'
          fill={props.color}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M9.95948 10.7937C9.93601 10.6646 9.82257 10.6411 9.7326 10.6177C9.28665 10.5081 7.319 10.2226 6.90044 10.2069C6.6892 10.1991 6.59531 10.2969 6.57184 10.4416C6.53664 10.6372 6.56011 10.9189 6.64226 11.3766C6.67746 11.6895 6.75961 11.9907 6.89261 12.2763C6.96303 12.4132 7.12732 12.468 7.26424 12.3976C7.27206 12.3936 7.27597 12.3897 7.2838 12.3858C7.67498 12.2333 9.42748 11.2905 9.80692 11.0362C9.88125 10.9893 9.97904 10.9267 9.95948 10.7937Z'
          fill={props.color}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M24.7227 25.7721C24.5936 25.7799 24.5545 25.8933 24.5232 25.9794C24.3706 26.4097 23.8777 28.3343 23.8151 28.7529C23.7682 28.8976 23.8503 29.0541 23.999 29.101C24.0068 29.101 24.0107 29.105 24.0185 29.105C24.3276 29.1636 24.6405 29.1715 24.9535 29.1323C25.4111 29.101 25.6967 29.0619 25.8766 28.9798C26.0175 28.925 26.0918 28.7685 26.037 28.6238C26.0331 28.616 26.0331 28.6121 26.0292 28.6042C25.9119 28.2013 25.1686 26.3589 24.9535 25.952C24.9104 25.8699 24.8596 25.7643 24.7305 25.7721H24.7227Z'
          fill={props.color}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M25.8375 24.8802C25.7749 24.9975 25.8532 25.0875 25.9119 25.1579C26.1974 25.5178 27.5861 26.9339 27.9108 27.2038C28.0125 27.3173 28.1885 27.329 28.302 27.2273C28.3059 27.2234 28.3098 27.2195 28.3176 27.2156C28.5289 26.9848 28.701 26.7187 28.8262 26.4332C29.0413 26.0224 29.1508 25.7604 29.1743 25.5648C29.1939 25.4122 29.1391 25.2948 28.9318 25.2401C28.5289 25.1305 26.5651 24.8098 26.1074 24.7824C26.0175 24.7824 25.8962 24.7628 25.8375 24.8802Z'
          fill={props.color}
        />
      </svg>
    </div>
  );
}

export default LikeCoinIconPinbar;
