import React from 'react'

const sanPham = (props) => {
    return(
        <div>
            <p>Mã Sản Phẩm: { props.masanpham }. Tên Sản Phẩm: { props.tensanpham }. Gía Sản Phẩm: { props.giasanpham }</p>
            <p>{ props.children }</p>
        </div>
    );
};
export default sanPham;