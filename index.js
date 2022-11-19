let cursor_position = ""

window.onload = function() {
    document.body.addEventListener('mousemove', (e)=>handlemousemove(e))
}

function handlemousemove(e) {
    position = get_cursor_position(e)
    if(position !== cursor_position) {
        cursor_position = position
        update_classes()
    }
}

function get_cursor_position(e) {
    const window_height = window.innerHeight, window_width = window.innerWidth
    const cursor_x = e.clientX, cursor_y = e.clientY
    let position = ''
    if(cursor_x<window_width/2 && cursor_y<window_height/2) position = 'top_left'
    else if(cursor_x<window_width/2 && cursor_y>window_height/2) position = 'bottom_left'
    else if(cursor_x>window_width/2 && cursor_y<window_height/2) position = 'top_right'
    else if(cursor_x>window_width/2 && cursor_y>window_height/2) position = 'bottom_right'
    return position
}

function update_classes() {
    const topLeft = document.querySelector('.section.topLeft')
    const topRight = document.querySelector('.section.topRight')
    const bottomLeft = document.querySelector('.section.bottomLeft')
    const bottomRight = document.querySelector('.section.bottomRight')
    const centerContainer = document.querySelector('.centerContainer')

    topLeft.classList.remove('leanCornerTopLeft', 'leanCornerTopRight', 'leanCornerBottomLeft', 'leanCornerBottomRight')
    bottomLeft.classList.remove('leanCornerTopLeft', 'leanCornerTopRight', 'leanCornerBottomLeft', 'leanCornerBottomRight')
    topRight.classList.remove('leanCornerTopLeft', 'leanCornerTopRight', 'leanCornerBottomLeft', 'leanCornerBottomRight')
    bottomRight.classList.remove('leanCornerTopLeft', 'leanCornerTopRight', 'leanCornerBottomLeft', 'leanCornerBottomRight')
    switch(cursor_position) {
        case 'top_left': {
            topLeft.classList.add('leanCornerTopLeft')
            centerContainer.classList.remove('leanCenterTopLeft', 'leanCenterTopRight', 'leanCenterBottomLeft', 'leanCenterBottomRight')
            centerContainer.classList.add('leanCenterTopLeft')
            break
        }
        case 'top_right': {
            topRight.classList.add('leanCornerTopRight')
            centerContainer.classList.remove('leanCenterTopLeft', 'leanCenterTopRight', 'leanCenterBottomLeft', 'leanCenterBottomRight')
            centerContainer.classList.add('leanCenterTopRight')
            break
        }
        case 'bottom_left': {
            bottomLeft.classList.add('leanCornerBottomLeft')
            centerContainer.classList.remove('leanCenterTopLeft', 'leanCenterTopRight', 'leanCenterBottomLeft', 'leanCenterBottomRight')
            centerContainer.classList.add('leanCenterBottomLeft')
            break
        }
        case 'bottom_right': {
            bottomRight.classList.add('leanCornerBottomRight')
            centerContainer.classList.remove('leanCenterTopLeft', 'leanCenterTopRight', 'leanCenterBottomLeft', 'leanCenterBottomRight')
            centerContainer.classList.add('leanCenterBottomRight')
            break
        }
        default: return
    }
}